import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  @ViewChild('boomboom') audioRef!: ElementRef<HTMLAudioElement>;
  
  protected title = 'Bienvenue chez Michel Dupuis Entreprises !';
  text1= 'Notre spécialité : monter des chapiteaux et faire beaucoup de bruit';
  text2= 'Choisir Michel Dupuis c\'est aussi choisir de favoriser les artisans et entrepreneurs locaux.\nAvec nous, vous faîtes le bon choix !';


  ngAfterViewInit() {
    const audio = this.audioRef.nativeElement;

    const interactionHandler = () => {
    
      audio.play().then(() => {
          // Si lecture ok, on enlève le mute pour avoir le son
          audio.muted = false;
        }).catch((err) => {
          console.log('Lecture bloquée :', err);
        });

      // On enlève les listeners pour ne pas relancer plusieurs fois
      document.removeEventListener('click', interactionHandler);
      document.removeEventListener('touchstart', interactionHandler);
      document.removeEventListener('touchmove', interactionHandler);
      document.removeEventListener('scroll', interactionHandler);
      document.body.removeEventListener('mouseenter', interactionHandler);
    };

    // On ajoute les événements qui déclencheront la lecture
    document.addEventListener('click', interactionHandler);
    document.addEventListener('touchstart', interactionHandler);
    document.addEventListener('touchmove', interactionHandler);
    document.addEventListener('scroll', interactionHandler);
    document.body.addEventListener('mouseenter', interactionHandler);
  }
}
