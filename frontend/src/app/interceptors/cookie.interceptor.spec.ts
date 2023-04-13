import { TestBed } from '@angular/core/testing';

import { CookieInterceptor } from './cookie.interceptor';

describe('CookieInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CookieInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CookieInterceptor = TestBed.inject(CookieInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
