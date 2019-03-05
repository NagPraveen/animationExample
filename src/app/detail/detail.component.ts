import { Component, OnInit } from '@angular/core';
import { staggeranim } from '../animation';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [staggeranim]
})
export class DetailComponent implements OnInit {


  items = [];
  constructor() {

  }


  pushItem() {
    this.items.push('this is animation');
  }
  ngOnInit() {
    setTimeout(() => {
      this.items = ['Hey this is an item', 'Here is another one', 'This is awesome'];
    }, 100);
  }

}
