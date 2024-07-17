'use client';

import { MDXComponentsProvider } from '@/mdx/mdx-provider';
import ToolTipShow from './components/ToolTipShow';
import Description from '@/app/docs-page/ui-components/ToolTip/description.md';

const ToolTip = () => {
  return (
    <>
      <ToolTipShow />
      <MDXComponentsProvider>
        <Description />
      </MDXComponentsProvider>
    </>
  );
};

export default ToolTip;
