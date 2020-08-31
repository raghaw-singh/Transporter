import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';


const routes: Routes = [
  
    {
      path:'',
      loadChildren: () =>
      import('./page/home.module').then(m => m.HomeModule),
    },
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
