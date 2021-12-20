import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  data!:any
  data2!:any
  genderStatus!:any
  arr=[
    {id:1,name:'Harshita',age:25,gender:"female"},
    {id:2,name:'Kiran',age:54,gender:"female"},
    {id:3,name:'Ranjit',age:60,gender:"male"},
    {id:4,name:'Ritika',age:18,gender:"female"}
  ]
  ngOnInit(): void {
    let obs=from(this.arr)
    obs.pipe(filter(data=>data.name.length>5),toArray()).subscribe(
      res=>{console.log(res)
      this.data=res}
    )
   
  }
  filtergen(val:any){
    let obs2=from(this.arr).pipe(filter(data=>data.gender==val),toArray()).subscribe(
      res=>{console.log(res)
      this.data2=res}
    )
  }
 
}
