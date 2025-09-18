import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CollectionsSection />
      {/* <SignupForm /> */}
      <Footer />
    </div>
  );
};

export default Index;
