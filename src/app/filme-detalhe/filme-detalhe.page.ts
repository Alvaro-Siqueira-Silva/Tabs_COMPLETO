import { routes } from './../tabs/tabs.routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IFilme } from '../model/IFilme';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.page.html',
  styleUrls: ['./filme-detalhe.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonicModule]
})
export class FilmeDetalhePage implements OnInit {
  filme: IFilme | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state){
        this.filme = getNav.extras.state['paramFilme'];
      }
    })
  }

}
