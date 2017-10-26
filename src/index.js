import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCoZqoO4PAor41EqatZnsDKnHNsPwcelPU';

const App = () => {
    return <div>
            <SearchBar />
        </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));