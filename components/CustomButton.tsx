import { Text, TouchableOpacity } from 'react-native';

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};

const CustomButton = (props: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${
        props.containerStyles
      } ${props.isLoading ? 'opacity-50' : ''}`}
      disabled={props.isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${props.textStyles}`}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
