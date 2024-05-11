import markdownIt from "markdown-it"
import dynamic from "next/dynamic";
import 'react-markdown-editor-lite/lib/index.css'

const mdParser = new markdownIt

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false,
  });

interface EditorChange {
    html : string;
    text : string
}

const MarkdownEditor = () => {

    const handleEditorChange = ( {html, text} : EditorChange) => {
        console.log(html , text);
    }

    return (
       <MdEditor
            style={{height : "500px"}}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
       />
    )
}

export default MarkdownEditor