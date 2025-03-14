import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MechanicComponent } from './mechanic/mechanic.component';

const route: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'customer', component: CustomerComponent},
    { path: 'mechanic', component: MechanicComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule],
})

export class AdminRoutingModule{}