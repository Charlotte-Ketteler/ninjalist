import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {
    const router = useRouter();
    
    useEffect(()=>{
setTimeout(() => {
router.push("/");
}, 3000)
    },[])
    
    
    return ( 
        <div>
    <H1>Oooops...</H1>
    <PTag>Go back to the <StyledLink href="/">Homepage</StyledLink></PTag>
        </div>
     );
}
 
export default NotFound;

const H1 = styled.h1`
margin-left: 30px;
font-size: 20px; 
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
