import { EmblaCarousel } from "@/components/EmblaCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductionHouse from "@/components/ProductionHouse";
import SwiperSlider from "@/components/SwiperSlider";

export default function Home() {
  return (
    <main className="flex text-white fex-col min-h-full h-auto flex-col items-center justify-between -z-40">
      {/* <Hero /> */}
      <div className="flex flex-col w-full relative">
        <EmblaCarousel />
        <div className=" w-[100%] left-24 top-[655px] absolute">
          <h1 className="font-bold text-xl mb-1 ">Latest Releases</h1>
          <SwiperSlider title="Popular" key={2} category={"popular"} />
        </div>
      </div>
      <div className="w-[100%] ml-48 flex flex-col mt-44">
        <h1 className="font-bold text-xl mb-1 mt-20">Popular Movies</h1>
        <SwiperSlider title="Now Playing" key={1} category={"now_playing"} />

        <ProductionHouse />
        <h1 className="font-bold text-xl mb-1 mt-12">Top Rated</h1>
        <SwiperSlider title="Top Rated" key={3} category={"top_rated"} />
        <h1 className="font-bold text-xl mb-1 mt-12">All Time Faviourite</h1>
        <SwiperSlider title="Upcoming" key={4} category={"upcoming"} />
      </div>

      <Footer />
    </main>
  );
}
