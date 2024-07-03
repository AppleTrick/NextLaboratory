'use client';

import Welcome from '@/markdown/welcome.mdx';
import Test from '@/markdown/test.md';
import { MDXComponentsProvider } from '@/mdx/mdx-provider';

export default function Page() {
  return (
    <div style={{ width: '1000px' }}>
      <MDXComponentsProvider>
        <Welcome />
        <Test />
      </MDXComponentsProvider>
    </div>
  );
}
