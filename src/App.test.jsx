import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import fantasyBooks from "./books/fantasy.json";
import userEvent from "@testing-library/user-event";

describe("testApp", () => {
  it("renders welcome", () => {
    render(<App />);
    const welcomeTitle = screen.getByRole("heading", {
      name: /scopri il tuo prossimo fantasy/i,
    });
    expect(welcomeTitle).toBeInTheDocument();
  });
  it("reinderizza 150 card", () => {
    const { container } = render(<App />);
    const cards = container.querySelectorAll(".book-card");
    expect(cards).toHaveLength(150);
  });
  it("mostra la CommentArea quando clicchi una card", async () => {
    const originalFetch = global.fetch;
    global.fetch = jest
      .fn()
      .mockResolvedValue({ json: async () => [] });

    try {
      render(<App />);
      const firstBookImage = screen.getAllByRole("img")[0];
      await userEvent.click(firstBookImage);

      const commentTitle = await screen.findByRole("heading", {
        name: /recensioni/i,
      });
      expect(commentTitle).toBeInTheDocument();
      expect(firstBookImage.closest(".book-card")).toHaveClass("is-selected");
    } finally {
      if (originalFetch) {
        global.fetch = originalFetch;
      } else {
        delete global.fetch;
      }
    }
  });
});
