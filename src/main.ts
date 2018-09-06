import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Myangular010AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Myangular010AppComponent);
