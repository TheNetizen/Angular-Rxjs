import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, map, take, zip } from 'rxjs';

@Component({
  selector: 'app-zip-forkjoin',
  templateUrl: './zip-forkjoin.component.html',
  styleUrls: ['./zip-forkjoin.component.css']
})
export class ZipForkjoinComponent implements OnInit, AfterViewInit {
  @ViewChild('name') name!:ElementRef
  @ViewChild('clr') clr!:ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const nameobs= fromEvent<any>(this.name.nativeElement,'change').pipe(
      map(e=>e.target.value),take(4))
      
    const colorobs=fromEvent<any>(this.clr.nativeElement,'change').pipe(
      map(e=>e.target.value),take(3))
    zip(nameobs,colorobs).subscribe(([name,colr])=>{
      console.log(name,colr)
      this.changeBox(name,colr,"block")})
  
  forkJoin(nameobs,colorobs).subscribe(([name,colr])=>{
    console.log(name,colr)
    this.changeBox(name,colr,"block")})
  }

  changeBox(name:string,colr:string,id:string){
    let el=document.createElement('div')
    el.innerText=name
    el.style.color=colr
    document.getElementById(id)?.appendChild(el)
  }
}


