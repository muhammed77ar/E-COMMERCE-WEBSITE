import styled from "styled-components";

const mobileBreakPoint = "790px"

export const Listt  = styled.div`
display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(3, 1fr);
	gap: 0;
	width: 100%;
  margin-right: 30px;
	.errorContainer{
    width: 100%;
    transform: translateX(100%);
      margin-top: 50px;
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
  }

    .empty {
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
    .empty::after {
      content: "There is no product";
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
	
    .loadingContainer{
      width: 100%;
      transform: translateX(100%);
      margin-top: 50px;
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
    }

	@media screen and (max-width: ${mobileBreakPoint}) {
		display: flex;
		flex-direction: column;
		align-items: center;
    }
`