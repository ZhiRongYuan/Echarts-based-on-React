/**
 * Created by 0291 on 2017/8/29.
 */
import React, { Component } from 'react';
import Chart from '../../component/Chart/index';

function ShowMapChart({
                          echarts,
                          onEvents,
                          mapType
                      }) {
    function randomData() {
        return Math.round(Math.random()*2500);
    }

    let option = {
        title: {
            show: true,
            text: 'test',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        visualMap: {
            show: true,
            seriesIndex: 0,
            min: 1,
            max: 200,
            left: 'right',
            bottom: -10,
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: false,
            color: ['#1772c6', '#2d81c8', '#408dce', '#5197d2', '#77b2de', '#a3cae7', '#bedbeb', '#d0e6f3'],
            textStyle: {
                color: '#9b9b9b'
            },
            orient: 'horizontal'
        },

        xAxis: {
            show: false
        },
        yAxis: {
            show: false
        },
        series: [
            {
                zlevel: 1,
                name: '中国',
                type: 'map',
                mapType: mapType,
                selectedMode : 'multiple',
                roam: true,
                left: 0,
                right: '15%',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    {name: '天津',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '重庆',value: randomData() },
                    {name: '河北',value: randomData() },
                    {name: '河南',value: randomData() },
                    {name: '云南',value: randomData() },
                    {name: '辽宁',value: randomData() },
                    {name: '黑龙江',value: randomData() },
                    {name: '湖南',value: randomData() },
                    {name: '安徽',value: randomData() },
                    {name: '山东',value: randomData() },
                    {name: '新疆',value: randomData() },
                    {name: '江苏',value: randomData() },
                    {name: '浙江',value: randomData() },
                    {name: '江西',value: randomData() },
                    {name: '湖北',value: randomData() },
                    {name: '广西',value: randomData() },
                    {name: '甘肃',value: randomData() },
                    {name: '山西',value: randomData() },
                    {name: '内蒙古',value: randomData() },
                    {name: '陕西',value: randomData() },
                    {name: '吉林',value: randomData() },
                    {name: '福建',value: randomData() },
                    {name: '贵州',value: randomData() },
                    {name: '广东',value: randomData() },
                    {name: '青海',value: randomData() },
                    {name: '西藏',value: randomData() },
                    {name: '四川',value: randomData() },
                    {name: '宁夏',value: randomData() },
                    {name: '海南',value: randomData() },
                    {name: '台湾',value: randomData() },
                    {name: '香港',value: randomData() },
                    {name: '澳门',value: randomData() }
                ]
            },
            {
                zlevel: 2,
                name: '地图指示',
                type: 'bar',
                barWidth: 5,
                itemStyle: {
                    normal: {
                        color: undefined,
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                data: [20]
            }
        ]
    };

    return (
        <Chart
            echarts={echarts}
            onEvents={onEvents}
            showLoading={false}
            style={{ width: '100%', height: '100%' }}
            option={option}
            notMerge={true}
            lazyUpdate={true} />
    );
}

export default ShowMapChart;