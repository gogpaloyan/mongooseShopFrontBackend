import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: "discountPipe"
})


export class DiscountPipe implements PipeTransform{
    transform(value: any, discount : string = "") {
        if(discount === "red"){
            return value = (value - (value * 20 / 100))
        }else if(discount === "yellow"){
            return value = value - (value * 10 / 100)
        }else{
            return value
        }
        
    }
}