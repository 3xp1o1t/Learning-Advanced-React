interface InputProps {
  size: 'small' | 'medium' | 'large';
  placeholder: string;
  backgroundColor: 'emerald' | 'sky' | 'rose';
  enable: boolean;
  variantOpacity: number;
  radius: number;
  onChangeText?: () => void;
}

const Input = ({
  size,
  placeholder,
  backgroundColor,
  variantOpacity,
  radius,
  enable,
  onChangeText,
}: InputProps) => {
  const setSize = (size: string) => {
    switch (size) {
      case 'small':
        return 'px-2 py-1';
      case 'medium':
        return 'px-6 py-1';
      case 'large':
        return 'px-12 py-1';
      default:
        return 'px-2 py-1';
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`bg-${backgroundColor}-${variantOpacity} rounded-[${radius}px] ${setSize(
        size,
      )}`}
      readOnly={enable}
      onChange={onChangeText}
    />
  );
};

export default Input;
