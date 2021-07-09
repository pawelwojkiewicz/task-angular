import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementListComponent } from './element-list/element-list.component';
import { ElementsDetailsComponent } from './elements-details/elements-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/elements-list', pathMatch: 'full' },
  {
    path: 'elements-list', component: ElementListComponent, children: [
      { path: ':id', component: ElementsDetailsComponent },
    ]
  },
  // Lazy-loading module
  {
    path: 'coloring-matrix',
    loadChildren: () =>
      import('./coloring-matrix/coloring-matrix.module').then((m) => m.ColoringMatrixModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
