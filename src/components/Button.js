import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(rest.classname, ' flex px-5 py-2 m-1 border', {
    'border-blue-500 bg-blue-400 hover:bg-blue-300': primary,
    'border-gray-700 bg-gray-600 hover:bg-gray-500': secondary,
    'border-green-500 bg-green-400 hover:bg-green-300': success,
    'border-yellow-500 bg-yellow-400 hover:bg-yellow-300': warning,
    'border-red-500 bg-red-400': danger,
    'rounded-full': rounded,
    'text-white': !outline,
    'bg-white hover:bg-gray-100': outline,
    'text-blue-500': outline && primary,
    'text-gray-700': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  });

  return (
    <button
      {...rest}
      className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger can be true');
    }
  },
};

export default Button;
