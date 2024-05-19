import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPost2Component } from './blog-post2/blog-post2.component';
import { BlogPost3Component } from './blog-post3/blog-post3.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavbarComponent, BlogPostComponent, BlogPost2Component, BlogPost3Component],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
