import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import Link from 'next/link';
import Head from 'next/head';

const Header = () => {

    return (
        <>
            <Head>
                <title>Qr Code Generator</title>
                <meta name="description" content="Qr Code Generator" />
                <link rel="icon" href="/favicon.ico" />
            </Head>    
        </>
    )
};

export default Header;
