
import './App.css';
import Compoment from './Compoment';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dishes from './Dishes';

function App() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'karachi biryani',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbafBmar_Ay9O9YDYpD91FGU-PhXk2nj4Pg&s ' ,
      dishes: [
          { id: 1, name: 'Multan', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aLhpWtx0Hu-wbMxKk-nrHuYvX7S212U0yQ&s', price: 300 },
         
         
          { id: 2, name: 'Lahore', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOt4Ij9pzNLNY-s6MwV-D5t4m-gZToFzy0hw&s', price: 400 },
         
      ]
  },
    {
      id: 2,
      location: 'Karachi',
      name:'Cafe Hassan',
      dishes: [
        { id: 1, name: 'Multan', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aLhpWtx0Hu-wbMxKk-nrHuYvX7S212U0yQ&s', price: 300 },
         
         
              
         
          { id: 2, name: 'Lahore', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOt4Ij9pzNLNY-s6MwV-D5t4m-gZToFzy0hw&s', price: 400 },
         
        ]
    },
         
        
    {
        id: 3,
        location: 'Islamabad',
        name:'Noor Mahal ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D' , price:300 },

          {  id:2, name:'KotADDU',  image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D' , price:300 },


          {  id:3, name:'KotADDU',  image:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D' , price:300 },



        ],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj60Sz4XosRS2mJWNwe6BtLpYFsc2olOQuw&s',
      },
      {
        id: 4,
        location: 'Kot addu',
        name:'Cafe kahlil ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D' , price:300 },

          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D' , price:300 },

          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D' , price:300 },




        ],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpM9soNFtpfHZLBrbrpAf92vnn2w0juZPDTw&s',
      },
      {
        id: 5,
        location: 'Fasilabad',
        name:'king Cafe ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D' , price:300 },

          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D' , price:300 },

          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D' , price:300 },




        ],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJmP1ohhTySZfcL6pbzQnViO2jgDtzFKR-g&s',
      },
      {
        id: 6,
        location: 'Muzaffargarh',
        name:'Manbashad ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D' , price:300 },

          {  id:1, name:'KotADDU',  image:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D', price:300 },

          {  id:1, name:'KotADDU',  image:'https://media.istockphoto.com/id/2148468890/photo/friends-sharing-and-enjoying-fries-topped-with-parmesan-cheese-and-truffled-mayonnaise-sauce.webp?b=1&s=170667a&w=0&k=20&c=kx8mBjeJbAlA7Lpaj2Sp8IyvqzskXeZOK5K4cllaatU=' , price:300 }



        ],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xq__xSEyASwbasB-OCPVWY85J1kn9WXuzg&s',
      },
      {
        id: 7,
        location: 'Muree',
        name:'Deen Hotel ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=170667a&w=0&k=20&c=qHX9JbVQRq0We9xvd5qUN1nW5lMD8nAeT5Ts4gKYBg8=' , price:300 },
          {  id:1, name:'KotADDU',  image:'https://media.istockphoto.com/id/1690603779/photo/food-collage-layout-a-variety-of-dishes-a-collection-for-a-restaurant-banner.webp?b=1&s=170667a&w=0&k=20&c=bGcX3QQlQzHzvch2M2ZMAG8a5SbSxBx66HTgT5DSAjA=' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 }





        ],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX3Q78o8F6k8fsy0JqDw74a8F4xKBhJFKFA&s',
      },
      {
        id: 8,
        location: 'Sawat',
        name:'Gulshan ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 },
          {  id:1, name:'KotADDU',  image:'' , price:300 }





        ],

       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfnZ57ahdbRObKi6AGNb89Qz805IWlWKZUw&s',
      },
      {
        id: 9,
        location: 'Rawlpindi',
        name:'Quetta ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 }



        ],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyuhu6Kc-2_kzxk4qyaOmkVtJRvCPxd0waQ&s',
      },
      {
        id: 10,
        location: 'Muree',
        name:'Deen Hotel ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'' , price:300 },
          {  id:1, name:'KotADDU',  image:'' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 }




        ],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX3Q78o8F6k8fsy0JqDw74a8F4xKBhJFKFA&s',
      },
       
      {
        id: 11,
        location: 'Sawat',
        name:'Gulshan ',
        dishes: [

          {  id:1, name:'KotADDU',  image:'' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 }



        ],

       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfnZ57ahdbRObKi6AGNb89Qz805IWlWKZUw&s',
      },
      {
        id: 12,
        location: 'Sawat',
        name:'Gulshan ',
        dishes: [
          {  id:1, name:'KotADDU',  image:'' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 },

          {  id:1, name:'KotADDU',  image:'' , price:300 }







        ],

       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfnZ57ahdbRObKi6AGNb89Qz805IWlWKZUw&s',
      },
    
  ]);
  return (
    <div className="App">
      <Router>
        <Header/>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home restaurants={restaurants} />} />
                <Route path="/dishes/:id" element={<Dishes restaurants={restaurants} />} />
               
            </Routes>
          <Footer/>
          <Compoment/>
        </Router>

    </div>
  );
}

export default App;
