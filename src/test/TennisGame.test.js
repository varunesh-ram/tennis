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
  it("should have a reset Button to rest the Game", () => {   
    expect(wrapper.find("button").length).toBe(1);
    expect(wrapper.find("button").text()).toEqual("Reset Game");
  });
  it("should increase the score of player on appropriate event", () => {
    expect(wrapper.state().player1Score).toBe(0);
    expect(wrapper.state().player2Score).toBe(0);
    wrapper.instance().player1Scores();
    expect(wrapper.state().player1Score).toBe(1);
    expect(wrapper.state().player2Score).toBe(0);
    wrapper.instance().player1Scores();
    expect(wrapper.state().player1Score).toBe(2);
    expect(wrapper.state().player2Score).toBe(0);
    wrapper.instance().player2Scores();
    expect(wrapper.state().player1Score).toBe(2);
    expect(wrapper.state().player2Score).toBe(1);
  });
  it("should set the state game over on notifyed by game over event", () => {
    expect(wrapper.state().isGameOver).toBe(false);
    wrapper.instance().notifyGameOver();
    expect(wrapper.state().isGameOver).toBe(true);
  });
});