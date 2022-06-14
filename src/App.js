import './App.css';
import axios from 'axios';
import React from 'react';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      test: [],
      cheapFoods: [],
    }

  }

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/')
    .then(res => {
      const test = res.data.response;
        this.setState({ test });
     })

     axios.get('http://127.0.0.1:5000/getcheapfoods')
    .then(res => {
      const cheapFoods = res.data.response;
        this.setState({ cheapFoods});
     })
  }


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <ul>
          {
            this.state.cheapFoods
              .map(foods =>
                <li>{foods}</li>
              )
          }
          </ul>
          <p>
            {this.state.cheapFoods}
          </p>
          <p className='p1'>this is test</p>
          <p className='p2'>this is test</p>
        </header>
      </div>
    );
  }
}

  


export default App;
