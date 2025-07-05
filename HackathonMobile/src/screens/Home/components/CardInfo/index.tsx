import { Text } from "react-native-paper"
import VStack from "../../../../components/Stacks/VStack";
import HStack from "../../../../components/Stacks/HStack";
import { SCREEN_WIDTH } from "../../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardInfoProps {
    title: string;
    value: string;
    icon: IconDefinition;
}

const CardInfo = (props: CardInfoProps) => {
    const { title, value, icon } = props;
    return (
        <VStack style={{ backgroundColor: '#fafafa', gap: 12, padding: 10, borderRadius: 10, width: SCREEN_WIDTH * 0.45, borderWidth: 1, borderColor: '#e0e0e0' }}>
            <Text>{title}</Text>
            <HStack style={{ justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{value}</Text>
                <FontAwesomeIcon icon={icon} size={18} color={"#27454B"}/>
            </HStack>
        </VStack>
    )
}

export default CardInfo
