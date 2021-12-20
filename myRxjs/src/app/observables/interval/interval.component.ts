import { Component, OnInit } from '@angular/core';
import { interval, Subscription} from 'rxjs'
import { EasyFunctionService } from 'src/app/easy-function.service';
@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  ItemSubscription!:Subscription
  val!:any
  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
  }
  startSubscription(){
     let intervalSubscription=interval(1000)
     this.ItemSubscription= intervalSubscription.subscribe(
       res=>{
         this.val="Item"+res
         this.service.elAppend(this.val,"elContainer")
        }
     )
  }
  stopSubscription(){
   this.ItemSubscription.unsubscribe()
  }
 
}