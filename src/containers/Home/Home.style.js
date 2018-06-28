import styled from 'styled-components';
export const Image = styled.img`
width: 100px;
`;
export const HeroImage = styled.div`
height: 100vh;
background-image: url('${require('../../assets/coding.gif')}');
background-repeat:no-repeat;
background-size:cover;
background-position:cover;
display:flex;
flex-direction:column;

text-align:center;
color: #000;
`;

export const RevealP = styled.p`
position:relative;
&:after {
	content:'';
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:black;
	transform-origin:left;
	transform:rotateY(90deg);
	transition: transform 3s;
}



`;
