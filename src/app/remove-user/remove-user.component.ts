import { Component, OnInit } from '@angular/core';
import { KanbanAPIService } from '../kanban-api.service';
import { UserServiceRes } from '../user';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {
  selectedUser!: UserServiceRes;
  users: UserServiceRes[] = [];

  constructor(private kanbanAPIService: KanbanAPIService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.kanbanAPIService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  // tslint:disable-next-line: typedef
  removeUser(mail: string) {
    // tslint:disable-next-line: deprecation
    this.kanbanAPIService.removeUser(mail).subscribe((result) => {
    console.log(result);
    });
    // tslint:disable-next-line: deprecation
    this.kanbanAPIService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
