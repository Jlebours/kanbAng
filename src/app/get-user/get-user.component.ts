import { Component, OnInit } from '@angular/core';
import { UserServiceRes } from '../user';
import { KanbanAPIService } from './../kanban-api.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  selectedUtilisateur!: UserServiceRes;
  users: UserServiceRes[] = [];

  constructor(private kanbanAPIService: KanbanAPIService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.kanbanAPIService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

}
