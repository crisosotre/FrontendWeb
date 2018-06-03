import { Route } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SeguimientotutoriaComponent } from './seguimientotutoria/seguimientotutoria.component';
import { ObservacionestutoriaComponent } from './observacionestutoria/observacionestutoria.component';
import { RegistroComponent } from './registro/registro.component';
import {ReporteComponent} from './reporte/reporte.component';
import {MateriaComponent} from './materia/materia.component';
import {EstudianteComponent} from './estudiante/estudiante.component';

export const RouterConfig: Route [] = [
    {path: 'inicio', component: InicioComponent},
    {path: 'login', component: LoginComponent},    
    {path: 'seguimientotutoria', component: SeguimientotutoriaComponent},
    {path: 'observacionestutoria', component: ObservacionestutoriaComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'reporte', component: ReporteComponent},
    {path: 'materia', component: MateriaComponent},
    {path: 'estudiante', component: EstudianteComponent},
    {path: '', redirectTo: 'inicio' , pathMatch:"full"},
    {path: '**', redirectTo: 'inicio'},
]