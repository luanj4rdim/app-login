const usuarios = [
    {
        id:  1,
        nome: 'luan',
        email: 'luan@gmail.com',
        senha: '123456', 
        expirado: false
    },
    {   id: 2,
        nome: 'Tais',
        email: 'Taissilva@hotmail.com',
        senha: '654321',
        expirado: false
    },
    {   id: 3,
        nome: 'Bruna',
        email: 'bruna.gomes@gmail.com',
        senha: '123654',
        expirado: true
    }
];

export function realizarLogin(email, senha) {
    // Laço
    let usuarioEncontrado = null
        usuarios.forEach(function(usuario){
    
        if(usuario.email === email)
            usuarioEncontrado = usuario;
        
        });
        if(usuarioEncontrado == null)
            return 'Usuário não encontrado.';
        if (usuarioEncontrado.email !== email) {
            return 'Usuário não encontrado.';
        }
         if (usuarioEncontrado.senha !== senha ) {
            return 'Senha incorreta para o usuario encontrado.';
        }
         if (usuarioEncontrado.expirado) {
            return 'Credenciais Expiradas: Renove por favor.';
        }

    return 'Logado com sucesso.';
}

/*
// Preciso de uma função capaz de receber duas entradas: Email e Senha e validar o login 
// Ela deverá navegar em um lista pre-existente, com usuários dentro de um vetor contendo  id, nome, email, senha e expirado (boleano, pode ser true ou false);
// retornar o texto “Logado com sucesso.” caso exista um usuário com login 
// e senha iguais aos informados. Caso não exista um usuário com login e 
// senha informados, uma mensagem dizendo “Usuário não encontrado.” 
// deverá ser exibida. 
// Caso a senha nao seja correta retornar: Senha incorreta para o usuário encontrado.
// e caso o usuario tenha no campo expirado true retornar Credencial expirada;


    1. Entradas (O que é informado)
    - Login
    - Senha

    2. Regras (Regras quanto ao que foi informado, não são regras de negócio)
    - Login e Senha são alfanuméricos

    3. Processamento (Como o computador deve tomar decisões)
    - Se ao percorrer a lista, encontrar um usuário com login e senha iguais aos informados retornar "Logado com sucesso."
    - Se nenhum usuário corresponder após percorrer toda a lista retornar "Usuário não encontrado."

    4. Saídas (O que o computador deve trazer como resposta)
    - "Logado com sucesso." ,"Usuário não encontrado.", " Credencial expirada", "Senha incorreta para o usuário encontrado.
"
*/ 