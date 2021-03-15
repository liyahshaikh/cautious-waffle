import styled from 'styled-components'



export const ArtistContent = styled.div`
position: absolute;
display: grid;
grid-template-columns: auto auto;
column-gap: 2vw;
width: 100%;
padding-bottom: 0px;

iframe{
    
    display: grid;
     
    width:25vw;
    height: 20vw;
    padding: 15vw;
    padding-top:38vh;
        z-index: 100;
    
         
         

}
.textMain{
    display: grid;
    padding: 10vw;
    padding-top:40vh;
    width: 60%;
    line-height: 1.9;
    
float: left;
    
}

`

export const ArtistTitle= styled.div`
position: absolute;
width: 100%;

padding-top: 100px;

font-family: NexaBold;
font-size: 35px;
text-align: center;
`

