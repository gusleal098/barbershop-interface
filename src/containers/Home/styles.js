import styled from "styled-components";

export const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  padding: 40px;

  @media (max-width: 1024px) {
    margin-top: 50px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 15px;
  }

  @media (max-width: 430px) { 
    margin-top: 25px;
    padding: 10px;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;

  @media (max-width: 1669px) { 
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1024px) { 
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) { 
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) { 
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 430px) { 
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeImg = styled.img`
  width: 90%;
  border-radius: 10px;

  @media (max-width: 1024px) { 
    width: 80%;
  }

  @media (max-width: 768px) { 
    width: 70%;
  }

  @media (max-width: 480px) { 
    width: 100%;
    margin-top: 15px;
  }

  @media (max-width: 430px) { 
    width: 100%;
  }
`;

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory ? "2px solid #000000" : "none"};
  color: ${(props) => (props.$isActiveCategory ? "#000000" : "#9a9a9d")};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;

  @media (max-width: 768px) { 
    font-size: 15px;
  }

  @media (max-width: 480px) { 
    font-size: 14px;
  }

  @media (max-width: 430px) { 
    font-size: 14px;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .rec.rec-arrow {
    background-color: #000000;
    color: #efefef;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #000000;
    background-color: #efefef;
    color: #000000;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec-dot_active {
    background-color: #000000;
    box-shadow: 0 0 1px 3px rgb(0 0 0);
  }

  @media (max-width: 1024px) { 
    width: 100%;
  }

  @media (max-width: 768px) { 
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (max-width: 430px) { 
    width: 100%;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 40px;
  width: max-content;
  justify-content: center;

  @media (max-width: 768px) { 
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 480px) { 
    grid-template-columns: 1fr;
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 430px) { 
    grid-template-columns: 1fr;
    width: 100%;
    padding: 10px;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .message-add-service {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-top: 15px;
  }

  .rec.rec-arrow {
    background-color: #000000;
    color: #efefef;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #000000;
    background-color: #efefef;
    color: #000000;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec-dot_active {
    background-color: #000000;
    box-shadow: 0 0 1px 3px rgb(0 0 0);
  }

  @media (max-width: 1024px) { 
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) { 
    width: 100%;
  }

  @media (max-width: 430px) { 
    width: 100%;
  }
`;

export const DateButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveDate ? "2px solid #000000" : "none"};
  color: ${(props) => (props.$isActiveDate ? "#000000" : "#9a9a9d")};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;

  @media (max-width: 768px) { 
    font-size: 15px;
  }

  @media (max-width: 480px) { 
    font-size: 14px;
  }

  @media (max-width: 430px) { 
    font-size: 14px;
  }
`;

export const TimesContainer = styled.div`
  margin-top: 41px;
  padding: 20px;
  background: #ffffff;
  min-width: 800px;
  max-width: 800px;
  min-height: 565px;
  border-radius: 20px;

  p {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1024px) { 
    min-width: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
  }

  @media (max-width: 480px) { 
    min-width: 100%;
    max-width: 100%;
    min-height: 350px;
  }

  @media (max-width: 430px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1024px) { 
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 768px) { 
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 480px) { 
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 430px) { 
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const EmptyTimes = styled.p`
  display: flex;
  font-size: 20px;
  justify-content: center;

  @media (max-width: 768px) { 
    font-size: 18px;
  }

`