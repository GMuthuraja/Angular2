import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Myangular010AppComponent } from '../app/myangular010.component';

beforeEachProviders(() => [Myangular010AppComponent]);

describe('App: Myangular010', () => {
  it('should create the app',
      inject([Myangular010AppComponent], (app: Myangular010AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'myangular010 works!\'',
      inject([Myangular010AppComponent], (app: Myangular010AppComponent) => {
    expect(app.title).toEqual('myangular010 works!');
  }));
});
