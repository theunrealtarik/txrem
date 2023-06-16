import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "kp71saty",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

export const getProjects = async () =>
  await client.fetch('*[_type == "project"]');
