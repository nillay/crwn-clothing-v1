import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/signin.component';

const Shop = ()=>{
  return (
      <h1>SHOP WILL BE OPENING HERE!!!</h1>
  );
}



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
      <Route path='signin' element={<SignIn />}/>
      </Route>
      
    </Routes>
);
};
  

export default App;
