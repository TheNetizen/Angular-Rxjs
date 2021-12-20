import { Component, OnInit } from '@angular/core';
import { from, interval, map, take, takeLast, takeUntil, tap, timer } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  
  data!: any;
  obs = from(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'])
  constructor(private serv: EasyFunctionService) {}

  ngOnInit(): void {
    

    
    console.log("ok")
    
    this.obs.pipe(take(5)).subscribe((res) => {
      this.serv.elAppend(res, 'elContainer');
    });

    this.obs.pipe(tap(data=>console.log(data)),
    takeLast(5)).subscribe((res)=>{
      this.serv.elAppend(res,'elContainer2')
    })

  const source=interval(1000)
  const timer1=timer(6000)
  source.pipe(takeUntil(timer1),map(data=>'Number '+data)).subscribe(
    res=>{
        this.serv.elAppend(res,'elContainer3')
    }
  )
  }
}
