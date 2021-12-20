import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-and-distinct',
  templateUrl: './debounce-and-distinct.component.html',
  styleUrls: ['./debounce-and-distinct.component.css']
})
export class DebounceAndDistinctComponent implements AfterViewInit {
  @ViewChild('myInput') myInput!:ElementRef
  @ViewChild('myInput2') myInput2!:ElementRef
  constructor() { }

  ngAfterViewInit(): void {
    //Ex-01
   const searchItem= fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
     map(e=>e.target.value),
     debounceTime(500)
   )
   searchItem.subscribe(
     res=>{
       console.log(res)
     }
   )

   //Ex-02
   const searchItem2= fromEvent<any>(this.myInput2.nativeElement,'keyup').pipe(
    map(e=>e.target.value)
  )
  searchItem2.subscribe(
    res=>{
      console.log(res)
    }
  )
  }

}
