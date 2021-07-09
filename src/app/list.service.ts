import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChemicalElement } from './types/element.type';
import { map } from 'rxjs/operators';
import { Color } from './types/color.type';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient,
  ) { }

  private detailsEntryTitle = new BehaviorSubject<boolean>(true);
  public detailsEntryTitle$ = this.detailsEntryTitle.asObservable();

  getChemicalElements(): Observable<ChemicalElement[]> {
    return this.http.get<ChemicalElement[]>('/assets/data/elements.json');
  }

  getChemicalElement(id: number): Observable<ChemicalElement> {
    return this.getChemicalElements()
      .pipe(
        map(
          element => element.find(el => el.position === +id + 1))
      );
  }

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>('/assets/data/colors.json').pipe(
      map(colors => colors.slice(0, 10))
    );
  }
}
