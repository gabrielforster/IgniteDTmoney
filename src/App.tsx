import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { GlobalStyle } from "./styles/global";


Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </>
  );
};
