import {
  Component,
  ElementRef,
  VERSION,
  Inject,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Angular ' + VERSION.major;
  firstname: string = "";
  lastname: string = "";
  clicklabel: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.clicklabel = "";
    this.name += '. Entered names:  ' + this.firstname + ' ' + this.lastname;
  }
  save() {
    this.name += '. Entered names:  ' + this.firstname + ' ' + this.lastname + ' ';
  }
  onclick() {
    this.clicklabel += " containerclick ";
  }
  oninputclick() {
    this.clicklabel += " inputclick ";
  }
}
