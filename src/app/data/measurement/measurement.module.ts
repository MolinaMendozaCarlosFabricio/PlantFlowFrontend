import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementRepository } from '../../domain/repositories/Measurement/measurement.repository';
import { takeMeasurementUseCase } from '../../domain/useCases/Measurement/take-measurement.useCase';
import { getMeasurementsUseCase } from '../../domain/useCases/Measurement/get-measurements.useCase';
import { MeasurementImplementationRepository } from './repositories/measurement-implementation.repository';


const takeMeasurementUseCaseFactory = (repo: MeasurementRepository) => new takeMeasurementUseCase(repo);
export const takeMeasurementUseCaseProvider = {
  provide: takeMeasurementUseCase,
  useFactory: takeMeasurementUseCaseFactory,
  deps: [MeasurementRepository]
};

const getMeasurementsUseCaseFactory = (repo: MeasurementRepository) => new getMeasurementsUseCase(repo);
export const getMeasurementsUseCaseProvider = {
  provide: getMeasurementsUseCase,
  useFactory: getMeasurementsUseCaseFactory,
  deps: [MeasurementRepository]
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    takeMeasurementUseCaseProvider,
    getMeasurementsUseCaseProvider,
    { provide: MeasurementRepository, useClass: MeasurementImplementationRepository }
  ]
})
export class MeasurementModule { }
