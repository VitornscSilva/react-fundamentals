import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <>
      <h1>Post Id {params.id}</h1>
      <p>User {queryParams.get('user')}</p>
    </>
    
  )
}