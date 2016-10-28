export class ClassificatorService {
  getList(): Classificator[] {
    return [
      { id: 1, value: "klassifikaator 1" },
      { id: 2, value: "klassifikaator 2" },
      { id: 3, value: "klassifikaator 3" },
      { id: 4, value: "klassifikaator 4" },
      { id: 5, value: "klassifikaator 5" },
      { id: 6, value: "klassifikaator 6" },
      { id: 7, value: "klassifikaator 7" },
    ]
  }
}

export interface Classificator{
  id: number;
  value: string;
}
