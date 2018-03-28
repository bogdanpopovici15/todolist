import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TodoService {

  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }
  
  getToDoList(){
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTtitle(title: string) {
    this.toDoList.push({
      title: title,
      isChecked: false
    });
  }

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, {isChecked: flag});
  }

  removeTtile($key: string) {
    this.toDoList.remove($key);
  }
  

}
