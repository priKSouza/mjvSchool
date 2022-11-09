import { Section } from "./styles";
import Card from "../../components/card";
import teste from "../../assets/teste.png"
import teste1 from "../../assets/teste1.png"
import teste2 from "../../assets/teste2.png"
import teste3 from "../../assets/teste3.png"
import teste4 from "../../assets/teste4.png"

const Dashboard = () => {
  return (
    <Section>
      <ul>
        <Card image={teste}/>
        <Card image={teste1}/>
        <Card image={teste2}/>
        <Card image={teste3}/>
        <Card image={teste4}/>
      </ul>
    </Section>
  );
};

export default Dashboard;
