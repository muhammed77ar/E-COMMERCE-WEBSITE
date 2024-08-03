import styled from "styled-components";

const mobileBreakPoint = "790px";

export const FeaturedProduct = styled.div`
  margin: 100px 50px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: ${mobileBreakPoint}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h1 {
      flex: 2;
      text-transform: capitalize;
      @media screen and (max-width: ${mobileBreakPoint}) {
        text-align: center;
      }
    }
    p {
      flex: 3;
      color: gray;
      @media screen and (max-width: ${mobileBreakPoint}) {
        text-align: center;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .error {
      font-size: 48px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      display: inline-block;
      color: #ff3d00;
      letter-spacing: 2px;
      position: relative;
      box-sizing: border-box;
      margin: 50px 0;
    }
    .error::after {
      content: "Something went wrong";
      position: absolute;
      left: 0;
      top: 0;
      color: #fff;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      animation: animloader 3s linear infinite;
    }

    @keyframes animloader {
      0% {
        height: 100%;
      }
      100% {
        height: 0%;
      }
    }
    .loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: block;
      margin: 50px auto;
      position: relative;
      box-sizing: border-box;
      animation: zeroRotation 1s linear infinite alternate;
    }
    .loader::after,
    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      background: black;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
    }
    .loader::before {
      left: auto;
      right: 0;
      transform: translate(50%, 100%);
    }

    @keyframes zeroRotation {
      0% {
        transform: scale(1) rotate(0deg);
      }
      100% {
        transform: scale(0) rotate(360deg);
      }
    }
    @media screen and (max-width: ${mobileBreakPoint}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
