import { Component, signal, OnInit, computed } from '@angular/core';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';

@Component({
    selector: 'blog-template',
    imports: [NavbarComponent],
    templateUrl: './blog-template.component.html',
})
export class BlogTemplateComponent{}
