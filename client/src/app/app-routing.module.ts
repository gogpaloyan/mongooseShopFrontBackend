import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", loadChildren: () => import("./components/login/layout/layout.module").then((m) => m.LayoutModule) },
  {path: "home", loadChildren: () => import('./components/profile/home.module').then((m) => m.HomeModule)},
  {path: "**", loadChildren: () => import("./components/error/error.module").then((m) => m.ErrorModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
