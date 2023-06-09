'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.main`
  /* padding-top: 68px; */
`;

export const Picture = styled.picture`
  position: relative;
  display: block;
  width: 100%;
  height: 300px;
  background-position: 50%;
  background-size: cover;
  img {
    object-fit: cover;
  }
`;

export const TitleContent = styled.div`
  display: grid;
  gap: 10px;
  padding-top: 30px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 22px;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 14px;
`;
