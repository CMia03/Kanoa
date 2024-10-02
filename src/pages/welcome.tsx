import React from 'react';
import Layout from '@/components/layout';

const welcomePage = () => {
  return (
    <Layout>
       <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="text-lg mt-4">
        This is the welcome page of my Next.js app.
      </p>
    </div>
    </Layout>
   
  );
};
export default welcomePage;