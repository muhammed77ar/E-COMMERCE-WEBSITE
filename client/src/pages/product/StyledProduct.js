import styled from "styled-components";

const mobileBreakPoint = "790px";

export const ProductItem = styled.div`
  padding: 20px 40px;
  display: flex;
  gap: 10px;
  @media screen and (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
  }

  .left {
    flex: 1;
    display: flex;
    gap: 20px;
    @media screen and (max-width: ${mobileBreakPoint}) {
      flex-direction: column;
      gap: 0;
    }
    .images {
      flex: 1;
      @media screen and (max-width: ${mobileBreakPoint}) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }
      img {
        min-width: 100%;
        height: 150px;
        object-fit: cover;
        cursor: pointer;
        margin-bottom: 10px;
        @media screen and (max-width: ${mobileBreakPoint}) {
          height: 100px;
          min-width: auto;
        }
      }
    }
    .mainImg {
      flex: 5;
      @media screen and (max-width: ${mobileBreakPoint}) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
      img {
        max-height: 500px;
        object-fit: cover;
        @media screen and (max-width: ${mobileBreakPoint}){
          width: 100%;
        }
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 30px;
    @media screen and (max-width: ${mobileBreakPoint}) {
      justify-content: center;
      align-items: center;
    }
    h1 {
      @media screen and (max-width: ${mobileBreakPoint}) {
        text-align: center;
      }
    }
    .price {
      display: flex;
      align-items: center;
      gap: 10px;
      .oldPrice {
        color: gray;
        text-decoration: line-through;
        font-size: 25px;
        font-weight: 400;
      }
      .newPrice {
        color: darkgreen;
        font-size: 25px;
        font-weight: 500;
      }
    }
    p {
      font-size: 18px;
      font-weight: 300;
      text-align: justify;
    }
    .quantity {
      font-size: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
      .minus {
        font-size: 30px;
        cursor: pointer;
      }
      .plus {
        font-size: 30px;
        cursor: pointer;
      }
    }
    .add {
      width: 250px;
      padding: 10px;
      background-color: #2879fe;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      border: none;
      font-size: 15px;
      font-weight: 500;
      @media screen and (max-width: ${mobileBreakPoint}){
        margin: 10px 0;
      }
      .cart {
        font-size: 20px;
      }
    }
    .links {
      display: flex;
      gap: 20px;
      @media screen and (max-width: ${mobileBreakPoint}) {
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
      .item {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #2879fe;
        font-size: 14px;
        .icon {
          font-size: 20px;
        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      color: gray;
      font-size: 14px;
      margin-top: 20px;
      @media screen and (max-width: ${mobileBreakPoint}){
        justify-content: center;
        align-items: center;
      }

      hr {
        width: 100%;
        border: 1px solid rgb(238, 237, 237);
      }
    }
    hr {
      width: 100%;
      border: 1px solid rgb(238, 237, 237);
    }
  }
`;
