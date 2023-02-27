import { NgModule } from "@angular/core";
import { MinGlobalComponent } from "./minGlobalComponent";
import { CommonModule } from "@angular/common";
import { MoreLessModule } from "src/app/modal/moreLess/moreLess.module";
import { RouterModule } from "@angular/router";
import { DiscountPipeModule } from "src/app/pipe/discount.module";



@NgModule({
    declarations: [MinGlobalComponent],
    exports: [MinGlobalComponent],
    imports: [
        CommonModule,
        MoreLessModule,
        RouterModule,
        DiscountPipeModule
    
    ],

})

export class MinGlobalModule {}