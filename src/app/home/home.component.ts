import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ABOUT_ME_TEXT, AboutMeObject, CODING_LANGUAGES, CodingLanguages, PROJECT_LIST, ProjectObject } from './constants';


@Component({
    selector: 'app-home',
    imports: [NavbarComponent, FooterComponent, CommonModule],
    templateUrl: './home.component.html',
})
export class HomeComponent {
  aboutMeText: AboutMeObject[] = ABOUT_ME_TEXT;
  codingLangs: CodingLanguages[] = CODING_LANGUAGES;
  projectList: ProjectObject[] = PROJECT_LIST;
}
