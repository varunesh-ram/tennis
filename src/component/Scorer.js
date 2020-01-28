import React from 'react';
import {AppConstants} from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    constructor(props){
        super(props);
        this.state = {scoreText:AppConstants.InitialScore};
        this.calculateScore = this.calculateScore.bind(this);
        this.hasWinner = this.hasWinner.bind(this);
        this.isDeuce = this.isDeuce.bind(this);
	this.playerWithHighestScore = this.playerWithHighestScore.bind(this);
        this.hasAdvantage = this.hasAdvantage.bind(this);
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
        if (this.hasWinner()) {
            scoreText = this.playerWithHighestScore() + AppConstants.WinnerText;
            this.props.isGameOver();
		}		
		if (!scoreText && this.hasAdvantage()) { 
			scoreText =  AppConstants.AdvantageText +this.playerWithHighestScore(); 
		}		
		if (!scoreText && this.isDeuce())
            scoreText = AppConstants.DeuceText;
		if(!scoreText && player1Score === player2Score) {
			scoreText = Scores[player1Score] + AppConstants.AllText;
		}
		if (!scoreText && player1Score < 4 && player2Score < 4 )
        scoreText = Scores[player1Score] + AppConstants.Comma + Scores[player2Score];
        this.setState({scoreText:scoreText})
    }
    hasWinner(){
        let player1Score = this.props.player1Score;
        let player2Score = this.props.player2Score;
        if(player2Score >= 4 && player2Score >= player1Score + 2 )
			return true;
		if(player1Score >= 4 && player1Score >= player2Score + 2)
			return true;
		return false;
    }

    hasAdvantage(){
        let player1Score = this.props.player1Score;
        let player2Score = this.props.player2Score;
        if (player2Score >= 4 && player2Score === player1Score + 1)
			return true;
		if (player1Score >= 4 && player1Score === player2Score + 1)
			return true;
		
		return false;
    }
    playerWithHighestScore(){
        if (this.props.player1Score > this.props.player2Score) {
			return AppConstants.Player1Name;
		} else {
			return AppConstants.Player2Name;
		}
    }
    isDeuce(){
        return this.props.player1Score >= 3 && this.props.player2Score === this.props.player1Score;
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
    player2Score:PropTypes.number,
    isGameOver:PropTypes.func
}