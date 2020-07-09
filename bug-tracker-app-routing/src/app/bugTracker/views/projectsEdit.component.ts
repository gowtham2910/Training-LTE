import { Component,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from "../models/Projects";
import { ProjectsOperationsService } from "../services/projectsOperations.service";
import { FormsModule } from "@angular/forms";


@Component({
	selector : 'app-projects-edit',
	template : `
        <h1>Add new projects</h1>
		<section class="edit1">
			<label for="">Projects Name :</label>
			<input type="text" [(ngModel)]="newProjectsName">
			<span> [ {{newProjectsName.length}} ] </span>
			<input type="button" value="Add New" (click)="onAddNewClick()">
		</section>		
		<p>
        <a [routerLink]="['/listOfProjects']">List of projects</a>
    </p>
	`
})
export class ProjectsEditComponent{
	newProjectsName : string = '';

	@Output()
	newProjectsCreated : EventEmitter<Projects> = new EventEmitter<Projects>();

	constructor(private projectsOperations : ProjectsOperationsService,
		private router : Router){

	}
	
	onAddNewClick(){
		this.projectsOperations
			.createNew(this.newProjectsName)
			.subscribe(newProjects => {
				this.router.navigate(['projects']);	
			});
	}

}