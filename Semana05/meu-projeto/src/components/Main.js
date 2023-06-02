import React from "react";
import Button from './Button.js'
function Main() {
    document.title = 'Meu Projeto';
    const username = 'Rai';

    return (
        <React.Fragment>
        <div className="Main">
            <Button prop1='Pesquisa Google' prop2='Google search'/>
            <Button prop1='Estou com sorte' prop2='Im Lucky'/>
            <h1>Hello World</h1>
            <h2>Bem-vindo, {username}</h2>



        </div>
        </React.Fragment>
    );
}

export default Main;


