import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@site/src/lib/kabinet/funcs';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ActionHash: { input: any; output: any; }
  AnyDefault: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Identifier: { input: any; output: any; }
  SearchQuery: { input: any; output: any; }
  UntypedParams: { input: any; output: any; }
  ValidatorFunction: { input: any; output: any; }
};

/** The kind of action. */
export enum ActionKind {
  Function = 'FUNCTION',
  Generator = 'GENERATOR'
}

/** The kind of action scope. */
export enum ActionScope {
  BridgeGlobalToLocal = 'BRIDGE_GLOBAL_TO_LOCAL',
  BridgeLocalToGlobal = 'BRIDGE_LOCAL_TO_GLOBAL',
  Global = 'GLOBAL',
  Local = 'LOCAL'
}

/** A user of the bridge server. Maps to an authentikate user */
export type App = {
  __typename?: 'App';
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
};

/** Create a new Github repository input */
export type AppImageInput = {
  appImageId: Scalars['String']['input'];
  flavourName?: InputMaybe<Scalars['String']['input']>;
  image: DockerImageInput;
  inspection: InspectionInput;
  manifest: ManifestInput;
  selectors: Array<SelectorInput>;
};

export type AssignWidget = {
  followValue?: Maybe<Scalars['String']['output']>;
  kind: AssignWidgetKind;
};

export type AssignWidgetInput = {
  /** Whether to display the input as a paragraph or not. This is used for text inputs and dropdowns */
  asParagraph?: InputMaybe<Scalars['Boolean']['input']>;
  choices?: InputMaybe<Array<ChoiceInput>>;
  dependencies?: InputMaybe<Array<Scalars['String']['input']>>;
  fallback?: InputMaybe<AssignWidgetInput>;
  filters?: InputMaybe<Array<PortInput>>;
  hook?: InputMaybe<Scalars['String']['input']>;
  kind: AssignWidgetKind;
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['SearchQuery']['input']>;
  step?: InputMaybe<Scalars['Float']['input']>;
  ward?: InputMaybe<Scalars['String']['input']>;
};

/** The kind of assign widget. */
export enum AssignWidgetKind {
  Choice = 'CHOICE',
  Custom = 'CUSTOM',
  Search = 'SEARCH',
  Slider = 'SLIDER',
  StateChoice = 'STATE_CHOICE',
  String = 'STRING'
}

/** A user of the bridge server. Maps to an authentikate user */
export type Backend = {
  __typename?: 'Backend';
  client: Client;
  clientId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instanceId: Scalars['String']['output'];
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pods: Array<Pod>;
  resources: Array<Resource>;
  user: User;
};


/** A user of the bridge server. Maps to an authentikate user */
export type BackendPodsArgs = {
  filters?: InputMaybe<PodFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


/** A user of the bridge server. Maps to an authentikate user */
export type BackendResourcesArgs = {
  filters?: InputMaybe<ResourceFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** Filter for Resources */
export type BackendFilter = {
  AND?: InputMaybe<BackendFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<BackendFilter>;
  OR?: InputMaybe<BackendFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type BindsInput = {
  clients?: InputMaybe<Array<Scalars['String']['input']>>;
  desiredInstances?: Scalars['Int']['input'];
  implementations?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**  A selector is a way to select a release */
export type CpuSelector = Selector & {
  __typename?: 'CPUSelector';
  frequency?: Maybe<Scalars['Float']['output']>;
  kind: Scalars['String']['output'];
  min?: Maybe<Scalars['Int']['output']>;
  required: Scalars['Boolean']['output'];
};

export type Choice = {
  __typename?: 'Choice';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ChoiceAssignWidget = AssignWidget & {
  __typename?: 'ChoiceAssignWidget';
  choices?: Maybe<Array<Choice>>;
  followValue?: Maybe<Scalars['String']['output']>;
  kind: AssignWidgetKind;
};

/**
 *
 * A choice is a value that can be selected in a dropdown.
 *
 * It is composed of a value, a label, and a description. The value is the
 * value that is returned when the choice is selected. The label is the
 * text that is displayed in the dropdown. The description is the text
 * that is displayed when the user hovers over the choice.
 *
 *
 */
export type ChoiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  value: Scalars['AnyDefault']['input'];
};

export type ChoiceReturnWidget = ReturnWidget & {
  __typename?: 'ChoiceReturnWidget';
  choices?: Maybe<Array<Choice>>;
  kind: ReturnWidgetKind;
};

export type Client = {
  __typename?: 'Client';
  clientId: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** A user of the bridge server. Maps to an authentikate user */
export type Collection = {
  __typename?: 'Collection';
  definedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The state of a dask cluster */
export enum ContainerType {
  Apptainer = 'APPTAINER',
  Docker = 'DOCKER'
}

export type CpuSelectorInput = {
  /** The frequency in MHz */
  frequency?: InputMaybe<Scalars['Int']['input']>;
  /** The memory in MB */
  memory?: InputMaybe<Scalars['Int']['input']>;
};

/** Create a new Github repository input */
export type CreateDeploymentInput = {
  flavour: Scalars['ID']['input'];
  instanceId: Scalars['String']['input'];
  lastPulled?: InputMaybe<Scalars['DateTime']['input']>;
  localId: Scalars['ID']['input'];
  secretParams?: InputMaybe<Scalars['UntypedParams']['input']>;
};

/** Create a new Github repository input */
export type CreateGithubRepoInput = {
  autoScan?: InputMaybe<Scalars['Boolean']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  repo?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** Create a new Github repository input */
export type CreatePodInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  deployment: Scalars['ID']['input'];
  instanceId: Scalars['String']['input'];
  localId: Scalars['ID']['input'];
  resource?: InputMaybe<Scalars['ID']['input']>;
};

/**  A selector is a way to select a release */
export type CudaSelector = Selector & {
  __typename?: 'CudaSelector';
  /** The number of cuda cores */
  cudaCores?: Maybe<Scalars['Int']['output']>;
  /** The minimum cuda version */
  cudaVersion?: Maybe<Scalars['String']['output']>;
  kind: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
};

export type CudaSelectorInput = {
  /** The cuda cores */
  cudaCores?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum cuda version */
  cudaVersion?: InputMaybe<Scalars['String']['input']>;
};

export type CustomAssignWidget = AssignWidget & {
  __typename?: 'CustomAssignWidget';
  followValue?: Maybe<Scalars['String']['output']>;
  hook: Scalars['String']['output'];
  kind: AssignWidgetKind;
  ward: Scalars['String']['output'];
};

export type CustomEffect = Effect & {
  __typename?: 'CustomEffect';
  dependencies: Array<Scalars['String']['output']>;
  function: Scalars['ValidatorFunction']['output'];
  hook: Scalars['String']['output'];
  kind: EffectKind;
  ward: Scalars['String']['output'];
};

export type CustomReturnWidget = ReturnWidget & {
  __typename?: 'CustomReturnWidget';
  hook: Scalars['String']['output'];
  kind: ReturnWidgetKind;
  ward: Scalars['String']['output'];
};

/** Create a new Github repository input */
export type DeclareBackendInput = {
  instanceId: Scalars['String']['input'];
  kind: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Create a resource */
export type DeclareResourceInput = {
  backend: Scalars['ID']['input'];
  localId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  qualifiers?: InputMaybe<Array<QualifierInput>>;
};

export type Definition = {
  __typename?: 'Definition';
  args: Array<Port>;
  collections: Array<Collection>;
  definedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  flavours: Array<Flavour>;
  hash: Scalars['ActionHash']['output'];
  id: Scalars['ID']['output'];
  isTestFor: Array<Definition>;
  kind: ActionKind;
  name: Scalars['String']['output'];
  protocols: Array<Protocol>;
  returns: Array<Port>;
  scope: ActionScope;
  tests: Array<Definition>;
};


export type DefinitionFlavoursArgs = {
  filters?: InputMaybe<FlavourFilter>;
  order?: InputMaybe<FlavourOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type DefinitionIsTestForArgs = {
  filters?: InputMaybe<DefinitionFilter>;
  order?: InputMaybe<DefinitionOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type DefinitionTestsArgs = {
  filters?: InputMaybe<DefinitionFilter>;
  order?: InputMaybe<DefinitionOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** Filter for Dask Clusters */
export type DefinitionFilter = {
  AND?: InputMaybe<DefinitionFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<DefinitionFilter>;
  OR?: InputMaybe<DefinitionFilter>;
  demands?: InputMaybe<Array<PortDemandInput>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * A definition
 *
 *     Definitions are the building implementation for Actions and provide the
 *     information needed to create a action. They are primarly composed of a name,
 *     a description, and a list of ports.
 *
 *     Definitions provide a protocol of input and output, and do not contain
 *     any information about the actual implementation of the action ( this is handled
 *     by a implementation that implements a action).
 *
 *
 *
 *
 *
 */
export type DefinitionInput = {
  /** The args of the definition. This is the input ports of the definition */
  args?: Array<PortInput>;
  /** The collections of the definition. This is used to group definitions together in the UI */
  collections?: Array<Scalars['String']['input']>;
  /** The description of the definition. This is the text that is displayed in the UI */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The interfaces of the definition. This is used to group definitions together in the UI */
  interfaces?: Array<Scalars['String']['input']>;
  /** Whether the definition is a dev definition or not. If the definition is a dev definition, it can be used to create a dev action. If the definition is not a dev definition, it cannot be used to create a dev action */
  isDev?: Scalars['Boolean']['input'];
  /** The tests for the definition. This is used to group definitions together in the UI */
  isTestFor?: Array<Scalars['String']['input']>;
  /** The kind of the definition. This is the type of the definition. Can be either a function or a generator */
  kind: ActionKind;
  /** The logo of the definition. This is used to display the logo in the UI */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The name of the actions. This is used to uniquely identify the definition */
  name: Scalars['String']['input'];
  /** The port groups of the definition. This is used to group ports together in the UI */
  portGroups?: Array<PortGroupInput>;
  /** The returns of the definition. This is the output ports of the definition */
  returns?: Array<PortInput>;
  /** Whether the definition is stateful or not. If the definition is stateful, it can be used to create a stateful action. If the definition is not stateful, it cannot be used to create a stateful action */
  stateful?: Scalars['Boolean']['input'];
};

export type DefinitionOrder = {
  definedAt?: InputMaybe<Ordering>;
};

export type DeletePodInput = {
  id: Scalars['ID']['input'];
};

export enum DemandKind {
  Args = 'ARGS',
  Returns = 'RETURNS'
}

/**
 * A dependency for a implementation. By defining dependencies, you can
 *     create a dependency graph for your implementations and actions
 */
export type DependencyInput = {
  binds?: InputMaybe<BindsInput>;
  hash?: InputMaybe<Scalars['ActionHash']['input']>;
  optional?: Scalars['Boolean']['input'];
  reference?: InputMaybe<Scalars['String']['input']>;
  viableInstances?: InputMaybe<Scalars['Int']['input']>;
};

/** A user of the bridge server. Maps to an authentikate user */
export type Deployment = {
  __typename?: 'Deployment';
  apiToken: Scalars['String']['output'];
  backend: Backend;
  flavour: Flavour;
  id: Scalars['ID']['output'];
  localId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Filter for Dask Clusters */
export type DeploymentFilter = {
  AND?: InputMaybe<DeploymentFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<DeploymentFilter>;
  OR?: InputMaybe<DeploymentFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** The Feature you are trying to match */
export type DeviceFeature = {
  cpuCount: Scalars['String']['input'];
  kind: Scalars['String']['input'];
};

/** A docker image descriptor */
export type DockerImage = {
  __typename?: 'DockerImage';
  buildAt: Scalars['DateTime']['output'];
  imageString: Scalars['String']['output'];
};

export type DockerImageInput = {
  buildAt: Scalars['DateTime']['input'];
  imageString: Scalars['String']['input'];
};

/** Create a new Github repository input */
export type DumpLogsInput = {
  logs: Scalars['String']['input'];
  pod: Scalars['ID']['input'];
};

export type Effect = {
  dependencies: Array<Scalars['String']['output']>;
  function: Scalars['ValidatorFunction']['output'];
  kind: EffectKind;
};

/**
 *
 *                  An effect is a way to modify a port based on a condition. For example,
 *     you could have an effect that sets a port to null if another port is null.
 *
 *     Or, you could have an effect that hides the port if another port meets a condition.
 *     E.g when the user selects a certain option in a dropdown, another port is hidden.
 *
 *
 *
 */
export type EffectInput = {
  dependencies?: InputMaybe<Array<Scalars['String']['input']>>;
  function: Scalars['ValidatorFunction']['input'];
  hook?: InputMaybe<Scalars['String']['input']>;
  kind: EffectKind;
  message?: InputMaybe<Scalars['String']['input']>;
  ward?: InputMaybe<Scalars['String']['input']>;
};

/** The kind of effect. */
export enum EffectKind {
  Custom = 'CUSTOM',
  Hide = 'HIDE',
  Message = 'MESSAGE'
}

/** Which environment do you want to match against? */
export type EnvironmentInput = {
  containerType: ContainerType;
  features?: InputMaybe<Array<DeviceFeature>>;
};

/** A user of the bridge server. Maps to an authentikate user */
export type Flavour = {
  __typename?: 'Flavour';
  definitions: Array<Definition>;
  deployments: Array<Deployment>;
  description: Scalars['String']['output'];
  entrypoint: CudaSelector;
  id: Scalars['ID']['output'];
  image: DockerImage;
  logo?: Maybe<Scalars['String']['output']>;
  manifest: Scalars['UntypedParams']['output'];
  name: Scalars['String']['output'];
  originalLogo?: Maybe<Scalars['String']['output']>;
  release: Release;
  requirements: Array<Requirement>;
  selectors: Array<Selector>;
};


/** A user of the bridge server. Maps to an authentikate user */
export type FlavourDefinitionsArgs = {
  filters?: InputMaybe<DefinitionFilter>;
  order?: InputMaybe<DefinitionOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


/** A user of the bridge server. Maps to an authentikate user */
export type FlavourDeploymentsArgs = {
  filters?: InputMaybe<DeploymentFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** Filter for Dask Clusters */
export type FlavourFilter = {
  AND?: InputMaybe<FlavourFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<FlavourFilter>;
  OR?: InputMaybe<FlavourFilter>;
  hasDefinitions?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FlavourOrder = {
  releasedAt?: InputMaybe<Ordering>;
};

/** A user of the bridge server. Maps to an authentikate user */
export type GithubRepo = {
  __typename?: 'GithubRepo';
  addedAt: Scalars['DateTime']['output'];
  branch: Scalars['String']['output'];
  flavours: Array<Flavour>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  repo: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: Scalars['String']['output'];
};


/** A user of the bridge server. Maps to an authentikate user */
export type GithubRepoFlavoursArgs = {
  filters?: InputMaybe<FlavourFilter>;
  order?: InputMaybe<FlavourOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** Filter for Dask Clusters */
export type GithubRepoFilter = {
  AND?: InputMaybe<GithubRepoFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<GithubRepoFilter>;
  OR?: InputMaybe<GithubRepoFilter>;
  branch?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  repo?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** A implementation is a blueprint for a action. It is composed of a definition, a list of dependencies, and a list of params. */
export type ImplementationInput = {
  definition: DefinitionInput;
  dependencies: Array<DependencyInput>;
  dynamic?: Scalars['Boolean']['input'];
  interface?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['AnyDefault']['input']>;
};

export type InspectionInput = {
  implementations: Array<ImplementationInput>;
  requirements: Array<RequirementInput>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** The logs of a pod */
export type LogDump = {
  __typename?: 'LogDump';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  logs: Scalars['String']['output'];
  pod: Pod;
};

export type ManifestInput = {
  author?: Scalars['String']['input'];
  /** The entrypoint of the app, defaults to 'app' */
  entrypoint?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  scopes?: Array<Scalars['String']['input']>;
  version: Scalars['String']['input'];
};

/** Create a new Github repository input */
export type MatchFlavoursInput = {
  actions?: InputMaybe<Array<Scalars['ActionHash']['input']>>;
  environment?: InputMaybe<EnvironmentInput>;
  release?: InputMaybe<Scalars['ID']['input']>;
};

export type MessageEffect = Effect & {
  __typename?: 'MessageEffect';
  dependencies: Array<Scalars['String']['output']>;
  function: Scalars['ValidatorFunction']['output'];
  kind: EffectKind;
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new release */
  createAppImage: Release;
  /** Create a new dask cluster on a bridge server */
  createDeployment: Deployment;
  /** Create a new Github repository on a bridge server */
  createGithubRepo: GithubRepo;
  /** Create a new dask cluster on a bridge server */
  createPod: Pod;
  /** Create a new dask cluster on a bridge server */
  declareBackend: Backend;
  /** Create a new resource for your backend */
  declareResource: Resource;
  /** Create a new dask cluster on a bridge server */
  deletePod: Scalars['ID']['output'];
  /** Create a new dask cluster on a bridge server */
  dumpLogs: LogDump;
  /** Rescan all repos */
  rescanRepos: Array<GithubRepo>;
  /** Create a new dask cluster on a bridge server */
  scanRepo: GithubRepo;
  /** Create a new dask cluster on a bridge server */
  updateDeployment: Deployment;
  /** Create a new dask cluster on a bridge server */
  updatePod: Pod;
};


export type MutationCreateAppImageArgs = {
  input: AppImageInput;
};


export type MutationCreateDeploymentArgs = {
  input: CreateDeploymentInput;
};


export type MutationCreateGithubRepoArgs = {
  input: CreateGithubRepoInput;
};


export type MutationCreatePodArgs = {
  input: CreatePodInput;
};


export type MutationDeclareBackendArgs = {
  input: DeclareBackendInput;
};


export type MutationDeclareResourceArgs = {
  input: DeclareResourceInput;
};


export type MutationDeletePodArgs = {
  input: DeletePodInput;
};


export type MutationDumpLogsArgs = {
  input: DumpLogsInput;
};


export type MutationScanRepoArgs = {
  input: ScanRepoInput;
};


export type MutationUpdateDeploymentArgs = {
  input: UpdateDeploymentInput;
};


export type MutationUpdatePodArgs = {
  input: UpdatePodInput;
};

export type OffsetPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: Scalars['Int']['input'];
};

export type OneApiSelectorInput = {
  /** The api versison of the selector */
  oneapiVersion?: InputMaybe<Scalars['String']['input']>;
};

export enum Ordering {
  Asc = 'ASC',
  AscNullsFirst = 'ASC_NULLS_FIRST',
  AscNullsLast = 'ASC_NULLS_LAST',
  Desc = 'DESC',
  DescNullsFirst = 'DESC_NULLS_FIRST',
  DescNullsLast = 'DESC_NULLS_LAST'
}

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/** A user of the bridge server. Maps to an authentikate user */
export type Pod = {
  __typename?: 'Pod';
  backend: Backend;
  clientId?: Maybe<Scalars['String']['output']>;
  deployment: Deployment;
  id: Scalars['ID']['output'];
  latestLogDump?: Maybe<LogDump>;
  name: Scalars['String']['output'];
  podId: Scalars['String']['output'];
  resource?: Maybe<Resource>;
  status: PodStatus;
};

/** Filter for Dask Clusters */
export type PodFilter = {
  AND?: InputMaybe<PodFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<PodFilter>;
  OR?: InputMaybe<PodFilter>;
  backend?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** The state of a dask cluster */
export enum PodStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Stopped = 'STOPPED',
  Stopping = 'STOPPING',
  Unkown = 'UNKOWN'
}

/** An update on a pod */
export type PodUpdateMessage = {
  __typename?: 'PodUpdateMessage';
  created: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  progress?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
};

export type Port = {
  __typename?: 'Port';
  assignWidget?: Maybe<AssignWidget>;
  children?: Maybe<Array<Port>>;
  choices?: Maybe<Array<Choice>>;
  default?: Maybe<Scalars['AnyDefault']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  effects?: Maybe<Array<Effect>>;
  identifier?: Maybe<Scalars['Identifier']['output']>;
  key: Scalars['String']['output'];
  kind: PortKind;
  label?: Maybe<Scalars['String']['output']>;
  nullable: Scalars['Boolean']['output'];
  returnWidget?: Maybe<ReturnWidget>;
  validators?: Maybe<Array<Validator>>;
};

export type PortDemandInput = {
  forceLength?: InputMaybe<Scalars['Int']['input']>;
  forceNonNullableLength?: InputMaybe<Scalars['Int']['input']>;
  kind: DemandKind;
  matches?: InputMaybe<Array<PortMatchInput>>;
};

/** A Port Group is a group of ports that are related to each other. It is used to group ports together in the UI and provide a better user experience. */
export type PortGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  effects?: InputMaybe<Array<EffectInput>>;
  /** The key of the port group. This is used to uniquely identify the port group */
  key: Scalars['String']['input'];
  ports?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Port
 *
 *     A Port is a single input or output of a action. It is composed of a key and a kind
 *     which are used to uniquely identify the port.
 *
 *     If the Port is a structure, we need to define a identifier and scope,
 *     Identifiers uniquely identify a specific type of model for the scopes (e.g
 *     all the ports that have the identifier "@mikro/image" are of the same type, and
 *     are hence compatible with each other). Scopes are used to define in which context
 *     the identifier is valid (e.g. a port with the identifier "@mikro/image" and the
 *     scope "local", can only be wired to other ports that have the same identifier and
 *     are running in the same app). Global ports are ports that have the scope "global",
 *     and can be wired to any other port that has the same identifier, as there exists a
 *     mechanism to resolve and retrieve the object for each app. Please check the rekuest
 *     documentation for more information on how this works.
 *
 *
 *
 */
export type PortInput = {
  assignWidget?: InputMaybe<AssignWidgetInput>;
  children?: InputMaybe<Array<PortInput>>;
  choices?: InputMaybe<Array<ChoiceInput>>;
  default?: InputMaybe<Scalars['AnyDefault']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  effects?: InputMaybe<Array<EffectInput>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  kind: PortKind;
  label?: InputMaybe<Scalars['String']['input']>;
  nullable?: Scalars['Boolean']['input'];
  returnWidget?: InputMaybe<ReturnWidgetInput>;
  validators?: InputMaybe<Array<ValidatorInput>>;
};

/** The kind of port. */
export enum PortKind {
  Bool = 'BOOL',
  Date = 'DATE',
  Dict = 'DICT',
  Enum = 'ENUM',
  Float = 'FLOAT',
  Int = 'INT',
  List = 'LIST',
  MemoryStructure = 'MEMORY_STRUCTURE',
  Model = 'MODEL',
  String = 'STRING',
  Structure = 'STRUCTURE',
  Union = 'UNION'
}

export type PortMatchInput = {
  at?: InputMaybe<Scalars['Int']['input']>;
  children?: InputMaybe<Array<PortMatchInput>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<PortKind>;
  nullable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A user of the bridge server. Maps to an authentikate user */
export type Protocol = {
  __typename?: 'Protocol';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** A qualifier that describes some property of the action */
export type QualifierInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Return all dask clusters */
  backend: Backend;
  backends: Array<Backend>;
  /** Return all dask clusters */
  definition: Definition;
  definitions: Array<Definition>;
  /** Return all dask clusters */
  deployment: Deployment;
  deployments: Array<Deployment>;
  /** Return all dask clusters */
  flavour: Flavour;
  flavours: Array<Flavour>;
  /** Return all dask clusters */
  githubRepo: GithubRepo;
  githubRepos: Array<GithubRepo>;
  /** Return the currently logged in user */
  matchFlavour: Flavour;
  /** Return the currently logged in user */
  me: User;
  /** Return all dask clusters */
  pod: Pod;
  /** Return the pod for an agent */
  podForAgent?: Maybe<Pod>;
  pods: Array<Pod>;
  /** Return all dask clusters */
  release: Release;
  releases: Array<Release>;
  /** Return all dask clusters */
  resource: Resource;
  resources: Array<Resource>;
};


export type QueryBackendArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBackendsArgs = {
  filters?: InputMaybe<BackendFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryDefinitionArgs = {
  hash?: InputMaybe<Scalars['ActionHash']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDefinitionsArgs = {
  filters?: InputMaybe<DefinitionFilter>;
  order?: InputMaybe<DefinitionOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryDeploymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDeploymentsArgs = {
  filters?: InputMaybe<DeploymentFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryFlavourArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFlavoursArgs = {
  filters?: InputMaybe<FlavourFilter>;
  order?: InputMaybe<FlavourOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryGithubRepoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGithubReposArgs = {
  filters?: InputMaybe<GithubRepoFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMatchFlavourArgs = {
  input: MatchFlavoursInput;
};


export type QueryPodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPodForAgentArgs = {
  clientId: Scalars['ID']['input'];
  instanceId: Scalars['ID']['input'];
};


export type QueryPodsArgs = {
  filters?: InputMaybe<PodFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReleasesArgs = {
  filters?: InputMaybe<ReleaseFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryResourceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryResourcesArgs = {
  filters?: InputMaybe<ResourceFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** A user of the bridge server. Maps to an authentikate user */
export type Release = {
  __typename?: 'Release';
  app: App;
  /** Is this release deployed */
  colour: Scalars['String']['output'];
  /** Is this release deployed */
  deployments: Array<Deployment>;
  /** Is this release deployed */
  description: Scalars['String']['output'];
  entrypoint: Scalars['String']['output'];
  flavours: Array<Flavour>;
  id: Scalars['ID']['output'];
  /** Is this release deployed */
  installed: Scalars['Boolean']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  /** Is this release deployed */
  name: Scalars['String']['output'];
  originalLogo?: Maybe<Scalars['String']['output']>;
  scopes: Array<Scalars['String']['output']>;
  version: Scalars['String']['output'];
};


/** A user of the bridge server. Maps to an authentikate user */
export type ReleaseFlavoursArgs = {
  filters?: InputMaybe<FlavourFilter>;
  order?: InputMaybe<FlavourOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** Filter for Dask Clusters */
export type ReleaseFilter = {
  AND?: InputMaybe<ReleaseFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ReleaseFilter>;
  OR?: InputMaybe<ReleaseFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** A requirement */
export type Requirement = {
  __typename?: 'Requirement';
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  optional: Scalars['Boolean']['output'];
  service: Scalars['String']['output'];
};

export type RequirementInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  optional?: Scalars['Boolean']['input'];
  service: Scalars['String']['input'];
};

/** A resource on a backend. Resource define allocated resources on a backend. E.g a computational action */
export type Resource = {
  __typename?: 'Resource';
  backend: Backend;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pods: Array<Pod>;
  qualifiers?: Maybe<Scalars['UntypedParams']['output']>;
  resourceId: Scalars['String']['output'];
};


/** A resource on a backend. Resource define allocated resources on a backend. E.g a computational action */
export type ResourcePodsArgs = {
  filters?: InputMaybe<PodFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** Filter for Resources */
export type ResourceFilter = {
  AND?: InputMaybe<ResourceFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ResourceFilter>;
  OR?: InputMaybe<ResourceFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ReturnWidget = {
  kind: ReturnWidgetKind;
};

/**
 * A Return Widget is a UI element that is used to display the value of a port.
 *
 *     Return Widgets get displayed both if we show the return values of an assignment,
 *     but also when we inspect the given arguments of a previous run task. Their primary
 *     usecase is to adequately display the value of a port, in a user readable way.
 *
 *     Return Widgets are often overwriten by the underlying UI framework (e.g. Orkestrator)
 *     to provide a better user experience. For example, a return widget that displays a
 *     date could be overwriten to display a calendar widget.
 *
 *     Return Widgets provide more a way to customize this overwriten behavior.
 *
 *
 */
export type ReturnWidgetInput = {
  choices?: InputMaybe<Array<ChoiceInput>>;
  hook?: InputMaybe<Scalars['String']['input']>;
  kind: ReturnWidgetKind;
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['SearchQuery']['input']>;
  step?: InputMaybe<Scalars['Int']['input']>;
  ward?: InputMaybe<Scalars['String']['input']>;
};

/** The kind of return widget. */
export enum ReturnWidgetKind {
  Choice = 'CHOICE',
  Custom = 'CUSTOM'
}

/**  A selector is a way to select a release */
export type RocmSelector = Selector & {
  __typename?: 'RocmSelector';
  apiThing?: Maybe<Scalars['String']['output']>;
  apiVersion?: Maybe<Scalars['String']['output']>;
  kind: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
};

export type RocmSelectorInput = {
  /** The api thing of the selector */
  apiThing?: InputMaybe<Scalars['String']['input']>;
  /** The api version of the selector */
  apiVersion?: InputMaybe<Scalars['String']['input']>;
};

/** Create a dask cluster input */
export type ScanRepoInput = {
  id: Scalars['String']['input'];
};

export type SearchAssignWidget = AssignWidget & {
  __typename?: 'SearchAssignWidget';
  dependencies?: Maybe<Array<Scalars['String']['output']>>;
  filters?: Maybe<Array<Port>>;
  followValue?: Maybe<Scalars['String']['output']>;
  kind: AssignWidgetKind;
  query: Scalars['String']['output'];
  ward: Scalars['String']['output'];
};

/**  A selector is a way to select a release */
export type Selector = {
  kind: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
};

export type SelectorInput = {
  /** The api thing of the selector */
  apiThing?: InputMaybe<Scalars['String']['input']>;
  /** The api version of the selector */
  apiVersion?: InputMaybe<Scalars['String']['input']>;
  /** The cuda cores */
  cudaCores?: InputMaybe<Scalars['Int']['input']>;
  /** The frequency in MHz */
  frequency?: InputMaybe<Scalars['Int']['input']>;
  /** The kind of the selector */
  kind: Scalars['String']['input'];
  /** The memory in MB */
  memory?: InputMaybe<Scalars['Int']['input']>;
  /** The api version of the selector */
  oneapiVersion?: InputMaybe<Scalars['String']['input']>;
};

export type SliderAssignWidget = AssignWidget & {
  __typename?: 'SliderAssignWidget';
  followValue?: Maybe<Scalars['String']['output']>;
  kind: AssignWidgetKind;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  step?: Maybe<Scalars['Float']['output']>;
};

export type StateChoiceAssignWidget = AssignWidget & {
  __typename?: 'StateChoiceAssignWidget';
  followValue?: Maybe<Scalars['String']['output']>;
  kind: AssignWidgetKind;
  stateChoices: Scalars['String']['output'];
};

export type StringAssignWidget = AssignWidget & {
  __typename?: 'StringAssignWidget';
  asParagraph: Scalars['Boolean']['output'];
  followValue?: Maybe<Scalars['String']['output']>;
  kind: AssignWidgetKind;
  placeholder: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Create a new dask cluster on a bridge server */
  pod: PodUpdateMessage;
  /** Create a new dask cluster on a bridge server */
  pods: PodUpdateMessage;
};


export type SubscriptionPodArgs = {
  podId: Scalars['ID']['input'];
};

/** Create a new Github repository input */
export type UpdateDeploymentInput = {
  deployment: Scalars['ID']['input'];
  status: PodStatus;
};

/** Create a new Github repository input */
export type UpdatePodInput = {
  instanceId: Scalars['String']['input'];
  localId?: InputMaybe<Scalars['ID']['input']>;
  pod?: InputMaybe<Scalars['ID']['input']>;
  status: PodStatus;
};

export type User = {
  __typename?: 'User';
  activeOrganization?: Maybe<Organization>;
  preferredUsername: Scalars['String']['output'];
  sub: Scalars['String']['output'];
};

export type Validator = {
  __typename?: 'Validator';
  dependencies?: Maybe<Array<Scalars['String']['output']>>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  function: Scalars['ValidatorFunction']['output'];
  label?: Maybe<Scalars['String']['output']>;
};

/**
 *
 * A validating function for a port. Can specify a function that will run when validating values of the port.
 * If outside dependencies are needed they need to be specified in the dependencies field. With the .. syntax
 * when transversing the tree of ports.
 *
 *
 */
export type ValidatorInput = {
  dependencies?: InputMaybe<Array<Scalars['String']['input']>>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  function: Scalars['ValidatorFunction']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ListBackendFragment = { __typename?: 'Backend', id: string, name: string, kind: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } };

export type BackendFragment = { __typename?: 'Backend', id: string, clientId: string, instanceId: string, name: string, kind: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string }, pods: Array<{ __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null }>, resources: Array<{ __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } }> };

export type DefinitionFragment = { __typename?: 'Definition', id: string, name: string, hash: any, description?: string | null, args: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, kind: PortKind, identifier?: any | null, default?: any | null, effects?: Array<{ __typename: 'CustomEffect', kind: EffectKind, dependencies: Array<string>, hook: string, ward: string } | { __typename: 'MessageEffect', kind: EffectKind, dependencies: Array<string>, message: string }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, nullable: boolean, description?: string | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, children?: Array<{ __typename?: 'Port', kind: PortKind, identifier?: any | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, validators?: Array<{ __typename?: 'Validator', function: any, dependencies?: Array<string> | null, label?: string | null, errorMessage?: string | null }> | null }>, returns: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, kind: PortKind, identifier?: any | null, default?: any | null, effects?: Array<{ __typename: 'CustomEffect', kind: EffectKind, dependencies: Array<string>, hook: string, ward: string } | { __typename: 'MessageEffect', kind: EffectKind, dependencies: Array<string>, message: string }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, nullable: boolean, description?: string | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, children?: Array<{ __typename?: 'Port', kind: PortKind, identifier?: any | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, validators?: Array<{ __typename?: 'Validator', function: any, dependencies?: Array<string> | null, label?: string | null, errorMessage?: string | null }> | null }>, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> }> };

export type ListDefinitionFragment = { __typename?: 'Definition', id: string, name: string, hash: any, description?: string | null, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } }> };

export type ListFlavourFragment = { __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> };

export type FlavourFragment = { __typename?: 'Flavour', description: string, id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> };

export type ListPodFragment = { __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null };

export type PodFragment = { __typename?: 'Pod', id: string, podId: string, status: PodStatus, clientId?: string | null, backend: { __typename?: 'Backend', id: string, clientId: string, instanceId: string, name: string, kind: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string }, pods: Array<{ __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null }>, resources: Array<{ __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } }> }, latestLogDump?: { __typename?: 'LogDump', logs: string, createdAt: any } | null, resource?: { __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } } | null, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } } };

export type StringAssignWidgetFragment = { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean };

export type SliderAssignWidgetFragment = { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null };

export type StateChoiceAssignWidgetFragment = { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string };

export type FilterPortFragment = { __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null };

export type SearchAssignWidgetFragment = { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null };

export type CustomAssignWidgetFragment = { __typename: 'CustomAssignWidget', ward: string, hook: string };

export type ChoiceAssignWidgetFragment = { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null };

export type ChildPortNestedFragment = { __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, children?: Array<{ __typename?: 'Port', kind: PortKind, identifier?: any | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null };

export type ChildPortFragment = { __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, nullable: boolean, description?: string | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, children?: Array<{ __typename?: 'Port', kind: PortKind, identifier?: any | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null };

export type CustomEffectFragment = { __typename: 'CustomEffect', kind: EffectKind, hook: string, ward: string };

export type MessageEffectFragment = { __typename: 'MessageEffect', kind: EffectKind, message: string };

type PortEffect_CustomEffect_Fragment = { __typename: 'CustomEffect', kind: EffectKind, dependencies: Array<string>, hook: string, ward: string };

type PortEffect_MessageEffect_Fragment = { __typename: 'MessageEffect', kind: EffectKind, dependencies: Array<string>, message: string };

export type PortEffectFragment = PortEffect_CustomEffect_Fragment | PortEffect_MessageEffect_Fragment;

type AssignWidget_ChoiceAssignWidget_Fragment = { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null };

type AssignWidget_CustomAssignWidget_Fragment = { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string };

type AssignWidget_SearchAssignWidget_Fragment = { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null };

type AssignWidget_SliderAssignWidget_Fragment = { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null };

type AssignWidget_StateChoiceAssignWidget_Fragment = { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string };

type AssignWidget_StringAssignWidget_Fragment = { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean };

export type AssignWidgetFragment = AssignWidget_ChoiceAssignWidget_Fragment | AssignWidget_CustomAssignWidget_Fragment | AssignWidget_SearchAssignWidget_Fragment | AssignWidget_SliderAssignWidget_Fragment | AssignWidget_StateChoiceAssignWidget_Fragment | AssignWidget_StringAssignWidget_Fragment;

export type ValidatorFragment = { __typename?: 'Validator', function: any, dependencies?: Array<string> | null, label?: string | null, errorMessage?: string | null };

export type PortFragment = { __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, kind: PortKind, identifier?: any | null, default?: any | null, effects?: Array<{ __typename: 'CustomEffect', kind: EffectKind, dependencies: Array<string>, hook: string, ward: string } | { __typename: 'MessageEffect', kind: EffectKind, dependencies: Array<string>, message: string }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, nullable: boolean, description?: string | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, children?: Array<{ __typename?: 'Port', kind: PortKind, identifier?: any | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, validators?: Array<{ __typename?: 'Validator', function: any, dependencies?: Array<string> | null, label?: string | null, errorMessage?: string | null }> | null };

export type CustomReturnWidgetFragment = { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string };

export type ChoiceReturnWidgetFragment = { __typename: 'ChoiceReturnWidget', choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null };

type ReturnWidget_ChoiceReturnWidget_Fragment = { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null };

type ReturnWidget_CustomReturnWidget_Fragment = { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string };

export type ReturnWidgetFragment = ReturnWidget_ChoiceReturnWidget_Fragment | ReturnWidget_CustomReturnWidget_Fragment;

export type ReleaseFragment = { __typename?: 'Release', id: string, version: string, scopes: Array<string>, colour: string, description: string, app: { __typename?: 'App', identifier: string }, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> }> };

export type ListReleaseFragment = { __typename?: 'Release', id: string, version: string, installed: boolean, scopes: Array<string>, colour: string, description: string, app: { __typename?: 'App', identifier: string }, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> }> };

export type GithubRepoFragment = { __typename?: 'GithubRepo', id: string, name: string, addedAt: any, updatedAt: any };

export type ResourceFragment = { __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string }, pods: Array<{ __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null }> };

export type ListResourceFragment = { __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } };

export type CudaSelectorFragment = { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null };

export type RocmSelectorFragment = { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null };

export type CreateGithubRepoMutationVariables = Exact<{
  identifier: Scalars['String']['input'];
}>;


export type CreateGithubRepoMutation = { __typename?: 'Mutation', createGithubRepo: { __typename?: 'GithubRepo', id: string } };

export type RescanReposMutationVariables = Exact<{ [key: string]: never; }>;


export type RescanReposMutation = { __typename?: 'Mutation', rescanRepos: Array<{ __typename?: 'GithubRepo', id: string }> };

export type ListBackendsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBackendsQuery = { __typename?: 'Query', backends: Array<{ __typename?: 'Backend', id: string, name: string, kind: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }> };

export type GetBackendQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetBackendQuery = { __typename?: 'Query', backend: { __typename?: 'Backend', id: string, clientId: string, instanceId: string, name: string, kind: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string }, pods: Array<{ __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null }>, resources: Array<{ __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } }> } };

export type GetDefinitionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetDefinitionQuery = { __typename?: 'Query', definition: { __typename?: 'Definition', id: string, name: string, hash: any, description?: string | null, args: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, kind: PortKind, identifier?: any | null, default?: any | null, effects?: Array<{ __typename: 'CustomEffect', kind: EffectKind, dependencies: Array<string>, hook: string, ward: string } | { __typename: 'MessageEffect', kind: EffectKind, dependencies: Array<string>, message: string }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, nullable: boolean, description?: string | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, children?: Array<{ __typename?: 'Port', kind: PortKind, identifier?: any | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, validators?: Array<{ __typename?: 'Validator', function: any, dependencies?: Array<string> | null, label?: string | null, errorMessage?: string | null }> | null }>, returns: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, kind: PortKind, identifier?: any | null, default?: any | null, effects?: Array<{ __typename: 'CustomEffect', kind: EffectKind, dependencies: Array<string>, hook: string, ward: string } | { __typename: 'MessageEffect', kind: EffectKind, dependencies: Array<string>, message: string }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, nullable: boolean, description?: string | null, children?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, children?: Array<{ __typename?: 'Port', kind: PortKind, identifier?: any | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string, filters?: Array<{ __typename: 'Port', kind: PortKind, key: string, identifier?: any | null, description?: string | null, nullable: boolean, assignWidget?: { __typename?: 'ChoiceAssignWidget' } | { __typename?: 'CustomAssignWidget' } | { __typename?: 'SearchAssignWidget', query: string } | { __typename?: 'SliderAssignWidget' } | { __typename?: 'StateChoiceAssignWidget' } | { __typename?: 'StringAssignWidget' } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StateChoiceAssignWidget', kind: AssignWidgetKind, followValue?: string | null, stateChoices: string } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, validators?: Array<{ __typename?: 'Validator', function: any, dependencies?: Array<string> | null, label?: string | null, errorMessage?: string | null }> | null }>, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> }> } };

export type ListDefinitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListDefinitionsQuery = { __typename?: 'Query', definitions: Array<{ __typename?: 'Definition', id: string, name: string, hash: any, description?: string | null, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } }> }> };

export type PrimaryDefinitionsQueryVariables = Exact<{
  pagination?: InputMaybe<OffsetPaginationInput>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<DefinitionOrder>;
}>;


export type PrimaryDefinitionsQuery = { __typename?: 'Query', definitions: Array<{ __typename?: 'Definition', id: string, name: string, hash: any, description?: string | null, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } }> }> };

export type AllPrimaryDefinitionsQueryVariables = Exact<{
  pagination?: InputMaybe<OffsetPaginationInput>;
  filters?: InputMaybe<DefinitionFilter>;
  order?: InputMaybe<DefinitionOrder>;
}>;


export type AllPrimaryDefinitionsQuery = { __typename?: 'Query', definitions: Array<{ __typename?: 'Definition', id: string, name: string, hash: any, description?: string | null, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } }> }> };

export type ListFlavoursQueryVariables = Exact<{ [key: string]: never; }>;


export type ListFlavoursQuery = { __typename?: 'Query', flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> }> };

export type GetFlavourQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetFlavourQuery = { __typename?: 'Query', flavour: { __typename?: 'Flavour', description: string, id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> } };

export type ListPodQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPodQuery = { __typename?: 'Query', pods: Array<{ __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null }> };

export type GetPodQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPodQuery = { __typename?: 'Query', pod: { __typename?: 'Pod', id: string, podId: string, status: PodStatus, clientId?: string | null, backend: { __typename?: 'Backend', id: string, clientId: string, instanceId: string, name: string, kind: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string }, pods: Array<{ __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null }>, resources: Array<{ __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } }> }, latestLogDump?: { __typename?: 'LogDump', logs: string, createdAt: any } | null, resource?: { __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } } | null, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } } } };

export type GetPodForAgentQueryVariables = Exact<{
  clientId: Scalars['ID']['input'];
  instanceId: Scalars['ID']['input'];
}>;


export type GetPodForAgentQuery = { __typename?: 'Query', podForAgent?: { __typename?: 'Pod', id: string, podId: string, status: PodStatus, clientId?: string | null, backend: { __typename?: 'Backend', id: string, clientId: string, instanceId: string, name: string, kind: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string }, pods: Array<{ __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null }>, resources: Array<{ __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } }> }, latestLogDump?: { __typename?: 'LogDump', logs: string, createdAt: any } | null, resource?: { __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } } | null, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } } } | null };

export type ListReleasesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListReleasesQuery = { __typename?: 'Query', releases: Array<{ __typename?: 'Release', id: string, version: string, installed: boolean, scopes: Array<string>, colour: string, description: string, app: { __typename?: 'App', identifier: string }, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> }> }> };

export type GetReleaseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetReleaseQuery = { __typename?: 'Query', release: { __typename?: 'Release', id: string, version: string, scopes: Array<string>, colour: string, description: string, app: { __typename?: 'App', identifier: string }, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> }> } };

export type ListGithubReposQueryVariables = Exact<{
  filters: GithubRepoFilter;
}>;


export type ListGithubReposQuery = { __typename?: 'Query', githubRepos: Array<{ __typename?: 'GithubRepo', id: string, name: string, addedAt: any, updatedAt: any }> };

export type ListResourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListResourcesQuery = { __typename?: 'Query', resources: Array<{ __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string } }> };

export type GetResourceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetResourceQuery = { __typename?: 'Query', resource: { __typename?: 'Resource', id: string, name: string, qualifiers?: any | null, backend: { __typename?: 'Backend', id: string, name: string }, pods: Array<{ __typename?: 'Pod', id: string, podId: string, clientId?: string | null, status: PodStatus, backend: { __typename?: 'Backend', name: string, user: { __typename?: 'User', sub: string }, client: { __typename?: 'Client', clientId: string } }, deployment: { __typename?: 'Deployment', id: string, flavour: { __typename?: 'Flavour', release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } } }, resource?: { __typename?: 'Resource', id: string, name: string } | null }> } };

export type GlobalSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GlobalSearchQuery = { __typename?: 'Query', definitions: Array<{ __typename?: 'Definition', id: string, name: string, hash: any, description?: string | null, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } } }> }>, flavours: Array<{ __typename?: 'Flavour', id: string, name: string, release: { __typename?: 'Release', id: string, version: string, app: { __typename?: 'App', identifier: string } }, selectors: Array<{ __typename?: 'CPUSelector' } | { __typename?: 'CudaSelector', cudaVersion?: string | null, cudaCores?: number | null } | { __typename?: 'RocmSelector', apiVersion?: string | null, apiThing?: string | null }> }> };

export const ListBackendFragmentDoc = gql`
    fragment ListBackend on Backend {
  id
  user {
    sub
  }
  client {
    clientId
  }
  name
  kind
}
    `;
export const CustomEffectFragmentDoc = gql`
    fragment CustomEffect on CustomEffect {
  __typename
  kind
  hook
  ward
}
    `;
export const MessageEffectFragmentDoc = gql`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `;
export const PortEffectFragmentDoc = gql`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${CustomEffectFragmentDoc}
${MessageEffectFragmentDoc}`;
export const StringAssignWidgetFragmentDoc = gql`
    fragment StringAssignWidget on StringAssignWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `;
export const CustomReturnWidgetFragmentDoc = gql`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `;
export const ChoiceReturnWidgetFragmentDoc = gql`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `;
export const ReturnWidgetFragmentDoc = gql`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${CustomReturnWidgetFragmentDoc}
${ChoiceReturnWidgetFragmentDoc}`;
export const FilterPortFragmentDoc = gql`
    fragment FilterPort on Port {
  __typename
  kind
  key
  identifier
  assignWidget {
    ... on SearchAssignWidget {
      query
    }
  }
  returnWidget {
    ...ReturnWidget
  }
  description
  nullable
}
    ${ReturnWidgetFragmentDoc}`;
export const SearchAssignWidgetFragmentDoc = gql`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${FilterPortFragmentDoc}`;
export const SliderAssignWidgetFragmentDoc = gql`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `;
export const ChoiceAssignWidgetFragmentDoc = gql`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `;
export const CustomAssignWidgetFragmentDoc = gql`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `;
export const StateChoiceAssignWidgetFragmentDoc = gql`
    fragment StateChoiceAssignWidget on StateChoiceAssignWidget {
  __typename
  kind
  followValue
  stateChoices
}
    `;
export const AssignWidgetFragmentDoc = gql`
    fragment AssignWidget on AssignWidget {
  __typename
  kind
  ...StringAssignWidget
  ...SearchAssignWidget
  ...SliderAssignWidget
  ...ChoiceAssignWidget
  ...CustomAssignWidget
  ...StateChoiceAssignWidget
}
    ${StringAssignWidgetFragmentDoc}
${SearchAssignWidgetFragmentDoc}
${SliderAssignWidgetFragmentDoc}
${ChoiceAssignWidgetFragmentDoc}
${CustomAssignWidgetFragmentDoc}
${StateChoiceAssignWidgetFragmentDoc}`;
export const ChildPortNestedFragmentDoc = gql`
    fragment ChildPortNested on Port {
  __typename
  kind
  key
  identifier
  children {
    kind
    identifier
    assignWidget {
      ...AssignWidget
    }
    returnWidget {
      ...ReturnWidget
    }
  }
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  description
  nullable
}
    ${AssignWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}`;
export const ChildPortFragmentDoc = gql`
    fragment ChildPort on Port {
  __typename
  kind
  key
  identifier
  children {
    ...ChildPortNested
  }
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  nullable
  description
}
    ${ChildPortNestedFragmentDoc}
${AssignWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}`;
export const ValidatorFragmentDoc = gql`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `;
export const PortFragmentDoc = gql`
    fragment Port on Port {
  __typename
  key
  label
  nullable
  description
  effects {
    ...PortEffect
  }
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  kind
  identifier
  children {
    ...ChildPort
  }
  default
  nullable
  validators {
    ...Validator
  }
}
    ${PortEffectFragmentDoc}
${AssignWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}
${ChildPortFragmentDoc}
${ValidatorFragmentDoc}`;
export const CudaSelectorFragmentDoc = gql`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `;
export const RocmSelectorFragmentDoc = gql`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `;
export const ListFlavourFragmentDoc = gql`
    fragment ListFlavour on Flavour {
  id
  name
  release {
    id
    version
    app {
      identifier
    }
  }
  selectors {
    ...CudaSelector
    ...RocmSelector
  }
}
    ${CudaSelectorFragmentDoc}
${RocmSelectorFragmentDoc}`;
export const DefinitionFragmentDoc = gql`
    fragment Definition on Definition {
  id
  name
  hash
  description
  args {
    ...Port
  }
  returns {
    ...Port
  }
  flavours {
    ...ListFlavour
  }
}
    ${PortFragmentDoc}
${ListFlavourFragmentDoc}`;
export const ListDefinitionFragmentDoc = gql`
    fragment ListDefinition on Definition {
  id
  name
  hash
  description
  flavours {
    id
    name
    release {
      id
      version
      app {
        identifier
      }
    }
  }
}
    `;
export const FlavourFragmentDoc = gql`
    fragment Flavour on Flavour {
  ...ListFlavour
  description
}
    ${ListFlavourFragmentDoc}`;
export const ListPodFragmentDoc = gql`
    fragment ListPod on Pod {
  id
  podId
  backend {
    user {
      sub
    }
    client {
      clientId
    }
    name
  }
  deployment {
    id
    flavour {
      release {
        id
        version
        app {
          identifier
        }
      }
    }
  }
  clientId
  resource {
    id
    name
  }
  status
}
    `;
export const ListResourceFragmentDoc = gql`
    fragment ListResource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
}
    `;
export const BackendFragmentDoc = gql`
    fragment Backend on Backend {
  id
  user {
    sub
  }
  client {
    clientId
  }
  clientId
  instanceId
  name
  kind
  pods {
    ...ListPod
  }
  resources {
    ...ListResource
  }
}
    ${ListPodFragmentDoc}
${ListResourceFragmentDoc}`;
export const PodFragmentDoc = gql`
    fragment Pod on Pod {
  id
  podId
  backend {
    ...Backend
  }
  status
  latestLogDump {
    logs
    createdAt
  }
  clientId
  resource {
    ...ListResource
  }
  deployment {
    id
    flavour {
      release {
        id
        version
        app {
          identifier
        }
      }
    }
  }
}
    ${BackendFragmentDoc}
${ListResourceFragmentDoc}`;
export const ReleaseFragmentDoc = gql`
    fragment Release on Release {
  id
  version
  app {
    identifier
  }
  flavours {
    ...ListFlavour
  }
  scopes
  colour
  description
}
    ${ListFlavourFragmentDoc}`;
export const ListReleaseFragmentDoc = gql`
    fragment ListRelease on Release {
  id
  version
  app {
    identifier
  }
  installed
  scopes
  flavours {
    ...ListFlavour
  }
  colour
  description
}
    ${ListFlavourFragmentDoc}`;
export const GithubRepoFragmentDoc = gql`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `;
export const ResourceFragmentDoc = gql`
    fragment Resource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
  pods {
    ...ListPod
  }
}
    ${ListPodFragmentDoc}`;
export const CreateGithubRepoDocument = gql`
    mutation CreateGithubRepo($identifier: String!) {
  createGithubRepo(input: {identifier: $identifier}) {
    id
  }
}
    `;
export type CreateGithubRepoMutationFn = Apollo.MutationFunction<CreateGithubRepoMutation, CreateGithubRepoMutationVariables>;

/**
 * __useCreateGithubRepoMutation__
 *
 * To run a mutation, you first call `useCreateGithubRepoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGithubRepoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGithubRepoMutation, { data, loading, error }] = useCreateGithubRepoMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useCreateGithubRepoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateGithubRepoMutation, CreateGithubRepoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateGithubRepoMutation, CreateGithubRepoMutationVariables>(CreateGithubRepoDocument, options);
      }
export type CreateGithubRepoMutationHookResult = ReturnType<typeof useCreateGithubRepoMutation>;
export type CreateGithubRepoMutationResult = Apollo.MutationResult<CreateGithubRepoMutation>;
export type CreateGithubRepoMutationOptions = Apollo.BaseMutationOptions<CreateGithubRepoMutation, CreateGithubRepoMutationVariables>;
export const RescanReposDocument = gql`
    mutation RescanRepos {
  rescanRepos {
    id
  }
}
    `;
export type RescanReposMutationFn = Apollo.MutationFunction<RescanReposMutation, RescanReposMutationVariables>;

/**
 * __useRescanReposMutation__
 *
 * To run a mutation, you first call `useRescanReposMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRescanReposMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rescanReposMutation, { data, loading, error }] = useRescanReposMutation({
 *   variables: {
 *   },
 * });
 */
export function useRescanReposMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RescanReposMutation, RescanReposMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RescanReposMutation, RescanReposMutationVariables>(RescanReposDocument, options);
      }
export type RescanReposMutationHookResult = ReturnType<typeof useRescanReposMutation>;
export type RescanReposMutationResult = Apollo.MutationResult<RescanReposMutation>;
export type RescanReposMutationOptions = Apollo.BaseMutationOptions<RescanReposMutation, RescanReposMutationVariables>;
export const ListBackendsDocument = gql`
    query ListBackends {
  backends {
    ...ListBackend
  }
}
    ${ListBackendFragmentDoc}`;

/**
 * __useListBackendsQuery__
 *
 * To run a query within a React component, call `useListBackendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBackendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBackendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListBackendsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListBackendsQuery, ListBackendsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListBackendsQuery, ListBackendsQueryVariables>(ListBackendsDocument, options);
      }
export function useListBackendsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListBackendsQuery, ListBackendsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListBackendsQuery, ListBackendsQueryVariables>(ListBackendsDocument, options);
        }
export type ListBackendsQueryHookResult = ReturnType<typeof useListBackendsQuery>;
export type ListBackendsLazyQueryHookResult = ReturnType<typeof useListBackendsLazyQuery>;
export type ListBackendsQueryResult = Apollo.QueryResult<ListBackendsQuery, ListBackendsQueryVariables>;
export const GetBackendDocument = gql`
    query GetBackend($id: ID!) {
  backend(id: $id) {
    ...Backend
  }
}
    ${BackendFragmentDoc}`;

/**
 * __useGetBackendQuery__
 *
 * To run a query within a React component, call `useGetBackendQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBackendQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBackendQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBackendQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetBackendQuery, GetBackendQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetBackendQuery, GetBackendQueryVariables>(GetBackendDocument, options);
      }
export function useGetBackendLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBackendQuery, GetBackendQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetBackendQuery, GetBackendQueryVariables>(GetBackendDocument, options);
        }
export type GetBackendQueryHookResult = ReturnType<typeof useGetBackendQuery>;
export type GetBackendLazyQueryHookResult = ReturnType<typeof useGetBackendLazyQuery>;
export type GetBackendQueryResult = Apollo.QueryResult<GetBackendQuery, GetBackendQueryVariables>;
export const GetDefinitionDocument = gql`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${DefinitionFragmentDoc}`;

/**
 * __useGetDefinitionQuery__
 *
 * To run a query within a React component, call `useGetDefinitionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDefinitionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDefinitionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDefinitionQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetDefinitionQuery, GetDefinitionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetDefinitionQuery, GetDefinitionQueryVariables>(GetDefinitionDocument, options);
      }
export function useGetDefinitionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDefinitionQuery, GetDefinitionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetDefinitionQuery, GetDefinitionQueryVariables>(GetDefinitionDocument, options);
        }
export type GetDefinitionQueryHookResult = ReturnType<typeof useGetDefinitionQuery>;
export type GetDefinitionLazyQueryHookResult = ReturnType<typeof useGetDefinitionLazyQuery>;
export type GetDefinitionQueryResult = Apollo.QueryResult<GetDefinitionQuery, GetDefinitionQueryVariables>;
export const ListDefinitionsDocument = gql`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${ListDefinitionFragmentDoc}`;

/**
 * __useListDefinitionsQuery__
 *
 * To run a query within a React component, call `useListDefinitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDefinitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDefinitionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDefinitionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListDefinitionsQuery, ListDefinitionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListDefinitionsQuery, ListDefinitionsQueryVariables>(ListDefinitionsDocument, options);
      }
export function useListDefinitionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListDefinitionsQuery, ListDefinitionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListDefinitionsQuery, ListDefinitionsQueryVariables>(ListDefinitionsDocument, options);
        }
export type ListDefinitionsQueryHookResult = ReturnType<typeof useListDefinitionsQuery>;
export type ListDefinitionsLazyQueryHookResult = ReturnType<typeof useListDefinitionsLazyQuery>;
export type ListDefinitionsQueryResult = Apollo.QueryResult<ListDefinitionsQuery, ListDefinitionsQueryVariables>;
export const PrimaryDefinitionsDocument = gql`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${ListDefinitionFragmentDoc}`;

/**
 * __usePrimaryDefinitionsQuery__
 *
 * To run a query within a React component, call `usePrimaryDefinitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrimaryDefinitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrimaryDefinitionsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      identifier: // value for 'identifier'
 *      search: // value for 'search'
 *      order: // value for 'order'
 *   },
 * });
 */
export function usePrimaryDefinitionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PrimaryDefinitionsQuery, PrimaryDefinitionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PrimaryDefinitionsQuery, PrimaryDefinitionsQueryVariables>(PrimaryDefinitionsDocument, options);
      }
export function usePrimaryDefinitionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PrimaryDefinitionsQuery, PrimaryDefinitionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PrimaryDefinitionsQuery, PrimaryDefinitionsQueryVariables>(PrimaryDefinitionsDocument, options);
        }
export type PrimaryDefinitionsQueryHookResult = ReturnType<typeof usePrimaryDefinitionsQuery>;
export type PrimaryDefinitionsLazyQueryHookResult = ReturnType<typeof usePrimaryDefinitionsLazyQuery>;
export type PrimaryDefinitionsQueryResult = Apollo.QueryResult<PrimaryDefinitionsQuery, PrimaryDefinitionsQueryVariables>;
export const AllPrimaryDefinitionsDocument = gql`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${ListDefinitionFragmentDoc}`;

/**
 * __useAllPrimaryDefinitionsQuery__
 *
 * To run a query within a React component, call `useAllPrimaryDefinitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPrimaryDefinitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPrimaryDefinitionsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useAllPrimaryDefinitionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllPrimaryDefinitionsQuery, AllPrimaryDefinitionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllPrimaryDefinitionsQuery, AllPrimaryDefinitionsQueryVariables>(AllPrimaryDefinitionsDocument, options);
      }
export function useAllPrimaryDefinitionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllPrimaryDefinitionsQuery, AllPrimaryDefinitionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllPrimaryDefinitionsQuery, AllPrimaryDefinitionsQueryVariables>(AllPrimaryDefinitionsDocument, options);
        }
export type AllPrimaryDefinitionsQueryHookResult = ReturnType<typeof useAllPrimaryDefinitionsQuery>;
export type AllPrimaryDefinitionsLazyQueryHookResult = ReturnType<typeof useAllPrimaryDefinitionsLazyQuery>;
export type AllPrimaryDefinitionsQueryResult = Apollo.QueryResult<AllPrimaryDefinitionsQuery, AllPrimaryDefinitionsQueryVariables>;
export const ListFlavoursDocument = gql`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${ListFlavourFragmentDoc}`;

/**
 * __useListFlavoursQuery__
 *
 * To run a query within a React component, call `useListFlavoursQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFlavoursQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFlavoursQuery({
 *   variables: {
 *   },
 * });
 */
export function useListFlavoursQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListFlavoursQuery, ListFlavoursQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListFlavoursQuery, ListFlavoursQueryVariables>(ListFlavoursDocument, options);
      }
export function useListFlavoursLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListFlavoursQuery, ListFlavoursQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListFlavoursQuery, ListFlavoursQueryVariables>(ListFlavoursDocument, options);
        }
export type ListFlavoursQueryHookResult = ReturnType<typeof useListFlavoursQuery>;
export type ListFlavoursLazyQueryHookResult = ReturnType<typeof useListFlavoursLazyQuery>;
export type ListFlavoursQueryResult = Apollo.QueryResult<ListFlavoursQuery, ListFlavoursQueryVariables>;
export const GetFlavourDocument = gql`
    query GetFlavour($id: ID!) {
  flavour(id: $id) {
    ...Flavour
  }
}
    ${FlavourFragmentDoc}`;

/**
 * __useGetFlavourQuery__
 *
 * To run a query within a React component, call `useGetFlavourQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFlavourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFlavourQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFlavourQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetFlavourQuery, GetFlavourQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFlavourQuery, GetFlavourQueryVariables>(GetFlavourDocument, options);
      }
export function useGetFlavourLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFlavourQuery, GetFlavourQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFlavourQuery, GetFlavourQueryVariables>(GetFlavourDocument, options);
        }
export type GetFlavourQueryHookResult = ReturnType<typeof useGetFlavourQuery>;
export type GetFlavourLazyQueryHookResult = ReturnType<typeof useGetFlavourLazyQuery>;
export type GetFlavourQueryResult = Apollo.QueryResult<GetFlavourQuery, GetFlavourQueryVariables>;
export const ListPodDocument = gql`
    query ListPod {
  pods {
    ...ListPod
  }
}
    ${ListPodFragmentDoc}`;

/**
 * __useListPodQuery__
 *
 * To run a query within a React component, call `useListPodQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPodQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPodQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListPodQuery, ListPodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListPodQuery, ListPodQueryVariables>(ListPodDocument, options);
      }
export function useListPodLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListPodQuery, ListPodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListPodQuery, ListPodQueryVariables>(ListPodDocument, options);
        }
export type ListPodQueryHookResult = ReturnType<typeof useListPodQuery>;
export type ListPodLazyQueryHookResult = ReturnType<typeof useListPodLazyQuery>;
export type ListPodQueryResult = Apollo.QueryResult<ListPodQuery, ListPodQueryVariables>;
export const GetPodDocument = gql`
    query GetPod($id: ID!) {
  pod(id: $id) {
    ...Pod
  }
}
    ${PodFragmentDoc}`;

/**
 * __useGetPodQuery__
 *
 * To run a query within a React component, call `useGetPodQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPodQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPodQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPodQuery, GetPodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPodQuery, GetPodQueryVariables>(GetPodDocument, options);
      }
export function useGetPodLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPodQuery, GetPodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPodQuery, GetPodQueryVariables>(GetPodDocument, options);
        }
export type GetPodQueryHookResult = ReturnType<typeof useGetPodQuery>;
export type GetPodLazyQueryHookResult = ReturnType<typeof useGetPodLazyQuery>;
export type GetPodQueryResult = Apollo.QueryResult<GetPodQuery, GetPodQueryVariables>;
export const GetPodForAgentDocument = gql`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${PodFragmentDoc}`;

/**
 * __useGetPodForAgentQuery__
 *
 * To run a query within a React component, call `useGetPodForAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPodForAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPodForAgentQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useGetPodForAgentQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPodForAgentQuery, GetPodForAgentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPodForAgentQuery, GetPodForAgentQueryVariables>(GetPodForAgentDocument, options);
      }
export function useGetPodForAgentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPodForAgentQuery, GetPodForAgentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPodForAgentQuery, GetPodForAgentQueryVariables>(GetPodForAgentDocument, options);
        }
export type GetPodForAgentQueryHookResult = ReturnType<typeof useGetPodForAgentQuery>;
export type GetPodForAgentLazyQueryHookResult = ReturnType<typeof useGetPodForAgentLazyQuery>;
export type GetPodForAgentQueryResult = Apollo.QueryResult<GetPodForAgentQuery, GetPodForAgentQueryVariables>;
export const ListReleasesDocument = gql`
    query ListReleases {
  releases {
    ...ListRelease
  }
}
    ${ListReleaseFragmentDoc}`;

/**
 * __useListReleasesQuery__
 *
 * To run a query within a React component, call `useListReleasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListReleasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListReleasesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListReleasesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListReleasesQuery, ListReleasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListReleasesQuery, ListReleasesQueryVariables>(ListReleasesDocument, options);
      }
export function useListReleasesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListReleasesQuery, ListReleasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListReleasesQuery, ListReleasesQueryVariables>(ListReleasesDocument, options);
        }
export type ListReleasesQueryHookResult = ReturnType<typeof useListReleasesQuery>;
export type ListReleasesLazyQueryHookResult = ReturnType<typeof useListReleasesLazyQuery>;
export type ListReleasesQueryResult = Apollo.QueryResult<ListReleasesQuery, ListReleasesQueryVariables>;
export const GetReleaseDocument = gql`
    query GetRelease($id: ID!) {
  release(id: $id) {
    ...Release
  }
}
    ${ReleaseFragmentDoc}`;

/**
 * __useGetReleaseQuery__
 *
 * To run a query within a React component, call `useGetReleaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReleaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReleaseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReleaseQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetReleaseQuery, GetReleaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetReleaseQuery, GetReleaseQueryVariables>(GetReleaseDocument, options);
      }
export function useGetReleaseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReleaseQuery, GetReleaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetReleaseQuery, GetReleaseQueryVariables>(GetReleaseDocument, options);
        }
export type GetReleaseQueryHookResult = ReturnType<typeof useGetReleaseQuery>;
export type GetReleaseLazyQueryHookResult = ReturnType<typeof useGetReleaseLazyQuery>;
export type GetReleaseQueryResult = Apollo.QueryResult<GetReleaseQuery, GetReleaseQueryVariables>;
export const ListGithubReposDocument = gql`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${GithubRepoFragmentDoc}`;

/**
 * __useListGithubReposQuery__
 *
 * To run a query within a React component, call `useListGithubReposQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGithubReposQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGithubReposQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useListGithubReposQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListGithubReposQuery, ListGithubReposQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListGithubReposQuery, ListGithubReposQueryVariables>(ListGithubReposDocument, options);
      }
export function useListGithubReposLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListGithubReposQuery, ListGithubReposQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListGithubReposQuery, ListGithubReposQueryVariables>(ListGithubReposDocument, options);
        }
export type ListGithubReposQueryHookResult = ReturnType<typeof useListGithubReposQuery>;
export type ListGithubReposLazyQueryHookResult = ReturnType<typeof useListGithubReposLazyQuery>;
export type ListGithubReposQueryResult = Apollo.QueryResult<ListGithubReposQuery, ListGithubReposQueryVariables>;
export const ListResourcesDocument = gql`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${ListResourceFragmentDoc}`;

/**
 * __useListResourcesQuery__
 *
 * To run a query within a React component, call `useListResourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListResourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListResourcesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListResourcesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListResourcesQuery, ListResourcesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListResourcesQuery, ListResourcesQueryVariables>(ListResourcesDocument, options);
      }
export function useListResourcesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListResourcesQuery, ListResourcesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListResourcesQuery, ListResourcesQueryVariables>(ListResourcesDocument, options);
        }
export type ListResourcesQueryHookResult = ReturnType<typeof useListResourcesQuery>;
export type ListResourcesLazyQueryHookResult = ReturnType<typeof useListResourcesLazyQuery>;
export type ListResourcesQueryResult = Apollo.QueryResult<ListResourcesQuery, ListResourcesQueryVariables>;
export const GetResourceDocument = gql`
    query GetResource($id: ID!) {
  resource(id: $id) {
    ...Resource
  }
}
    ${ResourceFragmentDoc}`;

/**
 * __useGetResourceQuery__
 *
 * To run a query within a React component, call `useGetResourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetResourceQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetResourceQuery, GetResourceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetResourceQuery, GetResourceQueryVariables>(GetResourceDocument, options);
      }
export function useGetResourceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetResourceQuery, GetResourceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetResourceQuery, GetResourceQueryVariables>(GetResourceDocument, options);
        }
export type GetResourceQueryHookResult = ReturnType<typeof useGetResourceQuery>;
export type GetResourceLazyQueryHookResult = ReturnType<typeof useGetResourceLazyQuery>;
export type GetResourceQueryResult = Apollo.QueryResult<GetResourceQuery, GetResourceQueryVariables>;
export const GlobalSearchDocument = gql`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${ListDefinitionFragmentDoc}
${ListFlavourFragmentDoc}`;

/**
 * __useGlobalSearchQuery__
 *
 * To run a query within a React component, call `useGlobalSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalSearchQuery({
 *   variables: {
 *      search: // value for 'search'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGlobalSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GlobalSearchQuery, GlobalSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GlobalSearchQuery, GlobalSearchQueryVariables>(GlobalSearchDocument, options);
      }
export function useGlobalSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GlobalSearchQuery, GlobalSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GlobalSearchQuery, GlobalSearchQueryVariables>(GlobalSearchDocument, options);
        }
export type GlobalSearchQueryHookResult = ReturnType<typeof useGlobalSearchQuery>;
export type GlobalSearchLazyQueryHookResult = ReturnType<typeof useGlobalSearchLazyQuery>;
export type GlobalSearchQueryResult = Apollo.QueryResult<GlobalSearchQuery, GlobalSearchQueryVariables>;