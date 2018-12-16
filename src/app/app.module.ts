import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './_components/_menus/menu-bar/menu-bar.component';
import { MenuPropertiesComponent } from './_components/_menus/menu-properties/menu-properties.component';
import { WorkspaceComponent } from './_components/workspace/workspace.component';
import { ToggleButtonComponent } from './_components/_ui/toggle-button/toggle-button.component';
import { MenuToolbarComponent } from './_components/_menus/menu-toolbar/menu-toolbar.component';
import { WorkareaComponent } from './_components/workarea/workarea.component';
import { SpriteComponent } from './_components/sprite/sprite.component';
import { SpritesService } from './_services/sprites.service';
import { MenusService } from './_services/menus.service';
import { StatesService } from './_services/states.service';
import { AppService } from './_services/app.service';
import { ListItemComponent } from './_components/_ui/_list/list-item/list-item.component';
import { ListGroupComponent } from './_components/_ui/_list/list-group/list-group.component';
import { ToggleListGroupComponent } from './_components/_ui/_list/toggle-list-group/toggle-list-group.component';
import { ListPropertyItemComponent } from './_components/_ui/_list-property/list-property-item/list-property-item.component';
import { ListPropertyGroupComponent } from './_components/_ui/_list-property/list-property-group/list-property-group.component';
import { ToggleListPropertyGroupComponent } from './_components/_ui/_list-property/toggle-list-property-group/toggle-list-property-group.component';
import { ToolsService } from './_services/tools.service';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    MenuBarComponent,
    MenuPropertiesComponent,
    WorkspaceComponent,
    ToggleButtonComponent,
    ListGroupComponent,
    ToggleListGroupComponent,
    MenuToolbarComponent,
    WorkareaComponent,
    SpriteComponent,
    ListPropertyItemComponent,
    ListPropertyGroupComponent,
    ToggleListPropertyGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService, SpritesService, MenusService, StatesService, ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
