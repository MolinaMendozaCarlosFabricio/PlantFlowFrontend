import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelPageComponent } from './presentation/parcel/parcel-page/parcel-page.component';
import { CropPageComponent } from './presentation/crop/crop-page/crop-page.component';
import { FormParcelComponent } from './presentation/parcel/form-parcel/form-parcel.component';
import { SettingsPageComponent } from './presentation/user/settings-page/settings-page.component';
import { LoginComponent } from './presentation/auth/pages/login/login.component';
import { RegisterComponent } from './presentation/auth/pages/register/register.component';
import { AdminPageComponent } from './presentation/admin/admin-page/admin-page.component';

const routes: Routes = [

  {path:"parcel",component:ParcelPageComponent},
  {path:"parcel/add",component:FormParcelComponent},
  {path:"crop/:id",component:CropPageComponent},
  {path:"settings",component:SettingsPageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin/devices",component:AdminPageComponent},
  {path:'', redirectTo:'parcel', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
