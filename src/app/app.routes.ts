import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {path :'', component : LandingComponent},
    {path :'home', component : HomeComponent},
    {path :'header', component : HeaderComponent},
    {path :'footer', component : FooterComponent},
    // { path: '', redirectTo: 'landing', pathMatch: 'full' }
];
