"use client";
import Hero from "@/components/Hero";
import PageWrapper from "@/components/wrapper/PageWrapper";
import Clients from "@/components/Clients";
import CarousalMain from "@/components/carousel/carousalMain";
import TopNav from "@/components/wrapper/TopNav";
import Grid from "@/components/Grid";
const Home = () => {
  if (typeof window !== "undefined") {
    return (
      <PageWrapper>
        <TopNav />
        <Hero />
        <Clients />
        <Grid />
        <CarousalMain />
      </PageWrapper>
    );
  }
};

export default Home;
