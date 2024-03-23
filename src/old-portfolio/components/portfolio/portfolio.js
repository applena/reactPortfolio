import React from 'react';
import './portfolio.scss';
import Bazaar from '../../img/bazaar.png';
import ToDoPic from '../../img/pic02.png';
import Photography from '../../img/pic04.png';
import VoteReact from '../../img/knowVote.png';
import Vote from '../../img/pic07.png';
import Waldo from '../../img/pic9.png';
import './hoverLinks.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <h2>Portfolio</h2>
        <p>
          Technology is an exciting field that is constantly changing and pushing the boundaries of innovation. As a life-long learner, I can think of no better industry to be a part of.
        </p>

        <div class="deck">
          <div id="store" class="card">
            <a href="https://github.com/applena/bazaar-front-end" target="blank"><img src={Bazaar} /></a>
            <h3>Bazaar-Fellows</h3>
          </div>
          <div id="photography" class="card">
            <a href="http://photography.lenaeivy.com" target="blank"><img src={Photography} /></a>
            <h3>Lena Eivy Photography</h3>
          </div>
          <div id="vote" class="card">
            <a href="https://know-your-vote.herokuapp.com/" target="blank"><img src={Vote} /></a>
            <h3>Know Your Vote</h3>
          </div>
          <div id="waldo" class="card">
            <a href="https://github.com/applena/where-is-the-server" target="blank"><img src={Waldo} /></a>
            <h3>WALDO</h3>
          </div>
          <div id="mom" class="card">
            <a href="http://lenaeivy.com/know-your-vote" target="blank"><img src={VoteReact} /></a>
            <h3>Know Your Vote (redone with React Frontend)</h3>
          </div>
          <div id="todo" class="card">
            <a href="https://applena.github.io/todolist/" target="blank"><img src={ToDoPic} /></a>
            <h3>The List Keeper</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;