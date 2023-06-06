import { Component } from '@angular/core';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgIf, NgFor } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { IAtores } from '../model/IAtores';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgIf, NgFor],
})
export class Tab3Page {
  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaAtores: IAtores [] = [
    {
      nome: 'Pedro Pascal',
      idade: '48 anos',
      ppapel: 'Joel em The Last of Us | Mandalorian - The Mandalorian',
      premios: 9,
      cartaz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pedro_Pascal_by_Gage_Skidmore.jpg/640px-Pedro_Pascal_by_Gage_Skidmore.jpg',
      curiosidades: ['omg', 'joel', 'hii'],
      pagina: '/pedropascal',
      favorito: false
    },{
      nome: 'Millie Bobbie Brown',
      idade: '19 anos',
      ppapel: 'Eleven - Stranger Things',
      premios: 19,
      cartaz: 'https://br.web.img2.acsta.net/pictures/19/07/05/23/57/3783349.jpg',
      curiosidades: ['beep', 'beep'],
      pagina: '/mbb',
      favorito: false
    },{
      nome: 'Michael B. Jordan',
      idade: '36 anos',
      ppapel: 'Killmonger - Black Panther / Adonis Creed - Creed',
      premios: 43,
      cartaz: 'https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_FMjpg_UX1000_.jpg',
      curiosidades: ['aahr', 'sla'],
      pagina: '/mbj',
      favorito: false
    },{
      nome: 'Zendaya',
      idade: '26 anos',
      ppapel: 'Rue - Euphoria / MJ - Spider-Man (MCU)',
      premios: 29,
      cartaz: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/12/26/23/19/0993801.jpg',
      curiosidades: ['hopopo', 'uee'],
      pagina: '/zendaya',
      favorito: false
    },
  ]

  exibirAtor(ator: IAtores){
    const navigationExtras:NavigationExtras = {state:{paramSerie:ator}}
    this.router.navigate(["atores-detalhe"],navigationExtras);
  }
  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
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