import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Productos } from './pages/products/products.component';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'productos', component: Productos },
  { path: 'contacto', component: Contact },

  // Ruta lazy load para ProductDetailComponent (standalone)
  {
    path: 'product-detail/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component')
        .then(m => m.ProductDetailComponent)
  },

  // Ruta comodín para cualquier ruta no encontrada
  { path: '**', redirectTo: '' }
];
