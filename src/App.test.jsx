import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}

describe("App", () => {
  it("monta correttamente il componente Welcome", async () => {
    const imported = await import("./App");
    const App = imported.default?.default || imported.default || imported;

    render(<App />);

    expect(
      screen.getByRole("heading", { name: /Scopri il tuo prossimo fantasy/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Biblioteca digitale/i)).toBeInTheDocument();
    expect(screen.getByText(/Esplora il catalogo/i)).toBeInTheDocument();
  });
});
