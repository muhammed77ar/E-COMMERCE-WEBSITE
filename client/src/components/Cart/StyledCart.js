import styled from "styled-components";

const mobileBreakPoint = "790px";

export const StyledCart = styled.div`
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 21px;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 21px;
  }
  position: absolute;
  right: 20px;
  top: 60px;
  z-index: 99;
  background-color: white;
  border: 6px solid rgb(208, 208, 208);
  padding: 20px;
  width: 400px;
  height: 100vh;
  overflow: auto;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media screen and (max-width: ${mobileBreakPoint}) {
    width: 100%;
    right: 0;
    top: 45px;
  }

  h1 {
    margin-bottom: 20px;
    color: grey;
    font-weight: 400;
    font-size: 24px;
  }
  hr {
    width: 100%;
    margin: 10px 0;
    height: 3px;
    background-color: black;
    border-radius: 20px;
  }

  .product {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    img {
      width: 100px;
      height: 150px;
      object-fit: cover;
    }
    .details {
      h1 {
        font-size: 18px;
        font-weight: 500;
      }
      p {
        color: gray;
        margin-bottom: 10px 0;
        font-size: 14px;
      }
      .price {
        color: darkgreen;
      }
    }
    .trashIcon {
      font-size: 60px;
      color: red;
      cursor: pointer;
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    background-color: black;
    color: white;
    padding: 10px;
  }
  button {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    border: none;
    background-color: #2879fe;
    color: white;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .reset {
    color: red;
    font-size: 15px;
    cursor: pointer;
  }
`;
