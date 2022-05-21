
import {useState} from 'react'
import Modal from "react-modal";
import {Container,TransactionTypeContainer,TransactionTypeSelector} from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps{
  isOpen: boolean,
  onRequestClose: ()=>void,
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const[transactionType, setTransactionType] = useState('deposit')

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

      <Container>
        <h2>Cadastrar nova transação</h2>

        <input
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
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
        />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
