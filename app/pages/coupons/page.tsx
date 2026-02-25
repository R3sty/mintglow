import PageHero from "@/components/PageHero";
import PriceIntro from "@/components/Price/PriceIntro";
import PriceMenu from "@/components/Price/PriceMenu";
import WebCoupon from "@/components/WebCoupon";
import PaymentMethods from "@/components/Price/PaymentMethods";

export default function PricePage() {
  return (
    <>
      <PageHero
        image="/menu/coupon.jpg"
        title="Coupon"
        subtitle="クーポン"
      />
      <WebCoupon />
      <PaymentMethods />
    </>
  );
}