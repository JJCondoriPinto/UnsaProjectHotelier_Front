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
import { GerenteRecepcionistasViewRouterComponent } from './views/gerente/recepcionistas/gerente-recepcionistas-view-router/gerente-recepcionistas-view-router.component';
import { GerenteRecepcionistasCreateViewComponent } from './views/gerente/recepcionistas/gerente-recepcionistas-create-view/gerente-recepcionistas-create-view.component';
import { GerenteRecepcionistasShowViewComponent } from './views/gerente/recepcionistas/gerente-recepcionistas-show-view/gerente-recepcionistas-show-view.component';
import { HomeRecepcionistaComponent } from './views/recepcionista/home-recepcionista/home-recepcionista.component';
import { RecepcionistaHabitacionesViewComponent } from './views/recepcionista/habitaciones/recepcionista-habitaciones-view/recepcionista-habitaciones-view.component';
import { RecepcionistaHuespedesViewComponent } from './views/recepcionista/huespedes/recepcionista-huespedes-view/recepcionista-huespedes-view.component';
import { RecepcionistaReservasViewComponent } from './views/recepcionista/reservas/recepcionista-reservas-view/recepcionista-reservas-view.component';
import { RecepcionistaCheckinsViewComponent } from './views/recepcionista/checkins/recepcionista-checkins-view/recepcionista-checkins-view.component';
import { RecepcionistaCheckoutsViewComponent } from './views/recepcionista/checkouts/recepcionista-checkouts-view/recepcionista-checkouts-view.component';
import { RecepcionistaHabitacionesViewRouterComponent } from './views/recepcionista/habitaciones/recepcionista-habitaciones-view-router/recepcionista-habitaciones-view-router.component';
import { RecepcionistaHabitacionesShowViewComponent } from './views/recepcionista/habitaciones/recepcionista-habitaciones-show-view/recepcionista-habitaciones-show-view.component';
import { RecepcionistaHuespedesViewRouterComponent } from './views/recepcionista/huespedes/recepcionista-huespedes-view-router/recepcionista-huespedes-view-router.component';
import { RecepcionistaHuespedesShowViewComponent } from './views/recepcionista/huespedes/recepcionista-huespedes-show-view/recepcionista-huespedes-show-view.component';
import { RecepcionistaAcompanantesViewComponent } from './views/recepcionista/acompanantes/recepcionista-acompanantes-view/recepcionista-acompanantes-view.component';
import { RecepcionistaAcompanantesShowViewComponent } from './views/recepcionista/acompanantes/recepcionista-acompanantes-show-view/recepcionista-acompanantes-show-view.component';
import { RecepcionistaAcompanantesCreateViewComponent } from './views/recepcionista/acompanantes/recepcionista-acompanantes-create-view/recepcionista-acompanantes-create-view.component';
import { RecepcionistaReservasViewRouterComponent } from './views/recepcionista/reservas/recepcionista-reservas-view-router/recepcionista-reservas-view-router.component';
import { RecepcionistaReservasCreateViewComponent } from './views/recepcionista/reservas/recepcionista-reservas-create-view/recepcionista-reservas-create-view.component';
import { RecepcionistaReservasShowViewComponent } from './views/recepcionista/reservas/recepcionista-reservas-show-view/recepcionista-reservas-show-view.component';
import { RecepcionistaCheckinsViewRouterComponent } from './views/recepcionista/checkins/recepcionista-checkins-view-router/recepcionista-checkins-view-router.component';

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
            component: GerenteRecepcionistasViewRouterComponent,
            children: [
              {
                path: '',
                component: GerenteRecepcionistasViewComponent
              },
              {
                path: 'create',
                component: GerenteRecepcionistasCreateViewComponent
              },
              {
                path: ':id',
                component: GerenteRecepcionistasShowViewComponent
              }
            ]
          },
          {
            path: 'reportes',
            component: GerenteReportesViewComponent
          }
        ]
      },
      {
        path: 'recepcionista',
        component: IndexRecepcionistaComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            component: HomeRecepcionistaComponent
          },
          {
            path: 'habitaciones',
            component: RecepcionistaHabitacionesViewRouterComponent,
            children: [
              {
                path: '',
                component: RecepcionistaHabitacionesViewComponent
              },
              {
                path: ':id',
                component: RecepcionistaHabitacionesShowViewComponent
              }
            ]
          },
          {
            path: 'huespedes',
            component: RecepcionistaHuespedesViewRouterComponent,
            children: [
              {
                path: '',
                component: RecepcionistaHuespedesViewComponent
              },
              {
                path: ':id',
                component: RecepcionistaHuespedesShowViewComponent,
                children: [
                  {
                    path: '',
                    component: RecepcionistaAcompanantesViewComponent
                  },
                  {
                    path: 'acompanantes/:id',
                    component: RecepcionistaAcompanantesShowViewComponent
                  },
                  {
                    path: 'create',
                    component: RecepcionistaAcompanantesCreateViewComponent
                  }
                ]
              }
            ]
          },
          {
            path: 'reservas',
            component: RecepcionistaReservasViewRouterComponent,
            children: [
              {
                path: '',
                component: RecepcionistaReservasViewComponent,
              },
              {
                path: 'create',
                component: RecepcionistaReservasCreateViewComponent,
              },
              {
                path: ':id',
                component: RecepcionistaReservasShowViewComponent
              }
            ]
          },
          {
            path: 'checkins',
            component: RecepcionistaCheckinsViewRouterComponent,
            children: [
              {
                path: '',
                component: RecepcionistaCheckinsViewComponent
              },
            ]
          },
          {
            path: 'checkouts',
            component: RecepcionistaCheckoutsViewComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
