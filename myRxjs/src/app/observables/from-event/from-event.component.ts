import { Component, ElementRef, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';
@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit{
  @ViewChild('addbtn') addbtn!:ElementRef
  constructor(private service:EasyFunctionService) { }
  count=0
  ngOnInit(): void {
  }
 ngAfterViewInit(){
  fromEvent<MouseEvent>(this.addbtn.nativeElement,'click').subscribe(
    res=>{
      let val="Item "+ this.count++
     
      this.service.elAppend(val,"elContainer")
      this.service.elAppend(val,"elContainer2")}
  )
 }
 
}