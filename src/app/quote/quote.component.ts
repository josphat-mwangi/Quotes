import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Buddha',
      'John',
      'No matter how hard the past, you can always begin again',
      new Date(2020, 3, 14)
    ),
    new Quote(
      'Frank Ocean',
      'Jopa',
      'Work hard in silence, let your succes be your noise',
      new Date(2019, 6, 9)
    ),
    new Quote(
      'Oprah Winfrey',
      'Tumi',
      'Do what you have to do until you can do what you want to do',
      new Date(2020, 6, 4)
    ),
  ];

  inspirationVotes(i) {
    this.quotes[i].inspiration++;
  }
  terribleVotes(i) {
    this.quotes[i].terrible++;
  }

  addnewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        'Are you sure you want to delete ${this.quotes[index].name}?'
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
