import React from 'react';
import Layout from '@/components/layout';

const aboutPage = () => {
  return (
    <Layout>
       <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to About</h1>
      <p className="text-lg mt-4">
        This is the welcome page of my Next.js app.
      </p>
    </div>
    </Layout>
   
  );
};
export default aboutPage;