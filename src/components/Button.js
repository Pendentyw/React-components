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
  console.log(primary, secondary, success, warning, danger, outline, rounded);
  const classes = className(rest.classname, 'px-4 py-2 border', {
    'border-blue-500 bg-blue-400': primary,
    'border-gray-700 bg-gray-600': secondary,
    'border-green-500 bg-green-400': success,
    'border-yellow-500 bg-yellow-400': warning,
    'border-red-500 bg-red-400': danger,
    'rounded-full': rounded,
    'text-white': !outline,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-700': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  });

  return (
    <button {...rest} className={classes}>
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
