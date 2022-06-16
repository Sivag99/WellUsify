import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { ServiceprovideComponent } from './serviceprovide/serviceprovide.component';
import { RegisterformComponent } from './registerform/registerform.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'registerform', component: RegisterformComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'serviceprovied', component: ServiceprovideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
