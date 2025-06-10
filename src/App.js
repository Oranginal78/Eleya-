import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PlatformPage from './components/pages/PlatformPage';
import EleyaTwinPage from './components/pages/EleyaTwinPage';
import FranceGPTPage from './components/pages/FranceGPTPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import DemoPage from './components/pages/DemoPage';
import MentionsLegalesPage from './components/pages/MentionsLegalesPage';
import SuppliersTermsPage from './components/pages/SuppliersTermsPage';
import TermsOfUsePage from './components/pages/TermsOfUsePage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import CookiesPage from './components/pages/CookiesPage';
// Solutions pages
import BrandsPage from './components/pages/solutions/BrandsPage';
import ResearchProvidersPage from './components/pages/solutions/ResearchProvidersPage';
import SegmentationUAPage from './components/pages/solutions/SegmentationUAPage';
import ClaimTestingPage from './components/pages/solutions/ClaimTestingPage';
import OpinionPage from './components/pages/solutions/OpinionPage';
import BrandPerceptionPage from './components/pages/solutions/BrandPerceptionPage';

// Composant pour scroll vers le haut à chaque changement de route
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/platform" element={<PlatformPage />} />
                    <Route path="/eleyatwin" element={<EleyaTwinPage />} />
                    <Route path="/francegpt" element={<FranceGPTPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
                    <Route path="/suppliers-terms" element={<SuppliersTermsPage />} />
                    <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />

                    {/* Solutions routes */}
                    <Route path="/solutions/brands" element={<BrandsPage />} />
                    <Route path="/solutions/research-providers" element={<ResearchProvidersPage />} />
                    <Route path="/solutions/segmentation-ua" element={<SegmentationUAPage />} />
                    <Route path="/solutions/claim-testing" element={<ClaimTestingPage />} />
                    <Route path="/solutions/opinion" element={<OpinionPage />} />
                    <Route path="/solutions/brand-perception" element={<BrandPerceptionPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 