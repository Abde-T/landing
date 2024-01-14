import React from 'react';
import Container from './Container';
import Nav from './Nav';


function Landing({toggleTheme, theme}) {
    return (
        <>
           <Nav theme ={theme} toggleTheme={toggleTheme} />
           <Container/>
        </>
    );
}

export default Landing;