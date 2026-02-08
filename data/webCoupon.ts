export type WebCouponItem = {
  title: string
  description: string
  note?: string
  benefit: string
}

export const WEB_COUPONS: WebCouponItem[] = [
  {
    title: "【ご新規様対象クーポン】",
    description: "ジェル or ケアどちらかをご利用の場合",
    note: "※他割引併用不可・ウォーターケア付（ネイルチップ・マニキュア・トラブルコースは対象外）",
    benefit: "20%OFF",
  },
  {
    title: "【2回目再来店のお客様対象クーポン】",
    description: "2回目のご来店（4週間以内）",
    benefit: "当店オフ無料",
  },
  {
    title: "【顧客様対象クーポン】",
    description: "年間6回合計税別8,000円以上ご利用の場合",
    benefit: "10%OFF",
  },
]