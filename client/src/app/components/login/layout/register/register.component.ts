import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "src/app/Service/data.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})


export class RegisterComponent {
    constructor(private data: DataService, private router: Router) { }
    error: boolean = false
    formsError: boolean = false
    loginCheck: any
    min: boolean = false

    register() {


        if (this.Forms.invalid) {
            return this.formsError = true
        } else if (this.Forms.value.password === this.Forms.value.passwordRep) {
            this.error = false
            let check = this.data.dataBase.users.filter((a: any) => a.userName === this.Forms.value.userName)
            if (check.length === 0) {
                this.loginCheck = false
                this.data.dataBase.onAddUser(this.Forms.value)
                return this.router.navigate(['login'])
            } else {
                return this.loginCheck = true
            }
        } else {
            return this.error = true
        }


    }



    Forms = new FormGroup({
        name: new FormControl("", [Validators.required]),
        surName: new FormControl("", [Validators.required]),
        phone: new FormControl("+374", [Validators.required]),
        birth: new FormControl("", [Validators.required]),
        userName: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        passwordRep: new FormControl("", [Validators.required, Validators.minLength(6)]),

    })

    checkForm() {
        if (this.Forms.valid) {
            return true
        } else if (this.Forms.invalid && (this.Forms.value.name || this.Forms.value.userName || this.Forms.value.surName)) {
            return confirm('this forms not empty continue')
        } else {
            return true
        }
    }

}