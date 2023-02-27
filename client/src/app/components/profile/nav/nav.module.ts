import { NgModule } from "@angular/core";
import { NavComponents } from "./nav.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [NavComponents],
    exports: [NavComponents],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    
    ]
})


export class NavModule{}