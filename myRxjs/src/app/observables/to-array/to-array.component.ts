import { Component, OnInit } from '@angular/core';

import { from, interval, Subscription, toArray,take, of } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  arr=[]
  count=0
  msg!:any
  msgFrom!:any 
  msgOf!:any
  constructor() { }
   stopSubs!:Subscription
  ngOnInit(): void {
   
   let obs=interval(1000)
   this.stopSubs=obs.pipe(take(5),toArray()).subscribe(res=>{
     
     this.msg=res
    
    })
 
  const obs2=from([{Firstname:"Harshita",Lastname:"Gupta"},{Firstname:"Ritika",Lastname:"Gupta"},{Firstname:"Kiran",Lastname:"Gupta"}]).pipe(toArray()).subscribe(
    res=>{
      
     this.msgFrom=res
    }
  )
  
  const obs3=of("Harshita","Gupta").pipe(toArray()).subscribe(
    res=>{
      this.msgOf=res
    }
  )
}
}