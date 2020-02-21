import React from 'react';
import Octokit from '@octokit/rest';
import styles from './About.module.css';
import Card from '@material-ui/core/Card';
import Preloader from '../Preloader/Preloader';
import noRepoList from '../../img/Frame.png';
import classnames from 'classnames';

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
                                        <svg className={styles.email__img}
                                             width='16' height='16' viewBox='0 0 16 16' fill='#999999'
                                             xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M8.03125 6.5625C7.25581 6.5625 6.625 7.19331 6.625 7.96875C6.625 8.74419 7.25581 9.375 8.03125 9.375C8.80669 9.375 9.4375 8.74419 9.4375 7.96875C9.4375 7.19331 8.80669 6.5625 8.03125 6.5625Z'
                                            />
                                            <path
                                                d='M7.96875 0C3.57469 0 0 3.57469 0 7.96875C0 12.3628 3.57469 16 7.96875 16C12.3628 16 16 12.3628 16 7.96875C16 3.57469 12.3628 0 7.96875 0ZM11.3125 10.3125C10.679 10.3125 10.1202 9.99497 9.78072 9.51262C9.35094 9.99909 8.72981 10.3125 8.03125 10.3125C6.73897 10.3125 5.6875 9.26103 5.6875 7.96875C5.6875 6.67647 6.73897 5.625 8.03125 5.625C8.56087 5.625 9.04456 5.80828 9.4375 6.10572V6.09375C9.4375 5.83466 9.64716 5.625 9.90625 5.625C10.1653 5.625 10.375 5.83466 10.375 6.09375C10.375 7.13625 10.375 7.39453 10.375 8.4375C10.375 8.95431 10.7957 9.375 11.3125 9.375C11.8293 9.375 12.25 8.95431 12.25 8.4375C12.25 5.30028 10.174 3.75 8.03125 3.75C5.70491 3.75 3.8125 5.64241 3.8125 7.96875C3.8125 10.2951 5.70491 12.1875 8.03125 12.1875C8.96875 12.1875 9.85544 11.8872 10.5957 11.3187C11.0901 10.9412 11.6563 11.6863 11.1669 12.0621C10.261 12.7574 9.17703 13.125 8.03125 13.125C5.18809 13.125 2.875 10.8119 2.875 7.96875C2.875 5.12559 5.18809 2.8125 8.03125 2.8125C10.6218 2.8125 13.1875 4.72297 13.1875 8.4375C13.1875 9.47159 12.3466 10.3125 11.3125 10.3125Z'
                                            />
                                        </svg>
                                        zhenya.fiina@mail.ru
                                    </a>
                                    <a href='https://tlg.name/devil_laughs'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className={styles.phone}>
                                        <svg width='16' height='14' viewBox='0 0 16 14' fill='#999999'
                                             xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M0.282729 6.71437L3.96945 8.09037L5.39644 12.6795C5.48774 12.9735 5.84716 13.0821 6.08572 12.8871L8.14075 11.2118C8.35617 11.0362 8.66299 11.0275 8.88811 11.1909L12.5947 13.8819C12.8499 14.0674 13.2114 13.9276 13.2754 13.6192L15.9907 0.558373C16.0605 0.221519 15.7296 -0.059494 15.4088 0.0645593L0.278409 5.90141C-0.0949774 6.04541 -0.0917241 6.57405 0.282729 6.71437ZM5.16646 7.35789L12.3717 2.92019C12.5012 2.84067 12.6344 3.01576 12.5232 3.11891L6.57681 8.64637C6.3678 8.84093 6.23297 9.10131 6.19478 9.38392L5.99222 10.885C5.9654 11.0855 5.68385 11.1054 5.62854 10.9114L4.8495 8.17405C4.76028 7.86184 4.8903 7.52834 5.16646 7.35789Z'
                                            />
                                        </svg>
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
                                            <svg className={styles.email__img} width='16' height='16'
                                                 viewBox='0 0 16 16' fill='#999999'
                                                 xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M8.03125 6.5625C7.25581 6.5625 6.625 7.19331 6.625 7.96875C6.625 8.74419 7.25581 9.375 8.03125 9.375C8.80669 9.375 9.4375 8.74419 9.4375 7.96875C9.4375 7.19331 8.80669 6.5625 8.03125 6.5625Z'
                                                />
                                                <path
                                                    d='M7.96875 0C3.57469 0 0 3.57469 0 7.96875C0 12.3628 3.57469 16 7.96875 16C12.3628 16 16 12.3628 16 7.96875C16 3.57469 12.3628 0 7.96875 0ZM11.3125 10.3125C10.679 10.3125 10.1202 9.99497 9.78072 9.51262C9.35094 9.99909 8.72981 10.3125 8.03125 10.3125C6.73897 10.3125 5.6875 9.26103 5.6875 7.96875C5.6875 6.67647 6.73897 5.625 8.03125 5.625C8.56087 5.625 9.04456 5.80828 9.4375 6.10572V6.09375C9.4375 5.83466 9.64716 5.625 9.90625 5.625C10.1653 5.625 10.375 5.83466 10.375 6.09375C10.375 7.13625 10.375 7.39453 10.375 8.4375C10.375 8.95431 10.7957 9.375 11.3125 9.375C11.8293 9.375 12.25 8.95431 12.25 8.4375C12.25 5.30028 10.174 3.75 8.03125 3.75C5.70491 3.75 3.8125 5.64241 3.8125 7.96875C3.8125 10.2951 5.70491 12.1875 8.03125 12.1875C8.96875 12.1875 9.85544 11.8872 10.5957 11.3187C11.0901 10.9412 11.6563 11.6863 11.1669 12.0621C10.261 12.7574 9.17703 13.125 8.03125 13.125C5.18809 13.125 2.875 10.8119 2.875 7.96875C2.875 5.12559 5.18809 2.8125 8.03125 2.8125C10.6218 2.8125 13.1875 4.72297 13.1875 8.4375C13.1875 9.47159 12.3466 10.3125 11.3125 10.3125Z'
                                                />
                                            </svg>
                                            zhenya.fiina@mail.ru
                                        </a>
                                        <a href='https://tlg.name/devil_laughs'
                                           target='_blank'
                                           rel='noopener noreferrer'
                                           className={styles.phone}>
                                            <svg className={styles.phone__img} width='16' height='14'
                                                 viewBox='0 0 16 14' fill='#999999'
                                                 xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M0.282729 6.71437L3.96945 8.09037L5.39644 12.6795C5.48774 12.9735 5.84716 13.0821 6.08572 12.8871L8.14075 11.2118C8.35617 11.0362 8.66299 11.0275 8.88811 11.1909L12.5947 13.8819C12.8499 14.0674 13.2114 13.9276 13.2754 13.6192L15.9907 0.558373C16.0605 0.221519 15.7296 -0.059494 15.4088 0.0645593L0.278409 5.90141C-0.0949774 6.04541 -0.0917241 6.57405 0.282729 6.71437ZM5.16646 7.35789L12.3717 2.92019C12.5012 2.84067 12.6344 3.01576 12.5232 3.11891L6.57681 8.64637C6.3678 8.84093 6.23297 9.10131 6.19478 9.38392L5.99222 10.885C5.9654 11.0855 5.68385 11.1054 5.62854 10.9114L4.8495 8.17405C4.76028 7.86184 4.8903 7.52834 5.16646 7.35789Z'
                                                />
                                            </svg>
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
                                        <svg width='24'
                                             height='24'
                                             viewBox='0 0 24 24'
                                             fill='#999999'
                                             xmlns='http://www.w3.org/2000/svg'
                                             className={styles.gh__img}
                                        >
                                            <path
                                                d='M22.3901 6.27021C21.3171 4.43164 19.8615 2.97604 18.0231 1.90308C16.1844 0.83007 14.1771 0.293701 11.9998 0.293701C9.82276 0.293701 7.81481 0.830234 5.97651 1.90308C4.13794 2.97598 2.68245 4.43164 1.60938 6.27021C0.536478 8.10873 0 10.1164 0 12.2932C0 14.908 0.762879 17.2593 2.28902 19.3477C3.815 21.4362 5.78634 22.8814 8.20287 23.6835C8.48416 23.7357 8.69239 23.6989 8.82778 23.5742C8.96323 23.4493 9.03087 23.2929 9.03087 23.1057C9.03087 23.0744 9.02819 22.7933 9.02299 22.2619C9.01763 21.7306 9.01511 21.2671 9.01511 20.8716L8.65573 20.9337C8.42659 20.9757 8.13753 20.9935 7.78854 20.9885C7.43972 20.9836 7.07759 20.947 6.70267 20.8791C6.32758 20.8117 5.9787 20.6555 5.65576 20.4107C5.33299 20.1659 5.10385 19.8455 4.9684 19.4499L4.81216 19.0904C4.70802 18.851 4.54406 18.5851 4.32006 18.2936C4.09607 18.0019 3.86956 17.8041 3.64042 17.6999L3.53103 17.6216C3.45813 17.5696 3.39049 17.5068 3.32794 17.434C3.26544 17.3611 3.21865 17.2882 3.1874 17.2152C3.1561 17.1422 3.18204 17.0822 3.2655 17.0352C3.34895 16.9882 3.49978 16.9654 3.71863 16.9654L4.031 17.0121C4.23934 17.0538 4.49705 17.1786 4.80444 17.387C5.11168 17.5953 5.36424 17.8661 5.56218 18.1993C5.80188 18.6264 6.09067 18.952 6.42937 19.176C6.76779 19.3999 7.10901 19.5117 7.45269 19.5117C7.79637 19.5117 8.0932 19.4857 8.3433 19.4339C8.59312 19.3818 8.82751 19.3035 9.04636 19.1994C9.14011 18.5012 9.39535 17.9648 9.81187 17.5899C9.2182 17.5275 8.68446 17.4335 8.21037 17.3086C7.73655 17.1835 7.24692 16.9805 6.7418 16.6989C6.2364 16.4178 5.81715 16.0687 5.48392 15.6523C5.15064 15.2356 4.87712 14.6885 4.66374 14.0116C4.45026 13.3344 4.34349 12.5533 4.34349 11.6679C4.34349 10.4073 4.75503 9.33459 5.57794 8.44912C5.19245 7.50138 5.22884 6.43893 5.68723 5.26188C5.98931 5.16803 6.4373 5.23846 7.03097 5.47274C7.62474 5.70713 8.05949 5.90792 8.33563 6.0744C8.61178 6.24082 8.83304 6.38185 8.99973 6.49623C9.96866 6.2255 10.9686 6.09011 11.9997 6.09011C13.0308 6.09011 14.031 6.2255 14.9999 6.49623L15.5937 6.12141C15.9997 5.87131 16.4791 5.64212 17.0309 5.43378C17.5829 5.22555 18.0051 5.16819 18.2969 5.26205C18.7655 6.43915 18.8072 7.50154 18.4216 8.44929C19.2445 9.33475 19.6562 10.4078 19.6562 11.6681C19.6562 12.5535 19.549 13.3371 19.3359 14.0195C19.1224 14.7019 18.8466 15.2484 18.5081 15.6601C18.1693 16.0717 17.7474 16.418 17.2423 16.6991C16.737 16.9804 16.2473 17.1834 15.7734 17.3085C15.2994 17.4336 14.7657 17.5277 14.172 17.5902C14.7134 18.0587 14.9842 18.7983 14.9842 19.8087V23.1052C14.9842 23.2925 15.0494 23.4488 15.1797 23.5738C15.3099 23.6985 15.5155 23.7352 15.7968 23.683C18.2137 22.8811 20.185 21.4358 21.7109 19.3472C23.2367 17.2588 23.9998 14.9075 23.9998 12.2927C23.9993 10.1162 23.4625 8.10873 22.3901 6.27021Z'
                                            />
                                        </svg>
                                    </a>
                                    <a href='https://vk.com/id103216859'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className={styles.vk}
                                    >
                                        <svg width='24'
                                             height='24'
                                             viewBox='0 0 24 24'
                                             fill='#999999'
                                             xmlns='http://www.w3.org/2000/svg'
                                             className={styles.vk__img}>
                                            <path
                                                d='M12 0C5.37281 0 0 5.37256 0 12C0 18.6274 5.37281 24 12 24C18.6272 24 24 18.6274 24 12C24 5.37256 18.6272 0 12 0ZM18.087 14.2978C18.6463 14.8441 19.2381 15.3583 19.7402 15.961C19.9626 16.2277 20.1723 16.5034 20.3319 16.8135C20.5597 17.2557 20.354 17.7406 19.9582 17.7669L17.4997 17.7664C16.8648 17.8189 16.3595 17.5628 15.9335 17.1287C15.5935 16.7828 15.278 16.4133 14.9505 16.0555C14.8167 15.9087 14.6757 15.7705 14.5078 15.6617C14.1726 15.4437 13.8815 15.5105 13.6895 15.8606C13.4938 16.2169 13.4491 16.6117 13.4304 17.0082C13.4037 17.5879 13.2288 17.7394 12.6472 17.7666C11.4044 17.8248 10.2251 17.6362 9.12908 17.0097C8.16221 16.457 7.41385 15.677 6.76174 14.7938C5.49189 13.0722 4.51937 11.1826 3.64554 9.23881C3.44888 8.80104 3.59276 8.56681 4.0757 8.55773C4.87808 8.54226 5.68045 8.54423 6.48282 8.55699C6.80937 8.56215 7.02543 8.74899 7.1509 9.05713C7.58449 10.1239 8.11605 11.1389 8.78216 12.0803C8.95967 12.3309 9.14087 12.5809 9.39892 12.7579C9.68372 12.9534 9.90077 12.8888 10.0351 12.5708C10.121 12.3688 10.1581 12.1527 10.1767 11.9361C10.2406 11.1944 10.2482 10.4529 10.1377 9.71415C10.069 9.25183 9.80894 8.95327 9.34809 8.86586C9.11337 8.82142 9.14774 8.73451 9.26191 8.60045C9.46005 8.36868 9.64567 8.22529 10.0167 8.22529L12.7943 8.2248C13.232 8.31073 13.3303 8.50715 13.3897 8.94811L13.3921 12.0348C13.387 12.2055 13.4778 12.7113 13.7842 12.823C14.0297 12.904 14.1918 12.7071 14.3386 12.5517C15.0047 11.8448 15.4793 11.0105 15.9043 10.147C16.0919 9.7662 16.2537 9.37213 16.4108 8.97733C16.5277 8.6854 16.7094 8.54177 17.0389 8.54668L19.7136 8.54987C19.7924 8.54987 19.8725 8.55061 19.9506 8.56411C20.4014 8.64121 20.5248 8.83517 20.3854 9.27491C20.1659 9.96581 19.7394 10.5413 19.3225 11.1183C18.8757 11.736 18.3991 12.3322 17.9567 12.9526C17.5501 13.5198 17.5822 13.8053 18.087 14.2978Z'
                                            />
                                        </svg>
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