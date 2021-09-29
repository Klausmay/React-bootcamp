class JSXDemo extends React.Component{
    render(){
        return (
            <div>
            <h1>My Image!</h1>
            <img src="https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?ixhttps://images.unsplash.com/photo-1632800617916-1a824d60ae58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80" />
            </div>
        );
    }
}
ReactDOM.render(<JSXDemo/>, document.getElementById('root'));