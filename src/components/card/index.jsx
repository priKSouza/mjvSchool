import { Container } from "./styles";

const Card = ({ image }) => {
  return (
    <div>
      <Container>
        <img src={image} alt="imagem aleatória" />
      </Container>
    </div>
  );
};

export default Card;
