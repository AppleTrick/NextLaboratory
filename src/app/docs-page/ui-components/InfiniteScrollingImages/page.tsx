'use client';

import Description from '@/app/docs-page/ui-components/InfiniteScrollingImages/description.md';
import InfiniteScrollingImages from './components/InfiniteScrolingImages';
import { MDXComponentsProvider } from '@/mdx/mdx-provider';

const ISI = () => {
  return (
    <div>
      <InfiniteScrollingImages />
      <MDXComponentsProvider>
        <Description />
      </MDXComponentsProvider>
    </div>
  );
};

export default ISI;
