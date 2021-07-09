import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColoringMatrixComponent } from './coloring-matrix.component';

const routes: Routes = [{ path: '', component: ColoringMatrixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColoringMatrixRoutingModule { }
