import { Action } from "./components/Action";
import { Main } from "./components/Main";
import { Needs } from "./components/Needs";
import { Sol1 } from "./components/Sol1";
import { Sol2 } from "./components/Sol2";
import { Sol3 } from "./components/Sol3";

function App() {
  return (
    <div className='App'>
      <Main />
      <Needs />
      <Sol1 />
      <Sol2 />
      <Sol3 />
      <Action />
    </div>
  );
}

export default App;
