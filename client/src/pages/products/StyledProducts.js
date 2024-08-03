import styled from "styled-components";

const mobileBreakPoint = "790px";

export const ProductsCategory = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: ${mobileBreakPoint}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left {
    display: flex;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: ${mobileBreakPoint}) {
      justify-content: center;
    }
    .div1 {
      margin-bottom: 20px;
      padding: 10px 30px;
      @media screen and (max-width: ${mobileBreakPoint}) {
        padding-top: 20px;
      }
      .filterItem {
        .inputItem{
            margin-bottom: 3px;
        }
        .inputItem input[type="checkbox"] {
          display: none;
          visibility: hidden;
        }
        .inputItem label {
          position: relative;
          padding-left: 2em;
          padding-right: 1em;
          line-height: 2;
          cursor: pointer;
          display: inline-flex;
        }

        .inputItem label:before {
          box-sizing: border-box;
          content: " ";
          position: absolute;
          top: 0.3em;
          left: 0;
          display: block;
          width: 1.4em;
          height: 1.4em;
          border: 2px solid #9098a9;
          border-radius: 6px;
          z-index: -1;
        }

        .inputItem input[type="checkbox"]:checked + label {
          padding-left: 1em;
          color: #0f5229;
        }
        .inputItem input[type="checkbox"]:checked + label:before {
          top: 0;
          width: 100%;
          height: 2em;
          background: #b7e6c9;
          border-color: #2cbc63;
        }

        .inputItem label,
        .inputItem label::before {
          transition: 0.25s all ease;
        }
        @media screen and (max-width: ${mobileBreakPoint}) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .filterItem2{
    .inputItem2{
        margin-bottom: 5px;
    }
    @media screen and (max-width: ${mobileBreakPoint}) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  }
  .right {
    display: flex;
    flex-direction: column;
    min-width: 70%;
    .div2 {
      height: 150px;
      padding-top: 50px;
      margin-right: 10px;
      background-image: url("../imgs/aeb3a590731787.5e1f1487e1a53.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      @media screen and (max-width: ${mobileBreakPoint}) {
        display: none;
      }
    }
    .div3 {
      width: 100%;
      height: 100%;
      @media screen and (max-width: ${mobileBreakPoint}) {
        padding-top: 0;
      }
    }
  }
`;
