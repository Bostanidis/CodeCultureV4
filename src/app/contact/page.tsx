import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <ContactUs />
      </div>
      <Footer></Footer>
    </>
  );
}
