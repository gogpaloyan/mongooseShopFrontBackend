import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/Service/data.service";



@Component({
    selector: "app-imitation",
    templateUrl: "./imitation․component.html",
    styleUrls: ["./imitation․component.css"]
})


export class ImitationComponent implements OnInit{

    data: any

    @Input("initial") initial: string = ""

    @Output('update') update: EventEmitter<any> = new EventEmitter<any>()

    Update(){
        return this.update.emit("updated")
    }

    constructor(private Data: DataService, private router: Router){}

    ngOnInit() {
        this.data = this.Data.dataBase.getProductGlobal()
        this.data = this.data.filter((item: any) => item.category == this.initial)
    }

   







}