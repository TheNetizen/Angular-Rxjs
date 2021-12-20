import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

 
 
  val:string=''
  subs1!:Subscription
  
  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
    this.subs1=this.service.asyncData.subscribe(
    res=>{
      this.val=res
      console.log(res)
    }
    )
  }
  emitData(val:any){
      console.log(val)
      this.service.asyncData.next(val)
  }
  subClick1(){
   this.service.asyncData.complete()
    

  }
 
}
