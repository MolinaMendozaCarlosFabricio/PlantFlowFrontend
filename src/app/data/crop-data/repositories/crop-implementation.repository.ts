import { Observable } from "rxjs";
import { CropModel } from "../../../domain/models/Crop/crop.model";
import { ResponseCrop } from "./entities/Crop";
import { CropRepository } from "../../../domain/repositories/Crop/crop.repository";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { CropRepositoryMapper } from "./mappers/crop-getById-repository-mapper";

@Injectable({
    providedIn: "root"
})

export class CropImplementationRepository extends CropRepository {


    private url = "http://localhost:8080/crops";

    constructor (private http: HttpClient){
        super()
    }

    private cropMapper = new CropRepositoryMapper();

    getCropById(id: number): Observable<CropModel> {
        return this.http.get<ResponseCrop>(`${this.url}/${id}`)
        .pipe(
        map((response) => this.cropMapper.mapFrom(response))
        );
      }

      registerCrop(crop: CropModel): Observable<CropModel> {
        return this.http.post<any>(`${this.url}`, crop).pipe(
          map((response) => {
            return {
              id: parseInt(response.data.id),
              crop_name: response.data.attributes.crop_name,
              id_cultivation_parameter: response.data.attributes.id_cultivation_parameter,
              id_crop_type: response.data.attributes.id_crop_type,
            };
          })
        );
      }

}