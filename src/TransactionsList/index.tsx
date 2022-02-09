import { useContext } from "react"
import { useTransactions } from "../hooks/useTrasactionsContex";
import { Container } from "./styles";

export function TransactionsList() {

    const { Transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>  
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {Transactions.map(transactions => {
                        return (
                            < tr key={transactions.id}>
                                <td>{transactions.Title}</td>
                                <td className={transactions.Type === "Deposit" ? "receipt" : "payment"}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transactions.value)}</td>
                                <td>{transactions.Category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transactions.Date)
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}