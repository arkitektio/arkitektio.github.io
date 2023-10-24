import { usePort, PortGuard } from "@jhnnsrs/port";
import gql from "graphql-tag";
import React from "react";

const CREATE_REPO_MUTATION = gql`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      id
    }
  }
`;

export const InstallRepoButton = ({
  branch,
  repo,
  user,
}: {
  branch: string;
  repo: string;
  user: string;
}) => {
  const { client } = usePort();

  const handleClick = async () => {
    const { data } = await client.mutate({
      mutation: CREATE_REPO_MUTATION,
      variables: { branch, repo, user },
    });

    console.log(data);
  };

  return (
    <button onClick={handleClick}>
      Install {user}/{repo}
    </button>
  );
};
