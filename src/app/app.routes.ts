import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        //TODO: Clean up component before reimplementing and add lazy loading
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'blog',
        loadComponent: () => import('./blog/blog-home.component').then(m => m.BlogComponent),
    },
    {
        path: 'blog/My-Pursuit-Of-Happiness',
        loadComponent: () => import('./blog/blog-posts/Pursuit-Of-Happiness/Pursuit-Of-Happiness.component').then(m => m.PursuitOfHappinessComponent),
    },
    {
        path: 'blog/Web-Development-as-a-Career',
        loadComponent: () => import('./blog/blog-posts/Web-Development-Career/Web-Development-Career.component').then(m => m.WebDevelopmentCareerComponent),
    }
];
