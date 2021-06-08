import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({aoEnviar, validacoes}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({senha: {valido: true, texto: ""}})

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido) return false;
        }

        return true;
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField
                value={email}
                onChange={event => {
                    setEmail(event.target.value);
                }}
                name="email"
                type="email"
                id="email"
                label="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />

            <TextField
                value={senha}
                onChange={event => {
                    setSenha(event.target.value);
                }}
                name="senha"
                type="password"
                id="senha"
                label="senha"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                //validação
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
            /> 

            <Button 
            variant="contained"
            color="primary"
            type="submit">Cadastrar</Button>
        </form>
    )
}

export default DadosUsuario;