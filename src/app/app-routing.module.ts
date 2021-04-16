import { GetUserComponent } from './get-user/get-user.component';
import { KanbanDetailComponent } from './kanban-detail/kanban-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostUserComponent } from './post-user/post-user.component';

const routes: Routes = [
  { path: '', component: KanbanDetailComponent },
  { path: 'getUser', component: GetUserComponent },
  { path: 'postUser', component: PostUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
