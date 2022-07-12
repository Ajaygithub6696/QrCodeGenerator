import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import TopBar from '../components/TopBar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import TypeMenu from '../components/TypeMenu';
import MainComponent from '../components/MainComponent';
import QRColor from '../components/QRColor';

import QRSection from '../components/QRSection';

export default function Home(props) {

  var [types, setTypes] = useState('URL');
  var [qrData, setQrdata] = useState('');

  var [bgColor, setBgColor] = useState('#ffffff');
  var [fgColor, setFgColor] = useState('#000000');

  function changeType(data) {
      setTypes(data);
  }
  function generateQR(data) {
      setQrdata(data);
  }
  function changebgColor(data) {
    setBgColor(data);
  }
  function changefgColor(data) {
    setFgColor(data);
  }
  useEffect(() => {
  
  }, [props]);



  return (
      <>
        <div className='container-fluid mx-auto'>
            <div className="row mb-3 mx-auto">
              <TopBar/>
              <Menu/>
            </div>  
            <TypeMenu changeType={changeType} />
            <div className="row mb-3 mx-auto">
                <MainComponent types={types} generateQR={generateQR} />
                <QRColor changebgColor={changebgColor} changefgColor={changefgColor}/>
                <QRSection data={qrData} bgColor={bgColor} fgColor={fgColor} />
            </div>
        </div>  
        <Footer/>
      </>
  )
}
