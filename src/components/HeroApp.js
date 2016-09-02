/* eslint 
no-console: 0,
no-debugger: 0
*/

import React, {PropTypes} from 'react';
import HeroDetail from './HeroDetail';
import NewHero from './NewHero';

class HeroApp extends React.Component {
  constructor(props) {
    super(props);
  }

  onHeroClick(id) {
    this.props.actions.selectHero(id);
  }

  render() {
    let appState = this.props.heroAppState;
    let actions = this.props.actions;

    return (
      <div>
        <h1>{appState.title}</h1>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {appState.heroes.sort((a,b) => a.id - b.id).map(hero =>
            <li className={appState.selectedHero && hero.id === appState.selectedHero.id ? 'selected' : ''}
                key={hero.id}
                onClick={this.onHeroClick.bind(this, hero.id)}>
              <span className="badge">{hero.id}</span> {hero.name}
            </li>
          )}
        </ul>

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
