import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@site/src/lib/lok/funcs';
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
  AppIdentifier: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Fakt: { input: any; output: any; }
  Identifier: { input: any; output: any; }
  ServiceIdentifier: { input: any; output: any; }
  UnsafeChild: { input: any; output: any; }
  Version: { input: any; output: any; }
};

export type AcknowledgeMessageInput = {
  acknowledged: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

export type AddItemToStashInput = {
  items: Array<StashItemInput>;
  stash: Scalars['ID']['input'];
};

/** An App is the Arkitekt equivalent of a Software Application. It is a collection of `Releases` that can be all part of the same application. E.g the App `Napari` could have the releases `0.1.0` and `0.2.0`. */
export type App = {
  __typename?: 'App';
  id: Scalars['ID']['output'];
  /** The identifier of the app. This should be a globally unique string that identifies the app. We encourage you to use the reverse domain name notation. E.g. `com.example.myapp` */
  identifier: Scalars['AppIdentifier']['output'];
  /** The logo of the app. This should be a url to a logo that can be used to represent the app. */
  logo?: Maybe<MediaStore>;
  /** The name of the app */
  name: Scalars['String']['output'];
  /** The releases of the app. A release is a version of the app that can be installed by a user. */
  releases: Array<Release>;
};

/** App(id, name, identifier, logo) */
export type AppFilter = {
  AND?: InputMaybe<AppFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<AppFilter>;
  OR?: InputMaybe<AppFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * A client is a way of authenticating users with a release.
 *  The strategy of authentication is defined by the kind of client. And allows for different authentication flow.
 *  E.g a client can be a DESKTOP app, that might be used by multiple users, or a WEBSITE that wants to connect to a user's account,
 *  but also a DEVELOPMENT client that is used by a developer to test the app. The client model thinly wraps the oauth2 client model, which is used to authenticate users.
 */
export type Client = {
  __typename?: 'Client';
  id: Scalars['ID']['output'];
  /** The configuration of the client. This is the configuration that will be sent to the client. It should never contain sensitive information. */
  kind: ClientKind;
  /** The logo of the release. This should be a url to a logo that can be used to represent the release. */
  logo?: Maybe<MediaStore>;
  /** The mappings of the client. A mapping is a mapping of a service to a service instance. This is used to configure the composition. */
  mappings: Array<ServiceInstanceMapping>;
  /** The name of the client. This is a human readable name of the client. */
  name: Scalars['String']['output'];
  /** The real oauth2 client that is used to authenticate users with this client. */
  oauth2Client: Oauth2Client;
  /** Is this client public? If a client is public  */
  public: Scalars['Boolean']['output'];
  /** The release that this client belongs to. */
  release: Release;
  /** The user that manages this release. */
  tenant: User;
  /** The configuration of the client. This is the configuration that will be sent to the client. It should never contain sensitive information. */
  token: Scalars['String']['output'];
  /** If the client is a DEVELOPMENT client, which requires no further authentication, this is the user that is authenticated with the client. */
  user?: Maybe<User>;
};

/** Client(id, name, release, oauth2_client, kind, user, organization, redirect_uris, public, token, tenant, created_at, requirements_hash, logo) */
export type ClientFilter = {
  AND?: InputMaybe<ClientFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ClientFilter>;
  OR?: InputMaybe<ClientFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum ClientKind {
  Desktop = 'DESKTOP',
  Development = 'DEVELOPMENT',
  Website = 'WEBSITE'
}

/**
 * Comments represent the comments of a user on a specific data item
 * tart are identified by the unique combination of `identifier` and `object`.
 * E.g a comment for an Image on the Mikro services would be serverd as
 * `@mikro/image:imageID`.
 *
 * Comments always belong to the user that created it. Comments in threads
 * get a parent attribute set, that points to the immediate parent.
 *
 * Each comment contains multiple descendents, that make up a *rich* representation
 * of the underlying comment data including potential mentions, or links, or
 * paragraphs.
 */
export type Comment = {
  __typename?: 'Comment';
  /** The children of this comment */
  children: Array<Comment>;
  /** The time this comment got created */
  createdAt: Scalars['DateTime']['output'];
  /** The immediate descendends of the comments. Think typed Rich Representation */
  descendants: Array<Descendant>;
  id: Scalars['ID']['output'];
  /** The identifier of the object. Consult the documentation for the format */
  identifier: Scalars['Identifier']['output'];
  /** The users that got mentioned in this comment */
  mentions: Array<User>;
  /** The object id of the object, on its associated service */
  object: Scalars['String']['output'];
  /** The parent of this comment. Think Thread */
  parent?: Maybe<Comment>;
  resolved: Scalars['Boolean']['output'];
  /** The user that resolved this comment */
  resolvedBy?: Maybe<User>;
  /** The user that created this comment */
  user: User;
};


/**
 * Comments represent the comments of a user on a specific data item
 * tart are identified by the unique combination of `identifier` and `object`.
 * E.g a comment for an Image on the Mikro services would be serverd as
 * `@mikro/image:imageID`.
 *
 * Comments always belong to the user that created it. Comments in threads
 * get a parent attribute set, that points to the immediate parent.
 *
 * Each comment contains multiple descendents, that make up a *rich* representation
 * of the underlying comment data including potential mentions, or links, or
 * paragraphs.
 */
export type CommentMentionsArgs = {
  filters?: InputMaybe<UserFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** A Communication */
export type Communication = {
  __typename?: 'Communication';
  channel: Scalars['ID']['output'];
};

export type Context = {
  __typename?: 'Context';
  /** Are we acting in the active organization of the user? */
  fitsActiveOrganization: Scalars['Boolean']['output'];
  /** The organization that is associated with this app */
  organization: Organization;
  /** The roles that the user has in the organization */
  roles: Array<Scalars['String']['output']>;
  /** The scope of the app within in the organization */
  scope: Array<Scalars['String']['output']>;
  /** The user that is associated with this app */
  user: User;
};

export type CreateCommentInput = {
  descendants: Array<DescendantInput>;
  identifier: Scalars['Identifier']['input'];
  notify?: InputMaybe<Scalars['Boolean']['input']>;
  object: Scalars['ID']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateGroupProfileInput = {
  avatar: Scalars['ID']['input'];
  group: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CreateProfileInput = {
  name: Scalars['String']['input'];
  user: Scalars['ID']['input'];
};

export type CreateServiceInstanceInput = {
  allowedGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  allowedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  deniedGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  deniedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  identifier: Scalars['String']['input'];
  service: Scalars['ID']['input'];
};

export type CreateStashInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  name: Scalars['String']['input'];
};

export type DeleteStashInput = {
  stash: Scalars['ID']['input'];
};

export type DeleteStashItems = {
  items: Array<Scalars['ID']['input']>;
};

/** A descendant of a comment. Descendend are used to render rich text in the frontend. */
export type Descendant = {
  children?: Maybe<Array<Descendant>>;
  kind: DescendantKind;
  /** Unsafe children are not typed and fall back to json. This is a workaround if queries get too complex. */
  unsafeChildren?: Maybe<Array<Scalars['UnsafeChild']['output']>>;
};

export type DescendantInput = {
  bold?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<Array<DescendantInput>>;
  code?: InputMaybe<Scalars['Boolean']['input']>;
  italic?: InputMaybe<Scalars['Boolean']['input']>;
  kind: DescendantKind;
  text?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** The Kind of a Descendant */
export enum DescendantKind {
  Leaf = 'LEAF',
  Mention = 'MENTION',
  Paragraph = 'PARAGRAPH'
}

export type DevelopmentClientInput = {
  composition?: InputMaybe<Scalars['ID']['input']>;
  layers?: InputMaybe<Array<Scalars['String']['input']>>;
  manifest: ManifestInput;
  requirements?: Array<Requirement>;
};

export type DjangoModelType = {
  __typename?: 'DjangoModelType';
  pk: Scalars['ID']['output'];
};

/**
 *
 * A Group is the base unit of Role Based Access Control. A Group can have many users and many permissions. A user can have many groups. A user with a group that has a permission can perform the action that the permission allows.
 * Groups are propagated to the respecting subservices. Permissions are not. Each subservice has to define its own permissions and mappings to groups.
 *
 */
export type Group = {
  __typename?: 'Group';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  profile?: Maybe<GroupProfile>;
  /** The users that are in the group */
  users: Array<User>;
};

/** __doc__ */
export type GroupFilter = {
  AND?: InputMaybe<GroupFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<GroupFilter>;
  OR?: InputMaybe<GroupFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<StrFilterLookup>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 *
 * A Profile of a User. A Profile can be used to display personalied information about a user.
 *
 *
 *
 *
 *
 */
export type GroupProfile = {
  __typename?: 'GroupProfile';
  /** The avatar of the group */
  avatar?: Maybe<MediaStore>;
  /** A short bio of the group */
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The name of the group */
  name?: Maybe<Scalars['String']['output']>;
};

/** An alias for a service instance. This is used to provide a more user-friendly name for the instance. */
export type InstanceAlias = {
  __typename?: 'InstanceAlias';
  /** The challenge of the alias. This is used to verify that the alias is reachable. If set, the alias will be accessed via the challenge URL (e.g. 'example.com/.well-known/challenge'). If not set, the alias will be accessed via the instance's URL. */
  challenge: Scalars['String']['output'];
  /** The host of the alias, if its a ABSOLUTE alias (e.g. 'example.com'). If not set, the alias is relative to the layer's domain. */
  host?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The instance that this alias belongs to. */
  instance: ServiceInstance;
  /** The name of the alias. This is a human readable name of the alias. */
  kind: Scalars['String']['output'];
  /** The layer that this alias belongs to. */
  layer: Layer;
  /** The path of the alias, if its a ABSOLUTE alias (e.g. 'example.com/path'). If not set, the alias is relative to the layer's path. */
  path?: Maybe<Scalars['String']['output']>;
  /** The port of the alias, if its a ABSOLUTE alias (e.g. 'example.com:8080'). If not set, the alias is relative to the layer's port. */
  port?: Maybe<Scalars['Int']['output']>;
  /** Is this alias using SSL? If true, the alias will be accessed via https:// instead of http://. This is used to indicate that the alias is secure and should be accessed via SSL */
  ssl: Scalars['Boolean']['output'];
};

/** A Service is a Webservice that a Client might want to access. It is not the configured instance of the service, but the service itself. */
export type Layer = {
  __typename?: 'Layer';
  /** The description of the service. This should be a human readable description of the service. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The identifier of the service. This should be a globally unique string that identifies the service. We encourage you to use the reverse domain name notation. E.g. `com.example.myservice` */
  identifier: Scalars['ServiceIdentifier']['output'];
  /** The instances of the service. A service instance is a configured instance of a service. It will be configured by a configuration backend and will be used to send to the client as a configuration. It should never contain sensitive information. */
  instances: Array<ServiceInstance>;
  /** The logo of the service. This should be a url to a logo that can be used to represent the service. */
  logo?: Maybe<MediaStore>;
  /** The name of the layer */
  name: Scalars['String']['output'];
};


/** A Service is a Webservice that a Client might want to access. It is not the configured instance of the service, but the service itself. */
export type LayerInstancesArgs = {
  filters?: InputMaybe<ServiceInstanceFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** Layer(id, name, identifier, logo, description, dns_probe, get_probe, kind) */
export type LayerFilter = {
  AND?: InputMaybe<LayerFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<LayerFilter>;
  OR?: InputMaybe<LayerFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** A leaf of text. This is the most basic descendant and always ends a tree. */
export type LeafDescendant = Descendant & {
  __typename?: 'LeafDescendant';
  bold?: Maybe<Scalars['Boolean']['output']>;
  children?: Maybe<Array<Descendant>>;
  code?: Maybe<Scalars['Boolean']['output']>;
  italic?: Maybe<Scalars['Boolean']['output']>;
  kind: DescendantKind;
  text?: Maybe<Scalars['String']['output']>;
  underline?: Maybe<Scalars['Boolean']['output']>;
  /** Unsafe children are not typed and fall back to json. This is a workaround if queries get too complex. */
  unsafeChildren?: Maybe<Array<Scalars['UnsafeChild']['output']>>;
};

export type LinkingRequestInput = {
  host: Scalars['String']['input'];
  isSecure?: Scalars['Boolean']['input'];
  port: Scalars['String']['input'];
};

export type ManifestInput = {
  identifier: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  scopes?: Array<Scalars['String']['input']>;
  version: Scalars['String']['input'];
};

/** MediaStore(id, path, key, bucket, populated, s3store_ptr) */
export type MediaStore = {
  __typename?: 'MediaStore';
  bucket: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  /** The stodre of the image */
  path: Scalars['String']['output'];
  presignedUrl: Scalars['String']['output'];
};


/** MediaStore(id, path, key, bucket, populated, s3store_ptr) */
export type MediaStorePresignedUrlArgs = {
  host?: InputMaybe<Scalars['String']['input']>;
};

/**
 *
 * A Membership is a relation between a User and an Organization. It can have multiple Roles assigned to it.
 *
 */
export type Membership = {
  __typename?: 'Membership';
  /** The groups that the user has in the organization */
  groups: Array<Group>;
  id: Scalars['ID']['output'];
  organization: Organization;
  /** The roles that the user has in the organization */
  roles: Array<Role>;
  user: User;
};


/**
 *
 * A Membership is a relation between a User and an Organization. It can have multiple Roles assigned to it.
 *
 */
export type MembershipRolesArgs = {
  filters?: InputMaybe<RoleFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** __doc__ */
export type MembershipFilter = {
  AND?: InputMaybe<MembershipFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<MembershipFilter>;
  OR?: InputMaybe<MembershipFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<StrFilterLookup>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** A mention of a user */
export type MentionDescendant = Descendant & {
  __typename?: 'MentionDescendant';
  children?: Maybe<Array<Descendant>>;
  kind: DescendantKind;
  /** Unsafe children are not typed and fall back to json. This is a workaround if queries get too complex. */
  unsafeChildren?: Maybe<Array<Scalars['UnsafeChild']['output']>>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acknowledgeMessage: SystemMessage;
  /** Add items to a stash */
  addItemsToStash: Array<StashItem>;
  createComment: Comment;
  createDevelopmentalClient: Client;
  createGroupProfile: GroupProfile;
  createInstanceAlias: InstanceAlias;
  createProfile: Profile;
  createServiceInstance: ServiceInstance;
  /** Create a new stash */
  createStash: Stash;
  createUser: User;
  deleteStash: Scalars['ID']['output'];
  /** Delete items from a stash */
  deleteStashItems: Array<Scalars['ID']['output']>;
  render: Scalars['Fakt']['output'];
  replyTo: Comment;
  requestMediaUpload: PresignedPostCredentials;
  resolveComment: Comment;
  updateGroupProfile: GroupProfile;
  updateInstanceAlias: InstanceAlias;
  updateProfile: Profile;
  updateServiceInstance: ServiceInstance;
  /** Update a stash */
  updateStash: Stash;
};


export type MutationAcknowledgeMessageArgs = {
  input: AcknowledgeMessageInput;
};


export type MutationAddItemsToStashArgs = {
  input: AddItemToStashInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateDevelopmentalClientArgs = {
  input: DevelopmentClientInput;
};


export type MutationCreateGroupProfileArgs = {
  input: CreateGroupProfileInput;
};


export type MutationCreateInstanceAliasArgs = {
  input: CreateServiceInstanceInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateServiceInstanceArgs = {
  input: CreateServiceInstanceInput;
};


export type MutationCreateStashArgs = {
  input: CreateStashInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteStashArgs = {
  input: DeleteStashInput;
};


export type MutationDeleteStashItemsArgs = {
  input: DeleteStashItems;
};


export type MutationRenderArgs = {
  input: RenderInput;
};


export type MutationReplyToArgs = {
  input: ReplyToCommentInput;
};


export type MutationRequestMediaUploadArgs = {
  input: RequestMediaUploadInput;
};


export type MutationResolveCommentArgs = {
  input: ResolveCommentInput;
};


export type MutationUpdateGroupProfileArgs = {
  input: UpdateGroupProfileInput;
};


export type MutationUpdateInstanceAliasArgs = {
  input: UpdateServiceInstanceInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateServiceInstanceArgs = {
  input: UpdateServiceInstanceInput;
};


export type MutationUpdateStashArgs = {
  input: UpdateStashInput;
};

/** OAuth2Client(id, user, organization, client_id, client_secret, redirect_uris, scope, token_endpoint_auth_method, grant_types, response_types) */
export type Oauth2Client = {
  __typename?: 'Oauth2Client';
  clientId: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type OffsetPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: Scalars['Int']['input'];
};

/** An Organization is a group of users that can work together on a project. */
export type Organization = {
  __typename?: 'Organization';
  /** The users that are currently active in the organization */
  activeUsers: Array<User>;
  /** A short description of the organization */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The logo of the organization */
  logo?: Maybe<MediaStore>;
  name: Scalars['String']['output'];
  /** The roles that are available in the organization */
  roles: Array<Role>;
  slug: Scalars['String']['output'];
  /** The users that are part of the organization */
  users: Array<User>;
};


/** An Organization is a group of users that can work together on a project. */
export type OrganizationActiveUsersArgs = {
  filters?: InputMaybe<UserFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


/** An Organization is a group of users that can work together on a project. */
export type OrganizationUsersArgs = {
  filters?: InputMaybe<UserFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** A Paragraph of text */
export type ParagraphDescendant = Descendant & {
  __typename?: 'ParagraphDescendant';
  children?: Maybe<Array<Descendant>>;
  kind: DescendantKind;
  size?: Maybe<Scalars['String']['output']>;
  /** Unsafe children are not typed and fall back to json. This is a workaround if queries get too complex. */
  unsafeChildren?: Maybe<Array<Scalars['UnsafeChild']['output']>>;
};

/** Temporary Credentials for a file upload that can be used by a Client (e.g. in a python datalayer) */
export type PresignedPostCredentials = {
  __typename?: 'PresignedPostCredentials';
  bucket: Scalars['String']['output'];
  datalayer: Scalars['String']['output'];
  key: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  store: Scalars['String']['output'];
  xAmzAlgorithm: Scalars['String']['output'];
  xAmzCredential: Scalars['String']['output'];
  xAmzDate: Scalars['String']['output'];
  xAmzSignature: Scalars['String']['output'];
};

/**
 *
 * A Profile of a User. A Profile can be used to display personalied information about a user.
 *
 *
 */
export type Profile = {
  __typename?: 'Profile';
  /** The avatar of the user */
  avatar?: Maybe<MediaStore>;
  /** A short bio of the user */
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The name of the user */
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  app: App;
  apps: Array<App>;
  client: Client;
  clients: Array<Client>;
  comment: Comment;
  comments: Array<Comment>;
  commentsFor: Array<Comment>;
  group: Group;
  groups: Array<Group>;
  hallo: Scalars['String']['output'];
  layer: Layer;
  layers: Array<Layer>;
  me: User;
  message: SystemMessage;
  myActiveMessages: Array<SystemMessage>;
  myManagedClients: Client;
  myMentions: Array<Comment>;
  myStashes: Array<Stash>;
  mycontext: Context;
  mygroups: Array<Group>;
  redeemTokens: Array<RedeemToken>;
  release: Release;
  releases: Array<Release>;
  scopes: Array<Scope>;
  service: Service;
  serviceInstance: ServiceInstance;
  serviceInstances: Array<ServiceInstance>;
  services: Array<Service>;
  stash: Stash;
  stashItem: StashItem;
  stashItems: Array<StashItem>;
  stashes: Array<Stash>;
  user: User;
  users: Array<User>;
};


export type QueryAppArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  identifier?: InputMaybe<Scalars['AppIdentifier']['input']>;
};


export type QueryAppsArgs = {
  filters?: InputMaybe<AppFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryClientArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClientsArgs = {
  filters?: InputMaybe<ClientFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsForArgs = {
  identifier: Scalars['Identifier']['input'];
  object: Scalars['ID']['input'];
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupsArgs = {
  filters?: InputMaybe<GroupFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryLayerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLayersArgs = {
  filters?: InputMaybe<LayerFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMyManagedClientsArgs = {
  kind: ClientKind;
};


export type QueryRedeemTokensArgs = {
  filters?: InputMaybe<RedeemTokenFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryReleaseArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  identifier?: InputMaybe<Scalars['AppIdentifier']['input']>;
  version?: InputMaybe<Scalars['Version']['input']>;
};


export type QueryServiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceInstanceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceInstancesArgs = {
  filters?: InputMaybe<ServiceInstanceFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryStashArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStashItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStashItemsArgs = {
  filters?: InputMaybe<StashItemFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryStashesArgs = {
  filters?: InputMaybe<StashFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  filters?: InputMaybe<UserFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/**
 * A redeem token is a token that can be used to redeem the rights to create
 * a client. It is used to give the recipient the right to create a client.
 *
 * If the token is not redeemed within the expires_at time, it will be invalid.
 * If the token has been redeemed, but the manifest has changed, the token will be invalid.
 */
export type RedeemToken = {
  __typename?: 'RedeemToken';
  /** The client that this redeem token belongs to. */
  client?: Maybe<Client>;
  id: Scalars['ID']['output'];
  /** The token of the redeem token */
  token: Scalars['String']['output'];
  /** The user that this redeem token belongs to. */
  user: User;
};

/**
 * A redeem token is a token that can be used to redeem the rights to create
 * a client. It is used to give the recipient the right to create a client.
 *
 * If the token is not redeemed within the expires_at time, it will be invalid.
 * If the token has been redeemed, but the manifest has changed, the token will be invalid.
 */
export type RedeemTokenFilter = {
  AND?: InputMaybe<RedeemTokenFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<RedeemTokenFilter>;
  OR?: InputMaybe<RedeemTokenFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** A Release is a version of an app. Releases might change over time. E.g. a release might be updated to fix a bug, and the release might be updated to add a new feature. This is why they are the home for `scopes` and `requirements`, which might change over the release cycle. */
export type Release = {
  __typename?: 'Release';
  /** The app that this release belongs to. */
  app: App;
  /** The clients of the release */
  clients: Array<Client>;
  id: Scalars['ID']['output'];
  /** The logo of the release. This should be a url to a logo that can be used to represent the release. */
  logo?: Maybe<MediaStore>;
  /** The name of the release. This should be a string that identifies the release beyond the version number. E.g. `canary`. */
  name: Scalars['String']['output'];
  /** The requirements of the release. Requirements are used to limit the access of a client to a user's data. They represent app-level permissions. */
  requirements: Array<Scalars['String']['output']>;
  /** The scopes of the release. Scopes are used to limit the access of a client to a user's data. They represent app-level permissions. */
  scopes: Array<Scalars['String']['output']>;
  /** The version of the release. This should be a string that identifies the version of the release. We enforce semantic versioning notation. E.g. `0.1.0`. The version is unique per app. */
  version: Scalars['Version']['output'];
};


/** A Release is a version of an app. Releases might change over time. E.g. a release might be updated to fix a bug, and the release might be updated to add a new feature. This is why they are the home for `scopes` and `requirements`, which might change over the release cycle. */
export type ReleaseClientsArgs = {
  filters?: InputMaybe<ClientFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type RenderInput = {
  client: Scalars['ID']['input'];
  composition?: InputMaybe<Scalars['ID']['input']>;
  manifest?: InputMaybe<ManifestInput>;
  request?: InputMaybe<LinkingRequestInput>;
};

export type ReplyToCommentInput = {
  descendants: Array<DescendantInput>;
  notify?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
};

export type RequestMediaUploadInput = {
  datalayer: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type Requirement = {
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  optional?: Scalars['Boolean']['input'];
  service: Scalars['String']['input'];
};

export type ResolveCommentInput = {
  id: Scalars['ID']['input'];
  notify?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A Role is a set of permissions that can be assigned to a user. It is used to define what a user can do in the system. */
export type Role = {
  __typename?: 'Role';
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  organization: Organization;
};

/** __doc__ */
export type RoleFilter = {
  AND?: InputMaybe<RoleFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<RoleFilter>;
  OR?: InputMaybe<RoleFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<StrFilterLookup>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** A scope that can be assigned to a client. Scopes are used to limit the access of a client to a user's data. They represent app-level permissions. */
export type Scope = {
  __typename?: 'Scope';
  /** The description of the scope. This is a human readable description of the scope. */
  description: Scalars['String']['output'];
  /** The label of the scope. This is the human readable name of the scope. */
  label: Scalars['String']['output'];
  /** The value of the scope. This is the value that is used in the OAuth2 flow. */
  value: Scalars['String']['output'];
};

/** A Service is a Webservice that a Client might want to access. It is not the configured instance of the service, but the service itself. */
export type Service = {
  __typename?: 'Service';
  /** The description of the service. This should be a human readable description of the service. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The identifier of the service. This should be a globally unique string that identifies the service. We encourage you to use the reverse domain name notation. E.g. `com.example.myservice` */
  identifier: Scalars['ServiceIdentifier']['output'];
  /** The instances of the service. A service instance is a configured instance of a service. It will be configured by a configuration backend and will be used to send to the client as a configuration. It should never contain sensitive information. */
  instances: Array<ServiceInstance>;
  /** The logo of the app. This should be a url to a logo that can be used to represent the app. */
  logo?: Maybe<MediaStore>;
  /** The name of the service */
  name: Scalars['String']['output'];
};


/** A Service is a Webservice that a Client might want to access. It is not the configured instance of the service, but the service itself. */
export type ServiceInstancesArgs = {
  filters?: InputMaybe<ServiceInstanceFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** Service(id, name, identifier, logo, description) */
export type ServiceFilter = {
  AND?: InputMaybe<ServiceFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ServiceFilter>;
  OR?: InputMaybe<ServiceFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** A ServiceInstance is a configured instance of a Service. It will be configured by a configuration backend and will be used to send to the client as a configuration. It should never contain sensitive information. */
export type ServiceInstance = {
  __typename?: 'ServiceInstance';
  /** The aliases of the instance. An alias is a way to reach the instance. Clients can use these aliases to check if they can reach the instance. An alias can be an absolute alias (e.g. 'example.com') or a relative alias (e.g. 'example.com/path'). If the alias is relative, it will be relative to the layer's domain, port and path. */
  aliases: Array<InstanceAlias>;
  /** The groups that are allowed to use this instance. */
  allowedGroups: Array<Group>;
  /** The users that are allowed to use this instance. */
  allowedUsers: Array<User>;
  /** The groups that are denied to use this instance. */
  deniedGroups: Array<Group>;
  /** The users that are denied to use this instance. */
  deniedUsers: Array<User>;
  id: Scalars['ID']['output'];
  /** The identifier of the instance. This is a unique string that identifies the instance. It is used to identify the instance in the code and in the database. */
  identifier: Scalars['String']['output'];
  /** The logo of the app. This should be a url to a logo that can be used to represent the app. */
  logo?: Maybe<MediaStore>;
  /** The mappings of the composition. A mapping is a mapping of a service to a service instance. This is used to configure the composition. */
  mappings: Array<ServiceInstanceMapping>;
  /** The name of the instance. This is a human readable name of the instance. */
  name: Scalars['String']['output'];
  /** The service that this instance belongs to. */
  service: Service;
};


/** A ServiceInstance is a configured instance of a Service. It will be configured by a configuration backend and will be used to send to the client as a configuration. It should never contain sensitive information. */
export type ServiceInstanceAllowedGroupsArgs = {
  filters?: InputMaybe<GroupFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


/** A ServiceInstance is a configured instance of a Service. It will be configured by a configuration backend and will be used to send to the client as a configuration. It should never contain sensitive information. */
export type ServiceInstanceAllowedUsersArgs = {
  filters?: InputMaybe<UserFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


/** A ServiceInstance is a configured instance of a Service. It will be configured by a configuration backend and will be used to send to the client as a configuration. It should never contain sensitive information. */
export type ServiceInstanceDeniedGroupsArgs = {
  filters?: InputMaybe<GroupFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


/** A ServiceInstance is a configured instance of a Service. It will be configured by a configuration backend and will be used to send to the client as a configuration. It should never contain sensitive information. */
export type ServiceInstanceDeniedUsersArgs = {
  filters?: InputMaybe<UserFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** ServiceInstance(id, service, logo, identifier, steward, template) */
export type ServiceInstanceFilter = {
  AND?: InputMaybe<ServiceInstanceFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ServiceInstanceFilter>;
  OR?: InputMaybe<ServiceInstanceFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** A ServiceInstance is a configured instance of a Service. It will be configured by a configuration backend and will be used to send to the client as a configuration. It should never contain sensitive information. */
export type ServiceInstanceMapping = {
  __typename?: 'ServiceInstanceMapping';
  /** The client that this instance belongs to. */
  client: Client;
  id: Scalars['ID']['output'];
  /** The service that this instance belongs to. */
  instance: ServiceInstance;
  /** The key of the instance. This is a unique string that identifies the instance. It is used to identify the instance in the code and in the database. */
  key: Scalars['String']['output'];
  /** Is this mapping optional? If a mapping is optional, you can configure the client without this mapping. */
  optional: Scalars['Boolean']['output'];
};

/**
 *
 * A Stash
 *
 */
export type Stash = {
  __typename?: 'Stash';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  items: Array<StashItem>;
  name: Scalars['String']['output'];
  /** The number of items in the stash */
  owner: User;
  updatedAt: Scalars['DateTime']['output'];
};


/**
 *
 * A Stash
 *
 */
export type StashItemsArgs = {
  filters?: InputMaybe<StashItemFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** __doc__ */
export type StashFilter = {
  AND?: InputMaybe<StashFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<StashFilter>;
  OR?: InputMaybe<StashFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 *
 * A stashed item
 *
 */
export type StashItem = {
  __typename?: 'StashItem';
  addedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  object: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** StashItem(id, stash, identifier, object, added_by, added_at, updated_at) */
export type StashItemFilter = {
  AND?: InputMaybe<StashItemFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<StashItemFilter>;
  OR?: InputMaybe<StashItemFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  stashes?: InputMaybe<Array<Scalars['ID']['input']>>;
  username?: InputMaybe<StrFilterLookup>;
};

export type StashItemInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  object: Scalars['String']['input'];
};

export type StrFilterLookup = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  exact?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iContains?: InputMaybe<Scalars['String']['input']>;
  iEndsWith?: InputMaybe<Scalars['String']['input']>;
  iExact?: InputMaybe<Scalars['String']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['String']['input']>;
  inList?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  communications: Communication;
  mentions: Comment;
};


export type SubscriptionCommunicationsArgs = {
  channels: Array<Scalars['ID']['input']>;
};

/**
 *
 * A System Message is a message that is sent to a user.
 * It can be used to notify the user of important events or to request their attention.
 * System messages can use Rekuest Hooks as actions to allow the user to interact with the message.
 *
 *
 *
 */
export type SystemMessage = {
  __typename?: 'SystemMessage';
  /** The action to take (e.g. the node) */
  action: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  user: User;
};

export type UpdateGroupProfileInput = {
  avatar: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateProfileInput = {
  avatar: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateServiceInstanceInput = {
  allowedGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  allowedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  deniedGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  deniedUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
};

export type UpdateStashInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  stash: Scalars['ID']['input'];
};

/**
 *
 * A User is a person that can log in to the system. They are uniquely identified by their username.
 * And can have an email address associated with them (but don't have to).
 *
 * A user can be assigned to groups and has a profile that can be used to display information about them.
 * Detail information about a user can be found in the profile.
 *
 * All users can have social accounts associated with them. These are used to authenticate the user with external services,
 * such as ORCID or GitHub.
 *
 *
 */
export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups: Array<Group>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  managedClients: Array<DjangoModelType>;
  /** The memberships of the user in organizations */
  memberships: Array<Membership>;
  profile: Profile;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
};


/**
 *
 * A User is a person that can log in to the system. They are uniquely identified by their username.
 * And can have an email address associated with them (but don't have to).
 *
 * A user can be assigned to groups and has a profile that can be used to display information about them.
 * Detail information about a user can be found in the profile.
 *
 * All users can have social accounts associated with them. These are used to authenticate the user with external services,
 * such as ORCID or GitHub.
 *
 *
 */
export type UserGroupsArgs = {
  filters?: InputMaybe<GroupFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


/**
 *
 * A User is a person that can log in to the system. They are uniquely identified by their username.
 * And can have an email address associated with them (but don't have to).
 *
 * A user can be assigned to groups and has a profile that can be used to display information about them.
 * Detail information about a user can be found in the profile.
 *
 * All users can have social accounts associated with them. These are used to authenticate the user with external services,
 * such as ORCID or GitHub.
 *
 *
 */
export type UserMembershipsArgs = {
  filters?: InputMaybe<MembershipFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/**
 * A User of the System
 *
 * Lok Users are the main users of the system. They can be assigned to groups and have profiles, that can be used to display information about them.
 * Each user is identifier by a unique username, and can have an email address associated with them.
 */
export type UserFilter = {
  AND?: InputMaybe<UserFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<UserFilter>;
  OR?: InputMaybe<UserFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username?: InputMaybe<StrFilterLookup>;
};

export type InstanceAliasFragment = { __typename?: 'InstanceAlias', host?: string | null, port?: number | null, ssl: boolean, challenge: string, kind: string };

export type ListInstanceAliasFragment = { __typename?: 'InstanceAlias', host?: string | null, port?: number | null, ssl: boolean, challenge: string, kind: string };

export type DetailAppFragment = { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, releases: Array<{ __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } }> };

export type ListAppFragment = { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null };

export type DetailClientFragment = { __typename?: 'Client', id: string, token: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, oauth2Client: { __typename?: 'Oauth2Client', clientId: string }, mappings: Array<{ __typename?: 'ServiceInstanceMapping', id: string, key: string, optional: boolean, instance: { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }, client: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } }> };

export type ListClientFragment = { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } };

export type LeafFragment = { __typename?: 'LeafDescendant', bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null };

export type CommentUserFragment = { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type MentionFragment = { __typename?: 'MentionDescendant', user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null };

export type ParagraphFragment = { __typename?: 'ParagraphDescendant', size?: string | null };

type Descendant_LeafDescendant_Fragment = { __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null };

type Descendant_MentionDescendant_Fragment = { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null };

type Descendant_ParagraphDescendant_Fragment = { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null };

export type DescendantFragment = Descendant_LeafDescendant_Fragment | Descendant_MentionDescendant_Fragment | Descendant_ParagraphDescendant_Fragment;

export type SubthreadCommentFragment = { __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> };

export type ListCommentFragment = { __typename?: 'Comment', resolved: boolean, id: string, createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }> };

export type MentionCommentFragment = { __typename?: 'Comment', id: string, createdAt: any, resolved: boolean, object: string, identifier: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }>, mentions: Array<{ __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null };

export type DetailCommentFragment = { __typename?: 'Comment', id: string, resolved: boolean, createdAt: any, object: string, identifier: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }>, mentions: Array<{ __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }> };

export type ContextFragment = { __typename?: 'Context', roles: Array<string>, scope: Array<string>, organization: { __typename?: 'Organization', id: string, name: string, slug: string }, user: { __typename?: 'User', id: string, username: string } };

export type PresignedPostCredentialsFragment = { __typename?: 'PresignedPostCredentials', xAmzAlgorithm: string, xAmzCredential: string, xAmzDate: string, xAmzSignature: string, key: string, bucket: string, datalayer: string, policy: string, store: string };

export type DetailGroupFragment = { __typename?: 'Group', id: string, name: string, users: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, profile?: { __typename?: 'GroupProfile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null };

export type ListGroupFragment = { __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null };

export type GroupProfileFragment = { __typename?: 'GroupProfile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null };

export type LayerFragment = { __typename?: 'Layer', id: string, name: string, description?: string | null, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, instances: Array<{ __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }> };

export type ListLayerFragment = { __typename?: 'Layer', id: string, name: string, description?: string | null, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null };

export type OrganizationFragment = { __typename?: 'Organization', id: string, name: string, slug: string };

export type ProfileFragment = { __typename?: 'Profile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null };

export type ListRedeemTokenFragment = { __typename?: 'RedeemToken', id: string, token: string, user: { __typename?: 'User', id: string, email?: string | null }, client?: { __typename?: 'Client', id: string, release: { __typename?: 'Release', version: any, app: { __typename?: 'App', identifier: any } } } | null };

export type DetailReleaseFragment = { __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null }, clients: Array<{ __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } }> };

export type ListReleaseFragment = { __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type ListServiceFragment = { __typename?: 'Service', identifier: any, id: string, name: string, description?: string | null, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, instances: Array<{ __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }> };

export type ServiceFragment = { __typename?: 'Service', identifier: any, id: string, name: string, description?: string | null, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, instances: Array<{ __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }> };

export type ServiceInstanceFragment = { __typename?: 'ServiceInstance', identifier: string, id: string, service: { __typename?: 'Service', identifier: any, id: string, description?: string | null, name: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, allowedGroups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }>, deniedGroups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }>, mappings: Array<{ __typename?: 'ServiceInstanceMapping', id: string, key: string, optional: boolean, instance: { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }, client: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } }>, aliases: Array<{ __typename?: 'InstanceAlias', host?: string | null, port?: number | null, ssl: boolean, challenge: string, kind: string }>, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null };

export type ListServiceInstanceFragment = { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> };

export type ListServiceInstanceMappingFragment = { __typename?: 'ServiceInstanceMapping', id: string, key: string, optional: boolean, instance: { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }, client: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } };

export type StashFragment = { __typename?: 'Stash', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, owner: { __typename?: 'User', id: string, username: string } };

export type ListStashFragment = { __typename?: 'Stash', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, items: Array<{ __typename?: 'StashItem', id: string, identifier: string, object: string }>, owner: { __typename?: 'User', id: string, username: string } };

export type StashItemFragment = { __typename?: 'StashItem', id: string, identifier: string, object: string };

export type ListUserFragment = { __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string };

export type DetailUserFragment = { __typename?: 'User', id: string, username: string, email?: string | null, firstName?: string | null, lastName?: string | null, avatar?: string | null, groups: Array<{ __typename?: 'Group', id: string, name: string }>, profile: { __typename?: 'Profile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type MeUserFragment = { __typename?: 'User', id: string, username: string, email?: string | null, firstName?: string | null, lastName?: string | null, avatar?: string | null };

export type CreateClientMutationVariables = Exact<{
  identifier: Scalars['String']['input'];
  version: Scalars['String']['input'];
  scopes: Array<Scalars['String']['input']> | Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateClientMutation = { __typename?: 'Mutation', createDevelopmentalClient: { __typename?: 'Client', id: string } };

export type CreateCommentMutationVariables = Exact<{
  object: Scalars['ID']['input'];
  identifier: Scalars['Identifier']['input'];
  descendants: Array<DescendantInput> | DescendantInput;
  parent?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', resolved: boolean, id: string, createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }> } };

export type ReplyToMutationVariables = Exact<{
  descendants: Array<DescendantInput> | DescendantInput;
  parent: Scalars['ID']['input'];
}>;


export type ReplyToMutation = { __typename?: 'Mutation', replyTo: { __typename?: 'Comment', resolved: boolean, id: string, createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }> } };

export type ResolveCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ResolveCommentMutation = { __typename?: 'Mutation', resolveComment: { __typename?: 'Comment', resolved: boolean, id: string, createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }> } };

export type CreateGroupProfileMutationVariables = Exact<{
  input: CreateGroupProfileInput;
}>;


export type CreateGroupProfileMutation = { __typename?: 'Mutation', createGroupProfile: { __typename?: 'GroupProfile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type UpdateGroupProfileMutationVariables = Exact<{
  input: UpdateGroupProfileInput;
}>;


export type UpdateGroupProfileMutation = { __typename?: 'Mutation', updateGroupProfile: { __typename?: 'GroupProfile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type UpdateServiceInstanceMutationVariables = Exact<{
  input: UpdateServiceInstanceInput;
}>;


export type UpdateServiceInstanceMutation = { __typename?: 'Mutation', updateServiceInstance: { __typename?: 'ServiceInstance', identifier: string, id: string, service: { __typename?: 'Service', identifier: any, id: string, description?: string | null, name: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, allowedGroups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }>, deniedGroups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }>, mappings: Array<{ __typename?: 'ServiceInstanceMapping', id: string, key: string, optional: boolean, instance: { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }, client: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } }>, aliases: Array<{ __typename?: 'InstanceAlias', host?: string | null, port?: number | null, ssl: boolean, challenge: string, kind: string }>, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type CreateServiceInstanceMutationVariables = Exact<{
  input: CreateServiceInstanceInput;
}>;


export type CreateServiceInstanceMutation = { __typename?: 'Mutation', createServiceInstance: { __typename?: 'ServiceInstance', identifier: string, id: string, service: { __typename?: 'Service', identifier: any, id: string, description?: string | null, name: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, allowedGroups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }>, deniedGroups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }>, mappings: Array<{ __typename?: 'ServiceInstanceMapping', id: string, key: string, optional: boolean, instance: { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }, client: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } }>, aliases: Array<{ __typename?: 'InstanceAlias', host?: string | null, port?: number | null, ssl: boolean, challenge: string, kind: string }>, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type CreateUserProfileMutationVariables = Exact<{
  input: CreateProfileInput;
}>;


export type CreateUserProfileMutation = { __typename?: 'Mutation', createProfile: { __typename?: 'Profile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type UpdateUserProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'Profile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type CreateStashMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateStashMutation = { __typename?: 'Mutation', createStash: { __typename?: 'Stash', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, items: Array<{ __typename?: 'StashItem', id: string, identifier: string, object: string }>, owner: { __typename?: 'User', id: string, username: string } } };

export type AddItemsToStashMutationVariables = Exact<{
  stash: Scalars['ID']['input'];
  items: Array<StashItemInput> | StashItemInput;
}>;


export type AddItemsToStashMutation = { __typename?: 'Mutation', addItemsToStash: Array<{ __typename?: 'StashItem', id: string, identifier: string, object: string }> };

export type DeleteStashItemsMutationVariables = Exact<{
  items: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type DeleteStashItemsMutation = { __typename?: 'Mutation', deleteStashItems: Array<string> };

export type DeleteStashMutationVariables = Exact<{
  stash: Scalars['ID']['input'];
}>;


export type DeleteStashMutation = { __typename?: 'Mutation', deleteStash: string };

export type RequestMediaUploadMutationVariables = Exact<{
  key: Scalars['String']['input'];
  datalayer: Scalars['String']['input'];
}>;


export type RequestMediaUploadMutation = { __typename?: 'Mutation', requestMediaUpload: { __typename?: 'PresignedPostCredentials', xAmzAlgorithm: string, xAmzCredential: string, xAmzDate: string, xAmzSignature: string, key: string, bucket: string, datalayer: string, policy: string, store: string } };

export type AppsQueryVariables = Exact<{
  filters?: InputMaybe<AppFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type AppsQuery = { __typename?: 'Query', apps: Array<{ __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null }> };

export type AppQueryVariables = Exact<{
  identifier?: InputMaybe<Scalars['AppIdentifier']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type AppQuery = { __typename?: 'Query', app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, releases: Array<{ __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } }> } };

export type DetailAppQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DetailAppQuery = { __typename?: 'Query', app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, releases: Array<{ __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } }> } };

export type ClientsQueryVariables = Exact<{
  filters?: InputMaybe<ClientFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type ClientsQuery = { __typename?: 'Query', clients: Array<{ __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } }> };

export type DetailClientQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DetailClientQuery = { __typename?: 'Query', client: { __typename?: 'Client', id: string, token: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, oauth2Client: { __typename?: 'Oauth2Client', clientId: string }, mappings: Array<{ __typename?: 'ServiceInstanceMapping', id: string, key: string, optional: boolean, instance: { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }, client: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } }> } };

export type MyManagedClientsQueryVariables = Exact<{
  kind: ClientKind;
}>;


export type MyManagedClientsQuery = { __typename?: 'Query', myManagedClients: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } };

export type ClientQueryVariables = Exact<{
  clientId: Scalars['ID']['input'];
}>;


export type ClientQuery = { __typename?: 'Query', client: { __typename?: 'Client', id: string, token: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, oauth2Client: { __typename?: 'Oauth2Client', clientId: string }, mappings: Array<{ __typename?: 'ServiceInstanceMapping', id: string, key: string, optional: boolean, instance: { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }, client: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } }> } };

export type CommentsForQueryVariables = Exact<{
  object: Scalars['ID']['input'];
  identifier: Scalars['Identifier']['input'];
}>;


export type CommentsForQuery = { __typename?: 'Query', commentsFor: Array<{ __typename?: 'Comment', resolved: boolean, id: string, createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }> }> };

export type MyMentionsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyMentionsQuery = { __typename?: 'Query', myMentions: Array<{ __typename?: 'Comment', id: string, createdAt: any, resolved: boolean, object: string, identifier: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }>, mentions: Array<{ __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null }> };

export type DetailCommentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DetailCommentQuery = { __typename?: 'Query', comment: { __typename?: 'Comment', id: string, resolved: boolean, createdAt: any, object: string, identifier: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }>, mentions: Array<{ __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }> } };

export type MyContextQueryVariables = Exact<{ [key: string]: never; }>;


export type MyContextQuery = { __typename?: 'Query', mycontext: { __typename?: 'Context', roles: Array<string>, scope: Array<string>, organization: { __typename?: 'Organization', id: string, name: string, slug: string }, user: { __typename?: 'User', id: string, username: string } } };

export type GroupOptionsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type GroupOptionsQuery = { __typename?: 'Query', options: Array<{ __typename?: 'Group', value: string, label: string }> };

export type DetailGroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DetailGroupQuery = { __typename?: 'Query', group: { __typename?: 'Group', id: string, name: string, users: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, profile?: { __typename?: 'GroupProfile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null } };

export type GroupsQueryVariables = Exact<{
  filters?: InputMaybe<GroupFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GroupsQuery = { __typename?: 'Query', groups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }> };

export type LayersQueryVariables = Exact<{
  filters?: InputMaybe<LayerFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type LayersQuery = { __typename?: 'Query', layers: Array<{ __typename?: 'Layer', id: string, name: string, description?: string | null, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null }> };

export type DetailLayerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DetailLayerQuery = { __typename?: 'Query', layer: { __typename?: 'Layer', id: string, name: string, description?: string | null, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, instances: Array<{ __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }> } };

export type MyActiveMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyActiveMessagesQuery = { __typename?: 'Query', myActiveMessages: Array<{ __typename?: 'SystemMessage', id: string, title: string, message: string, action: string }> };

export type RedeemTokensQueryVariables = Exact<{
  filters?: InputMaybe<RedeemTokenFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type RedeemTokensQuery = { __typename?: 'Query', redeemTokens: Array<{ __typename?: 'RedeemToken', id: string, token: string, user: { __typename?: 'User', id: string, email?: string | null }, client?: { __typename?: 'Client', id: string, release: { __typename?: 'Release', version: any, app: { __typename?: 'App', identifier: any } } } | null }> };

export type ReleasesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReleasesQuery = { __typename?: 'Query', releases: Array<{ __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } }> };

export type ReleaseQueryVariables = Exact<{
  identifier?: InputMaybe<Scalars['AppIdentifier']['input']>;
  version?: InputMaybe<Scalars['Version']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ReleaseQuery = { __typename?: 'Query', release: { __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null }, clients: Array<{ __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } }> } };

export type DetailReleaseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DetailReleaseQuery = { __typename?: 'Query', release: { __typename?: 'Release', id: string, version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null }, clients: Array<{ __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } }> } };

export type ScopesQueryVariables = Exact<{ [key: string]: never; }>;


export type ScopesQuery = { __typename?: 'Query', scopes: Array<{ __typename?: 'Scope', description: string, value: string, label: string }> };

export type ScopesOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ScopesOptionsQuery = { __typename?: 'Query', options: Array<{ __typename?: 'Scope', value: string, label: string }> };

export type GlobalSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  noUsers: Scalars['Boolean']['input'];
  noGroups: Scalars['Boolean']['input'];
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GlobalSearchQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, groups?: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }> };

export type ListServiceInstancesQueryVariables = Exact<{
  pagination?: InputMaybe<OffsetPaginationInput>;
  filters?: InputMaybe<ServiceInstanceFilter>;
}>;


export type ListServiceInstancesQuery = { __typename?: 'Query', serviceInstances: Array<{ __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }> };

export type GetServiceInstanceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetServiceInstanceQuery = { __typename?: 'Query', serviceInstance: { __typename?: 'ServiceInstance', identifier: string, id: string, service: { __typename?: 'Service', identifier: any, id: string, description?: string | null, name: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, allowedGroups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }>, deniedGroups: Array<{ __typename?: 'Group', id: string, name: string, profile?: { __typename?: 'GroupProfile', id: string, bio?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } | null }>, mappings: Array<{ __typename?: 'ServiceInstanceMapping', id: string, key: string, optional: boolean, instance: { __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }, client: { __typename?: 'Client', id: string, name: string, kind: ClientKind, user?: { __typename?: 'User', id: string, username: string } | null, release: { __typename?: 'Release', version: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, app: { __typename?: 'App', id: string, identifier: any, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } } } }>, aliases: Array<{ __typename?: 'InstanceAlias', host?: string | null, port?: number | null, ssl: boolean, challenge: string, kind: string }>, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null } };

export type ListServicesQueryVariables = Exact<{
  pagination?: InputMaybe<OffsetPaginationInput>;
  filters?: InputMaybe<ServiceFilter>;
}>;


export type ListServicesQuery = { __typename?: 'Query', services: Array<{ __typename?: 'Service', identifier: any, id: string, name: string, description?: string | null, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, instances: Array<{ __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }> }> };

export type GetServiceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetServiceQuery = { __typename?: 'Query', service: { __typename?: 'Service', identifier: any, id: string, name: string, description?: string | null, logo?: { __typename?: 'MediaStore', presignedUrl: string } | null, instances: Array<{ __typename?: 'ServiceInstance', id: string, identifier: string, service: { __typename?: 'Service', id: string }, allowedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }>, deniedUsers: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> }> } };

export type MyStashesQueryVariables = Exact<{
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type MyStashesQuery = { __typename?: 'Query', stashes: Array<{ __typename?: 'Stash', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, items: Array<{ __typename?: 'StashItem', id: string, identifier: string, object: string }>, owner: { __typename?: 'User', id: string, username: string } }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, email?: string | null, firstName?: string | null, lastName?: string | null, avatar?: string | null, groups: Array<{ __typename?: 'Group', id: string, name: string }>, profile: { __typename?: 'Profile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } };

export type UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, email?: string | null, firstName?: string | null, lastName?: string | null, avatar?: string | null, groups: Array<{ __typename?: 'Group', id: string, name: string }>, profile: { __typename?: 'Profile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } };

export type DetailUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DetailUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, email?: string | null, firstName?: string | null, lastName?: string | null, avatar?: string | null, groups: Array<{ __typename?: 'Group', id: string, name: string }>, profile: { __typename?: 'Profile', id: string, name?: string | null, avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } };

export type UsersQueryVariables = Exact<{
  filters?: InputMaybe<UserFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username: string, firstName?: string | null, lastName?: string | null, email?: string | null, avatar?: string | null, id: string }> };

export type UserOptionsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type UserOptionsQuery = { __typename?: 'Query', options: Array<{ __typename?: 'User', value: string, label: string }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, email?: string | null, firstName?: string | null, lastName?: string | null, avatar?: string | null } };

export type WatchMentionsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type WatchMentionsSubscription = { __typename?: 'Subscription', mentions: { __typename?: 'Comment', id: string, createdAt: any, resolved: boolean, object: string, identifier: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }>, children: Array<{ __typename?: 'Comment', createdAt: any, user: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }, parent?: { __typename?: 'Comment', id: string } | null, descendants: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, size?: string | null, children?: Array<{ __typename?: 'LeafDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, bold?: boolean | null, italic?: boolean | null, code?: boolean | null, text?: string | null } | { __typename?: 'MentionDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, user?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } | { __typename?: 'ParagraphDescendant', kind: DescendantKind, unsafeChildren?: Array<any> | null, size?: string | null }> | null }> | null }> }>, mentions: Array<{ __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } }>, resolvedBy?: { __typename?: 'User', id: string, username: string, avatar?: string | null, profile: { __typename?: 'Profile', avatar?: { __typename?: 'MediaStore', presignedUrl: string } | null } } | null } };

export const InstanceAliasFragmentDoc = gql`
    fragment InstanceAlias on InstanceAlias {
  host
  port
  ssl
  challenge
  kind
}
    `;
export const ListAppFragmentDoc = gql`
    fragment ListApp on App {
  id
  identifier
  logo {
    presignedUrl
  }
}
    `;
export const ListReleaseFragmentDoc = gql`
    fragment ListRelease on Release {
  id
  version
  logo {
    presignedUrl
  }
  app {
    ...ListApp
  }
}
    ${ListAppFragmentDoc}`;
export const DetailAppFragmentDoc = gql`
    fragment DetailApp on App {
  id
  identifier
  logo {
    presignedUrl
  }
  releases {
    ...ListRelease
  }
}
    ${ListReleaseFragmentDoc}`;
export const ListUserFragmentDoc = gql`
    fragment ListUser on User {
  username
  firstName
  lastName
  email
  avatar
  id
}
    `;
export const ListServiceInstanceFragmentDoc = gql`
    fragment ListServiceInstance on ServiceInstance {
  id
  identifier
  service {
    id
  }
  allowedUsers {
    ...ListUser
  }
  deniedUsers {
    ...ListUser
  }
}
    ${ListUserFragmentDoc}`;
export const ListClientFragmentDoc = gql`
    fragment ListClient on Client {
  id
  user {
    id
    username
  }
  name
  kind
  release {
    version
    logo {
      presignedUrl
    }
    app {
      id
      identifier
      logo {
        presignedUrl
      }
    }
  }
}
    `;
export const ListServiceInstanceMappingFragmentDoc = gql`
    fragment ListServiceInstanceMapping on ServiceInstanceMapping {
  id
  key
  instance {
    ...ListServiceInstance
  }
  client {
    ...ListClient
  }
  optional
}
    ${ListServiceInstanceFragmentDoc}
${ListClientFragmentDoc}`;
export const DetailClientFragmentDoc = gql`
    fragment DetailClient on Client {
  id
  token
  name
  user {
    id
    username
  }
  kind
  release {
    ...ListRelease
  }
  logo {
    presignedUrl
  }
  oauth2Client {
    clientId
  }
  mappings {
    ...ListServiceInstanceMapping
  }
}
    ${ListReleaseFragmentDoc}
${ListServiceInstanceMappingFragmentDoc}`;
export const CommentUserFragmentDoc = gql`
    fragment CommentUser on User {
  id
  username
  avatar
  profile {
    avatar {
      presignedUrl
    }
  }
}
    `;
export const LeafFragmentDoc = gql`
    fragment Leaf on LeafDescendant {
  bold
  italic
  code
  text
}
    `;
export const MentionFragmentDoc = gql`
    fragment Mention on MentionDescendant {
  user {
    ...CommentUser
  }
}
    ${CommentUserFragmentDoc}`;
export const ParagraphFragmentDoc = gql`
    fragment Paragraph on ParagraphDescendant {
  size
}
    `;
export const DescendantFragmentDoc = gql`
    fragment Descendant on Descendant {
  kind
  children {
    kind
    children {
      kind
      unsafeChildren
      ...Leaf
      ...Mention
      ...Paragraph
    }
    ...Leaf
    ...Mention
    ...Paragraph
  }
  ...Mention
  ...Paragraph
  ...Leaf
}
    ${LeafFragmentDoc}
${MentionFragmentDoc}
${ParagraphFragmentDoc}`;
export const SubthreadCommentFragmentDoc = gql`
    fragment SubthreadComment on Comment {
  user {
    ...CommentUser
  }
  parent {
    id
  }
  createdAt
  descendants {
    ...Descendant
  }
}
    ${CommentUserFragmentDoc}
${DescendantFragmentDoc}`;
export const ListCommentFragmentDoc = gql`
    fragment ListComment on Comment {
  user {
    ...CommentUser
  }
  parent {
    id
  }
  descendants {
    ...Descendant
  }
  resolved
  resolvedBy {
    ...CommentUser
  }
  id
  createdAt
  children {
    ...SubthreadComment
  }
}
    ${CommentUserFragmentDoc}
${DescendantFragmentDoc}
${SubthreadCommentFragmentDoc}`;
export const MentionCommentFragmentDoc = gql`
    fragment MentionComment on Comment {
  user {
    ...CommentUser
  }
  parent {
    id
  }
  descendants {
    ...Descendant
  }
  id
  createdAt
  children {
    ...SubthreadComment
  }
  mentions {
    ...CommentUser
  }
  resolved
  resolvedBy {
    ...CommentUser
  }
  object
  identifier
}
    ${CommentUserFragmentDoc}
${DescendantFragmentDoc}
${SubthreadCommentFragmentDoc}`;
export const DetailCommentFragmentDoc = gql`
    fragment DetailComment on Comment {
  user {
    ...CommentUser
  }
  parent {
    id
  }
  descendants {
    ...Descendant
  }
  id
  resolved
  resolvedBy {
    ...CommentUser
  }
  createdAt
  children {
    ...SubthreadComment
  }
  mentions {
    ...CommentUser
  }
  object
  identifier
}
    ${CommentUserFragmentDoc}
${DescendantFragmentDoc}
${SubthreadCommentFragmentDoc}`;
export const ContextFragmentDoc = gql`
    fragment Context on Context {
  organization {
    id
    name
    slug
  }
  user {
    id
    username
  }
  roles
  scope
}
    `;
export const PresignedPostCredentialsFragmentDoc = gql`
    fragment PresignedPostCredentials on PresignedPostCredentials {
  xAmzAlgorithm
  xAmzCredential
  xAmzDate
  xAmzSignature
  key
  bucket
  datalayer
  policy
  store
}
    `;
export const GroupProfileFragmentDoc = gql`
    fragment GroupProfile on GroupProfile {
  id
  name
  avatar {
    presignedUrl
  }
}
    `;
export const DetailGroupFragmentDoc = gql`
    fragment DetailGroup on Group {
  id
  name
  users {
    ...ListUser
  }
  profile {
    ...GroupProfile
  }
}
    ${ListUserFragmentDoc}
${GroupProfileFragmentDoc}`;
export const LayerFragmentDoc = gql`
    fragment Layer on Layer {
  id
  name
  description
  logo {
    presignedUrl
  }
  instances {
    ...ListServiceInstance
  }
}
    ${ListServiceInstanceFragmentDoc}`;
export const ListLayerFragmentDoc = gql`
    fragment ListLayer on Layer {
  id
  name
  description
  logo {
    presignedUrl
  }
}
    `;
export const OrganizationFragmentDoc = gql`
    fragment Organization on Organization {
  id
  name
  slug
}
    `;
export const ListRedeemTokenFragmentDoc = gql`
    fragment ListRedeemToken on RedeemToken {
  id
  token
  user {
    id
    email
  }
  client {
    id
    release {
      version
      app {
        identifier
      }
    }
  }
}
    `;
export const DetailReleaseFragmentDoc = gql`
    fragment DetailRelease on Release {
  id
  version
  logo {
    presignedUrl
  }
  app {
    ...ListApp
  }
  clients {
    ...ListClient
  }
}
    ${ListAppFragmentDoc}
${ListClientFragmentDoc}`;
export const ListServiceFragmentDoc = gql`
    fragment ListService on Service {
  identifier
  id
  name
  logo {
    presignedUrl
  }
  description
  instances {
    ...ListServiceInstance
  }
}
    ${ListServiceInstanceFragmentDoc}`;
export const ServiceFragmentDoc = gql`
    fragment Service on Service {
  identifier
  id
  name
  logo {
    presignedUrl
  }
  description
  instances {
    ...ListServiceInstance
  }
}
    ${ListServiceInstanceFragmentDoc}`;
export const ListGroupFragmentDoc = gql`
    fragment ListGroup on Group {
  id
  name
  profile {
    id
    bio
    avatar {
      presignedUrl
    }
  }
}
    `;
export const ListInstanceAliasFragmentDoc = gql`
    fragment ListInstanceAlias on InstanceAlias {
  host
  port
  ssl
  challenge
  kind
}
    `;
export const ServiceInstanceFragmentDoc = gql`
    fragment ServiceInstance on ServiceInstance {
  identifier
  service {
    identifier
    id
    description
    name
  }
  id
  allowedUsers {
    ...ListUser
  }
  deniedUsers {
    ...ListUser
  }
  allowedGroups {
    ...ListGroup
  }
  deniedGroups {
    ...ListGroup
  }
  mappings {
    ...ListServiceInstanceMapping
  }
  aliases {
    ...ListInstanceAlias
  }
  logo {
    presignedUrl
  }
}
    ${ListUserFragmentDoc}
${ListGroupFragmentDoc}
${ListServiceInstanceMappingFragmentDoc}
${ListInstanceAliasFragmentDoc}`;
export const StashFragmentDoc = gql`
    fragment Stash on Stash {
  id
  name
  description
  createdAt
  updatedAt
  owner {
    id
    username
  }
}
    `;
export const StashItemFragmentDoc = gql`
    fragment StashItem on StashItem {
  id
  identifier
  object
}
    `;
export const ListStashFragmentDoc = gql`
    fragment ListStash on Stash {
  ...Stash
  items {
    ...StashItem
  }
}
    ${StashFragmentDoc}
${StashItemFragmentDoc}`;
export const ProfileFragmentDoc = gql`
    fragment Profile on Profile {
  id
  name
  avatar {
    presignedUrl
  }
}
    `;
export const DetailUserFragmentDoc = gql`
    fragment DetailUser on User {
  id
  username
  email
  firstName
  lastName
  avatar
  groups {
    id
    name
  }
  profile {
    ...Profile
  }
}
    ${ProfileFragmentDoc}`;
export const MeUserFragmentDoc = gql`
    fragment MeUser on User {
  id
  username
  email
  firstName
  lastName
  avatar
}
    `;
export const CreateClientDocument = gql`
    mutation CreateClient($identifier: String!, $version: String!, $scopes: [String!]!, $logo: String) {
  createDevelopmentalClient(
    input: {manifest: {identifier: $identifier, version: $version, scopes: $scopes, logo: $logo}}
  ) {
    id
  }
}
    `;
export type CreateClientMutationFn = Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      version: // value for 'version'
 *      scopes: // value for 'scopes'
 *      logo: // value for 'logo'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, options);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = Apollo.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($object: ID!, $identifier: Identifier!, $descendants: [DescendantInput!]!, $parent: ID) {
  createComment(
    input: {object: $object, identifier: $identifier, descendants: $descendants, parent: $parent}
  ) {
    ...ListComment
  }
}
    ${ListCommentFragmentDoc}`;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      object: // value for 'object'
 *      identifier: // value for 'identifier'
 *      descendants: // value for 'descendants'
 *      parent: // value for 'parent'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const ReplyToDocument = gql`
    mutation ReplyTo($descendants: [DescendantInput!]!, $parent: ID!) {
  replyTo(input: {descendants: $descendants, parent: $parent}) {
    ...ListComment
  }
}
    ${ListCommentFragmentDoc}`;
export type ReplyToMutationFn = Apollo.MutationFunction<ReplyToMutation, ReplyToMutationVariables>;

/**
 * __useReplyToMutation__
 *
 * To run a mutation, you first call `useReplyToMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReplyToMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [replyToMutation, { data, loading, error }] = useReplyToMutation({
 *   variables: {
 *      descendants: // value for 'descendants'
 *      parent: // value for 'parent'
 *   },
 * });
 */
export function useReplyToMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReplyToMutation, ReplyToMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReplyToMutation, ReplyToMutationVariables>(ReplyToDocument, options);
      }
export type ReplyToMutationHookResult = ReturnType<typeof useReplyToMutation>;
export type ReplyToMutationResult = Apollo.MutationResult<ReplyToMutation>;
export type ReplyToMutationOptions = Apollo.BaseMutationOptions<ReplyToMutation, ReplyToMutationVariables>;
export const ResolveCommentDocument = gql`
    mutation ResolveComment($id: ID!) {
  resolveComment(input: {id: $id}) {
    ...ListComment
  }
}
    ${ListCommentFragmentDoc}`;
export type ResolveCommentMutationFn = Apollo.MutationFunction<ResolveCommentMutation, ResolveCommentMutationVariables>;

/**
 * __useResolveCommentMutation__
 *
 * To run a mutation, you first call `useResolveCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResolveCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resolveCommentMutation, { data, loading, error }] = useResolveCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResolveCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResolveCommentMutation, ResolveCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResolveCommentMutation, ResolveCommentMutationVariables>(ResolveCommentDocument, options);
      }
export type ResolveCommentMutationHookResult = ReturnType<typeof useResolveCommentMutation>;
export type ResolveCommentMutationResult = Apollo.MutationResult<ResolveCommentMutation>;
export type ResolveCommentMutationOptions = Apollo.BaseMutationOptions<ResolveCommentMutation, ResolveCommentMutationVariables>;
export const CreateGroupProfileDocument = gql`
    mutation CreateGroupProfile($input: CreateGroupProfileInput!) {
  createGroupProfile(input: $input) {
    ...GroupProfile
  }
}
    ${GroupProfileFragmentDoc}`;
export type CreateGroupProfileMutationFn = Apollo.MutationFunction<CreateGroupProfileMutation, CreateGroupProfileMutationVariables>;

/**
 * __useCreateGroupProfileMutation__
 *
 * To run a mutation, you first call `useCreateGroupProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupProfileMutation, { data, loading, error }] = useCreateGroupProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGroupProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateGroupProfileMutation, CreateGroupProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateGroupProfileMutation, CreateGroupProfileMutationVariables>(CreateGroupProfileDocument, options);
      }
export type CreateGroupProfileMutationHookResult = ReturnType<typeof useCreateGroupProfileMutation>;
export type CreateGroupProfileMutationResult = Apollo.MutationResult<CreateGroupProfileMutation>;
export type CreateGroupProfileMutationOptions = Apollo.BaseMutationOptions<CreateGroupProfileMutation, CreateGroupProfileMutationVariables>;
export const UpdateGroupProfileDocument = gql`
    mutation UpdateGroupProfile($input: UpdateGroupProfileInput!) {
  updateGroupProfile(input: $input) {
    ...GroupProfile
  }
}
    ${GroupProfileFragmentDoc}`;
export type UpdateGroupProfileMutationFn = Apollo.MutationFunction<UpdateGroupProfileMutation, UpdateGroupProfileMutationVariables>;

/**
 * __useUpdateGroupProfileMutation__
 *
 * To run a mutation, you first call `useUpdateGroupProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupProfileMutation, { data, loading, error }] = useUpdateGroupProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGroupProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateGroupProfileMutation, UpdateGroupProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateGroupProfileMutation, UpdateGroupProfileMutationVariables>(UpdateGroupProfileDocument, options);
      }
export type UpdateGroupProfileMutationHookResult = ReturnType<typeof useUpdateGroupProfileMutation>;
export type UpdateGroupProfileMutationResult = Apollo.MutationResult<UpdateGroupProfileMutation>;
export type UpdateGroupProfileMutationOptions = Apollo.BaseMutationOptions<UpdateGroupProfileMutation, UpdateGroupProfileMutationVariables>;
export const UpdateServiceInstanceDocument = gql`
    mutation UpdateServiceInstance($input: UpdateServiceInstanceInput!) {
  updateServiceInstance(input: $input) {
    ...ServiceInstance
  }
}
    ${ServiceInstanceFragmentDoc}`;
export type UpdateServiceInstanceMutationFn = Apollo.MutationFunction<UpdateServiceInstanceMutation, UpdateServiceInstanceMutationVariables>;

/**
 * __useUpdateServiceInstanceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceInstanceMutation, { data, loading, error }] = useUpdateServiceInstanceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateServiceInstanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateServiceInstanceMutation, UpdateServiceInstanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateServiceInstanceMutation, UpdateServiceInstanceMutationVariables>(UpdateServiceInstanceDocument, options);
      }
export type UpdateServiceInstanceMutationHookResult = ReturnType<typeof useUpdateServiceInstanceMutation>;
export type UpdateServiceInstanceMutationResult = Apollo.MutationResult<UpdateServiceInstanceMutation>;
export type UpdateServiceInstanceMutationOptions = Apollo.BaseMutationOptions<UpdateServiceInstanceMutation, UpdateServiceInstanceMutationVariables>;
export const CreateServiceInstanceDocument = gql`
    mutation CreateServiceInstance($input: CreateServiceInstanceInput!) {
  createServiceInstance(input: $input) {
    ...ServiceInstance
  }
}
    ${ServiceInstanceFragmentDoc}`;
export type CreateServiceInstanceMutationFn = Apollo.MutationFunction<CreateServiceInstanceMutation, CreateServiceInstanceMutationVariables>;

/**
 * __useCreateServiceInstanceMutation__
 *
 * To run a mutation, you first call `useCreateServiceInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServiceInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServiceInstanceMutation, { data, loading, error }] = useCreateServiceInstanceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateServiceInstanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateServiceInstanceMutation, CreateServiceInstanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateServiceInstanceMutation, CreateServiceInstanceMutationVariables>(CreateServiceInstanceDocument, options);
      }
export type CreateServiceInstanceMutationHookResult = ReturnType<typeof useCreateServiceInstanceMutation>;
export type CreateServiceInstanceMutationResult = Apollo.MutationResult<CreateServiceInstanceMutation>;
export type CreateServiceInstanceMutationOptions = Apollo.BaseMutationOptions<CreateServiceInstanceMutation, CreateServiceInstanceMutationVariables>;
export const CreateUserProfileDocument = gql`
    mutation CreateUserProfile($input: CreateProfileInput!) {
  createProfile(input: $input) {
    ...Profile
  }
}
    ${ProfileFragmentDoc}`;
export type CreateUserProfileMutationFn = Apollo.MutationFunction<CreateUserProfileMutation, CreateUserProfileMutationVariables>;

/**
 * __useCreateUserProfileMutation__
 *
 * To run a mutation, you first call `useCreateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserProfileMutation, { data, loading, error }] = useCreateUserProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserProfileMutation, CreateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserProfileMutation, CreateUserProfileMutationVariables>(CreateUserProfileDocument, options);
      }
export type CreateUserProfileMutationHookResult = ReturnType<typeof useCreateUserProfileMutation>;
export type CreateUserProfileMutationResult = Apollo.MutationResult<CreateUserProfileMutation>;
export type CreateUserProfileMutationOptions = Apollo.BaseMutationOptions<CreateUserProfileMutation, CreateUserProfileMutationVariables>;
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
    ...Profile
  }
}
    ${ProfileFragmentDoc}`;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const CreateStashDocument = gql`
    mutation CreateStash($name: String, $description: String = "") {
  createStash(input: {name: $name, description: $description}) {
    ...ListStash
  }
}
    ${ListStashFragmentDoc}`;
export type CreateStashMutationFn = Apollo.MutationFunction<CreateStashMutation, CreateStashMutationVariables>;

/**
 * __useCreateStashMutation__
 *
 * To run a mutation, you first call `useCreateStashMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStashMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStashMutation, { data, loading, error }] = useCreateStashMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateStashMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateStashMutation, CreateStashMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateStashMutation, CreateStashMutationVariables>(CreateStashDocument, options);
      }
export type CreateStashMutationHookResult = ReturnType<typeof useCreateStashMutation>;
export type CreateStashMutationResult = Apollo.MutationResult<CreateStashMutation>;
export type CreateStashMutationOptions = Apollo.BaseMutationOptions<CreateStashMutation, CreateStashMutationVariables>;
export const AddItemsToStashDocument = gql`
    mutation AddItemsToStash($stash: ID!, $items: [StashItemInput!]!) {
  addItemsToStash(input: {stash: $stash, items: $items}) {
    ...StashItem
  }
}
    ${StashItemFragmentDoc}`;
export type AddItemsToStashMutationFn = Apollo.MutationFunction<AddItemsToStashMutation, AddItemsToStashMutationVariables>;

/**
 * __useAddItemsToStashMutation__
 *
 * To run a mutation, you first call `useAddItemsToStashMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemsToStashMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemsToStashMutation, { data, loading, error }] = useAddItemsToStashMutation({
 *   variables: {
 *      stash: // value for 'stash'
 *      items: // value for 'items'
 *   },
 * });
 */
export function useAddItemsToStashMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddItemsToStashMutation, AddItemsToStashMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AddItemsToStashMutation, AddItemsToStashMutationVariables>(AddItemsToStashDocument, options);
      }
export type AddItemsToStashMutationHookResult = ReturnType<typeof useAddItemsToStashMutation>;
export type AddItemsToStashMutationResult = Apollo.MutationResult<AddItemsToStashMutation>;
export type AddItemsToStashMutationOptions = Apollo.BaseMutationOptions<AddItemsToStashMutation, AddItemsToStashMutationVariables>;
export const DeleteStashItemsDocument = gql`
    mutation DeleteStashItems($items: [ID!]!) {
  deleteStashItems(input: {items: $items})
}
    `;
export type DeleteStashItemsMutationFn = Apollo.MutationFunction<DeleteStashItemsMutation, DeleteStashItemsMutationVariables>;

/**
 * __useDeleteStashItemsMutation__
 *
 * To run a mutation, you first call `useDeleteStashItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStashItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStashItemsMutation, { data, loading, error }] = useDeleteStashItemsMutation({
 *   variables: {
 *      items: // value for 'items'
 *   },
 * });
 */
export function useDeleteStashItemsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteStashItemsMutation, DeleteStashItemsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteStashItemsMutation, DeleteStashItemsMutationVariables>(DeleteStashItemsDocument, options);
      }
export type DeleteStashItemsMutationHookResult = ReturnType<typeof useDeleteStashItemsMutation>;
export type DeleteStashItemsMutationResult = Apollo.MutationResult<DeleteStashItemsMutation>;
export type DeleteStashItemsMutationOptions = Apollo.BaseMutationOptions<DeleteStashItemsMutation, DeleteStashItemsMutationVariables>;
export const DeleteStashDocument = gql`
    mutation DeleteStash($stash: ID!) {
  deleteStash(input: {stash: $stash})
}
    `;
export type DeleteStashMutationFn = Apollo.MutationFunction<DeleteStashMutation, DeleteStashMutationVariables>;

/**
 * __useDeleteStashMutation__
 *
 * To run a mutation, you first call `useDeleteStashMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStashMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStashMutation, { data, loading, error }] = useDeleteStashMutation({
 *   variables: {
 *      stash: // value for 'stash'
 *   },
 * });
 */
export function useDeleteStashMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteStashMutation, DeleteStashMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteStashMutation, DeleteStashMutationVariables>(DeleteStashDocument, options);
      }
export type DeleteStashMutationHookResult = ReturnType<typeof useDeleteStashMutation>;
export type DeleteStashMutationResult = Apollo.MutationResult<DeleteStashMutation>;
export type DeleteStashMutationOptions = Apollo.BaseMutationOptions<DeleteStashMutation, DeleteStashMutationVariables>;
export const RequestMediaUploadDocument = gql`
    mutation RequestMediaUpload($key: String!, $datalayer: String!) {
  requestMediaUpload(input: {key: $key, datalayer: $datalayer}) {
    ...PresignedPostCredentials
  }
}
    ${PresignedPostCredentialsFragmentDoc}`;
export type RequestMediaUploadMutationFn = Apollo.MutationFunction<RequestMediaUploadMutation, RequestMediaUploadMutationVariables>;

/**
 * __useRequestMediaUploadMutation__
 *
 * To run a mutation, you first call `useRequestMediaUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestMediaUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestMediaUploadMutation, { data, loading, error }] = useRequestMediaUploadMutation({
 *   variables: {
 *      key: // value for 'key'
 *      datalayer: // value for 'datalayer'
 *   },
 * });
 */
export function useRequestMediaUploadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestMediaUploadMutation, RequestMediaUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RequestMediaUploadMutation, RequestMediaUploadMutationVariables>(RequestMediaUploadDocument, options);
      }
export type RequestMediaUploadMutationHookResult = ReturnType<typeof useRequestMediaUploadMutation>;
export type RequestMediaUploadMutationResult = Apollo.MutationResult<RequestMediaUploadMutation>;
export type RequestMediaUploadMutationOptions = Apollo.BaseMutationOptions<RequestMediaUploadMutation, RequestMediaUploadMutationVariables>;
export const AppsDocument = gql`
    query Apps($filters: AppFilter, $pagination: OffsetPaginationInput) {
  apps(filters: $filters, pagination: $pagination) {
    ...ListApp
  }
}
    ${ListAppFragmentDoc}`;

/**
 * __useAppsQuery__
 *
 * To run a query within a React component, call `useAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAppsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AppsQuery, AppsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AppsQuery, AppsQueryVariables>(AppsDocument, options);
      }
export function useAppsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AppsQuery, AppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AppsQuery, AppsQueryVariables>(AppsDocument, options);
        }
export type AppsQueryHookResult = ReturnType<typeof useAppsQuery>;
export type AppsLazyQueryHookResult = ReturnType<typeof useAppsLazyQuery>;
export type AppsQueryResult = Apollo.QueryResult<AppsQuery, AppsQueryVariables>;
export const AppDocument = gql`
    query App($identifier: AppIdentifier, $id: ID, $clientId: ID) {
  app(identifier: $identifier, id: $id, clientId: $clientId) {
    ...DetailApp
  }
}
    ${DetailAppFragmentDoc}`;

/**
 * __useAppQuery__
 *
 * To run a query within a React component, call `useAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      id: // value for 'id'
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useAppQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AppQuery, AppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AppQuery, AppQueryVariables>(AppDocument, options);
      }
export function useAppLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AppQuery, AppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AppQuery, AppQueryVariables>(AppDocument, options);
        }
export type AppQueryHookResult = ReturnType<typeof useAppQuery>;
export type AppLazyQueryHookResult = ReturnType<typeof useAppLazyQuery>;
export type AppQueryResult = Apollo.QueryResult<AppQuery, AppQueryVariables>;
export const DetailAppDocument = gql`
    query DetailApp($id: ID!) {
  app(id: $id) {
    ...DetailApp
  }
}
    ${DetailAppFragmentDoc}`;

/**
 * __useDetailAppQuery__
 *
 * To run a query within a React component, call `useDetailAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailAppQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailAppQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DetailAppQuery, DetailAppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DetailAppQuery, DetailAppQueryVariables>(DetailAppDocument, options);
      }
export function useDetailAppLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DetailAppQuery, DetailAppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DetailAppQuery, DetailAppQueryVariables>(DetailAppDocument, options);
        }
export type DetailAppQueryHookResult = ReturnType<typeof useDetailAppQuery>;
export type DetailAppLazyQueryHookResult = ReturnType<typeof useDetailAppLazyQuery>;
export type DetailAppQueryResult = Apollo.QueryResult<DetailAppQuery, DetailAppQueryVariables>;
export const ClientsDocument = gql`
    query Clients($filters: ClientFilter, $pagination: OffsetPaginationInput) {
  clients(filters: $filters, pagination: $pagination) {
    ...ListClient
  }
}
    ${ListClientFragmentDoc}`;

/**
 * __useClientsQuery__
 *
 * To run a query within a React component, call `useClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useClientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClientsQuery, ClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, options);
      }
export function useClientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClientsQuery, ClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, options);
        }
export type ClientsQueryHookResult = ReturnType<typeof useClientsQuery>;
export type ClientsLazyQueryHookResult = ReturnType<typeof useClientsLazyQuery>;
export type ClientsQueryResult = Apollo.QueryResult<ClientsQuery, ClientsQueryVariables>;
export const DetailClientDocument = gql`
    query DetailClient($id: ID!) {
  client(id: $id) {
    ...DetailClient
  }
}
    ${DetailClientFragmentDoc}`;

/**
 * __useDetailClientQuery__
 *
 * To run a query within a React component, call `useDetailClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailClientQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailClientQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DetailClientQuery, DetailClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DetailClientQuery, DetailClientQueryVariables>(DetailClientDocument, options);
      }
export function useDetailClientLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DetailClientQuery, DetailClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DetailClientQuery, DetailClientQueryVariables>(DetailClientDocument, options);
        }
export type DetailClientQueryHookResult = ReturnType<typeof useDetailClientQuery>;
export type DetailClientLazyQueryHookResult = ReturnType<typeof useDetailClientLazyQuery>;
export type DetailClientQueryResult = Apollo.QueryResult<DetailClientQuery, DetailClientQueryVariables>;
export const MyManagedClientsDocument = gql`
    query MyManagedClients($kind: ClientKind!) {
  myManagedClients(kind: $kind) {
    ...ListClient
  }
}
    ${ListClientFragmentDoc}`;

/**
 * __useMyManagedClientsQuery__
 *
 * To run a query within a React component, call `useMyManagedClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyManagedClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyManagedClientsQuery({
 *   variables: {
 *      kind: // value for 'kind'
 *   },
 * });
 */
export function useMyManagedClientsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<MyManagedClientsQuery, MyManagedClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MyManagedClientsQuery, MyManagedClientsQueryVariables>(MyManagedClientsDocument, options);
      }
export function useMyManagedClientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyManagedClientsQuery, MyManagedClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MyManagedClientsQuery, MyManagedClientsQueryVariables>(MyManagedClientsDocument, options);
        }
export type MyManagedClientsQueryHookResult = ReturnType<typeof useMyManagedClientsQuery>;
export type MyManagedClientsLazyQueryHookResult = ReturnType<typeof useMyManagedClientsLazyQuery>;
export type MyManagedClientsQueryResult = Apollo.QueryResult<MyManagedClientsQuery, MyManagedClientsQueryVariables>;
export const ClientDocument = gql`
    query Client($clientId: ID!) {
  client(clientId: $clientId) {
    ...DetailClient
  }
}
    ${DetailClientFragmentDoc}`;

/**
 * __useClientQuery__
 *
 * To run a query within a React component, call `useClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useClientQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ClientQuery, ClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ClientQuery, ClientQueryVariables>(ClientDocument, options);
      }
export function useClientLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClientQuery, ClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ClientQuery, ClientQueryVariables>(ClientDocument, options);
        }
export type ClientQueryHookResult = ReturnType<typeof useClientQuery>;
export type ClientLazyQueryHookResult = ReturnType<typeof useClientLazyQuery>;
export type ClientQueryResult = Apollo.QueryResult<ClientQuery, ClientQueryVariables>;
export const CommentsForDocument = gql`
    query CommentsFor($object: ID!, $identifier: Identifier!) {
  commentsFor(identifier: $identifier, object: $object) {
    ...ListComment
  }
}
    ${ListCommentFragmentDoc}`;

/**
 * __useCommentsForQuery__
 *
 * To run a query within a React component, call `useCommentsForQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsForQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsForQuery({
 *   variables: {
 *      object: // value for 'object'
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useCommentsForQuery(baseOptions: ApolloReactHooks.QueryHookOptions<CommentsForQuery, CommentsForQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CommentsForQuery, CommentsForQueryVariables>(CommentsForDocument, options);
      }
export function useCommentsForLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommentsForQuery, CommentsForQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CommentsForQuery, CommentsForQueryVariables>(CommentsForDocument, options);
        }
export type CommentsForQueryHookResult = ReturnType<typeof useCommentsForQuery>;
export type CommentsForLazyQueryHookResult = ReturnType<typeof useCommentsForLazyQuery>;
export type CommentsForQueryResult = Apollo.QueryResult<CommentsForQuery, CommentsForQueryVariables>;
export const MyMentionsDocument = gql`
    query MyMentions {
  myMentions {
    ...MentionComment
  }
}
    ${MentionCommentFragmentDoc}`;

/**
 * __useMyMentionsQuery__
 *
 * To run a query within a React component, call `useMyMentionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyMentionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyMentionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyMentionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyMentionsQuery, MyMentionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MyMentionsQuery, MyMentionsQueryVariables>(MyMentionsDocument, options);
      }
export function useMyMentionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyMentionsQuery, MyMentionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MyMentionsQuery, MyMentionsQueryVariables>(MyMentionsDocument, options);
        }
export type MyMentionsQueryHookResult = ReturnType<typeof useMyMentionsQuery>;
export type MyMentionsLazyQueryHookResult = ReturnType<typeof useMyMentionsLazyQuery>;
export type MyMentionsQueryResult = Apollo.QueryResult<MyMentionsQuery, MyMentionsQueryVariables>;
export const DetailCommentDocument = gql`
    query DetailComment($id: ID!) {
  comment(id: $id) {
    ...DetailComment
  }
}
    ${DetailCommentFragmentDoc}`;

/**
 * __useDetailCommentQuery__
 *
 * To run a query within a React component, call `useDetailCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailCommentQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DetailCommentQuery, DetailCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DetailCommentQuery, DetailCommentQueryVariables>(DetailCommentDocument, options);
      }
export function useDetailCommentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DetailCommentQuery, DetailCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DetailCommentQuery, DetailCommentQueryVariables>(DetailCommentDocument, options);
        }
export type DetailCommentQueryHookResult = ReturnType<typeof useDetailCommentQuery>;
export type DetailCommentLazyQueryHookResult = ReturnType<typeof useDetailCommentLazyQuery>;
export type DetailCommentQueryResult = Apollo.QueryResult<DetailCommentQuery, DetailCommentQueryVariables>;
export const MyContextDocument = gql`
    query MyContext {
  mycontext {
    ...Context
  }
}
    ${ContextFragmentDoc}`;

/**
 * __useMyContextQuery__
 *
 * To run a query within a React component, call `useMyContextQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyContextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyContextQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyContextQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyContextQuery, MyContextQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MyContextQuery, MyContextQueryVariables>(MyContextDocument, options);
      }
export function useMyContextLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyContextQuery, MyContextQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MyContextQuery, MyContextQueryVariables>(MyContextDocument, options);
        }
export type MyContextQueryHookResult = ReturnType<typeof useMyContextQuery>;
export type MyContextLazyQueryHookResult = ReturnType<typeof useMyContextLazyQuery>;
export type MyContextQueryResult = Apollo.QueryResult<MyContextQuery, MyContextQueryVariables>;
export const GroupOptionsDocument = gql`
    query GroupOptions($search: String, $values: [ID!]) {
  options: groups(filters: {search: $search, ids: $values}) {
    value: id
    label: name
  }
}
    `;

/**
 * __useGroupOptionsQuery__
 *
 * To run a query within a React component, call `useGroupOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupOptionsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useGroupOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GroupOptionsQuery, GroupOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GroupOptionsQuery, GroupOptionsQueryVariables>(GroupOptionsDocument, options);
      }
export function useGroupOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GroupOptionsQuery, GroupOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GroupOptionsQuery, GroupOptionsQueryVariables>(GroupOptionsDocument, options);
        }
export type GroupOptionsQueryHookResult = ReturnType<typeof useGroupOptionsQuery>;
export type GroupOptionsLazyQueryHookResult = ReturnType<typeof useGroupOptionsLazyQuery>;
export type GroupOptionsQueryResult = Apollo.QueryResult<GroupOptionsQuery, GroupOptionsQueryVariables>;
export const DetailGroupDocument = gql`
    query DetailGroup($id: ID!) {
  group(id: $id) {
    ...DetailGroup
  }
}
    ${DetailGroupFragmentDoc}`;

/**
 * __useDetailGroupQuery__
 *
 * To run a query within a React component, call `useDetailGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailGroupQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DetailGroupQuery, DetailGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DetailGroupQuery, DetailGroupQueryVariables>(DetailGroupDocument, options);
      }
export function useDetailGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DetailGroupQuery, DetailGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DetailGroupQuery, DetailGroupQueryVariables>(DetailGroupDocument, options);
        }
export type DetailGroupQueryHookResult = ReturnType<typeof useDetailGroupQuery>;
export type DetailGroupLazyQueryHookResult = ReturnType<typeof useDetailGroupLazyQuery>;
export type DetailGroupQueryResult = Apollo.QueryResult<DetailGroupQuery, DetailGroupQueryVariables>;
export const GroupsDocument = gql`
    query Groups($filters: GroupFilter, $pagination: OffsetPaginationInput) {
  groups(filters: $filters, pagination: $pagination) {
    ...ListGroup
  }
}
    ${ListGroupFragmentDoc}`;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGroupsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
      }
export function useGroupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
        }
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsQueryResult = Apollo.QueryResult<GroupsQuery, GroupsQueryVariables>;
export const LayersDocument = gql`
    query Layers($filters: LayerFilter, $pagination: OffsetPaginationInput) {
  layers(filters: $filters, pagination: $pagination) {
    ...ListLayer
  }
}
    ${ListLayerFragmentDoc}`;

/**
 * __useLayersQuery__
 *
 * To run a query within a React component, call `useLayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useLayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLayersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useLayersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LayersQuery, LayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<LayersQuery, LayersQueryVariables>(LayersDocument, options);
      }
export function useLayersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LayersQuery, LayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<LayersQuery, LayersQueryVariables>(LayersDocument, options);
        }
export type LayersQueryHookResult = ReturnType<typeof useLayersQuery>;
export type LayersLazyQueryHookResult = ReturnType<typeof useLayersLazyQuery>;
export type LayersQueryResult = Apollo.QueryResult<LayersQuery, LayersQueryVariables>;
export const DetailLayerDocument = gql`
    query DetailLayer($id: ID!) {
  layer(id: $id) {
    ...Layer
  }
}
    ${LayerFragmentDoc}`;

/**
 * __useDetailLayerQuery__
 *
 * To run a query within a React component, call `useDetailLayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailLayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailLayerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailLayerQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DetailLayerQuery, DetailLayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DetailLayerQuery, DetailLayerQueryVariables>(DetailLayerDocument, options);
      }
export function useDetailLayerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DetailLayerQuery, DetailLayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DetailLayerQuery, DetailLayerQueryVariables>(DetailLayerDocument, options);
        }
export type DetailLayerQueryHookResult = ReturnType<typeof useDetailLayerQuery>;
export type DetailLayerLazyQueryHookResult = ReturnType<typeof useDetailLayerLazyQuery>;
export type DetailLayerQueryResult = Apollo.QueryResult<DetailLayerQuery, DetailLayerQueryVariables>;
export const MyActiveMessagesDocument = gql`
    query MyActiveMessages {
  myActiveMessages {
    id
    title
    message
    action
  }
}
    `;

/**
 * __useMyActiveMessagesQuery__
 *
 * To run a query within a React component, call `useMyActiveMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyActiveMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyActiveMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyActiveMessagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyActiveMessagesQuery, MyActiveMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MyActiveMessagesQuery, MyActiveMessagesQueryVariables>(MyActiveMessagesDocument, options);
      }
export function useMyActiveMessagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyActiveMessagesQuery, MyActiveMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MyActiveMessagesQuery, MyActiveMessagesQueryVariables>(MyActiveMessagesDocument, options);
        }
export type MyActiveMessagesQueryHookResult = ReturnType<typeof useMyActiveMessagesQuery>;
export type MyActiveMessagesLazyQueryHookResult = ReturnType<typeof useMyActiveMessagesLazyQuery>;
export type MyActiveMessagesQueryResult = Apollo.QueryResult<MyActiveMessagesQuery, MyActiveMessagesQueryVariables>;
export const RedeemTokensDocument = gql`
    query RedeemTokens($filters: RedeemTokenFilter, $pagination: OffsetPaginationInput) {
  redeemTokens(filters: $filters, pagination: $pagination) {
    ...ListRedeemToken
  }
}
    ${ListRedeemTokenFragmentDoc}`;

/**
 * __useRedeemTokensQuery__
 *
 * To run a query within a React component, call `useRedeemTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useRedeemTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRedeemTokensQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useRedeemTokensQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RedeemTokensQuery, RedeemTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RedeemTokensQuery, RedeemTokensQueryVariables>(RedeemTokensDocument, options);
      }
export function useRedeemTokensLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RedeemTokensQuery, RedeemTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RedeemTokensQuery, RedeemTokensQueryVariables>(RedeemTokensDocument, options);
        }
export type RedeemTokensQueryHookResult = ReturnType<typeof useRedeemTokensQuery>;
export type RedeemTokensLazyQueryHookResult = ReturnType<typeof useRedeemTokensLazyQuery>;
export type RedeemTokensQueryResult = Apollo.QueryResult<RedeemTokensQuery, RedeemTokensQueryVariables>;
export const ReleasesDocument = gql`
    query Releases {
  releases {
    ...ListRelease
  }
}
    ${ListReleaseFragmentDoc}`;

/**
 * __useReleasesQuery__
 *
 * To run a query within a React component, call `useReleasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReleasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReleasesQuery({
 *   variables: {
 *   },
 * });
 */
export function useReleasesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReleasesQuery, ReleasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ReleasesQuery, ReleasesQueryVariables>(ReleasesDocument, options);
      }
export function useReleasesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReleasesQuery, ReleasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ReleasesQuery, ReleasesQueryVariables>(ReleasesDocument, options);
        }
export type ReleasesQueryHookResult = ReturnType<typeof useReleasesQuery>;
export type ReleasesLazyQueryHookResult = ReturnType<typeof useReleasesLazyQuery>;
export type ReleasesQueryResult = Apollo.QueryResult<ReleasesQuery, ReleasesQueryVariables>;
export const ReleaseDocument = gql`
    query Release($identifier: AppIdentifier, $version: Version, $id: ID, $clientId: ID) {
  release(
    identifier: $identifier
    version: $version
    id: $id
    clientId: $clientId
  ) {
    ...DetailRelease
  }
}
    ${DetailReleaseFragmentDoc}`;

/**
 * __useReleaseQuery__
 *
 * To run a query within a React component, call `useReleaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useReleaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReleaseQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      version: // value for 'version'
 *      id: // value for 'id'
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useReleaseQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReleaseQuery, ReleaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ReleaseQuery, ReleaseQueryVariables>(ReleaseDocument, options);
      }
export function useReleaseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReleaseQuery, ReleaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ReleaseQuery, ReleaseQueryVariables>(ReleaseDocument, options);
        }
export type ReleaseQueryHookResult = ReturnType<typeof useReleaseQuery>;
export type ReleaseLazyQueryHookResult = ReturnType<typeof useReleaseLazyQuery>;
export type ReleaseQueryResult = Apollo.QueryResult<ReleaseQuery, ReleaseQueryVariables>;
export const DetailReleaseDocument = gql`
    query DetailRelease($id: ID!) {
  release(id: $id) {
    ...DetailRelease
  }
}
    ${DetailReleaseFragmentDoc}`;

/**
 * __useDetailReleaseQuery__
 *
 * To run a query within a React component, call `useDetailReleaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailReleaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailReleaseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailReleaseQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DetailReleaseQuery, DetailReleaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DetailReleaseQuery, DetailReleaseQueryVariables>(DetailReleaseDocument, options);
      }
export function useDetailReleaseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DetailReleaseQuery, DetailReleaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DetailReleaseQuery, DetailReleaseQueryVariables>(DetailReleaseDocument, options);
        }
export type DetailReleaseQueryHookResult = ReturnType<typeof useDetailReleaseQuery>;
export type DetailReleaseLazyQueryHookResult = ReturnType<typeof useDetailReleaseLazyQuery>;
export type DetailReleaseQueryResult = Apollo.QueryResult<DetailReleaseQuery, DetailReleaseQueryVariables>;
export const ScopesDocument = gql`
    query Scopes {
  scopes {
    description
    value
    label
  }
}
    `;

/**
 * __useScopesQuery__
 *
 * To run a query within a React component, call `useScopesQuery` and pass it any options that fit your needs.
 * When your component renders, `useScopesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScopesQuery({
 *   variables: {
 *   },
 * });
 */
export function useScopesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ScopesQuery, ScopesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ScopesQuery, ScopesQueryVariables>(ScopesDocument, options);
      }
export function useScopesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ScopesQuery, ScopesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ScopesQuery, ScopesQueryVariables>(ScopesDocument, options);
        }
export type ScopesQueryHookResult = ReturnType<typeof useScopesQuery>;
export type ScopesLazyQueryHookResult = ReturnType<typeof useScopesLazyQuery>;
export type ScopesQueryResult = Apollo.QueryResult<ScopesQuery, ScopesQueryVariables>;
export const ScopesOptionsDocument = gql`
    query ScopesOptions {
  options: scopes {
    value
    label
  }
}
    `;

/**
 * __useScopesOptionsQuery__
 *
 * To run a query within a React component, call `useScopesOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useScopesOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScopesOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useScopesOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ScopesOptionsQuery, ScopesOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ScopesOptionsQuery, ScopesOptionsQueryVariables>(ScopesOptionsDocument, options);
      }
export function useScopesOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ScopesOptionsQuery, ScopesOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ScopesOptionsQuery, ScopesOptionsQueryVariables>(ScopesOptionsDocument, options);
        }
export type ScopesOptionsQueryHookResult = ReturnType<typeof useScopesOptionsQuery>;
export type ScopesOptionsLazyQueryHookResult = ReturnType<typeof useScopesOptionsLazyQuery>;
export type ScopesOptionsQueryResult = Apollo.QueryResult<ScopesOptionsQuery, ScopesOptionsQueryVariables>;
export const GlobalSearchDocument = gql`
    query GlobalSearch($search: String, $noUsers: Boolean!, $noGroups: Boolean!, $pagination: OffsetPaginationInput) {
  users: users(filters: {search: $search}, pagination: $pagination) @skip(if: $noUsers) {
    ...ListUser
  }
  groups: groups(filters: {search: $search}, pagination: $pagination) @skip(if: $noGroups) {
    ...ListGroup
  }
}
    ${ListUserFragmentDoc}
${ListGroupFragmentDoc}`;

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
 *      noUsers: // value for 'noUsers'
 *      noGroups: // value for 'noGroups'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGlobalSearchQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GlobalSearchQuery, GlobalSearchQueryVariables>) {
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
export const ListServiceInstancesDocument = gql`
    query ListServiceInstances($pagination: OffsetPaginationInput, $filters: ServiceInstanceFilter) {
  serviceInstances(pagination: $pagination, filters: $filters) {
    ...ListServiceInstance
  }
}
    ${ListServiceInstanceFragmentDoc}`;

/**
 * __useListServiceInstancesQuery__
 *
 * To run a query within a React component, call `useListServiceInstancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListServiceInstancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListServiceInstancesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useListServiceInstancesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListServiceInstancesQuery, ListServiceInstancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListServiceInstancesQuery, ListServiceInstancesQueryVariables>(ListServiceInstancesDocument, options);
      }
export function useListServiceInstancesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListServiceInstancesQuery, ListServiceInstancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListServiceInstancesQuery, ListServiceInstancesQueryVariables>(ListServiceInstancesDocument, options);
        }
export type ListServiceInstancesQueryHookResult = ReturnType<typeof useListServiceInstancesQuery>;
export type ListServiceInstancesLazyQueryHookResult = ReturnType<typeof useListServiceInstancesLazyQuery>;
export type ListServiceInstancesQueryResult = Apollo.QueryResult<ListServiceInstancesQuery, ListServiceInstancesQueryVariables>;
export const GetServiceInstanceDocument = gql`
    query GetServiceInstance($id: ID!) {
  serviceInstance(id: $id) {
    ...ServiceInstance
  }
}
    ${ServiceInstanceFragmentDoc}`;

/**
 * __useGetServiceInstanceQuery__
 *
 * To run a query within a React component, call `useGetServiceInstanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceInstanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceInstanceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetServiceInstanceQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetServiceInstanceQuery, GetServiceInstanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetServiceInstanceQuery, GetServiceInstanceQueryVariables>(GetServiceInstanceDocument, options);
      }
export function useGetServiceInstanceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetServiceInstanceQuery, GetServiceInstanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetServiceInstanceQuery, GetServiceInstanceQueryVariables>(GetServiceInstanceDocument, options);
        }
export type GetServiceInstanceQueryHookResult = ReturnType<typeof useGetServiceInstanceQuery>;
export type GetServiceInstanceLazyQueryHookResult = ReturnType<typeof useGetServiceInstanceLazyQuery>;
export type GetServiceInstanceQueryResult = Apollo.QueryResult<GetServiceInstanceQuery, GetServiceInstanceQueryVariables>;
export const ListServicesDocument = gql`
    query ListServices($pagination: OffsetPaginationInput, $filters: ServiceFilter) {
  services(pagination: $pagination, filters: $filters) {
    ...ListService
  }
}
    ${ListServiceFragmentDoc}`;

/**
 * __useListServicesQuery__
 *
 * To run a query within a React component, call `useListServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListServicesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useListServicesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListServicesQuery, ListServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListServicesQuery, ListServicesQueryVariables>(ListServicesDocument, options);
      }
export function useListServicesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListServicesQuery, ListServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListServicesQuery, ListServicesQueryVariables>(ListServicesDocument, options);
        }
export type ListServicesQueryHookResult = ReturnType<typeof useListServicesQuery>;
export type ListServicesLazyQueryHookResult = ReturnType<typeof useListServicesLazyQuery>;
export type ListServicesQueryResult = Apollo.QueryResult<ListServicesQuery, ListServicesQueryVariables>;
export const GetServiceDocument = gql`
    query GetService($id: ID!) {
  service(id: $id) {
    ...Service
  }
}
    ${ServiceFragmentDoc}`;

/**
 * __useGetServiceQuery__
 *
 * To run a query within a React component, call `useGetServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetServiceQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetServiceQuery, GetServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetServiceQuery, GetServiceQueryVariables>(GetServiceDocument, options);
      }
export function useGetServiceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetServiceQuery, GetServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetServiceQuery, GetServiceQueryVariables>(GetServiceDocument, options);
        }
export type GetServiceQueryHookResult = ReturnType<typeof useGetServiceQuery>;
export type GetServiceLazyQueryHookResult = ReturnType<typeof useGetServiceLazyQuery>;
export type GetServiceQueryResult = Apollo.QueryResult<GetServiceQuery, GetServiceQueryVariables>;
export const MyStashesDocument = gql`
    query MyStashes($pagination: OffsetPaginationInput) {
  stashes(pagination: $pagination) {
    ...ListStash
  }
}
    ${ListStashFragmentDoc}`;

/**
 * __useMyStashesQuery__
 *
 * To run a query within a React component, call `useMyStashesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyStashesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyStashesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useMyStashesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyStashesQuery, MyStashesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MyStashesQuery, MyStashesQueryVariables>(MyStashesDocument, options);
      }
export function useMyStashesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyStashesQuery, MyStashesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MyStashesQuery, MyStashesQueryVariables>(MyStashesDocument, options);
        }
export type MyStashesQueryHookResult = ReturnType<typeof useMyStashesQuery>;
export type MyStashesLazyQueryHookResult = ReturnType<typeof useMyStashesLazyQuery>;
export type MyStashesQueryResult = Apollo.QueryResult<MyStashesQuery, MyStashesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...DetailUser
  }
}
    ${DetailUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!) {
  user(id: $id) {
    ...DetailUser
  }
}
    ${DetailUserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const DetailUserDocument = gql`
    query DetailUser($id: ID!) {
  user(id: $id) {
    ...DetailUser
  }
}
    ${DetailUserFragmentDoc}`;

/**
 * __useDetailUserQuery__
 *
 * To run a query within a React component, call `useDetailUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DetailUserQuery, DetailUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DetailUserQuery, DetailUserQueryVariables>(DetailUserDocument, options);
      }
export function useDetailUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DetailUserQuery, DetailUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DetailUserQuery, DetailUserQueryVariables>(DetailUserDocument, options);
        }
export type DetailUserQueryHookResult = ReturnType<typeof useDetailUserQuery>;
export type DetailUserLazyQueryHookResult = ReturnType<typeof useDetailUserLazyQuery>;
export type DetailUserQueryResult = Apollo.QueryResult<DetailUserQuery, DetailUserQueryVariables>;
export const UsersDocument = gql`
    query Users($filters: UserFilter, $pagination: OffsetPaginationInput) {
  users(filters: $filters, pagination: $pagination) {
    ...ListUser
  }
}
    ${ListUserFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserOptionsDocument = gql`
    query UserOptions($search: String, $values: [ID!]) {
  options: users(filters: {search: $search, ids: $values}) {
    value: id
    label: username
  }
}
    `;

/**
 * __useUserOptionsQuery__
 *
 * To run a query within a React component, call `useUserOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserOptionsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUserOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserOptionsQuery, UserOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UserOptionsQuery, UserOptionsQueryVariables>(UserOptionsDocument, options);
      }
export function useUserOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserOptionsQuery, UserOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UserOptionsQuery, UserOptionsQueryVariables>(UserOptionsDocument, options);
        }
export type UserOptionsQueryHookResult = ReturnType<typeof useUserOptionsQuery>;
export type UserOptionsLazyQueryHookResult = ReturnType<typeof useUserOptionsLazyQuery>;
export type UserOptionsQueryResult = Apollo.QueryResult<UserOptionsQuery, UserOptionsQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  me {
    ...MeUser
  }
}
    ${MeUserFragmentDoc}`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const WatchMentionsDocument = gql`
    subscription WatchMentions {
  mentions {
    ...MentionComment
  }
}
    ${MentionCommentFragmentDoc}`;

/**
 * __useWatchMentionsSubscription__
 *
 * To run a query within a React component, call `useWatchMentionsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchMentionsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchMentionsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useWatchMentionsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<WatchMentionsSubscription, WatchMentionsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<WatchMentionsSubscription, WatchMentionsSubscriptionVariables>(WatchMentionsDocument, options);
      }
export type WatchMentionsSubscriptionHookResult = ReturnType<typeof useWatchMentionsSubscription>;
export type WatchMentionsSubscriptionResult = Apollo.SubscriptionResult<WatchMentionsSubscription>;