
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import Defaultlayout from "./components/Layouts/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
          {publicRoutes.map ((route,index) => {
            const Layout = route.layout || Defaultlayout
            const Page = route.component;
            return <Route key = {index} path ={route.path} element={
            <Layout>
            <Page/>
            </Layout>
          } />
          })}
       </Routes>
      </div>
    </Router>
  );
}
export default App;