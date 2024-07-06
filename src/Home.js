import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
 
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
    
      location: 'Lahore',
      name:'Cripsy ',
    country:'pakistani',
    app:'dilvery-free',
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Fw45xGksb56sPWzDCpauI5_mu4zyQjunwA&s',
    },
    {
      id: 2,
      location: 'Karachi',
      name:'Cafe Hassan',
      country:'pakistani',
      app:'dilvery-free',
      dishes: ['burger', 'wings', 'colddrink','chips','palo'],
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYoFSgn6suVpea82rDuo32oyzOo8kYDz2dQ&s ',
    },
    {
        id: 3,
        location: 'Islamabad',
        name:'Noor Mahal ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','biryani','halwa Poori'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj60Sz4XosRS2mJWNwe6BtLpYFsc2olOQuw&s',
      },
      {
        id: 4,
        location: 'Kot addu',
        name:'Cafe kahlil ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'sting', 'colddrink','panipoori','afgani burger'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpM9soNFtpfHZLBrbrpAf92vnn2w0juZPDTw&s',
      },
      {
        id: 5,
        location: 'Fasilabad'
        ,
        name:'king Cafe ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','bottle','chips'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJmP1ohhTySZfcL6pbzQnViO2jgDtzFKR-g&s',
      },
      {
        id: 6,
        location: 'Muzaffargarh',
        name:'Manbashad ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','honey bee biryani','chicken'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xq__xSEyASwbasB-OCPVWY85J1kn9WXuzg&s',
      },
      {
        id: 7,
        location: 'Muree',
        name:'Deen Hotel ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','chocolate','fanta'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX3Q78o8F6k8fsy0JqDw74a8F4xKBhJFKFA&s',
      },
      {
        id: 8,
        location: 'Sawat',
        name:'Gulshan ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','fresh kabab','tika boti'],

       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfnZ57ahdbRObKi6AGNb89Qz805IWlWKZUw&s',
      },
      {
        id: 9,
        location: 'Rawlpindi',
        name:'Quetta ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','slice','chips'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyuhu6Kc-2_kzxk4qyaOmkVtJRvCPxd0waQ&s',
      },
      {
        id: 10,
        location: 'Muree',
        name:'Deen Hotel ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','chocolate','fanta'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX3Q78o8F6k8fsy0JqDw74a8F4xKBhJFKFA&s',
      },
       
      {
        id: 11,
        location: 'Sawat',
        name:'Gulshan ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','fresh kabab','tika boti'],

       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfnZ57ahdbRObKi6AGNb89Qz805IWlWKZUw&s',
      },
      {
        id: 12,
        location: 'Sawat',
        name:'Gulshan ',
        country:'pakistani',
        app:'dilvery-free',
        dishes: ['burger', 'wings', 'colddrink','fresh kabab','tika boti'],

       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfnZ57ahdbRObKi6AGNb89Qz805IWlWKZUw&s',
      },
    
  ]);

  return (
    <div>
        <div className='container 'className='top-banner'>
          <section className='babar-content'>
            <div className='row'>
              <div className='col-md-8'>
                <h1>Food and groceries delivery from Islamabad’s best restaurants and shops</h1>
              </div>
              <div className='col-md-4'>
                <img src='https://images.deliveryhero.io/image/foodpanda/city-page/refresh-hero-city-pk.png?width=1264'width='400'></img>
              </div>
            </div>
          </section>
          </div>
        
          <h4 style={{color:'RED'}}>Home Page >  <span className='pro'>Islamabad</span>   </h4>
          <h1 className='link'>All restaurant</h1>
        <div className='row '>
         {restaurants.map ((x)=>(
              <div className='col-12 col-md-4 mb-4' key={x.id}>
              <div className='card shadow '>
                
                  <img src={x.image } className='card-image'></img>

                  
                  <h1 className='card-header'> {x.name}  </h1>
                  <h5 className='card-p'>Location; {x.location}  </h5>
                     <p className='country-name'>{x.country}  </p>
                     <p className='dilvery'> {x.app}  </p>
                 
                  <Link to={`/dishes/${x.id}`} className="btn btn-primary">view dishes</Link>
                
              </div>
          </div>
         ))}
        </div>
        </div>
        
  );
};

export default Home;
