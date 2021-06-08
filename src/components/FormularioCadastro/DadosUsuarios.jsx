import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

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
            type="submit">Próximo</Button>
        </form>
    )
}

export default DadosUsuario;