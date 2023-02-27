import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { MongoDbService, Users } from "src/app/Service/mongoDb.service";
import { getMongo, onAddMongo, onDeleteMongo } from "../action/mongoApp.action";
import { tap } from "rxjs";


export class CommentsModel{
    comments: any
}


@State<CommentsModel>({
    name: "MongoCommentsState",
    defaults: {
        comments: []
    }
})

@Injectable()

export class AppMongoComments{

    @Action(getMongo)
    getMongo(ctx:StateContext<CommentsModel> ){
        return this.mongo.getData().pipe(tap((data) => {
            const state = ctx.getState()
            ctx.setState({
                ...state,
                comments: data
        })
        }))
    }

    @Action(onAddMongo)
    onAddMongo(ctx: StateContext<CommentsModel>, {payload}: onAddMongo){

        return this.mongo.onAddUser(payload).pipe(tap((data) => {
            const state = ctx.getState()
            ctx.patchState({
                comments: [...state.comments, data]
            })
        }))
    }

    @Action(onDeleteMongo)
    onDeleteMango(ctx: StateContext<Users>, {id}: onDeleteMongo){
        return this.mongo.onDeleteUser(id).pipe(tap((data) => {
            const state = ctx.getState()
            

        }))
    }

    @Selector()
    static mongoData(state: CommentsModel){
        return state.comments
    }

    constructor(public mongo: MongoDbService){}
}