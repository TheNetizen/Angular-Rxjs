import { Component, OnInit } from '@angular/core';
import { from, interval, map } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private service:EasyFunctionService) { }
 
  ngOnInit(): void {
    let obs=from([
      {id:1,name:"Harshita"},
      {id:2,name:"Madhu"},
      {id:3,name:"Santoshini"},
      {id:4,name:"Swati"}

    ])
    obs.pipe(map(data=>data.name)).subscribe(res=>{
     
this.service.elAppend(res,"elContainer")
    })
  }

}
