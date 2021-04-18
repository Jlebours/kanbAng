import { User } from './../user';
import { KanbanAPIService } from './../kanban-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  name!: string;
  mail!: string;
  newUserJSON!: any;
  newUser!: User;

  constructor(private kanbanAPIService: KanbanAPIService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  postUser(){
    if (this.name !== undefined && this.mail !== undefined){
      this.newUserJSON = {mail: this.mail, nom: this.name, listeFiches: [], listeKanbansBoard: []};
      this.newUser = this.newUserJSON;
      console.log(this.newUser);
      // tslint:disable-next-line: deprecation
      this.kanbanAPIService.postUser(this.newUser).subscribe((user) => {
          console.log(user);
      });
    }
  }
}
