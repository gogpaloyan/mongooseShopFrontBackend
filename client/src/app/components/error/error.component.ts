import { Component } from "@angular/core";



@Component({
    selector: 'app-error',
    template: `<div >This page not found </div>
    <button routerLink="" class="color">Redirect to store</button>`,
    styles: ['.color{color: white; padding: 10px; border-radius: 10px; background-color: red} div{color: red; text-align:center; background-color:black}']
})

export class ErrorComponent{

}