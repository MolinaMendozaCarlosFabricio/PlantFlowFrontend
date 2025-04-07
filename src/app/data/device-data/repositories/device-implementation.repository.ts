import { Observable } from "rxjs";
import { DeviceModel } from "../../../domain/models/Device/device.model";
import { ResponseDevice, ResponseDeviceCreated } from "./entities/Device";
import { DeviceRepository } from "../../../domain/repositories/Device/device.repository"; 
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { DeviceGetByIdRepositoryMapper } from "./mappers/device-getById-repository-mapper";
import { DeviceToAdd } from "../../../domain/models/Device/device-to-add.model";
import { DeviceCreatedRepositoryMapper } from "./mappers/device-create-repository-mapper";

@Injectable({
  providedIn: "root",
})
export class DeviceImplementationRepository extends DeviceRepository {
  private url = "http://localhost:8080/devices";

  constructor(private http: HttpClient) {
    super();
  }
  
  private deviceGetByIdMapper = new DeviceGetByIdRepositoryMapper();
  private deviceCreateMapper = new DeviceCreatedRepositoryMapper();

  getDeviceByID(id: string): Observable<DeviceModel> {
    return this.http
      .get<ResponseDevice>(`${this.url}/one/${id}`) 
      .pipe(
        map((response) => {
          return this.deviceGetByIdMapper.mapFrom(response); 
        })
      );
  }

  override createDevice(device: DeviceToAdd): Observable<DeviceToAdd> {
      return this.http
        .post<ResponseDeviceCreated>(`${this.url}/`, device)
        .pipe(
          map((response) => {
            return this.deviceCreateMapper.mapFrom(response)
          })
        )
  }
}
