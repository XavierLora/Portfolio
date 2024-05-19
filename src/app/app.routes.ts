import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogPost2Component } from './blog/blog-post2/blog-post2.component';
import { BlogPost3Component } from './blog/blog-post3/blog-post3.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'blogPost1',
        component: BlogPostComponent,
    },
    {
        path: 'blogPost2',
        component: BlogPost2Component,
    },
    {
        path: 'blogPost3',
        component: BlogPost3Component,
    }
];
