'use client';

import Welcome from '@/markdown/welcome.mdx';
import Test from '@/markdown/test.md';
import { MDXComponentsProvider } from '@/mdx/mdx-provider';

export default function Page() {
  return (
    <>
      <MDXComponentsProvider>
        <Welcome />
        <Test />
      </MDXComponentsProvider>
    </>
  );
}
