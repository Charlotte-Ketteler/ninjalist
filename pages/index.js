
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
    <Head>
    <title>Ninja List | Home</title>
    <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
     <H1> Homepage</H1>
 <Line/>
      <MainPart>
      <PTag>Aliqua aute laborum pariatur velit officia quis ex commodo aute officia. Ex commodo officia dolore quis irure voluptate fugiat adipisicing veniam do in eu ex voluptate. Occaecat minim id laboris esse sunt Lorem eiusmod laboris occaecat qui nisi cillum dolor. Occaecat quis voluptate qui do nostrud veniam mollit sint deserunt non dolor deserunt reprehenderit aliqua. Et deserunt Lorem sit pariatur nostrud ipsum pariatur nostrud adipisicing eiusmod ad anim.</PTag>
      <PTag>
     Aliqua aute laborum pariatur velit officia quis ex commodo aute officia. Ex commodo officia dolore quis irure voluptate fugiat adipisicing veniam do in eu ex voluptate. Occaecat minim id laboris esse sunt Lorem eiusmod laboris occaecat qui nisi cillum dolor. Occaecat quis voluptate qui do nostrud veniam mollit sint deserunt non dolor deserunt reprehenderit aliqua. Et deserunt Lorem sit pariatur nostrud ipsum pariatur nostrud adipisicing eiusmod ad anim.
      </PTag>
      </MainPart>
      <Line/>
    <ButtonStyle><StyledLink href="/ninjas">
    See Ninja Listing</StyledLink></ButtonStyle>
    
    </div>
    </>
  );
}


const MainPart = styled.li`

width: 100%;
height: 300px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center
margin-left: 50px; 
margin-right:50px;
text-align: left;
`;

const PTag = styled.p`
margin-left: 30px;
margin-right: 30px;
list-style-type: none; 
`;

const StyledLink = styled(Link)`
color: gray;
text-decoration: none; 
margin-left: 30px; 
margin: 3px; 
`;

const Line = styled.hr`
color: black;
margin: 30px; 
`;

const H1 = styled.h1`
margin-left: 30px;
font-size: 20px; 
`;

const ButtonStyle = styled.button`
background-color: lavender; 
border-radius: 5px; 
margin-left: 30px; 
display: flex; 

`;