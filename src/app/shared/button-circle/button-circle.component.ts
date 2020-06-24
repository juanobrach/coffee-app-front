import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-circle',
  templateUrl: './button-circle.component.html',
  styleUrls: ['./button-circle.component.scss']
})
export class ButtonCircleComponent implements OnInit {
  @Input() routerLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
