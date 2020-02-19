import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Card from '@material-ui/core/Card';
import styles from './App.module.css';
import logo from '../../img/WHS_black.svg';

class App extends React.Component {
    render() {
        return (<Router>
            <div className={styles.wrap}>
                <Card className={styles.card}>
                    <a className={styles.logo}
                       href='https://webheroschool.ru/'
                       target='_blank'
                       rel='noopener noreferrer'>
                        <img  alt='logo'
                              src={logo}
                              className={styles.logo__svg}
                        />
                    </a>
                    <NavLink to='/about'
                             className={styles.link}
                             activeClassName={styles.link_active}>
                        <button className={styles.button}>Обо мне</button>
                    </NavLink>
                    <NavLink to='/todo'
                             className={styles.link}
                             activeClassName={styles.link_active}>
                       <button className={styles.button}>Дела</button>
                    </NavLink>
                </Card>
                <div>
                    <Route path='/about' exact component={About}/>
                    <Route path='/todo' component={Todo}/>
                    <Route path='/' exact component={About}/>
                </div>
            </div>
        </Router>)
    }
}

export default App;