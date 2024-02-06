"use client"
import React from "react"



const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTihmy8y3u5GHvzBeZK_ilkA8GDBXdskBLTfhPkUubEots3E0lF6eWB0RcvNOLZPaOmdTPUmYuDioLH/pub?gid=0&single=true&output=csv'
export default function CadastroRequente() {
    React.useEffect(() => {
        console.log(url)
        const response = fetch(url)
        .then((response) => response.text())
        .then((data) => (data))

        .catch((err) => console.log(err))
    },[])
    return (
        <>
        
        </>
    )
}