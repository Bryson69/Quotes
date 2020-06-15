import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Input () isComplete = new EventEmitter<boolean>();


  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upvote () { 
    this.quote.upvote = this.quote.upvote +1;
  }  

  downvote() {
    this.quote.downvote = this.quote.downvote +1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
