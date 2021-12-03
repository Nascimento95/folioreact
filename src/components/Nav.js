import styled from 'styled-components'

const Container = styled.div` 
  width: 100%;
  color:white;
  display:flex;
  list-style-type: none;
  justify-content: end;
  padding-right : 20px;
  li{
    padding-top :20px;
    padding-right : 20px;
  }
`;
const Button = styled.button`
  border : 2px white solid;
  color:white;
  border-radius: 30px;
  margin-top :30px;
  margin-right : 20px;
  background-color:rgb(226, 152, 4) ;
`

function Nav() {
    return (
        <Container>
            <Button>About-me</Button>
            <Button>My-works</Button>
            <Button>Contact</Button>
        </Container>
    )
}
export default Nav
