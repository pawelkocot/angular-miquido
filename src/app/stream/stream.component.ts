import { Component, OnInit } from '@angular/core';
import { StreamService } from './stream.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  public countryCode: string;
  public subVisible = false;

  constructor(private streamService: StreamService) { }

  ngOnInit() {
    this.countryCode = this.streamService.getCurrent();
    this.streamService.countryCode$.subscribe(countryCode => {
      console.log('notified!');
      this.countryCode = countryCode;
    })
  }

  public generate() {
    this.streamService.changeCountryCode();
  }

  public toggleSub() {
    this.subVisible = !this.subVisible;
  }

}
