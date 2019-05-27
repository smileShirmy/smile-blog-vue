import marked from 'marked'
import highlight from './highlight'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code) => {
    return highlight.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default (content) => {
  return marked(content);
}