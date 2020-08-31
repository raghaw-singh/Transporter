import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AssetPagesComponent } from './asset-pages/asset-pages.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [
  {
    path: '' , 
    component:HomeComponent
  },
  {
    // path: 'myeloqua' , 
    // component:AssetPagesComponent

    path: 'first/892925384/2/:id' , 
    component:AssetPagesComponent
  },
  {
    path: 'd/:id', 
    component:AssetDetailsComponent
  }
];


@NgModule({
 
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ],

  

  declarations: [HomeComponent, AssetPagesComponent, AssetDetailsComponent]
})
export class HomeModule { }
