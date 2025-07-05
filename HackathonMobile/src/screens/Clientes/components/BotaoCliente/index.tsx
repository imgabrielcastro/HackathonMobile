import { Text } from "react-native-paper"
import VStack from "../../../../components/Stacks/VStack";
import { SCREEN_WIDTH } from "../../../../constants";
import { TouchableOpacity } from "react-native";
import { EnumButtonPerfilCliente } from "../../../../enum/EnumPerfilCliente";
import { header } from "../../../../theme/names";

interface ButtonClientProps {
    title: string;
    selected: EnumButtonPerfilCliente;
    tipo: EnumButtonPerfilCliente;
    setButtonSelected: (selected: EnumButtonPerfilCliente) => void;
}

const ButtonClient = (props: ButtonClientProps) => {
    const { title, selected, tipo, setButtonSelected } = props;
    const isSelected = selected === tipo;
    
    const bgColor = isSelected ? header[50] : '#f1f1f1';

    const handlePress = () => {
        setButtonSelected(tipo);
    }
    return (
        <VStack style={{ backgroundColor: bgColor, gap: 12, padding: 10, borderRadius: 10, width: SCREEN_WIDTH * 0.22, alignItems: 'center' }}>
            <TouchableOpacity onPress={handlePress}>
            <Text variant="titleSmall" style={{ fontWeight: 'bold', color: '#27454B' }}>{title}</Text>
            </TouchableOpacity>
        </VStack>
    )
}

export default ButtonClient
