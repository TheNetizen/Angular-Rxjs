import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, retry, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EasyFunctionService {
  success=new Subject<boolean>()
  username=new BehaviorSubject<string>('Harshita')
  replayData=new ReplaySubject<string>(3,5000)
  asyncData=new AsyncSubject<string>()
  constructor(private http:HttpClient) { }
  elAppend(val:any,id:any){
    let el=document.createElement('li')
    el.innerText=val
    document.getElementById(id)?.appendChild(el)
  }
  getData():Observable<any>{
    return this.http.get<any>('http://localhost:3000').pipe(retry(3))
  }
  getExhaustMapData():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos').pipe(retry(3))
  }
}
