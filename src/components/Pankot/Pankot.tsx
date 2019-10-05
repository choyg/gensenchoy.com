import React, { PureComponent } from 'react';
import './Pankot.css';

interface Props {
  text: string;
  code: string;
}
export class Pankot extends PureComponent<Props> {
  componentDidMount() {
    document.addEventListener('keypress', event => {
      if (event.code === this.props.code) this.onPankot();
    });
  }
  /**
   * Copy
   * Show some noise
   */
  onPankot = () => {
    navigator.clipboard.writeText(this.props.text);
  };

  render() {
    return (
      <div className="Pankot">
        <div className="copy">
          <h2 onClick={this.onPankot}>{this.props.text}</h2>
        </div>
      </div>
    );
  }
}
