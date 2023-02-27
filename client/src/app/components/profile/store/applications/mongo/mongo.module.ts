import { NgModule } from "@angular/core";
import { MongoComponent } from "./mongo.component";
import { CommonModule } from "@angular/common";
import { MongoRouterModule } from "./mongo-routing.module";
import { FormsModule } from "@angular/forms";




@NgModule({
    declarations: [MongoComponent],
    imports:[
        CommonModule,
        FormsModule,
        MongoRouterModule
    ]

})

export class MongoModule{}