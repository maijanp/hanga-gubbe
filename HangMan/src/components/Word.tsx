import { useState } from "react"
import { getWord } from "./service"

export const Word = () => {
    let [word, setWord] = useState()

    const getNewWord = async () => {
        let newWord = await getWord();
        console.log(newWord);
    }
    getNewWord()
    return <div></div>
}