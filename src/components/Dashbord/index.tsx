import { Container } from "./style";
import { Summary } from '../Summary';
import { TransactionsList } from "../../TransactionsList";
import { createServer, Model } from 'miragejs';

createServer({
    models:{
        'transactions' : Model
    },

    seeds(server){
        server.db.loadData({
            transactions : [
                {
                    Type:"Deposit",
                    Title: "Desenvolvimento Web",
                    Category: "Dev", 
                    Date: '2022-02-26 19:00',
                    value: 12000   
                },
                {
                    Type:"withdraw",
                    Title: "Compra de um Carro",
                    Category: "Luxo", 
                    Date: '2022-02-27 19:00',
                    value: 10000
                }
            ]
        })
    },
    routes() {
        this.namespace = 'api';
        this.get("/transactions", (schema) => {
            
            return  schema.all('transactions');
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            
            return schema.create("transactions", data); 
        })
    }
})

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsList />
        </Container>
    )
}