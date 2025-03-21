import React, { useState, useEffect } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  Box,
  Container,
  Text,
  VStack,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  Select,
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import PromoSERP from "../../../components/ComingSoon";

export const Route = createFileRoute("/_layout/scraping-api/explore")({
  component: Explore,
});

interface JobSummary {
  id: number;
  inputFile: string;
  fileEnd: string | null;
  user: string;
  rec: number;
  img: number;
}

interface SubscriptionStatus {
  hasSubscription: boolean;
  isTrial: boolean;
  isDeactivated: boolean;
}

// Helper function to get the token (adjust based on your auth setup)
const getAuthToken = (): string | null => {
  // Example: Retrieve token from localStorage; adjust based on your auth system
  return localStorage.getItem("access_token");
};

async function fetchJobs(page: number): Promise<JobSummary[]> {
  const token = getAuthToken();
  const response = await fetch(
    `https://backend-dev.iconluxury.group/api/scraping-jobs?page=${page}&page_size=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }), // Add token if available
      },
    }
  );
  if (!response.ok) throw new Error(`Failed to fetch jobs: ${response.status}`);
  return response.json();
}

async function fetchSubscriptionStatus(): Promise<SubscriptionStatus> {
  const token = getAuthToken();
  const response = await fetch(
    "https://api.iconluxury.group/api/v1/subscription-status/serp",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }), // Add token if available
      },
    }
  );
  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error("Unauthorized: Please log in again.");
    }
    throw new Error(`Failed to fetch tools: ${response.status}`);
  }
  return response.json();
}

function Explore() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState<JobSummary[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "pending">("all");

  const { data: subscriptionStatus, isLoading: isSubLoading, error: subError } = useQuery({
    queryKey: ["subscriptionStatus", "serp"],
    queryFn: fetchSubscriptionStatus,
    staleTime: 5 * 60 * 1000, // Refresh every 5 minutes
    retry: (failureCount, error) => {
      // Don't retry on 401/403; handle in UI
      if (error.message.includes("Unauthorized")) return false;
      return failureCount < 3; // Retry up to 3 times for other errors
    },
  });

  const { data: freshJobs, isFetching } = useQuery({
    queryKey: ["scraperJobs", page],
    queryFn: () => fetchJobs(page),
    placeholderData: keepPreviousData,
    enabled: !!subscriptionStatus?.hasSubscription || !!subscriptionStatus?.isTrial,
  });

  useEffect(() => {
    if (freshJobs) {
      setJobs((prev: JobSummary[]) =>
        page === 1 ? freshJobs : [...prev, ...freshJobs]
      );
    }
  }, [freshJobs, page]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.inputFile.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && job.fileEnd !== null) ||
      (statusFilter === "pending" && job.fileEnd === null);
    return matchesSearch && matchesStatus;
  });

  const handleLoadMore = () => setPage((prev) => prev + 1);

  if (isSubLoading) {
    return (
      <Container maxW="full" bg="white" color="gray.800">
        <Text>Loading your data...</Text>
      </Container>
    );
  }

  if (subError) {
    return (
      <Container maxW="full" bg="white" color="gray.800">
        <Text color="red.500">
          {subError.message === "Unauthorized: Please log in again."
            ? "Session expired. Please log in again."
            : "Error loading status. Please try again later."}
        </Text>
        {subError.message.includes("Unauthorized") && (
          <Button mt={4} colorScheme="blue" onClick={() => navigate({ to: "/login" })}>
            Log In
          </Button>
        )}
      </Container>
    );
  }

  const { hasSubscription, isTrial, isDeactivated } = subscriptionStatus || {
    hasSubscription: false,
    isTrial: false,
    isDeactivated: false,
  };
  const isLocked = !hasSubscription && !isTrial;
  const isFullyDeactivated = isDeactivated && !hasSubscription;

  return (
    <Container maxW="full" bg="white" color="gray.800">
      <Flex align="center" justify="space-between" py={6} flexWrap="wrap" gap={4}>
        <Box textAlign="left" flex="1">
          <Text fontSize="xl" fontWeight="bold" color="black">Scraping Jobs</Text>
          <Text fontSize="sm" color="gray.600">View and manage scraping jobs</Text>
        </Box>
      </Flex>

      <Divider my={4} borderColor="gray.200" />

      {isLocked ? (
        <PromoSERP />
      ) : isFullyDeactivated ? (
        <Flex justify="space-between" align="center" w="full" p={4} bg="red.50" borderRadius="md">
          <Text color="gray.800">Your tools have been deactivated.</Text>
          <Button colorScheme="red" onClick={() => navigate({ to: "/proxies/pricing" })}>
            Reactivate Now
          </Button>
        </Flex>
      ) : (
        <Flex gap={6} justify="space-between" align="stretch" wrap="wrap">
          <Box flex="1" minW={{ base: "100%", md: "65%" }}>
            <Flex direction={{ base: "column", md: "row" }} gap={4} mb={4}>
              <Input
                placeholder="Search Jobs by Input File..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                w={{ base: "100%", md: "250px" }}
                borderColor="green.300"
                _focus={{ borderColor: "green.500", boxShadow: "0 0 0 1px green.500" }}
                _hover={{ borderColor: "green.400" }}
                bg="white"
                color="gray.800"
                _placeholder={{ color: "gray.500" }}
                borderRadius="md"
              />
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as "all" | "completed" | "pending")}
                w={{ base: "100%", md: "200px" }}
                borderColor="green.300"
                _focus={{ borderColor: "green.500", boxShadow: "0 0 0 1px green.500" }}
                _hover={{ borderColor: "green.400" }}
                bg="white"
                color="gray.700"
                borderRadius="md"
                sx={{
                  "& option": {
                    color: "gray.700",
                    backgroundColor: "white",
                    _hover: { backgroundColor: "green.50" },
                  },
                }}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </Select>
            </Flex>
            <VStack spacing={4} align="stretch">
              {filteredJobs.map((job) => (
                <Box key={job.id} p="4" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white">
                  <Flex justify="space-between" align="center">
                    <Box>
                      <Text fontSize="sm" fontWeight="bold" color="gray.600">
                        Job ID: {job.id}
                      </Text>
                      <Text fontWeight="medium" color="gray.800">{job.inputFile}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {job.rec} records, {job.img} images
                      </Text>
                      <Text fontSize="sm" color={job.fileEnd ? "green.500" : "yellow.500"}>
                        Status: {job.fileEnd ? "Completed" : "Pending"}
                      </Text>
                    </Box>
                    <Button
                      size="sm"
                      colorScheme="green"
                      onClick={() =>
                        navigate({
                          to: "/scraping-api/scraping-jobs/$jobId",
                          params: { jobId: job.id.toString() },
                        })
                      }
                    >
                      View Details
                    </Button>
                  </Flex>
                </Box>
              ))}
              {filteredJobs.length === 0 && !isFetching && (
                <Text fontSize="sm" color="gray.500">No jobs match your criteria</Text>
              )}
              {isFetching ? (
                <Text fontSize="sm" color="gray.500">Loading more...</Text>
              ) : (
                filteredJobs.length > 0 && (
                  <Button
                    colorScheme="green"
                    size="sm"
                    onClick={handleLoadMore}
                    mt={4}
                    alignSelf="center"
                  >
                    Load More
                  </Button>
                )
              )}
            </VStack>
          </Box>

          <Box w={{ base: "100%", md: "250px" }} p="4" borderLeft={{ md: "1px solid" }} borderColor="gray.200">
            <VStack spacing="4" align="stretch">
              <Box p="4" shadow="sm" borderWidth="1px" borderRadius="lg" borderColor="gray.200" bg="white">
                <Text fontWeight="bold" color="black">Quick Actions</Text>
                <Button
                  as="a"
                  href="/scraping-api/submit-form/google-serp"
                  variant="outline"
                  size="sm"
                  mt="2"
                  colorScheme="green"
                >
                  Submit Form
                </Button>
                <Button
                  as="a"
                  href="https://github.com/iconluxurygroup"
                  leftIcon={<FiGithub />}
                  variant="outline"
                  size="sm"
                  mt="2"
                  colorScheme="green"
                >
                  GitHub
                </Button>
              </Box>
            </VStack>
          </Box>
        </Flex>
      )}
    </Container>
  );
}

export default Explore;