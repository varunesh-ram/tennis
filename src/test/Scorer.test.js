import React from 'react';
import {shallow,mount} from 'enzyme';
import Scorer from '../component/Scorer';
import CheckPropTypes from 'check-prop-types';
import sinon from 'sinon';
describe(("<Scorer/> component no props"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( < Scorer / > );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have one heading, label", () => {
    expect(wrapper.find("h5").text()).toEqual("Score");
    expect(wrapper.find("label").length).toBe(1);
  });
  it("on game start score should be Love All", () => {
            expect(wrapper.find("label").text()).toEqual("Love all");
          });
});
describe(("<Scorer/> component with props"), () => {
      let wrapper;
      beforeEach(() => {
          wrapper = shallow( < Scorer player1Score = {0}
          player2Score = {0}
          isGameOver = {
            () => {}
          }
            />);
          });

        it("should render correctly", () => {
          expect(wrapper).toMatchSnapshot();
        }); 
        it("should have one heading, label", () => {
            expect(wrapper.find("h5").text()).toEqual("Score");
            expect(wrapper.find("label").length).toBe(1);
        }); 
        describe(("checking prop types"), () => {
          it("should not throw a warning", () => {
            const expectedProps = {
                player1Score: 0,
                player2Score: 0,
              isGameOver: ()=>{}
            };
            const propsError = CheckPropTypes(Scorer.propTypes, expectedProps, 'props', Scorer.name);
            expect(propsError).toBeUndefined();
          });
        });
      });
      describe(("checking <Scorer /> functionality"), () => {
        let wrapper,onGameEnd;
        beforeEach(() => {
          onGameEnd = sinon.spy();
          wrapper = mount( < Scorer player1Score = {0}
            player2Score = {0}
            isGameOver = {onGameEnd}
              />);
        });

          it("on player 1 scores once the score should be Fifteen,Love", () => {
            wrapper.setProps({ player1Score: 1 });
            expect(wrapper.find("label").text()).toEqual("Fifteen,Love");
          });
          it("on both player scores once the score should be Fifteen all", () => {
            wrapper.setProps({ player1Score: 1 ,player2Score : 1});
            expect(wrapper.find("label").text()).toEqual("Fifteen all");
          });
          it("on player 2 scores twice the score should be Love,Thirty", () => {
            wrapper.setProps({ player1Score: 0 ,player2Score : 2});
            expect(wrapper.find("label").text()).toEqual("Love,Thirty");
          });
          it("on player 1 scores thrice the score should be Forty,Love", () => {
            wrapper.setProps({ player1Score: 3 ,player2Score : 0});
            expect(wrapper.find("label").text()).toEqual("Forty,Love");
          });
          it("on both player scores thrice the score should be Deuce", () => {
            wrapper.setProps({ player1Score: 3 ,player2Score : 3});
            expect(wrapper.find("label").text()).toEqual("Deuce");
          });
          it("on both player scores four times the score should be Deuce", () => {
            wrapper.setProps({ player1Score: 4 ,player2Score : 4});
            expect(wrapper.find("label").text()).toEqual("Deuce");
          });
          it("on player 1 scores four time and player 2 scores five time, the score should be Advantage Player 2", () => {
            wrapper.setProps({ player1Score: 4 ,player2Score : 5});
            expect(wrapper.find("label").text()).toEqual("Advantage Player 2");
          });
          it("on player 1 scores five time and player 2 scores four time, the score should be Advantage Player 1", () => {
            wrapper.setProps({ player1Score: 5 ,player2Score : 4});
            expect(wrapper.find("label").text()).toEqual("Advantage Player 1");
          });
	      it("on player 1 scores four times , player 1 should win and trigger props isGameOver", () => {
            wrapper.setProps({ player1Score: 4 ,player2Score : 0});
            expect(wrapper.find("label").text()).toEqual("Player 1 wins");
            expect(onGameEnd).toHaveProperty('callCount', 1);
          });
          it("on player 1 scores once and player 2 scores four time , player 2 should win and trigger props isGameOver", () => {
            wrapper.setProps({ player1Score: 1 ,player2Score : 4});
            expect(wrapper.find("label").text()).toEqual("Player 2 wins");
            expect(onGameEnd).toHaveProperty('callCount', 1);
          });
          it("on player 1 scores six times and player 2 scores eight time , player 2 should win and trigger props isGameOver", () => {
            wrapper.setProps({ player1Score: 6 ,player2Score : 8});
            expect(wrapper.find("label").text()).toEqual("Player 2 wins");
            expect(onGameEnd).toHaveProperty('callCount', 1);
          });
          it("on player 1 scores eight times and player 2 scores six time , player 1 should win and trigger props isGameOver", () => {
            wrapper.setProps({ player1Score: 8 ,player2Score : 6});
            expect(wrapper.find("label").text()).toEqual("Player 1 wins");
            expect(onGameEnd).toHaveProperty('callCount', 1);
          });
        });