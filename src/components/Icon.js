import styled from 'styled-components'

const Img = styled.div`
margin-top:50px;
img{
    height:50px;
    background-image:red;
}

`
function Icon() {
    return (
        <Img>
            <img src="https://img.icons8.com/ios/50/4a90e2/github--v1.png"/>
            <img src="https://img.icons8.com/bubbles/54/4a90e2/linkedin.png"/> 
        </Img>
    )
}
export default Icon