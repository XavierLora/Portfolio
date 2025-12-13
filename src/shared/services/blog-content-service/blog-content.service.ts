import { Injectable, signal } from '@angular/core';
import { BlogPostHeaderContent } from '../../interfaces/blog-content/blog-content.consants';

@Injectable({
  providedIn: 'root'
})
export class BlogContentService {
  currentPost = signal<BlogPostHeaderContent | null>(null);
  //TODO: Expand to absorb tags and list of blogs in blog-template 
}