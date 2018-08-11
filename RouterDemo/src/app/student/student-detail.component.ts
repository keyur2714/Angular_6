import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id:number = 0;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private location:Location) { }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe((p)=>{
      console.log(p);
    })
    this.activatedRoute.paramMap.subscribe(
      (map)=>{
        console.log(map["params"].id);
        this.id = map["params"].id;
      }
    )
  }

  back():void{
    this.location.back();
  }

  update():void{
    console.log("Update Done...");
    this.router.navigate(["/student-list"],{ queryParams: { msg: 'Update Done...' } });
  }
}
