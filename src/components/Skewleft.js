import React from 'react'
import styled from 'styled-components'

const Skewleft = () => {
  const Skew1 = styled.section`
  width:100%;
 height:50px;
 position:absolute;
 left:0px;
 top:0px;
 right:0px;
 background: linear-gradient(to right top, #e1e1e1  49%, white 50%);
 
 `;
 const Skew2 = styled.section`
 width:100%;
height:50px;
position:absolute;
left:0px;
top:50px;
right:0px;
background: linear-gradient(to right bottom, #5a1466  49%, white 50%);

`;
return (
    <>
        <Skew1></Skew1>
        <Skew2></Skew2>
    </>
  )
}

export default Skewleft


