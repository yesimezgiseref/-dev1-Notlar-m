import { Injectable } from '@angular/core';
declare let alertify:any; //sistemdeki javascript dosyalarında alertify nesnesini buluyor.

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }
}
