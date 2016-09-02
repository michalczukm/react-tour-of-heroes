import React, {PropTypes} from 'react';

class HeroesList extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.heroes.length > this.props.heroes.length;
    }

    onHeroClick(id) {
        this.props.actions.selectHero(id);
    }

    render() {
        let heroes = this.props.heroes;
        let selectedHero = this.props.selectedHero;

        return (
            <div>
                <h2>My Heroes</h2>
                <ul className="heroes">
                    {heroes.sort((a, b) => a.id - b.id).map(hero =>
                        <li className={selectedHero && hero.id === selectedHero.id ? 'selected' : ''}
                            key={hero.id}
                            onClick={this.onHeroClick.bind(this, hero.id)}>
                            <span className="badge">{hero.id}</span> {hero.name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

HeroesList.propTypes = {
    actions: PropTypes.object.isRequired,
    selectedHero: PropTypes.object,
    heroes: PropTypes.array.isRequired
};

export default HeroesList;