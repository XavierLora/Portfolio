import { Component, signal, OnInit, computed } from '@angular/core';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPost2Component } from './blog-post2/blog-post2.component';
import { BlogPost3Component } from './blog-post3/blog-post3.component';

@Component({
    selector: 'app-blog',
    imports: [NavbarComponent, BlogPostComponent, BlogPost2Component, BlogPost3Component],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})
export class BlogComponent{

  filteredList:any = signal([]);
  allPostColorStatus = signal("text-blue-500");
  careerPostColorStatus = signal("iconDefault");
  tutorialPostColorStatus = signal("iconDefault");

  postTags: any = [
    {
      tag: "Career",
    },
    {
      tag: "Tutorial",
    }
  ]

  blogPostHeaderContent: any = [
    {
      url: "blogPost3",
      tag: "Career",
      title: "My Pursuit of Happiness",
      author: "Xavier Lora",
      authorPic: "assets/imgs/headshotXavierLora.png",
      authorTitle: "Web/App Enthusiast"
    },
    {
      url: "blogPost2",
      tag: "Tutorial",
      title: "Guide to Setting up Dark Mode with Tailwind",
      author: "Xavier Lora",
      authorPic: "assets/imgs/headshotXavierLora.png",
      authorTitle: "Web/App Enthusiast"
    },
    {
      url: "blogPost1",
      tag: "Career",
      title: "My Internship Experience as a Front End Web Developer",
      author: "Xavier Lora",
      authorPic: "assets/imgs/headshotXavierLora.png",
      authorTitle: "Web/App Enthusiast"
    },
  ];

  ngOnInit(){
    this.filteredList.set(this.blogPostHeaderContent);
  }

  resetList(){
    this.filteredList.set(this.blogPostHeaderContent);
    this.allPostColorStatus.set("text-blue-500");
    this.careerPostColorStatus.set("iconDefault");
    this.tutorialPostColorStatus.set("iconDefault");
  }

  filterList(post: any){
    const list: any[] = this.blogPostHeaderContent.filter((item: { tag: any; }) => item.tag === post.tag);
    this.filteredList.set(list);
    this.iconColor(post);
    this.allPostColorStatus.set("text-white");
  }

  iconColor(post: any){
    this.careerPostColorStatus.set("iconDefault");
    this.tutorialPostColorStatus.set("iconDefault");
    if(post.tag === "Career"){
      this.careerPostColorStatus.set("iconHighlight");
    }else{
      this.tutorialPostColorStatus.set("iconHighlight");
    }
  }
}
