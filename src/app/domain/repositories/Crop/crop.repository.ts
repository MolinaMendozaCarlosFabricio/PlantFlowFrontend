import { Observable } from "rxjs";
import { CropModel } from "../../models/Crop/crop.model";


export abstract class CropRepository{
    abstract registerCrop(crop: CropModel ): Observable<CropModel>
    abstract getCropById( id : number): Observable<CropModel>

}

