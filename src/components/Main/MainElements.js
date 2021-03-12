import styled from 'styled-components'


export const MainContainer= styled.div`
background-color: #ffffff;
padding-top: 20vh;
line-height: 1.6;


`

export const SemiCircleLeft = styled.div`
z-index: 0;
padding-top: 20vh;
position: relative;
background-color: #f5f5f5;
margin: 0px; 
height: 1200px;
width: 600px;
border-top-right-radius: 600px;
border-bottom-right-radius: 600px;
`
export const MainTitle = styled.p`
font-family: NexaBold, sans-serif;
padding-left: 10%;
padding-right: 10%;

position: absolute;
top: 0vh;
left: 4vw;

font-weight: 500;
color: #000000;
font-size: 50px;



`

export const MainP= styled.p`
width: 100%;
padding-top: 30px;
font-family: NexaLight, sans-serif;
font-size: 15px;
color: #000000;
padding-left: 10%;

position: absolute;

top: 20vh;
left: 5vw;




`
export const ProfileButton = styled.a`
    border: none;
  background-color: transparent;
  font-family: NexaBold;
  align-self: center;
  padding-right: 0;
    
  justify-content: center;
  border-bottom: 1px solid #000;
    margin: 0 auto;
   position: absolute;
   top: 50vh;
   left: 70vw;
   width: 20%;
    
  cursor: pointer;
  font-size: 15px;

`
export const WhatWeDoSection = styled.div`
display: grid;
column-rule: 1px solid #000;
position: relative;
top: 80vh;
left: 13vw;
column-gap: 50vh;
width: 100%;
row-gap: 20vh;
line-height: 1.9;
grid-template-columns: repeat(2, 20vw);
grid-template-rows: repeat(2, 250px);

`
export const WhatWeDoSectionContent1 = styled.p`



`
export const Title1 = styled.p`
font-family: NexaBold;
font-size: 35px;
`
export const MainSection1 = styled.p`
font-family: NexaLight;

`

export const WhatWeDoSectionContent2 = styled.p`



`
export const Title2 = styled.p`
font-family: NexaBold;
font-size: 35px;
`
export const MainSection2 = styled.p`
font-family: NexaLight;
`

export const WhatWeDoSectionContent3 = styled.p`
padding-top: 50px;
`
export const Title3 = styled.p`
font-family: NexaBold;
font-size: 35px;
`
export const MainSection3 = styled.p`
font-family: NexaLight;
`

export const WhatWeDoSectionContent4 = styled.p``
export const Title4 = styled.p`
font-family: NexaBold;
font-size: 35px;
`
export const MainSection4 = styled.p`

font-family: NexaLight;
`


export const SemiCircleRight = styled.div`
z-index: 0;
padding-top: 20vh;
float: right;
position: relative;

background-color: #f5f5f5;
margin: 0px; 
height: 1200px;
width: 600px;
border-top-left-radius: 600px;
border-bottom-left-radius: 600px;
`


export const OurValuesSection = styled.div`
position: absolute;
top: 150vh;
right: 43vw;
width: 100%;
z-index: 100;
`
export const OurValuesContent = styled.div`
width: 100%;
position absolute;
float: left;


`
export const OurValuesTitle= styled.h1`
position: absolute;
top: 0vh;
text-align: center;
font-family: NexaBold, sans-serif;
padding-left: 25%;
padding-right: 10%;
font-weight: 500;
color: #000000;
font-size: 50px;
width: 100%;
`

export const OurValuesP = styled.div`
position: absolute;
top: 20vh;
padding-top: 10vh;

.title{
  font-family: NexaBold, sans-serif;
  font-size: 20px;
  padding-right: 10vw;
  
}
.main{
  color: gray;
  width: 50vw;
}




`
export const OurTeamContent = styled.div`
position: absolute;
width: 100%;
padding: 8vw;
top: 40vh;
left: 8vw;
line-height: 2.5;

.our-team{
  display: grid;
  grid-template-columns: 70% 30%;
  
  column-gap: 50%;
  
  
  
}

.btn-apply-now{
    

  width: 100%;
  border: none;
background-color: transparent;
font-family: NexaBold;
align-self: center;
text-align: center;
padding: 0;
justify-content: center;
border-bottom: 1px solid #000;
  margin: 0 auto;
  
  
cursor: pointer;
font-size: 25px;


}

.head{
  font-size: 50px;
  font-family: NexaBold;
}
`
