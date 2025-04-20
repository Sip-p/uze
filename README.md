<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
``` -->
# ⚛️ UZE — React + TypeScript + Vite Component Library

A minimal yet powerful React + TypeScript + Vite setup featuring reusable components, Storybook integration, and ESLint best practices.

---

## 🚀 Live Preview

**Storybook Deployed via Chromatic**  
🌐 [Click here to view the live Storybook preview](https://6804010d9a03914f21b766c5-ahoolxkprs.chromatic.com)

---

## 🧩 Features

- 🔧 React + TypeScript + Vite setup
- 📘 Storybook for interactive UI development
- ✨ ESLint with TypeScript-aware rules
- 🔁 Hot Module Replacement (HMR) enabled via Vite
- ✅ Configurable linting with recommended rulesets
- 📦 Ready for packaging as a UI library

---

## 📁 Folder Structure

uze/ ├── .storybook/ # Storybook configuration ├── public/ # Public static files ├── src/ │ ├── components/ # Your reusable UI components │ └── stories/ # Storybook stories for the components ├── tsconfig.json # TypeScript configuration ├── package.json # Project dependencies and scripts └── README.md # Project documentation


---

## 🛠️ Getting Started

### 🔨 Installation

To get started, clone the repository and install dependencies:

```bash
git clone https://github.com/Sip-p/uze.git
cd uze
npm install


Run Storybook Locally
Once dependencies are installed, you can start Storybook to see your components in action:
npm run storybook
Visit http://localhost:6006 to view Storybook locally.


📦 Build for Production
To build your project and Storybook for production, run:

bash
Copy
Edit
npm run build
npm run build-storybook
This will create optimized builds for your application and Storybook.

🧪 ESLint Setup (Advanced Type-Checked Rules)
This template uses @typescript-eslint and optionally allows stricter rules. Update your ESLint configuration like this to enable type-aware linting:

ts
Copy
Edit
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
You can also install eslint-plugin-react-x and eslint-plugin-react-dom for React-specific lint rules:

ts
Copy
Edit
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
📸 Screenshots
Here, add screenshots or GIFs showing your components in action. You can use the screenshots/ folder or simply upload images directly to GitHub.


Component	Preview
Button Component	
Modal Component