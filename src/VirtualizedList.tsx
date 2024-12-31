import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>
    Row {index}
  </div>
);

const VirtualizedList = () => (
  <List
    height={400}        // Height of the list
    itemCount={1000}    // Total number of items in the list
    itemSize={35}       // Height of each item in the list
    width={300}         // Width of the list
  >
    {Row}
  </List>
);

export default VirtualizedList;
