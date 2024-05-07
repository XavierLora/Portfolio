import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPost2Component } from './blog-post2/blog-post2.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavbarComponent, BlogPostComponent, BlogPost2Component],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
