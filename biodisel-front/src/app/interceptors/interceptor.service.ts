import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Authorization' : 'Basic'+ Buffer.from('uwu' + ':' + 'cordero13').toString('base64')
    });

    const reqClone = req.clone({
      headers 
    });

    return next.handle( reqClone);
  }
}
