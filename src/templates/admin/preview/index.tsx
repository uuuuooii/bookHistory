import React from 'react';
import ListElement from '@/components/listElement';
import Wrapper from './style';
import { PostDataProps } from '@/common/api/dto';

interface PreviewProps {
  isUpload: boolean,
  editItem: {
    editItem: PostDataProps | undefined;
    onClickEditItem: (item: PostDataProps) => void;
  }
}

const Preview = ({ isUpload, editItem }: PreviewProps) => {
  return (
    <Wrapper>
      <ListElement isUpload={isUpload} editItem={editItem} isAdmin />
    </Wrapper>
  );
};

export default Preview;
