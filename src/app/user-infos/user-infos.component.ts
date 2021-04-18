import { User } from './../user';
import { Component, Input, OnInit } from '@angular/core';
import { KanbanAPIService } from '../kanban-api.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('infos')
  infos!: User;
  updatedUserJSON!: any;
  updatedUser!: User;

  constructor(private kanbanAPIService: KanbanAPIService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  updateUser() {
    // tslint:disable-next-line: max-line-length
    this.updatedUserJSON = { mail: this.infos.mail, nom: this.infos.nom, listeFiches: this.infos.listeFiches, listeKanbansBoard: this.infos.listeKanbansBoard };
    this.updatedUser = this.updatedUserJSON;
    console.log(this.updatedUser);
    // tslint:disable-next-line: deprecation
    this.kanbanAPIService.updateUser(this.updatedUser).subscribe((user) => {
      console.log(user);
    });
  }
}
