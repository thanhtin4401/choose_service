import ChooseService from "@/components/ChooseService";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-[88px] bg-background-color">
      <div className="container mx-auto py-5 px-[1.5rem] lg:px-0">
        <ChooseService />
      </div>
      <Footer />
    </main>
  );
}
