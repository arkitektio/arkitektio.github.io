import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useService } from "../lib/arkitekt/provider";
import { App, Guard } from "../lib/app/App";
import {
  useCreateGithubRepoMutation,
  useListGithubReposQuery,
} from "../lib/kabinet/api/graphql";

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

export const InstallRepoButton = ({
  branch,
  repo,
  user,
}: {
  branch: string;
  repo: string;
  user: string;
}) => {
  const { client } = useService("kabinet");
  if (!client)
    return (
      <div
        className={className + "bg-back-800 text-white bg-opacity-1 my-2"}
        onDoubleClick={() =>
          alert("You need to be logged in to install repos.")
        }
      >
        {" "}
        {user}/{repo}:{branch}
      </div>
    );
  else {
    return <InstallRepoButtonInneer branch={branch} repo={repo} user={user} />;
  }
};

const InstallRepoButtonInneer = ({
  branch,
  repo,
  user,
}: {
  branch: string;
  repo: string;
  user: string;
}) => {
  const [createRepo] = useCreateGithubRepoMutation();

  const tag = `${user}/${repo}:${branch}`;

  const [fetching, setFetching] = React.useState(false);

  const { data, refetch, error } = useListGithubReposQuery({
    variables: {
      filters: {
        repo: repo,
        user: user,
        branch: branch,
      },
    },
  });

  const handleClick = async () => {
    try {
      setFetching(true);
      createRepo({
        variables: {
          identifier: tag,
        },
      });

      await refetch();

      console.log(data);
      setFetching(false);
    } catch (e) {
      console.log(e);
    }
  };

  const installedRepo = data?.githubRepos.at(0);

  return (
    <Guard.Kabinet fallback={<>This server does not support kabinet</>}>
      {error && (
        <div className={className + "bg-red-300"}>Error: {error.message}</div>
      )}
      {installedRepo ? (
        <button className={className + "bg-green-300"}> ✅ {tag}</button>
      ) : (
        <button
          onClick={handleClick}
          className={
            className +
            "cursor-pointer bg-yellow-200" +
            (fetching ? " animate-pulse" : "")
          }
        >
          {fetching ? <> Installing {tag} </> : <>🪄 Install {tag}</>}
        </button>
      )}
    </Guard.Kabinet>
  );
};
