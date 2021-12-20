import { Component, OnInit } from '@angular/core';
import { of,from } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';


@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private service:EasyFunctionService) { }
  obsMsg!:object
  obsPromise!:any
  ngOnInit(): void {
    let itemseq=of("Harshita","Bhanu","Kanchan","Pallavi").subscribe(res=>{
      
      this.service.elAppend(res,"elContainer")
   })
   let Obsseq=of({a:"Harshita",b:"Bhanu",c:"Kanchan",d:"Pallavi"}).subscribe(res=>{
     this.obsMsg=res
 })
 let Obs3=from(["Harshita","Bhanu","Kanchan","Pallavi"]).subscribe(res=>{
      
  this.service.elAppend(res,"elContainer3")
})
 let prom=new Promise(resolve=>{
   setTimeout(()=>{resolve("Promise Resolved")},2000)
 })
 let obs4=from(prom)
 obs4.subscribe(res=>{
   console.log(res)
   this.obsPromise=res
 })

 let obs5=from("Harshita")
 obs5.subscribe(res=>{
   this.service.elAppend(res,"elContainer5")
 })
  }
  


  
}
