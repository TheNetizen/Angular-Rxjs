import { Component, OnInit } from '@angular/core';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

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
