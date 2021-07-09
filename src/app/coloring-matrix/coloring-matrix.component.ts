import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ListService } from '../list.service';

@Component({
  selector: 'app-coloring-matrix',
  templateUrl: './coloring-matrix.component.html',
  styleUrls: ['./coloring-matrix.component.scss']
})
export class ColoringMatrixComponent implements OnInit {

  matrixForm: FormGroup;
  emailFormControl: FormControl;
  numberValue = 20;
  colorNumber = 0;
  coloringMatrix = [];
  color: string;
  colors$ = this.listService.getColors();

  constructor(
    private listService: ListService,
  ) { }

  ngOnInit(): void {
    this.createMatrixForm();
    this.addItemsToMatrix();
  }

  createMatrixForm(): void {
    this.matrixForm = new FormGroup({
      number: new FormControl(
        this.numberValue,
        [
          Validators.required,
          Validators.min(10),
          Validators.max(100)
        ]),
    });
  }

  addItemsToMatrix(): void {
    for (let i = 0; i < this.numberValue; i++) {
      this.coloringMatrix[i] = [];
      for (let j = 0; j < this.numberValue; j++) {
        this.coloringMatrix[i][j] = null;
      }
    }
  }

  inputValue(): void {
    this.coloringMatrix = [];
    if (this.numberValue >= 10 && this.numberValue <= 100) {
      this.addItemsToMatrix();
    }
    return;
  }
}




