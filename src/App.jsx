import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />}></Route>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            ></Route>
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            ></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Link to="/">Allen</Link>|
      <Link to="/neet/online-coaching-class-11">Class 11</Link>|
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <Outlet />
      Footer
    </div>
  );
}

function ErrorPage() {
  return <div>404 Not Found</div>;
}

function Landing() {
  return <div>Allen this side</div>;
}

function Class11Program() {
  return <div>Neet program for class 11th</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      Neet program for class 12th <button onClick={redirectUser}>Home</button>
    </div>
  );
}

export default App;
