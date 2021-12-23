import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit, AfterViewInit {
  @ViewChild('name') name!:ElementRef
  @ViewChild('clr') clr!:ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
     const nameval= fromEvent<any>(this.name.nativeElement,'change').pipe(map(e=>e.target.value))
      
     const clrval= fromEvent<any>(this.clr.nativeElement,'change').pipe(map(e=>e.target.value))
     combineLatest(nameval,clrval).subscribe(([name,color])=>this.createBox(name,color,"block"))
     nameval.pipe(withLatestFrom(clrval)).subscribe(([name,color])=>this.createBox(name,color,"block2"))
  }

  createBox(name:string,clr:string,containerId:string){
     let el=document.createElement('div')
     el.innerText=name
     el.style.color=clr
     document.getElementById(containerId)?.appendChild(el)
  }
}
