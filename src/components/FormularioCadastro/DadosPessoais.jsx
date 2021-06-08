import React, {useState, useContext} from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
            }
            }}
        >

            <TextField 
            value={nome}
            onChange={(event) => {
                setNome(event.target.value);
            }}
            name="nome"
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            id="nome" 
            label="Nome" 
            variant="outlined" 
            margin="normal" 
            fullWidth 
            required
            />

            <TextField
            required
            value={sobrenome}
            onChange={(event) => {
                setSobrenome(event.target.value)
            }}
            name="sobrenome"
            onBlur={validarCampos}
            error={!erros.sobrenome.valido}
            helperText={erros.sobrenome.texto}
            id="sobrenome" 
            label="Sobrenome" 
            variant="outlined" 
            margin="normal" 
            fullWidth 
            />

            <TextField 
            value={cpf}
            onChange={(event) => {
                setCpf(event.target.value);
            }}
            name="cpf"
            id="cpf" 
            label="CPF" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            required
            />

            <FormControlLabel 
            label="promoções" 
            control={<Switch 
                        onChange={event => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes" 
                        checked={promocoes} 
                        color="primary" />} />

            <FormControlLabel 
            label="novidades" 
            control={<Switch 
                        onChange={event => {
                            setNovidades(event.target.checked);
                        }}
                        name="novidades"
                        checked={novidades}
                        color="primary" />} />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}

export default DadosPessoais;