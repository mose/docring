var React = require("react")
var PropTypes = require("prop-types")
class Page extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
      </div>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};
module.exports = Page
