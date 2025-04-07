import { Observable } from "rxjs";
import { CultivationParametersModel } from "../../models/Parameters/param.model";

export abstract class ParameterRepository {
    abstract registerParameters(cultivationParameters: CultivationParametersModel): Observable<CultivationParametersModel>;
    abstract SetParameters(cultivationParameters: CultivationParametersModel): Observable<CultivationParametersModel>;
    abstract GetParametersById(id : number): Observable<CultivationParametersModel>;
    // abstract GetParametersByParcel(id: number): Observable<CultivationParametersModel>;
    // abstract UpdateParameters(cultivationParameters: CultivationParametersModel): Observable<CultivationParametersModel>;
    // abstract DeleteParameters(id: number): Observable<void>;
}