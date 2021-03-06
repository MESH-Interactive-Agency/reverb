import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Context from '../../contexts/ApiContext';

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
          <div className="row">
            <div className="col-sm-7">
              <div className="numbers pull-left">Dimensions</div>
            </div>
            <div className="col-sm-5">
              <div className="pull-right"></div>
            </div>
          </div>
        </div>
        <div className=" no-foot">
          <h6 className="big-title">Visualize your space</h6>
          <div className="box-model">
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
