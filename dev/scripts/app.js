// I know I only had to make one of the widgets interactive, but I wanted to make it as ready-to-use as possible, so both widgets make use of JSON data (which you can find in the dev folder). On the "Data Transfer" widget, you can see how the data changes when you click on the different tabs.

// I used the Easy Chart tool to create all three graphs in the project. I didn't have enough time to customize their appearances too much, but they are all built using data from the JSON and should still work if that data is edited for whatever reason.

import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import MarketStats from './MarketStats';
import DataTransfer from './DataTransfer';
import data from './data.json';

class App extends React.Component {
  	render() {		  
    	return (
      		<main className="interface">
				<Navigation
					NavigationData={data.Navigation} 
					/>
				<MarketStats
					MarketStatsData={data.MarketStats}
					/>
				<DataTransfer
					diagramStats={data.diagramStats}
					monthReport={data.monthReport}
					/>
      		</main>
    	)
  	}
}

ReactDOM.render(<App />, document.getElementById('app'));
