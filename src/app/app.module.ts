import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParcelModule } from './presentation/parcel/parcel.module';
import { CropModule } from './presentation/crop/crop.module';
import { AsideComponent } from "./presentation/shared/aside/aside.component";
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "./presentation/shared/nav-bar/nav-bar.component";
import { UserModule } from './presentation/user/user.module';
import { AuthModule } from './presentation/auth/auth.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { AdminModule } from './presentation/admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParcelModule,
    CropModule,
    UserModule,
    AsideComponent,
    FormsModule,
    AuthModule,
    NavBarComponent,
    AdminModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
