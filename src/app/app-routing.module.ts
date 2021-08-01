import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home/home.component';
import { LoopsComponent } from './loop/loops/loops.component';
import { LoopDetailsComponent } from './loop/loop-details/loop-details.component';
import { ForumComponent } from '../app/forum/forums/forum.component'
import { BlogDetailsComponent} from '../app/blog/blog-details/blog-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loops', component: LoopsComponent },
  { path: 'loops/download', component: LoopDetailsComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'blog', component: BlogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
