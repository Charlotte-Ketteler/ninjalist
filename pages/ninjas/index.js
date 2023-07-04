import styled from "styled-components";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props : {ninjas: data}
    }
}

const Ninjas = ({ninjas}) => { // oder (props.ninjas)
    return ( 
<div>
    <H1>All Ninjas</H1>
    {ninjas.map(ninjas => (
        <Link href={'/ninjas/' + ninjas.id} key={ninjas.id}>
           <List> 
                <h3>{ninjas.name}</h3>
           
            </List>
    </Link>
    ))}
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

const List = styled.li`
background-color: #EAEAEA;
list-style: none;
height: 70px;
width: 90%;
display: flex;
margin: 10px; 
justify-content: center; 
`;