import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }
`
// &:hover com opacidade server para ao botar o mouse em cima o fundo fica mais claro
// flex: 1; foi usado para colocar todos os botões do mesmo tamanho.