import { Component } from '@angular/core';
import { BlogTemplateComponent } from '../../shared/components/blog-template.component';
import { FooterComponent } from '../../../layout/footer/footer.component';

@Component({
  selector: 'app-pursuit-of-happiness',
  imports: [BlogTemplateComponent, FooterComponent],
  templateUrl: './Pursuit-Of-Happiness.component.html',
})
export class PursuitOfHappinessComponent {}
