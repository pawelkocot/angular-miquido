import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class StreamService {
  private countryCodesSubject = new Subject<string>();
  // private countryCodesSubject = new ReplaySubject<string>(1);
  // private countryCodesSubject = new BehaviorSubject<string>(this.random());
  public countryCode$: Observable<string>;
  private current: string;

  constructor() {
    this.countryCode$ = Observable.from(this.countryCodesSubject);
  }

  public getCurrent(): string {
    let cc = this.current;
    if (!cc) {
      cc = this.random();
    }
    this.setNew(cc);

    return cc;
  }

  private setNew(cc) {
    this.current = cc;
    this.countryCodesSubject.next(cc);
  }

  public changeCountryCode() {
    this.setNew(this.random(this.current));
  }

  private random(skip?): string {
    const ccs = ['pl', 'de', 'en', 'it', 'es', 'uk', 'us','ua', 'ru', 'ch',].filter(cc => cc !== skip);

    return _.sample(ccs);
  }
}
