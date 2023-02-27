import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/Service/data.service";


@Component({
    selector: 'basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css']
})


export class BasketComponent implements OnInit{


    basket: any

    constructor(private Data: DataService){}

    ngOnInit() {
        this.basket = this.Data.dataBase.getDataBasket()
    }

    onDelete(id: number){
        this.Data.removeProductBasket(id)
        this.basket = this.Data.dataBase.getDataBasket()
    }

   
   
}