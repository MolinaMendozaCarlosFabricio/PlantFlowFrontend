import { Observable } from "rxjs";
import { DeviceModel } from "../../models/Device/device.model";
import { DeviceToAdd } from "../../models/Device/device-to-add.model";


export abstract class DeviceRepository {
    abstract getDeviceByID (id: string) : Observable<DeviceModel>
    abstract createDevice (device : DeviceToAdd) : Observable <DeviceToAdd>
}
