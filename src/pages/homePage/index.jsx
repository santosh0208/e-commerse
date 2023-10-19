import DefaultLayout from '@/layouts';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>This is Home Page</h1>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
