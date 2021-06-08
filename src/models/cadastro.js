function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 dígitos" }
    } else {
        return { valido: true, texto: "" }
    }
}

function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, texto: "O campo deve ter no mínimo 4 caracteres e no máximo 72" }
    } else {
        return { valido: true, texto: "" }
    }
}

export {validarCPF, validarSenha};