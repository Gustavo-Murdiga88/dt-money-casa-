import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ListTransactions {
    id: number;
    Type: string;
    Title: string;
    value: number;
    Category: string;
    Date: string;
}

interface TransactionsProviderProps{
    children : ReactNode; 
}

type  TransactionsIput = Omit<ListTransactions, 'id' | 'Date'>;

interface TransactionsContextData {

    Transactions: ListTransactions[];
    createTransactions : (transactions : TransactionsIput) => Promise<void>; 
}

export const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export function TransactionsProvider({ children }: TransactionsProviderProps){

    const [Transactions, setTransactions] = useState<ListTransactions[]>([])

    async function createTransactions( transactionsInput: TransactionsIput ){

       const response = await api.post('/transactions', {
           ...transactionsInput,
           Date: new Date()
       });
       const { transactions } = response.data;
       
       setTransactions([
           ...Transactions,
           transactions
       ])
    }

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, []);


    return (
        <TransactionContext.Provider value={{ Transactions, createTransactions}}>
            {children}
        </TransactionContext.Provider>
    )

}

export function useTransactions(){
    const Contex = useContext(TransactionContext)

    return Contex
}