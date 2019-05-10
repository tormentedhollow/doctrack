import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_common/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DocumentComponent } from './document/document.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'document',     
                redirectTo: 'document/',
                pathMatch: 'full'

            },
            {
                path: 'document/:id', component: DocumentComponent, 

            },

 
           
        ]
    },


    // otherwise redirect to home
   // { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, DocumentComponent, LoginComponent];