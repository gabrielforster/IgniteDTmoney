import {useState} from 'react'

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

import Modal from "react-modal";

Modal.setAppElement('#root')

export const App = () => {
  const [isNewTransactionModalIsOpen, setIsNewTransactionModalIsOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalIsOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar uma Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
};
