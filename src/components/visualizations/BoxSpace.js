import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Context from '../../contexts/ReverbContext';

export default class BoxSpace extends Component {
  static contextType = Context;

  getLength = () => {
    return this.context.length / 2;
  };
  getWidth = () => {
    return this.context.width / 2;
  };
  getHeight = () => {
    return this.context.height / 2;
  };

  render() {
    return (
      <div className=" card ">
        <div className="card-header">
          <div class="row">
            <div class="col-sm-7">
              <div class="numbers pull-left">Dimensions</div>
            </div>
            <div class="col-sm-5">
              <div class="pull-right"></div>
            </div>
          </div>
        </div>
        <div className="card-body">
        <h6 class="big-title">Visualize your space</h6>
          <div className="">
            <Canvas camera={{ position: [10, 14, 10], fov: 60 }}>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 15, 10]} angle={0.3} />
              <mesh
                scale={[this.getLength(), this.getHeight(), this.getWidth()]}
              >
                <boxBufferGeometry attach="geometry" />
                <meshLambertMaterial
                  attach="material"
                  color="gray"
                  opacity={0.2}
                  transparent
                />
              </mesh>
              <mesh
                scale={[this.getLength(), this.getHeight(), this.getWidth()]}
              >
                <boxBufferGeometry attach="geometry" />
                <meshLambertMaterial
                  wireframe
                  attach="material"
                  color="black"
                />
              </mesh>
            </Canvas>
          </div>
        </div>
      </div>
    );
  }
}
