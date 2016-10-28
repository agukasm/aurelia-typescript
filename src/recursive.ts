import {bindable} from "aurelia-framework";

export class Recursive {
  @bindable firstName: string = "";
  @bindable lastName: string = "";

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}