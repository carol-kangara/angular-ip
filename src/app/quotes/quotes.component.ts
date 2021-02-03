import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [

    {id:1,quote:"Life is what happens when you're busy making other plans.",author:'John Lennon',completeDate: new Date(2021,2,7)},
    {id:2, quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",author:'Steve jobs',completeDate: new Date(2021,2,7)},
    {id:3,quote:"If life were predictable it would cease to be life, and be without flavor.",author:'Eleanor Roosevelt',completeDate: new Date(2021,2,7)},
    {id:4,quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",author:'oprah Winfrey',completeDate: new Date(2021,2,7)},
    {id:5,quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",author:'James Cameroon',completeDate: new Date(2021,2,7)}
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
  displayInfo(index:any){
    this.quotes[index]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
