import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ImitationComponent } from "./imitation․component";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [ImitationComponent],
    exports: [ImitationComponent],
    imports: [CommonModule, RouterModule]
})

export class ImitationModule{}