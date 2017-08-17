import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class DataService {
  public dbRef: any;
  public projectRef: any;

  init() {
    this.dbRef = firebase.database().ref('/');
    this.projectRef = firebase.database().ref('/project');
  }
  

  constructor() { }

}
