import styled from "styled-components";

const mobileBreakPoint = "790px";

export const Footerr = styled.div`
  .top {
    padding: 50px 50px 50px 50px;
    background-color: rgb(41, 41, 41);
    display: flex;
    gap: 50px;
    @media screen and (max-width: ${mobileBreakPoint}) {
      flex-direction: column;
    }
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: justify;
      font-size: 14px;
      h1 {
        font-size: 18px;
        font-weight: 500;
        color: white;
      }
      span {
        color: lightgray;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: ${mobileBreakPoint}) {
      flex-direction: column;
    }
    margin: 10px;
    .left {
      display: flex;
      align-items: center;
      @media screen and (max-width: ${mobileBreakPoint}) {
        flex-direction: column;
        margin-bottom: 10px;
      }
      .logo {
        font-size: 1.3rem;
        font-weight: bold;
        background: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        @media screen and (max-width: ${mobileBreakPoint}) {
          margin-bottom: 5px;
        }
      }
      .copyright {
        margin-left: 20px;
        font-size: 12px;
        color: gray;
      }
    }
    .right {
      .PaymentImages {
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: ${mobileBreakPoint}) {
          margin-bottom: 10px;
        }
      }
      img {
        width: 70px;
      }
    }
  }
`;
