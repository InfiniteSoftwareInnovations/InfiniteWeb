import { Component } from '@angular/core';

@Component({
  selector: 'app-particulas',
  templateUrl: './particulas.component.html',
  styleUrls: ['./particulas.component.scss']
})
export class ParticulasComponent {
  particles: { left: number, top: number }[] = [];

  constructor() {
    this.generarParticulas();
  }

  generarParticulas() {
    for (let i = 1; i <= 100; i++) {
      const left = Math.floor(Math.random() * 100) + 1; // Generar un número aleatorio entre 1 y 100 para left
      const top = Math.floor(Math.random() * 100) + 1; // Generar un número aleatorio entre 1 y 100 para top
      this.particles.push({ left, top });
    }
  }
}