import { realizarLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes do Módulo de Login', () => {
    describe('Testes da Função realizarLogin', () => {
        it('1-Deve retornar "Logado com sucesso." quando o usuário com login e senha fornecida for encontrado', function() {
            // Act
            const resultado = realizarLogin('luan@gmail.com', '123456');

            // Assert
            assert.equal(resultado, 'Logado com sucesso.');
            
        });
        it('2-Deve retornar " Credencial expirada." quando o usuário estiver com True no campo credencial expirada', function() {
            // Act
       
            const resultado = realizarLogin('bruna.gomes@gmail.com', '123654');

            // Assert
            assert.equal(resultado, 'Credenciais Expiradas: Renove por favor.');
           
        });

        it('3-Deve retornar "Usuário não encontrado." quando o usuário com EMAIL e senha fornecida não for encontrado', function() {
            // Act
            const resultado = realizarLogin('jose.alves', '654321');

            // Assert
            assert.equal(resultado, 'Usuário não encontrado.');
             
        });
          it('4- Deve retornar " Senha incorreta para o usuário encontrado." quando o usuário com EMAIL correto e senha incorreta for encontrada', function() {
            // Act
            const resultado = realizarLogin('Taissilva@hotmail.com', '654311');

            // Assert
            assert.equal(resultado, 'Senha incorreta para o usuario encontrado.');
            
        });
          


        
        
    });
});