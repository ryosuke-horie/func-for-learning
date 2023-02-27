import getQiitaTrend from "./QiitaTrend/QiitaTrend";
import getZennTrend from "./Zenn/ZennTrend";
import sendMail from "./SendMail";


// 実行
// Qiitaトレンドを取得し、Gmailで送信する。
export async function handler(): Promise<any> {
    // メール送信用の文章を取得
    const QiitaText = getQiitaTrend()
    const ZennText  = getZennTrend()
    
    const mailBodyText = await QiitaText + await ZennText

    // メール送信処理
    return sendMail(await mailBodyText)
}

handler()