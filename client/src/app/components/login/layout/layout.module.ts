import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NavRegComponent } from "../nav/navRg.component";
import { CommonModule } from "@angular/common";
import { LayoutRouterModule } from "./layout-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";




@NgModule({
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        NavRegComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutRouterModule
    ]
})


export class LayoutModule{}