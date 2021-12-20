import { Component, OnInit } from '@angular/core';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  username!:string
  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
    this.service.username.subscribe(
      res=>{
        this.username=res
      }
    )
  }
  changeVal(val:string){
     this.username=val
     this.service.username.next(val)
  }
}
