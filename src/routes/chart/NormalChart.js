/**
 * Created by 0291 on 2017/8/10.
 */
import React, { Component } from 'react';
import Chart from '../../component/Chart/index';
import echarts from 'echarts';

function NormalChart() {

  const colors = ['#3398db', '#7ed321', '#675bba'];

    const optionSet = {
        tooltip: {
            trigger: 'axis', //触发类型。 axis: 坐标轴触发  item:数据项图形触发
            axisPointer: {
                type: 'cross'
            },
            confine: true, //是否将 tooltip 框限制在图表的区域内。
            textStyle: {
                fontSize: 14
            },
            formatter: null
        },
        grid: {
            left: '10px',
            right: '0px',
            bottom: '10px',
            top: '40px',
            containLabel: true
        },
        graphic: [],
        toolbox: {
            show: true,
            showTitle: false,
            right: 8,
            top: 16,
            iconStyle: {
                normal: {
                    borderColor: '#b8c7ce',
                    opacity: 1
                },
                emphasis: {
                    borderColor: '#b8c7ce',
                    opacity: 0.8
                }
            }
        },
        axisLineLineStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#3c475d' // 0% 处的颜色
                }, {
                    offset: 1, color: '#3c475d' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        },
        mobileAxisLineLineStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#c7c7c7' // 0% 处的颜色
                }, {
                    offset: 1, color: '#c7c7c7' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        },
        asisLineAndasisLabel: {
            //是否显示坐标轴刻度
            axisTick: {
                show: false
            },
            //坐标轴刻度标签
            axisLabel: {
                formatter: null,
                color: '#9b9b9b',
                textStyle: {
                    fontSize: 14
                }
            }
        },
        yAxisStyle: {
            //坐标轴在 grid 区域中的分隔线。
            splitLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#3c475d'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#9b9b9b'
                }
            },
            //是否显示坐标轴刻度
            axisTick: {
                show: false
            }
        }
    };
  let option = {
      title: {
          text: ''
      },
      textStyle: {
          color: '#9b9b9b'
      },
      //图例组件
      legend: {
          textStyle: {
              color: '#9b9b9b'
          },
          right: 0,
          top: 0,
          formatter: '{name} : ',
          align: 'right'
      },
      backgroundColor: 'rgb(36, 41, 53)',
      color: colors,
      grid: optionSet.grid,
      //提示框组件
      tooltip: optionSet.tooltip,
      //原生图形元素组件
      graphic: optionSet.graphic,
      //工具栏
      toolbox: null,
      //X轴坐标
      xAxis: {
          splitLine: {
              lineStyle: {
                  //type: 'dashed'
              }
          },
          nameLocation: 'end',
          nameGap: -40,
          nameTextStyle: {
              color: '#9b9b9b'
          },
          axisLine: {
              show: true,
              onZero: false,
              lineStyle: optionSet.axisLineLineStyle
          },
          ...optionSet.asisLineAndasisLabel,
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {
          //坐标轴名称的文字样式
          nameTextStyle: {
              color: '#9b9b9b'
          },
          //坐标轴刻度标签
          axisLabel: {
              color: '#9b9b9b',
              textStyle: {
                  fontSize: 14
              }
          },
          ...optionSet.yAxisStyle
      },
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
          lineStyle: { //折线的样式
              normal: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetY: 10
              }
          },
          smooth: false, //是否平滑曲线显示。
          showAllSymbol: false,
          symbol: 'emptyCircle', //折线转折点的 样式
          symbolSize: 6, //折线转折点的 大小
      },
          {
              name: '销量',
              type: 'line',
              data: [5, 20, 36, 10, 10, 20],
              lineStyle: { //折线的样式
                  normal: {
                      width: 3,
                      shadowColor: 'rgba(0,0,0,0.4)',
                      shadowBlur: 10,
                      shadowOffsetY: 10
                  }
              },
              smooth: false, //是否平滑曲线显示。
              showAllSymbol: false,
              symbol: 'emptyCircle', //折线转折点的 样式
              symbolSize: 6, //折线转折点的 大小
          }
      ]
  }

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

export default NormalChart;
