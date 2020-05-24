import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,NgForm }   from '@angular/forms';

import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepatmentDetailComponent } from './depatment-detail/depatment-detail.component';
import { DepatmentOverviewComponent } from './depatment-overview/depatment-overview.component';
import { DepatmentContactComponent } from './depatment-contact/depatment-contact.component';
import { ChildComponent } from './child/child.component';
import { ViewchildcounterComponent } from './viewchildcounter/viewchildcounter.component';
import { ViewparentcounterComponent } from './viewparentcounter/viewparentcounter.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ViewparentColorComponent } from './viewparent-color/viewparent-color.component';
import { ThemeComponent } from './theme/theme.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    routingcomponent,
    PageNotFoundComponent,
    DepatmentDetailComponent,
    DepatmentOverviewComponent,
    DepatmentContactComponent,
    ChildComponent,
    ViewchildcounterComponent,
    ViewparentcounterComponent,
    ChangecolorDirective,
    ViewparentColorComponent,
    ThemeComponent,
    ContentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [NgForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
