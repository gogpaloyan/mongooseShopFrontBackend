import { NgModule } from "@angular/core";
import { GlobalProductComponent } from "./component/globalProduct.component";
import { CommonModule } from "@angular/common";
import { MinGlobalModule } from "./component/personGlobalProduct/minGlobalComponent/minGlobalModule";
import { FormsModule } from "@angular/forms";




@NgModule({
    declarations: [GlobalProductComponent],
    exports: [GlobalProductComponent],
    imports: [CommonModule, MinGlobalModule, FormsModule]
})

export class GlobalProductModule{}