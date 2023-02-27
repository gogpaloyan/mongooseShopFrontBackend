import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/Service/data.service";



@Component({
    selector: 'app-globalProduct',
    templateUrl: './globalProduct.component.html',
    styleUrls: ['globalProduct.component.css']
})

export class GlobalProductComponent implements OnInit{

    arr: any = []
    data: any
    search: string = ''

    filterArr(){
        this.arr = this.data.filter((item:any) => {
            if(this.search.length === 0){
                return item
            }else{
                 return (item.title.toLowerCase()).indexOf(this.search.toLowerCase()) !== -1
            }
               
        })
    }

    constructor(private Data: DataService){}

    ngOnInit() {
        this.data = this.Data.dataBase.getProductGlobal().sort((a:any, b:any) => {
            return a.price - b.price
    })
        this.filterArr()
    }





}