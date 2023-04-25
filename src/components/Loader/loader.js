import React from 'react'
import './loader.css'

export default function Loader(props) {
    return (
        <div className="spinner" style={{ display: props.display ? "block" : "none" }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
