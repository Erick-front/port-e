# Portfólio pessoal — Erick

Site de portfólio pessoal desenvolvido como projeto acadêmico de Desenvolvimento Web. O site apresenta informações sobre a trajetória, os interesses e as experiências de Erick em cinco páginas.

## Páginas

- **Inicial (`index.html`)** — apresentação e atalhos para as demais seções.
- **Esportes (`esportes.html`)** — trajetória no vôlei, equipes, treinamentos e conquistas.
- **Música (`musica.html`)** — experiência com bateria, influências e playlist do Spotify.
- **TI (`ti.html`)** — cursos, serviços de hardware, projetos e configuração do computador.
- **Sobre mim (`sobre.html`)** — linha do tempo, família, amigos, paixões e valores.

## Recursos

- Layout responsivo com Bootstrap.
- Navegação entre as páginas e indicação da página atual.
- Animações de entrada ao rolar a página e transições entre páginas.
- Galeria de imagens com visualização ampliada (lightbox).
- Linha do tempo interativa e botão para voltar ao topo.
- Favicon compartilhado entre as páginas.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3

O Bootstrap e as fontes do Google Fonts são carregados por CDN. A página de música incorpora uma playlist do Spotify. Esses recursos externos precisam de conexão com a internet.

## Como executar

Não é necessário instalar dependências ou compilar o projeto. Abra `index.html` em um navegador. Para desenvolvimento, também é possível abrir a pasta do projeto no VS Code e iniciar um servidor local, por exemplo, com a extensão Live Server.

## Estrutura

```text
.
├── assets/
│   └── images/       # Fotografias e favicon
├── css/
│   └── style.css     # Estilos compartilhados
├── js/
│   └── script.js     # Interações do site
├── index.html
├── esportes.html
├── musica.html
├── sobre.html
└── ti.html
```
