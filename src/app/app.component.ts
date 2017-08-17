import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const fbConf = {
      apiKey: 'AIzaSyCkOo_umvgMA-J5XomhPgKGiQ_ACXf1I7U',
      authDomain: 'asiarep-como.firebaseapp.com',
      databaseURL: 'https://asiarep-como.firebaseio.com',
      projectId: 'asiarep-como',
      storageBucket: 'asiarep-como.appspot.com',
      messagingSenderId: '463539869931'
    };

    firebase.initializeApp(fbConf);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Logged in user: ' + user.email);
      } else {
        console.log('User belum login.');
      }
    })
  }
}
