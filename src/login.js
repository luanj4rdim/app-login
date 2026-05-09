const usuarios = [
    {
        nome: 'Julio',
        login: 'julio.lima',
        senha: '123456'
    },
    {
        nome: 'Wedney',
        login: 'wedney.silva',
        senha: '654321'
    },
    {
        nome: 'Bruna',
        login: 'bruna.gomes',
        senha: '123654'
    }
];

// Preciso de uma função capaz de receber duas entradas: Login e Senha. 
// Ela deverá navegar em um lista pre-existente, com 3 usuários e então 
// retornar o texto “Logado com sucesso.” caso exista um usuário com login 
// e senha iguais aos informados. Caso não exista um usuário com login e 
// senha informados, uma mensagem dizendo “Usuário não encontrado.” 
// deverá ser exibida. 

/*
    1. Entradas (O que é informado)
    - Login
    - Senha

    2. Regras (Regras quanto ao que foi informado, não são regras de negócio)
    - Login e Senha são alfanuméricos

    3. Processamento (Como o computador deve tomar decisões)
    - Se ao percorrer a lista, encontrar um usuário com login e senha iguais aos informados retornar "Logado com sucesso."
    - Se nenhum usuário corresponder após percorrer toda a lista retornar "Usuário não encontrado."

    4. Saídas (O que o computador deve trazer como resposta)
    - "Logado com sucesso." ou "Usuário não encontrado."
*/ 

export function realizarLogin(login, senha) {
    // Laço
    for (let usuario of usuarios) {
        if (usuario.login == login && usuario.senha == senha) {
            return 'Logado com sucesso.';
        }
    }

    return 'Usuário não encontrado.';
}