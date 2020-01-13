/* eslint-disable react/no-array-index-key */
/**
 *
 * LeaderBoardTable
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Table, Divider, Tag } from 'antd';

function LeaderBoardTable({ players, points }) {
  const [leaderboard, setLeaderBoard] = React.useState({
    leaderboard: []
  })

  React.useEffect(() => {
      const fetchLeaderboard = async () => {
      const res = await fetch('https://dionaditya-rockpaperscissorsserver.glitch.me/leaderboard');
      const result = await res.json();
      console.log(result)
      setLeaderBoard({
        ...leaderboard,
        leaderboard: [...result.data],
      });
    };
    fetchLeaderboard();
  }, [points])

  const columns = [
      {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  ]

  const data = leaderboard.leaderboard.map((player, index) => {
    return({
      no: index + 1,
      name: player[2],
      score: player[0],
    })
  })

  if(leaderboard.leaderboard.length <= 0) {
    return(
      <div>
        ...Loading
      </div>
      )
  }

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

LeaderBoardTable.propTypes = {};

export default LeaderBoardTable;
