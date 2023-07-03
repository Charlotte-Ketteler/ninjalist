import styled from "styled-components";

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
        <div key={ninjas.id}>
            <a>
                <h3>{ninjas.name}</h3>
            </a>
    </div>
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
