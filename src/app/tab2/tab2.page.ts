import { Component } from '@angular/core';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ISerie } from '../model/ISerie';
import { NgIf, NgFor } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgIf, NgFor],
})
export class Tab2Page {
  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nome: 'The Walking Dead',
      lancamento: '30/10/2010',
      episodios: '177',
      temporadas: '11',
      classificacao: 7,
      cartaz: 'https://br.web.img2.acsta.net/medias/nmedia/18/78/35/82/20303823.jpg',
      generos: ['Ação', 'Terror', 'Drama'],
      pagina: '/twd',
      favorito: false
    },{
      nome: 'Shameless',
      lancamento: '09/01/2011',
      episodios: '134',
      temporadas: '11',
      classificacao: 8.6,
      cartaz: 'https://m.media-amazon.com/images/I/71BGX6INsRL._AC_UF894,1000_QL80_.jpg',
      generos: ['Comédia', 'Drama'],
      pagina: '/shameless',
      favorito: false
    },{
      nome: 'The last of us',
      lancamento: '15/01/2023',
      episodios: '9',
      temporadas: '1',
      classificacao: 8.8,
      cartaz: 'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg',
      generos: ['Terror', 'Drama', 'Suspense'],
      pagina: '/tlou',
      favorito: false
    },{
      nome: 'Dark',
      lancamento: '27/06/2020',
      episodios: '28',
      temporadas: '3',
      classificacao: 8.7,
      cartaz: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg',
      generos: ['Mistério', 'Drama', 'Policial'],
      pagina: '/dark',
      favorito: false
    },
  ];

  exibirSerie(serie: ISerie){
    const navigationExtras:NavigationExtras = {state:{paramSerie:serie}}
    this.router.navigate(["serie-detalhe"],navigationExtras);
  }
  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Serie adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }
}
