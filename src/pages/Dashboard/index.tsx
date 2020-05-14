import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { ApplicationState } from '../../store';
import { loadRequest } from '../../store/ducks/history/actions';
// import { History } from '../../store/ducks/history/types';

import Extract from '../../components/extract';
import Chart from '../../components/common/chart';
import Header from '../../components/common/header';
import { Container, Content, Button } from './styles';

interface ChartConfigData {
  color: string;
  targetValue: ValueData;
}

interface ValueData {
  targetValue?: 'buy' | 'sell';
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const [historicType, setHistoricType] = useState<ValueData>(
    'buy' as ValueData,
  );

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

  const historytData = typedUseSelector((state) => state.history);

  const chartConfig: ChartConfigData[] = [
    {
      color: '#4B68ED',
      targetValue: 'buy' as ValueData,
    },
    {
      color: '#5ED8F7',
      targetValue: 'sell' as ValueData,
    },
  ];

  return (
    <Container>
      <Header />
      <Content>
        <div className="chart-wrapper">
          <strong>Historic</strong>
          <div className="chart-wrapper__actions">
            <Button
              onClick={() => setHistoricType('buy' as ValueData)}
              bgColor="#4B68ED"
              isActivity={historicType === 'buy'}
            >
              Buy
            </Button>
            <Button
              onClick={() => setHistoricType('sell' as ValueData)}
              bgColor="#5ED8F7"
              isActivity={historicType === 'sell'}
            >
              Sell
            </Button>
          </div>
          <Chart
            chartColor={
              chartConfig?.find((data) => data.targetValue === historicType)
                ?.color as string
            }
            dataTarget={
              chartConfig?.find((data) => data.targetValue === historicType)
                ?.targetValue as string
            }
            data={historytData.data}
          />
        </div>
        <div className="extract-wrapper">
          <strong>Transactions</strong>
          <Extract />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
