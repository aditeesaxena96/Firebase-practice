import { Component } from '@angular/core';
import {  Http } from '@angular/http'

import { Observable } from '../../node_modules/rxjs';
import {map} from 'rxjs/operators'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'firebasedemo';
  // courses: any[];
  // constructor(db : AngularFireDatabase) {
  //   db.list('/courses').
  //   valueChanges().subscribe(courses => {this.courses= courses;
  //   console.log(this.courses)
  // });


  // }
constructor(private http : Http){

}
  getData(){
    return this.http.get("https://fir-demo-ac419.firebaseio.com/courses.json").pipe(map(data => data.json()));

  }

  componentGetData(){
    this.getData().subscribe(res=>{
      console.log(res)
    })
  }
}
