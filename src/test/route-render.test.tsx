import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

// Eager imports of all pages
import HomePage from "@/pages/HomePage";
import BookDemoPage from "@/pages/BookDemoPage";
import FeaturesPage from "@/pages/FeaturesPage";
import PlansPage from "@/pages/PlansPage";
import ProductPage from "@/pages/ProductPage";
import FAQPage from "@/pages/FAQPage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import SolutionsEducationalInstitutionsPage from "@/pages/SolutionsEducationalInstitutionsPage";
import SolutionsSchoolsPage from "@/pages/SolutionsSchoolsPage";
import SolutionsCollegesPage from "@/pages/SolutionsCollegesPage";
import SolutionsTuitionPage from "@/pages/SolutionsTuitionPage";
import SolutionsMultiCampusPage from "@/pages/SolutionsMultiCampusPage";
import BlogPage from "@/pages/BlogPage";
import AttendanceAccuracyPost from "@/pages/blog/AttendanceAccuracyPost";
import WhatsAppAdvantagePost from "@/pages/blog/WhatsAppAdvantagePost";
import StagedDigitizationPost from "@/pages/blog/StagedDigitizationPost";
import GuidesPage from "@/pages/GuidesPage";
import VisionMissionPage from "@/pages/VisionMissionPage";
import TeamPage from "@/pages/TeamPage";
import CustomersPage from "@/pages/CustomersPage";
import CareersPage from "@/pages/CareersPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import NotFound from "@/pages/NotFound";

const pages: [string, React.ComponentType][] = [
  ["/", HomePage],
  ["/book-demo", BookDemoPage],
  ["/features", FeaturesPage],
  ["/plans", PlansPage],
  ["/product", ProductPage],
  ["/faq", FAQPage],
  ["/contact", ContactPage],
  ["/about", AboutPage],
  ["/solutions/educational-institutions", SolutionsEducationalInstitutionsPage],
  ["/solutions/schools", SolutionsSchoolsPage],
  ["/solutions/colleges", SolutionsCollegesPage],
  ["/solutions/tuition-coaching", SolutionsTuitionPage],
  ["/solutions/multi-campus", SolutionsMultiCampusPage],
  ["/blog", BlogPage],
  ["/blog/attendance-accuracy-matters", AttendanceAccuracyPost],
  ["/blog/whatsapp-advantage-parent-apps", WhatsAppAdvantagePost],
  ["/blog/staged-approach-school-digitization", StagedDigitizationPost],
  ["/guides", GuidesPage],
  ["/vision-mission", VisionMissionPage],
  ["/team", TeamPage],
  ["/customers", CustomersPage],
  ["/careers", CareersPage],
  ["/terms", TermsPage],
  ["/privacy", PrivacyPage],
  ["/404", NotFound],
];

describe("All route components render without crashing", () => {
  for (const [path, Component] of pages) {
    it(`renders route ${path}`, () => {
      expect(() => {
        render(
          <HelmetProvider>
            <MemoryRouter initialEntries={[path]}>
              <Component />
            </MemoryRouter>
          </HelmetProvider>
        );
      }).not.toThrow();
    });
  }
});
