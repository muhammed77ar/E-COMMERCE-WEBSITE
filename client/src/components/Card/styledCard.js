import styled from "styled-components"

export const CardStyle = styled.div`
width: 250px;
display: flex;
flex-direction: column;
gap: 10px;
box-sizing: border-box;
margin: 20px;
.image{
    width: 250px;
    height: 300px;
    overflow: hidden;
    position: relative;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    &:hover{
        .secondImage{
            z-index: 2;
        }
    }
    span{
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: white;
        color: teal;
        padding: 3px 5px;
        z-index: 3;
        font-size: 12px;
        font-weight: 700;
        border-radius: 5px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
    .firstImage{
        z-index: 1;
    }
}
h2{
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;
}
.price{
    display: flex;
    gap: 20px;
    line-height: 0px;
    h3{
        font-size: 18px;
        font-weight: 500;
        color: black;

        &:first-child{
            color:  rgb(155, 155, 155);
            text-decoration: line-through;
        }
    }
}

`