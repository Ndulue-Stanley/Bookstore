import react from 'react'
import { styled } from 'styled-components';
import {BsSearch} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import pix from '../Assets/logo.jpg'
import Upload from '../Pages/Upload';

const Header = () => {
    return(
        <div>
            <Container>
        <Wrapper>
        <LogoWrapper>
            <Logo src={pix}/>
            <LogoText>Bookstore</LogoText>
        </LogoWrapper>
        <NavWrapper>
         <Icon><BsSearch style={{fontSize: '25px', color: 'grey'}}/></Icon>
         <NavLink to = '/upload-book' style={{textDecoration: 'none'}}>
         <Button > Upload Books</Button>
         </NavLink>
          
            
       
        </NavWrapper>
        </Wrapper>
           
            </Container>
        </div>
    )
}

export default Header;

const Icon = styled.div`
color: black;
`
const Button = styled.button`
padding: 14px 24px;
color: white;
background-color: crimson;
font-size: 15px;
border-radius: 10px;
border: none;
cursor: pointer;
`
const Logo = styled.img`
height: 30px;
width: 30px;
`
const LogoText = styled.div`
font-size: 25px;
font-weight: 700;
`
const NavWrapper = styled.div`
// background-color: yellow;
height: 50px;
width: 200px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`
const LogoWrapper = styled.div`
// background-color: red;
height: 50px;
width: 170px;
display: flex;
align-items: center;
justify-content: space-around;
color: black;
`
const Wrapper = styled.div`
// background-color: blue;
height: 50px;
width: 95%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container =styled.div`
// background-color: crimson;
height: 50px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 20px 0px 20px 0px;
color: white;
`