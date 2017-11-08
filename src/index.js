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

class App extends React.Component {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            mapType: 'china'
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
                                mapType: chinaMap[params.name],
                                mapSeriesType: 'map'
                            });
                        }, err => {
                            console.error(err);
                            const error = new Error('连接服务器失败，请稍后重试');
                            error.response = err.response;
                            throw error;
                        })
                }
            }
        };
    }

    render () {
        return (
            <ul className='Wrap clearfix'>
                <li>

                </li>
                <li>
                    <EchartsMap echarts={this.echartsInstance} onEvents={this.getMapChartEvents()} mapType={this.state.mapType}/>
                </li>
                <li>

                </li>
            </ul>
    )
    }
};
ReactDOM.render(<App/>, document.getElementById('app'));