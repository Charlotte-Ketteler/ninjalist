
import Link from "next/link";
import styled from "styled-components";

const ButtonSeeNinjaListing = () => {
    return (  
        <button> <StyledLink href="/ninjas">
        See Ninja Listing</StyledLink> </button>

    );
}
 
export default ButtonSeeNinjaListing
;

const StyledLink = styled(Link)`
color: gray;
text-decoration: none; 
margin-left: 30px; 
`;