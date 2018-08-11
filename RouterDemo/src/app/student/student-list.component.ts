import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Student } from './student.model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  msg : string = '';
  studentList: Student[] = [];

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let student1 = new Student();
    student1.id = 27;
    student1.name = "keyur";
    student1.course = "Angular";

    let student2 = new Student();
    student2.id = 26;
    student2.name = "denish";
    student2.course = "Java";

    let student3 = new Student();
    student3.id = 44;
    student3.name = "Vinit";
    student3.course = "Digital Marketing";

    this.studentList.push(student1);
    this.studentList.push(student2);
    this.studentList.push(student3);

    this.activatedRoute.queryParams.subscribe((qp)=>{
      console.log(qp);
    })

    this.activatedRoute.queryParamMap.subscribe(
      (queryParams)=>{
        console.log(queryParams);
        this.msg = queryParams.get("msg");
      }
    )
  }

  edit(id):void{
    this.router.navigate(["/detail",id]);
  }


}
