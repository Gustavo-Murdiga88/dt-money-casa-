
import dtMoneyImg from '../../assets/logo.svg';
import { Container, Content } from './styes';

interface controlModal{ 
    onNewTransactionsModal: () => void;
}

export function Header(  { onNewTransactionsModal} : controlModal) {

    return (
        <Container>
            <Content>
                <img src={dtMoneyImg} alt="dt money" />
                <button type='button' onClick={ onNewTransactionsModal }>
                    Nova transação
                </button>
            </Content>
        </Container>

    )
}