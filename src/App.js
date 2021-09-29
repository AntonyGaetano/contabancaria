
import Header from './Header';
import Main from "./Main"
import "./App.css"

var style_app = {
  display:"flex",
  flexDirection:"column",
  width:"100%",
  justifyContent:"center",
  alignItems:"center",
}

function App() {
  return (
   <section style={style_app}>
     <Header />
     <Main/>
   </section>
  );
}

export default App;
