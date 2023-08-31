import { Component } from '@angular/core';
import { Course } from '../../types/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})

export class CoursesComponent {
  courses!: Course[];
  ngOnInit(): void {}

  getCourses(): void {
    // this.courseService.getCourses().subscribe((data: any) => {
    //   this.courses = data;
    // });
  }
}
