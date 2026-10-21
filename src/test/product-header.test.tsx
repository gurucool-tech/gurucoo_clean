import { render, screen, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ProductPage from "@/pages/ProductPage";

describe("Product page header", () => {
  it("uses a compact connected-system header without dashboard or conversion actions", () => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter>
          <ProductPage />
        </MemoryRouter>
      </HelmetProvider>,
    );

    const header = container.querySelector(".product-hero");
    expect(header).not.toBeNull();
    const scoped = within(header as HTMLElement);

    expect(scoped.getByRole("img", { name: /connected product system/i })).toBeInTheDocument();
    expect(scoped.getByText("Product layers")).toBeInTheDocument();
    expect(scoped.getByText("States need review")).toBeInTheDocument();
    expect(scoped.queryByLabelText(/institutional operations queue/i)).not.toBeInTheDocument();
    expect(scoped.queryByRole("link")).not.toBeInTheDocument();
    expect(scoped.queryByText("Everything connected.")).not.toBeInTheDocument();
    expect(scoped.queryByText("One institution.")).not.toBeInTheDocument();
  });
});
