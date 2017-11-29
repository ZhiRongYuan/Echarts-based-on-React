/**
 * Created by zhirongyaun on 2017/11/8.
 * desc:  百度地图
 */
import React, { Component } from 'react';
import Chart from '../../component/Chart/index';

import echarts from 'echarts';

function ShowBMapChart({bmapCenter}) {

    let option = {
        tooltip : {
            confine: true, //是否将 tooltip 框限制在图表的区域内。
            trigger: 'item',
            axisPointer: {
                type: 'cross'
            },
            textStyle: {
                fontSize: 14
            },
            show: true,
            formatter: null
        },
        bmap: {
            center: bmapCenter,
            zoom: 14,
            roam: true
        },
        series: [
            {
                type: 'effectScatter',
                mapType: 'china',
                coordinateSystem: 'bmap',
                zlevel: 3,
                z: 3,
                data:  [
                    {
                        "name":"广东省广州市越秀区广州起义路236号",
                        "value":[
                            "113.270855",
                            "23.1316"
                        ]
                    },
                    {
                        "name":"广东省广州市天河区黄埔大道中364号",
                        "value":[
                            "113.383607",
                            "23.124955"
                        ]
                    },
                    {
                        "name":"广东省广州市越秀区广州起义路236号",
                        "value":[
                            "113.270855",
                            "23.1316"
                        ]
                    },
                    {
                        "name":"广东省广州市天河区员村二横路自编36号",
                        "value":[
                            "113.370653",
                            "23.121532"
                        ]
                    }
                ],
                showEffectOn: 'render', //配置何时显示特效。
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                symbolSize: 16,
                itemStyle: {
                    normal: {
                        color: '#32c1d4',
                        shadowBlur: 18,
                        shadowColor: '#a5db70'
                    }
                }
            }]
    };

    return (
        <Chart
            echarts={echarts}
            onEvents={null}
            showLoading={false}
            style={{ width: '100%', height: '100%' }}
            option={option}
            notMerge={true}
            lazyUpdate={true} />
    );
}

export default ShowBMapChart;