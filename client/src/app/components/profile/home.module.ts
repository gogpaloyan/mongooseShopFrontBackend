import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeRoutingModule } from "./home-routing.module";
import { NavComponents } from "./nav/nav.component";
import { MoreLessModule } from "src/app/modal/moreLess/moreLess.module";
import { SlideModule } from "src/app/modal/slide/slide.module";
import { GlobalProductModule } from "./store/applications/globalProduct/globalProductModule";




@NgModule({
    declarations: [
         HomeComponent,
         NavComponents,
        ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        FormsModule,
        MoreLessModule,
        SlideModule,
        GlobalProductModule,

    ]
})

export class HomeModule {}