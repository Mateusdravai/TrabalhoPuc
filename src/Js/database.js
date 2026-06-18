/**
 * database.js
 * Funções para gerenciar dados no localStorage, simulando um banco de dados.
 */

const DB_KEYS = {
    VOLUNTARIOS: 'pr_voluntarios',
    ONGS: 'pr_ongs',
    PROJETOS: 'pr_projetos',
    CANDIDATURAS: 'pr_candidaturas'
};

const Database = {
    // Utilitários genéricos
    _ler(key) {
        return JSON.parse(localStorage.getItem(key) || '[]');
    },
    
    _salvar(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    _gerarId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    // --- Voluntários ---
    obterVoluntarios() {
        return this._ler(DB_KEYS.VOLUNTARIOS);
    },
    
    salvarVoluntario(voluntario) {
        const voluntarios = this.obterVoluntarios();
        if (voluntario.id) {
            const index = voluntarios.findIndex(v => v.id === voluntario.id);
            if (index !== -1) voluntarios[index] = voluntario;
            else voluntarios.push(voluntario);
        } else {
            voluntario.id = this._gerarId();
            voluntarios.push(voluntario);
        }
        this._salvar(DB_KEYS.VOLUNTARIOS, voluntarios);
        return voluntario;
    },

    obterVoluntarioPorEmail(email) {
        return this.obterVoluntarios().find(v => v.email === email);
    },

    // --- ONGs ---
    obterOngs() {
        return this._ler(DB_KEYS.ONGS);
    },
    
    salvarOng(ong) {
        const ongs = this.obterOngs();
        if (ong.id) {
            const index = ongs.findIndex(o => o.id === ong.id);
            if (index !== -1) ongs[index] = ong;
            else ongs.push(ong);
        } else {
            ong.id = this._gerarId();
            ongs.push(ong);
        }
        this._salvar(DB_KEYS.ONGS, ongs);
        return ong;
    },

    obterOngPorEmailOuCnpj(login) {
        return this.obterOngs().find(o => o.email === login || o.cnpj === login);
    },
    
    obterOngPorId(id) {
        return this.obterOngs().find(o => o.id === id);
    },

    // --- Projetos ---
    obterProjetos() {
        return this._ler(DB_KEYS.PROJETOS);
    },
    
    salvarProjeto(projeto) {
        const projetos = this.obterProjetos();
        if (projeto.id) {
            const index = projetos.findIndex(p => p.id === projeto.id);
            if (index !== -1) projetos[index] = projeto;
            else projetos.push(projeto);
        } else {
            projeto.id = this._gerarId();
            projeto.dataCriacao = projeto.dataCriacao || new Date().toISOString();
            projeto.status = projeto.status || 'ativo';
            projetos.push(projeto);
        }
        this._salvar(DB_KEYS.PROJETOS, projetos);
        return projeto;
    },

    obterProjetosPorOng(id_ong) {
        return this.obterProjetos().filter(p => p.id_ong === id_ong);
    },
    
    obterProjetoPorId(id) {
        return this.obterProjetos().find(p => p.id === id);
    },

    excluirProjeto(id) {
        const projetos = this.obterProjetos().filter(p => p.id !== id);
        this._salvar(DB_KEYS.PROJETOS, projetos);
        // Limpar candidaturas vinculadas ao projeto excluído
        const candidaturas = this.obterCandidaturas().filter(c => c.id_projeto !== id);
        this._salvar(DB_KEYS.CANDIDATURAS, candidaturas);
    },

    // --- Candidaturas ---
    obterCandidaturas() {
        return this._ler(DB_KEYS.CANDIDATURAS);
    },
    
    salvarCandidatura(candidatura) {
        const candidaturas = this.obterCandidaturas();
        
        // Evitar duplicidade
        const existe = candidaturas.find(c => c.id_projeto === candidatura.id_projeto && c.id_voluntario === candidatura.id_voluntario);
        if (existe) return existe;

        if (candidatura.id) {
            const index = candidaturas.findIndex(c => c.id === candidatura.id);
            if (index !== -1) candidaturas[index] = candidatura;
            else candidaturas.push(candidatura);
        } else {
            candidatura.id = this._gerarId();
            candidatura.data = new Date().toISOString();
            candidatura.status = 'pendente';
            candidaturas.push(candidatura);
        }
        
        this._salvar(DB_KEYS.CANDIDATURAS, candidaturas);
        return candidatura;
    },

    obterCandidaturasPorVoluntario(id_voluntario) {
        return this.obterCandidaturas().filter(c => c.id_voluntario === id_voluntario);
    },

    obterCandidaturasPorOng(id_ong) {
        // Encontra todas as candidaturas feitas para projetos que pertencem a esta ONG
        const projetosOng = this.obterProjetosPorOng(id_ong).map(p => p.id);
        return this.obterCandidaturas().filter(c => projetosOng.includes(c.id_projeto));
    },

    // Inicialização com dados falsos para demonstração, caso o banco esteja vazio
    inicializarMockData() {
        if (this.obterOngs().length === 0) {
            const ong = this.salvarOng({
                nome: "Instituto Verde Vida",
                cnpj: "11.111.111/0001-11",
                causa: "sustentabilidade",
                responsavel: "Maria Silva",
                email: "contato@verdevida.org.br",
                localizacao: "São Paulo, SP",
                senha: "123" // Inseguro, apenas para mock
            });

            const ong2 = this.salvarOng({
                nome: "ONG Letras Vivas",
                cnpj: "22.222.222/0001-22",
                causa: "alfabetizacao",
                responsavel: "João Paulo",
                email: "contato@letrasvivas.org.br",
                localizacao: "Campinas, SP",
                senha: "123"
            });

            this.salvarProjeto({
                id_ong: ong.id,
                titulo: "Horta Comunitária Vila Nova",
                causa: "sustentabilidade",
                descricao: "Apoie a estruturação e manutenção de canteiros de hortaliças orgânicas para famílias de baixa renda da comunidade.",
                perfil: "Gostar de trabalho manual, proatividade",
                localizacao: "São Paulo, SP",
                vagas: 5,
                email: ong.email,
                telefone: "(11) 5688-4411",
                status: "ativo"
            });

            this.salvarProjeto({
                id_ong: ong2.id,
                titulo: "Leitura para Todos",
                causa: "alfabetizacao",
                descricao: "Ajude jovens e adultos a darem os primeiros passos na leitura e na escrita através de dinâmicas divertidas de tutoria.",
                perfil: "Ensino e Tutoria, Boa Comunicação",
                localizacao: "Campinas, SP",
                vagas: 3,
                email: ong2.email,
                telefone: "(19) 3256-4899",
                status: "ativo"
            });
        }
    }
};

// Chamar na carga do arquivo para garantir que existem dados de demonstração
Database.inicializarMockData();
