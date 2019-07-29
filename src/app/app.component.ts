import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomes: string[] = ['Carlos','Camila'];

  nomesFiltro: string[];

  buscar(valor:string) {
    this.nomesFiltro = [];

    //método 1
    /*
    for (var i = 0; i < this.nomes.length; i++) {
      if (this.nomes[i].toLowerCase().includes(valor.toLowerCase())) {
        this.nomesFiltro.push(this.nomes[i]);
      }
    }
    */

    //método 2
    /*
    let temp = [];
    this.nomes.forEach(buscarItem);
    function buscarItem(nome) {
      if (nome.toLowerCase().includes(valor.toLowerCase())) {
        temp.push(nome);
      }
    }
    this.nomesFiltro = temp;
    */

    //método 3
    /*
    this.nomesFiltro = this.nomes.filter(function (nome) {
      return nome.toLowerCase().includes(valor.toLowerCase());
    });
    */

    //método 4
    this.nomesFiltro = this.nomes.filter(
      (nome) => nome.toLowerCase().includes(valor.toLowerCase())
    );

  }

  pessoas: any = [
    {id: 1, nome: 'joao', salario: 5000},
    {id: 2, nome: 'maria', salario: 1000},
    {id: 3, nome: 'josé', salario: 2000},
    {id: 4, nome: 'pedro', salario: 3000},
    {id: 5, nome: 'felipe', salario: 10000},
    {id: 6, nome: 'carlos', salario: 800},
  ]

  getValorTotal(): Number {
    return this.pessoas.reduce(
      (soma, pessoa) => soma + pessoa.salario, 0);
  }

  buscarId(id) {
    return this.pessoas.find(pessoa => pessoa.id == id);
  }

  aumentarSalario(percentual) {
    this.pessoas.map(pessoa =>
      pessoa.salario += pessoa.salario * percentual/100)
  }

  verificaSalario(valor:number) {
    return this.pessoas.every(pessoa => pessoa.salario > valor);
  }

  buscaCampos(criterio: string) {
    return this.pessoas.filter((pessoa) =>
      Object.keys(pessoa).some
      (chave => pessoa[chave].toString().includes(criterio)));
  }

  /*
  ngOnInit() {
    const observable = new Observable(subscriber => {
      subscriber.next(100);
      subscriber.next(2);
      subscriber.next(300);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('Antes de executar o subscribe');
    observable.subscribe({
      next(x) {console.log('Recebeu o valor ' + x); },
      error(err) {console.error('Erro: ' + err); },
      complete() {console.log('Terminou o subscribe'); }
    });
    console.log('Última linha');
  }
  */

  observable: Observable<string>;

  nomesO: Array<string> = [];

  ngOnInit() {
    this.observable = new Observable(subscriber => {
      setInterval(() => {
        subscriber.next(this.makeid(5));
      }, 10000);
    });
    let lista: Array<string> = [];
    this.observable.subscribe({
      next(x) {lista.push(x);},
      error(err) {alert('Ocorreu um erro' + err);}
    });
    this.nomesO = lista;
  }

  enviar(valor: string) {
    this.nomesO.push(valor);
  }

  makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrtstuvxwyz01234";
    for (var i=0; i < length; i++) 
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

}