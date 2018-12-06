import React, {Component} from 'react';
import ThumbsUp from './ThumbsUp';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return (
          <div key={item.name}>
              <li>
                <img src={item.img} key={item.name}/>
                <h2>{item.name}</h2>
                <h3>{item.lang}</h3>
                <h3>{item.date}</h3>
                <ThumbsUp/>
              </li>
          </div>
      );
    });

    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
