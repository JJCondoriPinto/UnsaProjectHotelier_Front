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
import { ActionsHeaderTableComponent } from './components/dashboard/actions-header-table/actions-header-table.component';
import { GerenteHabitacionesCreateViewComponent } from './views/gerente/habitaciones/gerente-habitaciones-create-view/gerente-habitaciones-create-view.component';
import { GerenteHabitacionesViewRouterComponent } from './views/gerente/habitaciones/gerente-habitaciones-view-router/gerente-habitaciones-view-router.component';
import { GerenteHabitacionesShowViewComponent } from './views/gerente/habitaciones/gerente-habitaciones-show-view/gerente-habitaciones-show-view.component';
import { GerenteRecepcionistasViewRouterComponent } from './views/gerente/recepcionistas/gerente-recepcionistas-view-router/gerente-recepcionistas-view-router.component';
import { GerenteRecepcionistasCreateViewComponent } from './views/gerente/recepcionistas/gerente-recepcionistas-create-view/gerente-recepcionistas-create-view.component';
import { GerenteRecepcionistasShowViewComponent } from './views/gerente/recepcionistas/gerente-recepcionistas-show-view/gerente-recepcionistas-show-view.component';
import { HomeRecepcionistaComponent } from './views/recepcionista/home-recepcionista/home-recepcionista.component';
import { RecepcionistaHabitacionesViewComponent } from './views/recepcionista/habitaciones/recepcionista-habitaciones-view/recepcionista-habitaciones-view.component';
import { RecepcionistaHuespedesViewComponent } from './views/recepcionista/huespedes/recepcionista-huespedes-view/recepcionista-huespedes-view.component';
import { RecepcionistaReservasViewComponent } from './views/recepcionista/reservas/recepcionista-reservas-view/recepcionista-reservas-view.component';
import { RecepcionistaCheckinsViewComponent } from './views/recepcionista/checkins/recepcionista-checkins-view/recepcionista-checkins-view.component';
import { RecepcionistaCheckoutsViewComponent } from './views/recepcionista/checkouts/recepcionista-checkouts-view/recepcionista-checkouts-view.component';
import { RecepcionistaHabitacionesShowViewComponent } from './views/recepcionista/habitaciones/recepcionista-habitaciones-show-view/recepcionista-habitaciones-show-view.component';
import { RecepcionistaHabitacionesViewRouterComponent } from './views/recepcionista/habitaciones/recepcionista-habitaciones-view-router/recepcionista-habitaciones-view-router.component';
import { DeleteIconComponent } from './components/icons/delete-icon/delete-icon.component';
import { EditIconComponent } from './components/icons/edit-icon/edit-icon.component';
import { RecepcionistaHuespedesViewRouterComponent } from './views/recepcionista/huespedes/recepcionista-huespedes-view-router/recepcionista-huespedes-view-router.component';
import { RecepcionistaHuespedesShowViewComponent } from './views/recepcionista/huespedes/recepcionista-huespedes-show-view/recepcionista-huespedes-show-view.component';
import { RecepcionistaAcompanantesViewComponent } from './views/recepcionista/acompanantes/recepcionista-acompanantes-view/recepcionista-acompanantes-view.component';
import { RecepcionistaAcompanantesShowViewComponent } from './views/recepcionista/acompanantes/recepcionista-acompanantes-show-view/recepcionista-acompanantes-show-view.component';
import { RecepcionistaAcompanantesCreateViewComponent } from './views/recepcionista/acompanantes/recepcionista-acompanantes-create-view/recepcionista-acompanantes-create-view.component';
import { CheckinIconComponent } from './components/icons/checkin-icon/checkin-icon.component';
import { CheckoutIconComponent } from './components/icons/checkout-icon/checkout-icon.component';
import { CheckIconComponent } from './components/icons/check-icon/check-icon.component';
import { RecepcionistaReservasCreateViewComponent } from './views/recepcionista/reservas/recepcionista-reservas-create-view/recepcionista-reservas-create-view.component';
import { RecepcionistaReservasShowViewComponent } from './views/recepcionista/reservas/recepcionista-reservas-show-view/recepcionista-reservas-show-view.component';
import { RecepcionistaReservasViewRouterComponent } from './views/recepcionista/reservas/recepcionista-reservas-view-router/recepcionista-reservas-view-router.component';
import { CancelIconComponent } from './components/icons/cancel-icon/cancel-icon.component';
import { ReturnIconComponent } from './components/icons/return-icon/return-icon.component';
import { RecepcionistaHuespedesCreateViewComponent } from './views/recepcionista/huespedes/recepcionista-huespedes-create-view/recepcionista-huespedes-create-view.component';
import { ListHabitacionesComponent } from './components/dashboard/recepcionista/list-habitaciones/list-habitaciones.component';
import { RecepcionistaReservasCreateFormComponent } from './views/recepcionista/reservas/recepcionista-reservas-create-form/recepcionista-reservas-create-form.component';

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
    ActionsHeaderTableComponent,
    GerenteHabitacionesCreateViewComponent,
    GerenteHabitacionesViewRouterComponent,
    GerenteHabitacionesShowViewComponent,
    GerenteRecepcionistasViewRouterComponent,
    GerenteRecepcionistasCreateViewComponent,
    GerenteRecepcionistasShowViewComponent,
    HomeRecepcionistaComponent,
    RecepcionistaHabitacionesViewComponent,
    RecepcionistaHuespedesViewComponent,
    RecepcionistaReservasViewComponent,
    RecepcionistaCheckinsViewComponent,
    RecepcionistaCheckoutsViewComponent,
    RecepcionistaHabitacionesShowViewComponent,
    RecepcionistaHabitacionesViewRouterComponent,
    DeleteIconComponent,
    EditIconComponent,
    RecepcionistaHuespedesViewRouterComponent,
    RecepcionistaHuespedesShowViewComponent,
    RecepcionistaAcompanantesViewComponent,
    RecepcionistaAcompanantesShowViewComponent,
    RecepcionistaAcompanantesCreateViewComponent,
    CheckinIconComponent,
    CheckoutIconComponent,
    CheckIconComponent,
    RecepcionistaReservasCreateViewComponent,
    RecepcionistaReservasShowViewComponent,
    RecepcionistaReservasViewRouterComponent,
    CancelIconComponent,
    ReturnIconComponent,
    RecepcionistaHuespedesCreateViewComponent,
    ListHabitacionesComponent,
    RecepcionistaReservasCreateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService, StorageInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
