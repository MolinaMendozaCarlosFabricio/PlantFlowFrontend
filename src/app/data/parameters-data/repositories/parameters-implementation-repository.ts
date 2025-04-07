import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { ParameterRepository } from "../../../domain/repositories/Parameters/parameter.repository";
import { CultivationParametersModel } from "../../../domain/models/Parameters/param.model";
import { ResponseCultivationParameter } from "./entities/Parameters";
import { ParameterGetByIdRepositoryMapper } from "./mappers/parameter-getById-repository-mapper";
import { ParameterSetRepositoryMapper } from "./mappers/parameter-set-repository-mapper";

@Injectable({
  providedIn: "root",
})
export class ParameterImplementationRepository extends ParameterRepository {
  constructor(private http: HttpClient) {
    super();
  }

  private url = "http://localhost:8080/params";

  parameterGetByIdMapper = new ParameterGetByIdRepositoryMapper();
  parameterSetMapper = new ParameterSetRepositoryMapper();

  GetParametersById(id: number): Observable<CultivationParametersModel> {
    return this.http
      .get<ResponseCultivationParameter>(`${this.url}/${id}`)
      .pipe(map(response => this.parameterGetByIdMapper.mapFrom(response)));
  }

  SetParameters(params: CultivationParametersModel): Observable<CultivationParametersModel> {
    return this.http.put<CultivationParametersModel>(`http://localhost:8080/params/${params.id}`, {
      humidity_min: params.humidity_min,
      humidity_max: params.humidity_max,
      temp_min: params.temp_min,
      temp_max: params.temp_max,
      max_air_con: params.max_air_con,
    });
  }

  registerParameters(cultivationParameters: CultivationParametersModel): Observable<CultivationParametersModel> {
    return this.http.post<any>(this.url, cultivationParameters).pipe(
      map((response) => ({
        id: parseInt(response.data.id),
        humidity_min: response.data.attributes.humidity_min,
        humidity_max: response.data.attributes.humidity_max,
        temp_min: response.data.attributes.temp_min,
        temp_max: response.data.attributes.temp_max,
        max_air_con: response.data.attributes.max_air_con,
        min_air_con: response.data.attributes.min_air_con
      }))
    );
  }
}
