import { Injectable } from "@angular/core";
import { Action } from "@ngxs/store";
import { State } from "@ngxs/store";
import { getTodoList, onAddTodoList, onDeleteTodo } from "../action/todoApp.action";
import { StateContext } from "@ngxs/store";
import { AppListService } from "src/app/Service/appList.service";
import { tap } from "rxjs";
import { Selector } from "@ngxs/store";



export class UserModel{
    users: any
}


@State<UserModel>({
    name: 'TodoAppState',
    defaults: {
        users: []
    }
})

@Injectable()

export class AppTodoState{
    @Action(getTodoList)
    getTodoList(ctx: StateContext<UserModel>){
        return this.data.getList().pipe(tap((da) => {
            const state = ctx.getState()
            ctx.setState({
                ...state,
                users: da
            })

        }))
    }


    @Action(onAddTodoList)
    onAddTodoList(ctx: StateContext<UserModel>, {data}: onAddTodoList){
        return this.data.onAdd(data).pipe(tap((da) => {
            const state = ctx.getState()
            ctx.patchState(
                {
                    users: [...state.users, da]
                }
            )
        }))
    }

    @Action(onDeleteTodo)
    onDeleteTodo(ctx: StateContext<UserModel>, {id}: onDeleteTodo){
        return this.data.onDelete(id).pipe(tap((da) => {
            const state = ctx.getState()
            const filterArr = state.users.filter((item:any) => item.id !== id)
            ctx.setState({
                ...state,
                users: filterArr
            })
        }))

    }


    @Selector()
    static selectData(state: UserModel){
        return state.users
    }



    constructor(private data: AppListService){}
}