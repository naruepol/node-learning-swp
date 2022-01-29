import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (true) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.apiToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
