import axios from "axios";

type APIResponse = {
    title: string
    path: string
}

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