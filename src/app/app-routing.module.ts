import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {
    path: "contact",
    component: ContactComponent,
    children: [
      {path: 'add', component: AddContactComponent},
      {path: 'edit/:id', component: AddContactComponent},
    ]
  },
  {path: "access", loadChildren: () => import('./access/access.module').then(opt => opt.AccessModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
