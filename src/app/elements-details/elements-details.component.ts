import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ListService } from '../list.service';
import { Observable, Subject } from 'rxjs';
import { ChemicalElement } from '../types/element.type';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-elements-details',
  templateUrl: './elements-details.component.html',
  styleUrls: ['./elements-details.component.scss']
})
export class ElementsDetailsComponent implements OnInit, OnDestroy {

  componentDestroyed$: Subject<boolean> = new Subject();
  elementDetails$: Observable<ChemicalElement>;


  constructor(
    private listService: ListService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.elementDetails$ = this.activedRoute.params.pipe(
      takeUntil(this.componentDestroyed$),
      map(params => +params.id),
      switchMap(elementId => this.listService.getChemicalElement(elementId))
    );
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
