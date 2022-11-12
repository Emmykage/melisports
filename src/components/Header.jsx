import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
const Container = styled.div`
height: 60px;
 `

 const Wrapper = styled.div`
 padding: 0px 0px;
 display: flex;
 justify-content: space-between
 justify-content: center;
 `

 const Left = styled.div`
 flex: 1; 
 display: flex;
 align-items: center
 `
 const Right = styled.div`
 flex: 1; 
 `
 const Center = styled.div`
 flex: 1; 
 text-aligned: center
 `

 const Language = styled.span`
 font-size: 14px
 cursor: pointer;
 `

 const SearchContainer = styled.div`
 border: 1px solid lightgray;
 display: flex;
 align-items: center
 margin-left: 25px;
 padding: 5px
 `
 const Input = styled.input`
 border: none
 `
 const Logo = styled.h1`
 font-weight: bold
 `
const Header = () => {
  return (
    <Container>
        <Wrapper> 
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>  <SearchIcon />
            </SearchContainer>
        </Left>
        <Right>Right</Right>
        <Center><Logo>Melisports</Logo></Center>
        
        </Wrapper>
        
    </Container>
  )
}

export default Header