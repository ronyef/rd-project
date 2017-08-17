
import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { NgForm } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.init();
    this.dataSvc.projectRef.on('value', (snapshot) => {
      this.projects = [];
      for (var item in snapshot.val()) {
        this.projects.push(snapshot.val()[item]);
        console.log(this.projects);
      }
    })
  }

  onNewProject(form: NgForm) {
    var postProject = {
      name: form.value.name,
      description: form.value.description,
      customer: form.value.customer,
      status: form.value.status
    };
    
    var newPostKey = this.dataSvc.projectRef.push().key;

    var updates = {};
    updates[newPostKey] = postProject;
    
    this.dataSvc.projectRef.update(updates);
    $('#myModal').modal('hide');
    
  }
  

}
