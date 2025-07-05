import React from "react";
import HeaderUsuario from "./components/Header";
import VStack from "../../components/Stacks/VStack";
import { ScrollView } from "react-native";
import HStack from "../../components/Stacks/HStack";
import CardInfo from "./components/CardInfo";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faStar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons/faDollar";
import ConsultaInfo from "./components/ConsultaInfo";

const HomePage = () => {
  return (
    <VStack style={{ flex: 1, backgroundColor: "#f1f1f1", gap: 20 }}>
      <HeaderUsuario/>
      <ScrollView>
        <VStack style={{ gap: 12 }}>
          <HStack style={{ gap: 12, flex: 1, justifyContent: 'center' }}>
            <CardInfo title="Clientes ativos" value="30" icon={faUsers} />
            <CardInfo title="Consultas Hoje" value="3" icon={faCalendar} />
          </HStack>
          <HStack style={{ gap: 12, flex: 1, justifyContent: 'center' }}>
            <CardInfo title="Avaliação" value="4.9" icon={faStar} />
            <CardInfo title="Receita mensal" value="R$ 8.4k" icon={faDollar} />
          </HStack>
        </VStack>

        <VStack style={{ gap: 12, justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
          <ConsultaInfo title="Consultas Hoje" value="3" icon={faCalendar} />
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default HomePage;
