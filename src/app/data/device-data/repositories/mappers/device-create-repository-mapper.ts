import { Mapper } from "../../../../base/mapper";
import { DeviceToAdd } from "../../../../domain/models/Device/device-to-add.model";
import { ResponseDeviceCreated } from "../entities/Device";

export class DeviceCreatedRepositoryMapper extends Mapper<ResponseDeviceCreated, DeviceToAdd> {
    override mapFrom(param: ResponseDeviceCreated): DeviceToAdd {
        return {
            Id: param.ID,
            ManufacturingDate: param.Attributes.ManufacturingDate,
            IdModelDevice: param.Attributes.id_model
        }
    }
}