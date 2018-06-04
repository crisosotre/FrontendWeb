import { Route } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SeguimientotutoriaComponent } from './seguimientotutoria/seguimientotutoria.component';
import { ObservacionestutoriaComponent } from './observacionestutoria/observacionestutoria.component';
import { RegistroComponent } from './registro/registro.component';
import {ReporteComponent} from './reporte/reporte.component';
import {MateriaComponent} from './materia/materia.component';
import {EstudianteComponent} from './estudiante/estudiante.component';
import { LoginGuard } from '../login.guard';
import { NoLoginGuard} from '../no-login.guard';

export const RouterConfig: Route [] = [
    {path: 'inicio', component: InicioComponent, canActivate: [NoLoginGuard]},
    {path: 'login', component: LoginComponent, canActivate:[NoLoginGuard]},    
    {path: 'seguimientotutoria', component: SeguimientotutoriaComponent, canActivate: [LoginGuard]},
    {path: 'observacionestutoria', component: ObservacionestutoriaComponent, canActivate: [LoginGuard]},
    {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard]},
    {path: 'reporte', component: ReporteComponent, canActivate: [LoginGuard]},
    {path: 'materia', component: MateriaComponent, canActivate: [LoginGuard]},
    {path: 'estudiante', component: EstudianteComponent, canActivate: [LoginGuard]},
    {path: '', redirectTo: 'inicio' , pathMatch:"full"},
    {path: '**', redirectTo: 'inicio'},
]