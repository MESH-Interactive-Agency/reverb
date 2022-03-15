import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';


import Context from '../../contexts/ReverbContext';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />

    </mesh>
  );
}

export default class BoxSpace extends Component {
  static contextType = Context;
  render() {
    return (
      <div className="fill">
        <h3 className="center-text">See Your Space</h3>
        <Canvas>
          <Box></Box>
        </Canvas>
      </div>
    );
  }
}
