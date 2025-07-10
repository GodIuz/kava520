import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProductsComponent } from './products/products.component';
import { MpyralComponent } from './products/mpyral/mpyral.component';
import { GkazozaComponent } from './products/gkazoza/gkazoza.component';
import { LemonadaComponent } from './products/lemonada/lemonada.component';
import { PortokaladaComponent } from './products/portokalada/portokalada.component';
import { SodaComponent } from './products/soda/soda.component';
import { IceTeaLemoniComponent } from './products/ice-tea-lemoni/ice-tea-lemoni.component';
import { IceTeaRodakinoComponent } from './products/ice-tea-rodakino/ice-tea-rodakino.component';
import { GreenTeaLemoniComponent } from './products/green-tea-lemoni/green-tea-lemoni.component';
import { MastixaSodaComponent } from './products/mastixa-soda/mastixa-soda.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'products', component: ProductsComponent},
    {path:'products/mpyral', component: MpyralComponent},
    {path:'products/gkazoza', component:GkazozaComponent},
    {path:'products/lemonada', component:LemonadaComponent},
    {path:'products/portokalada', component:PortokaladaComponent},
    {path:'products/soda', component:SodaComponent},
    {path:'products/ice-tea-lemoni', component:IceTeaLemoniComponent},
    {path:'products/ice-tea-rodakino', component:IceTeaRodakinoComponent},
    {path:'products/green-tea-lemoni', component:GreenTeaLemoniComponent},
    {path:'products/mastixa-soda', component:MastixaSodaComponent},
    {path:'about',component: AboutComponent},
    {path:'contact', component:ContactComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{
    
}