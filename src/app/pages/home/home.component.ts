import { Component } from '@angular/core';

interface operacion {
  simbolo: string;
  texto: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  num1: string = '0';
  num2: string = '0';
  select: string = '';
  resultado: number = 0;
  colorResultado = '';
  operaciones: operacion[] = [
    {
      simbolo: '+',
      texto: 'Suma',
      color: 'text-green-500',
    },
    {
      simbolo: '-',
      texto: 'Resta',
      color: 'text-orange-500',
    },
    {
      simbolo: '*',
      texto: 'Multiplicación',
      color: 'text-blue-500',
    },
    {
      simbolo: '/',
      texto: 'División',
      color: 'text-yellow-500',
    },
  ];
  onOperacion() {
    const operando = eval(this.num1 + this.select + this.num2);
    if (operando == Infinity || isNaN(operando)) {
      this.resultado = 0;
    } else {
      this.resultado = operando;
    }
    this.colorResultado = this.obtenerColor(this.select);
  }

  obtenerColor(simbolo: string) {
    let color = '';
    this.operaciones.forEach((oper) => {
      if (oper.simbolo === simbolo) {
        return (color = oper.color);
      }
      return;
    });
    return color;
  }
}
