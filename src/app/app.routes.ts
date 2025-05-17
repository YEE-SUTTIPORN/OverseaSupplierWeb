import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IndexComponent } from './pages/index/index.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { WebListComponent } from './pages/web-list/web-list.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: '', component: WebListComponent },
        ]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '' }
];
