import { Observable } from "rxjs";
import { CropModel } from "../../models/Crop/crop.model";
import { CropRepository } from "../../repositories/Crop/crop.repository";

export class RegisterCropUseCase {
  constructor(private readonly cropRepository: CropRepository) {}

  execute(crop: CropModel): Observable<CropModel> {
    return this.cropRepository.registerCrop(crop);
  }
}
