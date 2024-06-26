// This file is auto-generated by @hey-api/openapi-ts

export type Link = {
  href?: string;
  title?: string;
  templated?: boolean;
  hreflang?: string;
  deprecation?: string;
  profile?: string;
  name?: string;
  type?: string;
};

export type EntityModelEncoreJob = {
  /**
   * The Encore Internal EncoreJob Identity
   */
  readonly id: string;
  /**
   * External id - for external backreference
   */
  externalId?: string | null;
  /**
   * The name of the encoding profile to use
   */
  profile: string;
  /**
   * Properties for evaluation of spring spel expressions in profile
   */
  profileParams: {
    [key: string]: {
      [key: string]: unknown;
    };
  };
  /**
   * A directory path to where the output should be written
   */
  outputFolder: string;
  /**
   * Base filename of output files
   */
  baseName: string;
  /**
   * The Creation date for the EncoreJob
   */
  readonly createdDate: string;
  /**
   * An url to which the progress status callback should be directed
   */
  progressCallbackUri?: string | null;
  /**
   * The queue priority of the EncoreJob
   */
  priority: number;
  /**
   * Transcode segments of specified length in seconds in parallell. Should be a multiple of target GOP.
   */
  segmentLength?: number | null;
  /**
   * The exception message, if the EncoreJob failed
   */
  readonly message?: string | null;
  /**
   * The EncoreJob progress
   */
  readonly progress: number;
  /**
   * The Encoding speed of the job (compared to it's play speed/input duration)
   */
  readonly speed?: number | null;
  /**
   * The time for when the EncoreJob was picked from the queue)
   */
  readonly startedDate?: string | null;
  /**
   * The time for when the EncoreJob was completed (fail or success)
   */
  readonly completedDate?: string | null;
  /**
   * Instruct Encore to overlay encoding metadata on the encoded video stream
   */
  debugOverlay: boolean;
  /**
   * Key/Values to append to the MDC log context
   */
  logContext: {
    [key: string]: string;
  };
  /**
   * Seek to given time in seconds before encoding output.
   */
  seekTo?: number | null;
  /**
   * Limit output to given duration.
   */
  duration?: number | null;
  /**
   * Time in seconds for when the thumbnail should be picked. Overrides profile configuration for thumbnails
   */
  thumbnailTime?: number | null;
  inputs: Array<Input>;
  /**
   * Analyzed models of the output files
   */
  readonly output: Array<MediaFile>;
  /**
   * The Job Status
   */
  readonly status:
    | 'NEW'
    | 'QUEUED'
    | 'IN_PROGRESS'
    | 'SUCCESSFUL'
    | 'FAILED'
    | 'CANCELLED';
  _links?: Array<Link>;
};

/**
 * The Job Status
 */
export type status =
  | 'NEW'
  | 'QUEUED'
  | 'IN_PROGRESS'
  | 'SUCCESSFUL'
  | 'FAILED'
  | 'CANCELLED';

export type Input = {
  /**
   * Seek to given time in seconds before decoding input. Faster than output seek (seekTo in encoreJob) but accuracy may depend on type of input. For some inputs a combination of the two might be preferred
   */
  seekTo?: number | null;
  analyzed?: MediaFile;
  copyTs: boolean;
  /**
   * Input params required to properly decode input
   */
  params: {
    [key: string]: string;
  };
  /**
   * URI of input file
   */
  uri: string;
  /**
   * Type of input
   */
  type: 'AudioVideo' | 'Video' | 'Audio';
};

/**
 * Type of input
 */
export type type = 'AudioVideo' | 'Video' | 'Audio';

/**
 * Analyzed models of the output files
 */
export type MediaFile = {
  fileSize: number;
  format: string;
  type: string;
  file: string;
};

export type PageMetadata = {
  totalPages?: number;
  totalElements?: number;
  number?: number;
  size?: number;
};

export type PagedModelEntityModelEncoreJob = {
  _embedded?: {
    encoreJobs?: Array<EntityModelEncoreJob>;
  };
  _links?: Array<Link>;
  page?: PageMetadata;
};

export type EncoreJobRequestBody = {
  /**
   * The Encore Internal EncoreJob Identity
   */
  readonly id: string;
  /**
   * External id - for external backreference
   */
  externalId?: string | null;
  /**
   * The name of the encoding profile to use
   */
  profile: string;
  /**
   * Properties for evaluation of spring spel expressions in profile
   */
  profileParams: {
    [key: string]: {
      [key: string]: unknown;
    };
  };
  /**
   * A directory path to where the output should be written
   */
  outputFolder: string;
  /**
   * Base filename of output files
   */
  baseName: string;
  /**
   * The Creation date for the EncoreJob
   */
  readonly createdDate: string;
  /**
   * An url to which the progress status callback should be directed
   */
  progressCallbackUri?: string | null;
  /**
   * The queue priority of the EncoreJob
   */
  priority: number;
  /**
   * Transcode segments of specified length in seconds in parallell. Should be a multiple of target GOP.
   */
  segmentLength?: number | null;
  /**
   * The exception message, if the EncoreJob failed
   */
  readonly message?: string | null;
  /**
   * The EncoreJob progress
   */
  readonly progress: number;
  /**
   * The Encoding speed of the job (compared to it's play speed/input duration)
   */
  readonly speed?: number | null;
  /**
   * The time for when the EncoreJob was picked from the queue)
   */
  readonly startedDate?: string | null;
  /**
   * The time for when the EncoreJob was completed (fail or success)
   */
  readonly completedDate?: string | null;
  /**
   * Instruct Encore to overlay encoding metadata on the encoded video stream
   */
  debugOverlay: boolean;
  /**
   * Key/Values to append to the MDC log context
   */
  logContext: {
    [key: string]: string;
  };
  /**
   * Seek to given time in seconds before encoding output.
   */
  seekTo?: number | null;
  /**
   * Limit output to given duration.
   */
  duration?: number | null;
  /**
   * Time in seconds for when the thumbnail should be picked. Overrides profile configuration for thumbnails
   */
  thumbnailTime?: number | null;
  inputs: Array<Input>;
  /**
   * Analyzed models of the output files
   */
  readonly output: Array<MediaFile>;
  /**
   * The Job Status
   */
  readonly status:
    | 'NEW'
    | 'QUEUED'
    | 'IN_PROGRESS'
    | 'SUCCESSFUL'
    | 'FAILED'
    | 'CANCELLED';
};

export type QueueItem = {
  id: string;
  priority: number;
  created: string;
  segment?: number;
};

export type GetCollectionResourceEncorejobGet1Data = {
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: Array<string>;
};

export type GetCollectionResourceEncorejobGet1Response =
  PagedModelEntityModelEncoreJob;

export type PostCollectionResourceEncorejobPostData = {
  requestBody: EncoreJobRequestBody;
};

export type PostCollectionResourceEncorejobPostResponse = EntityModelEncoreJob;

export type ExecuteSearchEncorejobGetData = {
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: Array<string>;
  status?:
    | 'NEW'
    | 'QUEUED'
    | 'IN_PROGRESS'
    | 'SUCCESSFUL'
    | 'FAILED'
    | 'CANCELLED';
};

export type ExecuteSearchEncorejobGetResponse = PagedModelEntityModelEncoreJob;

export type GetItemResourceEncorejobGetData = {
  id: string;
};

export type GetItemResourceEncorejobGetResponse = EntityModelEncoreJob;

export type PutItemResourceEncorejobPutData = {
  id: string;
  requestBody: EncoreJobRequestBody;
};

export type PutItemResourceEncorejobPutResponse = EntityModelEncoreJob | void;

export type DeleteItemResourceEncorejobDeleteData = {
  id: string;
};

export type DeleteItemResourceEncorejobDeleteResponse = void;

export type PatchItemResourceEncorejobPatchData = {
  id: string;
  requestBody: EncoreJobRequestBody;
};

export type PatchItemResourceEncorejobPatchResponse =
  EntityModelEncoreJob | void;

export type CancelData = {
  jobId: string;
};

export type CancelResponse = string;

export type GetQueueResponse = Array<QueueItem>;

export type $OpenApiTs = {
  '/encoreJobs': {
    get: {
      req: GetCollectionResourceEncorejobGet1Data;
      res: {
        /**
         * OK
         */
        200: PagedModelEntityModelEncoreJob;
      };
    };
    post: {
      req: PostCollectionResourceEncorejobPostData;
      res: {
        /**
         * Created
         */
        201: EntityModelEncoreJob;
      };
    };
  };
  '/encoreJobs/search/findByStatus': {
    get: {
      req: ExecuteSearchEncorejobGetData;
      res: {
        /**
         * OK
         */
        200: PagedModelEntityModelEncoreJob;
        /**
         * Not Found
         */
        404: unknown;
      };
    };
  };
  '/encoreJobs/{id}': {
    get: {
      req: GetItemResourceEncorejobGetData;
      res: {
        /**
         * OK
         */
        200: EntityModelEncoreJob;
        /**
         * Not Found
         */
        404: unknown;
      };
    };
    put: {
      req: PutItemResourceEncorejobPutData;
      res: {
        /**
         * OK
         */
        200: EntityModelEncoreJob;
        /**
         * No Content
         */
        204: void;
      };
    };
    delete: {
      req: DeleteItemResourceEncorejobDeleteData;
      res: {
        /**
         * No Content
         */
        204: void;
        /**
         * Not Found
         */
        404: unknown;
      };
    };
    patch: {
      req: PatchItemResourceEncorejobPatchData;
      res: {
        /**
         * OK
         */
        200: EntityModelEncoreJob;
        /**
         * No Content
         */
        204: void;
      };
    };
  };
  '/encoreJobs/{jobId}/cancel': {
    post: {
      req: CancelData;
      res: {
        /**
         * OK
         */
        200: string;
      };
    };
  };
  '/queue': {
    get: {
      res: {
        /**
         * OK
         */
        200: Array<QueueItem>;
      };
    };
  };
};
