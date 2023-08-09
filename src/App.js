import Header from "./NFTCOMPONENTS/Header/Header";
import img from './Images/nft9.jpg'
import Explore from "./Explore/Explore";
import Discover from "./NFTCOMPONENTS/Discover/Discover";
import image from './Images/NFT3.jpg'
import newsImage from './Images/news1.jpg'
import News from "./NFTCOMPONENTS/Newsletter/News";

function App() {
  return (
    <div>
      <Header img={img}/>
      <Explore/>
      <Discover img={image}/>
      <News img={newsImage}/>
    </div>
  );
}

export default App;
