// import react from 'react';
// import { video } from '../Assets/vid.mp4'
import { styled } from 'styled-components';
import Bttn from '../Static/Buttn';
import { BsSearch } from 'react-icons/bs';

const Hero = () => {
    return(
        <div>
            <Container>
            {/* <Video src = {video} autoPlay playsInline loop muted/> */}
            <Cover>
                <NavHolder>
                    <Bttn/>
                    <Bttn/>
                    <Bttn/>
                    <Bttn/>
                    <Bttn/>
                    <Bttn/>
                    <Bttn/>
                    <Bttn/>
                    <Bttn/>
                    <Bttn/>
                    
                </NavHolder>
                <Text><h1>Explore the world's leading<br></br> Book sand Autors</h1>
                <p style={{ marginBottom: '20px'}}>Millions of designers and agencies around the world showcase their portfolio <br></br>work on Dribbble the home to the world's best design and creative professionals.</p>
                </Text>
                <InputHolder>
                <BsSearch style={{fontSize: '20px' ,color:'black', marginLeft: '10px'}}/>
                <input placeholder='Search By Author' ></input>
                </InputHolder>
            </Cover>
            </Container>
        </div>
    )
}

export default Hero;

const InputHolder  = styled.div`
width: 400px;
height: 40px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
gap: 10px;
border-radius: 20px;
input{
    width: 200px;
    height: 30px;
    border-radius: 20px;
    border: none;
    color: grey;
    font-size: 15px;
    flex: 1;
}
`
const Text  = styled.div`
width: 800px;
height: 100px;
// background-color: yellow;
margin-bottom: 50px ;
text-align: center;
color: white;
h1{

}
`
const NavHolder  = styled.div`
width: 999px;
height: 70px;
margin: 50px 0px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
`
const Cover  = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0 , 0 , 0.7);
/* @media screen and (max-width: 602px){
    flex-wrap: wrap;
   display: flex;
   align-items: center;
   justify-content: center;
} */

position: absolute;
top: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
// const Video  = styled.video`
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// object-fit: cover;
// `
const Container  = styled.div`
width: 100%;
height: 80vh;
background-color: red;
position: relative;

`