import img from './Images/nft9.jpg'
import image from './Images/NFT3.jpg'
import newsImage from './Images/news1.jpg'
import { lazy, Suspense , useState, useEffect } from "react";
import Footer from './NFTCOMPONENTS/Footer/Footer';

const Header = lazy(() => import("./NFTCOMPONENTS/Header/Header"))
const Explore = lazy(() => import("./Explore/Explore"))
const Discover = lazy(() => import("./NFTCOMPONENTS/Discover/Discover"))
const News = lazy(() => import("./NFTCOMPONENTS/Newsletter/News"))

function App() {
  return (
    <div>
      <Suspense>
        <Header img={img}/>
      </Suspense>
      <Suspense>
        <Explore/>
      </Suspense>
      <Suspense>
        <Discover img={image} />
      </Suspense>
      <Suspense>
        <News img={newsImage} />
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
