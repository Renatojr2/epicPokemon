import styled from 'styled-components';
import {darken} from 'polished';


export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1085px) {
    flex-direction: column-reverse;
    width: 90%;
    margin: 0 auto;

  }
`;

export const ProductList = styled.ul`
  margin: 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  list-style: none;

  @media (max-width: 1085px) {
    margin: 0 auto;
    width: 100%;
    margin-top: 50px;
    
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    width: 100%;
    margin-top: 50px;
    
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
  li {
    border: 1px solid #666;
    padding: 15px;
    background: #eaeaea;

    border-radius: 4px;
    
    display: flex;
    flex-direction: column;


    img {
      height: 90px;
    }

    h2 {
      font-size: 24px;
      margin: 20px
    }

    p {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px
      
    }

    >strong {
      color: #333;
    }


    > span {
      font-size: 16px;
      margin: 5px 0 15px;
      font-weight: bold;
    }

    button {
      margin-top: auto;
      border: 2px solid #4B43A4;
      padding: 15px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity .2s;
      border-radius: 15px;

      &:hover {
        background: ${darken(0.04, '#4B43A4')};
        color: white;
      }
  }
        > span {
          flex: 1;
          color: black;
          font-weight: bold;
          margin-left: 5px;
        }
    }
  

`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;

  padding: 0px 20px;

  background: #3f3d56;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40%;
  }
`

export const Form = styled.form`
  width: 26rem;
  height: 35px;

  display: flex;
  align-items: center;

  position: relative;
  right: 55px;

  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;

    border: none;
    border-radius: 4px;
  }

  svg {
    position: relative;
    top: 2px;
    left: -35px;
  }
`;