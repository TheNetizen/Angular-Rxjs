import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-custom-observables',
  templateUrl: './custom-observables.component.html',
  styleUrls: ['./custom-observables.component.css']
})
export class CustomObservablesComponent implements OnInit {

  constructor(private service:EasyFunctionService) { }
  obsStatus!:string
  obsString2!:any
  obsStatus2!:string
  ngOnInit(): void {
    const customobs=new Observable(
      observer=>{
        setTimeout(()=>{ observer.next('Harshita')},1000)
        setTimeout(()=>{ observer.next('Swati')},2000)
        setTimeout(()=>{ observer.next('Santoshini')
      //,observer.error('error')
    },3000)
        setTimeout(()=>{ observer.next('Madhu')},4000)
        setTimeout(()=>{ observer.next('Shashwati'),observer.complete()},5000)
      }
    )
    customobs.subscribe(res=>{
      this.service.elAppend(res,'elContainer')
    },
    error=>{this.obsStatus='Error'},
    ()=>{
      this.obsStatus="Success"
    })
    let count=0
    let arr=['Harshita','Swati','Santoshini','Madhu']
    const obs2=new Observable(observer=>{

      setInterval(()=>{observer.next(arr[count])
        if(count==3){
          observer.error('error')
                }
                if(count==4){
                  observer.complete()
                }
              count++},1000)
     
    } )
    obs2.subscribe(res=>{
      this.obsString2=res
    },
    err=>{this.obsStatus2="error"},
    ()=>{this.obsStatus2="success"}
    )
    
  }

}
