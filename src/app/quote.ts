export class Quote {
  showDescription: boolean;
  constructor(
    public Author: string,
    public name: string,
    public description: string
  ) {
    this.showDescription = false;
  }
}
