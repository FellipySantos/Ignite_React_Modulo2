import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable(){
    useEffect(() =>{
        api.get('/transactions')
        .then(response => console.log(response.data))
    },[])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className='deposit'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>07/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className='withdraw'>- R$1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
