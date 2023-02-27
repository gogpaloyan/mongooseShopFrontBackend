import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { AppTodoState, UserModel } from "src/app/store/todoApp/state/todoApp.state";
import { Observable } from 'rxjs'
import { getTodoList, onAddTodoList, onDeleteTodo } from "src/app/store/todoApp/action/todoApp.action";
import { DataService } from "src/app/Service/data.service";


@Component({
    selector: 'app-appList',
    templateUrl: './appList.component.html',
    styleUrls: ['./appList.component.css']
})

export class AppListComponent implements OnInit{

    arr: any
    text: string = ''

    @Select(AppTodoState.selectData) data$: Observable<UserModel> | undefined


    onAdd(text: string){
        let data = {
            id: Math.random(),
            title: text,
            completed: false
        }
        return this.store.dispatch( new onAddTodoList(data))


    }
    onDelete(id: number){
        return this.store.dispatch( new onDeleteTodo(id))
    }


    constructor(private store: Store){}

    ngOnInit(){
        this.store.dispatch(new getTodoList())
        this.data$?.subscribe((data) => {
            this.arr = data
        })
    }
}