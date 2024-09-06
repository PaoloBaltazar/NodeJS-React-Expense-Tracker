
import styled from "styled-components";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb"


function App() {
  return (
    <AppStyled className="App">
      <Orb />
      <MainLayout>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: #8BC6EC;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

`;


export default App;
