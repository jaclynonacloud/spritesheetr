import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../../../_services/app.service';
import { MenusService } from '../../../_services/menus.service';

@Component({
  selector: 'app-menu-dialogs',
  templateUrl: './menu-dialogs.component.html',
  styleUrls: ['./menu-dialogs.component.scss']
})
export class MenuDialogsComponent implements OnInit {

  @ViewChild("packSprite", {read:ElementRef}) packSpriteEl:ElementRef;
  @ViewChild("workspaceProps", {read:ElementRef}) workspacePropsEl:ElementRef;
  @ViewChild("saveDialog", {read:ElementRef}) saveDialogEl:ElementRef;
  @ViewChild("exportDialog", {read:ElementRef}) exportDialogEl:ElementRef;
  @ViewChild("exportViewer", {read:ElementRef}) _exportViewerEl:ElementRef;
  @ViewChild("exportPreview", {read:ElementRef}) _exportPreviewEl:ElementRef;

  private _currentDialog:HTMLElement;

  //get attributes from dialogs
  //--pack sprites
  public packSprites_packingType:string = "left";
  public packSprites_allowResize:boolean = true;
  public packSprites_fitToSprites:boolean = true;
  //--workspace props
  public workProp_title:string;
  public workProp_width:number;
  public workProp_height:number;
  public workProp_colour:string;
  public workProp_transparent:boolean;
  public workProp_quality:string = "q--auto";
  //--save dialog
  public saveDialog_name:string;
  //--export dialog
  public exportDialog_type:string = "json";
  public exportDialog_imgName:string;
  public exportDialog_sheetName:string;
  public exportDialog_sheetExt:string = ".json";
  public exportDialog_lockNames:boolean = true;
  private _exportDialog_imageResult:HTMLImageElement;
  private _exportDialog_textResult:any;


  constructor(private _appService:AppService, private _menusService:MenusService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    this._currentDialog = null;

    this.hideAllDialogs();

    this._appService.MenusService.addMenuDialogs(this);
  }
  /*------------------------------------------- METHODS --------------------------*/
  /**Opens a new dialog. */
  public async openDialog(type:string):Promise<void> {

    return new Promise<void>(async(res, rej) => {

      let newDialog:HTMLElement = null;

      //get the new dialog
      const DIALOG = MenuDialogsComponent.DIALOG;
      switch(type) {
        case DIALOG.PackSprite:
          newDialog = this.PackSpriteElement;
          break;
        case DIALOG.WorkspaceProps:
          newDialog = this.WorkspacePropsElement;
          //set elements
          this.workProp_title = this._appService.WorkspaceService.Title;
          this.workProp_width = this.Workarea.Width;
          this.workProp_height = this.Workarea.Height;
          this.workProp_colour = this.Workarea.Colour;
          this.workProp_transparent = this.Workarea.Transparent;
          this.workProp_quality = this._appService.WorkspaceService.Quality;
          break;
        case DIALOG.SaveDialog:
          newDialog = this.SaveDialogElement;
          break;
        case DIALOG.ExportDialog:
          newDialog = this.ExportDialogElement;
          this.exportDialog_imgName = this.exportDialog_sheetName = this._appService.WorkspaceService.Title.replace(" ", "_").toLowerCase();
          this.onChangeExportType();
          //load image
          this._exportDialog_imageResult = await this._appService.WorkspaceService.buildSpritesheet();
          (this._exportViewerEl.nativeElement as HTMLElement).innerHTML = "";
          (this._exportViewerEl.nativeElement as HTMLElement).appendChild(this._exportDialog_imageResult);
          break;
      }

      if(this._currentDialog == newDialog) return;

      //hide current dialog if there is one
      if(this._currentDialog != null) this.hideDialog(this._currentDialog);

      this._currentDialog = newDialog;
      this._currentDialog.classList.remove("hide");

    });
    
  }

  /**Hides a dialog element. */
  public hideDialog(dialogElement:HTMLElement):void {
    dialogElement.classList.add("hide");
    this._currentDialog = null;
  }

  /**Hides all dialog boxes. */
  public hideAllDialogs():void {
    this.hideDialog(this.PackSpriteElement);
    this.hideDialog(this.WorkspacePropsElement);
    this.hideDialog(this.SaveDialogElement);
    this.hideDialog(this.ExportDialogElement);
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  public onCloseDialog():void {
    if(this._currentDialog == null) return;
    this.hideDialog(this._currentDialog);
  }

  //custom methods
  public onPackSprites():void {
    console.log("MY SETTINGS");
    // console.log(this.packSprites_allowResize, this.packSprites_packingType);
    //send data out to workspace
    this._appService.WorkspaceService.packSprites(this.packSprites_packingType, this.packSprites_allowResize, this.packSprites_fitToSprites);
    //hide the dialog
    this.hideDialog(this._currentDialog);
  }

  public onChangeWorkspaceProperties():void {
    //set elements
    this._appService.WorkspaceService.setTitle(this.workProp_title);
    this.Workarea.Width = this.workProp_width;
    this.Workarea.Height = this.workProp_height;
    this.Workarea.Colour = this.workProp_colour;
    this.Workarea.Transparent = this.workProp_transparent;
    this._appService.WorkspaceService.setQuality(this.workProp_quality);
    //hide the dialog
    this.hideDialog(this._currentDialog);
  }

  public onSaveWorkspace():void {
    if(this.saveDialog_name != "") {
      this._appService.WorkspaceService.saveWorkspace(this.saveDialog_name);
      //hide the dialog
      this.hideDialog(this._currentDialog);
    }
  }

  public onChangeExportType():void {
    const sprites = this._appService.WorkspaceService.SpriteComponents;
    const previewDiv:HTMLElement = this._exportPreviewEl.nativeElement as HTMLElement;
    let result:string = "";

    //change preview based on type
    //JSON
    if(this.exportDialog_type == "json") {
      let formatter = sprites.map(spr => {
        let r = {name:this.getCleanFilename(spr.Name), x:spr.X, y:spr.Y, width:spr.Width, height:spr.Height};
        return r;
      });

      // result = JSON.stringify(formatter, null, 2);   
      this._exportDialog_textResult = formatter;   
      result = this.syntaxHighlight(formatter);
      this.exportDialog_sheetExt = ".json";
    }
    //JSON FRAMES
    else if(this.exportDialog_type == "json-frames") {
      let frames = {};
      sprites.forEach(spr => {
        let r = {
          frame: {x:spr.X, y:spr.Y, w:spr.Width, h:spr.Height},
          rotated: false,
          trimmed: false,
          spriteSourceSize: {x:0, y:0, w:spr.Width, h:spr.Height},
          sourceSize: {w:spr.Width, h:spr.Height},
          pivot: spr.Pivot
        };
        frames[this.getCleanFilename(spr.Name)] = r;
      });
      
      let formatter = {
        frames:frames,
        meta: {
          app: "spritesheeter 2019",
          author: "Jaclyn Staples",
          version: '2019.01.01',
          image: `${this.exportDialog_imgName}.png`,
          size: {w:this._appService.WorkspaceService.WorkareaComponent.Width, h:this._appService.WorkspaceService.WorkareaComponent.Height},
          scale: this._appService.WorkspaceService.WorkareaComponent.Scale
        }
      }

      this._exportDialog_textResult = formatter;   
      result = this.syntaxHighlight(formatter);
      this.exportDialog_sheetExt = ".json";
    }
    //JSON FRAMES ARRAY
    else if(this.exportDialog_type == "json-frames-array") {
      let formatter = {
        frames:sprites.map(spr => {
        let r = {
          filename:this.getCleanFilename(spr.Name),
          frame: {x:spr.X, y:spr.Y, w:spr.Width, h:spr.Height},
          rotated: false,
          trimmed: false,
          spriteSourceSize: {x:0, y:0, w:spr.Width, h:spr.Height},
          sourceSize: {w:spr.Width, h:spr.Height},
          pivot: spr.Pivot
        };
        return r;
      }),
      meta: {
        app: "spritesheeter 2019",
        author: "Jaclyn Staples",
        version: '2019.01.01',
        image: `${this.exportDialog_imgName}.png`,
        size: {w:this._appService.WorkspaceService.WorkareaComponent.Width, h:this._appService.WorkspaceService.WorkareaComponent.Height},
        scale: this._appService.WorkspaceService.WorkareaComponent.Scale
      }
      }

      this._exportDialog_textResult = formatter;   
      result = this.syntaxHighlight(formatter);
      this.exportDialog_sheetExt = ".json";
    }
    //TEXT
    else if(this.exportDialog_type == "text") {
      let formatter = "";
      sprites.forEach(spr => {
        formatter += [this.getCleanFilename(spr.Name), spr.X, spr.Y, spr.Width, spr.Height].join(", ") + "\n";
      });

      this._exportDialog_textResult = formatter; 
      result = formatter;
      this.exportDialog_sheetExt = ".txt";
    }
    //CSS
    else if(this.exportDialog_type == "css") {
      let formatter = "";
      sprites.forEach(spr => {
        formatter += `.${this.getCleanFilename(spr.Name).toLowerCase()} {
  background: url('${this.exportDialog_imgName}.png') no-repeat -${spr.X}px -${spr.Y}px;
  width: ${spr.Width}px;
  height: ${spr.Height}px;
}\n`;
      });

      this._exportDialog_textResult = formatter; 
      result = formatter;
      this.exportDialog_sheetExt = ".css";
    }
    //XML
    else if(this.exportDialog_type == "xml") {
      console.log("XML");
      let formatter = `<textureatlas xmlns="http://www.w3.org/1999/xhtml" imagepath="${this.exportDialog_imgName}.png">\n`;
      sprites.forEach(spr => {
        formatter += `     <subtexture name="${this.getCleanFilename(spr.Name)}" x="${spr.X}" y="${spr.Y}" width="${spr.Width}" height="${spr.Height}"></subtexture>\n`;
      });
      formatter += `</textureatlas>`;

      this._exportDialog_textResult = formatter; 
      result = formatter;
      this.exportDialog_sheetExt = ".xml";
      previewDiv.innerText = result;
    }


    if(this.exportDialog_type != "xml")
      previewDiv.innerHTML = result;

  }


  public getCleanFilename(name:string):string {
    return name.replace(" ", "-").replace(".", "-").replace("#", "-").replace("~", "-").replace("!", "-");
  }

  public onChangeExportName(e):void {
    this._menusService.onKeyUp(e);

    //if our names are locked, change sheet to match img
    if(this.exportDialog_lockNames) {
      this.exportDialog_sheetName = this.exportDialog_imgName;
    }

    //reset export preview
    this.onChangeExportType();
  }

  public onChangeExportLock():void {
    if(this.onChangeExportLock)
      this.exportDialog_sheetName = this.exportDialog_imgName;

    //reset export preview
    this.onChangeExportType();
  }


  public onExport():void {
    //deal with custom first

    //export image
    let imgStream = this._exportDialog_imageResult.src;
    const imgDiv:HTMLAnchorElement = document.createElement("a");
    imgDiv.setAttribute("href", imgStream);
    imgDiv.setAttribute("download", `${this.exportDialog_imgName}.png`);
    imgDiv.click();

    //export text
    let textData = this._exportDialog_textResult;
    let textStream = "";
    switch(this.exportDialog_type) {
      case "json":
      case "json-frames":
      case "json-frames-array":
        textStream = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(textData, null, 2))}`;
        break;
      case "text":
      case "css":
      case "xml":
        textStream = `data:text/json;charset=utf-8,${encodeURIComponent(textData)}`;
        break;
    }
    const sheetDiv:HTMLAnchorElement = document.createElement("a");
    sheetDiv.setAttribute("href", textStream);
    sheetDiv.setAttribute("download", `${this.exportDialog_sheetName}${this.exportDialog_sheetExt}`);
    sheetDiv.click();

    //hide the dialog
    this.hideDialog(this._currentDialog);
    
  }


  /*https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript*/
  public syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public static get DIALOG() { return Object.freeze({
    PackSprite : "pack-sprite",
    WorkspaceProps : "workspace-props",
    SaveDialog : "save-dialog",
    ExportDialog : "export-dialog"
  });}

  public get PackSpriteElement():HTMLElement { return this.packSpriteEl.nativeElement as HTMLElement; }
  public get WorkspacePropsElement():HTMLElement { return this.workspacePropsEl.nativeElement as HTMLElement; }
  public get SaveDialogElement():HTMLElement { return this.saveDialogEl.nativeElement as HTMLElement; }
  public get ExportDialogElement():HTMLElement { return this.exportDialogEl.nativeElement as HTMLElement; }

  public get Workarea() { return this._appService.WorkspaceService.WorkareaComponent; }


}
