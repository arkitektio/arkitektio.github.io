import {
  LazyQueryHookOptions,
  MutationHookOptions,
  QueryHookOptions,
  SubscriptionHookOptions,
  useLazyQuery as useApolloLazyQuery,
  useMutation as useApolloMutation,
  useQuery as useApolloQuery,
  useSubscription as useApolloSubscription,
} from "@apollo/client";
import { useService } from "../arkitekt/provider";
import { toast } from "sonner";
type MutationFuncType = typeof useApolloMutation;
type QueryFuncType = typeof useApolloQuery;
type LazyQueryFuncType = typeof useApolloLazyQuery;
type SubscriptionFuncType = typeof useApolloSubscription;

export type {
  LazyQueryHookOptions,
  MutationHookOptions,
  QueryHookOptions,
  SubscriptionHookOptions,
};

export const useMutation: MutationFuncType = (doc, options) => {
  const mikro = useService("kabinet").client;

  return useApolloMutation(doc, {
    ...options,
    client: mikro,
    onError: (error) => {
      toast.error("Error in useMutation: " + error.message);
    },
  });
};

export const useQuery: QueryFuncType = (doc, options) => {
  const mikro = useService("kabinet").client;

  return useApolloQuery(doc, { ...options, client: mikro });
};

export const useSubscription: SubscriptionFuncType = (doc, options) => {
  const mikro = useService("kabinet").client;

  return useApolloSubscription(doc, { ...options, client: mikro });
};

export const useLazyQuery: LazyQueryFuncType = (doc, options) => {
  const mikro = useService("kabinet").client;

  return useApolloLazyQuery(doc, { ...options, client: mikro });
};
