import React from 'react';

import ListElement from '@/components/listElement';
import Inner from '@/components/inner';
import * as S from './style';

const Posts = () => {
  return (
    <Inner>
      <S.TitleContent>
        <S.Title>독서 기록</S.Title>
        <S.Desc>완독한 책을 기록하는 공간입니다</S.Desc>
      </S.TitleContent>
      <ListElement />
    </Inner>
  );
};

export default Posts;