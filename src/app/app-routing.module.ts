import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { DashBoardViewComponent } from './views/dash-board-view/dash-board-view.component';
import { IndexGerenteComponent } from './views/gerente/index-gerente/index-gerente.component';
import { IndexRecepcionistaComponent } from './views/recepcionista/index-recepcionista/index-recepcionista.component';
import { HomeGerenteComponent } from './views/gerente/home-gerente/home-gerente.component';
import { GerenteHabitacionesViewComponent } from './views/gerente/habitaciones/gerente-habitaciones-view/gerente-habitaciones-view.component';
import { GerenteRecepcionistasViewComponent } from './views/gerente/recepcionistas/gerente-recepcionistas-view/gerente-recepcionistas-view.component';
import { GerenteReportesViewComponent } from './views/gerente/reportes/gerente-reportes-view/gerente-reportes-view.component';
import { GerenteHabitacionesCreateViewComponent } from './views/gerente/habitaciones/gerente-habitaciones-create-view/gerente-habitaciones-create-view.component';
import { GerenteHabitacionesViewRouterComponent } from './views/gerente/habitaciones/gerente-habitaciones-view-router/gerente-habitaciones-view-router.component';
import { GerenteHabitacionesShowViewComponent } from './views/gerente/habitaciones/gerente-habitaciones-show-view/gerente-habitaciones-show-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginViewComponent
  },
  {
    path: 'dashboard',
    component: DashBoardViewComponent,
    children: [
      {
        path: 'gerente',
        component: IndexGerenteComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            component: HomeGerenteComponent
          },
          {
            path: 'habitaciones',
            component: GerenteHabitacionesViewRouterComponent, // Index router
            children: [
              {
                path: '',
                component: GerenteHabitacionesViewComponent
              },
              {
                path: 'create',
                component: GerenteHabitacionesCreateViewComponent
              },
              {
                path: ':id',
                component: GerenteHabitacionesShowViewComponent
              }
            ]
          },
          {
            path: 'recepcionistas',
            component: GerenteRecepcionistasViewComponent
          },
          {
            path: 'reportes',
            component: GerenteReportesViewComponent
          }
        ]
      },
      {
        path: 'recepcionista',
        component: IndexRecepcionistaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
