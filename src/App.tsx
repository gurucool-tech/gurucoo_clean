import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";

// Eager load HomePage for critical path performance
import HomePage from "./pages/HomePage";

// Lazy load all other pages to reduce initial bundle size
const BookDemoPage = lazy(() => import("./pages/BookDemoPage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const PlansPage = lazy(() => import("./pages/PlansPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SolutionsEducationalInstitutionsPage = lazy(() => import("./pages/SolutionsEducationalInstitutionsPage"));
const SolutionsSchoolsPage = lazy(() => import("./pages/SolutionsSchoolsPage"));
const SolutionsCollegesPage = lazy(() => import("./pages/SolutionsCollegesPage"));
const SolutionsTuitionPage = lazy(() => import("./pages/SolutionsTuitionPage"));
const SolutionsMultiCampusPage = lazy(() => import("./pages/SolutionsMultiCampusPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const AttendanceAccuracyPost = lazy(() => import("./pages/blog/AttendanceAccuracyPost"));
const WhatsAppAdvantagePost = lazy(() => import("./pages/blog/WhatsAppAdvantagePost"));
const StagedDigitizationPost = lazy(() => import("./pages/blog/StagedDigitizationPost"));
const GuidesPage = lazy(() => import("./pages/GuidesPage"));
const VisionMissionPage = lazy(() => import("./pages/VisionMissionPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const CustomersPage = lazy(() => import("./pages/CustomersPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <LazyMotion features={domAnimation}>
            <Layout>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
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
            </Suspense>
            </Layout>
          </LazyMotion>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
