import React, { Component } from 'react';

export const desactivable = (InnerComponent) => {
  class Desactivable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: true,
      };
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        visible: !this.state.visible,
      });
    }

    render() {
      const { ...passThroughProps } = this.props;

      return (
        <div>
          {this.state.visible && <InnerComponent {...passThroughProps}/>}
          <button onClick={this.toggle}>Toggle</button>
        </div>
      );
    }
  }

  Desactivable.displayName = `Desactivable(${InnerComponent.displayName || InnerComponent.name || 'Component'})`;

  return Desactivable;
};

