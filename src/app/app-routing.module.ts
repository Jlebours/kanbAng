import { GetUserComponent } from './get-user/get-user.component';
import { KanbanDetailComponent } from './kanban-detail/kanban-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostUserComponent } from './post-user/post-user.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';

const routes: Routes = [
  { path: '', component: KanbanDetailComponent },
  { path: 'getUser', component: GetUserComponent },
  { path: 'postUser', component: PostUserComponent },
  { path: 'removeUser', component: RemoveUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
