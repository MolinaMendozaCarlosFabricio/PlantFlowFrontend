import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { DeviceToAdd } from "../../models/Device/device-to-add.model";
import { DeviceRepository } from "../../repositories/Device/device.repository";

export class CreateDeviceUseCase implements UseCase<DeviceToAdd, DeviceToAdd>{
    constructor(private deviceRepository: DeviceRepository) {}
    execute(params: DeviceToAdd): Observable<DeviceToAdd> {
        return this.deviceRepository.createDevice(params)
    }
}