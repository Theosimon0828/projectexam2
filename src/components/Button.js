import styled from "styled-components";

const Button = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: var(--lightGreen)   ;
    border: 0.2rem solid var(--lightGreen);
    color:white;
    border-radius: 5rem;
    border-color:${props => (props.cart ? "var(--mainYellow)" : "var(--lightGreen)")};
    // color:${props => (props.cart ? "var(--mainYellow)" : "var(--lightGreen)")};
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:green;
        color:var(--mainWhite);
        border-color:green;

    }
    &:focus{
        outline:none;

    }
`;

export default Button;