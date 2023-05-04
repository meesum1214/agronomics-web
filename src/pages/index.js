import Footer from "@/layout/GlobalComponents/Footer";
import NavBar from "@/layout/GlobalComponents/NavBar";
import BottomNavigation from "@/layout/Screens/Home/BottomNavigation";
import Card from "@/layout/Screens/Home/Card";
import HeroSection from "@/layout/Screens/Home/HeroSection";
import cards, { bottomNavigation } from "@/mapping/cards";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      {
        cards.map(({ id, src, imgUrl, heading, description, onClick }) => (
          <Card key={id} src={src} imgUrl={imgUrl} heading={heading} description={description} />
        ))
      }

      <div className="grid grid-cols-2 gap-3 my-20">
        {
          bottomNavigation.map(({ id, src, iconUrl, title }) => (
            <BottomNavigation key={id} src={src} iconUrl={iconUrl} title={title} />
          ))
        }
      </div>

      <Footer />
    </main>
  )
}
