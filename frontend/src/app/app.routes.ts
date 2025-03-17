import { Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminComponent } from "./admin/admin.component"
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { InterventionComponent } from './customer/intervention/intervention.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { ServicesComponent } from './admin/services/services.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MechanicComponent } from './admin/mechanic/mechanic.component';
import { AppointmentComponent } from './admin/appointment/appointment.component';

export const routes: Routes = [
    //{ path: '', component: FrontpageComponent },
    
    { path: '', 
        component: AdminComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'customer', component: CustomerComponent },
            { path: 'mechanic', component: MechanicComponent },
            { path: 'appointment', component: AppointmentComponent },
            { path: '', redirectTo:'dashboard', pathMatch: 'full' }
        ]
    },
   { path: '', component: FrontpageComponent},
    {
        path:'customer',
        component: CustomerLayoutComponent,
        children:[
            { path: 'appointment', component: AppointmentComponent },
            { path: 'intervention', component: InterventionComponent }
            // { path: 'intervention', }
        ]
    }   
]; 
