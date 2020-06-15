export class Quote {
  inspiration: number;
  terrible: number;
  showDescription: boolean;
  constructor(
    public Author: string,
    public name: string,
    public description: string
  ) {
    this.inspiration = 0;
    this.terrible = 0;
    this.showDescription = false;
  }
}
