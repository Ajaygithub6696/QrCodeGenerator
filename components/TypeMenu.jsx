import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const TypeMenu = (props) => {

    var [types, setTypes] = useState('URL');

    const changeType = (data) => {
        setTypes(data);
        props.changeType(data);
    };

    return (
        <>
            <div className="row">
                <div className="mb-3 ms-3">
                    <button className={`${types == 'URL' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "URL" ) } >URL</button>
                    <button className={`${types == 'TEXT' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "TEXT" ) } >TEXT</button>
                    <button className={`${types == 'EMAIL' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "EMAIL" ) } >EMAIL</button>
                    <button className={`${types == 'SMS' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "SMS" ) } >SMS</button>
                    <button className={`${types == 'VCARD' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "VCARD" ) } >VCARD</button>
                    {/* <button className={`${types == 'LOCATION' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "LOCATION" ) } >LOCATION</button>
                    <button className={`${types == 'FACEBOOK' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "FACEBOOK" ) } >FACEBOOK</button>
                    <button className={`${types == 'TWITTER' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "TWITTER" ) } >TWITTER</button> */}
                    <button className={`${types == 'YOUTUBE' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "YOUTUBE" ) } >YOUTUBE</button>
                    <button className={`${types == 'WIFI' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "WIFI" ) } >WIFI</button>
                    <button className={`${types == 'EVENT' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "EVENT" ) } >EVENT</button>
                    <button className={`${types == 'INSTAGRAM' ? 'active' : ''} btn btn-outline-dark mb-3 ms-3`} onClick={(e) => changeType( "INSTAGRAM" ) } >INSTAGRAM</button>
                </div> 
            </div>
        </>
    )
};

export default TypeMenu;
