import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VoterComponent } from './components/voter/voter.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { StaffComponent } from './components/staff/staff.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'voter',
    component: VoterComponent
  },
  {
    path: 'candidate',
    component: CandidateComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoterComponent,
    CandidateComponent,
    StaffComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }