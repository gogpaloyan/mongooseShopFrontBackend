import { Component, DoCheck, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/Service/data.service";
import { Router } from "@angular/router";



@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})


export class NavComponents implements OnInit, DoCheck{
    name: string = ""
    surName: string = ""
    exit: boolean = false

    LogOut(){
        localStorage.clear()
        return this.Router.navigate(['/login'])
    }

    

    

    constructor(private data: DataService, private Router: Router){}

    ngDoCheck(){
        this.name = this.data.userData.name
        this.surName = this.data.userData.surName
      }
    
    ngOnInit() {

    }
    
}