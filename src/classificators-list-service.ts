import {inject} from "aurelia-framework";
import {Classificator, ClassificatorService} from "./classificators";

@inject(ClassificatorService)
export class ClassificatorsListService {
  constructor(private service: ClassificatorService) {
  }

  getClassificators(): Classificator[] {
    return this.service.getList();
  }
}