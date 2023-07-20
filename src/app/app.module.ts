import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { DashBoardViewComponent } from './views/dash-board-view/dash-board-view.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { ListRoutesGerenteComponent } from './components/dashboard/gerente/list-routes-gerente/list-routes-gerente.component';
import { ListRoutesRecepcionistaComponent } from './components/dashboard/recepcionista/list-routes-recepcionista/list-routes-recepcionista.component';
import { IndexGerenteComponent } from './views/gerente/index-gerente/index-gerente.component';
import { IndexRecepcionistaComponent } from './views/recepcionista/index-recepcionista/index-recepcionista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginService } from './services/api/auth/login.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageInfoService } from './services/local/storage-info.service';
import { LogoComponent } from './components/icons/logo/logo.component';
import { HomeGerenteComponent } from './views/gerente/home-gerente/home-gerente.component';
import { LogoDarkComponent } from './components/icons/logo-dark/logo-dark.component';
import { GerenteHabitacionesViewComponent } from './views/gerente/habitaciones/gerente-habitaciones-view/gerente-habitaciones-view.component';
import { GerenteRecepcionistasViewComponent } from './views/gerente/recepcionistas/gerente-recepcionistas-view/gerente-recepcionistas-view.component';
import { GerenteReportesViewComponent } from './views/gerente/reportes/gerente-reportes-view/gerente-reportes-view.component';
import { HeaderComponent } from './components/dashboard/header/header.component';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginViewComponent,
    DashBoardViewComponent,
    SidebarComponent,
    ListRoutesGerenteComponent,
    ListRoutesRecepcionistaComponent,
    IndexGerenteComponent,
    IndexRecepcionistaComponent,
    LogoComponent,
    HomeGerenteComponent,
    LogoDarkComponent,
    GerenteHabitacionesViewComponent,
    GerenteRecepcionistasViewComponent,
    GerenteReportesViewComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, StorageInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
