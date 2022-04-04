import React, { Component } from 'react';

import AccordionSection from './AccordionSection';
import Context from '../../contexts/ApiContext';

class Accordion extends Component {
  constructor(props) {
    super(props);
    const openSections = {};
    this.state = { openSections };
  }

  static contextType = Context;

  onClick = (label) => {
    const {
      state: { openSections },
    } = this;
    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen,
      },
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <ul>
        {children.map((child, index) => (
          <AccordionSection
            key={index}
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
            color={this.props.color}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </ul>
    );
  }
}

export default Accordion;
