import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DataService } from "src/app/Service/data.service";


@Component({
    selector: 'app-myProduct',
    templateUrl: './myProduct.component.html',
    styleUrls: ['./myProduct.component.css']
})

export class MyProductComponent implements OnInit{

    arr: any
    image: Array<string> =  []
    add: boolean = false

    submit(){
    
    this.Data.dataBase.addProductGlobal(this.form.value, this.image)
    this.image = []
    this.upDate()
       return  this.form.reset()
    }

    onDeletePhoto(item: string){
        this.image = this.image.filter((image:any) => image !== item)
    }

    constructor(private Data: DataService){}

    ngOnInit(): void {
        this.upDate()
    }

    upDate(){
        this.arr = this.Data.dataBase.getMyProduct()
    }


    select(e: any){
        if(e.target.files){
            let render = new FileReader();
            render.readAsDataURL(e.target.files[0])
            render.onload = (event: any) => {
                this.image = [...this.image, event.target.result]
            } 
        }else{
            return 
        }
    }


    form = new FormGroup({
        name: new FormControl(''),
        price: new FormControl(''),
        count: new FormControl(''),
        title: new FormControl(''),
        description: new FormControl(''),
        category: new FormControl("")
    })

    onDelete(id: number){
        this.Data.dataBase.onDeleteMyProduct(id)
        return this.upDate()
    }

}