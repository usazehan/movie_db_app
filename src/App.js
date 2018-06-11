import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow.js';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")

    const movies = [
      {id: 0, poster_src: "", title: "something movie", overview: " movie info"},
      {id: 1, poster_src: "", title: "something movie 2", overview: " movie info 2"}
    ]

    var movieRows = [];
    movies.forEach((movie)=>{
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie}/> 
      
      movieRows.push(movieRows)
    })
    this.state = {rows: movieRows}
  }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <body>
            <tr>
              <td>
                <img width="50" src="video-player.svg" alt="logo"/>
                </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search</h1>
                </td>
              </tr>
            </body>
          </table>

          <input style ={{
            fontSize: 24,
            display: 'block',
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16

          }} placeholder="Enter search term"/>

      </div>
    );
  }
}

export default App;
