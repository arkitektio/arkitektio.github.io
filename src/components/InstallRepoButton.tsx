import { useQuery } from "@apollo/client";
import { usePort, PortGuard, portGuarded, usePortQuery } from "@jhnnsrs/port";
import gql from "graphql-tag";
import React from "react";

const CREATE_REPO_MUTATION = gql`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`;
const CHECK_REPO_QUERY = gql`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`;

const className = "my-2 p-2 rounded-md text-black text-center w-60 ";
export const InstallRepoButton = portGuarded(
  ({ branch, repo, user }: { branch: string; repo: string; user: string }) => {
    const { client } = usePort();

    const tag = `${user}/${repo}:${branch}`;

    const { data, refetch } = useQuery(CHECK_REPO_QUERY, {
      client: client,
      variables: { tag },
      pollInterval: 3000,
    });

    const handleClick = async () => {
      try {
        const { data } = await client.mutate({
          mutation: CREATE_REPO_MUTATION,
          variables: { branch, repo, user },
        });

        await refetch();

        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <>
        {data?.githubRepo ? (
          <div className={className + "bg-green-300"}> ✅ {tag}</div>
        ) : (
          <button
            onClick={handleClick}
            className={className + "cursor-pointer bg-yellow-200"}
          >
            🪄 Install {tag}
          </button>
        )}
      </>
    );
  },
  <div className={className + "bg-back-600"}> 🎱 Connect to install</div>
);
