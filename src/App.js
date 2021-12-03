
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import Icon from './components/Icon';
import Nav from './components/Nav';
import Project from './components/Project';

const Container = styled.div` 
  width: 100%;
  
`;

const ContainerTitle = styled.div`
  margin-top:50px;
  @import url('https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap');
  font-family: 'Ceviche One', cursive;
  height: 100vh;
 h1{
  color:white;
  text-align:center;
  ;
}
h2{
  padding-left:60%;
  color:white;

}
p{
  color:rgb(226, 152, 4) ;
  font-size:3em;
  text-align:center;
}
 `
 const White =styled.div`
  background-color:white;
  margin-top:30px;
  height:5px;
 `

function App() {
  return (
    <Container className="bg-dark">
      <Nav />
      <Zoom>
      <White></White>
      </Zoom>
      
      <ContainerTitle>
        <h1>Nascimento Pereira </h1>
        <h2>Marco Paulo</h2>
        <p>Développeur web junior fullstack js </p>
        <Icon />
      </ContainerTitle>
      
      <Zoom>
      <Project />
      </Zoom>
    </Container>
  );
}

export default App;
