# SEIKA Engenharia — landing page

Landing page da SEIKA Engenharia, feita com Astro, Tailwind CSS v4 e TypeScript. O design vem do arquivo Figma **Seika V2**; veja [`DESIGN.md`](DESIGN.md) e [`PRODUCT.md`](PRODUCT.md).

## Comandos

Requer Node 22.23+ e pnpm.

| Comando | O que faz |
|---|---|
| `pnpm install` | Instala as dependências |
| `pnpm dev` | Servidor local em `localhost:4321` |
| `pnpm check` | Checagem de tipos (`astro check`) |
| `pnpm lint` / `pnpm lint:fix` | ESLint (TypeScript, Astro e acessibilidade) |
| `pnpm format` / `pnpm format:check` | Prettier (ordena as classes Tailwind) |
| `pnpm build` | Checa os tipos e gera o site estático em `dist/` |
| `pnpm preview` | Serve o build localmente |

## Tema

Os tokens do Figma estão em [`src/styles/global.css`](src/styles/global.css). Os padrões do Tailwind (cores, raios, escala de texto, breakpoints) foram removidos: só existem os tokens do Figma.

| Figma | Classe Tailwind | Exemplo |
|---|---|---|
| `Color` semântico (`bg/*`, `text/*`, `icon/*`, `action/*`, `border/*`) | `{utilitário}-{grupo}-{nome}` | `bg-bg-inverse`, `text-text-secondary`, `bg-action-primary` |
| Opacidade de uso | modificador `/N` | `border-border-subtle/12` |
| `Spacing/N` (N × 4px) | escala numérica padrão | `p-4` = 16px, `gap-0.5` = 2px |
| `Radius` | `rounded-{nome}` (`None` → `base`) | `rounded-element`, `rounded-page` |
| Text styles `heading/*`, `body/*` | `text-{nome}` | `text-h2`, `text-body-base-medium` |
| `Layout` `container/width` | `container-page` | largura do conteúdo de cada seção |
| `Layout` `footer/content-width` | `container-footer` | conteúdo do card do footer |
| `Layout` `section/padding-y` / `section/gap` | `py-section-y` / `gap-section-gap` | padding e gap das seções |
| Breakpoints Tablet / Desktop | `tablet:` (≥768) / `desktop:` (≥1024) | `desktop:text-h1` |

As primitivas (`--primitive-*`) existem só como fonte dos tokens semânticos e não geram classes.

## Fluxo de trabalho

- `main` é a branch de produção. Todo trabalho entra por PR.
- Os PRs são mesclados com merge commit, para manter um commit por componente ou por seção.
- A Vercel gera um preview para cada PR.
