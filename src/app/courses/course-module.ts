import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './course-info-component';
import { CourseListComponent } from './course-list-component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarModule } from '../shared/component/star/star-module';
import { AppPipeModule } from '../shared/pipe/pipe/app-pipe-module';



@NgModule({
    declarations: [
        CourseInfoComponent,
        CourseListComponent
    ],
    imports: [
        CommonModule,
        StarModule,
        AppPipeModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: "courses", component: CourseListComponent
            },
            {
                path: "courses/info/:id", component: CourseInfoComponent
            }
        ])
    ]})

export class CoursesModule { }
