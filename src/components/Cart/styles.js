import styled from 'styled-components';
import {darken} from 'polished';


export const Container = styled.section`
padding: 20px;
background: #eaeaea;
width: 900px;
margin: 20px;


@media (max-width: 1085px) {
  width: 100%;
  height: 400px ;
  
  }
>div {
  display: flex;
  padding: 12px;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: 18px;
    color: #222;
  }
  @media (max-width: 450px) {
    padding: 8px;
  }
}

footer {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #4B43A4;
    color: #fff;

    border: 0;
    border-radius: 4px;

    padding: 10px 20px;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      background: ${darken(0.04, '#4B43A4')}
    }
    @media (max-width: 450px) {
    padding: 6px 14px;
    font-size: 12px;
  }

  }
}

`;

export const ProductCart = styled.table`

thead th {
  padding: 9px;
  text-align: center;
  color: #111;

  @media (max-width: 1085px) {
  padding: 8px;
  top: 0;
  left: 0;
 
  width: 30%;
  
  }
  @media (max-width: 450px) {
  padding: 8px;
  top: 0;
  left: 0;
 
  width: 5%;
  
  }

}


tbody td {
  padding: 9px;
  border-bottom: 1px solid #111;
}

img {
  width: 80px;
  @media (max-width: 450px) {
    width: 60px;
  
  }
  strong {
    color: white;
  }

}


strong {
  color: #333;
  display: block;
}
span {
  display: block;
  margin-top: 4px;
  color: #111;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 450px) {
    font-size: 14px;
  }
}

div {
  display: flex;
  align-items: center;

  input {
    border: 1px solid #444;
    border-radius: 3px;
    color: #111;
    padding: 2px;
    width: 40px;
    text-align: center;
    @media (max-width: 450px) {
    width: 30px;
  }
    
  }

}
  button {
    border: none;
    background: none;
    padding: 6px;
  }

`;


export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #111;
    font-weight: bold;

  }
  strong {
    color: #333;
  }

  strong {
    font-size: 26px;
    margin-left: 6px;
    @media (max-width: 450px) {
    font-size: 20px;
    margin-left: 4px;
  }
  }
`;

