import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = "Welcome to the blogging section!"
  // const likes = 50;
  // const person = {name: "John", age: 18}; We can't pass objects dynamically
  // const bool = false; We can't pass booleans dynamically [it won't be displayed]
  // const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "hello, world!" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href = { link }>Google Site</a> */}
        <Home />
      </div>
    </div>
  );
}

export default App;