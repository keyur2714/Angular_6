import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input()
  headerColumnList: string[] = [];

  @Input()
  columnList: string[] = [];

  @Input()
  dataList: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
