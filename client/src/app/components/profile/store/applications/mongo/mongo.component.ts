import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { DataService } from "src/app/Service/data.service";
import { MongoDbService, Users } from "src/app/Service/mongoDb.service";
import { getMongo, onAddMongo, onDeleteMongo } from "src/app/store/mongo/action/mongoApp.action";
import { AppMongoComments, CommentsModel } from "src/app/store/mongo/state/mongo.state";


@Component({
    selector: 'app-mongo',
    templateUrl: "./mongo.component.html",
    styleUrls: ["./mongo.component.css"]
})


export class MongoComponent implements OnInit{

    data: any
    comments: string = ""
    fullName: string =""
    audio = new Audio



    constructor(private dataBase: DataService, private mongo: MongoDbService, private store: Store){}


    ngOnInit(){
        this.update(false)
        this.fullName = this.dataBase.userData.name + " " + this.dataBase.userData.surName
    }

    @Select(AppMongoComments.mongoData) data$ :Observable<CommentsModel> | undefined

    onAdd(data: any){
        this.comments = ""
        return this.store.dispatch(new onAddMongo(data))
    }
    onDelete(id: number){
        return this.store.dispatch(new onDeleteMongo(id))
    }

    update(check: boolean){
        let b: any
        let a : any = JSON.stringify(this.data)
        this.store.dispatch(new getMongo())
        this.data$?.subscribe((data) => {
            b = data
            b = JSON.stringify(data)
     
        })
        setTimeout(() => {
            if(b !== a){
                this.data = JSON.parse(b)
                if(check){
                    this.onPlay()
                }
            }
            this.update(true)
        }, 500)
    }


    onPlay(){
        this.audio.src = "../../../../../../assets/message.mp3"
        this.audio.load()
        return this.audio.play()
    }
    

}