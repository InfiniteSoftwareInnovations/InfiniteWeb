import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  displayDialog: boolean = false;


  explorarServicios() {
    console.log('Explorar servicios');
    this.showDialog();
  }

  contactarConsultas() {
    console.log('Contactar para consultas');
    this.showDialog();
  }

  solicitarDemostracion() {
    console.log('Solicitar demostración');
    
  }

  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }
}