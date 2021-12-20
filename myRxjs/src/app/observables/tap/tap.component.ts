import { Component, OnInit } from '@angular/core';
import { pipe,tap,map,interval, Subscription } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';
@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  arr=['red','orange','yellow','green','blue','indigo','violet']
  data!:any
  subs!:Subscription
  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
    
    this.subs=interval(1000).pipe(tap(
      res=>{if(res==4){
       this.subs.unsubscribe()
    }})).subscribe(
      res=>this.service.elAppend(this.arr[res],"elContainer")
    )
  }

}
