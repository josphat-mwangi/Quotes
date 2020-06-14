import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, '', '', '1'),
    new Quote(2, '', '', '2'),
    new Quote(3, '', '', '3'),
    new Quote(4, '', '', '4'),
    new Quote(5, '', '', '5'),
    new Quote(6, '', '', '6'),
  ];
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
