'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import { getBookPostData } from '@/common/api/creatorBookPost';
import { PostDataProps } from '@/common/api/dto';
import Inner from '@/components/inner';
import * as S from './style';

const PostDetail = () => {
  const [selectedPost, setSelectedPost] = useState<PostDataProps>();
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  useEffect(() => {
    const getPostData = async () => {
      const res = await getBookPostData();
      setPostData(res.data);
    };
    getPostData();
  }, [postId]);

  useEffect(() => {
    const data = postData.find((item) => item._id === postId);
    setSelectedPost(data);
  }, [postId, postData]);

  return (
    <Inner>
      <S.Wrapper>
        <S.Picture>
          <Image src={selectedPost?.img || ''} alt="image" fill />
        </S.Picture>
        <S.Title>{selectedPost?.title}</S.Title>
        <S.Data>{selectedPost?.updatedAt?.substring(0, 10)}</S.Data>
        <S.Content>{selectedPost?.content}</S.Content>
      </S.Wrapper>
    </Inner>
  );
};

export default PostDetail;
