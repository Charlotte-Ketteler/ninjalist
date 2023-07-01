import styled from "styled-components";

const Footer
 = () => {
    return (  
        <div>
          <FooterStyle>Copyright 2023 Charlotte Ketteler</FooterStyle> 
        </div>
    );
}
 
export default Footer
;

const FooterStyle = styled.li`
list-style-type: none; 
margin-top: 40px; 
margin-left: 30px; 
`;