
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Gideon Maroko', "“Education is the most powerful weapon which you can use to change the world if you are planning for a lifetime, educate people............", new Date(2021, 1, 20)),
    new Quote(2, 'Stephine Ndele', "“If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people”", new Date(2021, 1, 12)),
    new Quote(3, 'David Hashisoma', "“When you educate one person you can change a life, when you educate many you can change the world if you are planning for a lifetime, educate”", new Date(2021, 1, 17)),
    new Quote(4, 'Rose Okoth ', "“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.” ", new Date(2021, 2, 15)),
  ];

  like(index) {
    this.quotes[index].like++;
  }

  unlike(index) {
    this.quotes[index].unlike++;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Thank you for viewing this Quote.Do you want to delete it. ${this.quotes[index].user}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}