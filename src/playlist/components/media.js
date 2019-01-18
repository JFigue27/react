import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./media.css";

class Media extends PureComponent {
  state = {
    author: "Jaime Figueroa"
  };
  /* constructor(props) {
    super(props);
    this.state = {
      author: props.author
    };
    this.handleClick = this.handleClick.bind(this);
  }*/
  //handleClick = event => {
  //  /* console.log(this.props.title); */
  //  this.setState({
  //    author: "Alfredo Pacheco"
  //  });
  //};
  render() {
    const style = {
      container: {
        fontSize: 18,
        color: "#44546b",
        cursor: "pointer",
        width: 260,
        border: "1px solid red"
      }
    };
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" src={this.props.cover} alt="" width={260} height={160} />{" "}
          <h3 className="Media-title"> {this.props.title} </h3> <p className="Media-author"> {this.state.author} </p>{" "}
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(["video", "audio"])
};

export default Media;
