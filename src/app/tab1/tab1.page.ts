import { Component } from '@angular/core';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IFilme } from '../model/IFilme';
import { NgIf, NgFor } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgIf, NgFor],
})
export class Tab1Page {
  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Avatar: O Caminho da Água',
      lancamento: '15/12/2022',
      duracao: '3h12m',
      classificacao: 7.7,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/54/Avatar_The_Way_of_Water_poster.jpg/250px-Avatar_The_Way_of_Water_poster.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/avatar2',
      favorito: true
    },
    {
      nome: 'Vingadores: Ultimato',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {nome: 'Star Wars: A Ameaça Fantasma',
    lancamento: '24/06/1999 (BR)',
    duracao: '2h16m',
    classificacao: 6.5,
    cartaz: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg',
    generos: ['Aventura', 'Fantasia', 'Ação'],
    pagina: '/starwars',
    favorito: false
    },
    {nome: 'WALL-E',
    lancamento: '27/06/2008 (BR)',
    duracao: '1h38m',
    classificacao: 8.4,
    cartaz: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/WALL-E.jpg/250px-WALL-E.jpg',
    generos: ['Animação', 'Fantasia', 'Aventura'],
    pagina: '/walle',
    favorito: false
    }

  ];

  exibirFilme(filme: IFilme){
    const navigationExtras:NavigationExtras = {state:{paramFilme:filme}}
    this.router.navigate(["filme-detalhe"],navigationExtras);
  }
  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }
}





