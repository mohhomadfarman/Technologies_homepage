import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";

// Components
import ScrollToTopButton from "./Components/ScrollToTop"

// Home
const DesignagencyPage = lazy(() => import("./Pages/Home/DesignAgency"))



function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();

  // RetinaJS
  useEffect(() => {
    window.addEventListener('load', retina(document.querySelectorAll('img')));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then(module => {
        module.SetHeaderMenuPos()
        module.setDocumentFullHeight()
      })
    }, 1000);
  }, [location])

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
      }}
    >
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
        {
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton />
            <AnimatePresence exitBeforeEnter>
              <Suspense fallback={<></>}>
                <Routes>
                  <Route path="/" element={<DesignagencyPage />} />

                  {/* Headers */}
                
                  {/* Home Specialized */}
                  <Route path="/home-design-agency" element={<DesignagencyPage style={{ "--base-color": "#ffcc2e" }} />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
        }
      </div>
    </GlobalContext.Provider>
  )
}

export default App;