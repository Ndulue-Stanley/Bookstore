import { styled } from "styled-components";

const Bttn = () =>{
    return(
        <div>
            <Container>
            <Btttn text="Comedy">
            Comedy
            </Btttn>
            </Container>
        </div>
    )
}

export default Bttn;

const Container = styled.div`
// width: 100%;
// height: 200px;
// background-color: red;
`
const Btttn = styled.div<{text: string}>`
padding: 10px 10px;
height: 20px;
width: 70px;
border-radius: 20px;
color: white;
background-color: grey;
display: flex;
justify-content: center;
align-items: center;
`