import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import Work from './Work'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div 
      ref={this.props.setWrapperRef} 
      id="main" 
      style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <p><a href="https://github.com/Jasonspd/CV/raw/master/fantaxyou_movement_small.mov/" target="_blank" rel="noopener noreferrer"> Fantaxyou music bot for Movement </a></p>
          <p><a href="https://www.bicshaveclub.com/uk" target="_blank" rel="noopener noreferrer"> Bicshaveclub for Movement </a></p>
          <p><a href="http://www.workreduce.com/" target="_blank" rel="noopener noreferrer"> Workreduce for Movement </a></p>
          <p><a href="http://advertorial.immediate.co.uk/flight-centre/#/" target="_blank" rel="noopener noreferrer"> Flight centre Queensland Quiz for Immediate Media </a></p>
          <p><a href="http://www.stockportsuicideprevention.org.uk/" target="_blank" rel="noopener noreferrer"> Stockport - Suicide Prevention website using Jekyll </a></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          <p>Full Stack Javascript Developer with over 3 years of experience</p>
          <p>Started from the bottom, now I'm a developer... My journey begain at the awesome 
            <a href="https://www.foundersandcoders.com/" target="_blank" rel="noopener noreferrer"> Founders & Coders </a> 
            where I learned NodeJS and web development in Javascript.
            After three months of TDD, project based group learning and lots of frustration,
            I spent time mentoring new students and building MVPs for commercial clients.
            Soon after, I did some freelancing and worked for several companies working primarily as a 
            Front End Developer.
          </p>
          <p>My last role was at 
            <a href="https://www.movement.co.uk/" target="_blank" rel="noopener noreferrer"> Movement </a> 
            where I spent 2 years as the primary developer.
          </p>
          {close}
        </article>

        <article 
        id="contact"
        className={`${this.props.article === 'contact' ? 'active' : ''}
        ${this.props.articleTimeout ? 'timeout' : ''}`}
        style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p><a href="https://github.com/Jasonspd/CV/blob/master/README.md" target="_blank" rel="noopener noreferrer"> CV </a></p>
          <ul className="icons">
            <li>
              <a 
              href="https://www.linkedin.com/in/jasoncluu" 
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a 
              href="https://www.github.com/Jasonspd" 
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github">
              <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a 
              href="mailto:jasoncluu@gmail.com" 
              className="icon fa-envelope">
              <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main