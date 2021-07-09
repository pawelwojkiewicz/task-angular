import { Component } from '@angular/core';
import { ListService } from '../list.service';
import { Observable } from 'rxjs';
import { ChemicalElement } from '../types/element.type';


@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent {

  chemicalElements$: Observable<ChemicalElement[]> = this.listService.getChemicalElements();
  detailsEntryTitle$: Observable<boolean> = this.listService.detailsEntryTitle$;

  constructor(
    private listService: ListService,
  ) { }
}
