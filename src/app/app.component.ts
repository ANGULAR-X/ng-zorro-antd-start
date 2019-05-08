import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  @ViewChild('table') table: ElementRef;
  ngOnInit () {
      this.table['nzData'] = [
          {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park'
          },
          {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park'
          },
          {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park'
          }
      ]
  }
}

