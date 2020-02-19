import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputItem.module.css';
import classnames from 'classnames';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        inputError: false
    };
    onClickButton = () => {
        if (this.state.inputValue !== '') {
            this.setState({
                inputValue: ''
            });
            this.props.onClickAdd(this.state.inputValue);
        } else {
            this.setState({
                inputError: true
            });
        }
    };

    render() {
        const {onClickAdd} = this.props;
        return <div className={styles.wrap}>
            <input
                placeholder='Что нужно сделать?'
                className={styles.input}
                value={this.state.inputValue}
                error={this.state.inputError}
                onChange={event => this.setState({
                    inputValue: event.target.value,
                    inputError: false
                })}
            />
            <Fab size='small'
                 aria-label='add'
                 className={styles.add}
                 onClick={this.onClickButton}>
                <AddIcon/>
            </Fab>
            <div className={classnames({
                [styles.error]: true,
                [styles.error_true]: this.state.inputError
            })}>
                <Alert severity='error'> Упс, кажется, вы забыли написать дело, которое хотите добавить</Alert>
            </div>
        </div>

    }
}

InputItem.propTypes = {
    inputValue: PropTypes.string,
    inputError: PropTypes.bool,
    onClickAdd: PropTypes.func.isRequired
};
export default InputItem;