import { Component, OnInit, Input } from '@angular/core';
import { ToggleListGroupComponent } from '../../_list/toggle-list-group/toggle-list-group.component';

@Component({
  selector: 'app-toggle-list-property-group',
  templateUrl: './toggle-list-property-group.component.html',
  styleUrls: ['./toggle-list-property-group.component.scss']
})
export class ToggleListPropertyGroupComponent extends ToggleListGroupComponent implements OnInit {

  @Input() text:string;
  @Input() itemProperties:{ title:string, property:string };

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
