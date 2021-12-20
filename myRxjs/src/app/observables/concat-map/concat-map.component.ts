import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
    const obs=from(['Tech','Comedy','News'])
    obs.pipe(map(res=>this.getData(res))).subscribe(
      res=>res.subscribe(
        res2=>this.service.elAppend(res2,'elContainer')
      )
    )
    obs.pipe(map(res=>this.getData(res)),concatAll()).subscribe(
      
        res=>this.service.elAppend(res,'elContainer2')
      
    )
    obs.pipe(concatMap(res=>this.getData(res))).subscribe(
      
      res=>this.service.elAppend(res,'elContainer3')
    
  )
  }
 getData(val:any){
     return of(val + ' Video').pipe(delay(1000))
 }
}
