import { BrowserRouter, Routes, Route } from "react-router-dom";
import DCSDirectory from "@/pages/DCSDirectory";
import DCSDetail from "@/pages/DCSDetail";
import AboutGNL1Z from "@/pages/AboutGNL1Z";
import ToolsDirectory from "@/pages/ToolsDirectory";
import LiftingPlanPage from "@/pages/LiftingPlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DCSDirectory />} />
        <Route path="/dcs/:unitId" element={<DCSDetail />} />
        <Route path="/about" element={<AboutGNL1Z />} />
        <Route path="/outils" element={<ToolsDirectory />} />
        <Route path="/levage" element={<LiftingPlanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
