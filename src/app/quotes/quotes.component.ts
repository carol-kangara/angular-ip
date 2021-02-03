import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1, "Life is what happens when you're busy making other plans.",'John Lennon',new Date(2021,2,7)),
    new Quotes(2, "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",'John Lennon',new Date(2021,2,7)),
    new Quotes(3,"If life were predictable it would cease to be life, and be without flavor.",'Eleanor Roosevelt',new Date(2021,2,7)),
    new Quotes(4,"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",'oprah Winfrey',new Date(2021,2,7)),
    new Quotes(5,"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",'James Cameroonnew',new Date(2021,2,7)),
  ];
  addedQuotes(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(Read:any, index:any){
    if (Read) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  toggleDetails(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }
  displayInfo(index:any){
    this.quotes[index]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
