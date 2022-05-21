
import {FormEvent, useState} from 'react'
import Modal from "react-modal";
import {Container,TransactionTypeContainer,TransactionTypeSelector} from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api';

interface NewTransactionModalProps{
  isOpen: boolean,
  onRequestClose: ()=>void,
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const[transactionType, setTransactionType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()

    const data ={
      title,
      value,
      category,
      transactionType
    }

    api.post('transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type="button" onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar nova transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(e.target.valueAsNumber)}
        />

        <TransactionTypeContainer>
          <TransactionTypeSelector
            type="button"
            onClick={()=>setTransactionType('deposit')}
            isActive={transactionType === 'deposit'}
            activeColor={'deposit'}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionTypeSelector>

          <TransactionTypeSelector
            type="button"
            onClick={()=>setTransactionType('withdraw')}
            isActive={transactionType === 'withdraw'}
            activeColor={'withdraw'}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TransactionTypeSelector>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
