import { Container } from "./styles";
import inputImg from '../../assets/entradas.svg';
import outputImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTrasactionsContex";

export function Summary(){
    const { Transactions } = useTransactions();

    // const totalDeposit = Transactions.reduce(function(acc, transaction) {
    //     if (transaction.Type === 'Deposit'){
    //        return acc + transaction.value
    //     }

    //     return acc
    // },0)

    // const totalWithdraw = Transactions.reduce((acc, transaction) => {
    //     if (transaction.Type === 'withdraw'){
    //         return acc + transaction.value
    //     }
    //     return acc
    // }, 0)

    const summaryOfValues = Transactions.reduce((acc, transaction) =>{

        if(transaction.Type === "Deposit"){
        acc.Deposit += transaction.value

        }else{
            acc.withdraw += transaction.value
        }

        acc.total = acc.Deposit - acc.withdraw
        
        return acc;
    },{
        Deposit: 0,
        withdraw:0, 
        total: 0
            })

    
    // const ValueTotal =  totalDeposit - totalWithdraw

    return (    
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inputImg} alt="" />
                </header>
                <strong>{Intl.NumberFormat('pt-BR',{
                    style : 'currency',
                    currency: 'BRL',
                }).format(summaryOfValues.Deposit)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outputImg} alt="" />
                </header>
                <strong>-{Intl.NumberFormat('pt-BR',{
                    style:'currency',
                    currency:'BRL'
                }).format(summaryOfValues.withdraw)}</strong>
            </div>
            <div className="colorGreen">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>{Intl.NumberFormat('pt-BR',{
                    style : 'currency',
                    currency: 'BRL'
                }).format(summaryOfValues.total)}</strong>
            </div>
        </Container>
    )
}