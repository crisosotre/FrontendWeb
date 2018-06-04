import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SeguimientotutoriaComponent } from './components/seguimientotutoria/seguimientotutoria.component';
import { ObservacionestutoriaComponent } from './components/observacionestutoria/observacionestutoria.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RouterModule } from '@angular/router';
import { RouterConfig } from './components/router.config';
import { ChartsModule } from 'ng2-charts';
import { ReporteComponent } from './components/reporte/reporte.component';
import { GraficoLineaComponent } from './components/grafico-linea/grafico-linea.component';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MateriaService } from  './services/materia.service';
import { AsistenciaService } from  './services/asistencia.service';
import { TipoUsuarioService } from  './services/tipo-usuario.service';
import { UsuarioService } from  './services/usuario.service';
import { MateriaComponent } from './components/materia/materia.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    SeguimientotutoriaComponent,
    ObservacionestutoriaComponent,
    RegistroComponent,
    ReporteComponent,
    GraficoLineaComponent,
    GraficoDonaComponent,
    MateriaComponent,
    EstudianteComponent,
  ],
  imports: [
    FormsModule,
    NgbModule.forRoot(),
    NgbModule,
    RouterModule.forRoot(RouterConfig),
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    HttpModule 
  ],
  providers: [
    UsuarioService,
    TipoUsuarioService,
    MateriaService,
    AsistenciaService,
    LoginGuard,
    NoLoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }