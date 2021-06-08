import React, {useState} from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validacoes}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf: {valido:true, texto:""}});

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

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default DadosPessoais;