import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { UserService } from 'src/app/shared/user.service';
import { CitaService } from 'src/app/shared/cita.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  is_Tatuador: boolean = true;
  citasAgendadas: Cita[] = [];
  viewDate: Date = new Date();
  calendarDays: any[] = [];
  selectedDayCitas: Cita[] = [];
  currentDate: Date = new Date();

  constructor(public userService: UserService, public citaService: CitaService) {
    // this.is_Tatuador = userService.is_Tatuador;
  }

  getCurrentDate(): Date {
    return new Date();
  }

  getTextColor(day: any): string {
    if (this.isSameDate(day.date, this.currentDate)) {
      return 'red'; 
    } else if (day.hasCitas) {
      return 'blue'; 
    } else {
      return day.textColor; 
    }
  }

  ngOnInit(): void {
    this.currentDate = this.getCurrentDate();
    this.getCitasAgendadas();
    this.generateCalendarDays();
  }

  generateCalendarDays() {
    const startOfMonth = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 0);
    const endOfMonth = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 0);
    const daysInMonth = endOfMonth.getDate();
    const startDayOfWeek = startOfMonth.getDay();

    this.calendarDays = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      this.calendarDays.push({ date: null, textColor: 'white', hasCitas: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), i);
      const day: any = {
        date: currentDate,
        textColor: this.isWeekend(currentDate) ? 'var(--principal)' : 'white',
        hasCitas: this.hasCitas(currentDate)
      };

      this.calendarDays.push(day);
    }

    const lastDayOfWeek = endOfMonth.getDay();
    for (let i = lastDayOfWeek + 1; i <= 6; i++) {
      this.calendarDays.push({ date: null, textColor: 'white', hasCitas: false });
    }
  }

  isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 6 || day === 0;
  }

  changeMonth(amount: number) {
    const currentMonth = this.viewDate.getMonth();
    const newMonth = currentMonth + amount;
    this.viewDate = new Date(this.viewDate.getFullYear(), newMonth);
    this.generateCalendarDays();
  }

  getCitasAgendadas(): void {
    this.citaService.getCitas().subscribe(
      citas => {
        this.citasAgendadas = citas;
        this.generateCalendarDays();
      },
      error => {
        console.log('Error al obtener las citas:', error);
      }
    );
  }

  hasCitas(date: Date): boolean {
    return this.citasAgendadas.some(cita => this.isSameDate(cita.date, date));
  }

  handleDayClick(day: any) {
    console.log('Selected Day:', day);
    this.selectedDayCitas = this.citasAgendadas.filter(cita => this.isSameDate(cita.date, day.date));
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}
