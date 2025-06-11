import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Bienvenue chez Michel Dupuis Entreprises !';
  text1= 'Notre spécialité : monter des chapiteaux et faire beaucoup de bruit';
  text2= 'Choisir Michel Dupuis c\'est aussi choisir de favoriser les artisans et entrepreneurs locaux.\nAvec nous, vous faîtes le bon choix !';
}
