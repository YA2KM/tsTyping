const API_URL = `https://official-joke-api.appspot.com/jokes/random`

fetch(API_URL).then(async e => {
    const data = await e.json()
    console.log(data.type)
    console.log(data.aaa) //undefinedがでてしまう

    //こんなこともOKになる
    const length:number = countLength(data.aaa) //TypeError: Cannot read properties of undefined (reading 'length')
    console.log(length)
    
    type apiResponse = {
        type: string,
        setup: string,
        punchline: string,
        id: number
    }

    //anyは全ての型のスーパーセットなので、全てがOptionalな型が設定された変数に代入すればセキュア
    const data2:Partial<apiResponse> = await e.json()
    console.log(data.type)
    console.log(data2.aaa) //コンパイル段階でエラーになる

    const length2 = countLength(data2.type) //typeがある保証がないからエラー
    if (data2.type) { //かたガードをつければエラーは消える
        const length3 = countLength(data2.type)
    }

})

/*
    文字列の長さを計算します
*/
function countLength(str: string):number {
    return str.length
}