import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColoringMatrixRoutingModule } from './coloring-matrix-routing.module';
import { ColoringMatrixComponent } from './coloring-matrix.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BackgroundColorDirective } from '../directives/background-color.directive';


@NgModule({
  declarations: [ColoringMatrixComponent, BackgroundColorDirective],
  imports: [
    CommonModule,
    ColoringMatrixRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ColoringMatrixModule { }
