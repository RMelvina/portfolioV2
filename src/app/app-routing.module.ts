import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPgComponent } from './components/pages/details-pg/details-pg.component';
import { HomePgComponent } from './components/pages/home-pg/home-pg.component';

const routes: Routes = [
  {path:'', component: HomePgComponent},
  {
    path: 'details/:pId',
    component: DetailsPgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
