class Marked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      input: event.target.value });

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "headers" },
      React.createElement("h4", { id: "header" }, "Markdown Editor"),
      React.createElement("h4", null, "Markdown Previewer")),

      React.createElement("div", { id: "container" },
      React.createElement("textarea", { id: "editor", value: this.state.input, onChange: this.handleInput }),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.input) } }))));



  }}
;

marked.setOptions({
  breaks: true });


const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... 
Or _italic_
Or... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://marked.js.org/#/README.md#README.md), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

ReactDOM.render(React.createElement(Marked, null), document.getElementById('root'));