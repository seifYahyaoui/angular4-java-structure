/**
 * Created by seif on 7/4/17.
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';

interface Box {
  id: number;
  config: any;
}

@Component({
  selector: 'dynamic-layout',
  templateUrl: 'dynamic-layout.component.html',
  styleUrls: ['dynamic-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicLayoutComponent {
  private boxes: Array<Box> = [];
  private rgb: string = '#efefef';
  private curNum;
  private gridConfig: NgGridConfig = <NgGridConfig>{
    'margins': [1],
    'draggable': true,
    'resizable': true,
    'max_cols': 0,
    'max_rows': 0,
    'visible_cols': 0,
    'visible_rows': 0,
    'min_cols': 1,
    'min_rows': 1,
    'col_width': 2,
    'row_height': 2,
    'cascade': 'left',
    'min_width': 50,
    'min_height': 50,
    'fix_to_grid': false,
    'auto_style': true,
    'auto_resize': false,
    'maintain_ratio': false,
    'prefer_new': false,
    'zoom_on_drag': false,
    'limit_to_screen': true
  };
  private itemPositions: Array<any> = [];

  constructor() {
    const dashconf = this._generateDefaultDashConfig();
    for (var i = 0; i < dashconf.length; i++) {
      const conf = dashconf[i];
      //conf.payload = 1 + i;
      this.boxes[i] = {id: i + 1, config: conf};
    }
    this.curNum = dashconf.length + 1;
  }

  addBox(): void {
    const conf: NgGridItemConfig = this._generateDefaultItemConfig();
    conf.payload = this.curNum++;
    this.boxes.push({id: conf.payload, config: conf});
  }

  removeWidget(index: number): void {
    if (this.boxes[index]) {
      this.boxes.splice(index, 1);
    }
  }

  updateItem(index: number, event: NgGridItemEvent): void {
    console.log('updateItem : ID ' + index + ' ,NgGridItemEvent ' + event);
    // Do something here
  }

  onDrag(index: number, event: NgGridItemEvent): void {
    console.log('updateItem : ID ' + index + ' ,NgGridItemEvent ' + event);
    // Do something here
  }

  onResize(index: number, event: NgGridItemEvent): void {
    console.log('updateItem : ID ' + index + ' ,NgGridItemEvent ' + event);
    // Do something here
  }

  private _generateDefaultItemConfig(): NgGridItemConfig {
    return {'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1};
  }

  private _generateDefaultDashConfig(): NgGridItemConfig[] {
    let tree: NgGridItemConfig = {
      'payload': 'tree',
      'dragHandle': '.handle',
      'col': 1,
      'row': 1,
      'sizex': 60,
      'sizey': 150
    };
    let matrix: NgGridItemConfig = {
      'payload': 'matrix',
      'dragHandle': '.handle',
      'col': 2,
      'row': 1,
      'sizex': 347,
      'sizey': 150
    };
    let workflow: NgGridItemConfig = {
      'payload': 'workflow',
      'dragHandle': '.handle',
      'col': 3,
      'row': 1,
      'sizex': 60,
      'sizey': 150
    };

    let eventLeftDisplayer: NgGridItemConfig = {
      'payload': 'eventLeftDisplayer',
      'dragHandle': '.handle',
      'col': 1,
      'row': 2,
      'sizex': 60,
      'sizey': 80
    };
    let eventDisplayer: NgGridItemConfig = {
      'payload': 'eventDisplayer',
      'dragHandle': '.handle',
      'col': 2,
      'row': 2,
      'sizex': 347,
      'sizey': 80
    };
    let eventRightDisplayer: NgGridItemConfig = {
      'payload': 'eventRightDisplayer',
      'dragHandle': '.handle',
      'col': 3,
      'row': 2,
      'sizex': 60,
      'sizey': 80
    };

    return [tree, matrix, workflow, eventDisplayer, eventRightDisplayer, eventLeftDisplayer];
  }
}
