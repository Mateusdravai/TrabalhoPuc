## Template padrão do site

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

### Design

O layout do Projeto Resgate segue uma estrutura padrão composta por:

![Layout Padrão](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/layout-padrao-projeto-resgate.jpg)

- **Header:** contém o logotipo do sistema no canto superior esquerdo, barra de busca central, ícones de notificação e mensagens, e o perfil do usuário no canto superior direito.
- **Menu lateral (sidebar):** presente nas telas internas, com links de navegação para Início, Explorar Projetos, Meus Projetos, Meu Perfil, Mensagens, Notificações e Configurações.
- **Área de conteúdo principal:** ocupa o restante da tela e varia conforme a página acessada.
- **Logo:** posicionado no canto superior esquerdo em todas as páginas, composto pelo ícone de duas mãos entrelaçadas seguido do texto "Projeto Resgate".

O layout é responsivo e se adapta a navegadores, smartphones e tablets.

---

### Cores

A paleta de cores do Projeto Resgate transmite confiança, acolhimento e ação social:

| Cor | Hex | Uso |
|---|---|---|
| Azul principal | `#1A56DB` | Botões primários, links, destaques |
| Azul escuro | `#1E3A5F` | Header, sidebar ativa |
| Verde | `#057A55` | Status "Em andamento", tags positivas |
| Laranja | `#FF8C00` | Status "Aguardando início", alertas |
| Vermelho | `#E02424` | Status "Recusado", ações destrutivas |
| Cinza claro | `#F9FAFB` | Fundo das páginas |
| Cinza médio | `#6B7280` | Textos secundários |
| Branco | `#FFFFFF` | Cards, modais, formulários |

---

### Tipografia

A fonte utilizada no projeto é a **Inter**, disponível no Google Fonts, por ser moderna, legível e amplamente utilizada em interfaces digitais.

 Título de Página: 
h1 {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #1E3A5F;
}

 Título de Seção: 
h2 {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600; 
  color: #1E3A5F;
}

   Textos UI: 
label, .rotulo {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1E3A5F;
}

 Corpo de Texto: 
p, body {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;  
  color: #1E3A5F;
}

 Texto Secundário: 
 .texto-secundario, span, small {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400; 
  color: #6B7280;
}

---

### Iconografia

Os ícones utilizados no Projeto Resgate são do conjunto **Font Awesome**, mantendo consistência visual em toda a interface:

| Ícone | Nome do Arquivo | Função |
|---|---|---|
| ![Início](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/house-regular.png) | house-regular.png | Início / Home |
| ![Buscar](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/magnifying-glass-solid.png) | magnifying-glass-solid.png | Buscar Projetos |
| ![Perfil Voluntário](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/user-regular.png) | user-regular.png | Meu Perfil / Voluntário |
| ![Instituição](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/user-tie-solid.png) | user-tie-solid.png | Perfil Instituição |
| ![Mensagens](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/envelope-regular.png) | envelope-regular.png | Mensagens |
| ![Notificações](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/bell-regular.png) | bell-regular.png | Notificações |
| ![Configurações](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/gear-solid.png) | gear-solid.png | Configurações |
| ![Aprovar](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/circle-check-regular.png) | circle-check-regular.png | Aprovar Candidato |
| ![Recusar](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/circle-xmark-regular.png) | circle-xmark-regular.png | Recusar Candidato |
| ![Logo](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/icei-puc-minas-pmv-si-2026-1-pe1-t4-grupotres/main/docs/img/Icons/hand-holding-hand-solid.png) | hand-holding-hand-solid.png | Logo / Identidade Visual
