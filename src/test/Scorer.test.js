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
                player2Score: 0
            };
            const propsError = CheckPropTypes(Scorer.propTypes, expectedProps, 'props', Scorer.name);
            expect(propsError).toBeUndefined();
          });
        });
      });
      describe(("checking <Scorer /> functionality"), () => {
        let wrapper;
        beforeEach(() => {
          wrapper = mount( < Scorer player1Score = {0}
            player2Score = {0}
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
        });