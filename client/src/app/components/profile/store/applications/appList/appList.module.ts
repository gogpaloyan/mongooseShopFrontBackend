import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppListComponent } from "./component/appList.component";
import { AppListRoutingModule } from "./appList-routing.module";



@NgModule({
    declarations: [
        AppListComponent, 
    ],
    imports: [
        CommonModule,
        AppListRoutingModule,
        FormsModule,
        
    ]    
})

export class AppListModule{}