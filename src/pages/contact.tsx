import React from 'react';
import Layout from '@/components/layout';
import { Typography } from '@/components/ui/Typography';

const contactPage = () => {
  return (
    <Layout>
       <div className="flex flex-col items-center justify-center h-screen">
      <Typography variant="h1" className="text-4xl font-bold">Welcome to contact</Typography>
      <p className="text-lg mt-4">
        This is the welcome page of my Next.js app.
      </p>
    </div>
    </Layout>
   
  );
};
export default contactPage;