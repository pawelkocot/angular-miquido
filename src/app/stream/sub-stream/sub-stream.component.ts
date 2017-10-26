import { Component, OnDestroy, OnInit } from '@angular/core';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-sub-stream',
  templateUrl: './sub-stream.component.html',
  styleUrls: ['./sub-stream.component.css']
})
export class SubStreamComponent implements OnInit, OnDestroy {
  public countryCode: string;

  constructor(private streamService: StreamService) { }

  ngOnInit() {
    console.log('sub - init');

    this.countryCode = this.streamService.getCurrent();
    this.streamService.countryCode$.subscribe(countryCode => {
      console.log('sub component notified!');
      this.countryCode = countryCode;
    })
  }

  ngOnDestroy() {
    console.log('sub - destroy')
  }

}
