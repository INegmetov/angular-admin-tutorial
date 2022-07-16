import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    AdminDashboardComponent,
    ContactsDetailsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
