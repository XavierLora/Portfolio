import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { BlogComponent } from '../blog.component';

@Component({
    selector: 'app-blog-post2',
    imports: [NavbarComponent, BlogComponent],
    templateUrl: './blog-post2.component.html',
    styleUrl: './blog-post2.component.scss'
})
export class BlogPost2Component {

}
