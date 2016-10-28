import {inject, bindable} from "aurelia-framework";
import {Classificator, ClassificatorService} from "./classificators";

@inject(ClassificatorService)
export class ClassificatorsList {
  @bindable classificatorsList: Classificator[];

  constructor(private service: ClassificatorService) {
  }
}