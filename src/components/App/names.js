import React from 'react';
import './App.css';
import blank from './image/blank.png'

class Names extends React.Component{
  state = { searchString: '' }
  handleChange = (e) => {
   this.setState({ searchString:e.target.value });
  }
  render(){
    var names =  [
      { name: 'Jane Doe'},
      { name: 'Mark Gaudiano'},
      { name: 'Jan Karlo'},
      { name: 'Dave Pacilan'},
      { name: 'Geman Frutas'},

    ],
    searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
       names = names.filter(function(i) {
         return i.name.toLowerCase().match( searchString);
       });
    }

    return( 
      <div className="App">
        <div className="container py-5">
          <div className="plist pb-5">
            <img src={blank} alt="blank" className="float-left"
              style={{
                width: "50px", height: "50px", borderRadius:"50%", marginRight: "10px"
              }}
            />
            <button type="button" className="btn btn-lg btn-primary float-left">LOGOUT</button>
      
            <form className="pb-5">
              <input type="text" placeholder="Search" className="float-right p-2" value={this.state.searchString} onChange={this.handleChange} />
              
            </form>

            <div className="allnames pt-5">
              {names.map(list => (
                <div className="names align-self-center" key={list.name}>
                  <a href="/" className="btn ">
                    <img src={blank} alt="blank" className="float-left"
                    style={{
                      width: "40px", height: "40px"
                    }}
                     />
                    {list.name}
                  </a> 
                  
                </div>
              ))}
            </div>
          </div>    
        </div>
      </div>

      
    )
  }
}
export default Names;
  