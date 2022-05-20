import {Container} from './styles'

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>categoria</th>
                    <th>Data</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Salárioo</td>
                        <td className='deposit'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>

                    <tr>
                        <td>Mercado</td>
                        <td className='withdraw'>-R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>

            </table>
        </Container>
    )
}