import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SubjectComponent } from './subject/subject.component';
import { CommentComponent } from './comment/comment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageSchedulesComponent } from './page-schedules/page-schedules.component';
import { PageTeachingPlanComponent } from './page-teaching-plan/page-teaching-plan.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: PageHomeComponent },
    { path: 'schedules', component: PageSchedulesComponent },
    { path: 'teaching-plan', component: PageTeachingPlanComponent },
    { path: 'about', component: PageAboutComponent },
 
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    
    { path: '**', component: PageNotFoundComponent }
    
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,

        FooterComponent,
        SubjectComponent,
        CommentComponent,
        PageNotFoundComponent,
        PageHomeComponent,
        PageSchedulesComponent,
        PageTeachingPlanComponent,
        PageAboutComponent,
        LoginComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }
