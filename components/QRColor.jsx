import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { SketchPicker } from 'react-color'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";


const QRColor = (props) => {

    const [bgColor, setBgColor] = useColor("hex", "#ffffff");
    const [fgColor, setFgColor] = useColor("hex", "#000000");

    useEffect(() => {
        props.changebgColor(bgColor.hex);
    }, [bgColor]);

    useEffect(() => {
        props.changefgColor(fgColor.hex);
    }, [fgColor]);

    return (
        <>
            <div className="col-4">
                <h4>Background Color</h4>
                <ColorPicker width={350} height={200} color={bgColor} onChange={setBgColor} hideRGB hideHSV rcp-light />
                <h4>ForeGround Color</h4>
                <ColorPicker width={350} height={200} color={fgColor} onChange={setFgColor} hideRGB hideHSV rcp-light />
            </div>
        </>
    )
};
export default QRColor;
