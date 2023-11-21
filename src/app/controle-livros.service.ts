
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Angular na Prática', resumo: 'Guia abrangente para Angular', autores: ['João Silva'] },
    { codigo: 2, codEditora: 2, titulo: 'React Explicado', resumo: 'Compreensão dos fundamentos do React', autores: ['Maria Souza'] },
    { codigo: 3, codEditora: 1, titulo: 'Vue.js para Iniciantes', resumo: 'Primeiros passos com Vue.js', autores: ['Alexandre Santos'] },
    { codigo: 4, codEditora: 3, titulo: 'JavaScript: As Boas Partes', resumo: 'Leitura essencial para desenvolvedores JavaScript', autores: ['Douglas Crockford'] },
    { codigo: 5, codEditora: 2, titulo: 'Node.js na Prática', resumo: 'Guia prático para desenvolvimento com Node.js', autores: ['Samuel Williams'] },
  ];


  getLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = Math.max(...this.livros.map(l => l.codigo), 0) + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
