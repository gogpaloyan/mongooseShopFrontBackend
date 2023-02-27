

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guard/auth.guard";
import { HomeComponent } from "./home.component";
import { MyProfile } from "./myProfile/myProfile.component";
import { StoreComponent } from "./store/store.component";
import { NavigationListComponent } from "./store/applications/navigationList/navigationList.component";
import { BasketComponent } from "./basket/basket.component";
import { MyProductComponent } from "./myProduct/component/myProduct.component";
import { GlobalProductComponent } from "./store/applications/globalProduct/component/globalProduct.component";



let routes : Routes = [
    {path: "", canActivate: [AuthGuard], component: HomeComponent, 

  children: [
    {path: "", component: MyProfile},
    {path:"store", component: StoreComponent, children:[
      {path:"", component: NavigationListComponent},
      {path:"todo", loadChildren: () => import("./store/applications/todo/todo.module").then((m) => m.TodoModule)},
      {path:"mongo", loadChildren: () => import("./store/applications/mongo/mongo.module").then((m) => m.MongoModule)},
      {path:"globalproduct", component: GlobalProductComponent},
      {path:"globalproduct/product/:id", loadChildren: () => import("./store/applications/globalProduct/component/personGlobalProduct/component/personGlobalProduct.module").then((m) => m.PersonGlobalModule)  },
      {path:'applist', loadChildren: () => import('./store/applications/appList/appList.module').then((d) => d.AppListModule)}
    ]},
    {path:"basket", component: BasketComponent},
    {path:"myproduct", component: MyProductComponent}
  ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})



export class HomeRoutingModule{}