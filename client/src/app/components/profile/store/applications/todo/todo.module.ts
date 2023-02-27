import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TodoRouterModule } from "./todo-routing.module";


@NgModule({
    declarations: [TodoComponent],
    exports: [TodoComponent],

    imports: [
        CommonModule,
        TodoRouterModule,
        FormsModule,
        
    ],

})


export class TodoModule{}