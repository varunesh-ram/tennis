import React from 'react';
import {shallow} from 'enzyme';
import Scorer from '../component/Scorer';
describe(("<Scorer/> component "), () => {
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