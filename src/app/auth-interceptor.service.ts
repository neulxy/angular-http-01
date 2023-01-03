import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // do some pre-processing before sending a request
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz'),
    });
    return next.handle(modifiedRequest);
  }
}
