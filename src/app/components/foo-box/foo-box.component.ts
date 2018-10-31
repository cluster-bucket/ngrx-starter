import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foo-box',
  templateUrl: './foo-box.component.html',
  styleUrls: ['./foo-box.component.css']
})
export class FooBoxComponent implements OnInit {
  @Input()
  message = '';

  constructor() { }

  ngOnInit() {
  }

}
