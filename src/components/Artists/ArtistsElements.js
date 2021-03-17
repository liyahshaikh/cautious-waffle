import styled from 'styled-components'



export const ArtistContent = styled.div`
position: absolute;
display: grid;
grid-template-columns: auto auto;
column-gap: 2vw;
width: 100%;
top: 120vh;

iframe{
    
    display: grid;
     
    width:30vw;
    height: 20vw;
    padding: 20vh;
    padding-top:38vh;
    z-index: 100;
    
         
         

}
.textMain{
    display: grid;
    padding: 10vw;
    padding-top:40vh;
    
    line-height: 1.9;
    width: 70%;
float: left;
    
}

`

export const ArtistTitle= styled.div`
position: absolute;
width: 100%;

padding-top: 10vh;
padding-bottom: 0;

font-family: NexaBold;
font-size: 35px;
text-align: center;
z-index: 100;
`

