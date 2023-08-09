import img from './Images/nft9.jpg'
import image from './Images/NFT3.jpg'
import newsImage from './Images/news1.jpg'
import { lazy, Suspense , useState, useEffect } from "react";

const Header = lazy(() => import("./NFTCOMPONENTS/Header/Header"))
const Explore = lazy(() => import("./Explore/Explore"))
const Discover = lazy(() => import("./NFTCOMPONENTS/Discover/Discover"))
const News = lazy(() => import("./NFTCOMPONENTS/Newsletter/News"))

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showDiscover, setShowDiscover] = useState(false);
  const [showNews, setShowNews] = useState(false);

   useEffect(() => {
    const headerTimeout = setTimeout(() => setShowHeader(true), 3000);
    const exploreTimeout = setTimeout(() => setShowExplore(true), 3000);
    const discoverTimeout = setTimeout(() => setShowDiscover(true), 9000);
    const newsTimeout = setTimeout(() => setShowNews(true), 12000);

    // Clear timeouts when component unmounts
    return () => {
      clearTimeout(headerTimeout);
      clearTimeout(exploreTimeout);
      clearTimeout(discoverTimeout);
      clearTimeout(newsTimeout);
    };
  }, []);

  return (
    <div>
      <Suspense>
        {showHeader &&<Header img={img}/>}
      </Suspense>
      <Suspense>
        {showExplore && <Explore />}
      </Suspense>
      <Suspense>
        {showDiscover && <Discover img={image} />}
      </Suspense>
      <Suspense>
        {showNews && <News img={newsImage} />}
      </Suspense>
    </div>
  );
}

export default App;
