import React, { Component } from "react";

type importState = {
  items: {[key: string]: string | number}[];
  isLoaded: Boolean;
}

class Connection extends Component<{}, importState> {

  sortSearch ="";

  skip = 0;

  
  constructor(props: importState){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
//when an instance of a component is being created and inserted into the DOM
//componentDidMount renders after the render methode, and then renders the render() methode again
  componentDidMount(){

    fetch(`http://localhost:4000/api/character/hade`)
      .then(res => res.json()) //format the resault to json
      .then(res => {
        console.log(res)
          this.setState({
              isLoaded: true,
              items: res.DATA, //getting the data ans saving it inside the app component
          })

      }).catch( (error) => {console.error(error)} );

  }


  filterHouse(){
    const filter = "Gryffindor";
    fetch(`http://localhost:4000/api/character/hei?filter=${filter}`)
    //fetch(`http://localhost:4000/api/character/hei?filter=${filter}&search=${search}&skip=${skip}`)
    .then(res => res.json()) //format the resault to json
    .then(res => {
      console.log(res)
        this.setState({
            isLoaded: true,
            items: res.DATA, //getting the data ans saving it inside the app component
        })
    }).catch( (error) => {console.error(error)} );

  }

  render() {

    var { isLoaded, items }  = this.state;
    if (!isLoaded){
      return (<div>Loading...</div>);
    } else{
      return (
        <div>
          <h1>Data has been loaded</h1>
          <h3>filter</h3>
          <button onClick= { () => this.filterHouse()} >house = gryffindor</button>
          <ul>
            {items?.map(item => (
              <div>
                <li key={item._id}>
                  Name: {item.name} | House: {item.house} {/*| Image: <img src={"item.image"} alt="not loading" width="50" height="50"></img> {/*hvorfor får jeg ikke hentet ut bildene*/}
                </li>
                </div>
            ))};
          </ul>
            
        </div>
      )}
  }
}

export default Connection;