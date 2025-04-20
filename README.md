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
```UZE/
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── tsconfig.json
├── public/
|__screenshots/
├── src/
│   ├── components/
│   │   ├── Typography/
│   │   │   ├── Heading/
│   │   │   │   ├── Heading.tsx
│   │   │   │   ├── Heading.stories.tsx
│   │   │   │   └── Heading.test.tsx
│   │   │   ├── Paragraph/
│   │   │   │   ├── Paragraph.tsx
│   │   │   │   ├── Paragraph.stories.tsx
│   │   │   │   └── Paragraph.test.tsx
│   │   │   ├── Label/
│   │   │   │   ├── Label.tsx
│   │   │   │   ├── Label.stories.tsx
│   │   │   │   └── Label.test.tsx
│   │   │   ├── Caption/
│   │   │   │   ├── Caption.tsx
│   │   │   │   ├── Caption.stories.tsx
│   │   │   │   └── Caption.test.tsx
│   │   │   └── HelperText/
│   │   │       ├── HelperText.tsx
│   │   │       ├── HelperText.stories.tsx
│   │   │       └── HelperText.test.tsx
│   │   ├── DataEntry/
│   │   │   ├── TextInput/
│   │   │   │   ├── TextInput.tsx
│   │   │   │   ├── TextInput.stories.tsx
│   │   │   │   └── TextInput.test.tsx
│   │   │   ├── Checkbox/
│   │   │   │   ├── Checkbox.tsx
│   │   │   │   ├── Checkbox.stories.tsx
│   │   │   │   └── Checkbox.test.tsx
│   │   ├── Feedback/
│   │   │   ├── Toast/
│   │   │   │   ├── Toast.tsx
│   │   │   │   ├── Toast.stories.tsx
│   │   │   │   └── Toast.test.tsx
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Modal.stories.tsx
│   │   │   │   └── Modal.test.tsx
│   ├── theme/
│   │   ├── tokens.ts
│   │   ├── light.ts
│   │   ├── dark.ts
│   │   └── index.ts
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   └── classNames.ts
│   ├── App.tsx
│   └── index.tsx
├── tailwind.config.js
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
└── README.md
```
---
 

## 🛠️ Getting Started

### 🔨 Installation

To get started, clone the repository and install dependencies:

```bash
git clone https://github.com/Sip-p/uze.git
cd uze
npm install
```

Run Storybook Locally
Once dependencies are installed, you can start Storybook to see your components in action:
```npm run storybook```
Visit http://localhost:6006 to view Storybook locally.


📦 Build for Production
To build your project and Storybook for production, run:

```bash
Copy
Edit
npm run build
npm run build-storybook
```
This will create optimized builds for your application and Storybook.

🧪 ESLint Setup (Advanced Type-Checked Rules)
This template uses @typescript-eslint and optionally allows stricter rules. Update your ESLint configuration like this to enable type-aware linting:

ts
Copy
Edit
```
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
```
You can also install eslint-plugin-react-x and eslint-plugin-react-dom for React-specific lint rules:

ts
Copy
Edit
```
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
```


📸 Some Screenshots are available inside the Screenshot folder
 



 
