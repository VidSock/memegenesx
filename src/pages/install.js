import React, { useState } from "react";
import useSiteMetadata from "../hooks/SiteMetadata"
// import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
import styled from "styled-components"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
import Intro from "../../static/assets/textual.svg"
import Intro2 from "../../static/assets/install-intro.svg"
import ContactForm from "../components/Contact-inc"
// import useNetlifyIdentity from '../components/useNetlifyIdentity';
const CustomBox = styled.div`


`

function Pirate() {
  const { showNav } = useSiteMetadata()

  


  return (

    <CustomBox>
<Layout>
<Helmet>

  
        <body id="body" className="install " />
      </Helmet>

      {showNav ? (
        <div className="spacer" style={{ height: "0px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}

<div className="scroll-container">


{/* <div style={{display:'grid', justifyContent:'start', alignItems:'start', position:'relative', left:'', top:'', cursor:''}}> */}
  
<Intro style={{height:'100vh', width:'100vw', position:'fixed', zIndex:'-1', top:'', objectFit:'cover',}} />

<section style={{height:''}}>
<Intro2 style={{height:'100vh', width:'100vw', position:'relative', zIndex:'1', top:'', objectFit:'cover',}} />
  </section>
  {/* </div> */}


<section style={{ display:'', height:'', maxHeight:'', margin:'10vh auto 10vh auto', padding:'0 0 0 0', position:'relative',
 alignContent:'center', display:'grid', textAlign:'left', placeContent:'center', verticalAlign:'center',
  color:'#fff',
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  textShadow:'0 2px 7px #000',
  textAlign:'center'
}}>

  Please tell us a bit about you:

<ContactForm />
</section>


<section id="feature" order="1" name="feature" className="print scroll-area" style={{ display:'', height:'', maxHeight:'', margin:'10vh auto 10vh auto', padding:'0 0 0 0', position:'relative',
 alignContent:'center', display:'grid', textAlign:'left', placeContent:'center', verticalAlign:'center',
  color:'#fff',
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  textShadow:'0 2px 7px #000'
}}>
<a style={{display:'grid', placeContent:'center', margin:'0 auto 0 auto'}} class="button" href="https://app.netlify.com/start/deploy?repository=https://github.com/completeweb-site/base&amp;stack=cms&amp;SITE_LOGO=https://completeweb.site/assets/logo.svg" rel="nofollow">
Complete Your Sign Up, Matey!
</a>
</section>






</div>

{/* <div className="scroll-container1" style={{display:'flex', justifyContent:'start', maxWidth:'', height:'calc(100vh - 70px)', margin:'0 auto 0 auto', position:'relative', left:'0', right:'0', top:'0'}}>
<iframe title="Pirate Frame" id="youtube2" className="blog-video1" width="100%" height="400" src="https://app.netlify.com/start/deploy?repository=https://github.com/completeweb-site/base&amp;stack=cms&amp;SITE_LOGO=https://completeweb.site/assets/logo.svg" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'calc(100vh - 70px)', minHeight:'', border:'0px solid yellow', borderRadius:'0', padding:'0 0 0 0' }} />
</div> */}





</Layout>



      </CustomBox>
  );
}

export default Pirate;


