import { Component } from '@angular/core';
import { DeviceToAdd } from '../../../domain/models/Device/device-to-add.model';
import { DeviceImplementationRepository } from '../../../data/device-data/repositories/device-implementation.repository';

@Component({
  selector: 'app-form-add-device',
  templateUrl: './form-add-device.component.html',
  styleUrl: './form-add-device.component.css'
})
export class FormAddDeviceComponent {
  newDevice: DeviceToAdd = {
    Id: "",
    ManufacturingDate: "",
    IdModelDevice: 0
  }

  constructor(
    private deviceImplementation: DeviceImplementationRepository
  ) {}

  add(){
    // this.newDevice.ManufacturingDate = Date.now().toString
    this.deviceImplementation.createDevice(this.newDevice).subscribe({
      next: (response) => {
        console.log("Respuesta del servidor:", response)
      },
      error: (error) => {
        console.log("Error:", error)
      }
    })

    this.newDevice = {
      Id: "",
      ManufacturingDate: "",
      IdModelDevice: 0
    }
  }
}
