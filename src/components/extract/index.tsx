import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import ExtractItem from './extractItem';
import { ApplicationState } from '../../store';
import { loadRequest } from '../../store/ducks/extract/actions';
import { Extract } from '../../store/ducks/extract/types';
import { Container, List } from './styles';

const ExtractList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

  const extractData = typedUseSelector((state) => state.extract);

  return (
    <Container>
      <List>
        {extractData?.data.map((info: Extract) => (
          <ExtractItem
            key={info.id}
            type={info.type}
            value={info.value}
            createdAt={info.createdAt}
          />
        ))}
      </List>
    </Container>
  );
};

export default ExtractList;
