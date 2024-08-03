import styled from "styled-components"

const mobileBreakPoint = "790px"

export const Category = styled.div`
height: 80vh;
margin: 10px;
display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
  @media screen and (max-width: ${mobileBreakPoint}) {
    grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(2, 1fr);
    }

.div1 {
  background-image: url("../imgs/Campground Disco.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	grid-area: 1/1/2/2;
	background-color: rgba(90,56,172, 0.5);
  position: relative;
  transition: 0.3s ease;
  &:hover{
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  @media screen and (max-width: ${mobileBreakPoint}) {
    grid-area: 1/1/2/2;
	background-color: rgba(23,102,52, 0.5);
    }
}
.div2 {
  background-image: url("../imgs/The Essentials Collection (1).jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	grid-area: 2/1/3/2;
	background-color: rgba(87,53,234, 0.5);
  position: relative;
  transition: 0.3s ease;
  &:hover{
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  @media screen and (max-width: ${mobileBreakPoint}) {
    grid-area: 1/2/2/3;
	background-color: rgba(29,26,171, 0.5);
}
}
.div3 {
  background-image: url("../imgs/download (2).jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	grid-area: 1 / 2 / 3 / 3;
	background-color: rgba(223,202,88, 0.5);
  position: relative;
  transition: 0.3s ease;
  &:hover{
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  @media screen and (max-width: ${mobileBreakPoint}) {
    grid-area: 2/1/3/2;
	background-color: rgba(63,192,225, 0.5);
}
}
.div4 {
  background-image: url("../imgs/download (9).jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	grid-area: 1/3/2/4;
	background-color: rgba(140,100,90, 0.5);
  position: relative;
  transition: 0.3s ease;
  &:hover{
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  @media screen and (max-width: ${mobileBreakPoint}) {
  	grid-area: 2/2/3/3;
	background-color: rgba(108,80,107, 0.5);
}
}
.div5 {
  background-image: url("../imgs/download (10).jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	grid-area: 1/4/2/5;
	background-color: rgba(80,36,127, 0.5);
  position: relative;
  transition: 0.3s ease;
  &:hover{
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  @media screen and (max-width: ${mobileBreakPoint}) {
    grid-area: 3/1/4/2;
	background-color: rgba(140,52,192, 0.5);
}
}
.div6 {
  background-image: url("../imgs/7008f64b23dd630c61164cd0fe6129eb015c080b.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	grid-area: 2 / 3 / 3 / 5;
	background-color: rgba(246,38,1, 0.5);
  position: relative;
  transition: 0.3s ease;
  &:hover{
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  @media screen and (max-width: ${mobileBreakPoint}) {
  	grid-area: 3/2/4/3;
	background-color: rgba(38,184,106, 0.5);
}
}

.link{
  text-decoration: none;
  color: black;
}
button{
  padding: 10px;
  border: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  min-width: 100%;
  height: 100%;
  width: fit-content;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.311);
  text-transform: capitalize ;
  font-weight: 700;
  font-size: 25px;
  color: white;
  }
`