import { Avatar, Text } from "react-native-paper"
import VStack from "../../../../components/Stacks/VStack";
import HStack from "../../../../components/Stacks/HStack";
import { SCREEN_WIDTH } from "../../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faClock } from "@fortawesome/free-regular-svg-icons";

interface ConsultaInfoProps {
    title: string;
    value: string;
    icon: IconDefinition;
}

const ConsultaInfo = (props: ConsultaInfoProps) => {
    const { title, value, icon } = props;
    return (
        <VStack style={{ backgroundColor: '#fafafa', gap: 12, padding: 10, borderRadius: 10, width: SCREEN_WIDTH * 0.93, borderWidth: 1, borderColor: '#e0e0e0' }}>
           <HStack style={{ justifyContent: 'space-between' }}>
            <Text>{title}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{value}</Text>
                </HStack>
                <VStack style={{ gap: 12 }}>
                    <HStack style={{ alignItems: 'center', gap: 12 }}>
                        <Avatar.Image size={45} source={require('../../../../assets/images/woman.jpeg')} />
                        <Text>Dr. João</Text>
                        <FontAwesomeIcon icon={faCheckCircle} size={18} color={"green"} style={{left: '40%'}}/>
                        <Text style={{left: '41%', fontWeight: 'bold', fontSize: 16}}>09:00</Text>
                    </HStack>

                    <HStack style={{ alignItems: 'center', gap: 12 }}>
                        <Avatar.Image size={45} source={require('../../../../assets/images/woman2.png')} />
                        <Text>Dr. João</Text>
                        <FontAwesomeIcon icon={faClock} size={18} color={"#EF6C00"} style={{left: '40%'}}/>
                        <Text style={{left: '41%', fontWeight: 'bold', fontSize: 16}}>10:00</Text>
                    </HStack>

                    <HStack style={{ alignItems: 'center', gap: 12 }}>
                        <Avatar.Image size={45} source={require('../../../../assets/images/woman3.png')} />
                        <Text>Dr. João</Text>
                        <FontAwesomeIcon icon={faCheckCircle} size={18} color={"green"} style={{left: '40%'}}/>
                        <Text style={{left: '41%', fontWeight: 'bold', fontSize: 16}}>15:00</Text>
                    </HStack>

                </VStack>
        </VStack>
    )
}

export default ConsultaInfo
