import { Component, OnInit } from '@angular/core';
import { concatAll, delay, from, map, of, switchAll, switchMap } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

 
  constructor(private service:EasyFunctionService) { }

  ngOnInit(): void {
    const obs=from(['Tech','Comedy','News'])
    obs.pipe(map(res=>this.getData(res))).subscribe(
      res=>res.subscribe(
        res2=>this.service.elAppend(res2,'elContainer')
      )
    )
    obs.pipe(map(res=>this.getData(res)),switchAll()).subscribe(
      
        res=>this.service.elAppend(res,'elContainer2')
      
    )
    obs.pipe(switchMap(res=>this.getData(res))).subscribe(
      
      res=>this.service.elAppend(res,'elContainer3')
    
  )
  }
 getData(val:any){
     return of(val + ' Video').pipe(delay(1000))
 }

}
