import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepatmentComponent } from './depatment/depatment.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepatmentDetailComponent } from './depatment-detail/depatment-detail.component';
import { DepatmentOverviewComponent } from './depatment-overview/depatment-overview.component';
import { DepatmentContactComponent } from './depatment-contact/depatment-contact.component';


const routes: Routes = [
  {path: '',redirectTo: '/department',pathMatch:'full'},
  {path:'depart',component:DepatmentComponent},
  {
    path: 'fruits/:id', 
    component:DepatmentDetailComponent,
    children: [
      {path: 'overview', component:DepatmentOverviewComponent},
      {path: 'contact', component:DepatmentContactComponent}
    ]
  },
  {path:'employe',component:EmployeeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[DepatmentComponent,EmployeeComponent,
                                           PageNotFoundComponent,
                                           DepatmentDetailComponent,
                                           DepatmentOverviewComponent,
                                           DepatmentContactComponent]