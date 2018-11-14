import * as React from 'react';
import { Header } from './main';
import Todos from './todos';
import Profiles from './profiles';
import Jira from './jira';

import { HashRouter as Router, Route } from 'react-router-dom';

class App extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div>
                        <Route path='/todos' component={Todos} />
                        <Route path='/profiles' component={Profiles} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App
