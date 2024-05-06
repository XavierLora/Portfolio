import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

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
    }
];
