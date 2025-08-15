import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@site/src/lib/mikro/funcs';
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
  Any: { input: any; output: any; }
  ArrayLike: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FileLike: { input: any; output: any; }
  FiveDVector: { input: any; output: any; }
  FourByFourMatrix: { input: any; output: any; }
  ImageFileLike: { input: any; output: any; }
  JSON: { input: any; output: any; }
  MeshLike: { input: any; output: any; }
  MetricMap: { input: any; output: any; }
  Micrometers: { input: any; output: any; }
  Milliseconds: { input: any; output: any; }
  ParquetLike: { input: any; output: any; }
  ThreeDVector: { input: any; output: any; }
  _Any: { input: any; output: any; }
};

/** Temporary Credentials for a file download that can be used by a Client (e.g. in a python datalayer) */
export type AccessCredentials = {
  __typename?: 'AccessCredentials';
  accessKey: Scalars['String']['output'];
  bucket: Scalars['String']['output'];
  key: Scalars['String']['output'];
  path: Scalars['String']['output'];
  secretKey: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
};

export type Accessor = {
  id: Scalars['ID']['output'];
  keys: Array<Scalars['String']['output']>;
  maxIndex?: Maybe<Scalars['Int']['output']>;
  minIndex?: Maybe<Scalars['Int']['output']>;
  table: Table;
};

export type AccessorFilter = {
  AND?: InputMaybe<AccessorFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<AccessorFilter>;
  OR?: InputMaybe<AccessorFilter>;
  keys?: InputMaybe<Scalars['JSON']['input']>;
};

export enum AccessorKind {
  Image = 'IMAGE',
  Label = 'LABEL'
}

export type AcquisitionView = View & {
  __typename?: 'AcquisitionView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  acquiredAt?: Maybe<Scalars['DateTime']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  operator?: Maybe<User>;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type AcquisitionViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type AffineTransformationView = View & {
  __typename?: 'AffineTransformationView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  affineMatrix: Scalars['FourByFourMatrix']['output'];
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  pixelSize: Scalars['ThreeDVector']['output'];
  pixelSizeX: Scalars['Micrometers']['output'];
  pixelSizeY: Scalars['Micrometers']['output'];
  position: Scalars['ThreeDVector']['output'];
  stage: Stage;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type AffineTransformationViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type AffineTransformationViewEvent = {
  __typename?: 'AffineTransformationViewEvent';
  create?: Maybe<AffineTransformationView>;
  delete?: Maybe<Scalars['ID']['output']>;
  update?: Maybe<AffineTransformationView>;
};

export type AffineTransformationViewFilter = {
  AND?: InputMaybe<AffineTransformationViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<AffineTransformationViewFilter>;
  OR?: InputMaybe<AffineTransformationViewFilter>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  pixelSize?: InputMaybe<FloatFilterLookup>;
  stage?: InputMaybe<StageFilter>;
};

export type AffineTransformationViewInput = {
  affineMatrix: Scalars['FourByFourMatrix']['input'];
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['ID']['input'];
  stage?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type AssignUserPermissionInput = {
  identifier: Scalars['String']['input'];
  object: Scalars['ID']['input'];
  permissions: Array<Scalars['String']['input']>;
  user: Scalars['ID']['input'];
};

export type AssociateInput = {
  other: Scalars['ID']['input'];
  selfs: Array<Scalars['ID']['input']>;
};

export type BigFileStore = {
  __typename?: 'BigFileStore';
  bucket: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  path: Scalars['String']['output'];
  presignedUrl: Scalars['String']['output'];
};

export enum Blending {
  Additive = 'ADDITIVE',
  Multiplicative = 'MULTIPLICATIVE'
}

export type Camera = {
  __typename?: 'Camera';
  bitDepth?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organization: DjangoModelType;
  pixelSizeX?: Maybe<Scalars['Micrometers']['output']>;
  pixelSizeY?: Maybe<Scalars['Micrometers']['output']>;
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
  sensorSizeX?: Maybe<Scalars['Int']['output']>;
  sensorSizeY?: Maybe<Scalars['Int']['output']>;
  serialNumber: Scalars['String']['output'];
  views: Array<OpticsView>;
};


export type CameraProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type CameraViewsArgs = {
  filters?: InputMaybe<OpticsViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type CameraFilter = {
  AND?: InputMaybe<CameraFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<CameraFilter>;
  OR?: InputMaybe<CameraFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CameraInput = {
  bitDepth?: InputMaybe<Scalars['Int']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pixelSizeX?: InputMaybe<Scalars['Micrometers']['input']>;
  pixelSizeY?: InputMaybe<Scalars['Micrometers']['input']>;
  sensorSizeX?: InputMaybe<Scalars['Int']['input']>;
  sensorSizeY?: InputMaybe<Scalars['Int']['input']>;
  serialNumber: Scalars['String']['input'];
};

export type ChangeDatasetInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
};

/** A channel descriptor */
export type ChannelInfo = {
  __typename?: 'ChannelInfo';
  index: Scalars['Int']['output'];
  label: Scalars['String']['output'];
};


/** A channel descriptor */
export type ChannelInfoLabelArgs = {
  withColorName?: Scalars['Boolean']['input'];
};

export type ChannelInfoFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ChannelView = View & {
  __typename?: 'ChannelView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  /** The acquisition mode of the channel */
  acquisitionMode?: Maybe<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  /** The emission wavelength of the channel in nanometers */
  emissionWavelength?: Maybe<Scalars['Float']['output']>;
  /** The excitation wavelength of the channel in nanometers */
  excitationWavelength?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  /** The name of the channel  */
  name?: Maybe<Scalars['String']['output']>;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type ChannelViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type ChannelViewInput = {
  /** The acquisition mode of the channel */
  acquisitionMode?: InputMaybe<Scalars['String']['input']>;
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** The emission wavelength of the channel in nanometers */
  emissionWavelength?: InputMaybe<Scalars['Float']['input']>;
  /** The excitation wavelength of the channel in nanometers */
  excitationWavelength?: InputMaybe<Scalars['Float']['input']>;
  /** The ID of the image this view is for */
  image: Scalars['ID']['input'];
  /** The name of the channel */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type ChildrenPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Client = {
  __typename?: 'Client';
  clientId: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum ColorFormat {
  Hsl = 'HSL',
  Rgb = 'RGB'
}

export enum ColorMap {
  Blue = 'BLUE',
  Green = 'GREEN',
  Inferno = 'INFERNO',
  Intensity = 'INTENSITY',
  Magma = 'MAGMA',
  Plasma = 'PLASMA',
  Red = 'RED',
  Viridis = 'VIRIDIS'
}

export enum ContinousScanDirection {
  ColumnRowSlice = 'COLUMN_ROW_SLICE',
  ColumnRowSliceSnake = 'COLUMN_ROW_SLICE_SNAKE',
  RowColumnSlice = 'ROW_COLUMN_SLICE',
  RowColumnSliceSnake = 'ROW_COLUMN_SLICE_SNAKE',
  SliceRowColumn = 'SLICE_ROW_COLUMN',
  SliceRowColumnSnake = 'SLICE_ROW_COLUMN_SNAKE'
}

export type ContinousScanView = View & {
  __typename?: 'ContinousScanView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  direction: ScanDirection;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type ContinousScanViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type ContinousScanViewFilter = {
  AND?: InputMaybe<ContinousScanViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ContinousScanViewFilter>;
  OR?: InputMaybe<ContinousScanViewFilter>;
  direction?: InputMaybe<ContinousScanDirection>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContinousScanViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  direction: ScanDirection;
  image: Scalars['ID']['input'];
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateDatasetInput = {
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateRgbContextInput = {
  c?: InputMaybe<Scalars['Int']['input']>;
  image: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  t?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  views?: InputMaybe<Array<PartialRgbViewInput>>;
  z?: InputMaybe<Scalars['Int']['input']>;
};

/** Temporary Credentials for a file upload that can be used by a Client (e.g. in a python datalayer) */
export type Credentials = {
  __typename?: 'Credentials';
  accessKey: Scalars['String']['output'];
  bucket: Scalars['String']['output'];
  datalayer: Scalars['String']['output'];
  key: Scalars['String']['output'];
  secretKey: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  status: Scalars['String']['output'];
  store: Scalars['String']['output'];
};

export type Dataset = {
  __typename?: 'Dataset';
  children: Array<Dataset>;
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  files: Array<File>;
  id: Scalars['ID']['output'];
  images: Array<Image>;
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Dataset>;
  pinned: Scalars['Boolean']['output'];
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
  tags: Array<Scalars['String']['output']>;
};


export type DatasetChildrenArgs = {
  filters?: InputMaybe<DatasetFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type DatasetFilesArgs = {
  filters?: InputMaybe<FileFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type DatasetImagesArgs = {
  filters?: InputMaybe<ImageFilter>;
  order?: InputMaybe<ImageOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type DatasetProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type DatasetChildrenFilter = {
  showChildren?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DatasetFilter = {
  AND?: InputMaybe<DatasetFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<DatasetFilter>;
  OR?: InputMaybe<DatasetFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<StrFilterLookup>;
  parentless?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type DatasetImageFile = Dataset | File | Image;

export type DeleteCameraInput = {
  id: Scalars['ID']['input'];
};

export type DeleteDatasetInput = {
  id: Scalars['ID']['input'];
};

export type DeleteEraInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFileInput = {
  id: Scalars['ID']['input'];
};

export type DeleteImageInput = {
  id: Scalars['ID']['input'];
};

export type DeleteInstrumentInput = {
  id: Scalars['ID']['input'];
};

export type DeleteMeshInput = {
  id: Scalars['ID']['input'];
};

export type DeleteMultiWellInput = {
  id: Scalars['ID']['input'];
};

export type DeleteObjectiveInput = {
  id: Scalars['ID']['input'];
};

export type DeleteRgbContextInput = {
  id: Scalars['ID']['input'];
};

export type DeleteRoiInput = {
  id: Scalars['ID']['input'];
};

export type DeleteSnaphotInput = {
  id: Scalars['ID']['input'];
};

export type DeleteStageInput = {
  id: Scalars['ID']['input'];
};

export type DeleteViewCollectionInput = {
  id: Scalars['ID']['input'];
};

export type DeleteViewInput = {
  id: Scalars['ID']['input'];
};

export type DerivedView = View & {
  __typename?: 'DerivedView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  operation?: Maybe<Scalars['String']['output']>;
  originImage: Image;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type DerivedViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type DesociateInput = {
  other: Scalars['ID']['input'];
  selfs: Array<Scalars['ID']['input']>;
};

export type DjangoModelType = {
  __typename?: 'DjangoModelType';
  pk: Scalars['ID']['output'];
};

export enum DuckDbDataType {
  /** Large integer for large numeric values */
  Bigint = 'BIGINT',
  /** Binary large object for storing binary data */
  Blob = 'BLOB',
  /** Represents a True/False value */
  Boolean = 'BOOLEAN',
  /** Specific date (year, month, day) */
  Date = 'DATE',
  /** Exact decimal number with defined precision and scale */
  Decimal = 'DECIMAL',
  /** Double-precision floating point number */
  Double = 'DOUBLE',
  /** Enumeration of predefined values */
  Enum = 'ENUM',
  /** Single-precision floating point number */
  Float = 'FLOAT',
  /** Extremely large integer for very large numeric ranges */
  Hugeint = 'HUGEINT',
  /** Standard integer (-2,147,483,648 to 2,147,483,647) */
  Integer = 'INTEGER',
  /** Span of time between two dates or times */
  Interval = 'INTERVAL',
  /** JSON object, a structured text format used for representing data */
  Json = 'JSON',
  /** A list of values of the same data type */
  List = 'LIST',
  /** A collection of key-value pairs where each key is unique */
  Map = 'MAP',
  /** Small integer (-32,768 to 32,767) */
  Smallint = 'SMALLINT',
  /** Composite type grouping several fields with different data types */
  Struct = 'STRUCT',
  /** Specific time of the day (hours, minutes, seconds) */
  Time = 'TIME',
  /** Date and time with precision */
  Timestamp = 'TIMESTAMP',
  /** Very small integer (-128 to 127) */
  Tinyint = 'TINYINT',
  /** Universally Unique Identifier used to uniquely identify objects */
  Uuid = 'UUID',
  /** Variable-length string (text) */
  Varchar = 'VARCHAR'
}

export type Era = {
  __typename?: 'Era';
  begin?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
  views: Array<TimepointView>;
};


export type EraProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type EraViewsArgs = {
  filters?: InputMaybe<TimepointViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type EraFilter = {
  AND?: InputMaybe<EraFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<EraFilter>;
  OR?: InputMaybe<EraFilter>;
  begin?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EraInput = {
  begin?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
};

export type Experiment = {
  __typename?: 'Experiment';
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
};


export type ExperimentProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type ExperimentFilter = {
  AND?: InputMaybe<ExperimentFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ExperimentFilter>;
  OR?: InputMaybe<ExperimentFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type File = {
  __typename?: 'File';
  /** The user who created this file */
  creator: User;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** The organization this file belongs to */
  organization: Organization;
  origins: Array<Image>;
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
  store: BigFileStore;
  views: Array<FileView>;
};


export type FileOriginsArgs = {
  filters?: InputMaybe<ImageFilter>;
  order?: InputMaybe<ImageOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type FileProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type FileEvent = {
  __typename?: 'FileEvent';
  create?: Maybe<File>;
  delete?: Maybe<Scalars['ID']['output']>;
  moved?: Maybe<File>;
  update?: Maybe<File>;
};

export type FileFilter = {
  AND?: InputMaybe<FileFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<FileFilter>;
  OR?: InputMaybe<FileFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<StrFilterLookup>;
  scope?: InputMaybe<ScopeKind>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FileView = View & {
  __typename?: 'FileView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  file: File;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  seriesIdentifier?: Maybe<Scalars['String']['output']>;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type FileViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type FileViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['ID']['input'];
  image: Scalars['ID']['input'];
  seriesIdentifier?: InputMaybe<Scalars['String']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type FloatFilterLookup = {
  contains?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  exact?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  iContains?: InputMaybe<Scalars['Float']['input']>;
  iEndsWith?: InputMaybe<Scalars['Float']['input']>;
  iExact?: InputMaybe<Scalars['Float']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['Float']['input']>;
  inList?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  range?: InputMaybe<Array<Scalars['Float']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

/** A channel descriptor */
export type FrameInfo = {
  __typename?: 'FrameInfo';
  label: Scalars['String']['output'];
};

/** Input type for creating an image from an array-like object */
export type FromArrayLikeInput = {
  /** Optional list of acquisition views */
  acquisitionViews?: InputMaybe<Array<PartialAcquisitionViewInput>>;
  /** The array-like object to create the image from */
  array: Scalars['ArrayLike']['input'];
  /** Optional list of channel views */
  channelViews?: InputMaybe<Array<PartialChannelViewInput>>;
  /** Optional dataset ID to associate the image with */
  dataset?: InputMaybe<Scalars['ID']['input']>;
  /** Optional list of derived views */
  derivedViews?: InputMaybe<Array<PartialDerivedViewInput>>;
  /** Optional list of file views */
  fileViews?: InputMaybe<Array<PartialFileViewInput>>;
  /** Optional list of instance mask views */
  instanceMaskViews?: InputMaybe<Array<PartialInstanceMaskViewInput>>;
  /** Optional list of mask views */
  maskViews?: InputMaybe<Array<PartialMaskViewInput>>;
  /** The name of the image */
  name: Scalars['String']['input'];
  /** Optional list of optics views */
  opticsViews?: InputMaybe<Array<PartialOpticsViewInput>>;
  /** Optional list of reference views */
  referenceViews?: InputMaybe<Array<PartialReferenceViewInput>>;
  /** Optional list of RGB views */
  rgbViews?: InputMaybe<Array<PartialRgbViewInput>>;
  /** Optional list of ROI views */
  roiViews?: InputMaybe<Array<PartialRoiViewInput>>;
  /** Optional list of scale views */
  scaleViews?: InputMaybe<Array<PartialScaleViewInput>>;
  /** Optional list of tags to associate with the image */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Optional list of timepoint views */
  timepointViews?: InputMaybe<Array<PartialTimepointViewInput>>;
  /** Optional list of affine transformation views */
  transformationViews?: InputMaybe<Array<PartialAffineTransformationViewInput>>;
};

export type FromFileLike = {
  dataset?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['FileLike']['input'];
  fileName: Scalars['String']['input'];
  origins?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type FromParquetLike = {
  /** The parquet dataframe to create the table from */
  dataframe: Scalars['ParquetLike']['input'];
  /** The dataset ID this table belongs to */
  dataset?: InputMaybe<Scalars['ID']['input']>;
  /** Image accessors to create for this table */
  imageAccessors?: InputMaybe<Array<PartialImageAccessorInput>>;
  /** Label accessors to create for this table */
  labelAccessors?: InputMaybe<Array<PartialLabelAccessorInput>>;
  /** The name of the table */
  name: Scalars['String']['input'];
  /** The IDs of tables this table was derived from */
  origins?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type HistogramView = View & {
  __typename?: 'HistogramView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  bins: Array<Scalars['Float']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  histogram: Array<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type HistogramViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type HistogramViewInput = {
  bins: Array<Scalars['Float']['input']>;
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  histogram: Array<Scalars['Float']['input']>;
  image: Scalars['ID']['input'];
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

/** The type of change that was made. */
export enum HistoryKind {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type Image = {
  __typename?: 'Image';
  /** The affine transformation views describing position and scale */
  affineTransformationViews: Array<AffineTransformationView>;
  /** Channel views relating to acquisition channels */
  channelViews: Array<ChannelView>;
  /** The channels of this image */
  channels: Array<ChannelInfo>;
  /** When this image was created */
  createdAt: Scalars['DateTime']['output'];
  /** Who created this image */
  creator?: Maybe<User>;
  /** The dataset this image belongs to */
  dataset?: Maybe<Dataset>;
  /** Views this image was derived from */
  derivedFromViews: Array<DerivedView>;
  /** Scale views derived from this image */
  derivedScaleViews: Array<ScaleView>;
  /** Views derived from this image */
  derivedViews: Array<DerivedView>;
  /** File views relating to source files */
  fileViews: Array<FileView>;
  /** The channels of this image */
  frames: Array<FrameInfo>;
  /** Histogram views describing pixel value distribution */
  histogramViews: Array<HistogramView>;
  id: Scalars['ID']['output'];
  /** Instance mask views relating other Arkitekt types to a subsection of the image */
  instanceMaskViews: Array<InstanceMaskView>;
  /** Label views mapping channels to labels */
  labelViews: Array<LabelView>;
  /** The latest snapshot of this image */
  latestSnapshot?: Maybe<Snapshot>;
  /** Structure views relating other Arkitekt types to a subsection of the image */
  maskViews: Array<MaskView>;
  /** The name of the image */
  name: Scalars['String']['output'];
  /** Optics views describing acquisition settings */
  opticsViews: Array<OpticsView>;
  /** Is this image pinned by the current user */
  pinned: Scalars['Boolean']['output'];
  /** The channels of this image */
  planes: Array<PlaneInfo>;
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
  /** Reference views describing relationships to other views */
  referenceViews: Array<ReferenceView>;
  renders: Array<Render>;
  /** RGB rendering contexts */
  rgbContexts: Array<RgbContext>;
  /** Region of interest views */
  roiViews: Array<RoiView>;
  rois: Array<Roi>;
  /** Scale views describing physical dimensions */
  scaleViews: Array<ScaleView>;
  /** Associated snapshots */
  snapshots: Array<Snapshot>;
  /** The store where the image data is stored. */
  store: ZarrStore;
  /** The tags of this image */
  tags: Array<Scalars['String']['output']>;
  /** Timepoint views describing temporal relationships */
  timepointViews: Array<TimepointView>;
  /** Associated videos */
  videos: Array<Video>;
  /** All views of this image */
  views: Array<View>;
};


export type ImageAffineTransformationViewsArgs = {
  filters?: InputMaybe<AffineTransformationViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageInstanceMaskViewsArgs = {
  filters?: InputMaybe<InstanceMaskViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageMaskViewsArgs = {
  filters?: InputMaybe<MaskViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageOpticsViewsArgs = {
  filters?: InputMaybe<OpticsViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageReferenceViewsArgs = {
  filters?: InputMaybe<ReferenceViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageRendersArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<RenderKind>>;
};


export type ImageRgbContextsArgs = {
  filters?: InputMaybe<RgbContextFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageRoisArgs = {
  filters?: InputMaybe<RoiFilter>;
};


export type ImageSnapshotsArgs = {
  filters?: InputMaybe<SnapshotFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageTimepointViewsArgs = {
  filters?: InputMaybe<TimepointViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageVideosArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ImageViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type ImageAccessor = Accessor & {
  __typename?: 'ImageAccessor';
  id: Scalars['ID']['output'];
  keys: Array<Scalars['String']['output']>;
  maxIndex?: Maybe<Scalars['Int']['output']>;
  minIndex?: Maybe<Scalars['Int']['output']>;
  table: Table;
};

export type ImageEvent = {
  __typename?: 'ImageEvent';
  create?: Maybe<Image>;
  delete?: Maybe<Scalars['ID']['output']>;
  update?: Maybe<Image>;
};

export type ImageFilter = {
  AND?: InputMaybe<ImageFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ImageFilter>;
  OR?: InputMaybe<ImageFilter>;
  dataset?: InputMaybe<DatasetFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<StrFilterLookup>;
  notDerived?: InputMaybe<Scalars['Boolean']['input']>;
  scope?: InputMaybe<ScopeFilter>;
  search?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<ZarrStoreFilter>;
  timepointViews?: InputMaybe<TimepointViewFilter>;
  transformationViews?: InputMaybe<AffineTransformationViewFilter>;
};

export type ImageOrder = {
  createdAt?: InputMaybe<Ordering>;
};

export type InstanceMaskView = View & {
  __typename?: 'InstanceMaskView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  operation?: Maybe<Scalars['String']['output']>;
  referenceView: ReferenceView;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type InstanceMaskViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type InstanceMaskViewFilter = {
  AND?: InputMaybe<InstanceMaskViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<InstanceMaskViewFilter>;
  OR?: InputMaybe<InstanceMaskViewFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InstanceMaskViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['ID']['input'];
  instanceLabels?: InputMaybe<Array<Scalars['ID']['input']>>;
  referenceView?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type Instrument = {
  __typename?: 'Instrument';
  id: Scalars['ID']['output'];
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organization: DjangoModelType;
  serialNumber: Scalars['String']['output'];
  views: Array<OpticsView>;
};


export type InstrumentViewsArgs = {
  filters?: InputMaybe<OpticsViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type InstrumentFilter = {
  AND?: InputMaybe<InstrumentFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<InstrumentFilter>;
  OR?: InputMaybe<InstrumentFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InstrumentInput = {
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serialNumber: Scalars['String']['input'];
};

export type IntFilterLookup = {
  contains?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  exact?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  iContains?: InputMaybe<Scalars['Int']['input']>;
  iEndsWith?: InputMaybe<Scalars['Int']['input']>;
  iExact?: InputMaybe<Scalars['Int']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['Int']['input']>;
  inList?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type LabelAccessor = Accessor & {
  __typename?: 'LabelAccessor';
  id: Scalars['ID']['output'];
  keys: Array<Scalars['String']['output']>;
  maskView: MaskView;
  maxIndex?: Maybe<Scalars['Int']['output']>;
  minIndex?: Maybe<Scalars['Int']['output']>;
  table: Table;
};

export type LabelView = View & {
  __typename?: 'LabelView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type LabelViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type LabelViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['ID']['input'];
  label: Scalars['String']['input'];
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type MaskView = View & {
  __typename?: 'MaskView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  referenceView: ReferenceView;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type MaskViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type MaskViewFilter = {
  AND?: InputMaybe<MaskViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<MaskViewFilter>;
  OR?: InputMaybe<MaskViewFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MaskViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['ID']['input'];
  labels?: InputMaybe<Array<Scalars['ID']['input']>>;
  referenceView?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type MaskedPixelInfo = {
  __typename?: 'MaskedPixelInfo';
  color: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type MediaStore = {
  __typename?: 'MediaStore';
  bucket: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  path: Scalars['String']['output'];
  presignedUrl: Scalars['String']['output'];
};


export type MediaStorePresignedUrlArgs = {
  host?: InputMaybe<Scalars['String']['input']>;
};

export type Mesh = {
  __typename?: 'Mesh';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  store: MeshStore;
};

export type MeshFilter = {
  AND?: InputMaybe<MeshFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<MeshFilter>;
  OR?: InputMaybe<MeshFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MeshInput = {
  mesh: Scalars['MeshLike']['input'];
  name: Scalars['String']['input'];
};

export type MeshStore = {
  __typename?: 'MeshStore';
  bucket: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  path: Scalars['String']['output'];
  presignedUrl: Scalars['String']['output'];
};


export type MeshStorePresignedUrlArgs = {
  host?: InputMaybe<Scalars['String']['input']>;
};

/** A change made to a model. */
export type ModelChange = {
  __typename?: 'ModelChange';
  /** The field that was changed. */
  field: Scalars['String']['output'];
  /** The new value of the field. */
  newValue?: Maybe<Scalars['String']['output']>;
  /** The old value of the field. */
  oldValue?: Maybe<Scalars['String']['output']>;
};

export type MultiWellPlate = {
  __typename?: 'MultiWellPlate';
  columns?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rows?: Maybe<Scalars['Int']['output']>;
  views: Array<WellPositionView>;
};


export type MultiWellPlateViewsArgs = {
  filters?: InputMaybe<WellPositionViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type MultiWellPlateFilter = {
  AND?: InputMaybe<MultiWellPlateFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<MultiWellPlateFilter>;
  OR?: InputMaybe<MultiWellPlateFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MultiWellPlateInput = {
  columns?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  rows?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Assign a user permission to an object */
  assignUserPermission: Array<UserObjectPermission>;
  /** Create a new view for affine transformation data */
  createAffineTransformationView: AffineTransformationView;
  /** Create a new camera configuration */
  createCamera: Camera;
  /** Create a new view for channel data */
  createChannelView: ChannelView;
  /** Create a new view for continuous scan data */
  createContinousScanView: ContinousScanView;
  /** Create a new dataset to organize data */
  createDataset: Dataset;
  /** Create a new era for temporal organization */
  createEra: Era;
  /** Create a new view for file data */
  createFileView: FileView;
  /** Create a new view for histogram data */
  createHistogramView: HistogramView;
  /** Create a new view for instance mask data */
  createInstanceMaskView: InstanceMaskView;
  /** Create a new instrument configuration */
  createInstrument: Instrument;
  /** Create a new view for label data */
  createLabelView: LabelView;
  /** Create a new view for masked data */
  createMaskView: MaskView;
  /** Create a new mesh */
  createMesh: Mesh;
  /** Create a new multi-well plate configuration */
  createMultiWellPlate: MultiWellPlate;
  /** Create a new microscope objective configuration */
  createObjective: Objective;
  /** Create a new view for optical settings */
  createOpticsView: OpticsView;
  /** Create a new reference view for image data */
  createReferenceView: ReferenceView;
  /** Create a new render tree for image visualization */
  createRenderTree: RenderTree;
  /** Create a new RGB context for image visualization */
  createRgbContext: RgbContext;
  /** Create a new view for RGB image data */
  createRgbView: RgbView;
  /** Create a new region of interest */
  createRoi: Roi;
  /** Create a new view for region of interest data */
  createRoiView: RoiView;
  /** Create a new state snapshot */
  createSnapshot: Snapshot;
  /** Create a new stage for organizing data */
  createStage: Stage;
  /** Create a new view for temporal data */
  createTimepointView: TimepointView;
  /** Create a new collection of views to organize related views */
  createViewCollection: ViewCollection;
  /** Create a new view for well position data */
  createWellPositionView: WellPositionView;
  /** Delete an existing affine transformation view */
  deleteAffineTransformationView: Scalars['ID']['output'];
  /** Delete an existing camera */
  deleteCamera: Scalars['ID']['output'];
  /** Delete an existing channel view */
  deleteChannelView: Scalars['ID']['output'];
  /** Delete an existing dataset */
  deleteDataset: Scalars['ID']['output'];
  /** Delete an existing era */
  deleteEra: Scalars['ID']['output'];
  /** Delete an existing file */
  deleteFile: Scalars['ID']['output'];
  /** Delete an existing histogram view */
  deleteHistogramView: Scalars['ID']['output'];
  /** Delete an existing image */
  deleteImage: Scalars['ID']['output'];
  /** Delete an existing instrument */
  deleteInstrument: Scalars['ID']['output'];
  /** Delete an existing mesh */
  deleteMesh: Scalars['ID']['output'];
  /** Delete an existing multi-well plate configuration */
  deleteMultiWellPlate: Scalars['ID']['output'];
  /** Delete an existing objective */
  deleteObjective: Scalars['ID']['output'];
  /** Delete an existing optics view */
  deleteOpticsView: Scalars['ID']['output'];
  /** Delete an existing RGB context */
  deleteRgbContext: Scalars['ID']['output'];
  /** Delete an existing RGB view */
  deleteRgbView: Scalars['ID']['output'];
  /** Delete an existing region of interest */
  deleteRoi: Scalars['ID']['output'];
  /** Delete an existing snapshot */
  deleteSnapshot: Scalars['ID']['output'];
  /** Delete an existing stage */
  deleteStage: Scalars['ID']['output'];
  /** Delete an existing timepoint view */
  deleteTimepointView: Scalars['ID']['output'];
  /** Delete any type of view */
  deleteView: Scalars['ID']['output'];
  /** Delete an existing view collection */
  deleteViewCollection: Scalars['ID']['output'];
  /** Ensure a camera exists, creating if needed */
  ensureCamera: Camera;
  /** Create a new dataset to organize data */
  ensureDataset: Dataset;
  /** Ensure an instrument exists, creating if needed */
  ensureInstrument: Instrument;
  /** Ensure a multi-well plate exists, creating if needed */
  ensureMultiWellPlate: MultiWellPlate;
  /** Ensure an objective exists, creating if needed */
  ensureObjective: Objective;
  /** Create an image from array-like data */
  fromArrayLike: Image;
  /** Create a file from file-like data */
  fromFileLike: File;
  /** Create a table from parquet-like data */
  fromParquetLike: Table;
  /** Pin a camera for quick access */
  pinCamera: Camera;
  /** Pin a dataset for quick access */
  pinDataset: Dataset;
  /** Pin an era for quick access */
  pinEra: Era;
  /** Pin an image for quick access */
  pinImage: Image;
  /** Pin an instrument for quick access */
  pinInstrument: Instrument;
  /** Pin a mesh for quick access */
  pinMesh: Snapshot;
  /** Pin a multi-well plate for quick access */
  pinMultiWellPlate: MultiWellPlate;
  /** Pin an objective for quick access */
  pinObjective: Objective;
  /** Pin a region of interest for quick access */
  pinRoi: Roi;
  /** Pin a snapshot for quick access */
  pinSnapshot: Snapshot;
  /** Pin a stage for quick access */
  pinStage: Stage;
  /** Pin a view for quick access */
  pinView: View;
  /** Pin a view collection for quick access */
  pinViewCollection: ViewCollection;
  /** Add datasets as children of another dataset */
  putDatasetsInDataset: Dataset;
  /** Add files to a dataset */
  putFilesInDataset: Dataset;
  /** Add images to a dataset */
  putImagesInDataset: Dataset;
  /** Relate an image to a dataset */
  relateToDataset: Image;
  /** Remove datasets from being children of another dataset */
  releaseDatasetsFromDataset: Dataset;
  /** Remove files from a dataset */
  releaseFilesFromDataset: Dataset;
  /** Remove images from a dataset */
  releaseImagesFromDataset: Dataset;
  /** Request credentials to access an image */
  requestAccess: AccessCredentials;
  /** Request credentials to access a file */
  requestFileAccess: AccessCredentials;
  /** Request credentials to upload a new file */
  requestFileUpload: Credentials;
  /** Request presigned credentials for file upload */
  requestFileUploadPresigned: PresignedPostCredentials;
  /** Request credentials for media file upload */
  requestMediaUpload: PresignedPostCredentials;
  /** Request presigned credentials for mesh upload */
  requestMeshUpload: PresignedPostCredentials;
  /** Request credentials to access a table */
  requestTableAccess: AccessCredentials;
  /** Request credentials to upload a new table */
  requestTableUpload: Credentials;
  /** Request credentials to upload a new image */
  requestUpload: Credentials;
  /** Revert dataset to a previous version */
  revertDataset: Dataset;
  /** Update dataset metadata */
  updateDataset: Dataset;
  /** Update an existing image's metadata */
  updateImage: Image;
  /** Update settings of an existing RGB context */
  updateRgbContext: RgbContext;
  /** Update an existing RGB view */
  updateRgbView: RgbView;
  /** Update an existing region of interest */
  updateRoi: Roi;
};


export type MutationAssignUserPermissionArgs = {
  input: AssignUserPermissionInput;
};


export type MutationCreateAffineTransformationViewArgs = {
  input: AffineTransformationViewInput;
};


export type MutationCreateCameraArgs = {
  input: CameraInput;
};


export type MutationCreateChannelViewArgs = {
  input: ChannelViewInput;
};


export type MutationCreateContinousScanViewArgs = {
  input: ContinousScanViewInput;
};


export type MutationCreateDatasetArgs = {
  input: CreateDatasetInput;
};


export type MutationCreateEraArgs = {
  input: EraInput;
};


export type MutationCreateFileViewArgs = {
  input: FileViewInput;
};


export type MutationCreateHistogramViewArgs = {
  input: HistogramViewInput;
};


export type MutationCreateInstanceMaskViewArgs = {
  input: InstanceMaskViewInput;
};


export type MutationCreateInstrumentArgs = {
  input: InstrumentInput;
};


export type MutationCreateLabelViewArgs = {
  input: LabelViewInput;
};


export type MutationCreateMaskViewArgs = {
  input: MaskViewInput;
};


export type MutationCreateMeshArgs = {
  input: MeshInput;
};


export type MutationCreateMultiWellPlateArgs = {
  input: MultiWellPlateInput;
};


export type MutationCreateObjectiveArgs = {
  input: ObjectiveInput;
};


export type MutationCreateOpticsViewArgs = {
  input: OpticsViewInput;
};


export type MutationCreateReferenceViewArgs = {
  input: ReferenceViewInput;
};


export type MutationCreateRenderTreeArgs = {
  input: RenderTreeInput;
};


export type MutationCreateRgbContextArgs = {
  input: CreateRgbContextInput;
};


export type MutationCreateRgbViewArgs = {
  input: RgbViewInput;
};


export type MutationCreateRoiArgs = {
  input: RoiInput;
};


export type MutationCreateRoiViewArgs = {
  input: RoiViewInput;
};


export type MutationCreateSnapshotArgs = {
  input: SnapshotInput;
};


export type MutationCreateStageArgs = {
  input: StageInput;
};


export type MutationCreateTimepointViewArgs = {
  input: TimepointViewInput;
};


export type MutationCreateViewCollectionArgs = {
  input: ViewCollectionInput;
};


export type MutationCreateWellPositionViewArgs = {
  input: WellPositionViewInput;
};


export type MutationDeleteAffineTransformationViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteCameraArgs = {
  input: DeleteCameraInput;
};


export type MutationDeleteChannelViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteDatasetArgs = {
  input: DeleteDatasetInput;
};


export type MutationDeleteEraArgs = {
  input: DeleteEraInput;
};


export type MutationDeleteFileArgs = {
  input: DeleteFileInput;
};


export type MutationDeleteHistogramViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteImageArgs = {
  input: DeleteImageInput;
};


export type MutationDeleteInstrumentArgs = {
  input: DeleteInstrumentInput;
};


export type MutationDeleteMeshArgs = {
  input: DeleteMeshInput;
};


export type MutationDeleteMultiWellPlateArgs = {
  input: DeleteMultiWellInput;
};


export type MutationDeleteObjectiveArgs = {
  input: DeleteObjectiveInput;
};


export type MutationDeleteOpticsViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteRgbContextArgs = {
  input: DeleteRgbContextInput;
};


export type MutationDeleteRgbViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteRoiArgs = {
  input: DeleteRoiInput;
};


export type MutationDeleteSnapshotArgs = {
  input: DeleteSnaphotInput;
};


export type MutationDeleteStageArgs = {
  input: DeleteStageInput;
};


export type MutationDeleteTimepointViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteViewCollectionArgs = {
  input: DeleteViewCollectionInput;
};


export type MutationEnsureCameraArgs = {
  input: CameraInput;
};


export type MutationEnsureDatasetArgs = {
  input: CreateDatasetInput;
};


export type MutationEnsureInstrumentArgs = {
  input: InstrumentInput;
};


export type MutationEnsureMultiWellPlateArgs = {
  input: MultiWellPlateInput;
};


export type MutationEnsureObjectiveArgs = {
  input: ObjectiveInput;
};


export type MutationFromArrayLikeArgs = {
  input: FromArrayLikeInput;
};


export type MutationFromFileLikeArgs = {
  input: FromFileLike;
};


export type MutationFromParquetLikeArgs = {
  input: FromParquetLike;
};


export type MutationPinCameraArgs = {
  input: PinCameraInput;
};


export type MutationPinDatasetArgs = {
  input: PinDatasetInput;
};


export type MutationPinEraArgs = {
  input: PinEraInput;
};


export type MutationPinImageArgs = {
  input: PinImageInput;
};


export type MutationPinInstrumentArgs = {
  input: PinInstrumentInput;
};


export type MutationPinMeshArgs = {
  input: DeleteMeshInput;
};


export type MutationPinMultiWellPlateArgs = {
  input: PintMultiWellPlateInput;
};


export type MutationPinObjectiveArgs = {
  input: PinObjectiveInput;
};


export type MutationPinRoiArgs = {
  input: PinRoiInput;
};


export type MutationPinSnapshotArgs = {
  input: PinSnapshotInput;
};


export type MutationPinStageArgs = {
  input: PinStageInput;
};


export type MutationPinViewArgs = {
  input: PinViewInput;
};


export type MutationPinViewCollectionArgs = {
  input: PinViewCollectionInput;
};


export type MutationPutDatasetsInDatasetArgs = {
  input: AssociateInput;
};


export type MutationPutFilesInDatasetArgs = {
  input: AssociateInput;
};


export type MutationPutImagesInDatasetArgs = {
  input: AssociateInput;
};


export type MutationRelateToDatasetArgs = {
  id: Scalars['ID']['input'];
  other: Scalars['ID']['input'];
};


export type MutationReleaseDatasetsFromDatasetArgs = {
  input: DesociateInput;
};


export type MutationReleaseFilesFromDatasetArgs = {
  input: DesociateInput;
};


export type MutationReleaseImagesFromDatasetArgs = {
  input: DesociateInput;
};


export type MutationRequestAccessArgs = {
  input: RequestAccessInput;
};


export type MutationRequestFileAccessArgs = {
  input: RequestFileAccessInput;
};


export type MutationRequestFileUploadArgs = {
  input: RequestFileUploadInput;
};


export type MutationRequestFileUploadPresignedArgs = {
  input: RequestFileUploadInput;
};


export type MutationRequestMediaUploadArgs = {
  input: RequestMediaUploadInput;
};


export type MutationRequestMeshUploadArgs = {
  input: RequestMeshUploadInput;
};


export type MutationRequestTableAccessArgs = {
  input: RequestTableAccessInput;
};


export type MutationRequestTableUploadArgs = {
  input: RequestTableUploadInput;
};


export type MutationRequestUploadArgs = {
  input: RequestUploadInput;
};


export type MutationRevertDatasetArgs = {
  input: RevertInput;
};


export type MutationUpdateDatasetArgs = {
  input: ChangeDatasetInput;
};


export type MutationUpdateImageArgs = {
  input: UpdateImageInput;
};


export type MutationUpdateRgbContextArgs = {
  input: UpdateRgbContextInput;
};


export type MutationUpdateRgbViewArgs = {
  input: UpdateRgbViewInput;
};


export type MutationUpdateRoiArgs = {
  input: UpdateRoiInput;
};

export type Objective = {
  __typename?: 'Objective';
  id: Scalars['ID']['output'];
  immersion?: Maybe<Scalars['String']['output']>;
  magnification?: Maybe<Scalars['Float']['output']>;
  na?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  organization: DjangoModelType;
  serialNumber: Scalars['String']['output'];
  views: Array<OpticsView>;
};


export type ObjectiveViewsArgs = {
  filters?: InputMaybe<OpticsViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type ObjectiveFilter = {
  AND?: InputMaybe<ObjectiveFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ObjectiveFilter>;
  OR?: InputMaybe<ObjectiveFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ObjectiveInput = {
  immersion?: InputMaybe<Scalars['String']['input']>;
  magnification?: InputMaybe<Scalars['Float']['input']>;
  na?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serialNumber: Scalars['String']['input'];
};

export type OffsetPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: Scalars['Int']['input'];
};

export type OpticsView = View & {
  __typename?: 'OpticsView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  camera?: Maybe<Camera>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  instrument?: Maybe<Instrument>;
  isGlobal: Scalars['Boolean']['output'];
  objective?: Maybe<Objective>;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type OpticsViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type OpticsViewFilter = {
  AND?: InputMaybe<OpticsViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<OpticsViewFilter>;
  OR?: InputMaybe<OpticsViewFilter>;
  camera?: InputMaybe<CameraFilter>;
  instrument?: InputMaybe<InstrumentFilter>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  objective?: InputMaybe<ObjectiveFilter>;
};

export type OpticsViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  camera?: InputMaybe<Scalars['ID']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['ID']['input'];
  instrument?: InputMaybe<Scalars['ID']['input']>;
  objective?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
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

export type ParquetStore = {
  __typename?: 'ParquetStore';
  bucket: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PartialAcquisitionViewInput = {
  acquiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialAffineTransformationViewInput = {
  affineMatrix: Scalars['FourByFourMatrix']['input'];
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  stage?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialChannelViewInput = {
  /** The acquisition mode of the channel */
  acquisitionMode?: InputMaybe<Scalars['String']['input']>;
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** The emission wavelength of the channel in nanometers */
  emissionWavelength?: InputMaybe<Scalars['Float']['input']>;
  /** The excitation wavelength of the channel in nanometers */
  excitationWavelength?: InputMaybe<Scalars['Float']['input']>;
  /** The name of the channel */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialDerivedViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  originImage: Scalars['ID']['input'];
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialFileViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['ID']['input'];
  seriesIdentifier?: InputMaybe<Scalars['String']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialImageAccessorInput = {
  image: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
  maxIndex?: InputMaybe<Scalars['Int']['input']>;
  minIndex?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialInstanceMaskViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  referenceView?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialLabelAccessorInput = {
  keys: Array<Scalars['String']['input']>;
  maxIndex?: InputMaybe<Scalars['Int']['input']>;
  minIndex?: InputMaybe<Scalars['Int']['input']>;
  pixelView: Scalars['ID']['input'];
};

export type PartialMaskViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  referenceView?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialOpticsViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  camera?: InputMaybe<Scalars['ID']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  instrument?: InputMaybe<Scalars['ID']['input']>;
  objective?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialRgbViewInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  baseColor?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  colorMap?: InputMaybe<ColorMap>;
  context?: InputMaybe<Scalars['ID']['input']>;
  contrastLimitMax?: InputMaybe<Scalars['Float']['input']>;
  contrastLimitMin?: InputMaybe<Scalars['Float']['input']>;
  gamma?: InputMaybe<Scalars['Float']['input']>;
  rescale?: InputMaybe<Scalars['Boolean']['input']>;
  scale?: InputMaybe<Scalars['Float']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialRoiViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  roi: Scalars['ID']['input'];
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialReferenceViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialScaleViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  scaleC?: InputMaybe<Scalars['Float']['input']>;
  scaleT?: InputMaybe<Scalars['Float']['input']>;
  scaleX?: InputMaybe<Scalars['Float']['input']>;
  scaleY?: InputMaybe<Scalars['Float']['input']>;
  scaleZ?: InputMaybe<Scalars['Float']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PartialTimepointViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  era?: InputMaybe<Scalars['ID']['input']>;
  indexSinceStart?: InputMaybe<Scalars['Int']['input']>;
  msSinceStart?: InputMaybe<Scalars['Milliseconds']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type PermissionOption = {
  __typename?: 'PermissionOption';
  label: Scalars['String']['output'];
  value: Scalars['ID']['output'];
};

export type PinCameraInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinDatasetInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinEraInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinImageInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinInstrumentInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinObjectiveInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinRoiInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinSnapshotInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinStageInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinViewCollectionInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PinViewInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

export type PintMultiWellPlateInput = {
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
};

/** A channel descriptor */
export type PlaneInfo = {
  __typename?: 'PlaneInfo';
  label: Scalars['String']['output'];
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

/** A provenance event for a model. */
export type ProvenanceEntry = {
  __typename?: 'ProvenanceEntry';
  client?: Maybe<Client>;
  /** The date of the change. */
  date: Scalars['DateTime']['output'];
  /** The assignation ID during which the change occurred. If it was happening outside of an assignation, it will be None. */
  during?: Maybe<Scalars['String']['output']>;
  /** The effective changes made to the model. */
  effectiveChanges: Array<ModelChange>;
  /** The ID of the history entry. */
  id: Scalars['ID']['output'];
  /** The type of change that was made. */
  kind: HistoryKind;
  /** User who made the change. */
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  acquisitionViews: Array<AcquisitionView>;
  affineTransformationViews: Array<AffineTransformationView>;
  /** Get available permissions for a specific identifier */
  availablePermissions: Array<PermissionOption>;
  camera: Camera;
  channelViews: Array<ChannelView>;
  channelsFor: Array<ChannelInfo>;
  children: Array<DatasetImageFile>;
  continousScanViews: Array<ContinousScanView>;
  dataset: Dataset;
  datasets: Array<Dataset>;
  eras: Array<Era>;
  experiment: Experiment;
  experiments: Array<Experiment>;
  file: File;
  files: Array<File>;
  /** Returns a single image by ID */
  image: Image;
  imageAccessors: Array<ImageAccessor>;
  images: Array<Image>;
  instrument: Instrument;
  instruments: Array<Instrument>;
  labelAccessors: Array<LabelAccessor>;
  labelViews: Array<LabelView>;
  maskedPixelInfo: MaskedPixelInfo;
  mesh: Mesh;
  meshes: Array<Mesh>;
  multiWellPlate: MultiWellPlate;
  multiWellPlates: Array<MultiWellPlate>;
  mydatasets: Array<Dataset>;
  myeras: Array<Era>;
  myfiles: Array<File>;
  myimages: Array<Image>;
  myobjectives: Array<Objective>;
  mysnapshots: Array<Snapshot>;
  mytables: Array<Table>;
  objective: Objective;
  objectives: Array<Objective>;
  /** Get permissions for a specific object */
  permissions: Array<UserObjectPermission>;
  randomImage: Image;
  renderTree: RenderTree;
  renderTrees: Array<RenderTree>;
  rgbView: RgbView;
  rgbViews: Array<RgbView>;
  rgbcontext: RgbContext;
  rgbcontexts: Array<RgbContext>;
  roi: Roi;
  rois: Array<Roi>;
  rows: Array<Scalars['MetricMap']['output']>;
  scaleViews: Array<ScaleView>;
  snapshot: Snapshot;
  snapshots: Array<Snapshot>;
  stage: Stage;
  stages: Array<Stage>;
  table: Table;
  tableCell: TableCell;
  tableCells: Array<TableCell>;
  tableRow: TableRow;
  tableRows: Array<TableRow>;
  tables: Array<Table>;
  timepointViews: Array<TimepointView>;
  wellPositionViews: Array<WellPositionView>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type QueryAffineTransformationViewsArgs = {
  filters?: InputMaybe<AffineTransformationViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryAvailablePermissionsArgs = {
  identifier: Scalars['String']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryCameraArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelsForArgs = {
  filters?: InputMaybe<ChannelInfoFilter>;
  image: Scalars['ID']['input'];
};


export type QueryChildrenArgs = {
  filters?: InputMaybe<DatasetChildrenFilter>;
  pagination?: InputMaybe<ChildrenPaginationInput>;
  parent: Scalars['ID']['input'];
};


export type QueryContinousScanViewsArgs = {
  filters?: InputMaybe<ContinousScanViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryDatasetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDatasetsArgs = {
  filters?: InputMaybe<DatasetFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryErasArgs = {
  filters?: InputMaybe<EraFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryExperimentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExperimentsArgs = {
  filters?: InputMaybe<ExperimentFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFilesArgs = {
  filters?: InputMaybe<FileFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryImageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImagesArgs = {
  filters?: InputMaybe<ImageFilter>;
  order?: InputMaybe<ImageOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryInstrumentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMaskedPixelInfoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMeshArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMeshesArgs = {
  filters?: InputMaybe<MeshFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMultiWellPlateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMultiWellPlatesArgs = {
  filters?: InputMaybe<MultiWellPlateFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMydatasetsArgs = {
  filters?: InputMaybe<DatasetFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMyerasArgs = {
  filters?: InputMaybe<EraFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMyfilesArgs = {
  filters?: InputMaybe<FileFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMyimagesArgs = {
  filters?: InputMaybe<ImageFilter>;
  order?: InputMaybe<ImageOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMysnapshotsArgs = {
  filters?: InputMaybe<SnapshotFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryMytablesArgs = {
  filters?: InputMaybe<TableFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryObjectiveArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionsArgs = {
  identifier: Scalars['String']['input'];
  object: Scalars['ID']['input'];
};


export type QueryRenderTreeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRenderTreesArgs = {
  filters?: InputMaybe<RenderTreeFilter>;
  order?: InputMaybe<RenderTreeOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryRgbViewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRgbViewsArgs = {
  filters?: InputMaybe<RgbViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryRgbcontextArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRgbcontextsArgs = {
  filters?: InputMaybe<RgbContextFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryRoiArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRoisArgs = {
  filters?: InputMaybe<RoiFilter>;
  order?: InputMaybe<RoiOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryRowsArgs = {
  filters?: InputMaybe<RowFilter>;
  pagination?: InputMaybe<TablePaginationInput>;
  table: Scalars['ID']['input'];
};


export type QuerySnapshotArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySnapshotsArgs = {
  filters?: InputMaybe<SnapshotFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryStageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStagesArgs = {
  filters?: InputMaybe<StageFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryTableArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTableCellArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTableCellsArgs = {
  filters: TableCellFilter;
  pagination: OffsetPaginationInput;
};


export type QueryTableRowArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTableRowsArgs = {
  filters: TableRowFilter;
  pagination: OffsetPaginationInput;
};


export type QueryTablesArgs = {
  filters?: InputMaybe<TableFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryTimepointViewsArgs = {
  filters?: InputMaybe<TimepointViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWellPositionViewsArgs = {
  filters?: InputMaybe<WellPositionViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type RgbContext = {
  __typename?: 'RGBContext';
  blending: Blending;
  c: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: Image;
  name: Scalars['String']['output'];
  pinned: Scalars['Boolean']['output'];
  snapshots: Array<Snapshot>;
  t: Scalars['Int']['output'];
  views: Array<RgbView>;
  z: Scalars['Int']['output'];
};


export type RgbContextSnapshotsArgs = {
  filters?: InputMaybe<SnapshotFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type RgbContextViewsArgs = {
  filters?: InputMaybe<RgbViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type RgbContextFilter = {
  AND?: InputMaybe<RgbContextFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<RgbContextFilter>;
  OR?: InputMaybe<RgbContextFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RgbView = View & {
  __typename?: 'RGBView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  baseColor?: Maybe<Array<Scalars['Int']['output']>>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  colorMap: ColorMap;
  /** All views of this image */
  congruentViews: Array<View>;
  contexts: Array<RgbContext>;
  contrastLimitMax?: Maybe<Scalars['Float']['output']>;
  contrastLimitMin?: Maybe<Scalars['Float']['output']>;
  fullColour: Scalars['String']['output'];
  gamma?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type RgbViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};


export type RgbViewContextsArgs = {
  filters?: InputMaybe<RgbContextFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type RgbViewFullColourArgs = {
  format?: InputMaybe<ColorFormat>;
};


export type RgbViewNameArgs = {
  long?: Scalars['Boolean']['input'];
};

export type RgbViewFilter = {
  AND?: InputMaybe<RgbViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<RgbViewFilter>;
  OR?: InputMaybe<RgbViewFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RgbViewInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  baseColor?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  colorMap?: InputMaybe<ColorMap>;
  context: Scalars['ID']['input'];
  contrastLimitMax?: InputMaybe<Scalars['Float']['input']>;
  contrastLimitMin?: InputMaybe<Scalars['Float']['input']>;
  gamma?: InputMaybe<Scalars['Float']['input']>;
  image: Scalars['ID']['input'];
  rescale?: InputMaybe<Scalars['Boolean']['input']>;
  scale?: InputMaybe<Scalars['Float']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type Roi = {
  __typename?: 'ROI';
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<User>;
  id: Scalars['ID']['output'];
  image: Image;
  kind: RoiKind;
  name: Scalars['String']['output'];
  pinned: Scalars['Boolean']['output'];
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
  vectors: Array<Scalars['FiveDVector']['output']>;
};


export type RoiProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type RoiFilter = {
  AND?: InputMaybe<RoiFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<RoiFilter>;
  OR?: InputMaybe<RoiFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<RoiKindChoices>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RoiOrder = {
  createdAt?: InputMaybe<Ordering>;
};

export type RoiView = View & {
  __typename?: 'ROIView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  roi: Roi;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type RoiViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type RoiViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['ID']['input'];
  roi: Scalars['ID']['input'];
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type ReferenceView = View & {
  __typename?: 'ReferenceView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type ReferenceViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type ReferenceViewFilter = {
  AND?: InputMaybe<ReferenceViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ReferenceViewFilter>;
  OR?: InputMaybe<ReferenceViewFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ReferenceViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['ID']['input'];
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type Render = {
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<User>;
};

export enum RenderKind {
  Snapshot = 'SNAPSHOT',
  Video = 'VIDEO'
}

export enum RenderNodeKind {
  Context = 'CONTEXT',
  Grid = 'GRID',
  Overlay = 'OVERLAY',
  Spit = 'SPIT'
}

export type RenderTree = {
  __typename?: 'RenderTree';
  id: Scalars['ID']['output'];
  linkedContexts: Array<RgbContext>;
  name: Scalars['String']['output'];
};


export type RenderTreeLinkedContextsArgs = {
  filters?: InputMaybe<RgbContextFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type RenderTreeFilter = {
  AND?: InputMaybe<RenderTreeFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<RenderTreeFilter>;
  OR?: InputMaybe<RenderTreeFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RenderTreeInput = {
  name: Scalars['String']['input'];
  tree: TreeInput;
};

export type RenderTreeOrder = {
  createdAt?: InputMaybe<Ordering>;
};

export type RequestAccessInput = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  store: Scalars['ID']['input'];
};

export type RequestFileAccessInput = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  store: Scalars['ID']['input'];
};

export type RequestFileUploadInput = {
  datalayer: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
};

export type RequestMediaUploadInput = {
  datalayer: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
};

export type RequestMeshUploadInput = {
  datalayer: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type RequestTableAccessInput = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  store: Scalars['ID']['input'];
};

export type RequestTableUploadInput = {
  datalayer: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type RequestUploadInput = {
  datalayer: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type RevertInput = {
  historyId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type RoiEvent = {
  __typename?: 'RoiEvent';
  create?: Maybe<Roi>;
  delete?: Maybe<Scalars['ID']['output']>;
  update?: Maybe<Roi>;
};

export type RoiInput = {
  /** The image this ROI belongs to */
  image: Scalars['ID']['input'];
  /** The type/kind of ROI */
  kind: RoiKind;
  /** The vector coordinates defining the ROI */
  vectors: Array<Scalars['FiveDVector']['input']>;
};

export enum RoiKind {
  Cube = 'CUBE',
  Ellipsis = 'ELLIPSIS',
  Frame = 'FRAME',
  Hypercube = 'HYPERCUBE',
  Line = 'LINE',
  Path = 'PATH',
  Point = 'POINT',
  Polygon = 'POLYGON',
  Rectangle = 'RECTANGLE',
  Slice = 'SLICE',
  SpectralCube = 'SPECTRAL_CUBE',
  SpectralHypercube = 'SPECTRAL_HYPERCUBE',
  SpectralRectangle = 'SPECTRAL_RECTANGLE',
  TemporalCube = 'TEMPORAL_CUBE',
  TemporalRectangle = 'TEMPORAL_RECTANGLE'
}

export enum RoiKindChoices {
  Cube = 'CUBE',
  Ellipsis = 'ELLIPSIS',
  Frame = 'FRAME',
  Hypercube = 'HYPERCUBE',
  Line = 'LINE',
  Path = 'PATH',
  Point = 'POINT',
  Polygon = 'POLYGON',
  Rectangle = 'RECTANGLE',
  Slice = 'SLICE',
  SpectralCube = 'SPECTRAL_CUBE',
  SpectralHypercube = 'SPECTRAL_HYPERCUBE',
  SpectralRectangle = 'SPECTRAL_RECTANGLE',
  TemporalCube = 'TEMPORAL_CUBE',
  TemporalRectangle = 'TEMPORAL_RECTANGLE',
  Unknown = 'UNKNOWN'
}

export type RowFilter = {
  clause?: InputMaybe<Scalars['String']['input']>;
};

export type ScaleView = View & {
  __typename?: 'ScaleView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  parent: Image;
  scaleC: Scalars['Float']['output'];
  scaleT: Scalars['Float']['output'];
  scaleX: Scalars['Float']['output'];
  scaleY: Scalars['Float']['output'];
  scaleZ: Scalars['Float']['output'];
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type ScaleViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export enum ScanDirection {
  ColumnRowSlice = 'COLUMN_ROW_SLICE',
  ColumnRowSliceSnake = 'COLUMN_ROW_SLICE_SNAKE',
  RowColumnSlice = 'ROW_COLUMN_SLICE',
  RowColumnSliceSnake = 'ROW_COLUMN_SLICE_SNAKE',
  SliceRowColumn = 'SLICE_ROW_COLUMN',
  SliceRowColumnSnake = 'SLICE_ROW_COLUMN_SNAKE'
}

export type ScopeFilter = {
  me?: InputMaybe<Scalars['Boolean']['input']>;
  org?: InputMaybe<Scalars['Boolean']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  shared?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ScopeKind {
  Me = 'ME',
  Org = 'ORG',
  Public = 'PUBLIC',
  Shared = 'SHARED'
}

export type Snapshot = Render & {
  __typename?: 'Snapshot';
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<User>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  store: MediaStore;
};

export type SnapshotFilter = {
  AND?: InputMaybe<SnapshotFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<SnapshotFilter>;
  OR?: InputMaybe<SnapshotFilter>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<StrFilterLookup>;
};

export type SnapshotInput = {
  file: Scalars['ImageFileLike']['input'];
  image: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Stage = {
  __typename?: 'Stage';
  affineViews: Array<AffineTransformationView>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pinned: Scalars['Boolean']['output'];
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
};


export type StageAffineViewsArgs = {
  filters?: InputMaybe<AffineTransformationViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type StageProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type StageFilter = {
  AND?: InputMaybe<StageFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<StageFilter>;
  OR?: InputMaybe<StageFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type StageInput = {
  instrument?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
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
  /** Subscribe to real-time affine transformation view updatess */
  affineTransformationViews: AffineTransformationViewEvent;
  /** Subscribe to real-time file updates */
  files: FileEvent;
  /** Subscribe to real-time image updates */
  images: ImageEvent;
  /** Subscribe to real-time ROI updates */
  rois: RoiEvent;
};


export type SubscriptionAffineTransformationViewsArgs = {
  stage: Scalars['ID']['input'];
};


export type SubscriptionFilesArgs = {
  dataset?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionImagesArgs = {
  dataset?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionRoisArgs = {
  image: Scalars['ID']['input'];
};

export type Table = {
  __typename?: 'Table';
  accessors: Array<Accessor>;
  columns: Array<TableColumn>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  origins: Array<Image>;
  rows: Array<Scalars['MetricMap']['output']>;
  store: ParquetStore;
};


export type TableAccessorsArgs = {
  filters?: InputMaybe<AccessorFilter>;
  types?: InputMaybe<Array<AccessorKind>>;
};


export type TableOriginsArgs = {
  filters?: InputMaybe<ImageFilter>;
  order?: InputMaybe<ImageOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/** A cell of a table */
export type TableCell = {
  __typename?: 'TableCell';
  column: TableColumn;
  columnId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['Int']['output'];
  table: Table;
  value: Scalars['Any']['output'];
};

export type TableCellFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** A column descriptor */
export type TableColumn = {
  __typename?: 'TableColumn';
  accessors: Array<Accessor>;
  default?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nullable: Scalars['Boolean']['output'];
  type: DuckDbDataType;
};


/** A column descriptor */
export type TableColumnAccessorsArgs = {
  filters?: InputMaybe<AccessorFilter>;
  types?: InputMaybe<Array<AccessorKind>>;
};

export type TableFilter = {
  AND?: InputMaybe<TableFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<TableFilter>;
  OR?: InputMaybe<TableFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type TablePaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A cell of a table */
export type TableRow = {
  __typename?: 'TableRow';
  columns: Array<TableColumn>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['Int']['output'];
  table: Table;
  values: Array<Scalars['Any']['output']>;
};

export type TableRowFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type TimepointView = View & {
  __typename?: 'TimepointView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  era: Era;
  id: Scalars['ID']['output'];
  image: Image;
  indexSinceStart?: Maybe<Scalars['Int']['output']>;
  isGlobal: Scalars['Boolean']['output'];
  msSinceStart?: Maybe<Scalars['Milliseconds']['output']>;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type TimepointViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type TimepointViewFilter = {
  AND?: InputMaybe<TimepointViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<TimepointViewFilter>;
  OR?: InputMaybe<TimepointViewFilter>;
  era?: InputMaybe<EraFilter>;
  indexSinceStart?: InputMaybe<Scalars['Int']['input']>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  msSinceStart?: InputMaybe<Scalars['Float']['input']>;
};

export type TimepointViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  era?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['ID']['input'];
  indexSinceStart?: InputMaybe<Scalars['Int']['input']>;
  msSinceStart?: InputMaybe<Scalars['Milliseconds']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type TreeInput = {
  children: Array<TreeNodeInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TreeNodeInput = {
  children?: InputMaybe<Array<TreeNodeInput>>;
  context?: InputMaybe<Scalars['String']['input']>;
  gap?: InputMaybe<Scalars['Int']['input']>;
  kind: RenderNodeKind;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateImageInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateRgbContextInput = {
  c?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  t?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  views?: InputMaybe<Array<PartialRgbViewInput>>;
  z?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRgbViewInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  baseColor?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  colorMap?: InputMaybe<ColorMap>;
  context?: InputMaybe<Scalars['ID']['input']>;
  contrastLimitMax?: InputMaybe<Scalars['Float']['input']>;
  contrastLimitMin?: InputMaybe<Scalars['Float']['input']>;
  gamma?: InputMaybe<Scalars['Float']['input']>;
  /** The ID of the RGB view to update */
  id: Scalars['ID']['input'];
  rescale?: InputMaybe<Scalars['Boolean']['input']>;
  scale?: InputMaybe<Scalars['Float']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoiInput = {
  entity?: InputMaybe<Scalars['ID']['input']>;
  entityGroup?: InputMaybe<Scalars['ID']['input']>;
  entityKind?: InputMaybe<Scalars['ID']['input']>;
  entityParent?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<RoiKind>;
  roi: Scalars['ID']['input'];
  vectors?: InputMaybe<Array<Scalars['FiveDVector']['input']>>;
};

export type User = {
  __typename?: 'User';
  activeOrganization?: Maybe<Organization>;
  preferredUsername: Scalars['String']['output'];
  sub: Scalars['String']['output'];
};

export type UserObjectPermission = {
  __typename?: 'UserObjectPermission';
  permission: Scalars['String']['output'];
  user: User;
};

export type Video = Render & {
  __typename?: 'Video';
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<User>;
  id: Scalars['ID']['output'];
  store: MediaStore;
  thumbnail: MediaStore;
};

export type View = {
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type ViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type ViewCollection = {
  __typename?: 'ViewCollection';
  affineTransformationViews: Array<AffineTransformationView>;
  channelViews: Array<ChannelView>;
  id: Scalars['ID']['output'];
  labelViews: Array<LabelView>;
  name: Scalars['String']['output'];
  /** Provenance entries for this camera */
  provenanceEntries: Array<ProvenanceEntry>;
  views: Array<View>;
};


export type ViewCollectionAffineTransformationViewsArgs = {
  filters?: InputMaybe<AffineTransformationViewFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type ViewCollectionProvenanceEntriesArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type ViewCollectionInput = {
  name: Scalars['String']['input'];
};

export type ViewFilter = {
  AND?: InputMaybe<ViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ViewFilter>;
  OR?: InputMaybe<ViewFilter>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ViewKind {
  AffineTransformation = 'AFFINE_TRANSFORMATION',
  Channel = 'CHANNEL',
  Histogram = 'HISTOGRAM',
  InstanceMaskView = 'INSTANCE_MASK_VIEW',
  Label = 'LABEL',
  MaskView = 'MASK_VIEW',
  Optics = 'OPTICS',
  Reference = 'REFERENCE',
  Timepoint = 'TIMEPOINT'
}

export type WellPositionView = View & {
  __typename?: 'WellPositionView';
  /** The accessor */
  accessor: Array<Scalars['String']['output']>;
  cMax?: Maybe<Scalars['Int']['output']>;
  cMin?: Maybe<Scalars['Int']['output']>;
  column?: Maybe<Scalars['Int']['output']>;
  /** All views of this image */
  congruentViews: Array<View>;
  id: Scalars['ID']['output'];
  image: Image;
  isGlobal: Scalars['Boolean']['output'];
  row?: Maybe<Scalars['Int']['output']>;
  tMax?: Maybe<Scalars['Int']['output']>;
  tMin?: Maybe<Scalars['Int']['output']>;
  well?: Maybe<MultiWellPlate>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  zMax?: Maybe<Scalars['Int']['output']>;
  zMin?: Maybe<Scalars['Int']['output']>;
};


export type WellPositionViewCongruentViewsArgs = {
  filters?: InputMaybe<ViewFilter>;
  types?: InputMaybe<Array<ViewKind>>;
};

export type WellPositionViewFilter = {
  AND?: InputMaybe<WellPositionViewFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<WellPositionViewFilter>;
  OR?: InputMaybe<WellPositionViewFilter>;
  column?: InputMaybe<Scalars['Int']['input']>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  row?: InputMaybe<Scalars['Int']['input']>;
  well?: InputMaybe<MultiWellPlateFilter>;
};

export type WellPositionViewInput = {
  /** The maximum c (channel) coordinate of the view */
  cMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum c (channel) coordinate of the view */
  cMin?: InputMaybe<Scalars['Int']['input']>;
  /** The collection this view belongs to */
  collection?: InputMaybe<Scalars['ID']['input']>;
  column?: InputMaybe<Scalars['Int']['input']>;
  image: Scalars['ID']['input'];
  row?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum t coordinate of the view */
  tMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum t coordinate of the view */
  tMin?: InputMaybe<Scalars['Int']['input']>;
  well?: InputMaybe<Scalars['ID']['input']>;
  /** The maximum x coordinate of the view */
  xMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum x coordinate of the view */
  xMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum y coordinate of the view */
  yMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum y coordinate of the view */
  yMin?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum z coordinate of the view */
  zMax?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum z coordinate of the view */
  zMin?: InputMaybe<Scalars['Int']['input']>;
};

export type ZarrStore = {
  __typename?: 'ZarrStore';
  /** The bucket where the data is stored. */
  bucket: Scalars['String']['output'];
  /** The chunks of the data. */
  chunks?: Maybe<Array<Scalars['Int']['output']>>;
  /** The dtype of the data. */
  dtype?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The key where the data is stored. */
  key: Scalars['String']['output'];
  /** The path to the data. Relative to the bucket. */
  path?: Maybe<Scalars['String']['output']>;
  /** Whether the zarr store was populated (e.g. was a dataset created). */
  populated: Scalars['Boolean']['output'];
  /** The shape of the data. */
  shape?: Maybe<Array<Scalars['Int']['output']>>;
  /** The version of the zarr store (e.g. the version of the dataset). */
  version: Scalars['String']['output'];
};

export type ZarrStoreFilter = {
  AND?: InputMaybe<ZarrStoreFilter>;
  DISTINCT?: InputMaybe<Scalars['Boolean']['input']>;
  NOT?: InputMaybe<ZarrStoreFilter>;
  OR?: InputMaybe<ZarrStoreFilter>;
  shape?: InputMaybe<IntFilterLookup>;
};

export type _Entity = File | Image | Table;

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String']['output'];
};

type Accessor_ImageAccessor_Fragment = { __typename?: 'ImageAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null };

type Accessor_LabelAccessor_Fragment = { __typename?: 'LabelAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null };

export type AccessorFragment = Accessor_ImageAccessor_Fragment | Accessor_LabelAccessor_Fragment;

export type LabelAccessorFragment = { __typename?: 'LabelAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null, maskView: { __typename?: 'MaskView', id: string } };

export type ImageAccessorFragment = { __typename?: 'ImageAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null };

export type CameraFragment = { __typename?: 'Camera', sensorSizeX?: number | null, sensorSizeY?: number | null, pixelSizeX?: any | null, pixelSizeY?: any | null, name: string, serialNumber: string };

export type CredentialsFragment = { __typename?: 'Credentials', accessKey: string, status: string, secretKey: string, bucket: string, key: string, sessionToken: string, store: string };

export type AccessCredentialsFragment = { __typename?: 'AccessCredentials', accessKey: string, secretKey: string, bucket: string, key: string, sessionToken: string, path: string };

export type PresignedPostCredentialsFragment = { __typename?: 'PresignedPostCredentials', xAmzAlgorithm: string, xAmzCredential: string, xAmzDate: string, xAmzSignature: string, key: string, bucket: string, datalayer: string, policy: string, store: string };

export type DatasetFragment = { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null };

export type ListDatasetFragment = { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean };

export type EraFragment = { __typename?: 'Era', id: string, begin?: any | null, name: string };

export type FileFragment = { __typename?: 'File', id: string, name: string, origins: Array<{ __typename?: 'Image', id: string }>, store: { __typename?: 'BigFileStore', id: string, key: string, bucket: string, path: string, presignedUrl: string }, views: Array<{ __typename?: 'FileView', id: string, seriesIdentifier?: string | null, image: { __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null } }>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, organization: { __typename?: 'Organization', slug: string } };

export type ListFileFragment = { __typename?: 'File', id: string, name: string };

export type ImageFragment = { __typename?: 'Image', id: string, name: string, pinned: boolean, createdAt: any, tags: Array<string>, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, views: Array<{ __typename?: 'AcquisitionView', id: string, description?: string | null, acquiredAt?: any | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, operator?: { __typename?: 'User', sub: string } | null } | { __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, stage: { __typename?: 'Stage', id: string, name: string } } | { __typename?: 'ChannelView', id: string, excitationWavelength?: number | null, emissionWavelength?: number | null, acquisitionMode?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, channelName?: string | null } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView', id: string, operation?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, originImage: { __typename?: 'Image', id: string, name: string } } | { __typename?: 'FileView', id: string, seriesIdentifier?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, file: { __typename?: 'File', id: string, name: string } } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } | { __typename?: 'LabelView' } | { __typename?: 'MaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } | { __typename?: 'OpticsView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, objective?: { __typename?: 'Objective', id: string, name: string, serialNumber: string } | null, camera?: { __typename?: 'Camera', id: string, name: string, serialNumber: string } | null, instrument?: { __typename?: 'Instrument', id: string, name: string, serialNumber: string } | null } | { __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> } | { __typename?: 'ROIView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, roi: { __typename?: 'ROI', id: string, name: string } } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView', id: string, msSinceStart?: any | null, indexSinceStart?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, era: { __typename?: 'Era', id: string, begin?: any | null, name: string } } | { __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null }>, derivedFromViews: Array<{ __typename?: 'DerivedView', image: { __typename?: 'Image', id: string, name: string } }>, renders: Array<{ __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | { __typename?: 'Video', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } }>, dataset?: { __typename?: 'Dataset', name: string, id: string } | null, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, creator?: { __typename?: 'User', sub: string } | null, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }>, rois: Array<{ __typename?: 'ROI', id: string, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string } }> };

export type RgbImageFragment = { __typename?: 'Image', name: string, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }> };

export type ListImageFragment = { __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null };

export type InstrumentFragment = { __typename?: 'Instrument', model?: string | null, name: string, serialNumber: string };

export type MeshFragment = { __typename?: 'Mesh', id: string, name: string, store: { __typename?: 'MeshStore', id: string, key: string, presignedUrl: string } };

export type ListMeshFragment = { __typename?: 'Mesh', id: string, name: string };

export type MultiWellPlateFragment = { __typename?: 'MultiWellPlate', id: string, name?: string | null, views: Array<{ __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null }> };

export type ListMultiWellPlateFragment = { __typename?: 'MultiWellPlate', id: string, name?: string | null };

export type ObjectiveFragment = { __typename?: 'Objective', na?: number | null, name: string, serialNumber: string };

export type ProvenanceEntryFragment = { __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> };

export type RgbContextFragment = { __typename?: 'RGBContext', id: string, pinned: boolean, name: string, z: number, t: number, c: number, blending: Blending, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> } };

export type ListRgbContextFragment = { __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> };

export type ListRoiFragment = { __typename?: 'ROI', id: string, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string } };

export type RoiFragment = { __typename?: 'ROI', id: string, pinned: boolean, createdAt: any, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }> }, creator?: { __typename?: 'User', sub: string } | null, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }> };

export type SnapshotFragment = { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } };

export type StageFragment = { __typename?: 'Stage', id: string, pinned: boolean, name: string, affineViews: Array<{ __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, image: { __typename?: 'Image', id: string, name: string, store: { __typename?: 'ZarrStore', shape?: Array<number> | null } }, stage: { __typename?: 'Stage', id: string, name: string } }> };

export type ListStageFragment = { __typename?: 'Stage', id: string, name: string };

export type ZarrStoreFragment = { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string };

export type ParquetStoreFragment = { __typename?: 'ParquetStore', id: string, key: string, bucket: string, path: string };

export type BigFileStoreFragment = { __typename?: 'BigFileStore', id: string, key: string, bucket: string, path: string, presignedUrl: string };

export type MediaStoreFragment = { __typename?: 'MediaStore', id: string, key: string, presignedUrl: string };

export type MeshStoreFragment = { __typename?: 'MeshStore', id: string, key: string, presignedUrl: string };

export type TableFragment = { __typename?: 'Table', id: string, name: string, origins: Array<{ __typename?: 'Image', id: string }>, store: { __typename?: 'ParquetStore', id: string, key: string, bucket: string, path: string }, columns: Array<{ __typename?: 'TableColumn', name: string, type: DuckDbDataType, accessors: Array<{ __typename?: 'ImageAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null } | { __typename?: 'LabelAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null, maskView: { __typename?: 'MaskView', id: string } }> }>, accessors: Array<{ __typename?: 'ImageAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null } | { __typename?: 'LabelAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null, maskView: { __typename?: 'MaskView', id: string } }> };

export type ListTableFragment = { __typename?: 'Table', id: string, name: string, origins: Array<{ __typename?: 'Image', id: string }>, store: { __typename?: 'ParquetStore', id: string, key: string, bucket: string, path: string } };

export type VideoFragment = { __typename?: 'Video', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } };

type View_AcquisitionView_Fragment = { __typename?: 'AcquisitionView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_AffineTransformationView_Fragment = { __typename?: 'AffineTransformationView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_ChannelView_Fragment = { __typename?: 'ChannelView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_ContinousScanView_Fragment = { __typename?: 'ContinousScanView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_DerivedView_Fragment = { __typename?: 'DerivedView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_FileView_Fragment = { __typename?: 'FileView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_HistogramView_Fragment = { __typename?: 'HistogramView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_InstanceMaskView_Fragment = { __typename?: 'InstanceMaskView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_LabelView_Fragment = { __typename?: 'LabelView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_MaskView_Fragment = { __typename?: 'MaskView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_OpticsView_Fragment = { __typename?: 'OpticsView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_RgbView_Fragment = { __typename?: 'RGBView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_RoiView_Fragment = { __typename?: 'ROIView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_ReferenceView_Fragment = { __typename?: 'ReferenceView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_ScaleView_Fragment = { __typename?: 'ScaleView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_TimepointView_Fragment = { __typename?: 'TimepointView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

type View_WellPositionView_Fragment = { __typename?: 'WellPositionView', xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

export type ViewFragment = View_AcquisitionView_Fragment | View_AffineTransformationView_Fragment | View_ChannelView_Fragment | View_ContinousScanView_Fragment | View_DerivedView_Fragment | View_FileView_Fragment | View_HistogramView_Fragment | View_InstanceMaskView_Fragment | View_LabelView_Fragment | View_MaskView_Fragment | View_OpticsView_Fragment | View_RgbView_Fragment | View_RoiView_Fragment | View_ReferenceView_Fragment | View_ScaleView_Fragment | View_TimepointView_Fragment | View_WellPositionView_Fragment;

export type ChannelViewFragment = { __typename?: 'ChannelView', id: string, excitationWavelength?: number | null, emissionWavelength?: number | null, acquisitionMode?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, channelName?: string | null };

export type DerivedViewFragment = { __typename?: 'DerivedView', id: string, operation?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, originImage: { __typename?: 'Image', id: string, name: string } };

export type RoiViewFragment = { __typename?: 'ROIView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, roi: { __typename?: 'ROI', id: string, name: string } };

export type FileViewFragment = { __typename?: 'FileView', id: string, seriesIdentifier?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, file: { __typename?: 'File', id: string, name: string } };

export type AffineTransformationViewFragment = { __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, stage: { __typename?: 'Stage', id: string, name: string } };

export type RgbViewFragment = { __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> };

export type TimepointViewFragment = { __typename?: 'TimepointView', id: string, msSinceStart?: any | null, indexSinceStart?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, era: { __typename?: 'Era', id: string, begin?: any | null, name: string } };

export type OpticsViewFragment = { __typename?: 'OpticsView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, objective?: { __typename?: 'Objective', id: string, name: string, serialNumber: string } | null, camera?: { __typename?: 'Camera', id: string, name: string, serialNumber: string } | null, instrument?: { __typename?: 'Instrument', id: string, name: string, serialNumber: string } | null };

export type MaskViewFragment = { __typename?: 'MaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } };

export type ReferenceViewFragment = { __typename?: 'ReferenceView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

export type InstanceMaskViewFragment = { __typename?: 'InstanceMaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } };

export type AcquisitionViewFragment = { __typename?: 'AcquisitionView', id: string, description?: string | null, acquiredAt?: any | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, operator?: { __typename?: 'User', sub: string } | null };

export type WellPositionViewFragment = { __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null };

export type ContinousScanViewFragment = { __typename?: 'ContinousScanView', id: string, direction: ScanDirection, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

export type HistogramViewFragment = { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null };

export type CreateCameraMutationVariables = Exact<{
  serialNumber: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pixelSizeX?: InputMaybe<Scalars['Micrometers']['input']>;
  pixelSizeY?: InputMaybe<Scalars['Micrometers']['input']>;
  sensorSizeX?: InputMaybe<Scalars['Int']['input']>;
  sensorSizeY?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateCameraMutation = { __typename?: 'Mutation', createCamera: { __typename?: 'Camera', id: string, name: string } };

export type EnsureCameraMutationVariables = Exact<{
  serialNumber: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pixelSizeX?: InputMaybe<Scalars['Micrometers']['input']>;
  pixelSizeY?: InputMaybe<Scalars['Micrometers']['input']>;
  sensorSizeX?: InputMaybe<Scalars['Int']['input']>;
  sensorSizeY?: InputMaybe<Scalars['Int']['input']>;
}>;


export type EnsureCameraMutation = { __typename?: 'Mutation', ensureCamera: { __typename?: 'Camera', id: string, name: string } };

export type CreateDatasetMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateDatasetMutation = { __typename?: 'Mutation', createDataset: { __typename?: 'Dataset', id: string, name: string } };

export type UpdateDatasetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateDatasetMutation = { __typename?: 'Mutation', updateDataset: { __typename?: 'Dataset', id: string, name: string } };

export type PinDatasetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
}>;


export type PinDatasetMutation = { __typename?: 'Mutation', pinDataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null } };

export type PutDatasetsInDatasetMutationVariables = Exact<{
  selfs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  other: Scalars['ID']['input'];
}>;


export type PutDatasetsInDatasetMutation = { __typename?: 'Mutation', putDatasetsInDataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null } };

export type ReleaseDatasetsFromDatasetMutationVariables = Exact<{
  selfs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  other: Scalars['ID']['input'];
}>;


export type ReleaseDatasetsFromDatasetMutation = { __typename?: 'Mutation', releaseDatasetsFromDataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null } };

export type PutImagesInDatasetMutationVariables = Exact<{
  selfs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  other: Scalars['ID']['input'];
}>;


export type PutImagesInDatasetMutation = { __typename?: 'Mutation', putImagesInDataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null } };

export type ReleaseImagesFromDatasetMutationVariables = Exact<{
  selfs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  other: Scalars['ID']['input'];
}>;


export type ReleaseImagesFromDatasetMutation = { __typename?: 'Mutation', releaseImagesFromDataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null } };

export type PutFilesInDatasetMutationVariables = Exact<{
  selfs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  other: Scalars['ID']['input'];
}>;


export type PutFilesInDatasetMutation = { __typename?: 'Mutation', putFilesInDataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null } };

export type ReleaseFilesFromDatasetMutationVariables = Exact<{
  selfs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  other: Scalars['ID']['input'];
}>;


export type ReleaseFilesFromDatasetMutation = { __typename?: 'Mutation', releaseFilesFromDataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null } };

export type RevertDatasetMutationVariables = Exact<{
  dataset: Scalars['ID']['input'];
  history: Scalars['ID']['input'];
}>;


export type RevertDatasetMutation = { __typename?: 'Mutation', revertDataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null } };

export type DeleteDatasetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteDatasetMutation = { __typename?: 'Mutation', deleteDataset: string };

export type CreateEraMutationVariables = Exact<{
  name: Scalars['String']['input'];
  begin?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type CreateEraMutation = { __typename?: 'Mutation', createEra: { __typename?: 'Era', id: string, begin?: any | null } };

export type From_File_LikeMutationVariables = Exact<{
  file: Scalars['FileLike']['input'];
  name: Scalars['String']['input'];
  origins?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  dataset?: InputMaybe<Scalars['ID']['input']>;
}>;


export type From_File_LikeMutation = { __typename?: 'Mutation', fromFileLike: { __typename?: 'File', id: string, name: string, origins: Array<{ __typename?: 'Image', id: string }>, store: { __typename?: 'BigFileStore', id: string, key: string, bucket: string, path: string, presignedUrl: string }, views: Array<{ __typename?: 'FileView', id: string, seriesIdentifier?: string | null, image: { __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null } }>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, organization: { __typename?: 'Organization', slug: string } } };

export type RequestFileUploadMutationVariables = Exact<{
  key: Scalars['String']['input'];
  datalayer: Scalars['String']['input'];
}>;


export type RequestFileUploadMutation = { __typename?: 'Mutation', requestFileUpload: { __typename?: 'Credentials', accessKey: string, status: string, secretKey: string, bucket: string, key: string, sessionToken: string, store: string } };

export type RequestFileUploadPresignedMutationVariables = Exact<{
  key: Scalars['String']['input'];
  datalayer: Scalars['String']['input'];
}>;


export type RequestFileUploadPresignedMutation = { __typename?: 'Mutation', requestFileUploadPresigned: { __typename?: 'PresignedPostCredentials', xAmzAlgorithm: string, xAmzCredential: string, xAmzDate: string, xAmzSignature: string, key: string, bucket: string, datalayer: string, policy: string, store: string } };

export type RequestFileAccessMutationVariables = Exact<{
  store: Scalars['ID']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RequestFileAccessMutation = { __typename?: 'Mutation', requestFileAccess: { __typename?: 'AccessCredentials', accessKey: string, secretKey: string, bucket: string, key: string, sessionToken: string, path: string } };

export type DeleteFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFileMutation = { __typename?: 'Mutation', deleteFile: string };

export type RequestUploadMutationVariables = Exact<{
  key: Scalars['String']['input'];
  datalayer: Scalars['String']['input'];
}>;


export type RequestUploadMutation = { __typename?: 'Mutation', requestUpload: { __typename?: 'Credentials', accessKey: string, status: string, secretKey: string, bucket: string, key: string, sessionToken: string, store: string } };

export type RequestAccessMutationVariables = Exact<{
  store: Scalars['ID']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RequestAccessMutation = { __typename?: 'Mutation', requestAccess: { __typename?: 'AccessCredentials', accessKey: string, secretKey: string, bucket: string, key: string, sessionToken: string, path: string } };

export type PinImageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
}>;


export type PinImageMutation = { __typename?: 'Mutation', pinImage: { __typename?: 'Image', id: string, name: string, pinned: boolean, createdAt: any, tags: Array<string>, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, views: Array<{ __typename?: 'AcquisitionView', id: string, description?: string | null, acquiredAt?: any | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, operator?: { __typename?: 'User', sub: string } | null } | { __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, stage: { __typename?: 'Stage', id: string, name: string } } | { __typename?: 'ChannelView', id: string, excitationWavelength?: number | null, emissionWavelength?: number | null, acquisitionMode?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, channelName?: string | null } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView', id: string, operation?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, originImage: { __typename?: 'Image', id: string, name: string } } | { __typename?: 'FileView', id: string, seriesIdentifier?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, file: { __typename?: 'File', id: string, name: string } } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } | { __typename?: 'LabelView' } | { __typename?: 'MaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } | { __typename?: 'OpticsView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, objective?: { __typename?: 'Objective', id: string, name: string, serialNumber: string } | null, camera?: { __typename?: 'Camera', id: string, name: string, serialNumber: string } | null, instrument?: { __typename?: 'Instrument', id: string, name: string, serialNumber: string } | null } | { __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> } | { __typename?: 'ROIView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, roi: { __typename?: 'ROI', id: string, name: string } } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView', id: string, msSinceStart?: any | null, indexSinceStart?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, era: { __typename?: 'Era', id: string, begin?: any | null, name: string } } | { __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null }>, derivedFromViews: Array<{ __typename?: 'DerivedView', image: { __typename?: 'Image', id: string, name: string } }>, renders: Array<{ __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | { __typename?: 'Video', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } }>, dataset?: { __typename?: 'Dataset', name: string, id: string } | null, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, creator?: { __typename?: 'User', sub: string } | null, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }>, rois: Array<{ __typename?: 'ROI', id: string, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string } }> } };

export type UpdateImageMutationVariables = Exact<{
  input: UpdateImageInput;
}>;


export type UpdateImageMutation = { __typename?: 'Mutation', updateImage: { __typename?: 'Image', id: string, name: string, pinned: boolean, createdAt: any, tags: Array<string>, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, views: Array<{ __typename?: 'AcquisitionView', id: string, description?: string | null, acquiredAt?: any | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, operator?: { __typename?: 'User', sub: string } | null } | { __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, stage: { __typename?: 'Stage', id: string, name: string } } | { __typename?: 'ChannelView', id: string, excitationWavelength?: number | null, emissionWavelength?: number | null, acquisitionMode?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, channelName?: string | null } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView', id: string, operation?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, originImage: { __typename?: 'Image', id: string, name: string } } | { __typename?: 'FileView', id: string, seriesIdentifier?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, file: { __typename?: 'File', id: string, name: string } } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } | { __typename?: 'LabelView' } | { __typename?: 'MaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } | { __typename?: 'OpticsView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, objective?: { __typename?: 'Objective', id: string, name: string, serialNumber: string } | null, camera?: { __typename?: 'Camera', id: string, name: string, serialNumber: string } | null, instrument?: { __typename?: 'Instrument', id: string, name: string, serialNumber: string } | null } | { __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> } | { __typename?: 'ROIView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, roi: { __typename?: 'ROI', id: string, name: string } } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView', id: string, msSinceStart?: any | null, indexSinceStart?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, era: { __typename?: 'Era', id: string, begin?: any | null, name: string } } | { __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null }>, derivedFromViews: Array<{ __typename?: 'DerivedView', image: { __typename?: 'Image', id: string, name: string } }>, renders: Array<{ __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | { __typename?: 'Video', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } }>, dataset?: { __typename?: 'Dataset', name: string, id: string } | null, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, creator?: { __typename?: 'User', sub: string } | null, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }>, rois: Array<{ __typename?: 'ROI', id: string, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string } }> } };

export type DeleteImageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', deleteImage: string };

export type CreateInstrumentMutationVariables = Exact<{
  serialNumber: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateInstrumentMutation = { __typename?: 'Mutation', createInstrument: { __typename?: 'Instrument', id: string, name: string } };

export type EnsureInstrumentMutationVariables = Exact<{
  serialNumber: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
}>;


export type EnsureInstrumentMutation = { __typename?: 'Mutation', ensureInstrument: { __typename?: 'Instrument', id: string, name: string } };

export type RequestMediaUploadMutationVariables = Exact<{
  key: Scalars['String']['input'];
  datalayer: Scalars['String']['input'];
}>;


export type RequestMediaUploadMutation = { __typename?: 'Mutation', requestMediaUpload: { __typename?: 'PresignedPostCredentials', xAmzAlgorithm: string, xAmzCredential: string, xAmzDate: string, xAmzSignature: string, key: string, bucket: string, datalayer: string, policy: string, store: string } };

export type CreateMultiWellPlateMutationVariables = Exact<{
  input: MultiWellPlateInput;
}>;


export type CreateMultiWellPlateMutation = { __typename?: 'Mutation', createMultiWellPlate: { __typename?: 'MultiWellPlate', id: string, name?: string | null, views: Array<{ __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null }> } };

export type AutoCreateMultiWellPlateMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type AutoCreateMultiWellPlateMutation = { __typename?: 'Mutation', result: { __typename?: 'MultiWellPlate', label?: string | null, value: string } };

export type CreateObjectiveMutationVariables = Exact<{
  serialNumber: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  na?: InputMaybe<Scalars['Float']['input']>;
  magnification?: InputMaybe<Scalars['Float']['input']>;
}>;


export type CreateObjectiveMutation = { __typename?: 'Mutation', createObjective: { __typename?: 'Objective', id: string, name: string } };

export type EnsureObjectiveMutationVariables = Exact<{
  serialNumber: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  na?: InputMaybe<Scalars['Float']['input']>;
  magnification?: InputMaybe<Scalars['Float']['input']>;
}>;


export type EnsureObjectiveMutation = { __typename?: 'Mutation', ensureObjective: { __typename?: 'Objective', id: string, name: string } };

export type AssignUserPermissionsMutationVariables = Exact<{
  input: AssignUserPermissionInput;
}>;


export type AssignUserPermissionsMutation = { __typename?: 'Mutation', assignUserPermission: Array<{ __typename?: 'UserObjectPermission', permission: string, user: { __typename?: 'User', sub: string } }> };

export type CreateRgbContextMutationVariables = Exact<{
  input: CreateRgbContextInput;
}>;


export type CreateRgbContextMutation = { __typename?: 'Mutation', createRgbContext: { __typename?: 'RGBContext', id: string, pinned: boolean, name: string, z: number, t: number, c: number, blending: Blending, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> } } };

export type UpdateRgbContextMutationVariables = Exact<{
  input: UpdateRgbContextInput;
}>;


export type UpdateRgbContextMutation = { __typename?: 'Mutation', updateRgbContext: { __typename?: 'RGBContext', id: string, pinned: boolean, name: string, z: number, t: number, c: number, blending: Blending, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> } } };

export type PinRoiMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
}>;


export type PinRoiMutation = { __typename?: 'Mutation', pinRoi: { __typename?: 'ROI', id: string, pinned: boolean, createdAt: any, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }> }, creator?: { __typename?: 'User', sub: string } | null, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }> } };

export type CreateRoiMutationVariables = Exact<{
  input: RoiInput;
}>;


export type CreateRoiMutation = { __typename?: 'Mutation', createRoi: { __typename?: 'ROI', id: string, pinned: boolean, createdAt: any, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }> }, creator?: { __typename?: 'User', sub: string } | null, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }> } };

export type DeleteRoiMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRoiMutation = { __typename?: 'Mutation', deleteRoi: string };

export type CreateSnapshotMutationVariables = Exact<{
  image: Scalars['ID']['input'];
  file: Scalars['ImageFileLike']['input'];
}>;


export type CreateSnapshotMutation = { __typename?: 'Mutation', createSnapshot: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } };

export type CreateStageMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateStageMutation = { __typename?: 'Mutation', createStage: { __typename?: 'Stage', id: string, name: string } };

export type PinStageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  pin: Scalars['Boolean']['input'];
}>;


export type PinStageMutation = { __typename?: 'Mutation', pinStage: { __typename?: 'Stage', id: string, pinned: boolean, name: string, affineViews: Array<{ __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, image: { __typename?: 'Image', id: string, name: string, store: { __typename?: 'ZarrStore', shape?: Array<number> | null } }, stage: { __typename?: 'Stage', id: string, name: string } }> } };

export type From_Parquet_LikeMutationVariables = Exact<{
  dataframe: Scalars['ParquetLike']['input'];
  name: Scalars['String']['input'];
  origins?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  dataset?: InputMaybe<Scalars['ID']['input']>;
}>;


export type From_Parquet_LikeMutation = { __typename?: 'Mutation', fromParquetLike: { __typename?: 'Table', id: string, name: string, origins: Array<{ __typename?: 'Image', id: string }>, store: { __typename?: 'ParquetStore', id: string, key: string, bucket: string, path: string }, columns: Array<{ __typename?: 'TableColumn', name: string, type: DuckDbDataType, accessors: Array<{ __typename?: 'ImageAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null } | { __typename?: 'LabelAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null, maskView: { __typename?: 'MaskView', id: string } }> }>, accessors: Array<{ __typename?: 'ImageAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null } | { __typename?: 'LabelAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null, maskView: { __typename?: 'MaskView', id: string } }> } };

export type RequestTableUploadMutationVariables = Exact<{
  key: Scalars['String']['input'];
  datalayer: Scalars['String']['input'];
}>;


export type RequestTableUploadMutation = { __typename?: 'Mutation', requestTableUpload: { __typename?: 'Credentials', accessKey: string, status: string, secretKey: string, bucket: string, key: string, sessionToken: string, store: string } };

export type RequestTableAccessMutationVariables = Exact<{
  store: Scalars['ID']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RequestTableAccessMutation = { __typename?: 'Mutation', requestTableAccess: { __typename?: 'AccessCredentials', accessKey: string, secretKey: string, bucket: string, key: string, sessionToken: string, path: string } };

export type CreateAffineTransformationViewMutationVariables = Exact<{
  image: Scalars['ID']['input'];
  affineMatrix: Scalars['FourByFourMatrix']['input'];
  stage?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateAffineTransformationViewMutation = { __typename?: 'Mutation', createAffineTransformationView: { __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, stage: { __typename?: 'Stage', id: string, name: string } } };

export type DeleteAffineTransformationViewMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAffineTransformationViewMutation = { __typename?: 'Mutation', deleteAffineTransformationView: string };

export type DeleteRgbViewMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRgbViewMutation = { __typename?: 'Mutation', deleteRgbView: string };

export type DeleteChannelViewMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteChannelViewMutation = { __typename?: 'Mutation', deleteChannelView: string };

export type DeleteHistogramViewMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteHistogramViewMutation = { __typename?: 'Mutation', deleteHistogramView: string };

export type CreateRgbViewMutationVariables = Exact<{
  image: Scalars['ID']['input'];
  context: Scalars['ID']['input'];
  gamma?: InputMaybe<Scalars['Float']['input']>;
  contrastLimitMax?: InputMaybe<Scalars['Float']['input']>;
  contrastLimitMin?: InputMaybe<Scalars['Float']['input']>;
  rescale?: InputMaybe<Scalars['Boolean']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  colorMap?: InputMaybe<ColorMap>;
}>;


export type CreateRgbViewMutation = { __typename?: 'Mutation', createRgbView: { __typename?: 'RGBView', id: string } };

export type CreateWellPositionViewMutationVariables = Exact<{
  input: WellPositionViewInput;
}>;


export type CreateWellPositionViewMutation = { __typename?: 'Mutation', createWellPositionView: { __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null } };

export type CreateContinousScanViewMutationVariables = Exact<{
  input: ContinousScanViewInput;
}>;


export type CreateContinousScanViewMutation = { __typename?: 'Mutation', createContinousScanView: { __typename?: 'ContinousScanView', id: string, direction: ScanDirection, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } };

export type CreateMaskViewMutationVariables = Exact<{
  input: MaskViewInput;
}>;


export type CreateMaskViewMutation = { __typename?: 'Mutation', createMaskView: { __typename?: 'MaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } };

export type CreateInstanceMaskViewMutationVariables = Exact<{
  input: InstanceMaskViewInput;
}>;


export type CreateInstanceMaskViewMutation = { __typename?: 'Mutation', createInstanceMaskView: { __typename?: 'InstanceMaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } };

export type UpdateRgbViewMutationVariables = Exact<{
  input: UpdateRgbViewInput;
}>;


export type UpdateRgbViewMutation = { __typename?: 'Mutation', updateRgbView: { __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> } };

export type CreateViewCollectionMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateViewCollectionMutation = { __typename?: 'Mutation', createViewCollection: { __typename?: 'ViewCollection', id: string, name: string } };

export type GetCameraQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCameraQuery = { __typename?: 'Query', camera: { __typename?: 'Camera', sensorSizeX?: number | null, sensorSizeY?: number | null, pixelSizeX?: any | null, pixelSizeY?: any | null, name: string, serialNumber: string } };

export type ChildrenQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  pagination?: InputMaybe<ChildrenPaginationInput>;
}>;


export type ChildrenQuery = { __typename?: 'Query', children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean } | { __typename?: 'File', id: string, name: string } | { __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }> };

export type GetDatasetQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetDatasetQuery = { __typename?: 'Query', dataset: { __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean, pinned: boolean, createdAt: any, tags: Array<string>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files: Array<{ __typename?: 'File', id: string, name: string }>, children: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }>, creator?: { __typename?: 'User', sub: string } | null } };

export type GetDatasetsQueryVariables = Exact<{
  filters?: InputMaybe<DatasetFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GetDatasetsQuery = { __typename?: 'Query', datasets: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }> };

export type GetFileQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetFileQuery = { __typename?: 'Query', file: { __typename?: 'File', id: string, name: string, origins: Array<{ __typename?: 'Image', id: string }>, store: { __typename?: 'BigFileStore', id: string, key: string, bucket: string, path: string, presignedUrl: string }, views: Array<{ __typename?: 'FileView', id: string, seriesIdentifier?: string | null, image: { __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null } }>, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, organization: { __typename?: 'Organization', slug: string } } };

export type GetFilesQueryVariables = Exact<{
  filters?: InputMaybe<FileFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GetFilesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'File', id: string, name: string }> };

export type GlobalSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  noImages: Scalars['Boolean']['input'];
  noFiles: Scalars['Boolean']['input'];
  noDatasets: Scalars['Boolean']['input'];
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GlobalSearchQuery = { __typename?: 'Query', images?: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }>, files?: Array<{ __typename?: 'File', id: string, name: string }>, datasets?: Array<{ __typename?: 'Dataset', id: string, name: string, description?: string | null, isDefault: boolean }> };

export type ImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ImagesQuery = { __typename?: 'Query', images: Array<{ __typename?: 'Image', id: string }> };

export type GetImageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetImageQuery = { __typename?: 'Query', image: { __typename?: 'Image', id: string, name: string, pinned: boolean, createdAt: any, tags: Array<string>, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, views: Array<{ __typename?: 'AcquisitionView', id: string, description?: string | null, acquiredAt?: any | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, operator?: { __typename?: 'User', sub: string } | null } | { __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, stage: { __typename?: 'Stage', id: string, name: string } } | { __typename?: 'ChannelView', id: string, excitationWavelength?: number | null, emissionWavelength?: number | null, acquisitionMode?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, channelName?: string | null } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView', id: string, operation?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, originImage: { __typename?: 'Image', id: string, name: string } } | { __typename?: 'FileView', id: string, seriesIdentifier?: string | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, file: { __typename?: 'File', id: string, name: string } } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } | { __typename?: 'LabelView' } | { __typename?: 'MaskView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, referenceView: { __typename?: 'ReferenceView', id: string, image: { __typename?: 'Image', id: string, name: string } } } | { __typename?: 'OpticsView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, objective?: { __typename?: 'Objective', id: string, name: string, serialNumber: string } | null, camera?: { __typename?: 'Camera', id: string, name: string, serialNumber: string } | null, instrument?: { __typename?: 'Instrument', id: string, name: string, serialNumber: string } | null } | { __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> } | { __typename?: 'ROIView', id: string, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, roi: { __typename?: 'ROI', id: string, name: string } } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView', id: string, msSinceStart?: any | null, indexSinceStart?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, era: { __typename?: 'Era', id: string, begin?: any | null, name: string } } | { __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null }>, derivedFromViews: Array<{ __typename?: 'DerivedView', image: { __typename?: 'Image', id: string, name: string } }>, renders: Array<{ __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | { __typename?: 'Video', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } }>, dataset?: { __typename?: 'Dataset', name: string, id: string } | null, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }>, creator?: { __typename?: 'User', sub: string } | null, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }>, rois: Array<{ __typename?: 'ROI', id: string, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string } }> } };

export type GetImagesQueryVariables = Exact<{
  filters?: InputMaybe<ImageFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
  order?: InputMaybe<ImageOrder>;
}>;


export type GetImagesQuery = { __typename?: 'Query', images: Array<{ __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null }> };

export type GetInstrumentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetInstrumentQuery = { __typename?: 'Query', instrument: { __typename?: 'Instrument', model?: string | null, name: string, serialNumber: string } };

export type DetailMeshQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DetailMeshQuery = { __typename?: 'Query', mesh: { __typename?: 'Mesh', id: string, name: string, store: { __typename?: 'MeshStore', id: string, key: string, presignedUrl: string } } };

export type ListMeshesQueryVariables = Exact<{
  filters?: InputMaybe<MeshFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type ListMeshesQuery = { __typename?: 'Query', meshes: Array<{ __typename?: 'Mesh', id: string, name: string }> };

export type GetMultiWellPlateQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMultiWellPlateQuery = { __typename?: 'Query', multiWellPlate: { __typename?: 'MultiWellPlate', id: string, name?: string | null, views: Array<{ __typename?: 'WellPositionView', id: string, column?: number | null, row?: number | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, well?: { __typename?: 'MultiWellPlate', id: string, rows?: number | null, columns?: number | null, name?: string | null } | null }> } };

export type GetMultiWellPlatesQueryVariables = Exact<{
  filters?: InputMaybe<MultiWellPlateFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GetMultiWellPlatesQuery = { __typename?: 'Query', multiWellPlates: Array<{ __typename?: 'MultiWellPlate', id: string, name?: string | null }> };

export type MultiWellPlateOptionsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type MultiWellPlateOptionsQuery = { __typename?: 'Query', options: Array<{ __typename?: 'MultiWellPlate', value: string, label?: string | null }> };

export type GetObjectiveQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetObjectiveQuery = { __typename?: 'Query', objective: { __typename?: 'Objective', na?: number | null, name: string, serialNumber: string } };

export type GetPermissionsQueryVariables = Exact<{
  identifier: Scalars['String']['input'];
  object: Scalars['ID']['input'];
}>;


export type GetPermissionsQuery = { __typename?: 'Query', permissions: Array<{ __typename?: 'UserObjectPermission', permission: string, user: { __typename?: 'User', sub: string } }> };

export type PermissionOptionsQueryVariables = Exact<{
  identifier: Scalars['String']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type PermissionOptionsQuery = { __typename?: 'Query', options: Array<{ __typename?: 'PermissionOption', value: string, label: string }> };

export type GetMaskedPixelInfoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMaskedPixelInfoQuery = { __typename?: 'Query', maskedPixelInfo: { __typename?: 'MaskedPixelInfo', label: string } };

export type GetRgbContextQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRgbContextQuery = { __typename?: 'Query', rgbcontext: { __typename?: 'RGBContext', id: string, pinned: boolean, name: string, z: number, t: number, c: number, blending: Blending, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> } } };

export type GetRgbContextsQueryVariables = Exact<{
  filters?: InputMaybe<RgbContextFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GetRgbContextsQuery = { __typename?: 'Query', rgbcontexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }> };

export type RgbContextOptionsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type RgbContextOptionsQuery = { __typename?: 'Query', options: Array<{ __typename?: 'RGBContext', value: string, label: string }> };

export type GetRoiQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRoiQuery = { __typename?: 'Query', roi: { __typename?: 'ROI', id: string, pinned: boolean, createdAt: any, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string, rgbContexts: Array<{ __typename?: 'RGBContext', id: string, name: string, blending: Blending, t: number, z: number, c: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, views: Array<{ __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> }> }> }, creator?: { __typename?: 'User', sub: string } | null, provenanceEntries: Array<{ __typename?: 'ProvenanceEntry', id: string, during?: string | null, kind: HistoryKind, date: any, user?: { __typename?: 'User', sub: string } | null, client?: { __typename?: 'Client', clientId: string } | null, effectiveChanges: Array<{ __typename?: 'ModelChange', field: string, oldValue?: string | null, newValue?: string | null }> }> } };

export type GetRoIsQueryVariables = Exact<{
  filters?: InputMaybe<RoiFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
  order?: InputMaybe<RoiOrder>;
}>;


export type GetRoIsQuery = { __typename?: 'Query', rois: Array<{ __typename?: 'ROI', id: string, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string } }> };

export type RowsQueryVariables = Exact<{
  table: Scalars['ID']['input'];
  filters?: InputMaybe<RowFilter>;
  pagination?: InputMaybe<TablePaginationInput>;
}>;


export type RowsQuery = { __typename?: 'Query', rows: Array<any> };

export type GetStageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetStageQuery = { __typename?: 'Query', stage: { __typename?: 'Stage', id: string, pinned: boolean, name: string, affineViews: Array<{ __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, image: { __typename?: 'Image', id: string, name: string, store: { __typename?: 'ZarrStore', shape?: Array<number> | null } }, stage: { __typename?: 'Stage', id: string, name: string } }> } };

export type GetStagesQueryVariables = Exact<{
  filters?: InputMaybe<StageFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GetStagesQuery = { __typename?: 'Query', stages: Array<{ __typename?: 'Stage', id: string, name: string }> };

export type StageOptionsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type StageOptionsQuery = { __typename?: 'Query', options: Array<{ __typename?: 'Stage', value: string, label: string }> };

export type GetTableQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTableQuery = { __typename?: 'Query', table: { __typename?: 'Table', id: string, name: string, origins: Array<{ __typename?: 'Image', id: string }>, store: { __typename?: 'ParquetStore', id: string, key: string, bucket: string, path: string }, columns: Array<{ __typename?: 'TableColumn', name: string, type: DuckDbDataType, accessors: Array<{ __typename?: 'ImageAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null } | { __typename?: 'LabelAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null, maskView: { __typename?: 'MaskView', id: string } }> }>, accessors: Array<{ __typename?: 'ImageAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null } | { __typename?: 'LabelAccessor', id: string, keys: Array<string>, minIndex?: number | null, maxIndex?: number | null, maskView: { __typename?: 'MaskView', id: string } }> } };

export type GetTablesQueryVariables = Exact<{
  filters?: InputMaybe<TableFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type GetTablesQuery = { __typename?: 'Query', tables: Array<{ __typename?: 'Table', id: string, name: string, origins: Array<{ __typename?: 'Image', id: string }>, store: { __typename?: 'ParquetStore', id: string, key: string, bucket: string, path: string } }> };

export type GetRgbViewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRgbViewQuery = { __typename?: 'Query', rgbView: { __typename?: 'RGBView', id: string, name: string, colorMap: ColorMap, contrastLimitMin?: number | null, contrastLimitMax?: number | null, gamma?: number | null, active: boolean, fullColour: string, baseColor?: Array<number> | null, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, contexts: Array<{ __typename?: 'RGBContext', id: string, name: string }>, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string }, derivedScaleViews: Array<{ __typename?: 'ScaleView', id: string, scaleX: number, scaleY: number, scaleZ: number, scaleT: number, scaleC: number, image: { __typename?: 'Image', id: string, store: { __typename?: 'ZarrStore', id: string, key: string, bucket: string, path?: string | null, shape?: Array<number> | null, dtype?: string | null, chunks?: Array<number> | null, version: string } } }> }, congruentViews: Array<{ __typename?: 'AcquisitionView' } | { __typename?: 'AffineTransformationView' } | { __typename?: 'ChannelView' } | { __typename?: 'ContinousScanView' } | { __typename?: 'DerivedView' } | { __typename?: 'FileView' } | { __typename?: 'HistogramView', id: string, bins: Array<number>, min: number, max: number, histogram: Array<number>, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null } | { __typename?: 'InstanceMaskView' } | { __typename?: 'LabelView' } | { __typename?: 'MaskView' } | { __typename?: 'OpticsView' } | { __typename?: 'RGBView' } | { __typename?: 'ROIView' } | { __typename?: 'ReferenceView' } | { __typename?: 'ScaleView' } | { __typename?: 'TimepointView' } | { __typename?: 'WellPositionView' }> } };

export type SearchRgbViewsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type SearchRgbViewsQuery = { __typename?: 'Query', options: Array<{ __typename?: 'RGBView', value: string, label: string }> };

export type WatchImagesSubscriptionVariables = Exact<{
  dataset?: InputMaybe<Scalars['ID']['input']>;
}>;


export type WatchImagesSubscription = { __typename?: 'Subscription', images: { __typename?: 'ImageEvent', delete?: string | null, create?: { __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null } | null, update?: { __typename?: 'Image', id: string, name: string, latestSnapshot?: { __typename?: 'Snapshot', id: string, store: { __typename?: 'MediaStore', key: string, presignedUrl: string } } | null } | null } };

export type WatchRoisSubscriptionVariables = Exact<{
  image: Scalars['ID']['input'];
}>;


export type WatchRoisSubscription = { __typename?: 'Subscription', rois: { __typename?: 'RoiEvent', delete?: string | null, create?: { __typename?: 'ROI', id: string, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string } } | null, update?: { __typename?: 'ROI', id: string, kind: RoiKind, vectors: Array<any>, image: { __typename?: 'Image', id: string, name: string } } | null } };

export type WatchTransformationViewsSubscriptionVariables = Exact<{
  stage: Scalars['ID']['input'];
}>;


export type WatchTransformationViewsSubscription = { __typename?: 'Subscription', affineTransformationViews: { __typename?: 'AffineTransformationViewEvent', delete?: string | null, create?: { __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, image: { __typename?: 'Image', id: string, name: string, store: { __typename?: 'ZarrStore', shape?: Array<number> | null } }, stage: { __typename?: 'Stage', id: string, name: string } } | null, update?: { __typename?: 'AffineTransformationView', id: string, affineMatrix: any, xMin?: number | null, xMax?: number | null, yMin?: number | null, yMax?: number | null, tMin?: number | null, tMax?: number | null, cMin?: number | null, cMax?: number | null, zMin?: number | null, zMax?: number | null, image: { __typename?: 'Image', id: string, name: string, store: { __typename?: 'ZarrStore', shape?: Array<number> | null } }, stage: { __typename?: 'Stage', id: string, name: string } } | null } };

export const CameraFragmentDoc = gql`
    fragment Camera on Camera {
  sensorSizeX
  sensorSizeY
  pixelSizeX
  pixelSizeY
  name
  serialNumber
}
    `;
export const CredentialsFragmentDoc = gql`
    fragment Credentials on Credentials {
  accessKey
  status
  secretKey
  bucket
  key
  sessionToken
  store
}
    `;
export const AccessCredentialsFragmentDoc = gql`
    fragment AccessCredentials on AccessCredentials {
  accessKey
  secretKey
  bucket
  key
  sessionToken
  path
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
export const ProvenanceEntryFragmentDoc = gql`
    fragment ProvenanceEntry on ProvenanceEntry {
  id
  during
  kind
  user {
    sub
  }
  client {
    clientId
  }
  date
  effectiveChanges {
    field
    oldValue
    newValue
  }
}
    `;
export const ListImageFragmentDoc = gql`
    fragment ListImage on Image {
  latestSnapshot {
    id
    store {
      key
      presignedUrl
    }
  }
  id
  name
}
    `;
export const ListFileFragmentDoc = gql`
    fragment ListFile on File {
  id
  name
}
    `;
export const ListDatasetFragmentDoc = gql`
    fragment ListDataset on Dataset {
  id
  name
  description
  isDefault
}
    `;
export const DatasetFragmentDoc = gql`
    fragment Dataset on Dataset {
  id
  name
  description
  provenanceEntries {
    ...ProvenanceEntry
  }
  images {
    ...ListImage
  }
  files {
    ...ListFile
  }
  children {
    ...ListDataset
  }
  isDefault
  pinned
  createdAt
  creator {
    sub
  }
  tags
}
    ${ProvenanceEntryFragmentDoc}
${ListImageFragmentDoc}
${ListFileFragmentDoc}
${ListDatasetFragmentDoc}`;
export const BigFileStoreFragmentDoc = gql`
    fragment BigFileStore on BigFileStore {
  id
  key
  bucket
  path
  presignedUrl
}
    `;
export const FileFragmentDoc = gql`
    fragment File on File {
  origins {
    id
  }
  id
  name
  store {
    ...BigFileStore
  }
  views {
    id
    seriesIdentifier
    image {
      ...ListImage
    }
  }
  provenanceEntries {
    ...ProvenanceEntry
  }
  organization {
    slug
  }
}
    ${BigFileStoreFragmentDoc}
${ListImageFragmentDoc}
${ProvenanceEntryFragmentDoc}`;
export const ZarrStoreFragmentDoc = gql`
    fragment ZarrStore on ZarrStore {
  id
  key
  bucket
  path
  shape
  dtype
  chunks
  version
}
    `;
export const ViewFragmentDoc = gql`
    fragment View on View {
  xMin
  xMax
  yMin
  yMax
  tMin
  tMax
  cMin
  cMax
  zMin
  zMax
}
    `;
export const ChannelViewFragmentDoc = gql`
    fragment ChannelView on ChannelView {
  ...View
  id
  channelName: name
  excitationWavelength
  emissionWavelength
  acquisitionMode
}
    ${ViewFragmentDoc}`;
export const AffineTransformationViewFragmentDoc = gql`
    fragment AffineTransformationView on AffineTransformationView {
  ...View
  id
  affineMatrix
  stage {
    id
    name
  }
}
    ${ViewFragmentDoc}`;
export const MaskViewFragmentDoc = gql`
    fragment MaskView on MaskView {
  ...View
  id
  referenceView {
    id
    image {
      id
      name
    }
  }
}
    ${ViewFragmentDoc}`;
export const InstanceMaskViewFragmentDoc = gql`
    fragment InstanceMaskView on InstanceMaskView {
  ...View
  id
  referenceView {
    id
    image {
      id
      name
    }
  }
}
    ${ViewFragmentDoc}`;
export const EraFragmentDoc = gql`
    fragment Era on Era {
  id
  begin
  name
}
    `;
export const TimepointViewFragmentDoc = gql`
    fragment TimepointView on TimepointView {
  ...View
  id
  msSinceStart
  indexSinceStart
  era {
    ...Era
  }
}
    ${ViewFragmentDoc}
${EraFragmentDoc}`;
export const OpticsViewFragmentDoc = gql`
    fragment OpticsView on OpticsView {
  ...View
  id
  objective {
    id
    name
    serialNumber
  }
  camera {
    id
    name
    serialNumber
  }
  instrument {
    id
    name
    serialNumber
  }
}
    ${ViewFragmentDoc}`;
export const AcquisitionViewFragmentDoc = gql`
    fragment AcquisitionView on AcquisitionView {
  ...View
  id
  description
  acquiredAt
  operator {
    sub
  }
}
    ${ViewFragmentDoc}`;
export const HistogramViewFragmentDoc = gql`
    fragment HistogramView on HistogramView {
  ...View
  id
  bins
  min
  max
  histogram
}
    ${ViewFragmentDoc}`;
export const RgbViewFragmentDoc = gql`
    fragment RGBView on RGBView {
  ...View
  id
  contexts {
    id
    name
  }
  name
  image {
    id
    store {
      ...ZarrStore
    }
    derivedScaleViews {
      id
      image {
        id
        store {
          ...ZarrStore
        }
      }
      scaleX
      scaleY
      scaleZ
      scaleT
      scaleC
    }
  }
  congruentViews(types: [HISTOGRAM]) {
    ...HistogramView
  }
  colorMap
  contrastLimitMin
  contrastLimitMax
  gamma
  active
  fullColour
  baseColor
}
    ${ViewFragmentDoc}
${ZarrStoreFragmentDoc}
${HistogramViewFragmentDoc}`;
export const WellPositionViewFragmentDoc = gql`
    fragment WellPositionView on WellPositionView {
  ...View
  id
  column
  row
  well {
    id
    rows
    columns
    name
  }
}
    ${ViewFragmentDoc}`;
export const DerivedViewFragmentDoc = gql`
    fragment DerivedView on DerivedView {
  ...View
  id
  originImage {
    id
    name
  }
  operation
}
    ${ViewFragmentDoc}`;
export const RoiViewFragmentDoc = gql`
    fragment ROIView on ROIView {
  ...View
  id
  roi {
    id
    name
  }
}
    ${ViewFragmentDoc}`;
export const FileViewFragmentDoc = gql`
    fragment FileView on FileView {
  ...View
  id
  seriesIdentifier
  file {
    id
    name
  }
}
    ${ViewFragmentDoc}`;
export const SnapshotFragmentDoc = gql`
    fragment Snapshot on Snapshot {
  id
  store {
    key
    presignedUrl
  }
}
    `;
export const VideoFragmentDoc = gql`
    fragment Video on Video {
  id
  store {
    key
    presignedUrl
  }
}
    `;
export const ListRgbContextFragmentDoc = gql`
    fragment ListRGBContext on RGBContext {
  image {
    id
    store {
      ...ZarrStore
    }
    derivedScaleViews {
      id
      image {
        id
        store {
          ...ZarrStore
        }
      }
      scaleX
      scaleY
      scaleZ
      scaleT
      scaleC
    }
  }
  id
  name
  views {
    ...RGBView
  }
  blending
  t
  z
  c
}
    ${ZarrStoreFragmentDoc}
${RgbViewFragmentDoc}`;
export const ListRoiFragmentDoc = gql`
    fragment ListROI on ROI {
  id
  image {
    id
    name
  }
  kind
  vectors
}
    `;
export const ImageFragmentDoc = gql`
    fragment Image on Image {
  id
  name
  store {
    ...ZarrStore
  }
  views {
    ...ChannelView
    ...AffineTransformationView
    ...MaskView
    ...InstanceMaskView
    ...TimepointView
    ...OpticsView
    ...AcquisitionView
    ...RGBView
    ...WellPositionView
    ...DerivedView
    ...ROIView
    ...FileView
    ...HistogramView
  }
  derivedFromViews {
    image {
      id
      name
    }
  }
  pinned
  renders {
    ...Snapshot
    ...Video
  }
  dataset {
    name
    id
  }
  createdAt
  provenanceEntries {
    ...ProvenanceEntry
  }
  creator {
    sub
  }
  tags
  rgbContexts {
    ...ListRGBContext
  }
  rois {
    ...ListROI
  }
}
    ${ZarrStoreFragmentDoc}
${ChannelViewFragmentDoc}
${AffineTransformationViewFragmentDoc}
${MaskViewFragmentDoc}
${InstanceMaskViewFragmentDoc}
${TimepointViewFragmentDoc}
${OpticsViewFragmentDoc}
${AcquisitionViewFragmentDoc}
${RgbViewFragmentDoc}
${WellPositionViewFragmentDoc}
${DerivedViewFragmentDoc}
${RoiViewFragmentDoc}
${FileViewFragmentDoc}
${HistogramViewFragmentDoc}
${SnapshotFragmentDoc}
${VideoFragmentDoc}
${ProvenanceEntryFragmentDoc}
${ListRgbContextFragmentDoc}
${ListRoiFragmentDoc}`;
export const InstrumentFragmentDoc = gql`
    fragment Instrument on Instrument {
  model
  name
  serialNumber
}
    `;
export const MeshStoreFragmentDoc = gql`
    fragment MeshStore on MeshStore {
  id
  key
  presignedUrl
}
    `;
export const MeshFragmentDoc = gql`
    fragment Mesh on Mesh {
  id
  name
  store {
    ...MeshStore
  }
}
    ${MeshStoreFragmentDoc}`;
export const ListMeshFragmentDoc = gql`
    fragment ListMesh on Mesh {
  id
  name
}
    `;
export const MultiWellPlateFragmentDoc = gql`
    fragment MultiWellPlate on MultiWellPlate {
  id
  views {
    ...WellPositionView
  }
  name
}
    ${WellPositionViewFragmentDoc}`;
export const ListMultiWellPlateFragmentDoc = gql`
    fragment ListMultiWellPlate on MultiWellPlate {
  id
  name
}
    `;
export const ObjectiveFragmentDoc = gql`
    fragment Objective on Objective {
  na
  name
  serialNumber
}
    `;
export const RgbContextFragmentDoc = gql`
    fragment RGBContext on RGBContext {
  id
  views {
    ...RGBView
  }
  image {
    id
    store {
      ...ZarrStore
    }
    derivedScaleViews {
      id
      image {
        id
        store {
          ...ZarrStore
        }
      }
      scaleX
      scaleY
      scaleZ
      scaleT
      scaleC
    }
  }
  pinned
  name
  z
  t
  c
  blending
}
    ${RgbViewFragmentDoc}
${ZarrStoreFragmentDoc}`;
export const RgbImageFragmentDoc = gql`
    fragment RGBImage on Image {
  name
  rgbContexts {
    ...ListRGBContext
  }
}
    ${ListRgbContextFragmentDoc}`;
export const RoiFragmentDoc = gql`
    fragment ROI on ROI {
  id
  pinned
  image {
    id
    ...RGBImage
  }
  createdAt
  creator {
    sub
  }
  provenanceEntries {
    ...ProvenanceEntry
  }
  kind
  vectors
}
    ${RgbImageFragmentDoc}
${ProvenanceEntryFragmentDoc}`;
export const StageFragmentDoc = gql`
    fragment Stage on Stage {
  id
  affineViews {
    ...AffineTransformationView
    image {
      id
      store {
        shape
      }
      name
    }
  }
  pinned
  name
}
    ${AffineTransformationViewFragmentDoc}`;
export const ListStageFragmentDoc = gql`
    fragment ListStage on Stage {
  id
  name
}
    `;
export const MediaStoreFragmentDoc = gql`
    fragment MediaStore on MediaStore {
  id
  key
  presignedUrl
}
    `;
export const ParquetStoreFragmentDoc = gql`
    fragment ParquetStore on ParquetStore {
  id
  key
  bucket
  path
}
    `;
export const AccessorFragmentDoc = gql`
    fragment Accessor on Accessor {
  id
  keys
  minIndex
  maxIndex
}
    `;
export const ImageAccessorFragmentDoc = gql`
    fragment ImageAccessor on ImageAccessor {
  ...Accessor
  id
}
    ${AccessorFragmentDoc}`;
export const LabelAccessorFragmentDoc = gql`
    fragment LabelAccessor on LabelAccessor {
  ...Accessor
  maskView {
    id
  }
}
    ${AccessorFragmentDoc}`;
export const TableFragmentDoc = gql`
    fragment Table on Table {
  origins {
    id
  }
  id
  name
  store {
    ...ParquetStore
  }
  columns {
    name
    type
    accessors {
      ...Accessor
      ...ImageAccessor
      ...LabelAccessor
    }
  }
  accessors {
    ...ImageAccessor
    ...LabelAccessor
  }
}
    ${ParquetStoreFragmentDoc}
${AccessorFragmentDoc}
${ImageAccessorFragmentDoc}
${LabelAccessorFragmentDoc}`;
export const ListTableFragmentDoc = gql`
    fragment ListTable on Table {
  origins {
    id
  }
  id
  name
  store {
    ...ParquetStore
  }
}
    ${ParquetStoreFragmentDoc}`;
export const ReferenceViewFragmentDoc = gql`
    fragment ReferenceView on ReferenceView {
  ...View
  id
}
    ${ViewFragmentDoc}`;
export const ContinousScanViewFragmentDoc = gql`
    fragment ContinousScanView on ContinousScanView {
  ...View
  id
  direction
}
    ${ViewFragmentDoc}`;
export const CreateCameraDocument = gql`
    mutation CreateCamera($serialNumber: String!, $name: String, $pixelSizeX: Micrometers, $pixelSizeY: Micrometers, $sensorSizeX: Int, $sensorSizeY: Int) {
  createCamera(
    input: {name: $name, pixelSizeX: $pixelSizeX, serialNumber: $serialNumber, pixelSizeY: $pixelSizeY, sensorSizeX: $sensorSizeX, sensorSizeY: $sensorSizeY}
  ) {
    id
    name
  }
}
    `;
export type CreateCameraMutationFn = Apollo.MutationFunction<CreateCameraMutation, CreateCameraMutationVariables>;

/**
 * __useCreateCameraMutation__
 *
 * To run a mutation, you first call `useCreateCameraMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCameraMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCameraMutation, { data, loading, error }] = useCreateCameraMutation({
 *   variables: {
 *      serialNumber: // value for 'serialNumber'
 *      name: // value for 'name'
 *      pixelSizeX: // value for 'pixelSizeX'
 *      pixelSizeY: // value for 'pixelSizeY'
 *      sensorSizeX: // value for 'sensorSizeX'
 *      sensorSizeY: // value for 'sensorSizeY'
 *   },
 * });
 */
export function useCreateCameraMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCameraMutation, CreateCameraMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCameraMutation, CreateCameraMutationVariables>(CreateCameraDocument, options);
      }
export type CreateCameraMutationHookResult = ReturnType<typeof useCreateCameraMutation>;
export type CreateCameraMutationResult = Apollo.MutationResult<CreateCameraMutation>;
export type CreateCameraMutationOptions = Apollo.BaseMutationOptions<CreateCameraMutation, CreateCameraMutationVariables>;
export const EnsureCameraDocument = gql`
    mutation EnsureCamera($serialNumber: String!, $name: String, $pixelSizeX: Micrometers, $pixelSizeY: Micrometers, $sensorSizeX: Int, $sensorSizeY: Int) {
  ensureCamera(
    input: {name: $name, pixelSizeX: $pixelSizeX, serialNumber: $serialNumber, pixelSizeY: $pixelSizeY, sensorSizeX: $sensorSizeX, sensorSizeY: $sensorSizeY}
  ) {
    id
    name
  }
}
    `;
export type EnsureCameraMutationFn = Apollo.MutationFunction<EnsureCameraMutation, EnsureCameraMutationVariables>;

/**
 * __useEnsureCameraMutation__
 *
 * To run a mutation, you first call `useEnsureCameraMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnsureCameraMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ensureCameraMutation, { data, loading, error }] = useEnsureCameraMutation({
 *   variables: {
 *      serialNumber: // value for 'serialNumber'
 *      name: // value for 'name'
 *      pixelSizeX: // value for 'pixelSizeX'
 *      pixelSizeY: // value for 'pixelSizeY'
 *      sensorSizeX: // value for 'sensorSizeX'
 *      sensorSizeY: // value for 'sensorSizeY'
 *   },
 * });
 */
export function useEnsureCameraMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EnsureCameraMutation, EnsureCameraMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EnsureCameraMutation, EnsureCameraMutationVariables>(EnsureCameraDocument, options);
      }
export type EnsureCameraMutationHookResult = ReturnType<typeof useEnsureCameraMutation>;
export type EnsureCameraMutationResult = Apollo.MutationResult<EnsureCameraMutation>;
export type EnsureCameraMutationOptions = Apollo.BaseMutationOptions<EnsureCameraMutation, EnsureCameraMutationVariables>;
export const CreateDatasetDocument = gql`
    mutation CreateDataset($name: String!) {
  createDataset(input: {name: $name}) {
    id
    name
  }
}
    `;
export type CreateDatasetMutationFn = Apollo.MutationFunction<CreateDatasetMutation, CreateDatasetMutationVariables>;

/**
 * __useCreateDatasetMutation__
 *
 * To run a mutation, you first call `useCreateDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDatasetMutation, { data, loading, error }] = useCreateDatasetMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDatasetMutation, CreateDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateDatasetMutation, CreateDatasetMutationVariables>(CreateDatasetDocument, options);
      }
export type CreateDatasetMutationHookResult = ReturnType<typeof useCreateDatasetMutation>;
export type CreateDatasetMutationResult = Apollo.MutationResult<CreateDatasetMutation>;
export type CreateDatasetMutationOptions = Apollo.BaseMutationOptions<CreateDatasetMutation, CreateDatasetMutationVariables>;
export const UpdateDatasetDocument = gql`
    mutation UpdateDataset($id: ID!, $name: String!) {
  updateDataset(input: {id: $id, name: $name}) {
    id
    name
  }
}
    `;
export type UpdateDatasetMutationFn = Apollo.MutationFunction<UpdateDatasetMutation, UpdateDatasetMutationVariables>;

/**
 * __useUpdateDatasetMutation__
 *
 * To run a mutation, you first call `useUpdateDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDatasetMutation, { data, loading, error }] = useUpdateDatasetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateDatasetMutation, UpdateDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateDatasetMutation, UpdateDatasetMutationVariables>(UpdateDatasetDocument, options);
      }
export type UpdateDatasetMutationHookResult = ReturnType<typeof useUpdateDatasetMutation>;
export type UpdateDatasetMutationResult = Apollo.MutationResult<UpdateDatasetMutation>;
export type UpdateDatasetMutationOptions = Apollo.BaseMutationOptions<UpdateDatasetMutation, UpdateDatasetMutationVariables>;
export const PinDatasetDocument = gql`
    mutation PinDataset($id: ID!, $pin: Boolean!) {
  pinDataset(input: {id: $id, pin: $pin}) {
    ...Dataset
  }
}
    ${DatasetFragmentDoc}`;
export type PinDatasetMutationFn = Apollo.MutationFunction<PinDatasetMutation, PinDatasetMutationVariables>;

/**
 * __usePinDatasetMutation__
 *
 * To run a mutation, you first call `usePinDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinDatasetMutation, { data, loading, error }] = usePinDatasetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pin: // value for 'pin'
 *   },
 * });
 */
export function usePinDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PinDatasetMutation, PinDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<PinDatasetMutation, PinDatasetMutationVariables>(PinDatasetDocument, options);
      }
export type PinDatasetMutationHookResult = ReturnType<typeof usePinDatasetMutation>;
export type PinDatasetMutationResult = Apollo.MutationResult<PinDatasetMutation>;
export type PinDatasetMutationOptions = Apollo.BaseMutationOptions<PinDatasetMutation, PinDatasetMutationVariables>;
export const PutDatasetsInDatasetDocument = gql`
    mutation PutDatasetsInDataset($selfs: [ID!]!, $other: ID!) {
  putDatasetsInDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${DatasetFragmentDoc}`;
export type PutDatasetsInDatasetMutationFn = Apollo.MutationFunction<PutDatasetsInDatasetMutation, PutDatasetsInDatasetMutationVariables>;

/**
 * __usePutDatasetsInDatasetMutation__
 *
 * To run a mutation, you first call `usePutDatasetsInDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutDatasetsInDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putDatasetsInDatasetMutation, { data, loading, error }] = usePutDatasetsInDatasetMutation({
 *   variables: {
 *      selfs: // value for 'selfs'
 *      other: // value for 'other'
 *   },
 * });
 */
export function usePutDatasetsInDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PutDatasetsInDatasetMutation, PutDatasetsInDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<PutDatasetsInDatasetMutation, PutDatasetsInDatasetMutationVariables>(PutDatasetsInDatasetDocument, options);
      }
export type PutDatasetsInDatasetMutationHookResult = ReturnType<typeof usePutDatasetsInDatasetMutation>;
export type PutDatasetsInDatasetMutationResult = Apollo.MutationResult<PutDatasetsInDatasetMutation>;
export type PutDatasetsInDatasetMutationOptions = Apollo.BaseMutationOptions<PutDatasetsInDatasetMutation, PutDatasetsInDatasetMutationVariables>;
export const ReleaseDatasetsFromDatasetDocument = gql`
    mutation ReleaseDatasetsFromDataset($selfs: [ID!]!, $other: ID!) {
  releaseDatasetsFromDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${DatasetFragmentDoc}`;
export type ReleaseDatasetsFromDatasetMutationFn = Apollo.MutationFunction<ReleaseDatasetsFromDatasetMutation, ReleaseDatasetsFromDatasetMutationVariables>;

/**
 * __useReleaseDatasetsFromDatasetMutation__
 *
 * To run a mutation, you first call `useReleaseDatasetsFromDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReleaseDatasetsFromDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [releaseDatasetsFromDatasetMutation, { data, loading, error }] = useReleaseDatasetsFromDatasetMutation({
 *   variables: {
 *      selfs: // value for 'selfs'
 *      other: // value for 'other'
 *   },
 * });
 */
export function useReleaseDatasetsFromDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReleaseDatasetsFromDatasetMutation, ReleaseDatasetsFromDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReleaseDatasetsFromDatasetMutation, ReleaseDatasetsFromDatasetMutationVariables>(ReleaseDatasetsFromDatasetDocument, options);
      }
export type ReleaseDatasetsFromDatasetMutationHookResult = ReturnType<typeof useReleaseDatasetsFromDatasetMutation>;
export type ReleaseDatasetsFromDatasetMutationResult = Apollo.MutationResult<ReleaseDatasetsFromDatasetMutation>;
export type ReleaseDatasetsFromDatasetMutationOptions = Apollo.BaseMutationOptions<ReleaseDatasetsFromDatasetMutation, ReleaseDatasetsFromDatasetMutationVariables>;
export const PutImagesInDatasetDocument = gql`
    mutation PutImagesInDataset($selfs: [ID!]!, $other: ID!) {
  putImagesInDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${DatasetFragmentDoc}`;
export type PutImagesInDatasetMutationFn = Apollo.MutationFunction<PutImagesInDatasetMutation, PutImagesInDatasetMutationVariables>;

/**
 * __usePutImagesInDatasetMutation__
 *
 * To run a mutation, you first call `usePutImagesInDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutImagesInDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putImagesInDatasetMutation, { data, loading, error }] = usePutImagesInDatasetMutation({
 *   variables: {
 *      selfs: // value for 'selfs'
 *      other: // value for 'other'
 *   },
 * });
 */
export function usePutImagesInDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PutImagesInDatasetMutation, PutImagesInDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<PutImagesInDatasetMutation, PutImagesInDatasetMutationVariables>(PutImagesInDatasetDocument, options);
      }
export type PutImagesInDatasetMutationHookResult = ReturnType<typeof usePutImagesInDatasetMutation>;
export type PutImagesInDatasetMutationResult = Apollo.MutationResult<PutImagesInDatasetMutation>;
export type PutImagesInDatasetMutationOptions = Apollo.BaseMutationOptions<PutImagesInDatasetMutation, PutImagesInDatasetMutationVariables>;
export const ReleaseImagesFromDatasetDocument = gql`
    mutation ReleaseImagesFromDataset($selfs: [ID!]!, $other: ID!) {
  releaseImagesFromDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${DatasetFragmentDoc}`;
export type ReleaseImagesFromDatasetMutationFn = Apollo.MutationFunction<ReleaseImagesFromDatasetMutation, ReleaseImagesFromDatasetMutationVariables>;

/**
 * __useReleaseImagesFromDatasetMutation__
 *
 * To run a mutation, you first call `useReleaseImagesFromDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReleaseImagesFromDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [releaseImagesFromDatasetMutation, { data, loading, error }] = useReleaseImagesFromDatasetMutation({
 *   variables: {
 *      selfs: // value for 'selfs'
 *      other: // value for 'other'
 *   },
 * });
 */
export function useReleaseImagesFromDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReleaseImagesFromDatasetMutation, ReleaseImagesFromDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReleaseImagesFromDatasetMutation, ReleaseImagesFromDatasetMutationVariables>(ReleaseImagesFromDatasetDocument, options);
      }
export type ReleaseImagesFromDatasetMutationHookResult = ReturnType<typeof useReleaseImagesFromDatasetMutation>;
export type ReleaseImagesFromDatasetMutationResult = Apollo.MutationResult<ReleaseImagesFromDatasetMutation>;
export type ReleaseImagesFromDatasetMutationOptions = Apollo.BaseMutationOptions<ReleaseImagesFromDatasetMutation, ReleaseImagesFromDatasetMutationVariables>;
export const PutFilesInDatasetDocument = gql`
    mutation PutFilesInDataset($selfs: [ID!]!, $other: ID!) {
  putFilesInDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${DatasetFragmentDoc}`;
export type PutFilesInDatasetMutationFn = Apollo.MutationFunction<PutFilesInDatasetMutation, PutFilesInDatasetMutationVariables>;

/**
 * __usePutFilesInDatasetMutation__
 *
 * To run a mutation, you first call `usePutFilesInDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutFilesInDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putFilesInDatasetMutation, { data, loading, error }] = usePutFilesInDatasetMutation({
 *   variables: {
 *      selfs: // value for 'selfs'
 *      other: // value for 'other'
 *   },
 * });
 */
export function usePutFilesInDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PutFilesInDatasetMutation, PutFilesInDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<PutFilesInDatasetMutation, PutFilesInDatasetMutationVariables>(PutFilesInDatasetDocument, options);
      }
export type PutFilesInDatasetMutationHookResult = ReturnType<typeof usePutFilesInDatasetMutation>;
export type PutFilesInDatasetMutationResult = Apollo.MutationResult<PutFilesInDatasetMutation>;
export type PutFilesInDatasetMutationOptions = Apollo.BaseMutationOptions<PutFilesInDatasetMutation, PutFilesInDatasetMutationVariables>;
export const ReleaseFilesFromDatasetDocument = gql`
    mutation ReleaseFilesFromDataset($selfs: [ID!]!, $other: ID!) {
  releaseFilesFromDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${DatasetFragmentDoc}`;
export type ReleaseFilesFromDatasetMutationFn = Apollo.MutationFunction<ReleaseFilesFromDatasetMutation, ReleaseFilesFromDatasetMutationVariables>;

/**
 * __useReleaseFilesFromDatasetMutation__
 *
 * To run a mutation, you first call `useReleaseFilesFromDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReleaseFilesFromDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [releaseFilesFromDatasetMutation, { data, loading, error }] = useReleaseFilesFromDatasetMutation({
 *   variables: {
 *      selfs: // value for 'selfs'
 *      other: // value for 'other'
 *   },
 * });
 */
export function useReleaseFilesFromDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReleaseFilesFromDatasetMutation, ReleaseFilesFromDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReleaseFilesFromDatasetMutation, ReleaseFilesFromDatasetMutationVariables>(ReleaseFilesFromDatasetDocument, options);
      }
export type ReleaseFilesFromDatasetMutationHookResult = ReturnType<typeof useReleaseFilesFromDatasetMutation>;
export type ReleaseFilesFromDatasetMutationResult = Apollo.MutationResult<ReleaseFilesFromDatasetMutation>;
export type ReleaseFilesFromDatasetMutationOptions = Apollo.BaseMutationOptions<ReleaseFilesFromDatasetMutation, ReleaseFilesFromDatasetMutationVariables>;
export const RevertDatasetDocument = gql`
    mutation RevertDataset($dataset: ID!, $history: ID!) {
  revertDataset(input: {id: $dataset, historyId: $history}) {
    id
    name
    description
  }
}
    `;
export type RevertDatasetMutationFn = Apollo.MutationFunction<RevertDatasetMutation, RevertDatasetMutationVariables>;

/**
 * __useRevertDatasetMutation__
 *
 * To run a mutation, you first call `useRevertDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevertDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revertDatasetMutation, { data, loading, error }] = useRevertDatasetMutation({
 *   variables: {
 *      dataset: // value for 'dataset'
 *      history: // value for 'history'
 *   },
 * });
 */
export function useRevertDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RevertDatasetMutation, RevertDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RevertDatasetMutation, RevertDatasetMutationVariables>(RevertDatasetDocument, options);
      }
export type RevertDatasetMutationHookResult = ReturnType<typeof useRevertDatasetMutation>;
export type RevertDatasetMutationResult = Apollo.MutationResult<RevertDatasetMutation>;
export type RevertDatasetMutationOptions = Apollo.BaseMutationOptions<RevertDatasetMutation, RevertDatasetMutationVariables>;
export const DeleteDatasetDocument = gql`
    mutation DeleteDataset($id: ID!) {
  deleteDataset(input: {id: $id})
}
    `;
export type DeleteDatasetMutationFn = Apollo.MutationFunction<DeleteDatasetMutation, DeleteDatasetMutationVariables>;

/**
 * __useDeleteDatasetMutation__
 *
 * To run a mutation, you first call `useDeleteDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDatasetMutation, { data, loading, error }] = useDeleteDatasetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDatasetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteDatasetMutation, DeleteDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteDatasetMutation, DeleteDatasetMutationVariables>(DeleteDatasetDocument, options);
      }
export type DeleteDatasetMutationHookResult = ReturnType<typeof useDeleteDatasetMutation>;
export type DeleteDatasetMutationResult = Apollo.MutationResult<DeleteDatasetMutation>;
export type DeleteDatasetMutationOptions = Apollo.BaseMutationOptions<DeleteDatasetMutation, DeleteDatasetMutationVariables>;
export const CreateEraDocument = gql`
    mutation CreateEra($name: String!, $begin: DateTime) {
  createEra(input: {name: $name, begin: $begin}) {
    id
    begin
  }
}
    `;
export type CreateEraMutationFn = Apollo.MutationFunction<CreateEraMutation, CreateEraMutationVariables>;

/**
 * __useCreateEraMutation__
 *
 * To run a mutation, you first call `useCreateEraMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEraMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEraMutation, { data, loading, error }] = useCreateEraMutation({
 *   variables: {
 *      name: // value for 'name'
 *      begin: // value for 'begin'
 *   },
 * });
 */
export function useCreateEraMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEraMutation, CreateEraMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateEraMutation, CreateEraMutationVariables>(CreateEraDocument, options);
      }
export type CreateEraMutationHookResult = ReturnType<typeof useCreateEraMutation>;
export type CreateEraMutationResult = Apollo.MutationResult<CreateEraMutation>;
export type CreateEraMutationOptions = Apollo.BaseMutationOptions<CreateEraMutation, CreateEraMutationVariables>;
export const From_File_LikeDocument = gql`
    mutation from_file_like($file: FileLike!, $name: String!, $origins: [ID!], $dataset: ID) {
  fromFileLike(
    input: {file: $file, fileName: $name, origins: $origins, dataset: $dataset}
  ) {
    ...File
  }
}
    ${FileFragmentDoc}`;
export type From_File_LikeMutationFn = Apollo.MutationFunction<From_File_LikeMutation, From_File_LikeMutationVariables>;

/**
 * __useFrom_File_LikeMutation__
 *
 * To run a mutation, you first call `useFrom_File_LikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFrom_File_LikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fromFileLikeMutation, { data, loading, error }] = useFrom_File_LikeMutation({
 *   variables: {
 *      file: // value for 'file'
 *      name: // value for 'name'
 *      origins: // value for 'origins'
 *      dataset: // value for 'dataset'
 *   },
 * });
 */
export function useFrom_File_LikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<From_File_LikeMutation, From_File_LikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<From_File_LikeMutation, From_File_LikeMutationVariables>(From_File_LikeDocument, options);
      }
export type From_File_LikeMutationHookResult = ReturnType<typeof useFrom_File_LikeMutation>;
export type From_File_LikeMutationResult = Apollo.MutationResult<From_File_LikeMutation>;
export type From_File_LikeMutationOptions = Apollo.BaseMutationOptions<From_File_LikeMutation, From_File_LikeMutationVariables>;
export const RequestFileUploadDocument = gql`
    mutation RequestFileUpload($key: String!, $datalayer: String!) {
  requestFileUpload(input: {fileName: $key, datalayer: $datalayer}) {
    ...Credentials
  }
}
    ${CredentialsFragmentDoc}`;
export type RequestFileUploadMutationFn = Apollo.MutationFunction<RequestFileUploadMutation, RequestFileUploadMutationVariables>;

/**
 * __useRequestFileUploadMutation__
 *
 * To run a mutation, you first call `useRequestFileUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestFileUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestFileUploadMutation, { data, loading, error }] = useRequestFileUploadMutation({
 *   variables: {
 *      key: // value for 'key'
 *      datalayer: // value for 'datalayer'
 *   },
 * });
 */
export function useRequestFileUploadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestFileUploadMutation, RequestFileUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RequestFileUploadMutation, RequestFileUploadMutationVariables>(RequestFileUploadDocument, options);
      }
export type RequestFileUploadMutationHookResult = ReturnType<typeof useRequestFileUploadMutation>;
export type RequestFileUploadMutationResult = Apollo.MutationResult<RequestFileUploadMutation>;
export type RequestFileUploadMutationOptions = Apollo.BaseMutationOptions<RequestFileUploadMutation, RequestFileUploadMutationVariables>;
export const RequestFileUploadPresignedDocument = gql`
    mutation RequestFileUploadPresigned($key: String!, $datalayer: String!) {
  requestFileUploadPresigned(input: {fileName: $key, datalayer: $datalayer}) {
    ...PresignedPostCredentials
  }
}
    ${PresignedPostCredentialsFragmentDoc}`;
export type RequestFileUploadPresignedMutationFn = Apollo.MutationFunction<RequestFileUploadPresignedMutation, RequestFileUploadPresignedMutationVariables>;

/**
 * __useRequestFileUploadPresignedMutation__
 *
 * To run a mutation, you first call `useRequestFileUploadPresignedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestFileUploadPresignedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestFileUploadPresignedMutation, { data, loading, error }] = useRequestFileUploadPresignedMutation({
 *   variables: {
 *      key: // value for 'key'
 *      datalayer: // value for 'datalayer'
 *   },
 * });
 */
export function useRequestFileUploadPresignedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestFileUploadPresignedMutation, RequestFileUploadPresignedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RequestFileUploadPresignedMutation, RequestFileUploadPresignedMutationVariables>(RequestFileUploadPresignedDocument, options);
      }
export type RequestFileUploadPresignedMutationHookResult = ReturnType<typeof useRequestFileUploadPresignedMutation>;
export type RequestFileUploadPresignedMutationResult = Apollo.MutationResult<RequestFileUploadPresignedMutation>;
export type RequestFileUploadPresignedMutationOptions = Apollo.BaseMutationOptions<RequestFileUploadPresignedMutation, RequestFileUploadPresignedMutationVariables>;
export const RequestFileAccessDocument = gql`
    mutation RequestFileAccess($store: ID!, $duration: Int) {
  requestFileAccess(input: {store: $store, duration: $duration}) {
    ...AccessCredentials
  }
}
    ${AccessCredentialsFragmentDoc}`;
export type RequestFileAccessMutationFn = Apollo.MutationFunction<RequestFileAccessMutation, RequestFileAccessMutationVariables>;

/**
 * __useRequestFileAccessMutation__
 *
 * To run a mutation, you first call `useRequestFileAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestFileAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestFileAccessMutation, { data, loading, error }] = useRequestFileAccessMutation({
 *   variables: {
 *      store: // value for 'store'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useRequestFileAccessMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestFileAccessMutation, RequestFileAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RequestFileAccessMutation, RequestFileAccessMutationVariables>(RequestFileAccessDocument, options);
      }
export type RequestFileAccessMutationHookResult = ReturnType<typeof useRequestFileAccessMutation>;
export type RequestFileAccessMutationResult = Apollo.MutationResult<RequestFileAccessMutation>;
export type RequestFileAccessMutationOptions = Apollo.BaseMutationOptions<RequestFileAccessMutation, RequestFileAccessMutationVariables>;
export const DeleteFileDocument = gql`
    mutation DeleteFile($id: ID!) {
  deleteFile(input: {id: $id})
}
    `;
export type DeleteFileMutationFn = Apollo.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, options);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const RequestUploadDocument = gql`
    mutation RequestUpload($key: String!, $datalayer: String!) {
  requestUpload(input: {key: $key, datalayer: $datalayer}) {
    ...Credentials
  }
}
    ${CredentialsFragmentDoc}`;
export type RequestUploadMutationFn = Apollo.MutationFunction<RequestUploadMutation, RequestUploadMutationVariables>;

/**
 * __useRequestUploadMutation__
 *
 * To run a mutation, you first call `useRequestUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestUploadMutation, { data, loading, error }] = useRequestUploadMutation({
 *   variables: {
 *      key: // value for 'key'
 *      datalayer: // value for 'datalayer'
 *   },
 * });
 */
export function useRequestUploadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestUploadMutation, RequestUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RequestUploadMutation, RequestUploadMutationVariables>(RequestUploadDocument, options);
      }
export type RequestUploadMutationHookResult = ReturnType<typeof useRequestUploadMutation>;
export type RequestUploadMutationResult = Apollo.MutationResult<RequestUploadMutation>;
export type RequestUploadMutationOptions = Apollo.BaseMutationOptions<RequestUploadMutation, RequestUploadMutationVariables>;
export const RequestAccessDocument = gql`
    mutation RequestAccess($store: ID!, $duration: Int) {
  requestAccess(input: {store: $store, duration: $duration}) {
    ...AccessCredentials
  }
}
    ${AccessCredentialsFragmentDoc}`;
export type RequestAccessMutationFn = Apollo.MutationFunction<RequestAccessMutation, RequestAccessMutationVariables>;

/**
 * __useRequestAccessMutation__
 *
 * To run a mutation, you first call `useRequestAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestAccessMutation, { data, loading, error }] = useRequestAccessMutation({
 *   variables: {
 *      store: // value for 'store'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useRequestAccessMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestAccessMutation, RequestAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RequestAccessMutation, RequestAccessMutationVariables>(RequestAccessDocument, options);
      }
export type RequestAccessMutationHookResult = ReturnType<typeof useRequestAccessMutation>;
export type RequestAccessMutationResult = Apollo.MutationResult<RequestAccessMutation>;
export type RequestAccessMutationOptions = Apollo.BaseMutationOptions<RequestAccessMutation, RequestAccessMutationVariables>;
export const PinImageDocument = gql`
    mutation PinImage($id: ID!, $pin: Boolean!) {
  pinImage(input: {id: $id, pin: $pin}) {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export type PinImageMutationFn = Apollo.MutationFunction<PinImageMutation, PinImageMutationVariables>;

/**
 * __usePinImageMutation__
 *
 * To run a mutation, you first call `usePinImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinImageMutation, { data, loading, error }] = usePinImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pin: // value for 'pin'
 *   },
 * });
 */
export function usePinImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PinImageMutation, PinImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<PinImageMutation, PinImageMutationVariables>(PinImageDocument, options);
      }
export type PinImageMutationHookResult = ReturnType<typeof usePinImageMutation>;
export type PinImageMutationResult = Apollo.MutationResult<PinImageMutation>;
export type PinImageMutationOptions = Apollo.BaseMutationOptions<PinImageMutation, PinImageMutationVariables>;
export const UpdateImageDocument = gql`
    mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export type UpdateImageMutationFn = Apollo.MutationFunction<UpdateImageMutation, UpdateImageMutationVariables>;

/**
 * __useUpdateImageMutation__
 *
 * To run a mutation, you first call `useUpdateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImageMutation, { data, loading, error }] = useUpdateImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateImageMutation, UpdateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateImageMutation, UpdateImageMutationVariables>(UpdateImageDocument, options);
      }
export type UpdateImageMutationHookResult = ReturnType<typeof useUpdateImageMutation>;
export type UpdateImageMutationResult = Apollo.MutationResult<UpdateImageMutation>;
export type UpdateImageMutationOptions = Apollo.BaseMutationOptions<UpdateImageMutation, UpdateImageMutationVariables>;
export const DeleteImageDocument = gql`
    mutation DeleteImage($id: ID!) {
  deleteImage(input: {id: $id})
}
    `;
export type DeleteImageMutationFn = Apollo.MutationFunction<DeleteImageMutation, DeleteImageMutationVariables>;

/**
 * __useDeleteImageMutation__
 *
 * To run a mutation, you first call `useDeleteImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImageMutation, { data, loading, error }] = useDeleteImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteImageMutation, DeleteImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteImageMutation, DeleteImageMutationVariables>(DeleteImageDocument, options);
      }
export type DeleteImageMutationHookResult = ReturnType<typeof useDeleteImageMutation>;
export type DeleteImageMutationResult = Apollo.MutationResult<DeleteImageMutation>;
export type DeleteImageMutationOptions = Apollo.BaseMutationOptions<DeleteImageMutation, DeleteImageMutationVariables>;
export const CreateInstrumentDocument = gql`
    mutation CreateInstrument($serialNumber: String!, $name: String, $model: String) {
  createInstrument(
    input: {name: $name, model: $model, serialNumber: $serialNumber}
  ) {
    id
    name
  }
}
    `;
export type CreateInstrumentMutationFn = Apollo.MutationFunction<CreateInstrumentMutation, CreateInstrumentMutationVariables>;

/**
 * __useCreateInstrumentMutation__
 *
 * To run a mutation, you first call `useCreateInstrumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInstrumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstrumentMutation, { data, loading, error }] = useCreateInstrumentMutation({
 *   variables: {
 *      serialNumber: // value for 'serialNumber'
 *      name: // value for 'name'
 *      model: // value for 'model'
 *   },
 * });
 */
export function useCreateInstrumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateInstrumentMutation, CreateInstrumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateInstrumentMutation, CreateInstrumentMutationVariables>(CreateInstrumentDocument, options);
      }
export type CreateInstrumentMutationHookResult = ReturnType<typeof useCreateInstrumentMutation>;
export type CreateInstrumentMutationResult = Apollo.MutationResult<CreateInstrumentMutation>;
export type CreateInstrumentMutationOptions = Apollo.BaseMutationOptions<CreateInstrumentMutation, CreateInstrumentMutationVariables>;
export const EnsureInstrumentDocument = gql`
    mutation EnsureInstrument($serialNumber: String!, $name: String, $model: String) {
  ensureInstrument(
    input: {name: $name, model: $model, serialNumber: $serialNumber}
  ) {
    id
    name
  }
}
    `;
export type EnsureInstrumentMutationFn = Apollo.MutationFunction<EnsureInstrumentMutation, EnsureInstrumentMutationVariables>;

/**
 * __useEnsureInstrumentMutation__
 *
 * To run a mutation, you first call `useEnsureInstrumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnsureInstrumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ensureInstrumentMutation, { data, loading, error }] = useEnsureInstrumentMutation({
 *   variables: {
 *      serialNumber: // value for 'serialNumber'
 *      name: // value for 'name'
 *      model: // value for 'model'
 *   },
 * });
 */
export function useEnsureInstrumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EnsureInstrumentMutation, EnsureInstrumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EnsureInstrumentMutation, EnsureInstrumentMutationVariables>(EnsureInstrumentDocument, options);
      }
export type EnsureInstrumentMutationHookResult = ReturnType<typeof useEnsureInstrumentMutation>;
export type EnsureInstrumentMutationResult = Apollo.MutationResult<EnsureInstrumentMutation>;
export type EnsureInstrumentMutationOptions = Apollo.BaseMutationOptions<EnsureInstrumentMutation, EnsureInstrumentMutationVariables>;
export const RequestMediaUploadDocument = gql`
    mutation RequestMediaUpload($key: String!, $datalayer: String!) {
  requestMediaUpload(input: {fileName: $key, datalayer: $datalayer}) {
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
export const CreateMultiWellPlateDocument = gql`
    mutation CreateMultiWellPlate($input: MultiWellPlateInput!) {
  createMultiWellPlate(input: $input) {
    ...MultiWellPlate
  }
}
    ${MultiWellPlateFragmentDoc}`;
export type CreateMultiWellPlateMutationFn = Apollo.MutationFunction<CreateMultiWellPlateMutation, CreateMultiWellPlateMutationVariables>;

/**
 * __useCreateMultiWellPlateMutation__
 *
 * To run a mutation, you first call `useCreateMultiWellPlateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMultiWellPlateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMultiWellPlateMutation, { data, loading, error }] = useCreateMultiWellPlateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMultiWellPlateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMultiWellPlateMutation, CreateMultiWellPlateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateMultiWellPlateMutation, CreateMultiWellPlateMutationVariables>(CreateMultiWellPlateDocument, options);
      }
export type CreateMultiWellPlateMutationHookResult = ReturnType<typeof useCreateMultiWellPlateMutation>;
export type CreateMultiWellPlateMutationResult = Apollo.MutationResult<CreateMultiWellPlateMutation>;
export type CreateMultiWellPlateMutationOptions = Apollo.BaseMutationOptions<CreateMultiWellPlateMutation, CreateMultiWellPlateMutationVariables>;
export const AutoCreateMultiWellPlateDocument = gql`
    mutation AutoCreateMultiWellPlate($input: String!) {
  result: createMultiWellPlate(input: {name: $input}) {
    label: name
    value: id
  }
}
    `;
export type AutoCreateMultiWellPlateMutationFn = Apollo.MutationFunction<AutoCreateMultiWellPlateMutation, AutoCreateMultiWellPlateMutationVariables>;

/**
 * __useAutoCreateMultiWellPlateMutation__
 *
 * To run a mutation, you first call `useAutoCreateMultiWellPlateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAutoCreateMultiWellPlateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [autoCreateMultiWellPlateMutation, { data, loading, error }] = useAutoCreateMultiWellPlateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAutoCreateMultiWellPlateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AutoCreateMultiWellPlateMutation, AutoCreateMultiWellPlateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AutoCreateMultiWellPlateMutation, AutoCreateMultiWellPlateMutationVariables>(AutoCreateMultiWellPlateDocument, options);
      }
export type AutoCreateMultiWellPlateMutationHookResult = ReturnType<typeof useAutoCreateMultiWellPlateMutation>;
export type AutoCreateMultiWellPlateMutationResult = Apollo.MutationResult<AutoCreateMultiWellPlateMutation>;
export type AutoCreateMultiWellPlateMutationOptions = Apollo.BaseMutationOptions<AutoCreateMultiWellPlateMutation, AutoCreateMultiWellPlateMutationVariables>;
export const CreateObjectiveDocument = gql`
    mutation CreateObjective($serialNumber: String!, $name: String, $na: Float, $magnification: Float) {
  createObjective(
    input: {name: $name, na: $na, serialNumber: $serialNumber, magnification: $magnification}
  ) {
    id
    name
  }
}
    `;
export type CreateObjectiveMutationFn = Apollo.MutationFunction<CreateObjectiveMutation, CreateObjectiveMutationVariables>;

/**
 * __useCreateObjectiveMutation__
 *
 * To run a mutation, you first call `useCreateObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createObjectiveMutation, { data, loading, error }] = useCreateObjectiveMutation({
 *   variables: {
 *      serialNumber: // value for 'serialNumber'
 *      name: // value for 'name'
 *      na: // value for 'na'
 *      magnification: // value for 'magnification'
 *   },
 * });
 */
export function useCreateObjectiveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateObjectiveMutation, CreateObjectiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateObjectiveMutation, CreateObjectiveMutationVariables>(CreateObjectiveDocument, options);
      }
export type CreateObjectiveMutationHookResult = ReturnType<typeof useCreateObjectiveMutation>;
export type CreateObjectiveMutationResult = Apollo.MutationResult<CreateObjectiveMutation>;
export type CreateObjectiveMutationOptions = Apollo.BaseMutationOptions<CreateObjectiveMutation, CreateObjectiveMutationVariables>;
export const EnsureObjectiveDocument = gql`
    mutation EnsureObjective($serialNumber: String!, $name: String, $na: Float, $magnification: Float) {
  ensureObjective(
    input: {name: $name, na: $na, serialNumber: $serialNumber, magnification: $magnification}
  ) {
    id
    name
  }
}
    `;
export type EnsureObjectiveMutationFn = Apollo.MutationFunction<EnsureObjectiveMutation, EnsureObjectiveMutationVariables>;

/**
 * __useEnsureObjectiveMutation__
 *
 * To run a mutation, you first call `useEnsureObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnsureObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ensureObjectiveMutation, { data, loading, error }] = useEnsureObjectiveMutation({
 *   variables: {
 *      serialNumber: // value for 'serialNumber'
 *      name: // value for 'name'
 *      na: // value for 'na'
 *      magnification: // value for 'magnification'
 *   },
 * });
 */
export function useEnsureObjectiveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EnsureObjectiveMutation, EnsureObjectiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EnsureObjectiveMutation, EnsureObjectiveMutationVariables>(EnsureObjectiveDocument, options);
      }
export type EnsureObjectiveMutationHookResult = ReturnType<typeof useEnsureObjectiveMutation>;
export type EnsureObjectiveMutationResult = Apollo.MutationResult<EnsureObjectiveMutation>;
export type EnsureObjectiveMutationOptions = Apollo.BaseMutationOptions<EnsureObjectiveMutation, EnsureObjectiveMutationVariables>;
export const AssignUserPermissionsDocument = gql`
    mutation AssignUserPermissions($input: AssignUserPermissionInput!) {
  assignUserPermission(input: $input) {
    user {
      sub
    }
    permission
  }
}
    `;
export type AssignUserPermissionsMutationFn = Apollo.MutationFunction<AssignUserPermissionsMutation, AssignUserPermissionsMutationVariables>;

/**
 * __useAssignUserPermissionsMutation__
 *
 * To run a mutation, you first call `useAssignUserPermissionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignUserPermissionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignUserPermissionsMutation, { data, loading, error }] = useAssignUserPermissionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAssignUserPermissionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AssignUserPermissionsMutation, AssignUserPermissionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AssignUserPermissionsMutation, AssignUserPermissionsMutationVariables>(AssignUserPermissionsDocument, options);
      }
export type AssignUserPermissionsMutationHookResult = ReturnType<typeof useAssignUserPermissionsMutation>;
export type AssignUserPermissionsMutationResult = Apollo.MutationResult<AssignUserPermissionsMutation>;
export type AssignUserPermissionsMutationOptions = Apollo.BaseMutationOptions<AssignUserPermissionsMutation, AssignUserPermissionsMutationVariables>;
export const CreateRgbContextDocument = gql`
    mutation CreateRGBContext($input: CreateRGBContextInput!) {
  createRgbContext(input: $input) {
    ...RGBContext
  }
}
    ${RgbContextFragmentDoc}`;
export type CreateRgbContextMutationFn = Apollo.MutationFunction<CreateRgbContextMutation, CreateRgbContextMutationVariables>;

/**
 * __useCreateRgbContextMutation__
 *
 * To run a mutation, you first call `useCreateRgbContextMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRgbContextMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRgbContextMutation, { data, loading, error }] = useCreateRgbContextMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRgbContextMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRgbContextMutation, CreateRgbContextMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateRgbContextMutation, CreateRgbContextMutationVariables>(CreateRgbContextDocument, options);
      }
export type CreateRgbContextMutationHookResult = ReturnType<typeof useCreateRgbContextMutation>;
export type CreateRgbContextMutationResult = Apollo.MutationResult<CreateRgbContextMutation>;
export type CreateRgbContextMutationOptions = Apollo.BaseMutationOptions<CreateRgbContextMutation, CreateRgbContextMutationVariables>;
export const UpdateRgbContextDocument = gql`
    mutation UpdateRGBContext($input: UpdateRGBContextInput!) {
  updateRgbContext(input: $input) {
    ...RGBContext
  }
}
    ${RgbContextFragmentDoc}`;
export type UpdateRgbContextMutationFn = Apollo.MutationFunction<UpdateRgbContextMutation, UpdateRgbContextMutationVariables>;

/**
 * __useUpdateRgbContextMutation__
 *
 * To run a mutation, you first call `useUpdateRgbContextMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRgbContextMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRgbContextMutation, { data, loading, error }] = useUpdateRgbContextMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRgbContextMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRgbContextMutation, UpdateRgbContextMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateRgbContextMutation, UpdateRgbContextMutationVariables>(UpdateRgbContextDocument, options);
      }
export type UpdateRgbContextMutationHookResult = ReturnType<typeof useUpdateRgbContextMutation>;
export type UpdateRgbContextMutationResult = Apollo.MutationResult<UpdateRgbContextMutation>;
export type UpdateRgbContextMutationOptions = Apollo.BaseMutationOptions<UpdateRgbContextMutation, UpdateRgbContextMutationVariables>;
export const PinRoiDocument = gql`
    mutation PinROI($id: ID!, $pin: Boolean!) {
  pinRoi(input: {id: $id, pin: $pin}) {
    ...ROI
  }
}
    ${RoiFragmentDoc}`;
export type PinRoiMutationFn = Apollo.MutationFunction<PinRoiMutation, PinRoiMutationVariables>;

/**
 * __usePinRoiMutation__
 *
 * To run a mutation, you first call `usePinRoiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinRoiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinRoiMutation, { data, loading, error }] = usePinRoiMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pin: // value for 'pin'
 *   },
 * });
 */
export function usePinRoiMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PinRoiMutation, PinRoiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<PinRoiMutation, PinRoiMutationVariables>(PinRoiDocument, options);
      }
export type PinRoiMutationHookResult = ReturnType<typeof usePinRoiMutation>;
export type PinRoiMutationResult = Apollo.MutationResult<PinRoiMutation>;
export type PinRoiMutationOptions = Apollo.BaseMutationOptions<PinRoiMutation, PinRoiMutationVariables>;
export const CreateRoiDocument = gql`
    mutation CreateROI($input: RoiInput!) {
  createRoi(input: $input) {
    ...ROI
  }
}
    ${RoiFragmentDoc}`;
export type CreateRoiMutationFn = Apollo.MutationFunction<CreateRoiMutation, CreateRoiMutationVariables>;

/**
 * __useCreateRoiMutation__
 *
 * To run a mutation, you first call `useCreateRoiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoiMutation, { data, loading, error }] = useCreateRoiMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRoiMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRoiMutation, CreateRoiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateRoiMutation, CreateRoiMutationVariables>(CreateRoiDocument, options);
      }
export type CreateRoiMutationHookResult = ReturnType<typeof useCreateRoiMutation>;
export type CreateRoiMutationResult = Apollo.MutationResult<CreateRoiMutation>;
export type CreateRoiMutationOptions = Apollo.BaseMutationOptions<CreateRoiMutation, CreateRoiMutationVariables>;
export const DeleteRoiDocument = gql`
    mutation DeleteROI($id: ID!) {
  deleteRoi(input: {id: $id})
}
    `;
export type DeleteRoiMutationFn = Apollo.MutationFunction<DeleteRoiMutation, DeleteRoiMutationVariables>;

/**
 * __useDeleteRoiMutation__
 *
 * To run a mutation, you first call `useDeleteRoiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoiMutation, { data, loading, error }] = useDeleteRoiMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoiMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRoiMutation, DeleteRoiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteRoiMutation, DeleteRoiMutationVariables>(DeleteRoiDocument, options);
      }
export type DeleteRoiMutationHookResult = ReturnType<typeof useDeleteRoiMutation>;
export type DeleteRoiMutationResult = Apollo.MutationResult<DeleteRoiMutation>;
export type DeleteRoiMutationOptions = Apollo.BaseMutationOptions<DeleteRoiMutation, DeleteRoiMutationVariables>;
export const CreateSnapshotDocument = gql`
    mutation CreateSnapshot($image: ID!, $file: ImageFileLike!) {
  createSnapshot(input: {file: $file, image: $image}) {
    ...Snapshot
  }
}
    ${SnapshotFragmentDoc}`;
export type CreateSnapshotMutationFn = Apollo.MutationFunction<CreateSnapshotMutation, CreateSnapshotMutationVariables>;

/**
 * __useCreateSnapshotMutation__
 *
 * To run a mutation, you first call `useCreateSnapshotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSnapshotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSnapshotMutation, { data, loading, error }] = useCreateSnapshotMutation({
 *   variables: {
 *      image: // value for 'image'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useCreateSnapshotMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSnapshotMutation, CreateSnapshotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateSnapshotMutation, CreateSnapshotMutationVariables>(CreateSnapshotDocument, options);
      }
export type CreateSnapshotMutationHookResult = ReturnType<typeof useCreateSnapshotMutation>;
export type CreateSnapshotMutationResult = Apollo.MutationResult<CreateSnapshotMutation>;
export type CreateSnapshotMutationOptions = Apollo.BaseMutationOptions<CreateSnapshotMutation, CreateSnapshotMutationVariables>;
export const CreateStageDocument = gql`
    mutation CreateStage($name: String!) {
  createStage(input: {name: $name}) {
    id
    name
  }
}
    `;
export type CreateStageMutationFn = Apollo.MutationFunction<CreateStageMutation, CreateStageMutationVariables>;

/**
 * __useCreateStageMutation__
 *
 * To run a mutation, you first call `useCreateStageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStageMutation, { data, loading, error }] = useCreateStageMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateStageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateStageMutation, CreateStageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateStageMutation, CreateStageMutationVariables>(CreateStageDocument, options);
      }
export type CreateStageMutationHookResult = ReturnType<typeof useCreateStageMutation>;
export type CreateStageMutationResult = Apollo.MutationResult<CreateStageMutation>;
export type CreateStageMutationOptions = Apollo.BaseMutationOptions<CreateStageMutation, CreateStageMutationVariables>;
export const PinStageDocument = gql`
    mutation PinStage($id: ID!, $pin: Boolean!) {
  pinStage(input: {id: $id, pin: $pin}) {
    ...Stage
  }
}
    ${StageFragmentDoc}`;
export type PinStageMutationFn = Apollo.MutationFunction<PinStageMutation, PinStageMutationVariables>;

/**
 * __usePinStageMutation__
 *
 * To run a mutation, you first call `usePinStageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinStageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinStageMutation, { data, loading, error }] = usePinStageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pin: // value for 'pin'
 *   },
 * });
 */
export function usePinStageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PinStageMutation, PinStageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<PinStageMutation, PinStageMutationVariables>(PinStageDocument, options);
      }
export type PinStageMutationHookResult = ReturnType<typeof usePinStageMutation>;
export type PinStageMutationResult = Apollo.MutationResult<PinStageMutation>;
export type PinStageMutationOptions = Apollo.BaseMutationOptions<PinStageMutation, PinStageMutationVariables>;
export const From_Parquet_LikeDocument = gql`
    mutation from_parquet_like($dataframe: ParquetLike!, $name: String!, $origins: [ID!], $dataset: ID) {
  fromParquetLike(
    input: {dataframe: $dataframe, name: $name, origins: $origins, dataset: $dataset}
  ) {
    ...Table
  }
}
    ${TableFragmentDoc}`;
export type From_Parquet_LikeMutationFn = Apollo.MutationFunction<From_Parquet_LikeMutation, From_Parquet_LikeMutationVariables>;

/**
 * __useFrom_Parquet_LikeMutation__
 *
 * To run a mutation, you first call `useFrom_Parquet_LikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFrom_Parquet_LikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fromParquetLikeMutation, { data, loading, error }] = useFrom_Parquet_LikeMutation({
 *   variables: {
 *      dataframe: // value for 'dataframe'
 *      name: // value for 'name'
 *      origins: // value for 'origins'
 *      dataset: // value for 'dataset'
 *   },
 * });
 */
export function useFrom_Parquet_LikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<From_Parquet_LikeMutation, From_Parquet_LikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<From_Parquet_LikeMutation, From_Parquet_LikeMutationVariables>(From_Parquet_LikeDocument, options);
      }
export type From_Parquet_LikeMutationHookResult = ReturnType<typeof useFrom_Parquet_LikeMutation>;
export type From_Parquet_LikeMutationResult = Apollo.MutationResult<From_Parquet_LikeMutation>;
export type From_Parquet_LikeMutationOptions = Apollo.BaseMutationOptions<From_Parquet_LikeMutation, From_Parquet_LikeMutationVariables>;
export const RequestTableUploadDocument = gql`
    mutation RequestTableUpload($key: String!, $datalayer: String!) {
  requestTableUpload(input: {key: $key, datalayer: $datalayer}) {
    ...Credentials
  }
}
    ${CredentialsFragmentDoc}`;
export type RequestTableUploadMutationFn = Apollo.MutationFunction<RequestTableUploadMutation, RequestTableUploadMutationVariables>;

/**
 * __useRequestTableUploadMutation__
 *
 * To run a mutation, you first call `useRequestTableUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestTableUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestTableUploadMutation, { data, loading, error }] = useRequestTableUploadMutation({
 *   variables: {
 *      key: // value for 'key'
 *      datalayer: // value for 'datalayer'
 *   },
 * });
 */
export function useRequestTableUploadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestTableUploadMutation, RequestTableUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RequestTableUploadMutation, RequestTableUploadMutationVariables>(RequestTableUploadDocument, options);
      }
export type RequestTableUploadMutationHookResult = ReturnType<typeof useRequestTableUploadMutation>;
export type RequestTableUploadMutationResult = Apollo.MutationResult<RequestTableUploadMutation>;
export type RequestTableUploadMutationOptions = Apollo.BaseMutationOptions<RequestTableUploadMutation, RequestTableUploadMutationVariables>;
export const RequestTableAccessDocument = gql`
    mutation RequestTableAccess($store: ID!, $duration: Int) {
  requestTableAccess(input: {store: $store, duration: $duration}) {
    ...AccessCredentials
  }
}
    ${AccessCredentialsFragmentDoc}`;
export type RequestTableAccessMutationFn = Apollo.MutationFunction<RequestTableAccessMutation, RequestTableAccessMutationVariables>;

/**
 * __useRequestTableAccessMutation__
 *
 * To run a mutation, you first call `useRequestTableAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestTableAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestTableAccessMutation, { data, loading, error }] = useRequestTableAccessMutation({
 *   variables: {
 *      store: // value for 'store'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useRequestTableAccessMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestTableAccessMutation, RequestTableAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RequestTableAccessMutation, RequestTableAccessMutationVariables>(RequestTableAccessDocument, options);
      }
export type RequestTableAccessMutationHookResult = ReturnType<typeof useRequestTableAccessMutation>;
export type RequestTableAccessMutationResult = Apollo.MutationResult<RequestTableAccessMutation>;
export type RequestTableAccessMutationOptions = Apollo.BaseMutationOptions<RequestTableAccessMutation, RequestTableAccessMutationVariables>;
export const CreateAffineTransformationViewDocument = gql`
    mutation CreateAffineTransformationView($image: ID!, $affineMatrix: FourByFourMatrix!, $stage: ID) {
  createAffineTransformationView(
    input: {image: $image, affineMatrix: $affineMatrix, stage: $stage}
  ) {
    ...AffineTransformationView
  }
}
    ${AffineTransformationViewFragmentDoc}`;
export type CreateAffineTransformationViewMutationFn = Apollo.MutationFunction<CreateAffineTransformationViewMutation, CreateAffineTransformationViewMutationVariables>;

/**
 * __useCreateAffineTransformationViewMutation__
 *
 * To run a mutation, you first call `useCreateAffineTransformationViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAffineTransformationViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAffineTransformationViewMutation, { data, loading, error }] = useCreateAffineTransformationViewMutation({
 *   variables: {
 *      image: // value for 'image'
 *      affineMatrix: // value for 'affineMatrix'
 *      stage: // value for 'stage'
 *   },
 * });
 */
export function useCreateAffineTransformationViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAffineTransformationViewMutation, CreateAffineTransformationViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAffineTransformationViewMutation, CreateAffineTransformationViewMutationVariables>(CreateAffineTransformationViewDocument, options);
      }
export type CreateAffineTransformationViewMutationHookResult = ReturnType<typeof useCreateAffineTransformationViewMutation>;
export type CreateAffineTransformationViewMutationResult = Apollo.MutationResult<CreateAffineTransformationViewMutation>;
export type CreateAffineTransformationViewMutationOptions = Apollo.BaseMutationOptions<CreateAffineTransformationViewMutation, CreateAffineTransformationViewMutationVariables>;
export const DeleteAffineTransformationViewDocument = gql`
    mutation DeleteAffineTransformationView($id: ID!) {
  deleteAffineTransformationView(input: {id: $id})
}
    `;
export type DeleteAffineTransformationViewMutationFn = Apollo.MutationFunction<DeleteAffineTransformationViewMutation, DeleteAffineTransformationViewMutationVariables>;

/**
 * __useDeleteAffineTransformationViewMutation__
 *
 * To run a mutation, you first call `useDeleteAffineTransformationViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAffineTransformationViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAffineTransformationViewMutation, { data, loading, error }] = useDeleteAffineTransformationViewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAffineTransformationViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAffineTransformationViewMutation, DeleteAffineTransformationViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAffineTransformationViewMutation, DeleteAffineTransformationViewMutationVariables>(DeleteAffineTransformationViewDocument, options);
      }
export type DeleteAffineTransformationViewMutationHookResult = ReturnType<typeof useDeleteAffineTransformationViewMutation>;
export type DeleteAffineTransformationViewMutationResult = Apollo.MutationResult<DeleteAffineTransformationViewMutation>;
export type DeleteAffineTransformationViewMutationOptions = Apollo.BaseMutationOptions<DeleteAffineTransformationViewMutation, DeleteAffineTransformationViewMutationVariables>;
export const DeleteRgbViewDocument = gql`
    mutation DeleteRGBView($id: ID!) {
  deleteRgbView(input: {id: $id})
}
    `;
export type DeleteRgbViewMutationFn = Apollo.MutationFunction<DeleteRgbViewMutation, DeleteRgbViewMutationVariables>;

/**
 * __useDeleteRgbViewMutation__
 *
 * To run a mutation, you first call `useDeleteRgbViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRgbViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRgbViewMutation, { data, loading, error }] = useDeleteRgbViewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRgbViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRgbViewMutation, DeleteRgbViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteRgbViewMutation, DeleteRgbViewMutationVariables>(DeleteRgbViewDocument, options);
      }
export type DeleteRgbViewMutationHookResult = ReturnType<typeof useDeleteRgbViewMutation>;
export type DeleteRgbViewMutationResult = Apollo.MutationResult<DeleteRgbViewMutation>;
export type DeleteRgbViewMutationOptions = Apollo.BaseMutationOptions<DeleteRgbViewMutation, DeleteRgbViewMutationVariables>;
export const DeleteChannelViewDocument = gql`
    mutation DeleteChannelView($id: ID!) {
  deleteChannelView(input: {id: $id})
}
    `;
export type DeleteChannelViewMutationFn = Apollo.MutationFunction<DeleteChannelViewMutation, DeleteChannelViewMutationVariables>;

/**
 * __useDeleteChannelViewMutation__
 *
 * To run a mutation, you first call `useDeleteChannelViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChannelViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChannelViewMutation, { data, loading, error }] = useDeleteChannelViewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteChannelViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteChannelViewMutation, DeleteChannelViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteChannelViewMutation, DeleteChannelViewMutationVariables>(DeleteChannelViewDocument, options);
      }
export type DeleteChannelViewMutationHookResult = ReturnType<typeof useDeleteChannelViewMutation>;
export type DeleteChannelViewMutationResult = Apollo.MutationResult<DeleteChannelViewMutation>;
export type DeleteChannelViewMutationOptions = Apollo.BaseMutationOptions<DeleteChannelViewMutation, DeleteChannelViewMutationVariables>;
export const DeleteHistogramViewDocument = gql`
    mutation DeleteHistogramView($id: ID!) {
  deleteHistogramView(input: {id: $id})
}
    `;
export type DeleteHistogramViewMutationFn = Apollo.MutationFunction<DeleteHistogramViewMutation, DeleteHistogramViewMutationVariables>;

/**
 * __useDeleteHistogramViewMutation__
 *
 * To run a mutation, you first call `useDeleteHistogramViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHistogramViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHistogramViewMutation, { data, loading, error }] = useDeleteHistogramViewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteHistogramViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteHistogramViewMutation, DeleteHistogramViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteHistogramViewMutation, DeleteHistogramViewMutationVariables>(DeleteHistogramViewDocument, options);
      }
export type DeleteHistogramViewMutationHookResult = ReturnType<typeof useDeleteHistogramViewMutation>;
export type DeleteHistogramViewMutationResult = Apollo.MutationResult<DeleteHistogramViewMutation>;
export type DeleteHistogramViewMutationOptions = Apollo.BaseMutationOptions<DeleteHistogramViewMutation, DeleteHistogramViewMutationVariables>;
export const CreateRgbViewDocument = gql`
    mutation CreateRgbView($image: ID!, $context: ID!, $gamma: Float, $contrastLimitMax: Float, $contrastLimitMin: Float, $rescale: Boolean, $active: Boolean, $colorMap: ColorMap) {
  createRgbView(
    input: {image: $image, context: $context, gamma: $gamma, contrastLimitMax: $contrastLimitMax, contrastLimitMin: $contrastLimitMin, rescale: $rescale, active: $active, colorMap: $colorMap}
  ) {
    id
  }
}
    `;
export type CreateRgbViewMutationFn = Apollo.MutationFunction<CreateRgbViewMutation, CreateRgbViewMutationVariables>;

/**
 * __useCreateRgbViewMutation__
 *
 * To run a mutation, you first call `useCreateRgbViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRgbViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRgbViewMutation, { data, loading, error }] = useCreateRgbViewMutation({
 *   variables: {
 *      image: // value for 'image'
 *      context: // value for 'context'
 *      gamma: // value for 'gamma'
 *      contrastLimitMax: // value for 'contrastLimitMax'
 *      contrastLimitMin: // value for 'contrastLimitMin'
 *      rescale: // value for 'rescale'
 *      active: // value for 'active'
 *      colorMap: // value for 'colorMap'
 *   },
 * });
 */
export function useCreateRgbViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRgbViewMutation, CreateRgbViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateRgbViewMutation, CreateRgbViewMutationVariables>(CreateRgbViewDocument, options);
      }
export type CreateRgbViewMutationHookResult = ReturnType<typeof useCreateRgbViewMutation>;
export type CreateRgbViewMutationResult = Apollo.MutationResult<CreateRgbViewMutation>;
export type CreateRgbViewMutationOptions = Apollo.BaseMutationOptions<CreateRgbViewMutation, CreateRgbViewMutationVariables>;
export const CreateWellPositionViewDocument = gql`
    mutation CreateWellPositionView($input: WellPositionViewInput!) {
  createWellPositionView(input: $input) {
    ...WellPositionView
  }
}
    ${WellPositionViewFragmentDoc}`;
export type CreateWellPositionViewMutationFn = Apollo.MutationFunction<CreateWellPositionViewMutation, CreateWellPositionViewMutationVariables>;

/**
 * __useCreateWellPositionViewMutation__
 *
 * To run a mutation, you first call `useCreateWellPositionViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWellPositionViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWellPositionViewMutation, { data, loading, error }] = useCreateWellPositionViewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWellPositionViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateWellPositionViewMutation, CreateWellPositionViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateWellPositionViewMutation, CreateWellPositionViewMutationVariables>(CreateWellPositionViewDocument, options);
      }
export type CreateWellPositionViewMutationHookResult = ReturnType<typeof useCreateWellPositionViewMutation>;
export type CreateWellPositionViewMutationResult = Apollo.MutationResult<CreateWellPositionViewMutation>;
export type CreateWellPositionViewMutationOptions = Apollo.BaseMutationOptions<CreateWellPositionViewMutation, CreateWellPositionViewMutationVariables>;
export const CreateContinousScanViewDocument = gql`
    mutation CreateContinousScanView($input: ContinousScanViewInput!) {
  createContinousScanView(input: $input) {
    ...ContinousScanView
  }
}
    ${ContinousScanViewFragmentDoc}`;
export type CreateContinousScanViewMutationFn = Apollo.MutationFunction<CreateContinousScanViewMutation, CreateContinousScanViewMutationVariables>;

/**
 * __useCreateContinousScanViewMutation__
 *
 * To run a mutation, you first call `useCreateContinousScanViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContinousScanViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContinousScanViewMutation, { data, loading, error }] = useCreateContinousScanViewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContinousScanViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateContinousScanViewMutation, CreateContinousScanViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateContinousScanViewMutation, CreateContinousScanViewMutationVariables>(CreateContinousScanViewDocument, options);
      }
export type CreateContinousScanViewMutationHookResult = ReturnType<typeof useCreateContinousScanViewMutation>;
export type CreateContinousScanViewMutationResult = Apollo.MutationResult<CreateContinousScanViewMutation>;
export type CreateContinousScanViewMutationOptions = Apollo.BaseMutationOptions<CreateContinousScanViewMutation, CreateContinousScanViewMutationVariables>;
export const CreateMaskViewDocument = gql`
    mutation CreateMaskView($input: MaskViewInput!) {
  createMaskView(input: $input) {
    ...MaskView
  }
}
    ${MaskViewFragmentDoc}`;
export type CreateMaskViewMutationFn = Apollo.MutationFunction<CreateMaskViewMutation, CreateMaskViewMutationVariables>;

/**
 * __useCreateMaskViewMutation__
 *
 * To run a mutation, you first call `useCreateMaskViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMaskViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMaskViewMutation, { data, loading, error }] = useCreateMaskViewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMaskViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMaskViewMutation, CreateMaskViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateMaskViewMutation, CreateMaskViewMutationVariables>(CreateMaskViewDocument, options);
      }
export type CreateMaskViewMutationHookResult = ReturnType<typeof useCreateMaskViewMutation>;
export type CreateMaskViewMutationResult = Apollo.MutationResult<CreateMaskViewMutation>;
export type CreateMaskViewMutationOptions = Apollo.BaseMutationOptions<CreateMaskViewMutation, CreateMaskViewMutationVariables>;
export const CreateInstanceMaskViewDocument = gql`
    mutation CreateInstanceMaskView($input: InstanceMaskViewInput!) {
  createInstanceMaskView(input: $input) {
    ...InstanceMaskView
  }
}
    ${InstanceMaskViewFragmentDoc}`;
export type CreateInstanceMaskViewMutationFn = Apollo.MutationFunction<CreateInstanceMaskViewMutation, CreateInstanceMaskViewMutationVariables>;

/**
 * __useCreateInstanceMaskViewMutation__
 *
 * To run a mutation, you first call `useCreateInstanceMaskViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInstanceMaskViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstanceMaskViewMutation, { data, loading, error }] = useCreateInstanceMaskViewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInstanceMaskViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateInstanceMaskViewMutation, CreateInstanceMaskViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateInstanceMaskViewMutation, CreateInstanceMaskViewMutationVariables>(CreateInstanceMaskViewDocument, options);
      }
export type CreateInstanceMaskViewMutationHookResult = ReturnType<typeof useCreateInstanceMaskViewMutation>;
export type CreateInstanceMaskViewMutationResult = Apollo.MutationResult<CreateInstanceMaskViewMutation>;
export type CreateInstanceMaskViewMutationOptions = Apollo.BaseMutationOptions<CreateInstanceMaskViewMutation, CreateInstanceMaskViewMutationVariables>;
export const UpdateRgbViewDocument = gql`
    mutation UpdateRGBView($input: UpdateRGBViewInput!) {
  updateRgbView(input: $input) {
    ...RGBView
  }
}
    ${RgbViewFragmentDoc}`;
export type UpdateRgbViewMutationFn = Apollo.MutationFunction<UpdateRgbViewMutation, UpdateRgbViewMutationVariables>;

/**
 * __useUpdateRgbViewMutation__
 *
 * To run a mutation, you first call `useUpdateRgbViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRgbViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRgbViewMutation, { data, loading, error }] = useUpdateRgbViewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRgbViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRgbViewMutation, UpdateRgbViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateRgbViewMutation, UpdateRgbViewMutationVariables>(UpdateRgbViewDocument, options);
      }
export type UpdateRgbViewMutationHookResult = ReturnType<typeof useUpdateRgbViewMutation>;
export type UpdateRgbViewMutationResult = Apollo.MutationResult<UpdateRgbViewMutation>;
export type UpdateRgbViewMutationOptions = Apollo.BaseMutationOptions<UpdateRgbViewMutation, UpdateRgbViewMutationVariables>;
export const CreateViewCollectionDocument = gql`
    mutation CreateViewCollection($name: String!) {
  createViewCollection(input: {name: $name}) {
    id
    name
  }
}
    `;
export type CreateViewCollectionMutationFn = Apollo.MutationFunction<CreateViewCollectionMutation, CreateViewCollectionMutationVariables>;

/**
 * __useCreateViewCollectionMutation__
 *
 * To run a mutation, you first call `useCreateViewCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateViewCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createViewCollectionMutation, { data, loading, error }] = useCreateViewCollectionMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateViewCollectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateViewCollectionMutation, CreateViewCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateViewCollectionMutation, CreateViewCollectionMutationVariables>(CreateViewCollectionDocument, options);
      }
export type CreateViewCollectionMutationHookResult = ReturnType<typeof useCreateViewCollectionMutation>;
export type CreateViewCollectionMutationResult = Apollo.MutationResult<CreateViewCollectionMutation>;
export type CreateViewCollectionMutationOptions = Apollo.BaseMutationOptions<CreateViewCollectionMutation, CreateViewCollectionMutationVariables>;
export const GetCameraDocument = gql`
    query GetCamera($id: ID!) {
  camera(id: $id) {
    ...Camera
  }
}
    ${CameraFragmentDoc}`;

/**
 * __useGetCameraQuery__
 *
 * To run a query within a React component, call `useGetCameraQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCameraQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCameraQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCameraQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetCameraQuery, GetCameraQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCameraQuery, GetCameraQueryVariables>(GetCameraDocument, options);
      }
export function useGetCameraLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCameraQuery, GetCameraQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCameraQuery, GetCameraQueryVariables>(GetCameraDocument, options);
        }
export type GetCameraQueryHookResult = ReturnType<typeof useGetCameraQuery>;
export type GetCameraLazyQueryHookResult = ReturnType<typeof useGetCameraLazyQuery>;
export type GetCameraQueryResult = Apollo.QueryResult<GetCameraQuery, GetCameraQueryVariables>;
export const ChildrenDocument = gql`
    query Children($id: ID!, $pagination: ChildrenPaginationInput) {
  children(parent: $id, pagination: $pagination) {
    ...ListFile
    ...ListImage
    ...ListDataset
  }
}
    ${ListFileFragmentDoc}
${ListImageFragmentDoc}
${ListDatasetFragmentDoc}`;

/**
 * __useChildrenQuery__
 *
 * To run a query within a React component, call `useChildrenQuery` and pass it any options that fit your needs.
 * When your component renders, `useChildrenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChildrenQuery({
 *   variables: {
 *      id: // value for 'id'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useChildrenQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ChildrenQuery, ChildrenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ChildrenQuery, ChildrenQueryVariables>(ChildrenDocument, options);
      }
export function useChildrenLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChildrenQuery, ChildrenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ChildrenQuery, ChildrenQueryVariables>(ChildrenDocument, options);
        }
export type ChildrenQueryHookResult = ReturnType<typeof useChildrenQuery>;
export type ChildrenLazyQueryHookResult = ReturnType<typeof useChildrenLazyQuery>;
export type ChildrenQueryResult = Apollo.QueryResult<ChildrenQuery, ChildrenQueryVariables>;
export const GetDatasetDocument = gql`
    query GetDataset($id: ID!) {
  dataset(id: $id) {
    ...Dataset
  }
}
    ${DatasetFragmentDoc}`;

/**
 * __useGetDatasetQuery__
 *
 * To run a query within a React component, call `useGetDatasetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDatasetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDatasetQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDatasetQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetDatasetQuery, GetDatasetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetDatasetQuery, GetDatasetQueryVariables>(GetDatasetDocument, options);
      }
export function useGetDatasetLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDatasetQuery, GetDatasetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetDatasetQuery, GetDatasetQueryVariables>(GetDatasetDocument, options);
        }
export type GetDatasetQueryHookResult = ReturnType<typeof useGetDatasetQuery>;
export type GetDatasetLazyQueryHookResult = ReturnType<typeof useGetDatasetLazyQuery>;
export type GetDatasetQueryResult = Apollo.QueryResult<GetDatasetQuery, GetDatasetQueryVariables>;
export const GetDatasetsDocument = gql`
    query GetDatasets($filters: DatasetFilter, $pagination: OffsetPaginationInput) {
  datasets(filters: $filters, pagination: $pagination) {
    ...ListDataset
  }
}
    ${ListDatasetFragmentDoc}`;

/**
 * __useGetDatasetsQuery__
 *
 * To run a query within a React component, call `useGetDatasetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDatasetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDatasetsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetDatasetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDatasetsQuery, GetDatasetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetDatasetsQuery, GetDatasetsQueryVariables>(GetDatasetsDocument, options);
      }
export function useGetDatasetsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDatasetsQuery, GetDatasetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetDatasetsQuery, GetDatasetsQueryVariables>(GetDatasetsDocument, options);
        }
export type GetDatasetsQueryHookResult = ReturnType<typeof useGetDatasetsQuery>;
export type GetDatasetsLazyQueryHookResult = ReturnType<typeof useGetDatasetsLazyQuery>;
export type GetDatasetsQueryResult = Apollo.QueryResult<GetDatasetsQuery, GetDatasetsQueryVariables>;
export const GetFileDocument = gql`
    query GetFile($id: ID!) {
  file(id: $id) {
    ...File
  }
}
    ${FileFragmentDoc}`;

/**
 * __useGetFileQuery__
 *
 * To run a query within a React component, call `useGetFileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFileQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetFileQuery, GetFileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFileQuery, GetFileQueryVariables>(GetFileDocument, options);
      }
export function useGetFileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFileQuery, GetFileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFileQuery, GetFileQueryVariables>(GetFileDocument, options);
        }
export type GetFileQueryHookResult = ReturnType<typeof useGetFileQuery>;
export type GetFileLazyQueryHookResult = ReturnType<typeof useGetFileLazyQuery>;
export type GetFileQueryResult = Apollo.QueryResult<GetFileQuery, GetFileQueryVariables>;
export const GetFilesDocument = gql`
    query GetFiles($filters: FileFilter, $pagination: OffsetPaginationInput) {
  files(filters: $filters, pagination: $pagination) {
    ...ListFile
  }
}
    ${ListFileFragmentDoc}`;

/**
 * __useGetFilesQuery__
 *
 * To run a query within a React component, call `useGetFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetFilesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
      }
export function useGetFilesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
        }
export type GetFilesQueryHookResult = ReturnType<typeof useGetFilesQuery>;
export type GetFilesLazyQueryHookResult = ReturnType<typeof useGetFilesLazyQuery>;
export type GetFilesQueryResult = Apollo.QueryResult<GetFilesQuery, GetFilesQueryVariables>;
export const GlobalSearchDocument = gql`
    query GlobalSearch($search: String, $noImages: Boolean!, $noFiles: Boolean!, $noDatasets: Boolean!, $pagination: OffsetPaginationInput) {
  images: images(filters: {search: $search}, pagination: $pagination) @skip(if: $noImages) {
    ...ListImage
  }
  files: files(filters: {search: $search}, pagination: $pagination) @skip(if: $noFiles) {
    ...ListFile
  }
  datasets: datasets(filters: {search: $search}, pagination: $pagination) @skip(if: $noDatasets) {
    ...ListDataset
  }
}
    ${ListImageFragmentDoc}
${ListFileFragmentDoc}
${ListDatasetFragmentDoc}`;

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
 *      noImages: // value for 'noImages'
 *      noFiles: // value for 'noFiles'
 *      noDatasets: // value for 'noDatasets'
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
export const ImagesDocument = gql`
    query Images {
  images {
    id
  }
}
    `;

/**
 * __useImagesQuery__
 *
 * To run a query within a React component, call `useImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useImagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
      }
export function useImagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
        }
export type ImagesQueryHookResult = ReturnType<typeof useImagesQuery>;
export type ImagesLazyQueryHookResult = ReturnType<typeof useImagesLazyQuery>;
export type ImagesQueryResult = Apollo.QueryResult<ImagesQuery, ImagesQueryVariables>;
export const GetImageDocument = gql`
    query GetImage($id: ID!) {
  image(id: $id) {
    ...Image
  }
}
    ${ImageFragmentDoc}`;

/**
 * __useGetImageQuery__
 *
 * To run a query within a React component, call `useGetImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetImageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetImageQuery, GetImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetImageQuery, GetImageQueryVariables>(GetImageDocument, options);
      }
export function useGetImageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetImageQuery, GetImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetImageQuery, GetImageQueryVariables>(GetImageDocument, options);
        }
export type GetImageQueryHookResult = ReturnType<typeof useGetImageQuery>;
export type GetImageLazyQueryHookResult = ReturnType<typeof useGetImageLazyQuery>;
export type GetImageQueryResult = Apollo.QueryResult<GetImageQuery, GetImageQueryVariables>;
export const GetImagesDocument = gql`
    query GetImages($filters: ImageFilter, $pagination: OffsetPaginationInput, $order: ImageOrder) {
  images(filters: $filters, pagination: $pagination, order: $order) {
    ...ListImage
  }
}
    ${ListImageFragmentDoc}`;

/**
 * __useGetImagesQuery__
 *
 * To run a query within a React component, call `useGetImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImagesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetImagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetImagesQuery, GetImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetImagesQuery, GetImagesQueryVariables>(GetImagesDocument, options);
      }
export function useGetImagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetImagesQuery, GetImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetImagesQuery, GetImagesQueryVariables>(GetImagesDocument, options);
        }
export type GetImagesQueryHookResult = ReturnType<typeof useGetImagesQuery>;
export type GetImagesLazyQueryHookResult = ReturnType<typeof useGetImagesLazyQuery>;
export type GetImagesQueryResult = Apollo.QueryResult<GetImagesQuery, GetImagesQueryVariables>;
export const GetInstrumentDocument = gql`
    query GetInstrument($id: ID!) {
  instrument(id: $id) {
    ...Instrument
  }
}
    ${InstrumentFragmentDoc}`;

/**
 * __useGetInstrumentQuery__
 *
 * To run a query within a React component, call `useGetInstrumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstrumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstrumentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInstrumentQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetInstrumentQuery, GetInstrumentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetInstrumentQuery, GetInstrumentQueryVariables>(GetInstrumentDocument, options);
      }
export function useGetInstrumentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetInstrumentQuery, GetInstrumentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetInstrumentQuery, GetInstrumentQueryVariables>(GetInstrumentDocument, options);
        }
export type GetInstrumentQueryHookResult = ReturnType<typeof useGetInstrumentQuery>;
export type GetInstrumentLazyQueryHookResult = ReturnType<typeof useGetInstrumentLazyQuery>;
export type GetInstrumentQueryResult = Apollo.QueryResult<GetInstrumentQuery, GetInstrumentQueryVariables>;
export const DetailMeshDocument = gql`
    query DetailMesh($id: ID!) {
  mesh(id: $id) {
    ...Mesh
  }
}
    ${MeshFragmentDoc}`;

/**
 * __useDetailMeshQuery__
 *
 * To run a query within a React component, call `useDetailMeshQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailMeshQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailMeshQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailMeshQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DetailMeshQuery, DetailMeshQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DetailMeshQuery, DetailMeshQueryVariables>(DetailMeshDocument, options);
      }
export function useDetailMeshLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DetailMeshQuery, DetailMeshQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DetailMeshQuery, DetailMeshQueryVariables>(DetailMeshDocument, options);
        }
export type DetailMeshQueryHookResult = ReturnType<typeof useDetailMeshQuery>;
export type DetailMeshLazyQueryHookResult = ReturnType<typeof useDetailMeshLazyQuery>;
export type DetailMeshQueryResult = Apollo.QueryResult<DetailMeshQuery, DetailMeshQueryVariables>;
export const ListMeshesDocument = gql`
    query ListMeshes($filters: MeshFilter, $pagination: OffsetPaginationInput) {
  meshes(filters: $filters, pagination: $pagination) {
    ...ListMesh
  }
}
    ${ListMeshFragmentDoc}`;

/**
 * __useListMeshesQuery__
 *
 * To run a query within a React component, call `useListMeshesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMeshesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMeshesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useListMeshesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListMeshesQuery, ListMeshesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListMeshesQuery, ListMeshesQueryVariables>(ListMeshesDocument, options);
      }
export function useListMeshesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListMeshesQuery, ListMeshesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListMeshesQuery, ListMeshesQueryVariables>(ListMeshesDocument, options);
        }
export type ListMeshesQueryHookResult = ReturnType<typeof useListMeshesQuery>;
export type ListMeshesLazyQueryHookResult = ReturnType<typeof useListMeshesLazyQuery>;
export type ListMeshesQueryResult = Apollo.QueryResult<ListMeshesQuery, ListMeshesQueryVariables>;
export const GetMultiWellPlateDocument = gql`
    query GetMultiWellPlate($id: ID!) {
  multiWellPlate(id: $id) {
    ...MultiWellPlate
  }
}
    ${MultiWellPlateFragmentDoc}`;

/**
 * __useGetMultiWellPlateQuery__
 *
 * To run a query within a React component, call `useGetMultiWellPlateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMultiWellPlateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMultiWellPlateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMultiWellPlateQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetMultiWellPlateQuery, GetMultiWellPlateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMultiWellPlateQuery, GetMultiWellPlateQueryVariables>(GetMultiWellPlateDocument, options);
      }
export function useGetMultiWellPlateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMultiWellPlateQuery, GetMultiWellPlateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMultiWellPlateQuery, GetMultiWellPlateQueryVariables>(GetMultiWellPlateDocument, options);
        }
export type GetMultiWellPlateQueryHookResult = ReturnType<typeof useGetMultiWellPlateQuery>;
export type GetMultiWellPlateLazyQueryHookResult = ReturnType<typeof useGetMultiWellPlateLazyQuery>;
export type GetMultiWellPlateQueryResult = Apollo.QueryResult<GetMultiWellPlateQuery, GetMultiWellPlateQueryVariables>;
export const GetMultiWellPlatesDocument = gql`
    query GetMultiWellPlates($filters: MultiWellPlateFilter, $pagination: OffsetPaginationInput) {
  multiWellPlates(filters: $filters, pagination: $pagination) {
    ...ListMultiWellPlate
  }
}
    ${ListMultiWellPlateFragmentDoc}`;

/**
 * __useGetMultiWellPlatesQuery__
 *
 * To run a query within a React component, call `useGetMultiWellPlatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMultiWellPlatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMultiWellPlatesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetMultiWellPlatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMultiWellPlatesQuery, GetMultiWellPlatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMultiWellPlatesQuery, GetMultiWellPlatesQueryVariables>(GetMultiWellPlatesDocument, options);
      }
export function useGetMultiWellPlatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMultiWellPlatesQuery, GetMultiWellPlatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMultiWellPlatesQuery, GetMultiWellPlatesQueryVariables>(GetMultiWellPlatesDocument, options);
        }
export type GetMultiWellPlatesQueryHookResult = ReturnType<typeof useGetMultiWellPlatesQuery>;
export type GetMultiWellPlatesLazyQueryHookResult = ReturnType<typeof useGetMultiWellPlatesLazyQuery>;
export type GetMultiWellPlatesQueryResult = Apollo.QueryResult<GetMultiWellPlatesQuery, GetMultiWellPlatesQueryVariables>;
export const MultiWellPlateOptionsDocument = gql`
    query MultiWellPlateOptions($search: String, $values: [ID!]) {
  options: multiWellPlates(
    filters: {search: $search, ids: $values}
    pagination: {limit: 10}
  ) {
    value: id
    label: name
  }
}
    `;

/**
 * __useMultiWellPlateOptionsQuery__
 *
 * To run a query within a React component, call `useMultiWellPlateOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMultiWellPlateOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMultiWellPlateOptionsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useMultiWellPlateOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MultiWellPlateOptionsQuery, MultiWellPlateOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MultiWellPlateOptionsQuery, MultiWellPlateOptionsQueryVariables>(MultiWellPlateOptionsDocument, options);
      }
export function useMultiWellPlateOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MultiWellPlateOptionsQuery, MultiWellPlateOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MultiWellPlateOptionsQuery, MultiWellPlateOptionsQueryVariables>(MultiWellPlateOptionsDocument, options);
        }
export type MultiWellPlateOptionsQueryHookResult = ReturnType<typeof useMultiWellPlateOptionsQuery>;
export type MultiWellPlateOptionsLazyQueryHookResult = ReturnType<typeof useMultiWellPlateOptionsLazyQuery>;
export type MultiWellPlateOptionsQueryResult = Apollo.QueryResult<MultiWellPlateOptionsQuery, MultiWellPlateOptionsQueryVariables>;
export const GetObjectiveDocument = gql`
    query GetObjective($id: ID!) {
  objective(id: $id) {
    ...Objective
  }
}
    ${ObjectiveFragmentDoc}`;

/**
 * __useGetObjectiveQuery__
 *
 * To run a query within a React component, call `useGetObjectiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetObjectiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetObjectiveQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetObjectiveQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetObjectiveQuery, GetObjectiveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetObjectiveQuery, GetObjectiveQueryVariables>(GetObjectiveDocument, options);
      }
export function useGetObjectiveLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetObjectiveQuery, GetObjectiveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetObjectiveQuery, GetObjectiveQueryVariables>(GetObjectiveDocument, options);
        }
export type GetObjectiveQueryHookResult = ReturnType<typeof useGetObjectiveQuery>;
export type GetObjectiveLazyQueryHookResult = ReturnType<typeof useGetObjectiveLazyQuery>;
export type GetObjectiveQueryResult = Apollo.QueryResult<GetObjectiveQuery, GetObjectiveQueryVariables>;
export const GetPermissionsDocument = gql`
    query GetPermissions($identifier: String!, $object: ID!) {
  permissions(identifier: $identifier, object: $object) {
    user {
      sub
    }
    permission
  }
}
    `;

/**
 * __useGetPermissionsQuery__
 *
 * To run a query within a React component, call `useGetPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermissionsQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useGetPermissionsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPermissionsQuery, GetPermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPermissionsQuery, GetPermissionsQueryVariables>(GetPermissionsDocument, options);
      }
export function useGetPermissionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPermissionsQuery, GetPermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPermissionsQuery, GetPermissionsQueryVariables>(GetPermissionsDocument, options);
        }
export type GetPermissionsQueryHookResult = ReturnType<typeof useGetPermissionsQuery>;
export type GetPermissionsLazyQueryHookResult = ReturnType<typeof useGetPermissionsLazyQuery>;
export type GetPermissionsQueryResult = Apollo.QueryResult<GetPermissionsQuery, GetPermissionsQueryVariables>;
export const PermissionOptionsDocument = gql`
    query PermissionOptions($identifier: String!, $search: String, $values: [ID!]) {
  options: availablePermissions(
    identifier: $identifier
    search: $search
    values: $values
  ) {
    value
    label
  }
}
    `;

/**
 * __usePermissionOptionsQuery__
 *
 * To run a query within a React component, call `usePermissionOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionOptionsQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      search: // value for 'search'
 *      values: // value for 'values'
 *   },
 * });
 */
export function usePermissionOptionsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<PermissionOptionsQuery, PermissionOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PermissionOptionsQuery, PermissionOptionsQueryVariables>(PermissionOptionsDocument, options);
      }
export function usePermissionOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PermissionOptionsQuery, PermissionOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PermissionOptionsQuery, PermissionOptionsQueryVariables>(PermissionOptionsDocument, options);
        }
export type PermissionOptionsQueryHookResult = ReturnType<typeof usePermissionOptionsQuery>;
export type PermissionOptionsLazyQueryHookResult = ReturnType<typeof usePermissionOptionsLazyQuery>;
export type PermissionOptionsQueryResult = Apollo.QueryResult<PermissionOptionsQuery, PermissionOptionsQueryVariables>;
export const GetMaskedPixelInfoDocument = gql`
    query GetMaskedPixelInfo($id: ID!) {
  maskedPixelInfo(id: $id) {
    label
  }
}
    `;

/**
 * __useGetMaskedPixelInfoQuery__
 *
 * To run a query within a React component, call `useGetMaskedPixelInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaskedPixelInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaskedPixelInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMaskedPixelInfoQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetMaskedPixelInfoQuery, GetMaskedPixelInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMaskedPixelInfoQuery, GetMaskedPixelInfoQueryVariables>(GetMaskedPixelInfoDocument, options);
      }
export function useGetMaskedPixelInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMaskedPixelInfoQuery, GetMaskedPixelInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMaskedPixelInfoQuery, GetMaskedPixelInfoQueryVariables>(GetMaskedPixelInfoDocument, options);
        }
export type GetMaskedPixelInfoQueryHookResult = ReturnType<typeof useGetMaskedPixelInfoQuery>;
export type GetMaskedPixelInfoLazyQueryHookResult = ReturnType<typeof useGetMaskedPixelInfoLazyQuery>;
export type GetMaskedPixelInfoQueryResult = Apollo.QueryResult<GetMaskedPixelInfoQuery, GetMaskedPixelInfoQueryVariables>;
export const GetRgbContextDocument = gql`
    query GetRGBContext($id: ID!) {
  rgbcontext(id: $id) {
    ...RGBContext
  }
}
    ${RgbContextFragmentDoc}`;

/**
 * __useGetRgbContextQuery__
 *
 * To run a query within a React component, call `useGetRgbContextQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRgbContextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRgbContextQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRgbContextQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetRgbContextQuery, GetRgbContextQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRgbContextQuery, GetRgbContextQueryVariables>(GetRgbContextDocument, options);
      }
export function useGetRgbContextLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRgbContextQuery, GetRgbContextQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRgbContextQuery, GetRgbContextQueryVariables>(GetRgbContextDocument, options);
        }
export type GetRgbContextQueryHookResult = ReturnType<typeof useGetRgbContextQuery>;
export type GetRgbContextLazyQueryHookResult = ReturnType<typeof useGetRgbContextLazyQuery>;
export type GetRgbContextQueryResult = Apollo.QueryResult<GetRgbContextQuery, GetRgbContextQueryVariables>;
export const GetRgbContextsDocument = gql`
    query GetRGBContexts($filters: RGBContextFilter, $pagination: OffsetPaginationInput) {
  rgbcontexts(filters: $filters, pagination: $pagination) {
    ...ListRGBContext
  }
}
    ${ListRgbContextFragmentDoc}`;

/**
 * __useGetRgbContextsQuery__
 *
 * To run a query within a React component, call `useGetRgbContextsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRgbContextsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRgbContextsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetRgbContextsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRgbContextsQuery, GetRgbContextsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRgbContextsQuery, GetRgbContextsQueryVariables>(GetRgbContextsDocument, options);
      }
export function useGetRgbContextsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRgbContextsQuery, GetRgbContextsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRgbContextsQuery, GetRgbContextsQueryVariables>(GetRgbContextsDocument, options);
        }
export type GetRgbContextsQueryHookResult = ReturnType<typeof useGetRgbContextsQuery>;
export type GetRgbContextsLazyQueryHookResult = ReturnType<typeof useGetRgbContextsLazyQuery>;
export type GetRgbContextsQueryResult = Apollo.QueryResult<GetRgbContextsQuery, GetRgbContextsQueryVariables>;
export const RgbContextOptionsDocument = gql`
    query RGBContextOptions($search: String, $values: [ID!]) {
  options: rgbcontexts(
    filters: {search: $search, ids: $values}
    pagination: {limit: 10}
  ) {
    value: id
    label: name
  }
}
    `;

/**
 * __useRgbContextOptionsQuery__
 *
 * To run a query within a React component, call `useRgbContextOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRgbContextOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRgbContextOptionsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useRgbContextOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RgbContextOptionsQuery, RgbContextOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RgbContextOptionsQuery, RgbContextOptionsQueryVariables>(RgbContextOptionsDocument, options);
      }
export function useRgbContextOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RgbContextOptionsQuery, RgbContextOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RgbContextOptionsQuery, RgbContextOptionsQueryVariables>(RgbContextOptionsDocument, options);
        }
export type RgbContextOptionsQueryHookResult = ReturnType<typeof useRgbContextOptionsQuery>;
export type RgbContextOptionsLazyQueryHookResult = ReturnType<typeof useRgbContextOptionsLazyQuery>;
export type RgbContextOptionsQueryResult = Apollo.QueryResult<RgbContextOptionsQuery, RgbContextOptionsQueryVariables>;
export const GetRoiDocument = gql`
    query GetROI($id: ID!) {
  roi(id: $id) {
    ...ROI
  }
}
    ${RoiFragmentDoc}`;

/**
 * __useGetRoiQuery__
 *
 * To run a query within a React component, call `useGetRoiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoiQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRoiQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetRoiQuery, GetRoiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRoiQuery, GetRoiQueryVariables>(GetRoiDocument, options);
      }
export function useGetRoiLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoiQuery, GetRoiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRoiQuery, GetRoiQueryVariables>(GetRoiDocument, options);
        }
export type GetRoiQueryHookResult = ReturnType<typeof useGetRoiQuery>;
export type GetRoiLazyQueryHookResult = ReturnType<typeof useGetRoiLazyQuery>;
export type GetRoiQueryResult = Apollo.QueryResult<GetRoiQuery, GetRoiQueryVariables>;
export const GetRoIsDocument = gql`
    query GetROIs($filters: ROIFilter, $pagination: OffsetPaginationInput, $order: ROIOrder) {
  rois(filters: $filters, pagination: $pagination, order: $order) {
    ...ListROI
  }
}
    ${ListRoiFragmentDoc}`;

/**
 * __useGetRoIsQuery__
 *
 * To run a query within a React component, call `useGetRoIsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoIsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoIsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetRoIsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRoIsQuery, GetRoIsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRoIsQuery, GetRoIsQueryVariables>(GetRoIsDocument, options);
      }
export function useGetRoIsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoIsQuery, GetRoIsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRoIsQuery, GetRoIsQueryVariables>(GetRoIsDocument, options);
        }
export type GetRoIsQueryHookResult = ReturnType<typeof useGetRoIsQuery>;
export type GetRoIsLazyQueryHookResult = ReturnType<typeof useGetRoIsLazyQuery>;
export type GetRoIsQueryResult = Apollo.QueryResult<GetRoIsQuery, GetRoIsQueryVariables>;
export const RowsDocument = gql`
    query Rows($table: ID!, $filters: RowFilter, $pagination: TablePaginationInput) {
  rows(table: $table, filters: $filters, pagination: $pagination)
}
    `;

/**
 * __useRowsQuery__
 *
 * To run a query within a React component, call `useRowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRowsQuery({
 *   variables: {
 *      table: // value for 'table'
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useRowsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<RowsQuery, RowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RowsQuery, RowsQueryVariables>(RowsDocument, options);
      }
export function useRowsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RowsQuery, RowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RowsQuery, RowsQueryVariables>(RowsDocument, options);
        }
export type RowsQueryHookResult = ReturnType<typeof useRowsQuery>;
export type RowsLazyQueryHookResult = ReturnType<typeof useRowsLazyQuery>;
export type RowsQueryResult = Apollo.QueryResult<RowsQuery, RowsQueryVariables>;
export const GetStageDocument = gql`
    query GetStage($id: ID!) {
  stage(id: $id) {
    ...Stage
  }
}
    ${StageFragmentDoc}`;

/**
 * __useGetStageQuery__
 *
 * To run a query within a React component, call `useGetStageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetStageQuery, GetStageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetStageQuery, GetStageQueryVariables>(GetStageDocument, options);
      }
export function useGetStageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStageQuery, GetStageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetStageQuery, GetStageQueryVariables>(GetStageDocument, options);
        }
export type GetStageQueryHookResult = ReturnType<typeof useGetStageQuery>;
export type GetStageLazyQueryHookResult = ReturnType<typeof useGetStageLazyQuery>;
export type GetStageQueryResult = Apollo.QueryResult<GetStageQuery, GetStageQueryVariables>;
export const GetStagesDocument = gql`
    query GetStages($filters: StageFilter, $pagination: OffsetPaginationInput) {
  stages(filters: $filters, pagination: $pagination) {
    ...ListStage
  }
}
    ${ListStageFragmentDoc}`;

/**
 * __useGetStagesQuery__
 *
 * To run a query within a React component, call `useGetStagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStagesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetStagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStagesQuery, GetStagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetStagesQuery, GetStagesQueryVariables>(GetStagesDocument, options);
      }
export function useGetStagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStagesQuery, GetStagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetStagesQuery, GetStagesQueryVariables>(GetStagesDocument, options);
        }
export type GetStagesQueryHookResult = ReturnType<typeof useGetStagesQuery>;
export type GetStagesLazyQueryHookResult = ReturnType<typeof useGetStagesLazyQuery>;
export type GetStagesQueryResult = Apollo.QueryResult<GetStagesQuery, GetStagesQueryVariables>;
export const StageOptionsDocument = gql`
    query StageOptions($search: String, $values: [ID!]) {
  options: stages(
    filters: {search: $search, ids: $values}
    pagination: {limit: 10}
  ) {
    value: id
    label: name
  }
}
    `;

/**
 * __useStageOptionsQuery__
 *
 * To run a query within a React component, call `useStageOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStageOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStageOptionsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useStageOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StageOptionsQuery, StageOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<StageOptionsQuery, StageOptionsQueryVariables>(StageOptionsDocument, options);
      }
export function useStageOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StageOptionsQuery, StageOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<StageOptionsQuery, StageOptionsQueryVariables>(StageOptionsDocument, options);
        }
export type StageOptionsQueryHookResult = ReturnType<typeof useStageOptionsQuery>;
export type StageOptionsLazyQueryHookResult = ReturnType<typeof useStageOptionsLazyQuery>;
export type StageOptionsQueryResult = Apollo.QueryResult<StageOptionsQuery, StageOptionsQueryVariables>;
export const GetTableDocument = gql`
    query GetTable($id: ID!) {
  table(id: $id) {
    ...Table
  }
}
    ${TableFragmentDoc}`;

/**
 * __useGetTableQuery__
 *
 * To run a query within a React component, call `useGetTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTableQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTableQuery, GetTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTableQuery, GetTableQueryVariables>(GetTableDocument, options);
      }
export function useGetTableLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTableQuery, GetTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTableQuery, GetTableQueryVariables>(GetTableDocument, options);
        }
export type GetTableQueryHookResult = ReturnType<typeof useGetTableQuery>;
export type GetTableLazyQueryHookResult = ReturnType<typeof useGetTableLazyQuery>;
export type GetTableQueryResult = Apollo.QueryResult<GetTableQuery, GetTableQueryVariables>;
export const GetTablesDocument = gql`
    query GetTables($filters: TableFilter, $pagination: OffsetPaginationInput) {
  tables(filters: $filters, pagination: $pagination) {
    ...ListTable
  }
}
    ${ListTableFragmentDoc}`;

/**
 * __useGetTablesQuery__
 *
 * To run a query within a React component, call `useGetTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTablesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetTablesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTablesQuery, GetTablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTablesQuery, GetTablesQueryVariables>(GetTablesDocument, options);
      }
export function useGetTablesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTablesQuery, GetTablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTablesQuery, GetTablesQueryVariables>(GetTablesDocument, options);
        }
export type GetTablesQueryHookResult = ReturnType<typeof useGetTablesQuery>;
export type GetTablesLazyQueryHookResult = ReturnType<typeof useGetTablesLazyQuery>;
export type GetTablesQueryResult = Apollo.QueryResult<GetTablesQuery, GetTablesQueryVariables>;
export const GetRgbViewDocument = gql`
    query GetRGBView($id: ID!) {
  rgbView(id: $id) {
    ...RGBView
  }
}
    ${RgbViewFragmentDoc}`;

/**
 * __useGetRgbViewQuery__
 *
 * To run a query within a React component, call `useGetRgbViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRgbViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRgbViewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRgbViewQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetRgbViewQuery, GetRgbViewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRgbViewQuery, GetRgbViewQueryVariables>(GetRgbViewDocument, options);
      }
export function useGetRgbViewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRgbViewQuery, GetRgbViewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRgbViewQuery, GetRgbViewQueryVariables>(GetRgbViewDocument, options);
        }
export type GetRgbViewQueryHookResult = ReturnType<typeof useGetRgbViewQuery>;
export type GetRgbViewLazyQueryHookResult = ReturnType<typeof useGetRgbViewLazyQuery>;
export type GetRgbViewQueryResult = Apollo.QueryResult<GetRgbViewQuery, GetRgbViewQueryVariables>;
export const SearchRgbViewsDocument = gql`
    query SearchRGBViews($search: String, $values: [ID!]) {
  options: rgbViews(
    filters: {search: $search, ids: $values}
    pagination: {limit: 10}
  ) {
    value: id
    label: name
  }
}
    `;

/**
 * __useSearchRgbViewsQuery__
 *
 * To run a query within a React component, call `useSearchRgbViewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRgbViewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRgbViewsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useSearchRgbViewsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchRgbViewsQuery, SearchRgbViewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SearchRgbViewsQuery, SearchRgbViewsQueryVariables>(SearchRgbViewsDocument, options);
      }
export function useSearchRgbViewsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchRgbViewsQuery, SearchRgbViewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SearchRgbViewsQuery, SearchRgbViewsQueryVariables>(SearchRgbViewsDocument, options);
        }
export type SearchRgbViewsQueryHookResult = ReturnType<typeof useSearchRgbViewsQuery>;
export type SearchRgbViewsLazyQueryHookResult = ReturnType<typeof useSearchRgbViewsLazyQuery>;
export type SearchRgbViewsQueryResult = Apollo.QueryResult<SearchRgbViewsQuery, SearchRgbViewsQueryVariables>;
export const WatchImagesDocument = gql`
    subscription WatchImages($dataset: ID) {
  images(dataset: $dataset) {
    create {
      ...ListImage
    }
    delete
    update {
      ...ListImage
    }
  }
}
    ${ListImageFragmentDoc}`;

/**
 * __useWatchImagesSubscription__
 *
 * To run a query within a React component, call `useWatchImagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchImagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchImagesSubscription({
 *   variables: {
 *      dataset: // value for 'dataset'
 *   },
 * });
 */
export function useWatchImagesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<WatchImagesSubscription, WatchImagesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<WatchImagesSubscription, WatchImagesSubscriptionVariables>(WatchImagesDocument, options);
      }
export type WatchImagesSubscriptionHookResult = ReturnType<typeof useWatchImagesSubscription>;
export type WatchImagesSubscriptionResult = Apollo.SubscriptionResult<WatchImagesSubscription>;
export const WatchRoisDocument = gql`
    subscription WatchRois($image: ID!) {
  rois(image: $image) {
    create {
      ...ListROI
    }
    delete
    update {
      ...ListROI
    }
  }
}
    ${ListRoiFragmentDoc}`;

/**
 * __useWatchRoisSubscription__
 *
 * To run a query within a React component, call `useWatchRoisSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchRoisSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchRoisSubscription({
 *   variables: {
 *      image: // value for 'image'
 *   },
 * });
 */
export function useWatchRoisSubscription(baseOptions: ApolloReactHooks.SubscriptionHookOptions<WatchRoisSubscription, WatchRoisSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<WatchRoisSubscription, WatchRoisSubscriptionVariables>(WatchRoisDocument, options);
      }
export type WatchRoisSubscriptionHookResult = ReturnType<typeof useWatchRoisSubscription>;
export type WatchRoisSubscriptionResult = Apollo.SubscriptionResult<WatchRoisSubscription>;
export const WatchTransformationViewsDocument = gql`
    subscription WatchTransformationViews($stage: ID!) {
  affineTransformationViews(stage: $stage) {
    create {
      ...AffineTransformationView
      image {
        id
        store {
          shape
        }
        name
      }
    }
    delete
    update {
      ...AffineTransformationView
      image {
        id
        store {
          shape
        }
        name
      }
    }
  }
}
    ${AffineTransformationViewFragmentDoc}`;

/**
 * __useWatchTransformationViewsSubscription__
 *
 * To run a query within a React component, call `useWatchTransformationViewsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchTransformationViewsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchTransformationViewsSubscription({
 *   variables: {
 *      stage: // value for 'stage'
 *   },
 * });
 */
export function useWatchTransformationViewsSubscription(baseOptions: ApolloReactHooks.SubscriptionHookOptions<WatchTransformationViewsSubscription, WatchTransformationViewsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<WatchTransformationViewsSubscription, WatchTransformationViewsSubscriptionVariables>(WatchTransformationViewsDocument, options);
      }
export type WatchTransformationViewsSubscriptionHookResult = ReturnType<typeof useWatchTransformationViewsSubscription>;
export type WatchTransformationViewsSubscriptionResult = Apollo.SubscriptionResult<WatchTransformationViewsSubscription>;