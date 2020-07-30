import React from 'react';
import Octokit from '@octokit/rest';
import styles from './About.module.css';
import Card from '@material-ui/core/Card';
import Preloader from '../Preloader/Preloader';
import noRepoList from '../../img/Frame.png';
import classnames from 'classnames';
import {SVGIcons} from "../SVGIcons/SVGIcons";

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoadingUser: true,
        isLoadingRepo: true,
        repoList: [],
        info: [],
        isErrorUser: false,
        isErrorRepo: false,
        firstRepo: 0,
        lastRepo: 4
    };

    lastPage = () => {
        this.setState({
            firstRepo: this.state.firstRepo - 4,
            lastRepo: this.state.lastRepo - 4
        });
    };

    nextPage = () => {
        this.setState({
            firstRepo: this.state.firstRepo + 4,
            lastRepo: this.state.lastRepo + 4
        });
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'space-inside'
        }).then(({data}) => {
            this.setState({
                repoList: data,
                isLoadingRepo: false
            })
        })
            .catch(error => {
                this.setState({
                    isLoadingRepo: false,
                    isErrorRepo: true
                });
            });
        octokit.users.getByUsername({
            username: 'space-inside'
        }).then(({data}) => {
            this.setState({
                info: data,
                isLoadingUser: false
            });
        })
            .catch(error => {
                this.setState({
                    isLoadingUser: false,
                    isErrorUser: true
                });
            });
    }

    render() {
        const {isLoadingUser, isLoadingRepo, repoList, info, isErrorRepo, isErrorUser, firstRepo, lastRepo} = this.state;
        const repoListPage = repoList.slice(firstRepo, lastRepo);
        return (
            <div>
                {isLoadingUser && isLoadingRepo
                    ? <Preloader/>
                    : <div>
                        {isErrorUser
                            ? <Card className={styles.noUser_wrap}>
                                <h2 className={styles.name}>Евгения Филина</h2>
                                <div className={styles.contacts}>
                                    <a href='mailto: zhenya.filina@mail.ru'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className={styles.email}>
                                        <SVGIcons name='tg' width={16} height={14} className={styles.email__img}/>
                                        zhenya.fiina@mail.ru
                                    </a>
                                    <a href='https://tlg.name/devil_laughs'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className={styles.phone}>
                                        <SVGIcons name='tg' width={16} height={16} className={styles.phone__img}/>
                                        +7 (915) 367-83-69
                                    </a>
                                </div>
                            </Card>
                            : <Card className={styles.user_wrap}>
                                <img src={info.avatar_url} className={styles.avatar} alt='Фото пользователя'/>
                                <div className={styles.info_wrap}>
                                    <h2 className={styles.name}>{info.name}</h2>
                                    <h3 className={styles.bio}>{info.bio}</h3>
                                    <div className={styles.contacts}>
                                        <a href='mailto: zhenya.filina@mail.ru'
                                           target='_blank'
                                           rel='noopener noreferrer'
                                           className={styles.email}>
                                            <SVGIcons name='email' width={16} height={16} className={styles.email__img}/>
                                            zhenya.fiina@mail.ru
                                        </a>
                                        <a href='https://tlg.name/devil_laughs'
                                           target='_blank'
                                           rel='noopener noreferrer'
                                           className={styles.phone}>
                                            <SVGIcons name='tg' width={16} height={14} className={styles.phone__img}/>
                                            +7 (915) 367-83-69
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.connection}>
                                    <a href='https://github.com/space-inside'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className={styles.gh}
                                    >
                                        <SVGIcons name='gh' width={24} height={24} className={styles.gh__img}/>
                                    </a>
                                    <a href='https://vk.com/id103216859'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className={styles.vk}
                                    >
                                        <SVGIcons name='vk' width={24} height={24} className={styles.vk__img}/>
                                    </a>
                                </div>
                            </Card>
                        }
                        <Card>
                            <section className={styles.repo}>
                                <h4 className={styles.title}>Репозитории на github.com</h4>
                                <div>
                                    {isErrorRepo
                                        ? <div className={styles.items__error}>
                                            <img src={noRepoList} alt='/'/>
                                            <h4 className={styles.errorText}>Что-то пошло не так...</h4>
                                            <span className={styles.tryAgain}>Попробуйте <a
                                                href='https://github.com'>загрузить</a> ещё раз</span>
                                        </div>
                                        : <div>
                                            {repoList.length !== 0
                                                ? <div>
                                                    <ol className={styles.items}>
                                                        {repoListPage.map(repo => (
                                                            <a href={repo.clone_url}
                                                               className={styles.link}
                                                               target='_blank'
                                                               rel='noopener noreferrer'
                                                            >
                                                                <li key={repo.id}
                                                                    className={styles.item}
                                                                >
                                                                <span className={styles.repo__name}>
                                                                    {repo.name}
                                                                </span>
                                                                    <div className={styles.repo__info}>
                                                                    <span className={classnames({
                                                                        [styles.language]: true,
                                                                        [styles.html]: repo.language === 'HTML',
                                                                        [styles.css]: repo.language === 'CSS',
                                                                        [styles.js]: repo.language === 'JavaScript'
                                                                    })}>
                                                                        {repo.language}
                                                                    </span>
                                                                        <span
                                                                            className={styles.star}>{repo.stargazers_count}</span>
                                                                        <span
                                                                            className={styles.fork}>{repo.forks_count}</span>
                                                                        <span>Updated on {new Date(repo.updated_at).toLocaleString('en-US', {
                                                                            day: 'numeric',
                                                                            month: 'short',
                                                                            year: 'numeric',
                                                                        })}</span>
                                                                    </div>
                                                                </li>
                                                            </a>
                                                        ))}
                                                    </ol>
                                                    <div className={styles.pagination}>
                                                        <button className={styles.pagination__button}
                                                                onClick={this.lastPage}
                                                                disabled={firstRepo < 4}
                                                        >
                                                            Назад
                                                        </button>
                                                        <button className={styles.pagination__button}
                                                                onClick={this.nextPage}
                                                                disabled={repoList.length <= lastRepo}
                                                        >
                                                            Вперед
                                                        </button>
                                                    </div>
                                                </div>
                                                : <div className={styles.noRepo_wrap}>
                                                    <img src={noRepoList} alt='/'/>
                                                    <h4 className={styles.errorText}>Репозитории отсутствуют</h4>
                                                    <span className={styles.tryAgain}>Добавьте как минимум один репозиторий на
                                                        <a href='https://github.com'
                                                           target='_blank'
                                                           rel='noopener noreferrer'>
                                                            github.com
                                                        </a>
                                                    </span>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </section>
                        </Card>
                    </div>
                }
            </div>
        );
    }
}

export default About;