import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ cep, endereco, numero, estado, cidade });
        }
        }>
            <TextField
                value={cep}
                onChange={event => {
                    setCep(event.target.value);
                }}
                name="cep"
                type="number"
                id="cep"
                label="CEP"
                variant="outlined"
                margin="normal"
                required

            />

            <TextField
                value={endereco}
                onChange={event => {
                    setEndereco(event.target.value);
                }}
                name="endereco"
                type="text"
                id="endereco"
                label="Endereço"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />

            <TextField
                value={numero}
                onChange={event => {
                    setNumero(event.target.value);
                }}
                name="numero"
                type="number"
                id="numero"
                label="Número"
                variant="outlined"
                margin="normal"
                required
            />

            <TextField
                value={estado}
                onChange={event => {
                    setEstado(event.target.value);
                }}
                name="estado"
                type="text"
                id="estado"
                label="Estado"
                variant="outlined"
                margin="normal"
                required
            />

            <TextField
                value={cidade}
                onChange={event => {
                    setCidade(event.target.value);
                }}
                name="cidade"
                type="text"
                id="cidade"
                label="Cidade"
                variant="outlined"
                margin="normal"
                required
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar cadastro</Button>
        </form>
    )
}

export default DadosEntrega;