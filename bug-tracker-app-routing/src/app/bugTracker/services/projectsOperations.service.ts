import { Injectable } from '@angular/core';
import { Projects } from '../models/Projects';
import { ProjectsServerService } from './projectsServer.service';
import { Observable } from 'rxjs';


@Injectable()
export class ProjectsOperationsService{
	constructor(private projectsServer : ProjectsServerService){

	}
	getAll() : Observable<Projects[]> {
		return this.projectsServer.getAll();
	}
	createNew(projectsName : string) : Observable<Projects>{
		let newProjects = {
			id : 0,
			name : projectsName,
		};
		return this.projectsServer.save(newProjects);
	}
	
	remove(project : Projects){
		return this.projectsServer
			.remove(project)
		
	}
}