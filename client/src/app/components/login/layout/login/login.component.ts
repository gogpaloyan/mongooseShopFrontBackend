import { Component, OnInit } from "@angular/core";
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { DataService } from "src/app/Service/data.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
    error: boolean = false

    form = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        check: new FormControl(false)
    })


    Submit(){
        return this.data.dataBase.users.filter((item:any) => {
             if(this.form.value.userName === item.userName && this.form.value.password === item.password){
                this.error = false
                localStorage.setItem('tokenLogin', this.form.value.userName  + "")
                localStorage.setItem('tokenPassword', this.form.value.password  + "")
                this.data.userData = item
                return this.data.auth()
            }
            else{
                
                return this.error = true
            }
            
        })
    
    }

    ngOnInit(){
         this.data.getToken()

    }


    constructor(private data: DataService){}



}

