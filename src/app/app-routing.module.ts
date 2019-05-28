import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*Importar os Componentes */
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { AdcNoticiaComponent } from './adc-noticia/adc-noticia.component';
import { NoticiaComponent } from './noticia/noticia.component';

const routes: Routes = [
    {path:'', component:ListaNoticiasComponent},
    {path:'noticia/add', component:AdcNoticiaComponent},
    {path:'noticia/edit/:id', component:NoticiaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  /**Classe Responsável por gerenciamento de rotas da aplicação */
  export class AppRoutingModule { }