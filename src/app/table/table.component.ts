import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  data : any[]=[];
constructor(){}

  ngOnInit(): void {

  }

  onFileClick(event : any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (a : any) => {

      const data = new Uint8Array(a.target.result);
      const workbook = XLSX.read(data,{type: 'array'});
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const excelData = XLSX.utils.sheet_to_json(worksheet,{header:1})

      console.log(excelData)
      this.data.push(excelData)



    };
    reader.readAsArrayBuffer(file)
  }
}
