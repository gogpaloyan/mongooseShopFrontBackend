import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable} from "rxjs";
import { DataService } from "./data.service";



export interface ProductsInter{
  "id": number
  "title": string
  "price": number
  "description": string
  "category": string
  "image": string
  "rating": {
    "rate": number
    "count": number
  }
}


@Injectable({
    providedIn: 'root'
})

export class ProductsService{
    constructor(private http: HttpClient, private Data: DataService){}



    getProduct(): Observable<ProductsInter> {
        return this.http.get<ProductsInter>('https://fakestoreapi.com/products',
          {
            params: new HttpParams({
              fromObject: {limit: 3}
            })
          })
      }

      basket(data: ProductsInter){
        return this.Data.dataBase.basketArray(data)
      }
      removeProduct(id:number){
        return this.Data.removeProductBasket(id)
      }

    }