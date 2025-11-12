# Landing Page de Portafolio Personal (Resume)

Este es un proyecto de landing page personal y currículum, construido con Next.js, React, Tailwind CSS y TypeScript. Está diseñado para mostrar la información profesional, experiencia laboral, habilidades y proyectos desarollados por mi persona.

## Características Principales

  * **Framework Moderno:** Construido con [Next.js](https://nextjs.org/) (v15+) y [React](https://react.dev/) (v19+).
  * **Estilizado con Tailwind:** Utiliza [Tailwind CSS](https://tailwindcss.com/) (v4) para el diseño.
  * **Autenticación Integrada:** Configurado con [NextAuth.js](https://next-auth.js.org/) (v4). Incluye proveedores para Google, GitHub y credenciales locales.
  * **Datos Centralizados:** La mayor parte del contenido (información personal, experiencia, educación) se maneja desde un único archivo (`src/app/api/data.tsx`) para facilitar la personalización.
  * **Descarga de PDF:** Incluye la biblioteca `html2pdf.js` para permitir a los visitantes descargar una versión en PDF del currículum.

## Pasos para la Ejecución

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### 1\. Prerrequisitos

  * [Node.js](https://nodejs.org/) (versión 20+ recomendada)
  * `npm` (o `yarn` / `pnpm`)

### 2\. Instalación

Clona el repositorio e instala las dependencias del proyecto:

```bash
# Clona el repositorio
git clone <URL-DEL-REPOSITORIO>

# Entra al directorio del proyecto
cd personal_landingPage-development

# Instala las dependencias
npm install
```

### 3\. Configuración de Variables de Entorno

Este proyecto utiliza NextAuth.js para la autenticación, lo cual requiere variables de entorno. Crea un archivo llamado `.env.local` en la raíz del proyecto.

```bash
# .env.local

# URL del sitio (requerida por NextAuth)
# Cambia http://localhost:3000 si usas un puerto diferente
NEXTAUTH_URL=http://localhost:3000

# Secret para NextAuth (genera tu propia clave segura)
# Puedes usar 'openssl rand -hex 32' para generar una
NEXTAUTH_SECRET=tu-clave-secreta-aqui

# IDs de Proveedores de OAuth (Opcional)
# Si deseas usar Google o GitHub, obtén las credenciales en sus consolas de desarrollador.
GOOGLE_CLIENT_ID=TU_CLIENT_ID_DE_GOOGLE
GOOGLE_CLIENT_SECRET=TU_CLIENT_SECRET_DE_GOOGLE

GITHUB_ID=TU_ID_DE_GITHUB
GITHUB_SECRET=TU_SECRET_DE_GITHUB
```

**Nota:** El proveedor de credenciales está configurado con valores de prueba (`admin` / `admin123`) directamente en el código (`src/app/api/auth/[...nextauth]/route.js`).

### 4\. Ejecución (Modo Desarrollo)

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

### 5\. Build y Ejecución (Modo Producción)

Para crear una build optimizada y ejecutarla en modo producción:

```bash
# 1. Construir el proyecto
npm run build

# 2. Iniciar el servidor de producción
npm run start
```