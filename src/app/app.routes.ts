import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: RegisterComponent, // página de cadastro
    },
    {
        path: 'home',
        component: HomeComponent, // página de informações
    }
];
