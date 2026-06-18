/**
 * auth.js
 * Funções para gerenciar o login, logout e proteção de rotas através da sessão.
 * Depende de database.js (precisa ser incluído antes no HTML).
 */

const SESSION_KEY = 'pr_sessao';

const Auth = {
    // Salvar sessão
    iniciarSessao(tipo, usuario) {
        const sessao = {
            tipo: tipo, // 'voluntario' ou 'ong'
            id: usuario.id,
            nome: usuario.nome || usuario.responsavel,
            email: usuario.email
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(sessao));
        return sessao;
    },

    // Ler sessão atual
    obterSessao() {
        return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    },

    // Destruir sessão
    sair() {
        localStorage.removeItem(SESSION_KEY);
        window.location.href = "cadastro.html";
    },

    // Verifica login do voluntário
    loginVoluntario(email, senha) {
        const voluntario = Database.obterVoluntarioPorEmail(email);
        if (voluntario && voluntario.senha === senha) {
            this.iniciarSessao('voluntario', voluntario);
            return true;
        }
        return false;
    },

    // Verifica login da ong
    loginOng(login, senha) {
        const ong = Database.obterOngPorEmailOuCnpj(login);
        if (ong && ong.senha === senha) {
            this.iniciarSessao('ong', ong);
            return true;
        }
        return false;
    },

    // Redirecionamentos e Proteção de Rotas
    protegerRota() {
        const sessao = this.obterSessao();
        if (!sessao) {
            window.location.href = "cadastro.html";
            return null;
        }
        return sessao;
    },

    redirecionarSeLogado() {
        const sessao = this.obterSessao();
        if (sessao) {
            if (sessao.tipo === 'voluntario') {
                window.location.href = "painel-Voluntario.html";
            } else if (sessao.tipo === 'ong') {
                window.location.href = "painel-Instituicao.html";
            }
        }
    }
};
