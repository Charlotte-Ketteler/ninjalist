import styled from "styled-components";

const Ninjas = () => {
    return ( 
<div>
    <H1>All Ninjas</H1>
    <Line/>
</div>
     );
}
 
export default Ninjas;

const H1 = styled.h1`
margin-left: 30px;
font-size: 20px; 
`;

const Line = styled.hr`
color: black;
margin: 30px; 
`;
