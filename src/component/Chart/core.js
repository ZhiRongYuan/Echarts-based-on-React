import React, { PropTypes } from 'react';
import elementResizeEvent from 'element-resize-event';
import bmap from 'echarts/extension/bmap/bmap';
import _ from 'lodash';

export default class ReactEcharts extends React.Component {
  constructor(props) {
    super(props);
    this.echartsInstance = this.props.echarts; // the echarts object.
    this.echartsElement = null; // echarts div element
  }

  // first add
  componentDidMount() {
    const echartObj = this.renderEchartDom();
    const onEvents = this.props.onEvents || {};

    this.bindEvents(echartObj, onEvents);
    // on chart ready
    if (typeof this.props.onChartReady === 'function') this.props.onChartReady(echartObj);

    // on resize
    elementResizeEvent(this.echartsElement, () => {
      echartObj.resize();
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    //不重复渲染
    if (_.isEqual(nextProps.option, this.props.option) && (nextProps.showLoading === this.props.showLoading)) {
      return false;
    } else {
      return true;
    }
  }

  // update
  componentDidUpdate() {
    this.renderEchartDom();
    this.bindEvents(this.getEchartsInstance(), this.props.onEvents || []);
  }

  // remove
  componentWillUnmount() {
    if (this.echartsElement) {
      // if elementResizeEvent.unbind exist, just do it.
      if (typeof elementResizeEvent.unbind === 'function') {
        elementResizeEvent.unbind(this.echartsElement);
      }
      this.echartsInstance.dispose(this.echartsElement);
    }
  }
  // return the echart object
  getEchartsInstance = () => this.echartsInstance.getInstanceByDom(this.echartsElement) ||
    this.echartsInstance.init(this.echartsElement, this.props.theme);

  // bind the events
  bindEvents = (instance, events) => {
    const _loopEvent = (eventName) => {
      // ignore the event config which not satisfy
      if (typeof eventName === 'string' && typeof events[eventName] === 'function') {
        // binding event
        instance.off(eventName);
        instance.on(eventName, (param) => {
          events[eventName](param, instance);
        });
      }
    };

    for (const eventName in events) {
      if (Object.prototype.hasOwnProperty.call(events, eventName)) {
        _loopEvent(eventName);
      }
    }
  };

  // render the dom
  renderEchartDom = () => {
    // init the echart object
    const echartObj = this.getEchartsInstance();
    // set the echart option
    echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
    // set loading mask
    if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null);
    else echartObj.hideLoading();

    return echartObj;
  };

  render() {
    const style = this.props.style || {
      height: '300px'
    };
    // for render
    return (
      <div
        ref={(e) => { this.echartsElement = e; }}
        style={style}
        className={this.props.className}
      />
    );
  }
}

ReactEcharts.propTypes = {
  option: PropTypes.object.isRequired,  // eslint-disable-line react/forbid-prop-types
  echarts: PropTypes.object.isRequired,  // eslint-disable-line react/forbid-prop-types
  notMerge: PropTypes.bool,
  lazyUpdate: PropTypes.bool,
  style: PropTypes.object,  // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  theme: PropTypes.string,
  onChartReady: PropTypes.func,
  showLoading: PropTypes.bool,
  loadingOption: PropTypes.object,  // eslint-disable-line react/forbid-prop-types
  onEvents: PropTypes.object  // eslint-disable-line react/forbid-prop-types
};

ReactEcharts.defaultProps = {
  echarts: {},
  notMerge: false,
  lazyUpdate: false,
  style: { height: '300px' },
  className: '',
  theme: null,
  onChartReady: () => {},
  showLoading: false,
  loadingOption: {
    text: 'loading',
    color: '#3398db',
    textColor: '#3398db',
    maskColor: 'rgba(255, 255, 255, 0)',
    zlevel: 0
  },
  onEvents: {}
};
