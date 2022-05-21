import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer, Model} from 'miragejs'
import { App } from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Web',
          amount: 2000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2022-10-05 20:00:00')
        },
        {
          id: 2,
          title: 'Almoço',
          amount: 4000,
          type: 'withdraw',
          category: 'Comida',
          createdAt: new Date('2022-05-05 01:00:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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
