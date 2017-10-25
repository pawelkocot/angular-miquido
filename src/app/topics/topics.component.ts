import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  public mutable = {
    value: 0
  };
  constructor() { }

  ngOnInit() {
    // setTimeout(() => this.updateData(), 1500);
  }

  public mutate(event) {
    this.mutable.value++;
  }

  public addClass(event) {
    event.target.classList.add('colored');
  }

  public update() {
    this.mutable = {value: this.mutable.value + 1};
  }

}
