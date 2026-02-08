import PriceHero from "@/components/Price/PriceHero";
import PriceIntro from "@/components/Price/PriceIntro";
import PriceMenu from "@/components/Price/PriceMenu";
import WebCoupon from "@/components/WebCoupon";
import PaymentMethods from "@/components/Price/PaymentMethods";

export default function PricePage() {
  return (
    <>
      <PriceHero />
      <PriceIntro />
      <PriceMenu />
      <WebCoupon />
      <PaymentMethods/>
    </>
  );
}