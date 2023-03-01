import { Component, OnInit, } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "src/app/Service/data.service";
import { __makeTemplateObject } from "tslib";



@Component({
    selector: 'app-myProfile',
    templateUrl: './myProfile.component.html',
    styleUrls: ["./myProfile.component.css"]
})


export class MyProfile implements OnInit{

    age: any = new Date().getFullYear()


    
    userData: any
    edit: boolean = false
    editMode: boolean = true
    show: boolean = false
    errorPassword: boolean = false
    errorPassword2: boolean = false
    loginCheck: boolean = false
    error: boolean = false
    showPassword: boolean = false



    changeDiscount(discount: string){
        return this.data.dataBase.changeDiscount(discount)
    }


    select(e: any){
        if(e.target.files){
            let render = new FileReader();
            render.readAsDataURL(e.target.files[0])
            render.onload = (event: any) => {
                this.userData.image = event.target.result
            } 
        }else{
            return 
        }
    }

    Show(){
        this.show = false
        return this.editMode = true
    }

    onSubmit(){
       if(this.userData.password == this.passForm.value.pass){
          this.passForm.reset()
          this.errorPassword2 = false
          this.editMode = false
          this.edit = false
          return this.show = true 
       }else{
        return this.errorPassword2 = true
       }
    }

    change(){
        if(this.ChangesForm.value.password === this.ChangesForm.value.passwordRep){
            this.data.changeUserData(this.ChangesForm.value)
            this.passForm.reset()
            this.edit = false
            this.show = false
            this.userData = this.data.userData
            return this.editMode = true
        }else{
            return this.error = true
        }
    }



    constructor(private data: DataService){}

    ngOnInit() {
        this.userData = this.data.userData
    }


    sliceData(){
        if(this.ChangesForm.value.name || this.ChangesForm.value.surName || this.ChangesForm.value.userName){
            return confirm("Form not Empty or not Save")
        }else{
            return false
        }
    }

 
   


    passForm = new FormGroup({
        pass: new FormControl("", Validators.required)
    })


    ChangesForm = new FormGroup({
        name: new FormControl(this.data.userData.name, [Validators.required]),
        surName: new FormControl(this.data.userData.surName, [Validators.required]),
        birth: new FormControl(this.data.userData.birth, [Validators.required]),
        userName: new FormControl(this.data.userData.userName, [Validators.required, Validators.email]),
        password: new FormControl(this.data.userData.password, [Validators.required]),
        passwordRep: new FormControl("", [Validators.required]),

    })



}