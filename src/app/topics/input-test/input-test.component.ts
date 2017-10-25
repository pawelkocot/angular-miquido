import {
  AfterContentChecked, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-input-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit, OnChanges {
  public counter = 0;
  public foo;

  @Input() public data;

  @Input()
  set fancySetter(value) {
    this.foo = value;
    this.counter++;
    console.log('fancy setter fired')
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
