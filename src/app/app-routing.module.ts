import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SelectionComponent } from './selection/selection.component';
import { PersonalizationComponent } from './personalization/personalization.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {animation: 'HomeComponent'}
  },
  {
    path: 'selection', component: SelectionComponent, data: {animation: 'SelectionComponent'}
  },
  {
    path: 'personalization/:productId', component: PersonalizationComponent
  }
];

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [BrowserModule,BrowserAnimationsModule, RouterModule]
})
export class AppRoutingModule { }
