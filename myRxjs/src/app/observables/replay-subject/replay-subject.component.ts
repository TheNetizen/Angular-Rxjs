import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  arr1=['Angular 1','Angular 2']
  arr2:Array<string>=[]
  arr3:Array<string>=[]
  subStatus1=false
  subStatus2=false
  subs1!:Subscription
  subs2!:Subscription
  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
    this.service.replayData.subscribe(
      res=>this.arr1.push(res)
    )
  }
  emitData(val:any){
      this.service.replayData.next(val)
  }
  subClick1(){
    if(this.subStatus1){
      this.subs1.unsubscribe()
    }else{
      this.subs1=this.service.replayData.subscribe(
        res=>{
        
         this.arr2.push(res)
        }
      )
    }
    
this.subStatus1=!this.subStatus1
  }
  subClick2(){
    if( this.subStatus2){
      this.subs2.unsubscribe()
    }else{this.subs2=this.service.replayData.subscribe(
      res=>{
      
       this.arr3.push(res)
      }
    )}
    
    this.subStatus2=!this.subStatus2
  }
}
