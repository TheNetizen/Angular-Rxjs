import { Component, OnDestroy, OnInit } from '@angular/core';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,OnDestroy{
  username!:string
constructor(private service:EasyFunctionService) { }

ngOnInit(): void {
this.service.success.next(true)
this.service.username.subscribe(
  res=>{
    this.username=res
  }
)
  }
ngOnDestroy(): void {
  this.service.success.next(false)  
}
}
