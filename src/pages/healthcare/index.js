import React, { Component } from 'react'
import'../components/index.js';
import foto from '../components/image/10 maternity photoshoot ideas _ feature.jpg'

import videoFile from './video/video.mp4.mp4';
// import { Title } from "../components/constant";
// import{Paragraph} from"../components/constant";
import{array} from"../components/constant";




const index=()=> {
  return (
    <div className='health'>

        <div className='care'>
        <img src={foto}>
        </img>
        <h1>YOUR HEALTH is our priority</h1>
        <p>COME AND TAKE CARE OF YOUR HEALTH</p></div>
        <div className='mamcare'>
            <div className='care'>
<h1>Mama</h1>
<p>Every pregnancy journey is
 unique, and it's important
 for pregnant mothers
 to consult with healthcare 
professionals for personalized
 guidance and support
 throughout the process. 
They play a crucial role in
 ensuring a healthy pregnancy
 and a positive experience for
 both the mother and the baby.</p>
 </div>
 <div className='mam'>
    <h1>Baby</h1>
    <p>It's important to remember
 that every baby is unique,
 and they develop at their own pace.
 If you have specific concerns or
 questions about a baby's health
 or development, it's best to consult
 with healthcare professionals
 who can provide personalized 
guidance and support.</p>

 </div>
 </div>
 <div className='more'>
    <button>Learn more</button>

 </div>
 <div>
      <video  autoPlay controls>
      <source src={videoFile} type="baby.mp4" />
           Add additional source tags for different video formats (e.g., WebM, Ogg)  
         Your browser does not support the video tag.  
      </video>
    </div>
    {array.map((detail)=>(
        <div className="card">
<h1>{detail.Tittle}</h1>
<p>{detail.PARAGRAPH}</p>
<button>{detail.Button}</button>
</div>

    ))}
    <div className='more'>
        <div className='first'>
            <h1>Mother from the first day knowing she's pregnancy up to 3 months </h1>
            <p> During the first three months of pregnancy, also known as the first trimester,  <br></br>many significant changes occur in a woman's body as the pregnancy progresses. <br></br> Here is some information about the stages and developments during this period:

            Confirmation of Pregnancy:

A woman may suspect she is pregnant due to missed periods or early pregnancy symptoms like nausea, breast tenderness, fatigue, and frequent urination.
A pregnancy test, either a home pregnancy test or a blood test, can confirm pregnancy.
Embryo Development:

Weeks 1-4: Fertilization typically occurs during week 2. The fertilized egg implants into the uterine lining and forms an embryo. The cells start to differentiate, and the neural tube begins to form.
Weeks 5-8: Major organs, such as the heart, brain, and lungs, begin to form. The embryo develops limb buds, and facial features become visible. The heartbeat can often be detected around week 6.
Weeks 9-12: The embryo is now called a fetus. It grows rapidly, and organs continue to develop. By week 12, the fetus has all essential body structures, including fingers, toes, and external genitalia.</p>

        </div>


    </div>

    </div>
  )
}

export default index;