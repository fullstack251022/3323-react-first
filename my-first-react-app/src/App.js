import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      hello world
      <Item price="200"
        description="this is my first element"
        imageSource="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-b-3729464.jpg&fm=jpg" />
      <Item price="600"
        description="This is best car in the world"
        imageSource="https://cdn.pixabay.com/photo/2016/06/20/22/35/mercedes-benz-1470136__340.jpg" />
      <Item price="3000"
        description="this is your worst purchase"
        imageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzucqVgy7mIF4C4CmbsCjfQ9smlk4nv0FGPPN6Rqinb9Q2v6cpuYRpPErXYdltv-JoJC0&usqp=CAU" />

    </div>
  
  );
}

export default App;
