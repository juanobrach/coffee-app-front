import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { SelectionComponent } from './selection/selection.component';
import { DrinkSizeComponent } from './drink-size/drink-size.component';
import { CoreModule } from './core/core.module';
import { PersonalizationComponent } from './personalization/personalization.component';
import { ExtraIngredientsComponent } from './extra-ingredients/extra-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectionComponent,
    DrinkSizeComponent,
    PersonalizationComponent,
    ExtraIngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
