import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SetParametersUseCase } from '../../domain/useCases/Parameters/set-parameters.useCase';
import { ParameterRepository } from '../../domain/repositories/Parameters/parameter.repository';
import { GetParameterByIdUseCase } from '../../domain/useCases/Parameters/getById-parameters.useCase';
import { ParameterImplementationRepository } from './repositories/parameters-implementation-repository';
import { RegisterParametersUseCase } from '../../domain/useCases/Parameters/register-parameters.useCase';


const setParametersCaseFactory = (parametersRepo: ParameterRepository) => new SetParametersUseCase(parametersRepo)

export const setParametersUseCaseProvider = {
  provide: SetParametersUseCase,
  useFactory: setParametersCaseFactory,
  deps: [ParameterRepository]
}

const GetParametersByIdCaseFactory = (parametersRepo: ParameterRepository) => new GetParameterByIdUseCase(parametersRepo)

export const GetParameterByIdUseCaseProvider ={
  provide: GetParameterByIdUseCase,
  useFactory: GetParametersByIdCaseFactory,
  deps: [ParameterRepository]

}

const registerParametersFactory = (parameterRepo: ParameterRepository) =>new RegisterParametersUseCase(parameterRepo);
export const registerParametersProvider = {
  provide: RegisterParametersUseCase,
  useFactory: registerParametersFactory,
  deps: [ParameterRepository],
};

@NgModule({
  providers:[
    setParametersUseCaseProvider, GetParameterByIdUseCaseProvider,  registerParametersProvider,
    {provide: ParameterRepository, useClass:ParameterImplementationRepository}
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ParametersDataModule { }
