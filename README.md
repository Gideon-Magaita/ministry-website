# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


## Final v5 changes
- Public navigation is outside the header and uses `position: sticky`, so the blue menu remains visible while scrolling.
- Added `/contact` public contact page with responsive contact cards, enquiry form, social links and location section.
- Added `/contact` to the public navigation and footer.
- Replaced the left branding placeholder with the Tanzania Coat of Arms. The current demo loads the Wikimedia Commons SVG remotely; replace it with an officially supplied Ministry asset for production and follow applicable National Emblems Act requirements.
- Coat of Arms reference: Wikimedia Commons, “Coat of arms of Tanzania.svg”, by FischX, CC BY-SA 3.0.
