import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './App.module.css';
const App = () => {
    return (<Router>
        <div className={styles.wrap}>
            <Paper classes={{ root: [styles.paper] }}>
                <Tabs
                    indicatorColor="default"
                    textColor="primary"
                    centered
                >
                    <Link to='/' className={styles.link}>
                        <Tab label="About" classes={{root: [styles.button]}}/>
                    </Link>
                    <Link to='/todo' className={styles.link}>
                        <Tab label="Todos" classes={{root: [styles.button]}}/>
                    </Link>
                    <Link to='/contacts' className={styles.link}>
                        <Tab label="Contacts" classes={{root: [styles.button]}}/>
                    </Link>
                </Tabs>
            </Paper>
            <Paper classes={{root: [styles.panel] }}>
                <Route path='/' exact component={About} />
                <Route path='/todo' component={Todo} />
                <Route path='/contacts' component={Contacts} />
            </Paper>
        </div>
    </Router>)
};

export default App;