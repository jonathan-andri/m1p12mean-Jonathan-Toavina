import { Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminComponent } from "./admin/admin.component"
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { InterventionComponent } from './customer/customer-intervention/intervention.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { ServicesComponent } from './admin/services/services.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MechanicComponent } from './admin/mechanic/mechanic.component';
import { AppointmentComponent } from './admin/appointment/appointment.component';
import { CustomerAppointmentComponent } from './customer/customer-appointment/customer-appointment.component';
import { NewAppointmentFormComponent } from './customer/new-appointment-form/new-appointment-form.component';
import { AddComponent } from './component/add/add.component';
import { CustomerDataComponent } from './component/customer-data/customer-data.component';
import { AppointmentListComponent } from './component/appointment-list/appointment-list.component';
import { MechanicAddComponent } from './component/mechanic-add/mechanic-add.component';
import { MechanicsListComponent } from './component/mechanics-list/mechanics-list.component';
import { ServicesAddComponent } from './component/services-add/services-add.component';
import { ServicesListComponent } from './component/services-list/services-list.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpFormComponent } from './customer/sign-up-form/sign-up-form.component';
import { customerGuard } from './guards/customerGuard';
import { adminGuard } from './guards/adminGuard';
import { mechanicGuard } from './guards/mechanicGuard';

export const routes: Routes = [
    //{ path: '', component: FrontpageComponent },
    
    { path: 'admin', 
        component: AdminComponent,
        canActivate: [adminGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'services', component: ServicesComponent,
                    children:[
                        { path: 'services-list', component: ServicesListComponent },
                        { path: 'services-add', component: ServicesAddComponent },
                        { path: '**', redirectTo:'services-list' }
                    ]
             },
            { path: 'customer', component: CustomerComponent, 
                    children:[ 
                        { path: 'customer-list', component: CustomerDataComponent },
                        { path: 'add-customer', component: AddComponent },
                        { path: '**', redirectTo:'customer-list' }
                    ]
            },
            { path: 'mechanic', component: MechanicComponent,
                    children:[
                        { path:'mechanic-add', component:MechanicAddComponent },
                        { path:'mechanic-list', component:MechanicsListComponent },
                        { path: '**', redirectTo:'mechanic-list' }
                    ]
             },
            { path: 'appointments', component: AppointmentComponent,
                    children:[
                        { path:'appointments-list', component: AppointmentListComponent },
                        { path: '**', redirectTo:'appointments-list' }
                    ]
             },
            { path: '', redirectTo:'dashboard', pathMatch: 'full' }
        ]
    },
   { path: '', component: FrontpageComponent},
    {
        path:'customer',
        component: CustomerLayoutComponent,
        canActivate: [customerGuard],
        children:[
            { path: 'appointment', component: CustomerAppointmentComponent },
            { path: 'intervention', component: InterventionComponent },
            { path: 'newAppointment', component: NewAppointmentFormComponent}
            // { path: 'intervention', }
        ]
    },
    { path: 'login', component: LoginComponent},
    { path: 'signUp', component: SignUpFormComponent} 
]; 
