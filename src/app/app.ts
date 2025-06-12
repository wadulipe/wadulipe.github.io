import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy  {
  @ViewChild('boomboom') audioRef!: ElementRef<HTMLAudioElement>;
  
  protected title = 'Bienvenue chez Michel Dupuis Entreprises !';
  text1= 'Notre spécialité : monter des chapiteaux et faire beaucoup de bruit';
  text2= 'Choisir Michel Dupuis c\'est aussi choisir de favoriser les artisans et entrepreneurs locaux.\nAvec nous, vous faîtes le bon choix !';

  private interactionHandler = () => {
    const audio = this.audioRef.nativeElement;

    audio.play().then(() => {
      audio.muted = false;
    }).catch(err => {
      console.log('Lecture bloquée :', err);
    });

    this.removeInteractionListeners();
  };

  private keydownHandler = (event: KeyboardEvent) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      this.interactionHandler();
    }
  };

  ngAfterViewInit() {
    document.addEventListener('click', this.interactionHandler);
    document.addEventListener('touchstart', this.interactionHandler);
    document.addEventListener('scroll', this.interactionHandler);
    document.addEventListener('keydown', this.keydownHandler);
    document.body.addEventListener('mouseenter', this.interactionHandler);
  }

  ngOnDestroy() {
    this.removeInteractionListeners();
  }

  private removeInteractionListeners() {
    document.removeEventListener('click', this.interactionHandler);
    document.removeEventListener('touchstart', this.interactionHandler);
    document.removeEventListener('scroll', this.interactionHandler);
    document.removeEventListener('keydown', this.keydownHandler);
    document.body.removeEventListener('mouseenter', this.interactionHandler);
  }

}
