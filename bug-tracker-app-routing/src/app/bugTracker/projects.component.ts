import { Component, OnInit } from '@angular/core';
import { Projects } from './models/Projects';
import { ProjectsOperationsService } from "./services/projectsOperations.service";



@Component({
	selector : 'app-projects',
	templateUrl : 'projects.component.html'
})


export class ProjectsComponent implements OnInit{
	projects : Projects[] = [];
	
	
	constructor(private projectsOperations : ProjectsOperationsService){
		
		
			
	}

	ngOnInit(){		
		this.loadProjects();
	}

	loadProjects(){
		console.log('loading projects');
		this.projectsOperations
			.getAll()
			.subscribe(projects => this.projects = projects);
	}

	onNewProjectsCreated(newprojects){
		this.projects = [...this.projects, newprojects];
	}
	
    onRemoveClick(projectsToRemove: Projects){
        this.projectsOperations
            .remove(projectsToRemove)
            .subscribe(() => this.projects = this.projects.filter(projects => projects !== projectsToRemove))
    }
	
}