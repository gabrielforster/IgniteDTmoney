import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer} from 'miragejs'
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return[
        {
          id: 1,
          title: 'Almoço',
          amount: 400,
          type: 'withdraw',
          category: 'food',
          createdAt: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          title: 'Doctor Strange',
          amount: 80,
          type: 'withdraw',
          category: 'life',
          createdAt: new Date().toLocaleDateString(),
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);