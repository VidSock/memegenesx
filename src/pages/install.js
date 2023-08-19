import React, { useState } from "react";
import useSiteMetadata from "../hooks/SiteMetadata"
// import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
import styled from "styled-components"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
import Intro from "../../static/assets/grid-loader.svg"
// import useNetlifyIdentity from '../components/useNetlifyIdentity';
const CustomBox = styled.div`


`

function Pirate() {
  const { showNav } = useSiteMetadata()

  


  return (

    <CustomBox>
<Layout>
<Helmet>

  
        <body id="body" className="utility scroll" />
      </Helmet>

      {showNav ? (
        <div className="spacer" style={{ height: "70px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}

<section id="feature" order="1" name="feature" className="print scroll-area" style={{ display:'', height:'100vh', maxHeight:'', margin:'0 auto 10vh auto', padding:'0 0 0 0', position:'relative',

 alignContent:'center', display:'flex', textAlign:'left', justifyContent:'start', verticalAlign:'center',
  color:'#fff',
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  // background:'rgba(0,0,0,0.50)',
  // backdropFilter:'blur(8px)',
  // borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  // maxWidth:'95%',
  // border:'1px solid #333',
  background:'#000'

}}>
<div className="scroll-container1" style={{display:'flex', justifyContent:'center', maxWidth:'', height:'calc(100vh - 70px)', margin:'0 auto 0 auto', position:'relative', left:'0', right:'0', top:'0'}}>

<div style={{display:'grid', justifyContent:'center', alignItems:'center', position:'relative', left:'', top:'', cursor:''}}><Intro style={{height:'100vh', width:'100vw', position:'relative', zIndex:'0', top:'0', objectFit:'cover',}} /></div>
</div>
</section>
{/* <div className="scroll-container1" style={{display:'flex', justifyContent:'start', maxWidth:'', height:'calc(100vh - 70px)', margin:'0 auto 0 auto', position:'relative', left:'0', right:'0', top:'0'}}>
<iframe title="Pirate Frame" id="youtube2" className="blog-video1" width="100%" height="400" src="/admin/" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'calc(100vh - 70px)', minHeight:'', border:'0px solid yellow', borderRadius:'0', padding:'0 0 0 0' }} />
</div> */}





</Layout>



      </CustomBox>
  );
}

export default Pirate;


