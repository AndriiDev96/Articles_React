import React, { Component, PureComponent } from 'react'; 
//PureComponent - compares all props and states, has already built-in shouldComponentUpdate
import './style.css';

class Article extends PureComponent{ //props -> properties
  constructor(props){
    super(props)

   /*  this.state = {
      isOpen: props.defaultOpen
    } */
  }

  //The same
  /* state = {
    isOpen: true
  } */

 /*  shouldComponentUpdate(nextProps, nextState){
    return this.state.isOpen !== nextState.isOpen
  } */

  //often used for requests
  componentWillMount(){
    console.log(`___componentWillMount___`);
  }

 /*  componentWillReceiveProps(nextProps){
    console.log(`___componentWillReceiveProps___`);
    if (nextProps.defaultOpen !== this.props.defaultOpen)
      this.setState({
        isOpen: nextProps.defaultOpen
      })
  } */

  componentWillUpdate(){
    console.log(`___componentWillUpdate___`);
  }

  render(){
    const {article, isOpen, onButtonClick} = this.props;  
    const body = isOpen && <section className="card-text">{article.text}</section>;
    return (
      <div className="card mb-3 block-article">
        <div className="card-header">
          <h2>
            {article.title}
            <button className="btn btn-primary btn-lg float-right" onClick={onButtonClick}>
              {isOpen ? 'close' : 'open'} 
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h5 className="card-subtitle text-muted mb-3">
            Creation date: {(new Date(article.date)).toDateString()}
          </h5>
          {body}
        </div>
      </div>
    );
  }

  /* handleClick = () => {
    console.log(`----> clicked`);
    this.setState({
      isOpen: !this.state.isOpen
    })
  } */
}

export default Article;