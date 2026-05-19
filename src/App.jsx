import { ReactLenis } from "lenis/react";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <ReactLenis root>
      <div className="app-container">
        <LandingPage />
      </div>
    </ReactLenis>
  );
}

export default App;
