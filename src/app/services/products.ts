import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {

  private products: Product[] = [
    {
      id: 1,
      nombre: 'Corvette ZR1',
      descripcion: 'Potente y elegante', precio: 184500,
      imagen: '/img/CorvetteZR1.jpg'
    },
    {
      id: 2,
      nombre: 'Corvette Z06',
      descripcion: 'Ideal para ciudad',
      precio: 112500,
      imagen: '/img/CorvetteZ06.jpg'
    },
    {
      id: 3,
      nombre: 'Silverado HD',
      descripcion: 'Ideal para trabajo',
      precio: 85000,
      imagen: '/img/SilveradoHD.jpg'
    },
    {
      id: 4,
      nombre: 'Suburban',
      descripcion: 'Familiar y espaciosa',
      precio: 75000,
      imagen: '/img/Suburban.jpg'
    }
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
}
