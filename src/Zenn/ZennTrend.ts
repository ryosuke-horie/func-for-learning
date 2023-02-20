import axios from "axios";

type APIResponse = {
    title: string
    path: string
}

// https://qiita.com/HelloRusk/items/803f9599cde72810f1a8
// 上記の記事で公開されているAPIを利用。
// Qiitaのトレンド記事をスクレイピングしたものをJSONで返すもの。
const ZennTrendURL: string = 'https://zenn-api.vercel.app/api/trendTech'

// Qiitaトレンドを取得し、メール本文用の文章に変換する。
const getZennTrend = async(): Promise<any> => {
    let mailBodyText: string = ''
    let response = await axios.get(ZennTrendURL);
    
    await response.data.forEach((element: APIResponse) => {
        mailBodyText = mailBodyText + element.title + '\br (' + element.path + ')' + '\n'
        mailBodyText = mailBodyText + '---------------- \n \n'
    });

    return mailBodyText
}

export default getZennTrend