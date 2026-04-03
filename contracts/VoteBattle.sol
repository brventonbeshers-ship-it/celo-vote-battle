// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VoteBattle {
    uint256 public constant NUM_POLLS = 20;

    // pollId => option => voteCount
    mapping(uint256 => mapping(uint256 => uint256)) public pollVotes;
    // voter => totalVotes
    mapping(address => uint256) public voterStats;
    // voter => pollId => votesCount
    mapping(address => mapping(uint256 => uint256)) public voterPollStats;

    event Voted(address indexed voter, uint256 indexed pollId, uint256 option);

    function vote(uint256 pollId, uint256 option) external {
        require(pollId >= 1 && pollId <= NUM_POLLS, "Invalid poll");
        require(option == 1 || option == 2, "Invalid option");

        pollVotes[pollId][option] += 1;
        voterStats[msg.sender] += 1;
        voterPollStats[msg.sender][pollId] += 1;

        emit Voted(msg.sender, pollId, option);
    }

    function getPollResults(uint256 pollId) external view returns (uint256 optionA, uint256 optionB) {
        optionA = pollVotes[pollId][1];
        optionB = pollVotes[pollId][2];
    }

    function getVoterStats(address voter) external view returns (uint256) {
        return voterStats[voter];
    }

    function getVoterPollStats(address voter, uint256 pollId) external view returns (uint256) {
        return voterPollStats[voter][pollId];
    }
}
