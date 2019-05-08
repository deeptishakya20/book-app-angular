import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.route';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';


@NgModule({
    declarations:[
        CustomerLoginComponent, 
        CustomerRegistrationComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(customerRoutes),
        FormsModule
    
    ],
    exports:[
        CustomerLoginComponent, 
        CustomerRegistrationComponent,
        RouterModule,
        HttpClientModule
    ],
    providers:[
        CustomerService
    ]
})
export class CustomerModule{

}