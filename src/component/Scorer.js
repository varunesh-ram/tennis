import React from 'react';
import {AppConstants} from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    constructor(props){
        super(props);
        this.state = {scoreText:AppConstants.InitialScore};
        this.calculateScore = this.calculateScore.bind(this);
    }
    componentDidUpdate(prevProps){
        if(prevProps.player1Score !== this.props.player1Score || prevProps.player2Score !== this.props.player2Score)
        this.calculateScore();
    }
    calculateScore(){
        let player1Score = this.props.player1Score;
        let player2Score = this.props.player2Score;
        let scoreText;
        const Scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
		if(player1Score === player2Score) {
			scoreText = Scores[player1Score] + AppConstants.AllText;
		}
		if (!scoreText)
        scoreText = Scores[player1Score] + AppConstants.Comma + Scores[player2Score];
        if (player1Score <4 && player2Score <4)
        this.setState({scoreText:scoreText})
    }
    render() {
        return  (
            <div>
                <h5>{AppConstants.ScoreText}</h5>
                <label>{this.state.scoreText}</label>               
            </div>
        );
    }
}
Scorer.propTypes = {
    player1Score:PropTypes.number,
    player2Score:PropTypes.number
}