import Modal from 'react-modal';
import { Content, ContentTypeButton, RadioBox } from './styles';
import inputImg from '../../assets/entradas.svg';
import outputImg from '../../assets/saidas.svg';
import closeImg from '../../assets/close.svg';
import { FormEvent, useContext, useState } from 'react';
import { useTransactions } from '../../hooks/useTrasactionsContex';


interface Transactions {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactions({ isOpen, onRequestClose }: Transactions) {
    const { createTransactions } = useTransactions();

    const [Type, setIsType] = useState('Deposit');
    const [Title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [Category, setCategory] = useState('');


    async function handleNewTransaction(event: FormEvent) {
        event.preventDefault();

    await createTransactions({
            value,
            Type,
            Category,
            Title,
        })

        setTitle('')
        setValue(0)
        setIsType('Deposit')
        setCategory('')

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="new-react-modal"
            overlayClassName="new-react-overlay-modal"
        >

            <Content onSubmit={handleNewTransaction}>
                <h2>Cadastro de transações</h2>
                <input type="text"
                    placeholder='Título'
                    value={Title}
                    onChange={event => setTitle(event.target.value)} />
                <input type="number"
                    placeholder='Valor'
                    value={value}
                    onChange={event => setValue(Number(event.target.value))} />

                <ContentTypeButton>
                    <RadioBox
                        type='button'
                        isActive={Type === 'Deposit'}
                        Color={'green'}
                        onClick={() => setIsType('Deposit')}
                    >
                        <img src={inputImg} alt="" />
                        <span> Entrada </span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        isActive={Type === 'withdraw'}
                        Color={"red"}
                        onClick={() => setIsType('withdraw')}>
                        <img src={outputImg} alt="" />
                        <span> Saída </span>
                    </RadioBox>
                </ContentTypeButton>
                <button className='closeModal'
                    onClick={onRequestClose}>
                    <img src={closeImg} alt="Close" />
                </button>
                <input type="text" 
                placeholder='Categoria'
                value = {Category}
                onChange={event => setCategory(event.target.value) } />
                <button type="submit"> Cadastrar </button>
            </Content>

        </Modal>
    )
}