import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';

const projects = [
{name: "Heap", lang: "Java", date: "Freshman", img:"https://www.cs.cmu.edu/~adamchik/15-121/lectures/Binary%20Heaps/pix/heap.bmp"},
{name: "Buffer", lang: "Java", date: "Sophomore", img:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Stack_Overflow_4.png"},
{name: "Decision Tree", lang: "Java", date: "Freshman", img: "https://upload.wikimedia.org/wikipedia/commons/4/48/DecisionCalcs.jpg"},
{name: "Seamcarve", lang: "Java", date: "Freshman", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/BroadwayTowerSeamCarvingD.png"},
{name: "Graph", lang: "Java", date: "Freshman", img: "https://www.cdn.geeksforgeeks.org/wp-content/uploads/Fig-0.jpg"},
{name: "Redesign", lang: "HTML", date: "Sophomore", img: "https://growrevenue.io/wp-content/uploads/2018/11/website-redesign.jpg"},
{name: "Pacman", lang: "Java", date: "Freshman", img: "http://pacman.com/en/wp-content/themes/PACMAN/images/uploads/pacman_icon_2.jpg"},
{name: "Tetris", lang: "Java", date: "Freshman", img: "https://cdn-images-1.medium.com/max/2000/1*nddLx_mEa-5Hp55XQxh8dQ.jpeg"},
{name: "Shell", lang: "C", date: "Sophomore", img: "https://www.floridamuseum.ufl.edu/science/wp-content/uploads/2018/02/1802150082-Edit.jpg"},
{name: "Malloc", lang: "C", date: "Sophomore", img: "https://www.nongnu.org/avr-libc/user-manual/malloc-std.png"},
{name: "ARrg Photos", lang: "Python", date: "Freshman", img: "https://res.cloudinary.com/devpost/image/fetch/s--EjOF1a2Y--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://img.youtube.com/vi/UVQbwMsFt4c/0.jpg"},
{name: "Data-pulling Script", lang: "Python", date: "Summer 2018", img: "https://tr3.cbsistatic.com/hub/i/r/2017/04/04/694d6d6e-6602-4aa8-a7af-b5d2f66fff05/resize/770x/d59387bad8400bc8b2b3d51107d2e599/aexcelpowerbi.png"}
];

class App extends Component {
  render() {
    return (
      <div className="body">
        <FilteredList items={projects}/>
      </div>
    );
  }
}

export default App;
