import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course-service';
import {Course} from './course'

@Component({   
    templateUrl: 'course-info-component.html'
})

export class CourseInfoComponent implements OnInit {

    course: Course;    

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit() { 
        this.course =  this.courseService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }
    save():void{
        this.courseService.save(this.course)
    }
}