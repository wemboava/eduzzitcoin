import React, { useEffect } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
// eslint-disable-next-line @typescript-eslint/camelcase
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
// eslint-disable-next-line @typescript-eslint/camelcase
import am4themes_frozen from '@amcharts/amcharts4/themes/frozen';

import { History } from '../../../store/ducks/history/types';
// import dataHistory from './data.json';

// am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);

interface ChartData {
  buy: number;
  sell: number;
  createdAt: string;
}

interface PropsData {
  data: History[];
  dataTarget: string;
  chartColor: string;
}

const Chart: React.FC<PropsData> = ({ data, dataTarget, chartColor }) => {
  function generateChartData(chartData: ChartData[]) {
    const newChartData = chartData.map((item: ChartData) => {
      return {
        buy: item.buy.toLocaleString(),
        sell: item.sell.toLocaleString(),
        createdAt: new Date(item.createdAt),
      };
    });
    return newChartData;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function am4themesMyTheme(target: any) {
    if (target instanceof am4core.ColorSet) {
      // eslint-disable-next-line no-param-reassign
      target.list = [am4core.color(chartColor)];
    }
  }

  // deposit: '#4B68ED',
  // investment: '#5ED8F7',
  // liquidation: '#F69932',

  am4core.useTheme(am4themesMyTheme);

  useEffect(() => {
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.paddingRight = 20;
    chart.data = data;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: 'minute',
      count: 1,
    };

    dateAxis.tooltipDateFormat = 'HH:mm, d MMMM';

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    valueAxis.title.text = 'Price R$';

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'createdAt';
    series.dataFields.valueY = dataTarget;
    series.tooltipText = `${dataTarget}: [bold]{valueY}[/]`;
    series.fillOpacity = 0.3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    dateAxis.start = 0;
    dateAxis.keepSelection = true;
  }, [data, dataTarget]);

  return <div id="chartdiv" style={{ width: '100%', height: '500px' }} />;
};

export default Chart;
