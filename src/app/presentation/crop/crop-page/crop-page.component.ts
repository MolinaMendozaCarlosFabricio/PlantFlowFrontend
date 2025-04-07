import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceModel } from '../../../domain/models/Device/device.model';
import { DeviceImplementationRepository } from '../../../data/device-data/repositories/device-implementation.repository';
import { ParcelImplementationRepository } from '../../../data/parcel-data/repositories/parcel-implementation.repository';
import { CropImplementationRepository } from '../../../data/crop-data/repositories/crop-implementation.repository';
import { CropTypeImplementationRepository } from '../../../data/crop-data/repositories/cropType-implmentation.repository';
import { ParameterImplementationRepository } from '../../../data/parameters-data/repositories/parameters-implementation-repository';
import { MeasurementImplementationRepository } from '../../../data/measurement/repositories/measurement-implementation.repository';
import { MeasurementModel } from '../../../domain/models/Measurement/Measurement';

@Component({
  selector: 'app-crop-page',
  templateUrl: './crop-page.component.html',
  styleUrl: './crop-page.component.css',
})
export class CropPageComponent implements OnInit{
  // boton para cambiar de pestaña
  selectedButton: string = 'mi cultivo';

  parcelaId!: number;
  idCrop!: number;
  cropType: any = null;                                
  // cropTypeData: { id: number; crop_type_name: string; description: string } | null = null;
  deviceData: DeviceModel | null = null;
  parameters: any = [];
  measurements: MeasurementModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceImplementationRepository,
    private parcelService: ParcelImplementationRepository,
    private cropService: CropImplementationRepository,
    private getCropTypeByIdUseCase: CropTypeImplementationRepository,
    private parameterService: ParameterImplementationRepository,
    private measurementService: MeasurementImplementationRepository,
    
  ) {}

   

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.parcelaId = +id;
      //obtener datos del dispositivo
        this.cargarDatosDevice1();
          
      // parcela por id
        this.cargarDatosCrop2();

      //obtiene crop Type
      this.getCropType(this.idCrop);

      this.cargarMediciones();


      
      
      }
    });
  }

  selectButton(button: string): void {
    this.selectedButton = button;
    
    if (this.selectedButton == "mi cultivo"){
      console.log("mi cultivo")
      
    }
    if (this.selectedButton == "estadisticas"){
      console.log("estadisticas")
    }
    if (this.selectedButton == "parametros"){
      console.log("parametros")
    }
    console.log(this.selectedButton);
  }


  cargarDatosDevice1(): void {
    // get id dispostivo 
    const deviceId = localStorage.getItem('deviceId');
  
    if (deviceId) {
      this.deviceService.getDeviceByID(deviceId).subscribe({
        next: (data) => {
          this.deviceData = data;
          console.log('Dispositivo cargado:', this.deviceData);
        },
        error: (err) => console.error('Error al cargar el dispositivo:', err),
      });
    } else {
      console.error('No se encontró el ID del dispositivo en localStorage');
    }
  }

  cargarDatosCrop2(): void {
    this.parcelService.getParcelByID(this.parcelaId).subscribe({
      next: (parcelResponse) => {
        this.idCrop = parcelResponse.Id_crop;
        console.log("ID de Cultivo obtenido:", this.idCrop);
  
        // id dispositivo en el local
        const idDispositivo = parcelResponse.Id_device;
        localStorage.setItem('deviceId', idDispositivo);
        console.log("ID de Dispositivo guardado en localStorage:", idDispositivo);
  
        // cultivo por el id
        this.getCrop(this.idCrop);
      },
      error: (err) => console.error("Error al obtener parcela:", err),
    });   
  }


  getCrop(id_crop: number): void {
    this.cropService.getCropById(id_crop).subscribe({
      next: (crop) => {
        console.log('Cultivo cargado:', crop);
  
        //  tipo de cultivo con el id 
        this.getCropType(crop.id_crop_type);
        // tipo de paramtro id 
        this.getParameter(crop.id_cultivation_parameter); 
      },
      error: (err) => console.error('Error al cargar el cultivo:', err),
    });
  }
  

  getCropType(id_type_crop: number): void {
    this.getCropTypeByIdUseCase.getTypeCrop(id_type_crop).subscribe({
      next: (cropType) => {
        console.log('Tipo de cultivo cargado:', cropType);
        this.cropType = cropType;
      },
      error: (err) => console.error('Error al cargar el tipo de cultivo:', err),
    });
  }


  getParameter(idParam: number): void {
    this.parameterService.GetParametersById(idParam).subscribe({
      next: (parameterResponse) => {
        this.parameters = { ...parameterResponse }; 
        console.log("Parámetro cargado:", this.parameters);
      },
      error: (err) => console.error("Error al obtener parámetros:", err),
    });
  }
  
  guardarParametrosActualizados(parametrosActualizados: any) {
    console.log("Enviando estos parámetros al backend:", parametrosActualizados);
  
    this.parameterService.SetParameters(parametrosActualizados).subscribe({
      next: () => {
        console.log("Parámetros actualizados con éxito");
        // puedes mostrar algún mensaje al usuario aquí
      },
      error: (error) => {
        console.error("Error al actualizar los parámetros:", error);
      }
    });
  }
  

  cargarMediciones(): void {
    const deviceId = localStorage.getItem('deviceId');
  
    if (!deviceId) {
      console.error('No se encontró el ID del dispositivo en localStorage');
      return;
    }
  
    this.measurementService.getMeasurements(deviceId).subscribe({
      next: (response: any) => {
        const rawData = response.data;
        this.measurements = rawData.map((item: any) => {
          const attr = item.attributes;
          return {
            id: item.id,
            id_device: attr.id_device,
            temp: attr.temp,
            humedity: attr.humedity,
            air: attr.air,
            sun: attr.sun,
            date_and_hour: attr.date_and_hour
          };
        });
        console.log('Mediciones cargadas:', this.measurements);
      },
      error: (err) => {
        console.error('Error al cargar mediciones:', err);
      }
    });
  }

  

}       



