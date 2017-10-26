import { Component, OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewChecked, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewChecked {

  @Input()
  public data;

  constructor() {
    console.log(this.data);
  }

  ngOnInit() {
    console.log(this.data);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }

  public callComponentsPublicMethod() {
    alert('called');
  }

}
