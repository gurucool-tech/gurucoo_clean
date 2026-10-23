import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import CareersPage from "@/pages/CareersPage";

const APPLY_FORM_LINK = "https://forms.gle/XR7p3yEcvzdZzZms9";

function renderCareers() {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={["/careers"]}>
        <CareersPage />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe("Careers page", () => {
  it("keeps culture, philosophy, and positions in the approved order", () => {
    const { container } = renderCareers();
    const text = container.textContent || "";

    expect(text.indexOf("Our Culture")).toBeLessThan(text.indexOf("Our Philosophy"));
    expect(text.indexOf("Our Philosophy")).toBeLessThan(text.indexOf("Open Positions"));
  });

  it("shows exactly the two approved internships", () => {
    renderCareers();

    expect(screen.getByRole("heading", { name: "Full-Stack Developer Intern" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "UI/UX Designer Intern" })).toBeInTheDocument();
    expect(screen.queryByText(/Sales Executive/i)).not.toBeInTheDocument();
  });

  it("preserves the existing Google Form for both Apply Now actions", () => {
    renderCareers();
    const applyLinks = screen.getAllByRole("link", { name: /Apply Now/i });

    expect(applyLinks).toHaveLength(2);
    expect(applyLinks.every((link) => link.getAttribute("href") === APPLY_FORM_LINK)).toBe(true);
  });
});
