import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Navbar = () => {
    return ( 
        
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={77}/>
               

            </div>
            <Navigation>
            <StyledLink href="/">Home</StyledLink >
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

