import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Puff } from "react-loader-spinner"; // Corrected import for Puff loader

// Lazy load the AboutMe component
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const Projects = lazy(() => import("./Pages/Projects"));
const ProjectDetails = lazy(() => import("./Pages/ProjectDetails"));
const ExperiancePage = lazy(() => import("./Pages/Experiance"));
const EducationPage = lazy(() => import("./Pages/Education"));
const Resume = lazy(() => import("./Pages/Resume"));

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="loader-container">
              <Puff color="#118B50" height={100} width={100} />
            </div>
          }
        >
          <Routes>
            {/* Updated for React Router v6 */}
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiances" element={<ExperiancePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projectDetails/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
