import React from 'react'
import "./customeButton.styles.scss";

export default function CustomeButton({name,accent}) {
    return(<button className={accent ? "CustomeButtonAccent" : "CustomeButton"}>{name}</button>)

}