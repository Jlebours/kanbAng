import { UserServiceRes } from './../user';
import { Component, OnInit } from '@angular/core';
import { KanbanAPIService } from './../kanban-api.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  selectedUser!: UserServiceRes;
  users: UserServiceRes[] = [];
  userInfos!: UserServiceRes;

  constructor(private kanbanAPIService: KanbanAPIService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.kanbanAPIService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  // tslint:disable-next-line: typedef
  getUserInfos() {
    if (this.selectedUser !== undefined){
      // tslint:disable-next-line: deprecation
      this.kanbanAPIService.getUserInfos(this.selectedUser.mail).subscribe((userInfos) => {
      console.log(userInfos);
      this.userInfos = userInfos;
    });
    }
  }
}
