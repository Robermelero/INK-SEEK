import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { PreRegisterComponent } from './pages/pre-register/pre-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { EditProfileTatuadorComponent } from './pages/edit-profile-tatuador/edit-profile-tatuador.component';
import { EditProfileUserComponent } from './pages/edit-profile-user/edit-profile-user.component';
import { ProfileTatuadorPropiaComponent } from './pages/profile-tatuador-propia/profile-tatuador-propia.component';
import { ProfileTatuadorExternaComponent } from './pages/profile-tatuador-externa/profile-tatuador-externa.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CitaComponent } from './components/cita/cita.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { AddCitaComponent } from './pages/add-cita/add-cita.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { AddProductoComponent } from './pages/add-producto/add-producto.component';
import { TablonComponent } from './pages/tablon/tablon.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';
import { OpinionesComponent } from './pages/opiniones/opiniones.component';
import { ModalRespuestaComponent } from './pages/modal-respuesta/modal-respuesta.component';
import { ModalAddOpinionComponent } from './pages/modal-add-opinion/modal-add-opinion.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ConversacionChatComponent } from './pages/conversacion-chat/conversacion-chat.component';
import { OnBoardingComponent } from './pages/on-boarding/on-boarding.component';
import { AddFotosComponent } from './pages/add-fotos/add-fotos.component';
import { DescubrirArtistaComponent } from './pages/descubrir-artista/descubrir-artista.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ConfirmarFotoComponent } from './pages/confirmar-foto/confirmar-foto.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstrellasComponent } from './pages/estrellas/estrellas.component';
import { CerrarMenuDirective } from './cerrar-menu.directive';
import { ModificarCitaComponent } from './pages/modificar-cita/modificar-cita.component';
import { CamaraComponent } from './pages/camara/camara.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    PreRegisterComponent,
    RegisterComponent,
    HomeComponent,
    EditProfileTatuadorComponent,
    EditProfileUserComponent,
    ProfileTatuadorPropiaComponent,
    ProfileTatuadorExternaComponent,
    CalendarComponent,
    CitaComponent,
    CalendarioComponent,
    AddCitaComponent,
    TiendaComponent,
    AddProductoComponent,
    TablonComponent,
    AddEventoComponent,
    OpinionesComponent,
    ModalRespuestaComponent,
    ModalAddOpinionComponent,
    ChatsComponent,
    ConversacionChatComponent,
    OnBoardingComponent,
    AddFotosComponent,
    DescubrirArtistaComponent,
    GaleriaComponent,
    ConfirmarFotoComponent,
    AboutUsComponent,
    RecomendacionesComponent,
    EstrellasComponent,
    CerrarMenuDirective,
    ModificarCitaComponent,
    CamaraComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
