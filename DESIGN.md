# Seika — Design (handoff)

Fonte da verdade: arquivo Figma **Seika V2** (`oxd78QvwXFtqORDFaXBDrl`).
Tokens exportados: [`design-tokens.json`](design-tokens.json). No código, os tokens vivem em [`src/styles/global.css`](src/styles/global.css) (tema Tailwind v4).

| Página Figma | Conteúdo |
|---|---|
| **Styleguide** | Cores (primitivas e semânticas), tipografia e tipografia por breakpoint, espaçamento, raios, breakpoints/grids, tokens de layout, comportamento por seção |
| **Componentes** | Todos os componentes, com tabela de propriedades × variantes, uso por breakpoint e interações |
| **Frames** | Landing page em Desktop (1440), Tablet (768) e Mobile (375), marcadas como *Ready for dev*, com anotações de Dev Mode |

As páginas Assets, Referencias, Protótipos e "Arquivo — explorações" não fazem parte do handoff.

---

## 1. Tokens

Coleções de variáveis no Figma:

| Coleção | Modos | Uso |
|---|---|---|
| `Color` | Default | `primitive/*` (paleta) e tokens semânticos (`bg/*`, `text/*`, `icon/*`, `border/*`, `action/*`) |
| `Spacing` | — | Todo padding e gap. Base 4: 0, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 64, 72, 80 |
| `Radius` | — | None 4, Inner 6, Element 10, Container 12, Page 28, Full 9999 |
| `Layout` | Desktop / Tablet / Mobile | Larguras e espaçamentos que mudam por breakpoint |

Regras:

- **No código, use os tokens semânticos.** As primitivas existem só como fonte dos aliases. Os estilos de cor `Primary/*` e `Secondary/*` apontam para as primitivas.
- **Opacidade é aplicada no uso, não no token.** Exemplos: `border/subtle` a 12–25%, `border/inverse` a 28–40%, tab inativa com `text/primary` a 60%. O componente no Figma tem o valor exato. Exceção: o título fechado do accordion escuro é `text/inverse` pleno; o componente no Figma tem 55%, mas todas as instâncias em Serviços sobrescrevem para 100%, e o código segue as instâncias. Mesma exceção no toggle do accordion claro (FAQ): o componente tem borda `border/subtle` a 20%, mas as instâncias fechadas usam 100%, e o código segue as instâncias.
- **Nenhum padding ou gap fora da escala `Spacing`.**

### Layout (por breakpoint)

| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| `container/width` | 1136 | 660 | 344 |
| `footer/content-width` | 1136 | 660 | 311 |
| `section/padding-y` | 80 | 64 | 48 |
| `section/gap` | 48 | 40 | 32 |

---

## 2. Breakpoints e grid

| Breakpoint | Frame | Grid | Container | Margem |
|---|---|---|---|---|
| Desktop | 1440 | 12 × 80, gutter 16 | 1136 | 152 |
| Tablet | 768 | 8 × 72, gutter 12 | 660 | 54 |
| Mobile | 375 | 4 × 80, gutter 8 | 344 | 15,5 |

**Estratégia de margem:** as seções ocupam 100% da largura e **não têm padding lateral**. O conteúdo fica num container com `container/width` fixo, centralizado; a margem é o espaço que sobra. Fundos e imagens das seções vão de ponta a ponta.

Sugestão de implementação: `max-width: var(--container-width); margin-inline: auto;`, com a variável trocando por media query. Abaixo de cada largura de referência, use `width: 100%` com uma margem mínima de 16px.

Exceções:

- **Portfólio:** a galeria começa alinhada ao container e sai pela direita da tela, com scroll horizontal.
- **CTA + footer:** o card do footer tem 16px de respiro da borda da tela no desktop e no tablet, e 8px no mobile. O conteúdo dentro do card usa `footer/content-width`; no mobile isso deixa 24px de folga interna.

---

## 3. Tipografia

Família **Inter**. Escala completa no Styleguide e em `design-tokens.json`. Os headings h1 a h3 usam letter-spacing −3%.

| Papel | Desktop | Tablet | Mobile |
|---|---|---|---|
| Título da hero | `heading/h1` 64/115% | `heading/h3` 48 | `heading/h4` 40 |
| Título de seção | `heading/h2` 56 | `heading/h4` 40 | `heading/h5` 32 |
| Texto do depoimento | `heading/h5-medium` 32 | `heading/h6-medium` 24 | `body/large-regular` 18 |
| Parágrafo de abertura | `body/large-regular` 18 | 18 | `body/base` 16 |
| Texto corrido | `body/base` 16/150% | 16 | 16 |

Títulos não usam quebra de linha manual no tablet e no mobile: o texto quebra pela largura.

---

## 4. Componentes

Todos estão na página **Componentes**, com tabela de propriedades. Resumo:

| Componente | Variantes / propriedades | Mobile |
|---|---|---|
| `Botão` | Variante: Primário · Secundário · Secundário inverso; Estado: Padrão · Hover; Texto; Ícone (bool + troca) | Igual; CTAs da hero com largura total |
| `Botão ícone` | Variante: Primário · Secundário · Secundário inverso; Estado: Padrão · Hover; Ícone | Igual (Secundário inverso + `icon/menu` = menu) |
| `Controles de carrossel` | Anterior (Secundário) + Próximo (Primário) | Abaixo do título |
| `Botão social` | Estado: Padrão · Hover; Ícone | Igual |
| `Badge` | Tamanho: Desktop · Mobile; Texto; Ícone | `Tamanho=Mobile` (12px, quebra até 312px) |
| `Tag de seção` | Texto; Ícone | Igual |
| `Item de lista` | Texto; Ícone | Igual |
| `Avaliação` | Tamanho: P (16) · M (20) | Igual |
| `Tile benefício` | Tipo: Destaque · Padrão; Tamanho: Desktop · Mobile; Título, Descrição, Valor, Ícone | `Tamanho=Mobile`, altura pelo conteúdo |
| `Tab depoimento` | Estado: Ativa · Inativa · Hover; Tamanho: Desktop · Mobile; Iniciais, Nome, Descrição | `Tamanho=Mobile` (avatar + nome) |
| `Accordion` | Tema: Escuro · Claro; Estado: Aberto · Fechado; Tamanho: Desktop · Mobile; Título, Conteúdo | `Tamanho=Mobile` |
| `icon/*` | 23 ícones 24×24, traço 1.75 arredondado | Escala proporcional (traço acompanha) |

No tablet, todos os componentes usam a variante Desktop esticada.

### Decisões que afetam o código

- **Bordas fora do layout.** Botões, tabs e accordion têm a borda desenhada por dentro, sem somar na altura: botão = 48px com ou sem borda. Em CSS, use `box-shadow: inset` ou `outline`, ou compense o padding.
- **Hover** em todos os elementos clicáveis: botões, botão ícone, botão social e tab inativa. Transição de 150ms ease-out.
- **Accordion:** só um item aberto por vez; o primeiro abre por padrão. No Serviços, a imagem ao lado é fixa e não muda com o item aberto.
- **Tabs de depoimento:** controlam o depoimento em destaque; as setas navegam em loop e o contador ("2 / 3") acompanha.
- **Badge e card de avaliação são de vidro:** fundo translúcido + `backdrop-filter: blur()`. Badge: branco 10% + blur 16, borda branca 28%. Card: `bg/inverse` 40% + blur 14, borda branca 20%.

---

## 5. Comportamento por seção

| Seção | Desktop | Tablet | Mobile |
|---|---|---|---|
| Navegação | Logo, 6 links, botão WhatsApp | Links ocultos; WhatsApp + menu | Logo (78%) + menu |
| Hero | 860 de altura; texto + card lado a lado | 1024 de altura; empilhado | Altura do conteúdo; botões com largura total |
| Energia solar | Título + botão lado a lado; bento 368 + 752; 4 tiles | Empilha; tiles 2×2 | 1 coluna; `Tile` Mobile |
| Serviços | Imagem + accordion lado a lado | Empilha (imagem com 400 de altura) | Empilha (280); `Accordion` Mobile |
| Quem somos | Texto + imagem lado a lado | Empilha (imagem 480); lista em 2 colunas | Empilha (360); lista em 1 coluna |
| Depoimentos | Título + controles; 3 tabs | Igual | Controles abaixo do título; `Tab` Mobile |
| Portfólio | Fotos 560/368 × 480 | 440/300 × 400 | 300/240 × 360 |
| FAQ | Intro + accordion lado a lado | Empilha | Empilha; `Accordion` Mobile |
| CTA + footer | 4 colunas | Colunas quebram linha | Colunas empilham |

---

## 6. Pendências

- **Overlay do menu** (tablet e mobile): proposta implementada direto no código (`src/components/SiteNav/SiteNav.astro`): `<dialog>` modal em tela cheia sobre `bg/inverse`, links em `heading/h5`, WhatsApp primário embaixo. Falta replicar no Figma depois da validação.
- **Cores sem token semântico:** o título da hero usa `primitive/yellow/500` como texto e o link "Ver depoimentos" usa `primitive/yellow/300`. O código segue o Figma e usa as primitivas; vale criar tokens como `text/accent-inverse`.
- **Foto da hero:** o arquivo original no Figma tem 1195×614 e é ampliado no desktop (1440×860). Uma versão em maior resolução melhora a nitidez.
- **Estados desabilitados** não foram desenhados.

Decisões tomadas (2026-11-25):

- **Foco (teclado):** anel de 2px em `action/primary` com 2px de offset, só em `:focus-visible`. Implementado globalmente em `src/styles/global.css`.
- **Título da hero:** vale o Figma, `heading/h1` com 64px no desktop. O `PRODUCT.md` foi atualizado.
