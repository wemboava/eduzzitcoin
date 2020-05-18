import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { useTransition } from 'react-spring';

import ExtractItem from './extractItem';
import { ApplicationState } from '../../store';
import { extractLoadRequest } from '../../store/ducks/extract/actions';
import { Extract } from '../../store/ducks/extract/types';
import { Container, List } from './styles';

const ExtractList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(extractLoadRequest());
  }, [dispatch]);

  const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

  const { data } = typedUseSelector((state) => state.extract);

  const messagesWithTransitions = useTransition(data, (extract) => extract.id, {
    initial: { right: '0%', opacity: 1 },
    from: { right: '-100%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-100%', opacity: 0 },
  });

  return (
    <Container>
      <List>
        {messagesWithTransitions.map(({ item, key, props }) => (
          <ExtractItem
            key={key}
            id={item.id}
            style={props}
            type={item.type}
            value={item.value}
            createdAt={item.createdAt}
          />
        ))}
      </List>
    </Container>
  );
};

export default ExtractList;
