import { Component, OnInit, Input } from '@angular/core';
import { ListItemComponent } from '../../_list/list-item/list-item.component';

@Component({
  selector: 'app-list-property-item',
  templateUrl: './list-property-item.component.html',
  styleUrls: ['./list-property-item.component.scss']
})
export class ListPropertyItemComponent extends ListItemComponent implements OnInit {
  
  @Input() text:string;
  @Input() property:string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
