import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./error.component";




let routes: Routes = [
    {path: "", component: ErrorComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})

export class ErrorRouterModule{}