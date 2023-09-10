import { styled } from "styled-components";
import Header from "../Static/Header";
import pix from '../Assets/pic3.png'

function Upload() {
    return (
        <div>
            <Header />
            <Container>
                <Wrapper>
                    <Holder>
                        <Profile>
                            <Pic src={pix} alt="pic" />
                            <Btn>Upload Cover Image</Btn>
                        </Profile>
                        <InputsHolder>
                        <input placeholder="Enter Title"></input>
                        <input placeholder="Summary..."></input>
                        <input placeholder="Enter Author's Name"></input>
                        <input placeholder="select a category"></input>
                        <Btn2>Submit</Btn2>
                        </InputsHolder>
                    </Holder>
                </Wrapper>
            </Container>
        </div>
    );
}

export default Upload;

const InputsHolder = styled.div`
width: 100%;
height: 240px;
// background-color: red;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
input{
    width: 300px;
    height: 30px;
border: 1px solid silver;
}
`
const Btn2 = styled.button`
// width: 190px;
// height: 190px;
border-radius: 10px;
padding: 10px 20px;
border: none;
color: white;
background-color: lightgrey;
`
const Btn = styled.button`
width: 190px;
height: 190px;
border-radius: 15px;
padding: 10px 10px;
border: none;
background-color: #000000;
color: white;
font-size: 17px;
;
&:hover{
    transition: all 350ms ease 0s;
    cursor: pointer;
}
`
const Pic = styled.img`
width: 250px;
height:200px;
border: 1px solid silver;
`
const Profile = styled.div`
width: 100%;
height: 240px;
// background-color: green;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
`
const Holder = styled.div`
width: 700px;
height: 500px;
background-color: white;
border: 1px solid silver;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
`
const Wrapper = styled.div`
width: 95%;
height: 500px; 
// background-color: blue;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`
const Container = styled.div`
width: 100%;
height: 80vh; 
// background-color: grey;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`