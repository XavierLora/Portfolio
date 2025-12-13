import { Component, signal, OnInit, computed, input } from '@angular/core';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'blog-template',
    imports: [NavbarComponent, RouterLink],
    templateUrl: './blog-template.component.html',
})
export class BlogTemplateComponent { 
    title = input.required<string>();
    date = input.required<string>();
}
