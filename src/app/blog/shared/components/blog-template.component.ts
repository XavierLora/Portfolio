import {
  Component,
  signal,
  OnInit,
  OnDestroy,
  inject,
  computed,
} from '@angular/core';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { BlogContentService } from '../../../../shared/services/blog-content-service/blog-content.service';
import { BLOG_POST_HEADER_CONTENT } from '../constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blog-template',
  imports: [NavbarComponent, RouterLink, CommonModule],
  templateUrl: './blog-template.component.html',
})
export class BlogTemplateComponent implements OnInit, OnDestroy {
  private blogContentService = inject(BlogContentService);
  readonly blogPosts = BLOG_POST_HEADER_CONTENT;

  currentPost = computed(() => {
    return this.blogContentService.currentPost();
  });

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
