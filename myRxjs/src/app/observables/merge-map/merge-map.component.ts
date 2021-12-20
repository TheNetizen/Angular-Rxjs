import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delay, from, map, merge, mergeAll, mergeMap, of } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
    const obs=from(['Tech','Comedy','News'])
    obs.pipe(map(res=>this.getData(res))).subscribe(
      res=>res.subscribe(
        res2=>this.service.elAppend(res2,'elContainer')
      )
    )
    obs.pipe(map(res=>this.getData(res)),mergeAll()).subscribe(
      
        res=>this.service.elAppend(res,'elContainer2')
      
    )
    obs.pipe(mergeMap(res=>this.getData(res))).subscribe(
      
      res=>this.service.elAppend(res,'elContainer3')
    
  )
  }
 getData(val:any){
     return of(val + ' Video').pipe(delay(1000))
 }
}
