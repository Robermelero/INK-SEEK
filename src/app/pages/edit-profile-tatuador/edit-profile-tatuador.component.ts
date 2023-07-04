import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit-profile-tatuador',
  templateUrl: './edit-profile-tatuador.component.html',
  styleUrls: ['./edit-profile-tatuador.component.css']
})
export class EditProfileTatuadorComponent {
  isTatuador: boolean = false;
  public usuario : User;

  //constructor
  constructor(public userService: UserService){
    this.usuario = this.userService.user;
    console.log(this.usuario)
  }

}
