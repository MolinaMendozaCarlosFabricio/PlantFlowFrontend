import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropPageComponent } from './crop-page/crop-page.component';
import { CardMyCropComponent } from './card-my-crop/card-my-crop.component';
import { CardStatisticsComponent } from './card-statistics/card-statistics.component';
import { CardParametersComponent } from './card-parameters/card-parameters.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeviceDataModule } from '../../data/device-data/device-data.module';
import { CropDataModule } from '../../data/crop-data/crop-data.module';

import { ChartModule } from 'primeng/chart';

import { ParametersDataModule } from '../../data/parameters-data/parameters-data.module';
import { MeasurementModule } from '../../data/measurement/measurement.module';





@NgModule({
  declarations: [
    CropPageComponent,
    CardMyCropComponent,
    CardStatisticsComponent,
    CardParametersComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    DeviceDataModule,
    CropDataModule,


    ChartModule,

    ParametersDataModule


    ChartModule,
    ParametersDataModule,
    MeasurementModule

  ]
})
export class CropModule { }
