# AI Coding Guidelines for This Project

## Architecture Overview

This is a React single-page application (SPA) built with Vite, TypeScript, and Tailwind CSS. It targets an e-commerce/portfolio site with Portuguese language routes and components.

- **Routing**: Centralized in `src/routes/AppRoutes.tsx` using React Router DOM. Routes use Portuguese paths (e.g., `/loja` for store, `/carrinho` for cart). Home route is `/` mapped to `Portfolio` component.

- **State Management**: Uses Zustand for global state. Stores are in `src/store/` with `authStore.ts` for authentication and `cartStore.ts` for shopping cart (currently empty placeholders).

- **API Layer**: Centralized API calls in `src/services/api.ts` using Axios (currently empty).

- **Component Structure**: Pages in `src/pages/` (e.g., `Loja.tsx`, `Carrinho.tsx`), reusable components in `src/components/` (e.g., `ProductCard.tsx`, `Header.tsx` - mostly empty).

- **Styling**: Primarily Tailwind CSS utility classes. Styled Components is installed but unused. Example: `className="text-3xl font-bold text-green-600"`.

- **Forms**: React Hook Form with Zod validation planned (not implemented).

## Key Patterns and Conventions

- **Naming**: Use Portuguese for page names, routes, and component purposes (e.g., `Loja` for store, `Carrinho` for cart).

- **Icons**: Lucide React icons available for UI elements.

- **TypeScript**: Strict mode enabled with no unused locals/parameters. Use project references with separate configs for app and node code.

- **Linting**: ESLint with React hooks and Vite refresh plugins. Run `npm run lint` before commits.

## Development Workflow

- **Development**: `npm run dev` starts Vite dev server with HMR.

- **Build**: `npm run build` runs TypeScript compilation then Vite build.

- **Preview**: `npm run preview` serves built app locally.

- **No Tests Yet**: Add Jest/Vitest when implementing features.

## Integration Points

- **External Dependencies**: Axios for HTTP requests, React Router for navigation, Zustand for state.

- **Build Tool**: Vite with React plugin, PostCSS for Tailwind.

When adding features, populate the empty stores and API service. Use Tailwind for styling consistency.</content>
<parameter name="filePath">c:\Users\PC\Downloads\PASTA DO RINJA\VITAAZV\vite-project\.github\copilot-instructions.md