
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Adicione esta importação
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [AppComponent, LivroListaComponent, LivroDadosComponent],
  imports: [
    BrowserModule,
    FormsModule, // Adicione FormsModule aqui
    RouterModule.forRoot([
      { path: 'lista', component: LivroListaComponent },
      { path: 'dados', component: LivroDadosComponent },
      { path: '', redirectTo: '/lista', pathMatch: 'full' }, // Rota padrão
    ]),
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
