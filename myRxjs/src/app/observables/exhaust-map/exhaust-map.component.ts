import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit,AfterViewInit {
  num=0
  @ViewChild('btn') btn!:ElementRef
  constructor(private serv:EasyFunctionService) { }

  ngOnInit(): void {

  }
ngAfterViewInit():void{
   fromEvent(this.btn.nativeElement,'click').pipe(
     exhaustMap(()=>this.serv.getExhaustMapData())
   ).subscribe(
     res=>{console.log(res)
           this.num++}
   )
}
}
