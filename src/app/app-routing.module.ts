import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { authRoutes } from './pages/auth/auth.routing';
import { DashboardStatisticsComponent } from './pages/dashboard/dashboard-statistics/dashboard-statistics.component';
import { LoginComponent } from 'app/pages/auth/login/login.component';
import { RegisterComponent } from 'app/pages/auth/register/register.component';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/pages/dashboard/dashboard-statistics/dashboard-statistics.module#DashboardStatisticsModule',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'all-in-one',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'crm',
        loadChildren: 'app/pages/dashboard/dashboard-crm/dashboard-crm.module#DashboardCrmModule',
        canActivateChild: [AuthGuard]
      }
    ]
  },
  {
    path: 'profile',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/pages/profile/profile.module#ProfileModule',
        canActivateChild: [AuthGuard],
        pathMatch: 'full'
      }
    ]
  },

  {
    path: 'tables',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'simple-table',
        loadChildren: 'app/pages/tables/simple-table/simple-table.module#SimpleTableModule',
        pathMatch: 'full',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'table-pagination',
        loadChildren: 'app/pages/tables/table-pagination/table-pagination.module#TablePaginationModule',
        pathMatch: 'full',
          canActivateChild: [AuthGuard]
      },
      {
        path: 'table-sorting',
        loadChildren: 'app/pages/tables/table-sorting/table-sorting.module#TableSortingModule',
        pathMatch: 'full',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'table-filtering',
        loadChildren: 'app/pages/tables/table-filtering/table-filtering.module#TableFilteringModule',
        pathMatch: 'full',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'datatable',
        loadChildren: 'app/pages/tables/datatable/datatable.module#DatatableModule',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'all-in-one-table',
        loadChildren: 'app/pages/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule',
        canActivateChild: [AuthGuard]
      },
    ]
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
