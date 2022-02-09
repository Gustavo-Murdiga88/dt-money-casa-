import { useState } from 'react';
import Modal from 'react-modal'; 
import { Dashboard } from './components/Dashbord';
import { Header } from './components/Header';
import { NewTransactions } from './components/NewTransactionsModal';
import { GlobalStyle } from './styles/global';
import { TransactionContext, TransactionsProvider } from '../src/hooks/useTrasactionsContex';

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionsModal, setIsNewTransactions] = useState(false);

    function onNewTransactionsModalOpen() {
        setIsNewTransactions(true);
    }

    function setIsNewTransactionsModalClose() {
        setIsNewTransactions(false);
    }

    return (
        <TransactionsProvider>   
            <Header onNewTransactionsModal={onNewTransactionsModalOpen} />
            <Dashboard />
            <NewTransactions isOpen={isNewTransactionsModal}
            

            onRequestClose = { setIsNewTransactionsModalClose} />
            
            <GlobalStyle />
        </TransactionsProvider>
    );
}

