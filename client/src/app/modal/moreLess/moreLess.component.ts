import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-moreLess',
    templateUrl: './moreLess.component.html',
    styles: []
})
export class MoreLessComponent{



    @Input('text') text: string = ''
    @Input("max") max: number = 10


    show: boolean = false




    constructor(){
    }
}