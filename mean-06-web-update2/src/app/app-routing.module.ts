import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAdminComponent } from './page/contact-admin/contact-admin.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DummyComponent } from './page/dummy/dummy.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { NewsComponent } from './page/news/news.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { RegisterComponent } from './page/register/register.component';
import { SubjectComponent } from './page/subject/subject.component';
import { UserFormComponent } from './page/user-form/user-form.component';
import { UserComponent } from './page/user/user.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicZoneComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'user',
        canActivate: [AuthGuard],
        component: UserComponent,
      },
      {
        path: 'user-form',
        canActivate: [AuthGuard],
        component: UserFormComponent,
      },
      {
        path: 'user-form/:userId',
        canActivate: [AuthGuard],
        component: UserFormComponent,
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
      },
      {
        path: 'product',
        component: DummyComponent,
      },
      {
        path: 'service',
        component: DummyComponent,
      },
      {
        path: 'contact-us',
        component: DummyComponent,
      },
      {
        path: 'about-us',
        component: DummyComponent,
      },
      {
        path: 'faq',
        component: DummyComponent,
      },
      {
        path: 'complaint',
        component: DummyComponent,
      },
      {
        path: 'service-req',
        component: DummyComponent,
      },
      {
        path: 'service-approve',
        component: DummyComponent,
      },
      {
        path: 'payment',
        component: DummyComponent,
      },
      {
        path: 'service',
        component: DummyComponent,
      },
      {
        path: 'doctor',
        component: DummyComponent,
      },
      {
        path: 'profile-setting',
        component: DummyComponent,
      },
      {
        path: 'change-password',
        component: DummyComponent,
      },
      {
        path: 'subject',
        component: SubjectComponent,
      },
      {
        path: 'contact-admin',
        component: ContactAdminComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
