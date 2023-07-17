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

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    DashBoardViewComponent,
    SidebarComponent,
    ListRoutesGerenteComponent,
    ListRoutesRecepcionistaComponent,
    IndexGerenteComponent,
    IndexRecepcionistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
