import Link from "next/link";
import styled from "styled-components";
const Navbar = () => {
    return ( 
        
        <nav>
            <div className="logo">
                <H1><h1>Ninja List</h1></H1>

            </div>
            <Navigation>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
            <StyledLink href="/ninjas">Ninja Listing</StyledLink>
            </Navigation>
        </nav>
        
     );
}
 
export default Navbar;

const Navigation = styled.li`
display: flex; 
align-items: flex-end; 
justify-content: flex-end;
margin-right: 30px;

`;

const StyledLink = styled(Link)`
color: black; 
text-decoration: none; 
margin 10px; 
`;

const H1 = styled.h1`
margin-left: 30px; 
font-size: 15px; 
`;