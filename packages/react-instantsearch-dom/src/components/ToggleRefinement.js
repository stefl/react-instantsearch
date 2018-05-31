import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createClassNames from '../core/createClassNames';

const cx = createClassNames('ToggleRefinement');

const ToggleRefinement = ({ currentRefinement, label, refine, className }) => (
  <div className={classNames(cx(''), className)}>
    <label className={cx('label')}>
      <input
        className={cx('checkbox')}
        type="checkbox"
        checked={currentRefinement}
        onChange={event => refine(event.target.checked)}
      />
      <span className={cx('labelText')}>{label}</span>
    </label>
  </div>
);

ToggleRefinement.propTypes = {
  currentRefinement: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ToggleRefinement.defaultProps = {
  className: '',
};

export default ToggleRefinement;
