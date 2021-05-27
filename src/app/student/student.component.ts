import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentListModel } from 'src/studentListModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  ELEMENT_DATA : StudentListModel[];
  displayedColumns: string[] = ['first','last','email','address','created'];
  dataSource = new MatTableDataSource<StudentListModel>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service:StudentsService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;

  }

  getAllStudentList(){
    let resp = this.service.StudentList();
    console.log(resp);
    resp.subscribe(report=>this.dataSource.data = report  as StudentListModel[])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}