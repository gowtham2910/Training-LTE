import { Injectable } from '@angular/core';
import { Projects } from '../models/Projects';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsServerService {

	private baseUrl = 'http://localhost:3000/projects';

	constructor(private httpClient : HttpClient){

	}
	save(projectsData : Projects) : Observable<Projects>{
		if (projectsData.id === 0){
			return this.httpClient
				.post<Projects>(this.baseUrl, projectsData);
		} else {
			return this.httpClient
				.put<Projects>(`${this.baseUrl}/${projectsData.id}`, projectsData);
		}
	}	

	getAll() : Observable<Projects[]> {
		return this.httpClient
			.get<Projects[]>(this.baseUrl);
			
	}
	get(id) : Observable<Projects>{
		return this.httpClient
			.get<Projects>(`${this.baseUrl}/${id}`);
	}
	
	remove(projectsData : Projects) : Observable<any>{
		return this.httpClient
			.delete<any>(`${this.baseUrl}/${projectsData.id}`);
	}
}