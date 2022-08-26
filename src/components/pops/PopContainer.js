import { useState } from "react"
import { PopList } from "./PopList"
import { PopSearch } from "./PopSearch"

export const PopContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <PopSearch setterFunction={setSearchTerms} />
        <PopList searchTermState={searchTerms} />
    </>
}