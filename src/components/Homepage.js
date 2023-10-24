import React from "react";
import NotebookSlider from "./NoteBookSlider";
import MobileGrid from "./Features";
import Footer from "./Footer";
import FeatureCard from "./FeatureCard";
import Carsousel1 from "../assets/Carsousel1.png";
export default function HomePage() {
  return (
    <div>
      <img src={Carsousel1} className="h-48 w-full" />
      <MobileGrid />
      <FeatureCard />
      <NotebookSlider />
      <Footer />
    </div>
  );
}
