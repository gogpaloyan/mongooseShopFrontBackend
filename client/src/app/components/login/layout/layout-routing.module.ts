import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { LoginComponent } from "./login/login.component";
import { CanDeactRegisterGuard } from "../../guard/canDeactRegister.guard";
import { RegisterComponent } from "./register/register.component";


let routes : Routes = [
    {path: "", redirectTo:"login", pathMatch: "full" },
    {path: "login", component: LayoutComponent, children: [
        {path: "", component:LoginComponent},
        {path: "register", canDeactivate: [CanDeactRegisterGuard], component:RegisterComponent}
  ]},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRouterModule{}






