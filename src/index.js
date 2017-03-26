
const { render } = ReactDOM


//JSX is JavaScript as XML, which is tag-based syntax used to create React elements.
//JSX replaces need for createElement calls. So createElement is removed at top of file. 
// JSX expressions are wrapped in curly brackets. 


  
render( //w/out Babel, tag on line 12 throws an error of "unexpected token"
    <h1 id="title"
        classname='header'
        style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
        Hello 
    </h1>,
  
    document.getElementById('react-container')
)

// Tried Babel 6.1.19, receive error of reactjs Cannot read property 'keys' of undefined
// Tried Babel 5.8.24, error above is gone but not resolving initial syntax error. 

