import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import BookDemoPage from "./pages/BookDemoPage";
import FeaturesPage from "./pages/FeaturesPage";
import PlansPage from "./pages/PlansPage";
import ProductPage from "./pages/ProductPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import SolutionsEducationalInstitutionsPage from "./pages/SolutionsEducationalInstitutionsPage";
import SolutionsSchoolsPage from "./pages/SolutionsSchoolsPage";
import SolutionsCollegesPage from "./pages/SolutionsCollegesPage";
import SolutionsTuitionPage from "./pages/SolutionsTuitionPage";
import SolutionsMultiCampusPage from "./pages/SolutionsMultiCampusPage";
// Legacy pages commented out based on new architecture
// import MobileAccessPage from "./pages/MobileAccessPage";
// import MultiSchoolPage from "./pages/MultiSchoolPage";
// import SISPage from "./pages/SISPage";
// import CustomERPPage from "./pages/CustomERPPage";
// import IntegrationsPage from "./pages/IntegrationsPage";
// import WhyGuruCoolPage from "./pages/WhyGuruCoolPage";
// import GuruCoolDifferencePage from "./pages/GuruCoolDifferencePage";
// import PartnerProgramPage from "./pages/PartnerProgramPage";
import BlogPage from "./pages/BlogPage";
import AttendanceAccuracyPost from "./pages/blog/AttendanceAccuracyPost";
import WhatsAppAdvantagePost from "./pages/blog/WhatsAppAdvantagePost";
import StagedDigitizationPost from "./pages/blog/StagedDigitizationPost";
import GuidesPage from "./pages/GuidesPage";
import VisionMissionPage from "./pages/VisionMissionPage";
import TeamPage from "./pages/TeamPage";
import CustomersPage from "./pages/CustomersPage";
import CareersPage from "./pages/CareersPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/book-demo" element={<BookDemoPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/plans" element={<PlansPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              
              {/* Solutions pages */}
              <Route path="/solutions/educational-institutions" element={<SolutionsEducationalInstitutionsPage />} />
              <Route path="/solutions/schools" element={<SolutionsSchoolsPage />} />
              <Route path="/solutions/colleges" element={<SolutionsCollegesPage />} />
              <Route path="/solutions/tuition-coaching" element={<SolutionsTuitionPage />} />
              <Route path="/solutions/multi-campus" element={<SolutionsMultiCampusPage />} />
              
              {/* Resources dropdown pages */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/attendance-accuracy-matters" element={<AttendanceAccuracyPost />} />
              <Route path="/blog/whatsapp-advantage-parent-apps" element={<WhatsAppAdvantagePost />} />
              <Route path="/blog/staged-approach-school-digitization" element={<StagedDigitizationPost />} />
              <Route path="/guides" element={<GuidesPage />} />
              
              {/* About dropdown pages */}
              <Route path="/vision-mission" element={<VisionMissionPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/careers" element={<CareersPage />} />
              
              {/* Legal pages */}
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
