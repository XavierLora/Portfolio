import { Component } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavbarComponent, BlogPostComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
