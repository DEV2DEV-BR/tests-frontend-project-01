# Instalações

1. `npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event  @vitest/coverage-v8 jsdom vitest path -D`

2. Criar o arquivo **vitest.config.ts** na raiz do projeto:

```typescript
/// <reference types="vitest"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
});
```

3. Criar o arquivo **vitest-env.d.ts** dentro da pasta src:

```typescript
/// <reference types="vitest/globals"/>
```

4. Criar o arquivo **setupTests.ts** dentro da pasta src

```typescript
import "@testing-library/jest-dom";
```

5. Agora é preciso criar os scripts dentro do package.json

```jsonld=
 "test": "vitest",
 "coverage": "vitest run --coverage"
```

6. Exemplo de um teste de frontend:

```typescript
// component
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Seja bem-vindo</h1>
    </div>
  );
}

export default App;

// testes

import { render, screen } from "@testing-library/react";
import App from "./App";
describe("Testa o component App", () => {
  test("Devem haver dois títulos na página", async () => {
    render(<App />);

    const titles = await screen.findAllByRole("heading");

    expect(titles).toHaveLength(2);
  });

  test("Deve haver um título escrito 'Hello World'", async () => {
    render(<App />);

    const title = await screen.findByRole("heading", {
      name: "Hello World",
    });

    expect(title).toBeInTheDocument();
  });
});
```
