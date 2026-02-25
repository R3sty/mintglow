export type WebCouponItem = {
  target?: string
  isNew?: boolean
  title: string
  subtitle?: string
  tags?: string[]
  price?: string
  code?: string
  thumbnail: string
  presentationCondition: string
  usageCondition: string
}

export const WEB_COUPONS: WebCouponItem[] = [
  {
    target: "全員",
    isNew: true,
    title: "【ご新規様対象クーポン】",
    subtitle: "ジェル or ケアどちらかをご利用の場合",
    tags: ["ジェル", "ケア", "ハンド"],
    price: "¥5,500",
    code: "MINTNEW500",
    thumbnail: "https://storage.googleapis.com/photo-portfolio/mintglow/mint_glow_logo.png",
    presentationCondition: "予約時＆入店時",
    usageCondition:
      "ご新規様限定／他割引併用不可（ウォーターケア付・ネイルチップ・マニキュア・トラブルコースは対象外）",
  },
  {
    target: "再来",
    title: "【2回目再来店のお客様対象クーポン】",
    subtitle: "2回目のご来店（4週間以内）",
    tags: ["再来", "オフ"],
    price: "オフ無料",
    code: "MINTOFFFREE",
    thumbnail: "https://storage.googleapis.com/photo-portfolio/mintglow/coupons/coupon-2.jpg",
    presentationCondition: "予約時＆入店時",
    usageCondition: "4週間以内の再来店限定／他割引併用不可",
  },
  {
    target: "顧客様",
    title: "【顧客様対象クーポン】",
    subtitle: "年間6回・合計税別8,000円以上ご利用の場合",
    tags: ["リピーター", "割引"],
    price: "10%OFF",
    code: "MINTVIP10",
    thumbnail: "https://storage.googleapis.com/photo-portfolio/mintglow/coupons/coupon-3.jpg",
    presentationCondition: "予約時＆入店時",
    usageCondition: "年間6回以上ご利用の顧客様限定／他割引併用不可",
  },
]