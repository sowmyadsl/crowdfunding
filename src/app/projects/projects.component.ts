import { Component} from '@angular/core';
import { Project} from '../project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  {
  projects: Project[] = [
    new Project("Jax Medical Fund","Help jax with medical treatment","Susie",5000),
    new Project("Pet Rescue Fund","Organization helping dogs rescued", "Vivian", 1200),
    new Project("Foster Kids Fund","Non-profit Organization helping with foster kids","Dexter", 3000),
    new Project("Veterans Fund","Veterans fund help","Dilip", 1200)
  ]
}
