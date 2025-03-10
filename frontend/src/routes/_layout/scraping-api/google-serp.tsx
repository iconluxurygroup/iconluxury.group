import { createFileRoute } from "@tanstack/react-router";
import { Container, Flex, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import OverviewGSerp from "../../../components/OverviewGSerp";
import LogsGSerp from "../../../components/LogsGSerp";
import PlaygroundGSerp from "../../../components/PlaygroundGSerp";
import ApiKeyGSerp from "../../../components/ApiKeyGSerp";

const GoogleSerpPage = () => {
  const tabsConfig = [
    { title: "Overview", component: () => <OverviewGSerp /> },
    { title: "Logs", component: () => <LogsGSerp /> },
    { title: "Playground", component: () => <PlaygroundGSerp /> },
    { title: "API Key", component: () => <ApiKeyGSerp /> },
  ];

  return (
    <Container maxW="full">
      <Flex align="center" justify="space-between" py={6}>
        <Text fontSize="xl" fontWeight="bold">Google SERP API</Text>
        <Text fontSize="sm">Manage your Google SERP settings and endpoints.</Text>
      </Flex>
      <Tabs variant="enclosed">
        <TabList>
          {tabsConfig.map((tab, index) => (
            <Tab key={index}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabsConfig.map((tab, index) => (
            <TabPanel key={index}>{tab.component()}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export const Route = createFileRoute("/_layout/scraping-api/google-serp")({
  component: GoogleSerpPage,
});

export default GoogleSerpPage;