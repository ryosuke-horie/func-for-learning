import getZennTrend from "./ZennTrend";
import sendMail from "./SendMail";

// 実行
// Qiitaトレンドを取得し、Gmailで送信する。
export async function handler(): Promise<any> {
    // メール送信用の文章を取得
    const mailBodyText = getZennTrend()
    console.log(mailBodyText)

    // メール送信処理
    return sendMail(await mailBodyText)
}
