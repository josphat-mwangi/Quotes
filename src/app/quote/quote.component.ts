import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { Author: '', name: '', description: '1' },
    { Author: '', name: '', description: '2' },
    { Author: '', name: '', description: '3' },
    { Author: '', name: '', description: '4' },
    { Author: '', name: '', description: '5' },
    { Author: '', name: '', description: '6' },
  ];

  constructor() {}

  ngOnInit() {}
}
