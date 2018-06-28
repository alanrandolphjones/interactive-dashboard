import React from 'react';
import ReactDOM from 'react-dom';
import { PieChart } from 'react-easy-chart';


class DataTransfer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            openTab: "diagramStats",
            files: 0,
            dataSize: 0,
            audio: 0,
            video: 0,
            photo: 0,
            pieChartData: []
        }

        this.changeTab = this.changeTab.bind(this);
        this.setValues = this.setValues.bind(this);

    }

    setValues(openTab) {

        this.setState({
            files: this.addCommas(this.props[openTab].files),
            dataSize: this.unitDataSize(this.props[openTab].dataSize),
            audio: Math.round(this.props[openTab].audio * 100),
            video: Math.round(this.props[openTab].video * 100),
            photo: Math.round(this.props[openTab].photo * 100),
            pieChartData: this.props[openTab].pieChartData
        });

    }

    //Add commas to integers with more than three digits

    addCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //Add 'Gb' or 'Mb' to dataSize number

    unitDataSize(number) {
        if (number >= 1000) {
            return Math.round(number / 1000) + " Gb"
        } else {
            return number + " Mb"
        }
    
    }

    //Allows user to change the tab on second widget.

    changeTab(e, tabName) {
        e.preventDefault()

        this.setState({
            openTab: tabName,
        })
        
        this.setValues(tabName);

    }

    componentDidMount() {

        this.setValues(this.state.openTab)
        
    }

    render() {
        return (
            <section className="DataTransfer">
                <div className="DataTransfer__tabs">

                    <h3 className={`DataTransfer__tabs__h3 ${this.state.openTab === "diagramStats" ? "DataTransfer__tabs__h3--active" : ''}`}><a href="#" onClick={(e) => this.changeTab(e,"diagramStats")}>Diagram Stats</a></h3>
                    <h3 className={`DataTransfer__tabs__h3 ${this.state.openTab === "monthReport" ? "DataTransfer__tabs__h3--active" : ''}`}><a href="#" onClick={(e)=>this.changeTab(e,"monthReport")}>Month Report</a></h3>
                </div>
                <div className="DataTransfer__info">
                    <h4 className="DataTransfer__info__h4">Data Transfer</h4>
                    <div className="DataTransfer__graph">
                        <PieChart
                            size={250}
                            innerHoleSize={150}
                            data={this.state.pieChartData}
                        />
                        <div className="DataTransfer__graph__container">
                            <h4 className="DataTransfer__graph__h4">{`${this.state.files} files`}</h4>
                            <h3 className="DataTransfer__graph__h3">{this.state.dataSize}</h3>
                        </div>
                    </div>
                </div>
                <div className="DataTransfer__stats">
                    <div className="DataTransfer__statUnit">
                        <h4>audio</h4>
                        <h3>{`${this.state.audio}%`}</h3>
                    </div>
                    <div className="DataTransfer__statUnit">
                        <h4>video</h4>
                        <h3>{`${this.state.video}%`}</h3>
                    </div>
                    <div className="DataTransfer__statUnit">
                        <h4>photo</h4>
                        <h3>{`${this.state.photo}%`}</h3>
                    </div>
                </div>
                <div className="DataTransfer__links">
                    <div className="DataTransfer__linkUnit">
                        <a href="#">
                            <i className="fas fa-cloud-upload-alt"></i>
                            <h4 className="DataTransfer__linkUnit__h4">Upload Files</h4>
                        </a>
                    </div>
                    <div className="DataTransfer__linkUnit">
                        <a href="#">
                            <i className="fas fa-share-alt"></i>
                            <h4 className="DataTransfer__linkUnit__h4">Share Link</h4>
                        </a>
                    </div>
                    <div className="DataTransfer__linkUnit">
                        <a href="#">
                            <i className="fas fa-undo"></i>
                            <h4 className="DataTransfer__linkUnit__h4">Back Up</h4>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default DataTransfer;