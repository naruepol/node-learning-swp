import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './page/register/register.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { LoginComponent } from './page/login/login.component';
import { UserComponent } from './page/user/user.component';
import { UserFormComponent } from './page/user-form/user-form.component';
import { ConfirmDialogComponent } from './widget/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from './widget/alert-dialog/alert-dialog.component';
import { MaterialModule } from './shared/material/material.module';
import { UserInterceptor } from './shared/interceptor/user-interceptor';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DummyComponent } from './page/dummy/dummy.component';
import { MarkdownModule } from 'ngx-markdown';
import { ChartsModule } from 'ng2-charts';
import { PageComponent } from './widget/page/page.component';
import { MiniCardComponent } from './widget/mini-card/mini-card.component';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { CardComponent } from './widget/card/card.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './charts/store-sessions-chart/store-sessions-chart.component';
import { OrdersTableComponent } from './charts/orders-table/orders-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormCardComponent } from './widget/form-card/form-card.component';
import { SubjectComponent } from './page/subject/subject.component';
import { SubjectFormComponent } from './page/subject-form/subject-form.component';
import { ContactAdminComponent } from './page/contact-admin/contact-admin.component';
import { ContactAdminFormComponent } from './page/contact-admin-form/contact-admin-form.component';
import { NewsComponent } from './page/news/news.component';
import { NewsTitleComponent } from './widget/news-title/news-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    PublicZoneComponent,
    LoginComponent,
    UserComponent,
    UserFormComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
    DashboardComponent,
    DummyComponent,
    PageComponent,
    MiniCardComponent,
    ProductSalesChartComponent,
    CardComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    OrdersTableComponent,
    FormCardComponent,
    SubjectComponent,
    SubjectFormComponent,
    ContactAdminComponent,
    ContactAdminFormComponent,
    NewsComponent,
    NewsTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
