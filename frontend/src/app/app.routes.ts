import { Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminComponent } from "./admin/admin.component"
import { AppointmentComponent } from './customer/appointment/appointment.component';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { InterventionComponent } from './customer/intervention/intervention.component';
export const routes: Routes = [

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
    // { path: '', component: AdminComponent},

]; 
