import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';



class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div >;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                igredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                igredient = <div className={classes.Csheese}></div>;
                break;
            case ('bacon'):
                igredient = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                igredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;

        }
        return ingredient;
    }
}

BurgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};
export default BurgerIngredient;