import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id':0,
  'image':'https://randomuser.me/api/portraits/men/1.jpg',

  'name':'나공주',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
  
},
{
  'id':1,
  'image':'https://randomuser.me/api/portraits/men/2.jpg',

  'name':'홍길동',
  'birthday':'880316',
  'gender':'남자',
  'job':'교수'
  
},
{
  'id':2,
  'image':'https://randomuser.me/api/portraits/women/1.jpg',

  'name':'이순신',
  'birthday':'800104',
  'gender':'여자',
  'job':'요리사'
  
}
]

class App extends Component {
  render() {
    return(
      <div>
        {
          customers.map(c => {
            return (
            <Customer
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
            );
          })
        }

       </div>
    );
  }
}

export default App;
