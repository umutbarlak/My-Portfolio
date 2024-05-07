import { gql } from "graphql-request";
import { graphcms } from "@/client";

export const getAllProjects = async () => {
  const getAllProjectQuery = gql`
    {
      projects {
        title
        id
        tags
        image {
          url
        }
        source
        description
      }
    }
  `;

  const { projects } = await graphcms.request(getAllProjectQuery);

  return projects;
};
