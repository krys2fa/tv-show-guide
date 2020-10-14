import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notifications from '../Notifications/Notifications';
import CardList from '../CardList/CardList';
import { fetchShowsStartAsync } from '../../store/actions/showActions';

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.shouldComponentRender = this.shouldComponentRender.bind(this);
	}

	componentWillMount() {
		const { fetchShows } = this.props;
		fetchShows();
		console.log('MainPage -> componentWillMount -> fetchShows()', fetchShows());
	}

	shouldComponentRender() {
		const { pending } = this.props;
		if (this.pending === false) return false;
		// more tests
		return true;
	}

	// componentDidMount() {
	//   const { fetchShows } = this.props;
	//   fetchShows();
	//   console.log('MainPage -> componentDidMount -> fetchShows()', fetchShows());

	// }

	// render() {
	//   const { shows } = this.props;
	//   console.log('showing shows', shows);
	//   // console.log('all props', this.props);
	//   return (
	//     <div className="mainpage container">
	//       <div className="row">
	//         <div className="col s12 m6">
	//           {/* <CardList shows={shows} /> */}
	//         </div>
	//         <div className="col s12 m5 offset-m1">
	//           <Notifications />
	//         </div>
	//       </div>
	//     </div>
	//   );
	// }

	render() {
		const { shows, error, pending } = this.props;
    console.log('MainPage -> render -> shows', shows);
    const fetchedShows = shows.shows;

		// if (!this.shouldComponentRender()) return <LoadingSpinner />;

		return (
			// <div className="show-list-wrapper">
			// 	{error && <span className="show-list-error">{error}</span>}
			// 	<CardList ={fetchedShows} />
			// </div>

      <div className="mainpage">
	      <div className="row">
	         {/* <div className="col s12 m4"> */}
           	{error && <span className="show-list-error">{error}</span>}
	           <CardList fetchedShows={fetchedShows} />
	         {/* </div> */}

	       </div>
	     </div>
		);
	}
}

const mapStateToProps = state => ({
  // shows: state.shows.shows,
  shows: state.shows,
  pending: state.pending,
  error: state.error,

});

// const mapDispatchToProps = dispatch => ({
//   fetchShowsStartAsync: () => dispatch(fetchShowsStartAsync()),
// });

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchShows: fetchShowsStartAsync,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
