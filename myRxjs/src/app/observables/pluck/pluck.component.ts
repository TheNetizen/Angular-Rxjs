import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
   
  constructor() { }
  arr!:any
  arrname!:any
  ngOnInit(): void {
    let obs=from([{
      id:1,
      name:'Harshita',
      job:{
        title:'Frontend Developer',
        exp:2
      }
    },
    {
      id:2,
      name:'Harshita',
      job:{
        title:'Frontend Developer',
        exp:3
      }
    },{
      id:3,
      name:'Harshita',
      job:{
        title:'Frontend Developer',
        exp:2
      }
    },{
      id:4,
      name:'Harshita',
      job:{
        title:'Frontend Developer',
        exp:2
      }
    }
  ])
  obs.pipe(pluck('name'),toArray()).subscribe(
    res=>{
      console.log(res)
      this.arrname=res
    }
  )
  obs.pipe(pluck('job','title'),toArray()).subscribe(
    res=>{
      console.log(res)
      this.arr=res
    }
  )
  console.log(this.arr)
  }
}
