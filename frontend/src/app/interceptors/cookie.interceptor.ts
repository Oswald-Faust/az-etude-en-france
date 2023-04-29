import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class CookieInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe( 
      tap( (event: HttpEvent<any>) => { 
          // console.log('Tap event : ', event); 
          if (event instanceof HttpResponse) { 
            // console.log('Http response : ', event, event.status); 
            if (event.body.token != null) {
              const token = event.body.token;
              const cookie = "access_token="+token;
              document.cookie = cookie;
            }
          } 
        } 
      ), 
      catchError( error => { 
          console.log('Interceptor ', error);  
          return throwError(() => error); 
          }) 
      );
  }
}
