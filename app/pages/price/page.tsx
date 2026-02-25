import PageHero from "@/components/PageHero";
import PriceIntro from "@/components/Price/PriceIntro";
import PriceMenu from "@/components/Price/PriceMenu";
import WebCoupon from "@/components/WebCoupon";
import PaymentMethods from "@/components/Price/PaymentMethods";

export default function PricePage() {
  return (
    <>
      <PageHero
        image="/menu/price.jpg"
        title="PRICE"
        subtitle="料金"
      />
      <PriceIntro />
      <PriceMenu />
      <PaymentMethods />
    </>
  );
}