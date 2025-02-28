import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Allen</Link>
        <Link to="/neet/online-coaching-class-11">Class 11</Link>
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          ></Route>
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Landing() {
  return <>Allen this side</>;
}

function Class11Program() {
  return <>Neet program for class 11th</>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <>
      Neet program for class 12th <button onClick={redirectUser}>Home</button>
    </>
  );
}

export default App;
