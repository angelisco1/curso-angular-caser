import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const peticionConAuthToken = req.clone({ headers: req.headers.set('Authorization', 'ad67asd6a7sd8as7d3daf')});

    return next.handle(peticionConAuthToken); //.subscribe(resp => {});
  }
}
