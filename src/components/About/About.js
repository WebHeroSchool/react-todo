import React from 'react';
import Octokit from '@octokit/rest';
import styles from './About.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Alert from "@material-ui/lab/Alert";

const octokit = new Octokit();
class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        info: [],
        isError: false,
        error: ""
    };
    componentDidMount() {
        octokit.repos.listForUser({
            username: 'space-inside'
        }).then(({data}) => {
            this.setState({
                repoList: data,
                isLoading: false
            })
        })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    error: error.message
                });
            });
        octokit.users.getByUsername({
            username: 'space-inside'
        }).then(({data}) => {
            this.setState({
                info: data,
                isLoading: false
            });
        })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    error: error.message
                });
            });
    }
    render() {
        const {isLoading, repoList, info, isError, error} = this.state;
        return (
            <Paper>
                {isLoading
                    ? <LinearProgress/>
                    : <div className={styles.info}>
                        <div className={styles.user_wrap}>
                            <img src={info.avatar_url} className={styles.avatar}/>
                            <div className={styles.info_wrap}>
                                <h2 className={styles.name}>{info.name}</h2>
                                <h3 className={styles.bio}>{info.bio}</h3>
                                <h3 className={styles.location}>{info.location}</h3>
                            </div>
                        </div>
                        <h4 className={styles.title}>Мои репозтории:</h4>
                        <ol className={styles.items}>
                            {repoList.map(repo => (<li key={repo.id} className={styles.item}>
                                    <a href={repo.clone_url} className={styles.link}>{repo.name}</a>
                                </li>
                            ))}
                        </ol>
                    </div>
                }
                {isError && <Alert severity="error">Что-то пошло не так: {error}</Alert>}
            </Paper>
        );
    };
}
export default About;