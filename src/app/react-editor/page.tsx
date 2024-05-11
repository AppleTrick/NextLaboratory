"use client"

import { Suspense, lazy } from "react";
const MarkdownEditor = lazy(() =>import('@/components/markdownEditor/MarkdownEditor'))

const reactEdiorPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading Editor...</div>}>
                <MarkdownEditor/>
            </Suspense>
        </div>
    )
}

export default reactEdiorPage;