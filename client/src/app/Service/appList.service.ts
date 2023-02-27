import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable} from "rxjs";

export interface AppListInter{
    "userId": number
    "id": number
    "title": string
    "completed": boolean
  }
  

@Injectable({
  providedIn: "root"
})

export class AppListService{


    constructor(private http: HttpClient){}
    



    getList(): Observable<AppListInter> {
        return this.http.get<AppListInter>('https://jsonplaceholder.typicode.com/todos',
          {
            params: new HttpParams({
              fromObject: {limit: 3}
            })
          })
      }

      onDelete(id: string){
        return this.http.delete('https://jsonplaceholder.typicode.com/todos/' + id)
      }

      onAdd(data: any){
        return this.http.post('https://jsonplaceholder.typicode.com/todos', data)
      }


}