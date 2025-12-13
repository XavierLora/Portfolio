import {
  Component,
  signal,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { BlogContentService } from '../../../../shared/services/blog-content-service/blog-content.service';

@Component({
  selector: 'blog-template',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './blog-template.component.html',
})
export class BlogTemplateComponent implements OnInit, OnDestroy {
  private blogContentService = inject(BlogContentService);

  title = signal<string>('');
  date = signal<string>('');

  ngOnInit(): void {
    this.title.set(this.blogContentService.currentPost()?.title ?? '');
    this.date.set(this.blogContentService.currentPost()?.date ?? '');
  }

  ngOnDestroy(): void {
    this.blogContentService.currentPost.set(null);
  }
}
