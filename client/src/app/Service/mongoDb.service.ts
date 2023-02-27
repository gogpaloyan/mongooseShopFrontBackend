import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./data.service";


export interface Users {
    _id: number
    name: string
    comments: string
    __v: number
}

@Injectable({
    providedIn: "root"
})


export class MongoDbService implements OnInit{
    fullName: string = ""


    constructor(private data: DataService,private http: HttpClient){
       
    }
    ngOnInit() {
        
    }

    getData(){
        this.fullName = this.data.userData.name + " " + this.data.userData.surName
        return this.http.get("http://localhost:3000/users")
    }
    onAddUser(comments: string){
        return this.http.post<Users>("http://localhost:3000/user", {name: this.fullName, comments})
    }

    onDeleteUser(id:number){
       return this.http.delete<number>("http://localhost:3000/user/" + id)
    }


    
}