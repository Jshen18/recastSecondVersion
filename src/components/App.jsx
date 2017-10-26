class App extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     somethingElse: null,
    //     nowPlaying : null
    //   }
  }
    
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search /*should start a new query and GET data*/ />
          </div>
        </nav>
        <div className="col-md-7">
          <VideoPlayer video={this.props.videos[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.videos}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//App
//search
// video list
//video entry list
//video player
