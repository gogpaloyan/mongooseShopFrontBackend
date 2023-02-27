import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MongoComponent } from "./mongo.component";



let routes: Routes = [
    {path:"", component: MongoComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})



export class MongoRouterModule{}