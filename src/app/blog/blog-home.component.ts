import { Component, signal, OnInit, computed } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { BLOG_POST_HEADER_CONTENT, BLOG_POST_TAGS, BlogPostHeaderContent, PostTag } from './shared/constants';

@Component({
    selector: 'blog-home',
    imports: [NavbarComponent, RouterLink],
    templateUrl: './blog-home.component.html',
})
export class BlogComponent{

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
}
