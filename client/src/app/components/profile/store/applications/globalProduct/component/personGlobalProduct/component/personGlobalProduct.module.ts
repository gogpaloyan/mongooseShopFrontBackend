import { NgModule } from "@angular/core";
import { PersonGlobalProductComponent } from "./personGlobalProduct.component";
import { CommonModule } from "@angular/common";
import { PersonGlobalRouterModule } from "./personGlobalProduct-routing.module";
import { SlideModule } from "src/app/modal/slide/slide.module";
import { ImitationModule } from "../imitation/imitation.module";
import { MoreLessModule } from "src/app/modal/moreLess/moreLess.module";
import { DiscountPipeModule } from "src/app/pipe/discount.module";




@NgModule({
    declarations: [PersonGlobalProductComponent],
    exports: [PersonGlobalProductComponent],
    imports:[
        CommonModule,
        PersonGlobalRouterModule,
        SlideModule,
        ImitationModule,
        MoreLessModule,
        DiscountPipeModule,
    ]
})


export class PersonGlobalModule{}