import React from 'react';
import ReactDOM from 'react-dom';
import { BarChart } from 'react-easy-chart';


class MarketStats extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stockPrice: 0,
            stockChange: {
                change: "even",
                amount: 0,
                percent: 0
            },
            sharesTraded: 0,
            marketCap: 0,
            yearlyChange: {
                change: "even",
                percent: 0
            },
            stockChangeIcon: "fas fa-equals",
            stockPlusMinusEven: "=",
            yearlyPlusMinusEven: "=",
            stockChartData: [],
            AAPLChartData: [],
            userLocation: {}
        }

    }

    //Makes sure the caret goes up or down, depending on stock price change.

    getStockChangeIcon(change) {
        
        if (change === "increase") {
            return "fas fa-caret-up"
        } else if (change === "decrease") {
            return "fas fa-caret-down"
        } else {
            return "fas fa-equals"
        }

    }

    // Get plus or minus signs for Stock change and yearly change

    plusMinusEven(change) {
        if (change === "increase") {
            return "+"
        } else if (change === "decrease") {
            return "-"
        } else {
            return "="
        }
    }

    // Creates abbreviations for large numbers

    getShortFormNumbers(number) {

        if (number >= 1000000000000) {
            return (Math.round(number / 10000000000) / 100) + " T";
        }
        else if (number >= 1000000000) {
            return (Math.round(number / 10000000) / 100) + " B";
        } 
        else if (number >= 1000000) {
            return (Math.round(number/10000) / 100) + " M";
        } 
        else {
            return number;
        }
        
    }

    componentDidMount() {

        this.setState({
            stockPrice: this.props.MarketStatsData.stockPrice,
            stockChange: this.props.MarketStatsData.stockChange,
            sharesTraded: this.getShortFormNumbers(this.props.MarketStatsData.sharesTraded),
            marketCap: this.getShortFormNumbers(this.props.MarketStatsData.marketCap),
            yearlyChange: this.props.MarketStatsData.yearlyChange,
            stockChangeIcon: this.getStockChangeIcon(this.props.MarketStatsData.stockChange.change),
            stockPlusMinusEven: this.plusMinusEven(this.props.MarketStatsData.stockChange.change),
            yearlyPlusMinusEven: this.plusMinusEven(this.props.MarketStatsData.yearlyChange.change),
            stockChartData: this.props.MarketStatsData.stockChartData,
            AAPLChartData: this.props.MarketStatsData.AAPLChartData,
            userLocation: this.props.MarketStatsData.userLocation
        });

    };

    render() {
        // console.log(this.state);
        
        return (
            <section className="MarketStats">
                <div className="MarketStats__graph">
                    <div className="MarketStats__stockPrice">
                        <h3 className="MarketStats__stockPrice__h3"><i className={this.state.stockChangeIcon}></i>{this.state.stockPrice}</h3>
                        <h4 className="MarketStats__stockPrice__h4">{`${this.state.stockPlusMinusEven}${this.state.stockChange.amount} (${this.state.stockChange.percent}%)`}</h4>
                        <div className="MarketStats__line"></div>
                    </div>
                    <BarChart
                        colorBars
                        height={100}
                        width={300}
                        interpolate={'cardinal'}
                        y2Type="linear"
                        lineData={this.state.stockChartData}
                        data={this.state.stockChartData}
                    />
                </div>
                <div className="MarketStats__infoBox">
                    {/* Make the date/location current */}
                    <h4 className="MarketStats__infoBox__h4">Today 2:25 <span>PM</span></h4>
                    <h3 className="MarketStats__infoBox__h3">{`${this.state.userLocation.city}, ${this.state.userLocation.stateOrProvince}`}</h3>
                    <div className="MarketStats__stockInfo">
                        <div className="MarketStats__marketBox">
                            <h3 className="MarketStats__marketBox__h3">{this.state.sharesTraded}</h3>
                            <h4 className="MarketStats__marketBox__h4">Shares Traded</h4>
                        </div>
                        <div className="MarketStats__marketBox">
                            <h3 className="MarketStats__marketBox__h3">{this.state.marketCap}</h3>
                            <h4 className="MarketStats__marketBox__h4">Market Cap</h4>
                        </div>
                        <div className="MarketStats__unit">
                            {/* Make graph dynamic */}
                            <h3 className="MarketStats__unit__h3">AAPL</h3>
                            <BarChart
                                height={65}
                                width={110}
                                data={this.state.AAPLChartData}
                            />
                        </div>
                        <div className="MarketStats__unit">
                            <h3 className="MarketStats__unit__h3">Yearly Change</h3>
                            <h4 className="MarketStats__unit__h4">{`${this.state.yearlyPlusMinusEven}${this.state.yearlyChange.amount}`}</h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MarketStats;