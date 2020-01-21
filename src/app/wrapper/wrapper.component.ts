import { Component, OnInit, Input, TemplateRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @Input() showcontent:boolean
  @ContentChild('mycontent', {static:false}) content;
  constructor() { }

  ngOnInit() {
    console.log('showcontent', this.showcontent)
  }

}
