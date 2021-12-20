import {ChangeDetectorRef, AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { EasyFunctionService } from './easy-function.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'myRxjs';
  isShown=false;
  success=false;

  constructor(private route:Router,private service:EasyFunctionService,private changeDetectorRef: ChangeDetectorRef){}
 ngOnInit(): void {
  this.service.success.subscribe(
    res=>{
      this.success=res
      console.log(this.success)
      this.changeDetectorRef.detectChanges()
    }
  )   
 }

}
