import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['nicolas', 'julian', 'perez'];
  ejemplo = [1, 2, 3, 4, 5];
  addItem(){
    this.items.push('nuevo item');
  }
  deleteItem(index: number){
    this.items.splice(index, 1);
  }
  addEjemplo(){
    this.ejemplo.push('6');
  }
  deleteEjemplo(index: number){
    this.ejemplo.splice(index, 1);
  }
}


