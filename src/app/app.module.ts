import { PostUserComponent } from './post-user/post-user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanDetailComponent } from './kanban-detail/kanban-detail.component';
import { MenuComponent } from './menu/menu.component';
import { GetUserComponent } from './get-user/get-user.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';


@NgModule({
  declarations: [
    AppComponent,
    KanbanDetailComponent,
    MenuComponent,
    GetUserComponent,
    PostUserComponent,
    UserInfosComponent,
    RemoveUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TabMenuModule,
    PanelModule,
    DropdownModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
