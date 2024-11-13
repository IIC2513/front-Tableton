// eslint.config.mjs
import { builtinModules } from 'module';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import babelParser from '@babel/eslint-parser';

export default [
  {
    ignores: ["node_modules/**", "build/**", "public/**"], // Ignorar directorios comunes
  },
  {
    files: ["**/*.js", "**/*.jsx"], // Patrón de archivos para JavaScript y JSX
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: babelParser, // Usar Babel como el parser
      parserOptions: {
        requireConfigFile: false, // Desactiva la necesidad de un archivo Babel config
        babelOptions: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // Presets necesarios para React y ECMAScript
        },
        ecmaFeatures: {
          jsx: true, // Habilitar JSX explícitamente
        },
      },
      globals: {
        ...builtinModules.reduce((acc, mod) => {
          acc[mod] = "readonly";
          return acc;
        }, {}),
        browser: true,
        node: true,
        document: "readonly", // Asegura que document esté disponible globalmente
        localStorage: "readonly", // Asegura que localStorage esté disponible globalmente
        alert: "readonly", // Permite el uso de alert sin errores de ESLint
      },
    },
    plugins: {
      react: reactPlugin, // Plugin para React
      "react-hooks": reactHooksPlugin, // Plugin para React Hooks
    },
    rules: {
      "no-undef": "error", // Variables sin definir
      "quotes": ["warn", "double"], // Preferencia por comillas dobles
      "no-console": "warn", // Advertencia sobre console.log
      "semi": ["error", "always"], // Punto y coma obligatorio
      "no-var": "warn", // Prefiere let o const
      "func-names": "error", // Nombres en funciones
      "no-trailing-spaces": "warn", // Sin espacios al final
      "space-before-blocks": ["error", "always"], // Espacio antes de bloques
      "quote-props": ["error", "consistent"], // Citas en propiedades consistentes
      "no-unused-vars": "error", // Variables no usadas
      "indent": ["error", 2], // Indentación de dos espacios
      "no-eval": "error", // Sin eval
      "camelcase": ["warn", { "properties": "never" }], // Preferencia por camelCase
      "no-multiple-empty-lines": ["error", { "max": 1 }], // Líneas vacías limitadas

      // Reglas para React
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off", // Desactiva si usas React 17+
      "react/prop-types": "off", // Opcional si no usas PropTypes

      // Reglas para React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
