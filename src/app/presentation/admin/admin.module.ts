import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormAddDeviceComponent } from './form-add-device/form-add-device.component';
import { TableDevicesComponent } from './table-devices/table-devices.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminPageComponent,
    FormAddDeviceComponent,
    TableDevicesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminModule { }
