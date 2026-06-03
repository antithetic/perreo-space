# Monorepo Workspace

This repository is a monorepo that uses the [Turbo](https://turbo.build/) build system and contains multiple apps and packages. The primary app described here is an Astro site located in [`apps/web`](./apps/web).

## Project Structure

```
/
├── apps/
│   └── web/               # Astro project (see below for details)
├── .turbo/                # Turbo build system config
├── node_modules/
├── package.json
└── pnpm-workspace.yaml    # Defines the monorepo workspace for pnpm
```

### [`apps/web/`](./apps/web)

This folder contains the main Astro app. See below for [Astro-specific project info](#astro-starter-kit-minimal).

#### Development

1. Navigate to the `apps/web` directory:
   ```sh
   cd apps/web
   ```
2. Install dependencies from the root:
   ```sh
   pnpm install
   ```
3. Start the development server:
   ```sh
   pnpm dev
   ```

#### VSCode Setup

- Recommended extension: `astro-build.astro-vscode` (see `.vscode/extensions.json`)
- Launch config in `.vscode/launch.json` allows you to easily run the Astro dev server.

#### Scripts

_Note: All scripts should be run from the monorepo root unless otherwise specified._

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `pnpm install`      | Install all dependencies         |
| `pnpm dev -F web`   | Run dev server for the Astro app |
| `pnpm build -F web` | Build the Astro app              |

#### Environment

- Environment variables for Astro should be placed in `.env` or `.env.production` within `apps/web/`.
- These files are git-ignored.

#### Misc

- `node_modules`, build output `dist/`, debug logs, and system-specific folders/files are git-ignored (see `.gitignore` in `apps/web/`).
- JetBrains and VSCode settings are pre-configured in the `.idea/` and `.vscode/` directories.

---

See [`apps/web/README.md`](./apps/web/README.md) for further details about the Astro project.

For Turbo team settings, see [`.turbo/config.json`](./.turbo/config.json).

---
