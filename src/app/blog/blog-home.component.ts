import { Component, signal, OnInit, computed, inject } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { Router } from '@angular/router';
import { BLOG_POST_HEADER_CONTENT, BLOG_POST_TAGS } from './shared/constants';
import { BlogPostHeaderContent, PostTag } from '../../shared/interfaces/blog-content/blog-content.consants';
import { BlogContentService } from '../../shared/services/blog-content-service/blog-content.service';

@Component({
    selector: 'blog-home',
    imports: [NavbarComponent],
    templateUrl: './blog-home.component.html',
})
export class BlogComponent{
  private router = inject(Router);
  private blogContentService = inject(BlogContentService);

  filteredList = signal<BlogPostHeaderContent[]>([]);
  allPostColorStatus = signal("text-blue-500");
  careerPostColorStatus = signal("iconDefault");
  tutorialPostColorStatus = signal("iconDefault");

  postTags: PostTag[] = BLOG_POST_TAGS;
  blogPostHeaderContent: BlogPostHeaderContent[] = BLOG_POST_HEADER_CONTENT;

  ngOnInit(){
    this.filteredList.set(this.blogPostHeaderContent);
  }

  resetList(){
    this.filteredList.set(this.blogPostHeaderContent);
    this.allPostColorStatus.set("text-blue-500");
    this.careerPostColorStatus.set("iconDefault");
    this.tutorialPostColorStatus.set("iconDefault");
  }

  filterList(post: PostTag){
    const list: BlogPostHeaderContent[] = this.blogPostHeaderContent.filter((item: { tag: any; }) => item.tag === post.tag);
    this.filteredList.set(list);
    this.iconColor(post);
    this.allPostColorStatus.set("text-white");
  }

  iconColor(post: PostTag){
    this.careerPostColorStatus.set("iconDefault");
    this.tutorialPostColorStatus.set("iconDefault");
    if(post.tag === "Career"){
      this.careerPostColorStatus.set("iconHighlight");
    }else{
      this.tutorialPostColorStatus.set("iconHighlight");
    }
  }

  routeToBlogPost(post: BlogPostHeaderContent){
    this.blogContentService.currentPost.set(post);
    this.router.navigateByUrl(post.url);
  }
}
