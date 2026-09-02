# perreo.space

Monorepo for [Love Hangover](https://perreo.space): an Astro frontend and a Sanity Studio, sharing a content schema package. Managed with [pnpm](https://pnpm.io/) workspaces and [Turborepo](https://turbo.build/).

## Project structure

```text
/
├── apps/
│   ├── frontend/            # Astro site (https://perreo.space)
│   └── studio/              # Sanity Studio
├── packages/
│   └── sanity/              # Shared Sanity config + schema (@repo/sanity)
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

### [`apps/frontend`](./apps/frontend)

Public Astro 7 site with Tailwind CSS 4. Currently a placeholder homepage (`Love Hangover` / `Queer. Punk. Acid. Sweat.`). Not yet wired to Sanity.

- Site URL: `https://perreo.space`
- Dev server: `http://localhost:4321`

### [`apps/studio`](./apps/studio)

Sanity Studio app. It re-exports the shared config from `@repo/sanity` (`sanity.config.ts` is a one-liner).

- Dev server: `http://localhost:3333`
- Project: `e7t10841` / dataset `production`

### [`packages/sanity`](./packages/sanity) (`@repo/sanity`)

Shared Studio configuration and content model. Document types:

| Type     | Purpose                                      |
| -------- | -------------------------------------------- |
| `artist` | People (DJ, producer, resident, etc.)        |
| `event`  | In-person or virtual events                  |
| `venue`  | Physical venues referenced by events         |
| `series` | Recurring series that events can belong to   |

Object and block schema folders exist but are empty. Studio structure (`src/structure`) is also a stub.

## Getting started

Requires Node `>=22.12` (frontend) and pnpm `11.5.1`.

```sh
pnpm install
pnpm dev
```

`pnpm dev` starts every app via Turbo. To run one at a time:

```sh
pnpm dev:frontend    # Astro
pnpm dev:studio      # Sanity Studio
```

## Scripts

Run from the repo root.

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm install`       | Install workspace dependencies       |
| `pnpm dev`           | Dev servers for all apps             |
| `pnpm dev:frontend`  | Astro only (`localhost:4321`)        |
| `pnpm dev:studio`    | Sanity Studio only (`localhost:3333`) |
| `pnpm build`         | Build all apps                       |
| `pnpm lint`          | Lint with oxlint                     |
| `pnpm lint:fix`      | Auto-fix oxlint issues               |
| `pnpm format`        | Format with Prettier                 |
| `pnpm format:check`  | Check Prettier formatting            |

## Tooling

- **Package manager:** pnpm 11
- **Build orchestration:** Turborepo 2
- **Lint / format:** oxlint, Prettier (with `prettier-plugin-astro`)
- **Frontend:** Astro 7, Tailwind 4, fluid-tailwindcss, Adobe Fonts (Typekit)
- **CMS:** Sanity 6, schema in `@repo/sanity`

Environment files (`.env`, `.env*`) are git-ignored. Put app-specific secrets next to the app that needs them.
