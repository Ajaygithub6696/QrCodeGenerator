import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import GoogleMapReact from 'google-map-react';
import DatePicker from "react-datepicker";
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";


const MainComponent = (props) => {

    var [types, setTypes] = useState('URL');

    var [url, setURL] = useState('Hello World');
    var [text, setText] = useState('Hello World');

    var [cfname, setCfname] = useState('');
    var [clname, setClname] = useState('');
    var [corg, setCorg] = useState('');
    var [ctitle, setCtitle] = useState('');
    var [cemail, setCemail] = useState('');
    var [cphone, setCphone] = useState('');
    var [ccell, setCcell] = useState('');
    var [cstreet, setCstreet] = useState('');
    var [ccity, setCcity] = useState('');
    var [cregion, setCregion] = useState('');
    var [cpostcode, setCpostcode] = useState('');
    var [ccountry, setCcountry] = useState('');
    var [curl, setCurl] = useState('');

    var [sphone, setSphone] = useState('');
    var [smsg, setSmsg] = useState('');

    var [email, setEemail] = useState('');
    var [subject, setEsubject] = useState('');
    var [message, setEmessage] = useState('');

    var [youtubeURL, setYoutubeURL] = useState('');

    var [wifiSSID, setWifiSSID] = useState('');
    var [wifiPass, setWifiPass] = useState('');
    var [wifiEncryption, setWifiEncryption] = useState('');

    var [eventTitle, setEventTitle] = useState('');
    var [eventLocation, setEventLocation] = useState('');
    var [eventStartDate, setEventStartDate] = useState(new Date());
    var [eventEndDate, setEventEndDate] = useState(new Date());

    var [instaLink, setInstaLink] = useState('');

    const defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };
  
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        console.log("Map",map);
        console.log("Maps",maps);
      };

    useEffect(() => {
        setTypes(props.types);
    }, [props]);

    async function DownloadInstaFid() {
        console.log(instaLink);
        // await axios.get(instaLink).then(res => {  
        //     console.log("Response:-",res);
        // }).catch(async error => {
        
        // });


        // https://www.instagram.com/p/Ce2Z2bmgjs5/

        // https://graph.instagram.com/me?fields=id,username&access_token=IGQVJ...

        // https://graph.instagram.com/17895695668004550?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJ...

        // setInstaLink('https://www.instagram.com/reel/Ce2Z2bmgjs5/&access_token=EAAFAmwgeJWABANgC5ZCmBJ9JqOzieJqjonN8s9VGNjEtbKAJS7rN6QZBYriP0khkzSHV4uQ52wZAMsYZAZBfshTG4ZBcDZBEdc8l8oZBYm9yEE1rodVAZBnOw9LSJ4UEZCnKnjFczexKRUdh3RpDSkCgMOPrtDVZBpjwFdB9t1kyjdsTjmz7H7MAZCZC6VUpEVVnjPTUkdRsOi8lkZBtNSZBwIeOQGNiZCBhENASb2hlihZCn7svTbJi2vfTuPVhCm2SmvbZC2CCsZD');

        // await axios.get('https://www.instagram.com/reel/Ce2Z2bmgjs5/&access_token=EAAFAmwgeJWABANgC5ZCmBJ9JqOzieJqjonN8s9VGNjEtbKAJS7rN6QZBYriP0khkzSHV4uQ52wZAMsYZAZBfshTG4ZBcDZBEdc8l8oZBYm9yEE1rodVAZBnOw9LSJ4UEZCnKnjFczexKRUdh3RpDSkCgMOPrtDVZBpjwFdB9t1kyjdsTjmz7H7MAZCZC6VUpEVVnjPTUkdRsOi8lkZBtNSZBwIeOQGNiZCBhENASb2hlihZCn7svTbJi2vfTuPVhCm2SmvbZC2CCsZD',{ headers: {"Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Credentials" : true}}).then( async (response) =>  {
        //     console.log("Response:-",response);
        // });    

    }

    function generateQR(type) {
        if(type == 'URL'){
            props.generateQR(url);
        }else if(type == 'Text'){
            props.generateQR(text);
        }else if(type == 'Contact'){
            var data = 'BEGIN:VCARD\nVERSION:3.0\nN:'+clname+';'+cfname+'\nFN:'+cfname+' '+clname+'\nTITLE:'+ctitle+'\nORG:'+corg+'\nURL:'+curl+'\nEMAIL;TYPE=INTERNET:'+cemail+'\nTEL;TYPE=voice,work,pref:'+cphone+'\nTEL;TYPE=voice,cell,pref:'+ccell+'\nADR:;;'+cstreet+';'+ccity+';'+cpostcode+';'+cregion+';'+ccountry+'\nEND:VCARD' ; 
            props.generateQR(data);
        }else if(type == 'SMS'){
            var data = 'SMSTO:'+sphone+':'+smsg;
            props.generateQR(data);
        }else if(type == 'Email'){
            var data = 'mailto:'+email+'?subject='+subject+'&body='+message;
            props.generateQR(data);
        }else if(type == 'YOUTUBE'){
            props.generateQR(youtubeURL);
        }else if(type == 'WIFI'){
            var data = 'WIFI:S:'+wifiSSID+';T:'+wifiEncryption+';P:'+wifiPass+';;';
            props.generateQR(data);
        }else if(type == 'EVENT'){
            var data = 'BEGIN:VEVENT\nSUMMARY:'+eventTitle+'\nLOCATION:'+eventLocation+'\nDTSTART:'+eventStartDate+'\nDTEND:'+eventEndDate+'\nEND:VEVENT\n';
            props.generateQR(data);
        }        
    }
    
    const URLComponent = () => {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label">URL</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your URL" onChange={(e) => setURL(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={(e) => generateQR("URL") } >Generate QR</button>
                </div>
            </>
        );
    };
    const YoutubeComponent = () => {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label">Your Youtube URL</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Youtube URL" onChange={(e) => setYoutubeURL(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={(e) => generateQR("YOUTUBE") } >Generate QR</button>
                </div>
            </>
        );
    };
    const WifiComponent = () => {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label">Wireless SSID</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e) => setWifiSSID(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e) => setWifiPass(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Encryption</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e) => setWifiEncryption(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={(e) => generateQR("WIFI") } >Generate QR</button>
                </div>
            </>
        );
    };
    const TextComponent = () => {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label">Text</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Text" onChange={(e) => setText(e.target.value) } />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={(e) => generateQR("Text") } >Generate QR</button>
                </div>
            </>
        );
    };
    const ContactComponent = () => {
        return (
            <>
                <div className="row">
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="First Name" onChange={(e) => setCfname(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" onChange={(e) => setClname(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Organization</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Organization" onChange={(e) => setCorg(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={(e) => setCtitle(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" onChange={(e) => setCemail(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone" onChange={(e) => setCphone(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cell</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Cell" onChange={(e) => setCcell(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Street</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Street" onChange={(e) => setCstreet(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="City" onChange={(e) => setCcity(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Region</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Region" onChange={(e) => setCregion(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">PostCode</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="PostCode" onChange={(e) => setCpostcode(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Country</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Country" onChange={(e) => setCcountry(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">URL</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="URL" onChange={(e) => setCurl(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" onClick={(e) => generateQR("Contact") }>Generate QR</button>
                    </div>
                </div>
            </>
        );
    };
    const EmailComponent = () => {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" onChange={(e) => setEemail(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Subject" onChange={(e) => setEsubject(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Text Here" onChange={(e) => setEmessage(e.target.value) }></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={(e) => generateQR("Email") }>Generate QR</button>
                </div>
            </>
        );
    };
    const SMSComponent = () => {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Phone Number" onChange={(e) => setSphone(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Text Here" onChange={(e) => setSmsg(e.target.value) }  ></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary"onClick={(e) => generateQR("SMS") }>Generate QR</button>
                </div>
            </>
        );
    };
    const InstagramComponent = () => {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label">Link</label>
                    <input type="text" className="form-control" onChange={(e) => setInstaLink(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary"onClick={(e) => setInstaLink("") }>Clear</button>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary"onClick={(e) => DownloadInstaFid() }>Download</button>
                </div>
            </>
        );
    };



    const AnyReactComponent = ({ text }) => (
        <div style={{
          color: 'white', 
          background: 'grey',
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)'
        }}>
          {text}
        </div>
      );

    const EventComponent = () => {
        return (
            <>
                <div className="mb-3">
                    <label className="form-label">Event Title</label>
                    <input type="text" className="form-control" placeholder="Event Title" onChange={(e) => setEventTitle(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Event Location</label>
                    <input type="text" className="form-control" placeholder="Event Location" onChange={(e) => setEventLocation(e.target.value) }  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Start Date</label>
                    <DatePicker className="form-control"  selected={eventStartDate} onChange={(e) => setEventStartDate(e)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">End Date</label>
                    <DatePicker className="form-control"  selected={eventEndDate} onChange={(e) => setEventEndDate(e)} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary"onClick={(e) => generateQR("EVENT") }>Generate QR</button>
                </div>
            </>
        );
    };

   

      

    const LocationComponent = () => {
        return (
            <>
             {/* <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  "AIzaSyDP7xB7i8bKBD16bbE6uEm9kzrdPzHj_X0"}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals = {true}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div> */}


            {/* <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyDP7xB7i8bKBD16bbE6uEm9kzrdPzHj_X0" }} defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} yesIWantToUseGoogleMapApiInternals  >
                <AnyReactComponent lat={59.955413} lng={30.337844} text={'Kreyser Avrora'} />
            </GoogleMapReact> */}
             

            </>
        );
    };

   



    return (
        <>
              <div className="col-6">
              {
                  types && types == 'URL' ? URLComponent() : types == 'TEXT' ? TextComponent() : types == 'EMAIL' ? EmailComponent() : types == 'VCARD' ? ContactComponent() : types == 'SMS' ? SMSComponent() : types == 'YOUTUBE' ?  YoutubeComponent() : types == 'WIFI' ?  WifiComponent() : types == 'LOCATION' ?  LocationComponent() : types == 'EVENT' ? EventComponent() : types == 'INSTAGRAM' ? InstagramComponent() : ''
              }
           </div>
        </>
    )
};
export default MainComponent;
