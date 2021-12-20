import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
    const techSource=interval(2000).pipe(map(v=>'Tech Video #'+(v+1)),take(5))
    const comedySource=interval(4000).pipe(map(v=>'Comedy Video #'+(v+1)),take(3))
    const foodSource=interval(3000).pipe(map(v=>'Food Video #'+(v+1)),take(4))
  
  let concatObservables=concat(techSource,comedySource,foodSource)
  concatObservables.subscribe(
    res=>{
      this.service.elAppend(res,'elContainer')
    }
  )

let concatObservables2=merge(techSource,comedySource,foodSource)
  concatObservables2.subscribe(
    res=>{
      this.service.elAppend(res,'elContainer2')
    }
  )
} 
}


