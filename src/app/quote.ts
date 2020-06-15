export class Quote {
  inspiration: number;
  terrible: number;
  showDescription: boolean;
  constructor(
    public Author: string,
    public name: string,
    public description: string,
    public completeDate: Date
  ) {
    this.inspiration = 0;
    this.terrible = 0;
    this.showDescription = false;
  }
}
