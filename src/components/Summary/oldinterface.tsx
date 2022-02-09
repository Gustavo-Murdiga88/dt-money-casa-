import inputImg from '../../assets/entradas.svg';
import outputImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { SummaryBody, SummaryContent, TextContent, ValueContent } from './old';

export function Summaryold() {
    return (
        <SummaryBody>
            <SummaryContent>
                <TextContent>
                    <h3> Entradas </h3>
                    <img src={inputImg} alt="entradas" />
                </TextContent>
                <ValueContent>
                    <h5> <strong>R$ 1000,00</strong> </h5>
                </ValueContent>
            </SummaryContent>
            <SummaryContent>
                <TextContent>
                    <h3> Saídas</h3>
                    <img src={outputImg} alt="Saidas" />
                </TextContent>
                <ValueContent>
                    <h5> <strong>- R$500,00</strong> </h5>
                </ValueContent>
            </SummaryContent>
            <SummaryContent >
                <TextContent>
                    <h3> Total</h3>
                    <img src={totalImg} alt="Total" />
                </TextContent>
                <ValueContent >
                    <h5> <strong>R$ 500,00</strong> </h5>
                </ValueContent>
            </SummaryContent>
        </SummaryBody>
    )
}