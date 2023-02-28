import {Injectable } from "@angular/core";
import { ProductsInter } from "./product.service";
import { Router,} from "@angular/router";




@Injectable({
    providedIn: "root"
})

export class DataService{
    userData: any 

    dataBase: any = {
        users: [
            {
                id: 0,
                name: 'Admin',
                discount: "green",
                surName: 'Admin',
                phone: "+374445454545",
                image: "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9896883.jpg",
                birth: "101010",
                userName: 'admin@mail.ru',
                password: "adminn",
                userDataBase: {
                    todoList: [
                        {
                            id: Math.random(),
                            title: "Learn JavaScript",
                            completed: true
                        },
                        {
                            id: Math.random(),
                            title: "Learn Angular",
                            completed: true
                        },
                        {
                            id: Math.random(),
                            title: "Learn React",
                            completed: false
                        } ],
                
                
                    basket:[],
                    myProduct: [
                        {
                            person: 'Admin Admin',
                            phone: "+374445454545",
                            personImage: "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9896883.jpg",
                            personId: 0,
                            id:15224427252,
                            title:"lenovo",
                            price:100,
                            description:"very good",
                            category:"laptop",
                            image:["https://tesla.info/wp-content/uploads/2021/07/SF40BA-OPEN-Brown-Teslapsd.jpg", "https://tesla.info/wp-content/uploads/2021/07/SF40-OPEN-Brown-Tesla.jpg", "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/10/What-Is-the-Tesla-Phone-1.jpg?fit=925%2C475&ssl=1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-mQ3F_OYyW0pqjWKghcaB1WD-2RITXJGlQ&usqp=CAU"
                        ],
                            rating:{
                                rate:3.9,
                                count:120
                            }
                        },
                        {
                            person: 'Admin Admin',
                            phone: "+374445454545",
                            personImage: "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9896883.jpg",
                            personId: 0,
                            id:152442272,
                            title:"Tesla",
                            price:400,
                            description:"very good",
                            category:"Phone",
                            image:["https://www.digitaltrends.com/wp-content/uploads/2022/11/tesla-elon-musk-phone-mockup.jpg?p=1","https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/10/What-Is-Tesla-Phone.png?resize=666%2C444&ssl=1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScc_OkPiN89NGLsBDaHFSdL0FbDdYOTvMqg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGONE2iyopBVgKnZMeh4DXjWRXiMOUdx6eag&usqp=CAU"
                        ],
                            rating:{
                                rate:3.9,
                                count:10
                            }
                        },
                        {
                            person: 'Admin Admin',
                            phone: "+374445454545",
                            personImage: "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9896883.jpg",
                            personId: 0,
                            id:441741748585185741,
                            title:"xiaomi",
                            price:5025,
                            description:"somthing",
                            category:"Phone",
                            image: [ "https://allcell.am/wp-content/uploads/2022/11/8bef08f2db483f3810c15933351797364215e5ac_S200788258_1-593x593.jpg.webp", "https://www.mtech.am/image/cache/catalog/Products/Honor-20-Midnight-Black-128GB/1-800x800.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPpwIcA3-58BumuMvBEe9mn6fNLNLKphfsA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Fpss_SKN8gR05veyxYv5OaXdxIVQR4F9Ow&usqp=CAU"
                        ],
                            rating:{
                                rate:3.9,
                                count:120
                            }
                        },
                        {
                            person: 'Admin Admin',
                            phone: "+374445454545",
                            personImage: "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9896883.jpg",
                            personId: 0,
                            id:152752425442,
                            title:"Iphone",
                            price:900,
                            description:"very good",
                            category:"Phone",
                            image:["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539", "https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg", "https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960", "https://i.insider.com/636ea6d1951bdc00182dc08b?width=700", "https://photos5.appleinsider.com/gallery/47772-93414-iPhone-14-colors-xl.jpg"
                        ],
                            rating:{
                                rate:3.9,
                                count:10
                            }
                        },
                        {
                            person: 'Admin Admin',
                            phone: "+374445454545",
                            personImage: "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9896883.jpg",
                            personId: 0,
                            id:4417417485851741,
                            title:"xiaomi",
                            price:195,
                            description:"somthing",
                            category:"Phone",
                            image:["https://imgs.casasbahia.com.br/55048294/1g.jpg?imwidth=292", "https://i.ebayimg.com/images/g/vO8AAOSwIqlhjlQE/s-l500.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8uHvtMI49OQC1oSeyKkNmxR3-udFZJFWN2w&usqp=CAU","https://i0.shbdn.com/photos/32/30/29/x5_1062323029l1c.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHV5LYTzOU1u3ZB4twLm1uoeV2E8f9bs_7Cw&usqp=CAU"
                        ],
                            rating:{
                                rate:3.9,
                                count:120
                            }
                        },
                        {
                            person: 'Admin Admin',
                            phone: "+374445454545",
                            personImage: "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9896883.jpg",
                            personId: 0,
                            id:214741714141,
                            title:"acer",
                            price:450,
                            description:"working",
                            category:"laptop",
                            image:["https://images.acer.com/is/image/acer/Aspire3-aspire1-a31535-a11532-Sv-01a-2?$Product-Cards-XL$","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_FNho6FZ-NTNhFS7Rs4DWlkvS1ZaasK01g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvksLfLtg8SjkpTdF2SpOBlPUpUQNRjQrXw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yrLQprvexJ-devEWxwZfzuyf9fmr7PJckw&usqp=CAU"
                        ],
                            rating:{
                                rate:3.9,
                                count:120
                            }
                        }
                       
                    ]
            }
            },
            {
                id: 1,
                name: 'Grigor',
                discount: "green",
                phone: "+3744444444454",
                image: "https://t4.ftcdn.net/jpg/01/11/58/37/360_F_111583781_7hgsiVm2EAzkcJ01GJV4BNioq1uKcM4Z.jpg",
                surName: 'Paloyan',
                birth: "101010",
                userName: 'grigor@mail.ru',
                password: "111111",
                userDataBase: {
                    todoList: [
                        {
                            id: Math.random(),
                            title: "Learn JavaScript",
                            completed: true
                        },
                        {
                            id: Math.random(),
                            title: "Learn Angular",
                            completed: true
                        },
                        {
                            id: Math.random(),
                            title: "Learn React",
                            completed: false
                        } ],
                
                
                    basket:[],
                    myProduct: [
                        {
                            person: 'Grigor Paloyan',
                            phone: "+3744444444454",
                            personImage: "https://t4.ftcdn.net/jpg/01/11/58/37/360_F_111583781_7hgsiVm2EAzkcJ01GJV4BNioq1uKcM4Z.jpg",
                            personId: 1,
                            id:341741144714,
                            title:"MacBook",
                            price:1200,
                            description:"Good Macbook",
                            category:"laptop",
                            image:["https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661","https://fdn.gsmarena.com/imgroot/news/22/09/xiaomi-notebook-pro-120g-review/inline/-1200w5/gsmarena_001.jpg","https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format","https://www.zohowebstatic.com/sites/zweb/images/notebook/touchbar-notebook2x.jpg" 
                        ],
                            rating:{
                                rate:3.9,
                                count:120
                            }
                        },
                        {
                            person: 'Grigor Paloyan',
                            phone: "+3744444444454",
                            personImage: "https://t4.ftcdn.net/jpg/01/11/58/37/360_F_111583781_7hgsiVm2EAzkcJ01GJV4BNioq1uKcM4Z.jpg",
                            personId: 1,
                            id:441741741741,
                            title:"Ild",
                            price:4500,
                            description:"somthing",
                            category:"laptop",
                            image:["https://www.notebookcheck.net/fileadmin/_processed_/3/3/csm_MG_4293_e8f809142a.jpg","https://www.evetech.co.za/repository/ProductImages/lenovo-ideapad-330-17ikb-17-3-core-i3-laptop-deal-700px-v1.jpg","https://m.media-amazon.com/images/I/51qkiUUGutL.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuV-7ibXjkPqUAF3nh2EBwoL0h3ex86oiynebZtaj7NMNdBfZH5nryjWnadobB4Nz4qU&usqp=CAU","https://www.evetech.co.za/repository/ProductImages/lenovo-ideapad-330-17ikb-17-3-core-i3-laptop-deal-700px-v15.jpg","https://m.media-amazon.com/images/I/71Tpr3lyM7L._SL1500_.jpg"
                        ],
                            rating:{
                                rate:3.9,
                                count:120
                            }
                        },
                        {
                            person: 'Grigor Paloyan',
                            phone: "+3744444444454",
                            personImage: "https://t4.ftcdn.net/jpg/01/11/58/37/360_F_111583781_7hgsiVm2EAzkcJ01GJV4BNioq1uKcM4Z.jpg",
                            personId: 1,
                            id:4417417484151741,
                            title:"Samsung ",
                            price:400,
                            description:"somthing",
                            category:"Phone",
                            image:["https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-s22-bora-purple-128-gb-sms901ulvv?wid=465&hei=465&fmt=webp","https://media.wired.com/photos/6202b99c2c286ef2d70b5b0a/1:1/w_1281,h_1281,c_limit/Gear-Samsung-Galaxy-S22-Ultra.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-_N2TGqpv1Q-Jnsxw3NI0BX-qSU_qTTYIw&usqp=CAU","https://s.yimg.com/uu/api/res/1.2/PXhCkYAbeiorpDqM7Kqrow--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-02/ce55c7e0-a87d-11ed-afbb-0cbb082fd5eb.cf.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNwCxqI5wVBt4nTMULE0WTynXZSKr3Y2uJg&usqp=CAU", "https://s.yimg.com/uu/api/res/1.2/rV98wAZx8WYiCuvOMn0yCA--~B/Zmk9ZmlsbDtoPTU4Mzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-12/2bdd4840-3f83-11eb-b735-e028a1aee6d0.cf.jpg"
                        ],
                            rating:{
                                rate:3.9,
                                count:120
                            }
                        }
                    ]
                
            }
            }
        ],
        product: [],
        onAddUser(data: any){
            return this.users.push({
                ...data,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KTyuLlaRL81cymY1ZegB7yh1HLdMaFngMg&usqp=CAU",
                discount: "green",
                userDataBase: {
                    todoList: [
                        {
                            id: Math.random(),
                            title: "Learn JavaScript",
                            completed: true
                        },
                        {
                            id: Math.random(),
                            title: "Learn Angular",
                            completed: true
                        },
                        {
                            id: Math.random(),
                            title: "Learn React",
                            completed: false
                        } ],
                
                
                    basket:[],
                    myProduct: []
                
            }
            })
        },
        getProductGlobal(){
            let arr: Array<any> = []
            let allProduct : Array<any> = this.users.map((item:any) => {
                if(item.userDataBase.myProduct !== undefined){
                    return arr = [...arr, ...item.userDataBase.myProduct]
                }else{
                    return
                }
            } ) 
            return this.product = [...arr]
        },
        getDataBasket: () =>{
            return this.userData.userDataBase.basket
        },
        addProductGlobal : (product: any, image: Array<string>) => {
            this.userData.userDataBase.myProduct = [{...product, image: image, rating: {count: product.count, rate: 5}, id: Math.random(), personId: this.userData.id, personImage: this.userData.image, phone: this.userData.phone, person: this.userData.name + ' ' + this.userData.surName}, ...this.userData.userDataBase.myProduct]
        },
        getMyProduct: () => {
            return this.userData.userDataBase.myProduct
        },
        basketArray: (product: ProductsInter) => {
            let hh = this.dataBase.getProductGlobal().find((item:any) => item.id == product.id) 
            hh.rating.count = hh.rating.count - 1
            return this.userData.userDataBase.basket = [...this.userData.userDataBase.basket, {...product, peyed: true}]
        },
        onDeleteMyProduct: (id:number) => {
            let hh = this.dataBase.getProductGlobal().find((item:any) => item.id == id) 
            hh.rating.count = hh.rating.count + 1
            return this.userData.userDataBase.myProduct = this.userData.userDataBase.myProduct.filter((item: any) => item.id !== id )
        },


        changeDiscount: (discount: string) => {
            return this.userData.discount = discount
        }
    }

   
    removeProductBasket (id:number){
        let hh = this.dataBase.getProductGlobal().find((item:any) => item.id == id) 
        hh.rating.count = hh.rating.count + 1
        return this.userData.userDataBase.basket = this.userData.userDataBase.basket.filter((i:any) => i.id !== id)
    }


    changeUserData(data:any){
       return  this.dataBase = {
        ...this.dataBase,
        users: this.dataBase.users.map((item: any) => {
            if(item.userName === this.userData.userName){
                return  this.userData = {...this.userData,...data}
                 
            }else{
                return this.dataBase.users.item = item
            }
        })
       }
 
    }



    AuthLogin(userName: any, password: any){

        
        if(localStorage.getItem(userName) === undefined){
            
            localStorage.setItem(userName, password)
        let pass = localStorage.getItem(userName)
        let login = localStorage.key(password)
        return this.dataBase.users.filter((item:any) => {
            if(login === item.userName && pass === item.password){
                this.userData = item
                this.auth()
                return true
            }else{
                return false
            }
        
    })
        }else{
            return false
        }
}
    auth(){
        return this.Router.navigate(['/home'])
    }


    checkToken(){
        return localStorage.getItem('tokenLogin') !== null && localStorage.getItem('tokenPassword') !== null
    }

    getToken(){        
        if(this.checkToken()){
            let login = localStorage.getItem('tokenLogin')
            let pass = localStorage.getItem('tokenPassword')
            return this.dataBase.users.filter((item:any) => {
                if(login === item.userName && pass === item.password){
                    this.userData = item
                    return this.Router.navigate(['./home'])
                }else{
                    return 
                }
        }) 
        }
    }


    onAddTodo(text:string){
        return this.userData.userDataBase.todoList.push(
            {
            id: Math.random(),
            title: text,
            completed: false        
        })
    }
    onClearTodoCompleted(){
        return this.userData.userDataBase.todoList = this.userData.userDataBase.todoList.filter((item: any) => !item.completed
        )
    }
    getDataTodo(){
        return this.userData.userDataBase.todoList
    }


    onDelete(id: number){
       return  this.userData.userDataBase.todoList = this.userData.userDataBase.todoList.filter((item: any) => item.id !==  id)
    }


    constructor(private Router: Router){}
}