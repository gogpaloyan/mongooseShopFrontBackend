import { NgModule } from "@angular/core";
import { ErrorComponent } from "./error.component";
import { CommonModule } from "@angular/common";
import { ErrorRouterModule } from "./error-router.module";


@NgModule({
    declarations: [ErrorComponent],
    exports: [ErrorComponent],
    imports:[CommonModule, ErrorRouterModule]
})

export class ErrorModule{}