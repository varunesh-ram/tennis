import React from 'react';
import {shallow,mount} from 'enzyme';
import Player from '../component/Player';
import CheckPropTypes from 'check-prop-types';
import sinon from 'sinon';
describe(("<Player/> component no props"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( < Player / > );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should display default heading", () => {
    expect(wrapper.find("h5").text()).toEqual("Props not passed");
  });
    it("should display button for scoring", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
});
describe(("<Player/> component with props"), () => {
      let wrapper;
      beforeEach(() => {
          wrapper = shallow( < Player name = "Player 1"
            updateScore = {
              () => {}
            }
            />);
          });

        it("should render correctly", () => {
          expect(wrapper).toMatchSnapshot();
        }); 
        it("should have passed heading from props", () => {
          expect(wrapper.find("h5").text()).toEqual("Player 1");
        }); 
      it("should display button for scoring", () => {
        expect(wrapper.find("button").length).toBe(1);
        });
        it("should call the funct passed in updateScore Prop on Clicking button", () => {
          const onButtonClick = sinon.spy();
          wrapper = mount( < Player name = "Player 1"
            updateScore = {onButtonClick}
            />);
          wrapper.find("button").simulate('click');
          expect(onButtonClick).toHaveProperty('callCount', 1);
        }); 
        describe(("checking prop types"), () => {
          it("should not throw a warning", () => {
            const expectedProps = {
              name: "Player 2",
              updateScore: () => {}
            };
            const propsError = CheckPropTypes(Player.propTypes, expectedProps, 'props', Player.name);
            expect(propsError).toBeUndefined();
          });
        });
      });