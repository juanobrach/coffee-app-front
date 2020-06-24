import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonCircleComponent } from './button-circle/button-circle.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonCircleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonCircleComponent
  ]
})
export class SharedModule { }
