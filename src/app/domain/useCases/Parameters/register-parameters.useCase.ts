import { Observable } from "rxjs";
import { UseCase } from "../../../base/use-case";
import { CultivationParametersModel } from "../../models/Parameters/param.model";
import { ParameterRepository } from "../../repositories/Parameters/parameter.repository";

export class RegisterParametersUseCase implements UseCase<CultivationParametersModel, CultivationParametersModel> {
  constructor(private parameterRepository: ParameterRepository) {}

  execute(parameters: CultivationParametersModel): Observable<CultivationParametersModel> {
    return this.parameterRepository.registerParameters(parameters);
  }
}
