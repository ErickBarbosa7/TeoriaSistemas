import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PYComponent } from './PY/PY.component';
import { UTMComponent } from './UTM/UTM.component';

const routes: Routes = [
  { path: 'utm', component: UTMComponent },
  { path: 'py', component: PYComponent },
  { path: '', redirectTo: '/utm', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}
