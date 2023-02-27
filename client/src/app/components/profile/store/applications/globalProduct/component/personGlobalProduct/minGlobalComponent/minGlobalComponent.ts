import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/Service/data.service";
import { ProductsService } from "src/app/Service/product.service";



@Component({
    selector: "app-minGlobalComponent",
    templateUrl: './minGlobalComponent.html',
    styleUrls: ["./minGlobalComponent.css"]
})

export class MinGlobalComponent implements OnInit{


    @Input('sale') sale: boolean = true
    @Input('baskets') baskets : boolean = false
    @Input('product') product: any
    payed: boolean = false
    myId: number | string = ""
    discount: string = ""
 

    constructor(private Products: ProductsService, private Data: DataService, private ActivatedRoute: ActivatedRoute){}
    ngOnInit() {
        this.discount = this.Data.userData.discount
        this.filter()
        this.myId = this.Data.userData.id
    }

    basket(product: any){
        this.payed = true
        return this.Products.basket(product)
    }
    remove(id:number){
        this.payed = false
        return this.Products.removeProduct(id)
    }

    removeBasket(id:number){
        this.Data.removeProductBasket(id)
    }

    filter(){
        this.payed = !!this.Data.dataBase.getDataBasket().find((item:any) => item.id === this.product.id )
    }



    

}