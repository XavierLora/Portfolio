import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {

}
