# Biobank Research Portal Documentation

User documentation for the Biobank Clincal Genomic Research Portal 

## Docker Setup

This project includes Docker Compose configuration to run the VitePress site in a containerized environment.

### Prerequisites

- Docker
- Docker Compose

### Running the Development Server

To start the development server with hot reload:

```bash
docker-compose up vitepress
```

The site will be available at `http://localhost:5173`

### Building for Production

To build the site for production:

```bash
docker-compose --profile build up vitepress-build
```

### Preview Production Build

To build and preview the production site:

```bash
docker-compose --profile preview up vitepress-preview
```

The preview will be available at `http://localhost:4173`

### Available Services

- **vitepress**: Development server with hot reload (default)
- **vitepress-build**: Production build (requires `--profile build`)
- **vitepress-preview**: Production preview server (requires `--profile preview`)

### Stopping Services

To stop all running services:

```bash
docker-compose down
```

### Local Development (without Docker)

If you prefer to run locally without Docker:

```bash
npm install
npm run docs:dev
```

## Project Structure

```
.
├── .vitepress/          # VitePress configuration
│   └── config.js        # Site configuration
├── api/                 # API documentation
├── guide/               # User guides
├── public/              # Static assets
├── index.md             # Homepage
└── docker-compose.yml   # Docker configuration
```

## Scripts

- `npm run docs:dev` - Start development server
- `npm run docs:build` - Build for production
- `npm run docs:preview` - Preview production build
