import { Image } from "react-native";
import VStack from "../../../components/Stacks/VStack";
import { Text } from "react-native-paper";
import CustomProgressBar from "../../../components/CustomProgressBar";
import { useEffect, useState } from "react";



const CarregarPlano = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (progress < 60) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 60) {
                        clearInterval(interval!);
                        return 60;
                    }
                    return prev + 1;
                });
            }, 5);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [progress]);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (progress >= 60) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval!);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 5);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [progress]);
    
    return (
        <VStack style={{ flex: 1, padding: 20, gap: 12, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require("../../../../src/assets/images/prato.png")} style={{ width: 200, height: 200 }} />
        <Text>Gerando plano alimentar.</Text>
        <Text>Por favor, aguarde.</Text>
        <CustomProgressBar progress={progress} />
        </VStack>
    )
}

export default CarregarPlano
