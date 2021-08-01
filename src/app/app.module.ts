import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SearchLoopsComponent } from './loop/search-loops/search-loops.component';
import { HomeComponent } from './home/home/home.component';
import { ContentComponent } from './loop/content/content.component';
import { AdsComponent } from './core/ads/ads.component';
import { LoopsComponent } from './loop/loops/loops.component';
import { SignupComponent } from './core/signup/signup.component';
import { LoopDetailsComponent } from './loop/loop-details/loop-details.component';
import { PlayerComponent } from './core/player/player.component';
import { ForumComponent } from './forum/forums/forum.component';
import { AddForumComponent } from './forum/add-forum/add-forum.component';
import { ForumDetailsComponent } from './forum/forum-details/forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchLoopsComponent,
    HomeComponent,
    ContentComponent,
    AdsComponent,
    LoopsComponent,
    SignupComponent,
    LoopDetailsComponent,
    PlayerComponent,
    ForumComponent,
    AddForumComponent,
    ForumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
