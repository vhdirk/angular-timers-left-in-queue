import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SampleService } from './sample.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [NoopAnimationsModule, RouterTestingModule],
    providers: [
      mockProvider(SampleService, {
        getVar: jest.fn(() => of('Test')),
      }),
    ],
  });

  beforeEach(fakeAsync(() => (spectator = createComponent())));

  it('should create the app', fakeAsync(() => {
    const app = spectator.component;
    // spectator.tick(500);
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'angtest'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('angtest');
  // });

});
