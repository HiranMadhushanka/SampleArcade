import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { LoopDetailsComponent } from './loop-details/loop-details.component';
import { LoopsComponent } from './loops/loops.component';
import { SearchLoopsComponent } from './search-loops/search-loops.component';

@NgModule({
  declarations: [
    ContentComponent,
    LoopDetailsComponent,
    LoopsComponent,
    SearchLoopsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LoopModule { }
