import { Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminComponent } from "./admin/admin.component"
import { CustomerComponent } from './admin/customer/customer.component';
import { ServicesComponent } from './admin/services/services.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MechanicComponent } from './admin/mechanic/mechanic.component';

export const routes: Routes = [
    //{ path: '', component: FrontpageComponent },
    /* { path: '', component: AdminComponent}, */
    { path: '', 
        component: AdminComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'customer', component: CustomerComponent },
            { path: 'mechanic', component: MechanicComponent },
            { path: '', redirectTo:'/dashboard', pathMatch: 'full' }
        ]
    },
    

]; 
