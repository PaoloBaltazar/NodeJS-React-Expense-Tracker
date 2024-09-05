
import styled from "styled-components";
import { MainLayout } from "./styles/Layouts";


function App() {
  return (
    <AppStyled className="App">
      <MainLayout>
        <h1>
          Hello
        </h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

`;


export default App;
