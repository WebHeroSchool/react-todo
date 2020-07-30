import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputItem.module.css';
import classnames from 'classnames';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from '@material-ui/core/styles/withStyles';

const StyledTooltip = withStyles({
    tooltip: {
        backgroundColor: '#356EFF',
        color: '#FFFFFF',
        boxShadow: 'none',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
    },
    arrow: {
        color: '#356EFF',
    }
})(Tooltip);

class InputItem extends React.Component {
    state = {
        inputValue: '',
        inputError: false,
        open: false
    };
    onClickButton = () => {
        if (this.state.inputValue !== '') {
            const itemListFind = this.props.items.find(item => item.value.toLowerCase() === this.state.inputValue.toLowerCase());
            if (!itemListFind) {
                this.setState({
                    inputValue: ''
                });
                this.props.onClickAdd(this.state.inputValue);
            } else {
                this.setState({
                    open: true
                });
            }
        } else {
            this.setState({
                inputError: true
            });
        }
    };

    render() {
        const {onClickAdd, items} = this.props;
        return <div className={styles.wrap}>
            <StyledTooltip title='Такая задача уже есть в вашем списке. Введите другое название'
                           arrow
                           disableFocusListener
                           disableHoverListener
                           disableTouchListener
                           open={this.state.open}
            >
                <div className={styles.input_wrap}>
                    <input
                        placeholder='Что нужно сделать?'
                        className={styles.input}
                        value={this.state.inputValue}
                        error={this.state.inputError}
                        onChange={event => this.setState({
                            inputValue: event.target.value,
                            inputError: false,
                            open: false
                        })}
                    />
                    <Fab size='small'
                         aria-label='add'
                         className={styles.add}
                         onClick={this.onClickButton}>
                        <AddIcon/>
                    </Fab>
                </div>
            </StyledTooltip>
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