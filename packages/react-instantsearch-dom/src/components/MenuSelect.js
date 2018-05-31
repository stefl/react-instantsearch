import { find } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import translatable from '../core/translatable';
import createClassNames from '../core/createClassNames';

const cx = createClassNames('MenuSelect');

class MenuSelect extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        count: PropTypes.oneOfType([
          PropTypes.number.isRequired,
          PropTypes.string.isRequired,
        ]),
        isRefined: PropTypes.bool.isRequired,
      })
    ).isRequired,
    canRefine: PropTypes.bool.isRequired,
    refine: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  get selectedValue() {
    const { value } = find(this.props.items, { isRefined: true }) || {
      value: 'ais__see__all__option',
    };
    return value;
  }

  handleSelectChange = ({ target: { value } }) => {
    this.props.refine(value === 'ais__see__all__option' ? '' : value);
  };

  render() {
    const { items, canRefine, translate, className } = this.props;

    return (
      <div
        className={classNames(cx('', !canRefine && '-noRefinement'), className)}
      >
        <select
          value={this.selectedValue}
          onChange={this.handleSelectChange}
          className={cx('select')}
        >
          <option value="ais__see__all__option" className={cx('option')}>
            {translate('seeAllOption')}
          </option>

          {items.map(item => (
            <option
              key={item.value}
              value={item.value}
              className={cx('option')}
            >
              {item.label} ({item.count})
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default translatable({
  seeAllOption: 'See all',
})(MenuSelect);
