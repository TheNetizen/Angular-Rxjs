import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';
import { EasyFunctionService } from 'src/app/easy-function.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  status = false;
  status2 = false;
  data!: any;
  constructor(private serv: EasyFunctionService) {}

  ngOnInit(): void {}
  fetchData() {
    this.status=true
    this.serv.getData().subscribe(res=> {
      console.log(res);
      this.data = res;
      this.status = false;
    },err=>{
      this.status = false;
      console.log(err)
    }
      );

  }
  fetchData2(){
    this.status2=true
    this.serv.getData().pipe(retryWhen(err=>err.pipe(
      delay(200),
      scan(retryCount=>{
        if(retryCount>=3){
          throw err
        }else{
          retryCount+=1
          console.log(retryCount)
        }
        return retryCount
      },0)
    ))).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.status2 = false;
    },
      (err)=>{
      this.status2 = false;
      this.data="Error"
      console.log(err)
    });
  }
}
