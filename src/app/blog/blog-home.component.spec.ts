import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog-home.component';
import { ActivatedRoute } from '@angular/router';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize filteredList on ngOnInit', () => {
    expect(component.filteredList()).toEqual(component.blogPostHeaderContent);
  });

  it('should reset list and icon colors on resetList', () => {
    component.resetList();
    expect(component.filteredList()).toEqual(component.blogPostHeaderContent);
    expect(component.allPostColorStatus()).toBe("text-blue-500");
    expect(component.careerPostColorStatus()).toBe("iconDefault");
    expect(component.tutorialPostColorStatus()).toBe("iconDefault");
  });

  it('should filter list and set icon colors on filterList', () => {
    const post = component.postTags[0]; // Assuming first tag for testing
    component.filterList(post);
    const expectedList = component.blogPostHeaderContent.filter(item => item.tag === post.tag);
    expect(component.filteredList()).toEqual(expectedList);
    expect(component.allPostColorStatus()).toBe("text-white");
  });

  it('should set correct icon colors on iconColor', () => {
    const careerPost = component.postTags.find(tag => tag.tag === "Career")!;
    component.iconColor(careerPost);
    expect(component.careerPostColorStatus()).toBe("iconHighlight");
    expect(component.tutorialPostColorStatus()).toBe("iconDefault");
    
    const tutorialPost = component.postTags.find(tag => tag.tag !== "Career")!;
    component.iconColor(tutorialPost);
    expect(component.careerPostColorStatus()).toBe("iconDefault");
    expect(component.tutorialPostColorStatus()).toBe("iconHighlight");
  });
});
