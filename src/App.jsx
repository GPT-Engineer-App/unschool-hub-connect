import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ParentProfile from "./components/Profile/ParentProfile.jsx";
import ChildProfile from "./components/Profile/ChildProfile.jsx";
import MentorProfile from "./components/Profile/MentorProfile.jsx";
import LearningPaths from "./pages/LearningPaths.jsx";
import ResourceLibrary from "./pages/ResourceLibrary.jsx";
import DailyLog from "./pages/DailyLog.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/parent-profile" element={<ParentProfile bio="Parent bio" learningInterests={["Interest1", "Interest2"]} achievements={["Achievement1", "Achievement2"]} />} />
        <Route path="/child-profile" element={<ChildProfile bio="Child bio" learningInterests={["Interest1", "Interest2"]} achievements={["Achievement1", "Achievement2"]} />} />
        <Route path="/mentor-profile" element={<MentorProfile bio="Mentor bio" learningInterests={["Interest1", "Interest2"]} achievements={["Achievement1", "Achievement2"]} />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/resources" element={<ResourceLibrary />} />
        <Route path="/daily-log" element={<DailyLog />} />
      </Routes>
    </Router>
  );
}

export default App;