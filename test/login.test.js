import { realizarLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes do Módulo de Login', () => {
    describe('Testes da Função realizarLogin', () => {
        it('Deve retornar "Logado com sucesso." quando o usuário com login e senha fornecida for encontrado', function() {
            // Act
            const resultado = realizarLogin('julio.lima', '123456');

            // Assert
            assert.equal(resultado, 'Logado com sucesso.');
        });

        it('Deve retornar "Usuário não encontrado." quando o usuário com login e senha fornecida não for encontrado', function() {
            // Act
            const resultado = realizarLogin('jose.alves', '654321');

            // Assert
            assert.equal(resultado, 'Usuário não encontrado.');
        });

        it('Deve retornar "Usuário não encontrado." quando o usuário com login válido e senha fornecida foi inválida', function() {
            // Act
            const resultado = realizarLogin('julio.lima', '654321');

            // Assert
            assert.equal(resultado, 'Usuário não encontrado.');
        });
    });
});