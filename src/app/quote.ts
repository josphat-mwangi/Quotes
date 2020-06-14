export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public Author: string,
    public name: string,
    public description: string
  ) {
    this.showDescription = false;
  }
}
