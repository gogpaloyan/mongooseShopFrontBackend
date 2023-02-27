import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/Service/data.service";
import { ProductsService } from "src/app/Service/product.service";



@Component({
    selector: 'app-personGlobalProduct',
    templateUrl: './personGlobalProduct.component.html',
    styleUrls: ['./personGlobalProduct.component.css']
})

export class PersonGlobalProductComponent implements OnInit{

    id: any
    arr: any
    data: any
    payed: boolean = false
    up: boolean = true
    myId : number | string = ""
    discount: string = ""


    constructor(private ActivatedRoute: ActivatedRoute, private Data: DataService, private Products: ProductsService){}

    ngOnInit(){
        this.discount = this.Data.userData.discount
        this.upDate()
    }

    upDate(){
        this.ActivatedRoute.paramMap.subscribe((data) => {
            this.id = data.get('id')
        })
        this.arr = this.Data.dataBase.getProductGlobal().find((item: any) => item.id == this.id)
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

    filter(){
        this.payed = !!this.Data.dataBase.getDataBasket().find((item:any) => item.id === this.arr.id )
    }


}