import React from 'react';
import {shallow} from 'enzyme';
import TennisGame from "../component/TennisGame";
import Player from "../component/Player";
import Scorer from "../component/Scorer";
describe(("<TennisGame/> component"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( < TennisGame / > );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have two players and one scorer", () => {
    expect(wrapper.find(Player)).toBeDefined();
    expect(wrapper.find(Player).length).toBe(2);
    expect(wrapper.find(Scorer)).toBeDefined();
    expect(wrapper.find(Scorer).length).toBe(1);    
  });
});