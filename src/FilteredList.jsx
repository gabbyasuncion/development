import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';
import List from './List';
import './App.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        items: this.props.items,
        filters: [],
    };

    this.state.filters.push("");
    this.state.filters.push("");

  }

  filterItems = (item) => {
      if (this.state.filters[0] === "" && this.state.filters[1] === "") {
          return true;
      }
      if (item.lang === this.state.filters[0] && item.date === this.state.filters[1]) {
          return true;
      }
      if (item.lang === this.state.filters[0] && this.state.filters[1] === "") {
          return true;
      }
      if (item.date === this.state.filters[1] && this.state.filters[0] === "") {
          return true;
      }
      return false;
  }

  selectLang = (eventKey, event) => {
      var array = this.state.filters;
      if (array[0] !== eventKey && eventKey !== "all") {
          array[0] = eventKey;
      } else {
          array[0] = "";
      }
      this.setState({filters: array});
  }

  selectDate = (eventKey, event) => {
      var array = this.state.filters;
      if (array[1] !== eventKey && eventKey !== "all") {
          array[1] = eventKey;
      } else {
          array[1] = "";
      }
      this.setState({filters: array});
  }

  sortAsc = (event) => {
      this.setState({items: this.state.items.sort(this.compare)})
  }

  compare = (a,b) => {
      if (a.name < b.name) {
          return -1;
      }
      if (a.name > b.name) {
          return 1;
      }
      return 0;
  }

  render(){
    return (
        <div className="body">
            <div className="block1">
                <h1>My Technical Projects</h1>
            </div>
            <div className="buttons">
              <Button onClick={this.sortAsc}>Sort</Button>
              <DropdownButton id="typeDropdown" title={"Language"}>
                <MenuItem eventKey="" onSelect={this.selectLang}>All</MenuItem>
                <MenuItem eventKey="Java" onSelect={this.selectLang}>Java</MenuItem>
                <MenuItem eventKey="C" onSelect={this.selectLang}>C</MenuItem>
                <MenuItem eventKey="Python" onSelect={this.selectLang}>Python</MenuItem>
                <MenuItem eventKey="HTML" onSelect={this.selectLang}>HTML</MenuItem>
              </DropdownButton>
              <DropdownButton id="typeDropdown" title={"Date"}>
                <MenuItem eventKey="" onSelect={this.selectDate}>All</MenuItem>
                <MenuItem eventKey="Freshman" onSelect={this.selectDate}>Freshman</MenuItem>
                <MenuItem eventKey="Sophomore" onSelect={this.selectDate}>Sophomore</MenuItem>
                <MenuItem eventKey="Summer 2018" onSelect={this.selectDate}>Summer 2018</MenuItem>
              </DropdownButton>
              </div>
             <div className="filter-list">
                <List items = {this.props.items.filter(this.filterItems)} />
             </div>
        </div>
    );
  }
}

export default FilteredList;
