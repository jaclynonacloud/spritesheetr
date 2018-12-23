import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ListItemComponent } from '../../_list/list-item/list-item.component';

@Component({
  selector: 'app-list-property-item',
  templateUrl: './list-property-item.component.html',
  styleUrls: ['./list-property-item.component.scss']
})
export class ListPropertyItemComponent extends ListItemComponent implements OnInit {
  
  @Input() text:string;
  @Input() property:string;

  @ViewChild("element", {read:ElementRef}) _element:ElementRef;

  private _pipes:string[];

  constructor() {
    super();
  }

  ngOnInit() {
    //look for pipes
    const splitString = this.text.split(" | ");
    if(splitString.length <= 1) return;

    //split into categories
    this._pipes = splitString[1].split(" ");
    if(this._pipes.length <= 0) return;

    console.log("PIPES");
    console.log(this._pipes);

    this.text = splitString[0];

    //for each pipe, react to requirements
    this._pipes.forEach(p => {
      //break into objects with parameters
      let pObj = { title:p, attributes:[] };
      let pArr = p.split("--");
      if(pArr.length > 1) {
        pObj.title = pArr[0];
        //separate attributes
        let aArr = pArr[1].split("~");
        //generate pairs
        aArr.forEach(pair => {
          let pairArr = pair.split("=");
          pObj.attributes.push({name:pairArr[0], value:pairArr[1]});
        });
      }

      console.log("PAIRS");
      console.log(pObj);

      switch(pObj.title) {
        case this.PIPES.FileInput:
          //create a label to pull over entire item
          let labelDiv:HTMLElement = document.createElement("label");
          //create a file input to attach over item
          let fInput:HTMLInputElement = document.createElement("input");
          fInput.type = "file";
          fInput.classList.add("hide");
          //add any attributes
          if(pObj.attributes.length > 0) {
            pObj.attributes.forEach((pair:{name:string, value:string}) => {
              fInput.setAttribute(pair.name, pair.value);
            });
          }
          this.Element.parentElement.insertBefore(labelDiv, this.Element);
          labelDiv.appendChild(fInput);
          labelDiv.appendChild(this.Element);
          //listen for change and send as click
          fInput.onchange = (e => this._onClicked(e));
      }
    });
  }





  public get PIPES() { return Object.freeze({
    "FileInput" : "file",
    "Disabled" : "disabled"
  });}


  public get Element():HTMLElement { return this._element.nativeElement as HTMLElement; }

}
