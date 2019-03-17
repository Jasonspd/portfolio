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
          <span> At Movement Digital</span><br></br>
          <p><a href="http://www.movement.uk/" target="_blank" rel="noopener noreferrer"> Movement company website</a></p>
          <p><a href="https://github.com/Jasonspd/CV/raw/master/fantaxyou_movement_small.mov/" target="_blank" rel="noopener noreferrer"> Fantaxyou intelligent music video app</a><p>Lead developer in this unique web app writting in Nodejs, Javascript and PHP as part of an award winning campaign.</p></p>
          <p><a href="http://www.workreduce.com/" target="_blank" rel="noopener noreferrer"> Workreduce for Movement </a><p> A bespoke website using vanila javascipt</p></p>
          <span> At Immediate Media</span><br></br>
          <p><a href="http://advertorial.immediate.co.uk/flight-centre/#/" target="_blank" rel="noopener noreferrer"> Flight centre Queensland </a><p> A microsite in a quiz format using AngularJS</p></p>
          <p>More can be found at my <a 
              href="https://www.github.com/Jasonspd" 
              target="_blank"
              rel="noopener noreferrer">Github</a></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          <p>Full Stack Javascript Developer with over 3 years of experience</p>
          <p>My journey begain at the awesome 
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