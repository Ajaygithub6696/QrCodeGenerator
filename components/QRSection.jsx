import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import QRCode from "react-qr-code";
var download = require("downloadjs");
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import * as htmlToImage from 'html-to-image';
const QRSection = (props) => {

    var [value, setValue] = useState(props.data ? props.data : 'TEST');
    var [bgColor, setBgColor] = useState(props.bgColor ? props.bgColor : '#ffffff');
    var [fgColor, setFgColor] = useState(props.fgColor ? props.fgColor : '#000000');

    useEffect(() => {
        setValue(props.data);
        setBgColor(props.bgColor);
        setFgColor(props.fgColor);
    }, [props]);

    function DownlodeChartImage(type) {
        if(type == 'png'){
            htmlToImage.toPng(document.getElementById('helll2')).then(function (dataUrl) { download(dataUrl, `1.png`, "image/png" );});
        }else if(type == 'svg'){
            htmlToImage.toSvg(document.getElementById('helll2')).then(function (dataUrl) { download(dataUrl, `1.svg`, "image/svg+xml" );});
        }else if(type == 'jpeg'){
            htmlToImage.toJpeg(document.getElementById('helll2')).then(function (dataUrl) { download(dataUrl, `1.jpeg`, "image/jpeg" );});
        }
    }

    return (
        <>
             <div className="col-3">
                <QRCode value={value} bgColor={bgColor} fgColor={fgColor} id="helll2"/>
                 <button className="m-3 btn btn-primary" onClick={() => DownlodeChartImage('svg')} >Generate QR</button>
            </div>
        </>
    )
};
export default QRSection;
