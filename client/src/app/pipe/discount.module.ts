import { NgModule } from "@angular/core";
import { DiscountPipe } from "./discount.pipe";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [DiscountPipe],
    exports: [DiscountPipe],
    imports: [CommonModule]
})

export class DiscountPipeModule{}