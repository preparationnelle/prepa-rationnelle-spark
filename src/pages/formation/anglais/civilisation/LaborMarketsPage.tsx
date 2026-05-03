import React from 'react';
import { CivStubPage } from '@/components/formation/CivStubPage';

const LaborMarketsPage = () => (
  <CivStubPage
    title="Labor Markets & Future of Work"
    subtitle="Employment trends, gig economy, and workplace transformation"
    description='This chapter investigates the changing nature of work in the US and UK. We examine the rise of the gig economy, the impact of automation and AI on jobs, and the evolving relationship between employers and employees, including the "Great Resignation" and remote work trends.'
    badges={['Gig Economy', 'Remote Work', 'Automation', 'Labor Unions']}
  />
);

export default LaborMarketsPage;
