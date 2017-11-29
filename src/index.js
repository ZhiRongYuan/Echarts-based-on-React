/**
 * Created by zhirongyuan on 2017/8/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import EchartsMap from './routes/chart/EchartsMap';
import Styles from './index.css';
import axios from 'axios';
import echarts from 'echarts';
import chinaJson from '../public/mapJson/china.json';
import zhejiang from '../public/mapJson/zhejiang.json';
import { chinaMap } from './routes/chart/china-main-map';
echarts.registerMap('china', chinaJson);  //初始中国地图
import NormalChart from './routes/chart/NormalChart';
import ShowBMapChart from './routes/chart/EchartsBMap';

class App extends React.Component {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            mapType: 'china',
            bmapCenter: []
        }
        this.echartsInstance = echarts;
    }

    componentWillMount() {

    }

    clickHandelr() {

    }

    getMapChartEvents() {
        return {
            click: (params) => {
                if (params.name && chinaMap[params.name]) {
                    let config = {
                        url:`mapJson/${chinaMap[params.name]}.json`,
                        method: 'get'
                    };

                    axios(config).then((result)=> {
                            this.echartsInstance.registerMap(chinaMap[params.name], result.data);
                            this.setState({
                                mapType: chinaMap[params.name]
                            });
                        }, err => {
                            const error = new Error('未请求到地图数据');
                            error.response = err.response;
                            throw error;
                        })
                } else {
                    const myGeo = new BMap.Geocoder();
                    myGeo.getPoint(params.name, (point) => {
                        if(point){
                            this.setState({
                                mapType: '',
                                bmapCenter: [point.lng, point.lat]
                            });
                        }
                    });
                }
            }
        };
    }

    render () {
        return (
            <ul className='Wrap clearfix'>
                <li>
                    <div className="chartWrap">
                        <div className="chartTitle">报表1</div>
                        <div style={{ width: '100%', height: '200px' }} className="chart">
                            <NormalChart />
                        </div>
                    </div>
                </li>
                <li>
                    <div style={{ width: '100%', height: '100%' }}>
                        {
                            this.state.mapType ? <EchartsMap echarts={this.echartsInstance} onEvents={this.getMapChartEvents()} mapType={this.state.mapType}/> :
                                <ShowBMapChart bmapCenter={this.state.bmapCenter} />
                        }
                    </div>
                </li>
                <li>
                    <div className="chartWrap">
                        <div className="chartTitle">报表1</div>
                        <div style={{ width: '100%', height: '200px' }}>
                            <NormalChart />
                        </div>
                    </div>
                </li>
            </ul>
    )
    }
};
ReactDOM.render(<App/>, document.getElementById('app'));