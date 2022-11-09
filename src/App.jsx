// import Input from "./components/input/Index";
import GlobalStyle from "./styles/GlobalStyle";
// import { MdEmail } from "react-icons/md";
// import { ImKey } from "react-icons/im";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Dashboard />

      {/* <Input label="Nome:" id="name" type="text" name="name"></Input>
      <Input label="Email:" id="email" type="email" name="email">
        <MdEmail />
      </Input>
      <Input label="Senha:" id="password" type="password" name="password">
        <ImKey />
      </Input> */}
    </div>
  );
}

export default App;
