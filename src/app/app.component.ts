import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'angtest';
  somevar$: Observable<boolean>;

  constructor(public sampleService: SampleService) {
    this.somevar$ = this.sampleService.getVar().pipe(flatMap(v => this.sampleService.getOtherVar()), map(v => v === 'Hello'))
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
