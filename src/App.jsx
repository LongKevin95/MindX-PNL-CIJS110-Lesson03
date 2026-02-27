import "./App.css";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Main 
        name="Long Lương"
        inClass="React JS"
        slogan="Học lẹ còn đi làm dev"
      />
      <Main name="Đào Mỏ" inClass="Docker" slogan="Khó quá đi" />
      <Main name="Lê Lết" inClass="Machine Learning" slogan="Okela" />
    </>
  );
}

export default App;
