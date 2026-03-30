# Sociopedia Movies 🎬

App de películas en Next.js con TypeScript y Tailwind lista para desplegar en Vercel. Una aplicación moderna y responsive de streaming de películas que proporciona una experiencia inmersiva para descubrir películas, ver trailers y explorar diversos géneros.

**Autor:** Santiago Elordieta, Frontend Developer

## 🖼️ Vista Previa

![Sociopedia Movies Preview](/public/preview.png)

## ✨ Features

- **Dynamic Hero Carousel**: Immersive banner with autoplaying trailers and progress indicators.
- **Movie Discovery**: Browse sections for Now Playing, Popular, Top Rated, and Upcoming movies.
- **Interactive UI**: Smooth animations using Framer Motion for entry effects and hover interactions.
- **Search System**: Real-time search functionality to find your favorite movies.
- **Genre Filtering**: Explore movies by specific genres like Action, Drama, Comedy, etc.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Dark Mode**: Sleek dark-themed interface with glassmorphism effects.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Data Source**: [TMDB API](https://www.themoviedb.org/documentation/api)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Quick Start

To get started with the project locally, follow these steps:

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    pnpm install
    ```
3.  **Set up environment variables** (see [Environment Variables](#-environment-variables) below)
4.  **Run the development server**:
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_URL=http://localhost:3000/
TMDB_API_KEY=your_api_key_here
TMDB_READ_ACCESS_KEY=your_read_access_token_here
```

### How to Get TMDB API Credentials

1. **Create a TMDB Account**
   - Go to [TMDB](https://www.themoviedb.org/)
   - Click "Join TMDB" and create a free account

2. **Request an API Key**
   - Log in to your account
   - Go to **Settings** → **API** (or visit [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api))
   - Click **"Create"** or **"Request an API Key"**
   - Select **"Developer"** option
   - Accept the terms of use
   - Fill in the required application details:
     - **Type of Use**: Personal/Educational
     - **Application Name**: Your app name
     - **Application URL**: `http://localhost:3000` (for development)
     - **Application Summary**: Brief description of your project

3. **Get Your Credentials**
   - After approval, you'll receive:
     - **API Key (v3 auth)**: Use this for `TMDB_API_KEY`
     - **API Read Access Token (v4 auth)**: Use this for `TMDB_READ_ACCESS_KEY`

4. **Copy to `.env`**
   - Copy both values to your `.env` file
   - Keep these credentials secret and never commit them to version control

## 📁 Estructura del Proyecto

- `/src/app`: Páginas y layouts del App Router.
- `/src/components`: Componentes reutilizables de UI.
- `/src/lib`: Funciones de utilidad y fetchers de API.
- `/src/hooks`: Custom React hooks.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 Licencia

Este proyecto está bajo licencia. Para más información, consulta [License.md](./License.md).

Creado por Santiago Elordieta - Frontend Developer

