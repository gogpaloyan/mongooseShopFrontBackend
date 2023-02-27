import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/Service/data.service";


@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit{


    data: any = []
    title: string = ""
    error: boolean = false

    completedLength(){
       return this.data.filter((i:any) => i.completed).length
    }

    onAdd(title:string){
        if(title.length === 0){
            return this.error = true
        }else{
            this.error = false
            this.Data.onAddTodo(title)
            this.title = ""
            return this.data = this.Data.getDataTodo()
        }
       
    }
    onDelete(id: number){
        
        this.Data.onDelete(id)
        return this.data = this.Data.getDataTodo()
    }
    onCleare(){
        
        this.Data.onClearTodoCompleted()
        return this.data = this.Data.getDataTodo()
    }



    constructor(private Data: DataService){}

    ngOnInit() {
     this.data = this.Data.getDataTodo()
    }
  

}