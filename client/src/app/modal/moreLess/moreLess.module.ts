import { NgModule } from "@angular/core";
import { MoreLessComponent } from "./moreLess.component";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [MoreLessComponent],
    exports: [MoreLessComponent],
    imports: [CommonModule]
})

export class MoreLessModule{}