import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-size: 36px;
  padding: 20px 20px;
  box-sizing: border-box;
  box-shadow: 0px 1px 5px rgba(72, 72, 72, 0.1);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 5px rgba(72, 72, 72, 0.1);
  padding: 20px 20px;
`;

export const AddImage = styled.button`
  border: 1px solid #a8c1d5;
  border-radius: 3px;
  font-size: 12px;
  font-family: arial, helvetica, sans-serif;
  padding: 10px 10px 10px 10px;
  text-decoration: none;
  display: inline-block;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);
  font-weight: bold;
  color: #ffffff;
  background-color: #cedce7;
  background-image: linear-gradient(to bottom, #cedce7, #596a72);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#CEDCE7, endColorstr=#596a72);
  padding: 10px 30px;

  &:hover {
    border: 1px solid #8aabc5;
    background-color: #acc4d6;
    background-image: linear-gradient(to bottom, #acc4d6, #434f55);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#acc4d6, endColorstr=#434f55);
  }
`;

export const GalleryWrapper = styled.div`
  margin: 20px 100px;
  @media (min-width: 991px) {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 800px;
    margin: 0px auto;
  }
`;
