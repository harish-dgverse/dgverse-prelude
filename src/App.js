import React from 'react';
import logo from '../src/Assets/logo.svg';
import discod from '../src/Assets/discord.png';
import flag from '../src/Assets/flagdg.png';
import twiter from '../src/Assets/twitter2.png';
import linkedin from '../src/Assets/linkedin.png';
import instagram from '../src/Assets/instagram.png';
import comming from '../src/Assets/comingsoon.png';
import './App.css';
import newsHead from '../src/Assets/newshead.png';
import main from '../src/Assets/art_bk.svg';
import rocket from '../src/Assets/rocketdg.png';
import copyright from '../src/Assets/copyright.png';
import logobottom from '../src/Assets/logobottom.png';
import Grid from '@mui/material/Grid';
import 'animate.css';
import ContactUs from './Components/ContactUs'

function App() {
  return (
    <div className="App">
      <div className='outer-section'>
        <div className='header'>
          <div className='logo'>
            <img src={logo} />
          </div>
          <div className='newshead'>
            <img src={newsHead} />
          </div>
          <div className='support'>
            {/* <span className='supporticon'><img src={discod} /></span> */}
            <span className='supporticon'>
              <a target="_blank" href='https://twitter.com/dgverse1?t=Gwe_Ll-UC002l2G5mMil8A&s=08'>
              <img src={twiter} />
              </a>
            </span>
            <span className='supporticon'>
              <a target="_blank" href='https://www.linkedin.com/company/dgverse/'>
              <img src={linkedin} />
              </a>
            </span>
            
            {/* <span className='supporticon'><img src={instagram} /></span> */}
          </div>
        </div>
        <div className='commingsoon'>
          <marquee className="slide" width="auto" direction="right" height="80px">
            <img src={comming} />
          </marquee>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
          <Grid item md={12} className="mobileview">
              <div className='cardview'>
                <h3 className='title maintitle'>Be a part of digital ideology where the world will be tokenized.</h3>
                <span className='maincard'>
                  <img src={main} />
                </span>
                <p className='paragraph'>Ever wondered what is the hype and hoopla regarding the so called monkey pictures. Well, dont be any more. We are here to introduce the real essence of web3.0 and it every so lasting use cases. Do you want to sell an art piece. We can help you. Well, others can also right. Are you fed of the fees involved or death speed. Then there is no one better but us. And yes, the WORLD will be tokenized</p>
              </div>
            </Grid>
            <Grid item md={12}>
              <div className='cardview'>
                <h3 className='title'>dg market 2.0</h3>
                <span className='imagecard'>
                  <img src={rocket} />
                </span>
                <p className='paragraph'>Come here to experiance the difference. What is 2.0? Nothing but the most latest experiance that can be offered to you. NFTs are not mere monkey pictures anymore. It does have value, it does have utility.</p>
              </div>
            </Grid>
            <Grid item md={12}>
              <div className='cardview'>
                <h3 className='title'>dg space.</h3>
                <span className='imagecard'>
                  <img src={flag} />
                </span>
                <p className='paragraph'>Real expansion or use case of web 3.0 will be explored here. You have a community and want somehow give perks to them foolproof. Come to us, we can provide you all the service required without any pinch of security threat</p>
              </div>
            </Grid>
            <Grid className='otherdevice' item md={12}>
              <ContactUs />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={8} className="middlesview">
            <Grid item md={12} className="otherdevice">
              <div className='cardview'>
                <h3 className='title maintitle'>Be a part of digital ideology where the world will be tokenized.</h3>
                <span className='maincard'>
                  <img src={main} />
                </span>
                <p className='paragraph'>Ever wondered what is the hype and hoopla regarding the so called monkey pictures. Well, dont be any more. We are here to introduce the real essence of web3.0 and it every so lasting use cases. Do you want to sell an art piece. We can help you. Well, others can also right. Are you fed of the fees involved or death speed. Then there is no one better but us. And yes, the WORLD will be tokenized</p>
              </div>
            </Grid>
            <Grid item md={12}>
              <div className='cardview seperation'>
                <h3 className='title'>About Us</h3>
                <p className='paragraph'>We symbolizes NFT as service solution. We help enterprise, brands, celebrities, influencers and creators to lanuch, manage their NFT and much more. Coupled with our service and product consumers can easily leverage the advantages of NFT. Making web 3.0 user experiance seamless is our north star.</p>
              </div>
            </Grid>
            <Grid className='mobileview' item md={12}>
              <ContactUs />
            </Grid>
            <div className='copyright'>
              <p>copyright 2022 <span className='copy'><img src={copyright}/></span> <span className='logoend'><img src={logobottom}/></span></p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
