import styled, { keyframes } from 'styled-components'


export const Body = styled.div`
    color: ${props => props.theme.fontColor};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export  const Container = styled.div`
    margin-top: 4.5rem;
    height: 450px;
    width: 580px;
    border-radius: 30px;
`
export const Navbar = styled.nav`
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    h1{
        font-size: 30px;
    }
`
export const IconMood = styled.nav`
    display: flex;
    align-items: center;
    cursor: pointer;
    
   span{
    text-transform: uppercase;
    margin-right: 0.4rem;
   }
`
export const Form = styled.form`
    position: relative;
    border-radius: 10px;    
    background-color: ${(props) => props.theme.searchAndCardBackground};
    margin-bottom: 1rem;
    height: 1.2rem;
    padding: 1rem 0.5rem;
`
export const Input = styled.input`
    border: none;
    outline: none;
    position: absolute;
    font-size: 19px;
    z-index: 2;
    width: 88%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    padding: 8px;
    padding-left: 30px;
    color: ${(props) => props.theme.inputPlaceholder};

    &::placeholder{
        font-size: 19px;
        color: ${(props) => props.theme.inputPlaceholder};
    }
`
export const IconSearch = styled.div`
    position: absolute;
    z-index: 5;
    color: blue;
    top: 12px;
    font-size: 25px;
`
export const Button = styled.button`
    top: 6px;
    z-index: 5;
    position: absolute;
    right: 8px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    background-color: #3c88f9;
    color: #fff;
    cursor: pointer;
`
const spinAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`
export const Card = styled.div`
 background-color: ${(props) => props.theme.searchAndCardBackground};
 padding: 1rem 1.2rem;
 border-radius: 10px;
 .loading-image{
    animation: ${spinAnimation} 0.5s linear infinite;
}
`
export const DivCard = styled.div`
    display: grid;
 grid-template-columns: repeat(1, 35% 60%);
`

export const Image = styled.div`
    img{
        width: 120px;
    }
`
export const Informations = styled.div`
    
`
export const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin-top: 5px;
    }
`
export const Bio = styled.div`
    .email{
        color: #4b97fa;
        font-size: 18px;
        margin: 3px 0 10px 0;
    }
    margin-bottom: 20px;
`
export const MoreInformations = styled.div`
    display: grid;
    padding: 0.5rem;
    grid-template-columns: repeat(1, 33.3% 33.3% 33.3%);
    height: 60px;
    text-align: center;
    align-items: center;
    margin-bottom: 10px;
    background-color:  ${props => props.theme.MoreInformationsBackground};
    border-radius: 20px;
    width: 100%;
    p{
        margin-top: 5px;
    }
`
export const DivMoreInformations = styled.div`
`
export const LocationsAndLinks = styled.div`
    display: grid;
    padding: 0;
    grid-template-columns: repeat(1, 50% 31%);
    justify-content: space-between;

`
export const DivLocationsAndLinks = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    p, a{
        margin-left: 8px;
    }
    a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
    }
`

