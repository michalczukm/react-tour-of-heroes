/* eslint 
no-console: 0,
no-debugger: 0
*/

import React, {PropTypes} from 'react';
import HeroDetail from './HeroDetail';
import NewHero from './NewHero';
import HeroesList from './HeroesList';

class HeroApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let appState = this.props.heroAppState;
    let actions = this.props.actions;

    return (
      <div>
        <h1>{appState.title}</h1>
        <HeroesList actions={actions} heroes={appState.heroes} selectedHero={appState.selectedHero}/>

        <NewHero actions={actions}/>

        {
          appState.selectedHero 
          ? <HeroDetail key={appState.selectedHero.id} hero={appState.selectedHero} actions={actions}/>
          : null
        }
      </div>
    );
  }
}

HeroApp.propTypes = {
  actions: PropTypes.object.isRequired,
  heroAppState: PropTypes.object.isRequired
};

export default HeroApp;
