import Bestselling from "@/components/widgets/Bestselling";
import Categories from "@/components/widgets/Categories";
import Featureproduct from "@/components/widgets/Featureproduct";
import Hero from "@/components/widgets/Hero";
import Newslatter from "@/components/widgets/Newsletter";
import Promotion from "@/components/widgets/Promotion";
import Services from "@/components/widgets/Services";

export default async function Home() {
  return (
    <div>
      <Hero/>
      <Featureproduct/>
      <Services/>
      <Promotion/>
      <Categories/>
      <Bestselling/>
      <Newslatter/>
    </div>
  );
}