import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DataService } from './Service/data.service';
import { MyProfile } from './components/profile/myProfile/myProfile.component';
import { StoreComponent } from './components/profile/store/store.component';
import { ProductsService } from './Service/product.service';
import { NavigationListComponent } from './components/profile/store/applications/navigationList/navigationList.component';
import { BasketComponent } from './components/profile/basket/basket.component';
import { AppListService } from './Service/appList.service';
import { NgxsModule } from '@ngxs/store';
import { AppTodoState } from './store/todoApp/state/todoApp.state';
import { MongoDbService } from './Service/mongoDb.service';
import { MyProductComponent } from './components/profile/myProduct/component/myProduct.component';
import { HoverDirectiveDirective } from './directive/hoverDirective.directive';
import { ProductHoverDirective } from './directive/productHover.directive';
import { LikePipe } from './pipe/like.pipe';
import { MoreLessModule } from './modal/moreLess/moreLess.module';
import { MinGlobalModule } from './components/profile/store/applications/globalProduct/component/personGlobalProduct/minGlobalComponent/minGlobalModule';
import { AppMongoComments } from './store/mongo/state/mongo.state';


@NgModule({
  declarations: [
    AppComponent,
    MyProfile,
    StoreComponent,
    NavigationListComponent,
    BasketComponent,
    MyProductComponent,

    HoverDirectiveDirective,
    ProductHoverDirective,

    LikePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MoreLessModule,
    MinGlobalModule,
    
    
    NgxsModule.forRoot([AppTodoState, AppMongoComments])

  ],

  providers: [DataService, ProductsService, AppListService, MongoDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
