import styled from "styled-components"

const App = ()  => {

  const SignWithGoogle = () => {
    window.open('' , '_self')
  }

  return (
    <Container>
      <GoogleButton onClick={SignWithGoogle}>
        <img src="google-icon.png" alt="google icon" />
        Google
      </GoogleButton>
    </Container>
  )
}

export default App;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to right , #13aeec , #d108f0);
  display: flex;
  align-items: center;
  justify-content: center;
`;


const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #13bdf1;
  width: 200px;
  overflow: hidden;
  font-size: 1.2rem;
  letter-spacing: 1px;
  cursor: pointer;

  img{
    height: 40px;
  }
`;