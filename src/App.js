import { Feature, Download, SectionWrapper } from "./components";
import assets from './assets'
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title='You own store of Nifty NFTS. Start selling & Growing'
        description='But, store, collect NFTS, exchange
         & earn crypto. Join 25+ million people using ProNef Marketplace'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='Smart user Interface MarketPlace'
        description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design'
        mockupImg={assets.homeCards}
        reverse
      />
      <Feature />
      <SectionWrapper
        title='Deployment'
        description="ProNef is built using Expo which runs nativelu on all users devices. you can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title='Creative way to showcase the store'
        description='The app contains two screens. The first screen lists all NFTs while the second one show the details of a specific NFT.'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤️ by <span className='bold'>UWIMANA J. Paul</span>
        </p>
      </div>
    </>
  );
}

export default App;
