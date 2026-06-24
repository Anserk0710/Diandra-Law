
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceFaq
 * 
 */
export type ServiceFaq = $Result.DefaultSelection<Prisma.$ServiceFaqPayload>
/**
 * Model ServiceCta
 * 
 */
export type ServiceCta = $Result.DefaultSelection<Prisma.$ServiceCtaPayload>
/**
 * Model Lawyer
 * 
 */
export type Lawyer = $Result.DefaultSelection<Prisma.$LawyerPayload>
/**
 * Model ArticleCategory
 * 
 */
export type ArticleCategory = $Result.DefaultSelection<Prisma.$ArticleCategoryPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model SiteSetting
 * 
 */
export type SiteSetting = $Result.DefaultSelection<Prisma.$SiteSettingPayload>
/**
 * Model SeoMeta
 * 
 */
export type SeoMeta = $Result.DefaultSelection<Prisma.$SeoMetaPayload>
/**
 * Model MediaUpload
 * 
 */
export type MediaUpload = $Result.DefaultSelection<Prisma.$MediaUploadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PageStatus: {
  draft: 'draft',
  published: 'published'
};

export type PageStatus = (typeof PageStatus)[keyof typeof PageStatus]


export const ContentStatus: {
  draft: 'draft',
  published: 'published',
  inactive: 'inactive'
};

export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus]


export const ArticleStatus: {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
};

export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus]


export const CtaType: {
  whatsapp: 'whatsapp',
  url: 'url',
  contact: 'contact'
};

export type CtaType = (typeof CtaType)[keyof typeof CtaType]

}

export type PageStatus = $Enums.PageStatus

export const PageStatus: typeof $Enums.PageStatus

export type ContentStatus = $Enums.ContentStatus

export const ContentStatus: typeof $Enums.ContentStatus

export type ArticleStatus = $Enums.ArticleStatus

export const ArticleStatus: typeof $Enums.ArticleStatus

export type CtaType = $Enums.CtaType

export const CtaType: typeof $Enums.CtaType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceFaq`: Exposes CRUD operations for the **ServiceFaq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceFaqs
    * const serviceFaqs = await prisma.serviceFaq.findMany()
    * ```
    */
  get serviceFaq(): Prisma.ServiceFaqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceCta`: Exposes CRUD operations for the **ServiceCta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceCtas
    * const serviceCtas = await prisma.serviceCta.findMany()
    * ```
    */
  get serviceCta(): Prisma.ServiceCtaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyer`: Exposes CRUD operations for the **Lawyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lawyers
    * const lawyers = await prisma.lawyer.findMany()
    * ```
    */
  get lawyer(): Prisma.LawyerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleCategory`: Exposes CRUD operations for the **ArticleCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleCategories
    * const articleCategories = await prisma.articleCategory.findMany()
    * ```
    */
  get articleCategory(): Prisma.ArticleCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteSetting`: Exposes CRUD operations for the **SiteSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSetting.findMany()
    * ```
    */
  get siteSetting(): Prisma.SiteSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seoMeta`: Exposes CRUD operations for the **SeoMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeoMetas
    * const seoMetas = await prisma.seoMeta.findMany()
    * ```
    */
  get seoMeta(): Prisma.SeoMetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaUpload`: Exposes CRUD operations for the **MediaUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaUploads
    * const mediaUploads = await prisma.mediaUpload.findMany()
    * ```
    */
  get mediaUpload(): Prisma.MediaUploadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Page: 'Page',
    Service: 'Service',
    ServiceFaq: 'ServiceFaq',
    ServiceCta: 'ServiceCta',
    Lawyer: 'Lawyer',
    ArticleCategory: 'ArticleCategory',
    Article: 'Article',
    Client: 'Client',
    SiteSetting: 'SiteSetting',
    SeoMeta: 'SeoMeta',
    MediaUpload: 'MediaUpload'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "page" | "service" | "serviceFaq" | "serviceCta" | "lawyer" | "articleCategory" | "article" | "client" | "siteSetting" | "seoMeta" | "mediaUpload"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceFaq: {
        payload: Prisma.$ServiceFaqPayload<ExtArgs>
        fields: Prisma.ServiceFaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload>
          }
          findFirst: {
            args: Prisma.ServiceFaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload>
          }
          findMany: {
            args: Prisma.ServiceFaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload>[]
          }
          create: {
            args: Prisma.ServiceFaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload>
          }
          createMany: {
            args: Prisma.ServiceFaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceFaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload>
          }
          update: {
            args: Prisma.ServiceFaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload>
          }
          deleteMany: {
            args: Prisma.ServiceFaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceFaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceFaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFaqPayload>
          }
          aggregate: {
            args: Prisma.ServiceFaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceFaq>
          }
          groupBy: {
            args: Prisma.ServiceFaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceFaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceFaqCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceFaqCountAggregateOutputType> | number
          }
        }
      }
      ServiceCta: {
        payload: Prisma.$ServiceCtaPayload<ExtArgs>
        fields: Prisma.ServiceCtaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceCtaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceCtaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload>
          }
          findFirst: {
            args: Prisma.ServiceCtaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceCtaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload>
          }
          findMany: {
            args: Prisma.ServiceCtaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload>[]
          }
          create: {
            args: Prisma.ServiceCtaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload>
          }
          createMany: {
            args: Prisma.ServiceCtaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceCtaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload>
          }
          update: {
            args: Prisma.ServiceCtaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload>
          }
          deleteMany: {
            args: Prisma.ServiceCtaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceCtaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceCtaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCtaPayload>
          }
          aggregate: {
            args: Prisma.ServiceCtaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceCta>
          }
          groupBy: {
            args: Prisma.ServiceCtaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceCtaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCtaCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCtaCountAggregateOutputType> | number
          }
        }
      }
      Lawyer: {
        payload: Prisma.$LawyerPayload<ExtArgs>
        fields: Prisma.LawyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          findFirst: {
            args: Prisma.LawyerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          findMany: {
            args: Prisma.LawyerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>[]
          }
          create: {
            args: Prisma.LawyerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          createMany: {
            args: Prisma.LawyerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LawyerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          update: {
            args: Prisma.LawyerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          deleteMany: {
            args: Prisma.LawyerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LawyerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          aggregate: {
            args: Prisma.LawyerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyer>
          }
          groupBy: {
            args: Prisma.LawyerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerCountAggregateOutputType> | number
          }
        }
      }
      ArticleCategory: {
        payload: Prisma.$ArticleCategoryPayload<ExtArgs>
        fields: Prisma.ArticleCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          findFirst: {
            args: Prisma.ArticleCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          findMany: {
            args: Prisma.ArticleCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>[]
          }
          create: {
            args: Prisma.ArticleCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          createMany: {
            args: Prisma.ArticleCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          update: {
            args: Prisma.ArticleCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ArticleCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          aggregate: {
            args: Prisma.ArticleCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleCategory>
          }
          groupBy: {
            args: Prisma.ArticleCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCategoryCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      SiteSetting: {
        payload: Prisma.$SiteSettingPayload<ExtArgs>
        fields: Prisma.SiteSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findMany: {
            args: Prisma.SiteSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          create: {
            args: Prisma.SiteSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          createMany: {
            args: Prisma.SiteSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SiteSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          update: {
            args: Prisma.SiteSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSetting>
          }
          groupBy: {
            args: Prisma.SiteSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingCountAggregateOutputType> | number
          }
        }
      }
      SeoMeta: {
        payload: Prisma.$SeoMetaPayload<ExtArgs>
        fields: Prisma.SeoMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeoMetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeoMetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload>
          }
          findFirst: {
            args: Prisma.SeoMetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeoMetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload>
          }
          findMany: {
            args: Prisma.SeoMetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload>[]
          }
          create: {
            args: Prisma.SeoMetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload>
          }
          createMany: {
            args: Prisma.SeoMetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeoMetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload>
          }
          update: {
            args: Prisma.SeoMetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload>
          }
          deleteMany: {
            args: Prisma.SeoMetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeoMetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeoMetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetaPayload>
          }
          aggregate: {
            args: Prisma.SeoMetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeoMeta>
          }
          groupBy: {
            args: Prisma.SeoMetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeoMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeoMetaCountArgs<ExtArgs>
            result: $Utils.Optional<SeoMetaCountAggregateOutputType> | number
          }
        }
      }
      MediaUpload: {
        payload: Prisma.$MediaUploadPayload<ExtArgs>
        fields: Prisma.MediaUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          findFirst: {
            args: Prisma.MediaUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          findMany: {
            args: Prisma.MediaUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>[]
          }
          create: {
            args: Prisma.MediaUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          createMany: {
            args: Prisma.MediaUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          update: {
            args: Prisma.MediaUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          deleteMany: {
            args: Prisma.MediaUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaUploadPayload>
          }
          aggregate: {
            args: Prisma.MediaUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaUpload>
          }
          groupBy: {
            args: Prisma.MediaUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaUploadCountArgs<ExtArgs>
            result: $Utils.Optional<MediaUploadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    page?: PageOmit
    service?: ServiceOmit
    serviceFaq?: ServiceFaqOmit
    serviceCta?: ServiceCtaOmit
    lawyer?: LawyerOmit
    articleCategory?: ArticleCategoryOmit
    article?: ArticleOmit
    client?: ClientOmit
    siteSetting?: SiteSettingOmit
    seoMeta?: SeoMetaOmit
    mediaUpload?: MediaUploadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    mediaUploads: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaUploads?: boolean | AdminCountOutputTypeCountMediaUploadsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountMediaUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaUploadWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    faqs: number
    ctas: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faqs?: boolean | ServiceCountOutputTypeCountFaqsArgs
    ctas?: boolean | ServiceCountOutputTypeCountCtasArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountFaqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceFaqWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountCtasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCtaWhereInput
  }


  /**
   * Count Type ArticleCategoryCountOutputType
   */

  export type ArticleCategoryCountOutputType = {
    articles: number
  }

  export type ArticleCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | ArticleCategoryCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * ArticleCategoryCountOutputType without action
   */
  export type ArticleCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategoryCountOutputType
     */
    select?: ArticleCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCategoryCountOutputType without action
   */
  export type ArticleCategoryCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: bigint | null
  }

  export type AdminMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    fullName: number
    isActive: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: bigint
    email: string
    passwordHash: string
    fullName: string
    isActive: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaUploads?: boolean | Admin$mediaUploadsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "fullName" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaUploads?: boolean | Admin$mediaUploadsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      mediaUploads: Prisma.$MediaUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      passwordHash: string
      fullName: string
      isActive: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mediaUploads<T extends Admin$mediaUploadsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$mediaUploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'BigInt'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly fullName: FieldRef<"Admin", 'String'>
    readonly isActive: FieldRef<"Admin", 'Boolean'>
    readonly lastLoginAt: FieldRef<"Admin", 'DateTime'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.mediaUploads
   */
  export type Admin$mediaUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    where?: MediaUploadWhereInput
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    cursor?: MediaUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageAvgAggregateOutputType = {
    id: number | null
  }

  export type PageSumAggregateOutputType = {
    id: bigint | null
  }

  export type PageMinAggregateOutputType = {
    id: bigint | null
    pageKey: string | null
    title: string | null
    status: $Enums.PageStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: bigint | null
    pageKey: string | null
    title: string | null
    status: $Enums.PageStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    pageKey: number
    title: number
    contentJson: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageAvgAggregateInputType = {
    id?: true
  }

  export type PageSumAggregateInputType = {
    id?: true
  }

  export type PageMinAggregateInputType = {
    id?: true
    pageKey?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    pageKey?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    pageKey?: true
    title?: true
    contentJson?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _avg?: PageAvgAggregateInputType
    _sum?: PageSumAggregateInputType
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: bigint
    pageKey: string
    title: string
    contentJson: JsonValue
    status: $Enums.PageStatus
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageKey?: boolean
    title?: boolean
    contentJson?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>



  export type PageSelectScalar = {
    id?: boolean
    pageKey?: boolean
    title?: boolean
    contentJson?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageKey" | "title" | "contentJson" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      pageKey: string
      title: string
      contentJson: Prisma.JsonValue
      status: $Enums.PageStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'BigInt'>
    readonly pageKey: FieldRef<"Page", 'String'>
    readonly title: FieldRef<"Page", 'String'>
    readonly contentJson: FieldRef<"Page", 'Json'>
    readonly status: FieldRef<"Page", 'PageStatus'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: bigint | null
    sortOrder: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    slug: string | null
    summary: string | null
    content: string | null
    coverImage: string | null
    featured: boolean | null
    sortOrder: number | null
    status: $Enums.ContentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    slug: string | null
    summary: string | null
    content: string | null
    coverImage: string | null
    featured: boolean | null
    sortOrder: number | null
    status: $Enums.ContentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    summary: number
    content: number
    coverImage: number
    featured: number
    sortOrder: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summary?: true
    content?: true
    coverImage?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summary?: true
    content?: true
    coverImage?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summary?: true
    content?: true
    coverImage?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: bigint
    title: string
    slug: string
    summary: string
    content: string
    coverImage: string | null
    featured: boolean
    sortOrder: number
    status: $Enums.ContentStatus
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    content?: boolean
    coverImage?: boolean
    featured?: boolean
    sortOrder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faqs?: boolean | Service$faqsArgs<ExtArgs>
    ctas?: boolean | Service$ctasArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    content?: boolean
    coverImage?: boolean
    featured?: boolean
    sortOrder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "summary" | "content" | "coverImage" | "featured" | "sortOrder" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faqs?: boolean | Service$faqsArgs<ExtArgs>
    ctas?: boolean | Service$ctasArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      faqs: Prisma.$ServiceFaqPayload<ExtArgs>[]
      ctas: Prisma.$ServiceCtaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      slug: string
      summary: string
      content: string
      coverImage: string | null
      featured: boolean
      sortOrder: number
      status: $Enums.ContentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faqs<T extends Service$faqsArgs<ExtArgs> = {}>(args?: Subset<T, Service$faqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ctas<T extends Service$ctasArgs<ExtArgs> = {}>(args?: Subset<T, Service$ctasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'BigInt'>
    readonly title: FieldRef<"Service", 'String'>
    readonly slug: FieldRef<"Service", 'String'>
    readonly summary: FieldRef<"Service", 'String'>
    readonly content: FieldRef<"Service", 'String'>
    readonly coverImage: FieldRef<"Service", 'String'>
    readonly featured: FieldRef<"Service", 'Boolean'>
    readonly sortOrder: FieldRef<"Service", 'Int'>
    readonly status: FieldRef<"Service", 'ContentStatus'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.faqs
   */
  export type Service$faqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    where?: ServiceFaqWhereInput
    orderBy?: ServiceFaqOrderByWithRelationInput | ServiceFaqOrderByWithRelationInput[]
    cursor?: ServiceFaqWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceFaqScalarFieldEnum | ServiceFaqScalarFieldEnum[]
  }

  /**
   * Service.ctas
   */
  export type Service$ctasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    where?: ServiceCtaWhereInput
    orderBy?: ServiceCtaOrderByWithRelationInput | ServiceCtaOrderByWithRelationInput[]
    cursor?: ServiceCtaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceCtaScalarFieldEnum | ServiceCtaScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceFaq
   */

  export type AggregateServiceFaq = {
    _count: ServiceFaqCountAggregateOutputType | null
    _avg: ServiceFaqAvgAggregateOutputType | null
    _sum: ServiceFaqSumAggregateOutputType | null
    _min: ServiceFaqMinAggregateOutputType | null
    _max: ServiceFaqMaxAggregateOutputType | null
  }

  export type ServiceFaqAvgAggregateOutputType = {
    id: number | null
    serviceId: number | null
    sortOrder: number | null
  }

  export type ServiceFaqSumAggregateOutputType = {
    id: bigint | null
    serviceId: bigint | null
    sortOrder: number | null
  }

  export type ServiceFaqMinAggregateOutputType = {
    id: bigint | null
    serviceId: bigint | null
    question: string | null
    answer: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceFaqMaxAggregateOutputType = {
    id: bigint | null
    serviceId: bigint | null
    question: string | null
    answer: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceFaqCountAggregateOutputType = {
    id: number
    serviceId: number
    question: number
    answer: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceFaqAvgAggregateInputType = {
    id?: true
    serviceId?: true
    sortOrder?: true
  }

  export type ServiceFaqSumAggregateInputType = {
    id?: true
    serviceId?: true
    sortOrder?: true
  }

  export type ServiceFaqMinAggregateInputType = {
    id?: true
    serviceId?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceFaqMaxAggregateInputType = {
    id?: true
    serviceId?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceFaqCountAggregateInputType = {
    id?: true
    serviceId?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceFaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceFaq to aggregate.
     */
    where?: ServiceFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFaqs to fetch.
     */
    orderBy?: ServiceFaqOrderByWithRelationInput | ServiceFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceFaqs
    **/
    _count?: true | ServiceFaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceFaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceFaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceFaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceFaqMaxAggregateInputType
  }

  export type GetServiceFaqAggregateType<T extends ServiceFaqAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceFaq[P]>
      : GetScalarType<T[P], AggregateServiceFaq[P]>
  }




  export type ServiceFaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceFaqWhereInput
    orderBy?: ServiceFaqOrderByWithAggregationInput | ServiceFaqOrderByWithAggregationInput[]
    by: ServiceFaqScalarFieldEnum[] | ServiceFaqScalarFieldEnum
    having?: ServiceFaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceFaqCountAggregateInputType | true
    _avg?: ServiceFaqAvgAggregateInputType
    _sum?: ServiceFaqSumAggregateInputType
    _min?: ServiceFaqMinAggregateInputType
    _max?: ServiceFaqMaxAggregateInputType
  }

  export type ServiceFaqGroupByOutputType = {
    id: bigint
    serviceId: bigint
    question: string
    answer: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ServiceFaqCountAggregateOutputType | null
    _avg: ServiceFaqAvgAggregateOutputType | null
    _sum: ServiceFaqSumAggregateOutputType | null
    _min: ServiceFaqMinAggregateOutputType | null
    _max: ServiceFaqMaxAggregateOutputType | null
  }

  type GetServiceFaqGroupByPayload<T extends ServiceFaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceFaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceFaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceFaqGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceFaqGroupByOutputType[P]>
        }
      >
    >


  export type ServiceFaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    question?: boolean
    answer?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceFaq"]>



  export type ServiceFaqSelectScalar = {
    id?: boolean
    serviceId?: boolean
    question?: boolean
    answer?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceFaqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "question" | "answer" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceFaq"]>
  export type ServiceFaqInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceFaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceFaq"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      serviceId: bigint
      question: string
      answer: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceFaq"]>
    composites: {}
  }

  type ServiceFaqGetPayload<S extends boolean | null | undefined | ServiceFaqDefaultArgs> = $Result.GetResult<Prisma.$ServiceFaqPayload, S>

  type ServiceFaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceFaqCountAggregateInputType | true
    }

  export interface ServiceFaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceFaq'], meta: { name: 'ServiceFaq' } }
    /**
     * Find zero or one ServiceFaq that matches the filter.
     * @param {ServiceFaqFindUniqueArgs} args - Arguments to find a ServiceFaq
     * @example
     * // Get one ServiceFaq
     * const serviceFaq = await prisma.serviceFaq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFaqFindUniqueArgs>(args: SelectSubset<T, ServiceFaqFindUniqueArgs<ExtArgs>>): Prisma__ServiceFaqClient<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceFaq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFaqFindUniqueOrThrowArgs} args - Arguments to find a ServiceFaq
     * @example
     * // Get one ServiceFaq
     * const serviceFaq = await prisma.serviceFaq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFaqFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceFaqClient<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceFaq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFaqFindFirstArgs} args - Arguments to find a ServiceFaq
     * @example
     * // Get one ServiceFaq
     * const serviceFaq = await prisma.serviceFaq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFaqFindFirstArgs>(args?: SelectSubset<T, ServiceFaqFindFirstArgs<ExtArgs>>): Prisma__ServiceFaqClient<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceFaq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFaqFindFirstOrThrowArgs} args - Arguments to find a ServiceFaq
     * @example
     * // Get one ServiceFaq
     * const serviceFaq = await prisma.serviceFaq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFaqFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceFaqClient<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceFaqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceFaqs
     * const serviceFaqs = await prisma.serviceFaq.findMany()
     * 
     * // Get first 10 ServiceFaqs
     * const serviceFaqs = await prisma.serviceFaq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceFaqWithIdOnly = await prisma.serviceFaq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFaqFindManyArgs>(args?: SelectSubset<T, ServiceFaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceFaq.
     * @param {ServiceFaqCreateArgs} args - Arguments to create a ServiceFaq.
     * @example
     * // Create one ServiceFaq
     * const ServiceFaq = await prisma.serviceFaq.create({
     *   data: {
     *     // ... data to create a ServiceFaq
     *   }
     * })
     * 
     */
    create<T extends ServiceFaqCreateArgs>(args: SelectSubset<T, ServiceFaqCreateArgs<ExtArgs>>): Prisma__ServiceFaqClient<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceFaqs.
     * @param {ServiceFaqCreateManyArgs} args - Arguments to create many ServiceFaqs.
     * @example
     * // Create many ServiceFaqs
     * const serviceFaq = await prisma.serviceFaq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceFaqCreateManyArgs>(args?: SelectSubset<T, ServiceFaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceFaq.
     * @param {ServiceFaqDeleteArgs} args - Arguments to delete one ServiceFaq.
     * @example
     * // Delete one ServiceFaq
     * const ServiceFaq = await prisma.serviceFaq.delete({
     *   where: {
     *     // ... filter to delete one ServiceFaq
     *   }
     * })
     * 
     */
    delete<T extends ServiceFaqDeleteArgs>(args: SelectSubset<T, ServiceFaqDeleteArgs<ExtArgs>>): Prisma__ServiceFaqClient<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceFaq.
     * @param {ServiceFaqUpdateArgs} args - Arguments to update one ServiceFaq.
     * @example
     * // Update one ServiceFaq
     * const serviceFaq = await prisma.serviceFaq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceFaqUpdateArgs>(args: SelectSubset<T, ServiceFaqUpdateArgs<ExtArgs>>): Prisma__ServiceFaqClient<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceFaqs.
     * @param {ServiceFaqDeleteManyArgs} args - Arguments to filter ServiceFaqs to delete.
     * @example
     * // Delete a few ServiceFaqs
     * const { count } = await prisma.serviceFaq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceFaqDeleteManyArgs>(args?: SelectSubset<T, ServiceFaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceFaqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceFaqs
     * const serviceFaq = await prisma.serviceFaq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceFaqUpdateManyArgs>(args: SelectSubset<T, ServiceFaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceFaq.
     * @param {ServiceFaqUpsertArgs} args - Arguments to update or create a ServiceFaq.
     * @example
     * // Update or create a ServiceFaq
     * const serviceFaq = await prisma.serviceFaq.upsert({
     *   create: {
     *     // ... data to create a ServiceFaq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceFaq we want to update
     *   }
     * })
     */
    upsert<T extends ServiceFaqUpsertArgs>(args: SelectSubset<T, ServiceFaqUpsertArgs<ExtArgs>>): Prisma__ServiceFaqClient<$Result.GetResult<Prisma.$ServiceFaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceFaqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFaqCountArgs} args - Arguments to filter ServiceFaqs to count.
     * @example
     * // Count the number of ServiceFaqs
     * const count = await prisma.serviceFaq.count({
     *   where: {
     *     // ... the filter for the ServiceFaqs we want to count
     *   }
     * })
    **/
    count<T extends ServiceFaqCountArgs>(
      args?: Subset<T, ServiceFaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceFaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceFaq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceFaqAggregateArgs>(args: Subset<T, ServiceFaqAggregateArgs>): Prisma.PrismaPromise<GetServiceFaqAggregateType<T>>

    /**
     * Group by ServiceFaq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFaqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceFaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceFaqGroupByArgs['orderBy'] }
        : { orderBy?: ServiceFaqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceFaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceFaq model
   */
  readonly fields: ServiceFaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceFaq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceFaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceFaq model
   */
  interface ServiceFaqFieldRefs {
    readonly id: FieldRef<"ServiceFaq", 'BigInt'>
    readonly serviceId: FieldRef<"ServiceFaq", 'BigInt'>
    readonly question: FieldRef<"ServiceFaq", 'String'>
    readonly answer: FieldRef<"ServiceFaq", 'String'>
    readonly sortOrder: FieldRef<"ServiceFaq", 'Int'>
    readonly createdAt: FieldRef<"ServiceFaq", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceFaq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceFaq findUnique
   */
  export type ServiceFaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFaq to fetch.
     */
    where: ServiceFaqWhereUniqueInput
  }

  /**
   * ServiceFaq findUniqueOrThrow
   */
  export type ServiceFaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFaq to fetch.
     */
    where: ServiceFaqWhereUniqueInput
  }

  /**
   * ServiceFaq findFirst
   */
  export type ServiceFaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFaq to fetch.
     */
    where?: ServiceFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFaqs to fetch.
     */
    orderBy?: ServiceFaqOrderByWithRelationInput | ServiceFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceFaqs.
     */
    cursor?: ServiceFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceFaqs.
     */
    distinct?: ServiceFaqScalarFieldEnum | ServiceFaqScalarFieldEnum[]
  }

  /**
   * ServiceFaq findFirstOrThrow
   */
  export type ServiceFaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFaq to fetch.
     */
    where?: ServiceFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFaqs to fetch.
     */
    orderBy?: ServiceFaqOrderByWithRelationInput | ServiceFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceFaqs.
     */
    cursor?: ServiceFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceFaqs.
     */
    distinct?: ServiceFaqScalarFieldEnum | ServiceFaqScalarFieldEnum[]
  }

  /**
   * ServiceFaq findMany
   */
  export type ServiceFaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFaqs to fetch.
     */
    where?: ServiceFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFaqs to fetch.
     */
    orderBy?: ServiceFaqOrderByWithRelationInput | ServiceFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceFaqs.
     */
    cursor?: ServiceFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceFaqs.
     */
    distinct?: ServiceFaqScalarFieldEnum | ServiceFaqScalarFieldEnum[]
  }

  /**
   * ServiceFaq create
   */
  export type ServiceFaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceFaq.
     */
    data: XOR<ServiceFaqCreateInput, ServiceFaqUncheckedCreateInput>
  }

  /**
   * ServiceFaq createMany
   */
  export type ServiceFaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceFaqs.
     */
    data: ServiceFaqCreateManyInput | ServiceFaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceFaq update
   */
  export type ServiceFaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceFaq.
     */
    data: XOR<ServiceFaqUpdateInput, ServiceFaqUncheckedUpdateInput>
    /**
     * Choose, which ServiceFaq to update.
     */
    where: ServiceFaqWhereUniqueInput
  }

  /**
   * ServiceFaq updateMany
   */
  export type ServiceFaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceFaqs.
     */
    data: XOR<ServiceFaqUpdateManyMutationInput, ServiceFaqUncheckedUpdateManyInput>
    /**
     * Filter which ServiceFaqs to update
     */
    where?: ServiceFaqWhereInput
    /**
     * Limit how many ServiceFaqs to update.
     */
    limit?: number
  }

  /**
   * ServiceFaq upsert
   */
  export type ServiceFaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceFaq to update in case it exists.
     */
    where: ServiceFaqWhereUniqueInput
    /**
     * In case the ServiceFaq found by the `where` argument doesn't exist, create a new ServiceFaq with this data.
     */
    create: XOR<ServiceFaqCreateInput, ServiceFaqUncheckedCreateInput>
    /**
     * In case the ServiceFaq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceFaqUpdateInput, ServiceFaqUncheckedUpdateInput>
  }

  /**
   * ServiceFaq delete
   */
  export type ServiceFaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
    /**
     * Filter which ServiceFaq to delete.
     */
    where: ServiceFaqWhereUniqueInput
  }

  /**
   * ServiceFaq deleteMany
   */
  export type ServiceFaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceFaqs to delete
     */
    where?: ServiceFaqWhereInput
    /**
     * Limit how many ServiceFaqs to delete.
     */
    limit?: number
  }

  /**
   * ServiceFaq without action
   */
  export type ServiceFaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFaq
     */
    select?: ServiceFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFaq
     */
    omit?: ServiceFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFaqInclude<ExtArgs> | null
  }


  /**
   * Model ServiceCta
   */

  export type AggregateServiceCta = {
    _count: ServiceCtaCountAggregateOutputType | null
    _avg: ServiceCtaAvgAggregateOutputType | null
    _sum: ServiceCtaSumAggregateOutputType | null
    _min: ServiceCtaMinAggregateOutputType | null
    _max: ServiceCtaMaxAggregateOutputType | null
  }

  export type ServiceCtaAvgAggregateOutputType = {
    id: number | null
    serviceId: number | null
  }

  export type ServiceCtaSumAggregateOutputType = {
    id: bigint | null
    serviceId: bigint | null
  }

  export type ServiceCtaMinAggregateOutputType = {
    id: bigint | null
    serviceId: bigint | null
    label: string | null
    link: string | null
    type: $Enums.CtaType | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCtaMaxAggregateOutputType = {
    id: bigint | null
    serviceId: bigint | null
    label: string | null
    link: string | null
    type: $Enums.CtaType | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCtaCountAggregateOutputType = {
    id: number
    serviceId: number
    label: number
    link: number
    type: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceCtaAvgAggregateInputType = {
    id?: true
    serviceId?: true
  }

  export type ServiceCtaSumAggregateInputType = {
    id?: true
    serviceId?: true
  }

  export type ServiceCtaMinAggregateInputType = {
    id?: true
    serviceId?: true
    label?: true
    link?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCtaMaxAggregateInputType = {
    id?: true
    serviceId?: true
    label?: true
    link?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCtaCountAggregateInputType = {
    id?: true
    serviceId?: true
    label?: true
    link?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceCtaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCta to aggregate.
     */
    where?: ServiceCtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCtas to fetch.
     */
    orderBy?: ServiceCtaOrderByWithRelationInput | ServiceCtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceCtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCtas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCtas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceCtas
    **/
    _count?: true | ServiceCtaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceCtaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceCtaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceCtaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceCtaMaxAggregateInputType
  }

  export type GetServiceCtaAggregateType<T extends ServiceCtaAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceCta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCta[P]>
      : GetScalarType<T[P], AggregateServiceCta[P]>
  }




  export type ServiceCtaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCtaWhereInput
    orderBy?: ServiceCtaOrderByWithAggregationInput | ServiceCtaOrderByWithAggregationInput[]
    by: ServiceCtaScalarFieldEnum[] | ServiceCtaScalarFieldEnum
    having?: ServiceCtaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCtaCountAggregateInputType | true
    _avg?: ServiceCtaAvgAggregateInputType
    _sum?: ServiceCtaSumAggregateInputType
    _min?: ServiceCtaMinAggregateInputType
    _max?: ServiceCtaMaxAggregateInputType
  }

  export type ServiceCtaGroupByOutputType = {
    id: bigint
    serviceId: bigint
    label: string
    link: string
    type: $Enums.CtaType
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCtaCountAggregateOutputType | null
    _avg: ServiceCtaAvgAggregateOutputType | null
    _sum: ServiceCtaSumAggregateOutputType | null
    _min: ServiceCtaMinAggregateOutputType | null
    _max: ServiceCtaMaxAggregateOutputType | null
  }

  type GetServiceCtaGroupByPayload<T extends ServiceCtaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceCtaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceCtaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCtaGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCtaGroupByOutputType[P]>
        }
      >
    >


  export type ServiceCtaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    label?: boolean
    link?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCta"]>



  export type ServiceCtaSelectScalar = {
    id?: boolean
    serviceId?: boolean
    label?: boolean
    link?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceCtaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "label" | "link" | "type" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceCta"]>
  export type ServiceCtaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceCtaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceCta"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      serviceId: bigint
      label: string
      link: string
      type: $Enums.CtaType
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceCta"]>
    composites: {}
  }

  type ServiceCtaGetPayload<S extends boolean | null | undefined | ServiceCtaDefaultArgs> = $Result.GetResult<Prisma.$ServiceCtaPayload, S>

  type ServiceCtaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceCtaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCtaCountAggregateInputType | true
    }

  export interface ServiceCtaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceCta'], meta: { name: 'ServiceCta' } }
    /**
     * Find zero or one ServiceCta that matches the filter.
     * @param {ServiceCtaFindUniqueArgs} args - Arguments to find a ServiceCta
     * @example
     * // Get one ServiceCta
     * const serviceCta = await prisma.serviceCta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCtaFindUniqueArgs>(args: SelectSubset<T, ServiceCtaFindUniqueArgs<ExtArgs>>): Prisma__ServiceCtaClient<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceCta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceCtaFindUniqueOrThrowArgs} args - Arguments to find a ServiceCta
     * @example
     * // Get one ServiceCta
     * const serviceCta = await prisma.serviceCta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCtaFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceCtaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceCtaClient<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCtaFindFirstArgs} args - Arguments to find a ServiceCta
     * @example
     * // Get one ServiceCta
     * const serviceCta = await prisma.serviceCta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCtaFindFirstArgs>(args?: SelectSubset<T, ServiceCtaFindFirstArgs<ExtArgs>>): Prisma__ServiceCtaClient<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCtaFindFirstOrThrowArgs} args - Arguments to find a ServiceCta
     * @example
     * // Get one ServiceCta
     * const serviceCta = await prisma.serviceCta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCtaFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceCtaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceCtaClient<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceCtas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCtaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCtas
     * const serviceCtas = await prisma.serviceCta.findMany()
     * 
     * // Get first 10 ServiceCtas
     * const serviceCtas = await prisma.serviceCta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceCtaWithIdOnly = await prisma.serviceCta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceCtaFindManyArgs>(args?: SelectSubset<T, ServiceCtaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceCta.
     * @param {ServiceCtaCreateArgs} args - Arguments to create a ServiceCta.
     * @example
     * // Create one ServiceCta
     * const ServiceCta = await prisma.serviceCta.create({
     *   data: {
     *     // ... data to create a ServiceCta
     *   }
     * })
     * 
     */
    create<T extends ServiceCtaCreateArgs>(args: SelectSubset<T, ServiceCtaCreateArgs<ExtArgs>>): Prisma__ServiceCtaClient<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceCtas.
     * @param {ServiceCtaCreateManyArgs} args - Arguments to create many ServiceCtas.
     * @example
     * // Create many ServiceCtas
     * const serviceCta = await prisma.serviceCta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCtaCreateManyArgs>(args?: SelectSubset<T, ServiceCtaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceCta.
     * @param {ServiceCtaDeleteArgs} args - Arguments to delete one ServiceCta.
     * @example
     * // Delete one ServiceCta
     * const ServiceCta = await prisma.serviceCta.delete({
     *   where: {
     *     // ... filter to delete one ServiceCta
     *   }
     * })
     * 
     */
    delete<T extends ServiceCtaDeleteArgs>(args: SelectSubset<T, ServiceCtaDeleteArgs<ExtArgs>>): Prisma__ServiceCtaClient<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceCta.
     * @param {ServiceCtaUpdateArgs} args - Arguments to update one ServiceCta.
     * @example
     * // Update one ServiceCta
     * const serviceCta = await prisma.serviceCta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceCtaUpdateArgs>(args: SelectSubset<T, ServiceCtaUpdateArgs<ExtArgs>>): Prisma__ServiceCtaClient<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceCtas.
     * @param {ServiceCtaDeleteManyArgs} args - Arguments to filter ServiceCtas to delete.
     * @example
     * // Delete a few ServiceCtas
     * const { count } = await prisma.serviceCta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceCtaDeleteManyArgs>(args?: SelectSubset<T, ServiceCtaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCtas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCtaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCtas
     * const serviceCta = await prisma.serviceCta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceCtaUpdateManyArgs>(args: SelectSubset<T, ServiceCtaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceCta.
     * @param {ServiceCtaUpsertArgs} args - Arguments to update or create a ServiceCta.
     * @example
     * // Update or create a ServiceCta
     * const serviceCta = await prisma.serviceCta.upsert({
     *   create: {
     *     // ... data to create a ServiceCta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCta we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCtaUpsertArgs>(args: SelectSubset<T, ServiceCtaUpsertArgs<ExtArgs>>): Prisma__ServiceCtaClient<$Result.GetResult<Prisma.$ServiceCtaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceCtas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCtaCountArgs} args - Arguments to filter ServiceCtas to count.
     * @example
     * // Count the number of ServiceCtas
     * const count = await prisma.serviceCta.count({
     *   where: {
     *     // ... the filter for the ServiceCtas we want to count
     *   }
     * })
    **/
    count<T extends ServiceCtaCountArgs>(
      args?: Subset<T, ServiceCtaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCtaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceCta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCtaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceCtaAggregateArgs>(args: Subset<T, ServiceCtaAggregateArgs>): Prisma.PrismaPromise<GetServiceCtaAggregateType<T>>

    /**
     * Group by ServiceCta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCtaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceCtaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCtaGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCtaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceCtaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceCtaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceCta model
   */
  readonly fields: ServiceCtaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCtaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceCta model
   */
  interface ServiceCtaFieldRefs {
    readonly id: FieldRef<"ServiceCta", 'BigInt'>
    readonly serviceId: FieldRef<"ServiceCta", 'BigInt'>
    readonly label: FieldRef<"ServiceCta", 'String'>
    readonly link: FieldRef<"ServiceCta", 'String'>
    readonly type: FieldRef<"ServiceCta", 'CtaType'>
    readonly isActive: FieldRef<"ServiceCta", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceCta", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceCta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceCta findUnique
   */
  export type ServiceCtaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCta to fetch.
     */
    where: ServiceCtaWhereUniqueInput
  }

  /**
   * ServiceCta findUniqueOrThrow
   */
  export type ServiceCtaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCta to fetch.
     */
    where: ServiceCtaWhereUniqueInput
  }

  /**
   * ServiceCta findFirst
   */
  export type ServiceCtaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCta to fetch.
     */
    where?: ServiceCtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCtas to fetch.
     */
    orderBy?: ServiceCtaOrderByWithRelationInput | ServiceCtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCtas.
     */
    cursor?: ServiceCtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCtas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCtas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCtas.
     */
    distinct?: ServiceCtaScalarFieldEnum | ServiceCtaScalarFieldEnum[]
  }

  /**
   * ServiceCta findFirstOrThrow
   */
  export type ServiceCtaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCta to fetch.
     */
    where?: ServiceCtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCtas to fetch.
     */
    orderBy?: ServiceCtaOrderByWithRelationInput | ServiceCtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCtas.
     */
    cursor?: ServiceCtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCtas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCtas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCtas.
     */
    distinct?: ServiceCtaScalarFieldEnum | ServiceCtaScalarFieldEnum[]
  }

  /**
   * ServiceCta findMany
   */
  export type ServiceCtaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCtas to fetch.
     */
    where?: ServiceCtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCtas to fetch.
     */
    orderBy?: ServiceCtaOrderByWithRelationInput | ServiceCtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceCtas.
     */
    cursor?: ServiceCtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCtas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCtas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCtas.
     */
    distinct?: ServiceCtaScalarFieldEnum | ServiceCtaScalarFieldEnum[]
  }

  /**
   * ServiceCta create
   */
  export type ServiceCtaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceCta.
     */
    data: XOR<ServiceCtaCreateInput, ServiceCtaUncheckedCreateInput>
  }

  /**
   * ServiceCta createMany
   */
  export type ServiceCtaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceCtas.
     */
    data: ServiceCtaCreateManyInput | ServiceCtaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCta update
   */
  export type ServiceCtaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceCta.
     */
    data: XOR<ServiceCtaUpdateInput, ServiceCtaUncheckedUpdateInput>
    /**
     * Choose, which ServiceCta to update.
     */
    where: ServiceCtaWhereUniqueInput
  }

  /**
   * ServiceCta updateMany
   */
  export type ServiceCtaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceCtas.
     */
    data: XOR<ServiceCtaUpdateManyMutationInput, ServiceCtaUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCtas to update
     */
    where?: ServiceCtaWhereInput
    /**
     * Limit how many ServiceCtas to update.
     */
    limit?: number
  }

  /**
   * ServiceCta upsert
   */
  export type ServiceCtaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceCta to update in case it exists.
     */
    where: ServiceCtaWhereUniqueInput
    /**
     * In case the ServiceCta found by the `where` argument doesn't exist, create a new ServiceCta with this data.
     */
    create: XOR<ServiceCtaCreateInput, ServiceCtaUncheckedCreateInput>
    /**
     * In case the ServiceCta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCtaUpdateInput, ServiceCtaUncheckedUpdateInput>
  }

  /**
   * ServiceCta delete
   */
  export type ServiceCtaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
    /**
     * Filter which ServiceCta to delete.
     */
    where: ServiceCtaWhereUniqueInput
  }

  /**
   * ServiceCta deleteMany
   */
  export type ServiceCtaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCtas to delete
     */
    where?: ServiceCtaWhereInput
    /**
     * Limit how many ServiceCtas to delete.
     */
    limit?: number
  }

  /**
   * ServiceCta without action
   */
  export type ServiceCtaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCta
     */
    select?: ServiceCtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCta
     */
    omit?: ServiceCtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCtaInclude<ExtArgs> | null
  }


  /**
   * Model Lawyer
   */

  export type AggregateLawyer = {
    _count: LawyerCountAggregateOutputType | null
    _avg: LawyerAvgAggregateOutputType | null
    _sum: LawyerSumAggregateOutputType | null
    _min: LawyerMinAggregateOutputType | null
    _max: LawyerMaxAggregateOutputType | null
  }

  export type LawyerAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type LawyerSumAggregateOutputType = {
    id: bigint | null
    sortOrder: number | null
  }

  export type LawyerMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    slug: string | null
    photo: string | null
    position: string | null
    shortBio: string | null
    fullBio: string | null
    specialty: string | null
    featured: boolean | null
    sortOrder: number | null
    status: $Enums.ContentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawyerMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    slug: string | null
    photo: string | null
    position: string | null
    shortBio: string | null
    fullBio: string | null
    specialty: string | null
    featured: boolean | null
    sortOrder: number | null
    status: $Enums.ContentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawyerCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    photo: number
    position: number
    shortBio: number
    fullBio: number
    specialty: number
    featured: number
    sortOrder: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LawyerAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type LawyerSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type LawyerMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    photo?: true
    position?: true
    shortBio?: true
    fullBio?: true
    specialty?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawyerMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    photo?: true
    position?: true
    shortBio?: true
    fullBio?: true
    specialty?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawyerCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    photo?: true
    position?: true
    shortBio?: true
    fullBio?: true
    specialty?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LawyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawyer to aggregate.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lawyers
    **/
    _count?: true | LawyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerMaxAggregateInputType
  }

  export type GetLawyerAggregateType<T extends LawyerAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyer[P]>
      : GetScalarType<T[P], AggregateLawyer[P]>
  }




  export type LawyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerWhereInput
    orderBy?: LawyerOrderByWithAggregationInput | LawyerOrderByWithAggregationInput[]
    by: LawyerScalarFieldEnum[] | LawyerScalarFieldEnum
    having?: LawyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerCountAggregateInputType | true
    _avg?: LawyerAvgAggregateInputType
    _sum?: LawyerSumAggregateInputType
    _min?: LawyerMinAggregateInputType
    _max?: LawyerMaxAggregateInputType
  }

  export type LawyerGroupByOutputType = {
    id: bigint
    name: string
    slug: string
    photo: string | null
    position: string
    shortBio: string
    fullBio: string
    specialty: string
    featured: boolean
    sortOrder: number
    status: $Enums.ContentStatus
    createdAt: Date
    updatedAt: Date
    _count: LawyerCountAggregateOutputType | null
    _avg: LawyerAvgAggregateOutputType | null
    _sum: LawyerSumAggregateOutputType | null
    _min: LawyerMinAggregateOutputType | null
    _max: LawyerMaxAggregateOutputType | null
  }

  type GetLawyerGroupByPayload<T extends LawyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerGroupByOutputType[P]>
        }
      >
    >


  export type LawyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    photo?: boolean
    position?: boolean
    shortBio?: boolean
    fullBio?: boolean
    specialty?: boolean
    featured?: boolean
    sortOrder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lawyer"]>



  export type LawyerSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    photo?: boolean
    position?: boolean
    shortBio?: boolean
    fullBio?: boolean
    specialty?: boolean
    featured?: boolean
    sortOrder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LawyerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "photo" | "position" | "shortBio" | "fullBio" | "specialty" | "featured" | "sortOrder" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["lawyer"]>

  export type $LawyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lawyer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      slug: string
      photo: string | null
      position: string
      shortBio: string
      fullBio: string
      specialty: string
      featured: boolean
      sortOrder: number
      status: $Enums.ContentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lawyer"]>
    composites: {}
  }

  type LawyerGetPayload<S extends boolean | null | undefined | LawyerDefaultArgs> = $Result.GetResult<Prisma.$LawyerPayload, S>

  type LawyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerCountAggregateInputType | true
    }

  export interface LawyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lawyer'], meta: { name: 'Lawyer' } }
    /**
     * Find zero or one Lawyer that matches the filter.
     * @param {LawyerFindUniqueArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerFindUniqueArgs>(args: SelectSubset<T, LawyerFindUniqueArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lawyer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerFindUniqueOrThrowArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindFirstArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerFindFirstArgs>(args?: SelectSubset<T, LawyerFindFirstArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindFirstOrThrowArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lawyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lawyers
     * const lawyers = await prisma.lawyer.findMany()
     * 
     * // Get first 10 Lawyers
     * const lawyers = await prisma.lawyer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerWithIdOnly = await prisma.lawyer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerFindManyArgs>(args?: SelectSubset<T, LawyerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lawyer.
     * @param {LawyerCreateArgs} args - Arguments to create a Lawyer.
     * @example
     * // Create one Lawyer
     * const Lawyer = await prisma.lawyer.create({
     *   data: {
     *     // ... data to create a Lawyer
     *   }
     * })
     * 
     */
    create<T extends LawyerCreateArgs>(args: SelectSubset<T, LawyerCreateArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lawyers.
     * @param {LawyerCreateManyArgs} args - Arguments to create many Lawyers.
     * @example
     * // Create many Lawyers
     * const lawyer = await prisma.lawyer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerCreateManyArgs>(args?: SelectSubset<T, LawyerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lawyer.
     * @param {LawyerDeleteArgs} args - Arguments to delete one Lawyer.
     * @example
     * // Delete one Lawyer
     * const Lawyer = await prisma.lawyer.delete({
     *   where: {
     *     // ... filter to delete one Lawyer
     *   }
     * })
     * 
     */
    delete<T extends LawyerDeleteArgs>(args: SelectSubset<T, LawyerDeleteArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lawyer.
     * @param {LawyerUpdateArgs} args - Arguments to update one Lawyer.
     * @example
     * // Update one Lawyer
     * const lawyer = await prisma.lawyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerUpdateArgs>(args: SelectSubset<T, LawyerUpdateArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lawyers.
     * @param {LawyerDeleteManyArgs} args - Arguments to filter Lawyers to delete.
     * @example
     * // Delete a few Lawyers
     * const { count } = await prisma.lawyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerDeleteManyArgs>(args?: SelectSubset<T, LawyerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lawyers
     * const lawyer = await prisma.lawyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerUpdateManyArgs>(args: SelectSubset<T, LawyerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lawyer.
     * @param {LawyerUpsertArgs} args - Arguments to update or create a Lawyer.
     * @example
     * // Update or create a Lawyer
     * const lawyer = await prisma.lawyer.upsert({
     *   create: {
     *     // ... data to create a Lawyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lawyer we want to update
     *   }
     * })
     */
    upsert<T extends LawyerUpsertArgs>(args: SelectSubset<T, LawyerUpsertArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lawyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerCountArgs} args - Arguments to filter Lawyers to count.
     * @example
     * // Count the number of Lawyers
     * const count = await prisma.lawyer.count({
     *   where: {
     *     // ... the filter for the Lawyers we want to count
     *   }
     * })
    **/
    count<T extends LawyerCountArgs>(
      args?: Subset<T, LawyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lawyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LawyerAggregateArgs>(args: Subset<T, LawyerAggregateArgs>): Prisma.PrismaPromise<GetLawyerAggregateType<T>>

    /**
     * Group by Lawyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LawyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerGroupByArgs['orderBy'] }
        : { orderBy?: LawyerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LawyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lawyer model
   */
  readonly fields: LawyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lawyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lawyer model
   */
  interface LawyerFieldRefs {
    readonly id: FieldRef<"Lawyer", 'BigInt'>
    readonly name: FieldRef<"Lawyer", 'String'>
    readonly slug: FieldRef<"Lawyer", 'String'>
    readonly photo: FieldRef<"Lawyer", 'String'>
    readonly position: FieldRef<"Lawyer", 'String'>
    readonly shortBio: FieldRef<"Lawyer", 'String'>
    readonly fullBio: FieldRef<"Lawyer", 'String'>
    readonly specialty: FieldRef<"Lawyer", 'String'>
    readonly featured: FieldRef<"Lawyer", 'Boolean'>
    readonly sortOrder: FieldRef<"Lawyer", 'Int'>
    readonly status: FieldRef<"Lawyer", 'ContentStatus'>
    readonly createdAt: FieldRef<"Lawyer", 'DateTime'>
    readonly updatedAt: FieldRef<"Lawyer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lawyer findUnique
   */
  export type LawyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer findUniqueOrThrow
   */
  export type LawyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer findFirst
   */
  export type LawyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer findFirstOrThrow
   */
  export type LawyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer findMany
   */
  export type LawyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Filter, which Lawyers to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer create
   */
  export type LawyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * The data needed to create a Lawyer.
     */
    data: XOR<LawyerCreateInput, LawyerUncheckedCreateInput>
  }

  /**
   * Lawyer createMany
   */
  export type LawyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lawyers.
     */
    data: LawyerCreateManyInput | LawyerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lawyer update
   */
  export type LawyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * The data needed to update a Lawyer.
     */
    data: XOR<LawyerUpdateInput, LawyerUncheckedUpdateInput>
    /**
     * Choose, which Lawyer to update.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer updateMany
   */
  export type LawyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lawyers.
     */
    data: XOR<LawyerUpdateManyMutationInput, LawyerUncheckedUpdateManyInput>
    /**
     * Filter which Lawyers to update
     */
    where?: LawyerWhereInput
    /**
     * Limit how many Lawyers to update.
     */
    limit?: number
  }

  /**
   * Lawyer upsert
   */
  export type LawyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * The filter to search for the Lawyer to update in case it exists.
     */
    where: LawyerWhereUniqueInput
    /**
     * In case the Lawyer found by the `where` argument doesn't exist, create a new Lawyer with this data.
     */
    create: XOR<LawyerCreateInput, LawyerUncheckedCreateInput>
    /**
     * In case the Lawyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerUpdateInput, LawyerUncheckedUpdateInput>
  }

  /**
   * Lawyer delete
   */
  export type LawyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Filter which Lawyer to delete.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer deleteMany
   */
  export type LawyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawyers to delete
     */
    where?: LawyerWhereInput
    /**
     * Limit how many Lawyers to delete.
     */
    limit?: number
  }

  /**
   * Lawyer without action
   */
  export type LawyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
  }


  /**
   * Model ArticleCategory
   */

  export type AggregateArticleCategory = {
    _count: ArticleCategoryCountAggregateOutputType | null
    _avg: ArticleCategoryAvgAggregateOutputType | null
    _sum: ArticleCategorySumAggregateOutputType | null
    _min: ArticleCategoryMinAggregateOutputType | null
    _max: ArticleCategoryMaxAggregateOutputType | null
  }

  export type ArticleCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ArticleCategorySumAggregateOutputType = {
    id: bigint | null
  }

  export type ArticleCategoryMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCategoryMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ArticleCategorySumAggregateInputType = {
    id?: true
  }

  export type ArticleCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCategory to aggregate.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleCategories
    **/
    _count?: true | ArticleCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleCategoryMaxAggregateInputType
  }

  export type GetArticleCategoryAggregateType<T extends ArticleCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleCategory[P]>
      : GetScalarType<T[P], AggregateArticleCategory[P]>
  }




  export type ArticleCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCategoryWhereInput
    orderBy?: ArticleCategoryOrderByWithAggregationInput | ArticleCategoryOrderByWithAggregationInput[]
    by: ArticleCategoryScalarFieldEnum[] | ArticleCategoryScalarFieldEnum
    having?: ArticleCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCategoryCountAggregateInputType | true
    _avg?: ArticleCategoryAvgAggregateInputType
    _sum?: ArticleCategorySumAggregateInputType
    _min?: ArticleCategoryMinAggregateInputType
    _max?: ArticleCategoryMaxAggregateInputType
  }

  export type ArticleCategoryGroupByOutputType = {
    id: bigint
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: ArticleCategoryCountAggregateOutputType | null
    _avg: ArticleCategoryAvgAggregateOutputType | null
    _sum: ArticleCategorySumAggregateOutputType | null
    _min: ArticleCategoryMinAggregateOutputType | null
    _max: ArticleCategoryMaxAggregateOutputType | null
  }

  type GetArticleCategoryGroupByPayload<T extends ArticleCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ArticleCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articles?: boolean | ArticleCategory$articlesArgs<ExtArgs>
    _count?: boolean | ArticleCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleCategory"]>



  export type ArticleCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["articleCategory"]>
  export type ArticleCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | ArticleCategory$articlesArgs<ExtArgs>
    _count?: boolean | ArticleCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArticleCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleCategory"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleCategory"]>
    composites: {}
  }

  type ArticleCategoryGetPayload<S extends boolean | null | undefined | ArticleCategoryDefaultArgs> = $Result.GetResult<Prisma.$ArticleCategoryPayload, S>

  type ArticleCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCategoryCountAggregateInputType | true
    }

  export interface ArticleCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleCategory'], meta: { name: 'ArticleCategory' } }
    /**
     * Find zero or one ArticleCategory that matches the filter.
     * @param {ArticleCategoryFindUniqueArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleCategoryFindUniqueArgs>(args: SelectSubset<T, ArticleCategoryFindUniqueArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleCategoryFindUniqueOrThrowArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindFirstArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleCategoryFindFirstArgs>(args?: SelectSubset<T, ArticleCategoryFindFirstArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindFirstOrThrowArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleCategories
     * const articleCategories = await prisma.articleCategory.findMany()
     * 
     * // Get first 10 ArticleCategories
     * const articleCategories = await prisma.articleCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleCategoryWithIdOnly = await prisma.articleCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleCategoryFindManyArgs>(args?: SelectSubset<T, ArticleCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleCategory.
     * @param {ArticleCategoryCreateArgs} args - Arguments to create a ArticleCategory.
     * @example
     * // Create one ArticleCategory
     * const ArticleCategory = await prisma.articleCategory.create({
     *   data: {
     *     // ... data to create a ArticleCategory
     *   }
     * })
     * 
     */
    create<T extends ArticleCategoryCreateArgs>(args: SelectSubset<T, ArticleCategoryCreateArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleCategories.
     * @param {ArticleCategoryCreateManyArgs} args - Arguments to create many ArticleCategories.
     * @example
     * // Create many ArticleCategories
     * const articleCategory = await prisma.articleCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCategoryCreateManyArgs>(args?: SelectSubset<T, ArticleCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleCategory.
     * @param {ArticleCategoryDeleteArgs} args - Arguments to delete one ArticleCategory.
     * @example
     * // Delete one ArticleCategory
     * const ArticleCategory = await prisma.articleCategory.delete({
     *   where: {
     *     // ... filter to delete one ArticleCategory
     *   }
     * })
     * 
     */
    delete<T extends ArticleCategoryDeleteArgs>(args: SelectSubset<T, ArticleCategoryDeleteArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleCategory.
     * @param {ArticleCategoryUpdateArgs} args - Arguments to update one ArticleCategory.
     * @example
     * // Update one ArticleCategory
     * const articleCategory = await prisma.articleCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleCategoryUpdateArgs>(args: SelectSubset<T, ArticleCategoryUpdateArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleCategories.
     * @param {ArticleCategoryDeleteManyArgs} args - Arguments to filter ArticleCategories to delete.
     * @example
     * // Delete a few ArticleCategories
     * const { count } = await prisma.articleCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleCategoryDeleteManyArgs>(args?: SelectSubset<T, ArticleCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleCategories
     * const articleCategory = await prisma.articleCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleCategoryUpdateManyArgs>(args: SelectSubset<T, ArticleCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleCategory.
     * @param {ArticleCategoryUpsertArgs} args - Arguments to update or create a ArticleCategory.
     * @example
     * // Update or create a ArticleCategory
     * const articleCategory = await prisma.articleCategory.upsert({
     *   create: {
     *     // ... data to create a ArticleCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleCategory we want to update
     *   }
     * })
     */
    upsert<T extends ArticleCategoryUpsertArgs>(args: SelectSubset<T, ArticleCategoryUpsertArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryCountArgs} args - Arguments to filter ArticleCategories to count.
     * @example
     * // Count the number of ArticleCategories
     * const count = await prisma.articleCategory.count({
     *   where: {
     *     // ... the filter for the ArticleCategories we want to count
     *   }
     * })
    **/
    count<T extends ArticleCategoryCountArgs>(
      args?: Subset<T, ArticleCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleCategoryAggregateArgs>(args: Subset<T, ArticleCategoryAggregateArgs>): Prisma.PrismaPromise<GetArticleCategoryAggregateType<T>>

    /**
     * Group by ArticleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ArticleCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleCategory model
   */
  readonly fields: ArticleCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends ArticleCategory$articlesArgs<ExtArgs> = {}>(args?: Subset<T, ArticleCategory$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleCategory model
   */
  interface ArticleCategoryFieldRefs {
    readonly id: FieldRef<"ArticleCategory", 'BigInt'>
    readonly name: FieldRef<"ArticleCategory", 'String'>
    readonly slug: FieldRef<"ArticleCategory", 'String'>
    readonly createdAt: FieldRef<"ArticleCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleCategory findUnique
   */
  export type ArticleCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory findUniqueOrThrow
   */
  export type ArticleCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory findFirst
   */
  export type ArticleCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory findFirstOrThrow
   */
  export type ArticleCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory findMany
   */
  export type ArticleCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCategories to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory create
   */
  export type ArticleCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleCategory.
     */
    data: XOR<ArticleCategoryCreateInput, ArticleCategoryUncheckedCreateInput>
  }

  /**
   * ArticleCategory createMany
   */
  export type ArticleCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleCategories.
     */
    data: ArticleCategoryCreateManyInput | ArticleCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleCategory update
   */
  export type ArticleCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleCategory.
     */
    data: XOR<ArticleCategoryUpdateInput, ArticleCategoryUncheckedUpdateInput>
    /**
     * Choose, which ArticleCategory to update.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory updateMany
   */
  export type ArticleCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleCategories.
     */
    data: XOR<ArticleCategoryUpdateManyMutationInput, ArticleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ArticleCategories to update
     */
    where?: ArticleCategoryWhereInput
    /**
     * Limit how many ArticleCategories to update.
     */
    limit?: number
  }

  /**
   * ArticleCategory upsert
   */
  export type ArticleCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleCategory to update in case it exists.
     */
    where: ArticleCategoryWhereUniqueInput
    /**
     * In case the ArticleCategory found by the `where` argument doesn't exist, create a new ArticleCategory with this data.
     */
    create: XOR<ArticleCategoryCreateInput, ArticleCategoryUncheckedCreateInput>
    /**
     * In case the ArticleCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleCategoryUpdateInput, ArticleCategoryUncheckedUpdateInput>
  }

  /**
   * ArticleCategory delete
   */
  export type ArticleCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    /**
     * Filter which ArticleCategory to delete.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory deleteMany
   */
  export type ArticleCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCategories to delete
     */
    where?: ArticleCategoryWhereInput
    /**
     * Limit how many ArticleCategories to delete.
     */
    limit?: number
  }

  /**
   * ArticleCategory.articles
   */
  export type ArticleCategory$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * ArticleCategory without action
   */
  export type ArticleCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: bigint | null
    categoryId: bigint | null
  }

  export type ArticleMinAggregateOutputType = {
    id: bigint | null
    categoryId: bigint | null
    title: string | null
    slug: string | null
    excerpt: string | null
    thumbnail: string | null
    content: string | null
    featured: boolean | null
    publishedAt: Date | null
    status: $Enums.ArticleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: bigint | null
    categoryId: bigint | null
    title: string | null
    slug: string | null
    excerpt: string | null
    thumbnail: string | null
    content: string | null
    featured: boolean | null
    publishedAt: Date | null
    status: $Enums.ArticleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    categoryId: number
    title: number
    slug: number
    excerpt: number
    thumbnail: number
    content: number
    featured: number
    publishedAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    slug?: true
    excerpt?: true
    thumbnail?: true
    content?: true
    featured?: true
    publishedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    slug?: true
    excerpt?: true
    thumbnail?: true
    content?: true
    featured?: true
    publishedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    slug?: true
    excerpt?: true
    thumbnail?: true
    content?: true
    featured?: true
    publishedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: bigint
    categoryId: bigint | null
    title: string
    slug: string
    excerpt: string | null
    thumbnail: string | null
    content: string
    featured: boolean
    publishedAt: Date | null
    status: $Enums.ArticleStatus
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    thumbnail?: boolean
    content?: boolean
    featured?: boolean
    publishedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Article$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>



  export type ArticleSelectScalar = {
    id?: boolean
    categoryId?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    thumbnail?: boolean
    content?: boolean
    featured?: boolean
    publishedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "title" | "slug" | "excerpt" | "thumbnail" | "content" | "featured" | "publishedAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Article$categoryArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      category: Prisma.$ArticleCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      categoryId: bigint | null
      title: string
      slug: string
      excerpt: string | null
      thumbnail: string | null
      content: string
      featured: boolean
      publishedAt: Date | null
      status: $Enums.ArticleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Article$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Article$categoryArgs<ExtArgs>>): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'BigInt'>
    readonly categoryId: FieldRef<"Article", 'BigInt'>
    readonly title: FieldRef<"Article", 'String'>
    readonly slug: FieldRef<"Article", 'String'>
    readonly excerpt: FieldRef<"Article", 'String'>
    readonly thumbnail: FieldRef<"Article", 'String'>
    readonly content: FieldRef<"Article", 'String'>
    readonly featured: FieldRef<"Article", 'Boolean'>
    readonly publishedAt: FieldRef<"Article", 'DateTime'>
    readonly status: FieldRef<"Article", 'ArticleStatus'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.category
   */
  export type Article$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCategory
     */
    omit?: ArticleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCategoryInclude<ExtArgs> | null
    where?: ArticleCategoryWhereInput
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: bigint | null
    sortOrder: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    slug: string | null
    logo: string | null
    shortDescription: string | null
    category: string | null
    featured: boolean | null
    sortOrder: number | null
    status: $Enums.ContentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    slug: string | null
    logo: string | null
    shortDescription: string | null
    category: string | null
    featured: boolean | null
    sortOrder: number | null
    status: $Enums.ContentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    logo: number
    shortDescription: number
    category: number
    featured: number
    sortOrder: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo?: true
    shortDescription?: true
    category?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo?: true
    shortDescription?: true
    category?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo?: true
    shortDescription?: true
    category?: true
    featured?: true
    sortOrder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: bigint
    name: string
    slug: string | null
    logo: string | null
    shortDescription: string | null
    category: string | null
    featured: boolean
    sortOrder: number
    status: $Enums.ContentStatus
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    logo?: boolean
    shortDescription?: boolean
    category?: boolean
    featured?: boolean
    sortOrder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>



  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    logo?: boolean
    shortDescription?: boolean
    category?: boolean
    featured?: boolean
    sortOrder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "logo" | "shortDescription" | "category" | "featured" | "sortOrder" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      slug: string | null
      logo: string | null
      shortDescription: string | null
      category: string | null
      featured: boolean
      sortOrder: number
      status: $Enums.ContentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'BigInt'>
    readonly name: FieldRef<"Client", 'String'>
    readonly slug: FieldRef<"Client", 'String'>
    readonly logo: FieldRef<"Client", 'String'>
    readonly shortDescription: FieldRef<"Client", 'String'>
    readonly category: FieldRef<"Client", 'String'>
    readonly featured: FieldRef<"Client", 'Boolean'>
    readonly sortOrder: FieldRef<"Client", 'Int'>
    readonly status: FieldRef<"Client", 'ContentStatus'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
  }


  /**
   * Model SiteSetting
   */

  export type AggregateSiteSetting = {
    _count: SiteSettingCountAggregateOutputType | null
    _avg: SiteSettingAvgAggregateOutputType | null
    _sum: SiteSettingSumAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  export type SiteSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SiteSettingSumAggregateOutputType = {
    id: bigint | null
  }

  export type SiteSettingMinAggregateOutputType = {
    id: bigint | null
    siteName: string | null
    siteTagline: string | null
    logoLight: string | null
    logoDark: string | null
    primaryColor: string | null
    secondaryColor: string | null
    whatsappNumber: string | null
    whatsappMessage: string | null
    email: string | null
    phone: string | null
    officeAddress: string | null
    mapEmbedUrl: string | null
    footerText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingMaxAggregateOutputType = {
    id: bigint | null
    siteName: string | null
    siteTagline: string | null
    logoLight: string | null
    logoDark: string | null
    primaryColor: string | null
    secondaryColor: string | null
    whatsappNumber: string | null
    whatsappMessage: string | null
    email: string | null
    phone: string | null
    officeAddress: string | null
    mapEmbedUrl: string | null
    footerText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingCountAggregateOutputType = {
    id: number
    siteName: number
    siteTagline: number
    logoLight: number
    logoDark: number
    primaryColor: number
    secondaryColor: number
    whatsappNumber: number
    whatsappMessage: number
    email: number
    phone: number
    officeAddress: number
    mapEmbedUrl: number
    footerText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingAvgAggregateInputType = {
    id?: true
  }

  export type SiteSettingSumAggregateInputType = {
    id?: true
  }

  export type SiteSettingMinAggregateInputType = {
    id?: true
    siteName?: true
    siteTagline?: true
    logoLight?: true
    logoDark?: true
    primaryColor?: true
    secondaryColor?: true
    whatsappNumber?: true
    whatsappMessage?: true
    email?: true
    phone?: true
    officeAddress?: true
    mapEmbedUrl?: true
    footerText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingMaxAggregateInputType = {
    id?: true
    siteName?: true
    siteTagline?: true
    logoLight?: true
    logoDark?: true
    primaryColor?: true
    secondaryColor?: true
    whatsappNumber?: true
    whatsappMessage?: true
    email?: true
    phone?: true
    officeAddress?: true
    mapEmbedUrl?: true
    footerText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingCountAggregateInputType = {
    id?: true
    siteName?: true
    siteTagline?: true
    logoLight?: true
    logoDark?: true
    primaryColor?: true
    secondaryColor?: true
    whatsappNumber?: true
    whatsappMessage?: true
    email?: true
    phone?: true
    officeAddress?: true
    mapEmbedUrl?: true
    footerText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSetting to aggregate.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingMaxAggregateInputType
  }

  export type GetSiteSettingAggregateType<T extends SiteSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSetting[P]>
      : GetScalarType<T[P], AggregateSiteSetting[P]>
  }




  export type SiteSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingWhereInput
    orderBy?: SiteSettingOrderByWithAggregationInput | SiteSettingOrderByWithAggregationInput[]
    by: SiteSettingScalarFieldEnum[] | SiteSettingScalarFieldEnum
    having?: SiteSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingCountAggregateInputType | true
    _avg?: SiteSettingAvgAggregateInputType
    _sum?: SiteSettingSumAggregateInputType
    _min?: SiteSettingMinAggregateInputType
    _max?: SiteSettingMaxAggregateInputType
  }

  export type SiteSettingGroupByOutputType = {
    id: bigint
    siteName: string | null
    siteTagline: string | null
    logoLight: string | null
    logoDark: string | null
    primaryColor: string | null
    secondaryColor: string | null
    whatsappNumber: string | null
    whatsappMessage: string | null
    email: string | null
    phone: string | null
    officeAddress: string | null
    mapEmbedUrl: string | null
    footerText: string | null
    createdAt: Date
    updatedAt: Date
    _count: SiteSettingCountAggregateOutputType | null
    _avg: SiteSettingAvgAggregateOutputType | null
    _sum: SiteSettingSumAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  type GetSiteSettingGroupByPayload<T extends SiteSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteName?: boolean
    siteTagline?: boolean
    logoLight?: boolean
    logoDark?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    whatsappNumber?: boolean
    whatsappMessage?: boolean
    email?: boolean
    phone?: boolean
    officeAddress?: boolean
    mapEmbedUrl?: boolean
    footerText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>



  export type SiteSettingSelectScalar = {
    id?: boolean
    siteName?: boolean
    siteTagline?: boolean
    logoLight?: boolean
    logoDark?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    whatsappNumber?: boolean
    whatsappMessage?: boolean
    email?: boolean
    phone?: boolean
    officeAddress?: boolean
    mapEmbedUrl?: boolean
    footerText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteName" | "siteTagline" | "logoLight" | "logoDark" | "primaryColor" | "secondaryColor" | "whatsappNumber" | "whatsappMessage" | "email" | "phone" | "officeAddress" | "mapEmbedUrl" | "footerText" | "createdAt" | "updatedAt", ExtArgs["result"]["siteSetting"]>

  export type $SiteSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      siteName: string | null
      siteTagline: string | null
      logoLight: string | null
      logoDark: string | null
      primaryColor: string | null
      secondaryColor: string | null
      whatsappNumber: string | null
      whatsappMessage: string | null
      email: string | null
      phone: string | null
      officeAddress: string | null
      mapEmbedUrl: string | null
      footerText: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteSetting"]>
    composites: {}
  }

  type SiteSettingGetPayload<S extends boolean | null | undefined | SiteSettingDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingPayload, S>

  type SiteSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteSettingCountAggregateInputType | true
    }

  export interface SiteSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSetting'], meta: { name: 'SiteSetting' } }
    /**
     * Find zero or one SiteSetting that matches the filter.
     * @param {SiteSettingFindUniqueArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingFindUniqueArgs>(args: SelectSubset<T, SiteSettingFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteSettingFindUniqueOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingFindFirstArgs>(args?: SelectSubset<T, SiteSettingFindFirstArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteSettingWithIdOnly = await prisma.siteSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteSettingFindManyArgs>(args?: SelectSubset<T, SiteSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteSetting.
     * @param {SiteSettingCreateArgs} args - Arguments to create a SiteSetting.
     * @example
     * // Create one SiteSetting
     * const SiteSetting = await prisma.siteSetting.create({
     *   data: {
     *     // ... data to create a SiteSetting
     *   }
     * })
     * 
     */
    create<T extends SiteSettingCreateArgs>(args: SelectSubset<T, SiteSettingCreateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSetting = await prisma.siteSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingCreateManyArgs>(args?: SelectSubset<T, SiteSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SiteSetting.
     * @param {SiteSettingDeleteArgs} args - Arguments to delete one SiteSetting.
     * @example
     * // Delete one SiteSetting
     * const SiteSetting = await prisma.siteSetting.delete({
     *   where: {
     *     // ... filter to delete one SiteSetting
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingDeleteArgs>(args: SelectSubset<T, SiteSettingDeleteArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteSetting.
     * @param {SiteSettingUpdateArgs} args - Arguments to update one SiteSetting.
     * @example
     * // Update one SiteSetting
     * const siteSetting = await prisma.siteSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingUpdateArgs>(args: SelectSubset<T, SiteSettingUpdateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingDeleteManyArgs>(args?: SelectSubset<T, SiteSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSetting = await prisma.siteSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingUpdateManyArgs>(args: SelectSubset<T, SiteSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteSetting.
     * @param {SiteSettingUpsertArgs} args - Arguments to update or create a SiteSetting.
     * @example
     * // Update or create a SiteSetting
     * const siteSetting = await prisma.siteSetting.upsert({
     *   create: {
     *     // ... data to create a SiteSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSetting we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingUpsertArgs>(args: SelectSubset<T, SiteSettingUpsertArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSetting.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingCountArgs>(
      args?: Subset<T, SiteSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteSettingAggregateArgs>(args: Subset<T, SiteSettingAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingAggregateType<T>>

    /**
     * Group by SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSetting model
   */
  readonly fields: SiteSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteSetting model
   */
  interface SiteSettingFieldRefs {
    readonly id: FieldRef<"SiteSetting", 'BigInt'>
    readonly siteName: FieldRef<"SiteSetting", 'String'>
    readonly siteTagline: FieldRef<"SiteSetting", 'String'>
    readonly logoLight: FieldRef<"SiteSetting", 'String'>
    readonly logoDark: FieldRef<"SiteSetting", 'String'>
    readonly primaryColor: FieldRef<"SiteSetting", 'String'>
    readonly secondaryColor: FieldRef<"SiteSetting", 'String'>
    readonly whatsappNumber: FieldRef<"SiteSetting", 'String'>
    readonly whatsappMessage: FieldRef<"SiteSetting", 'String'>
    readonly email: FieldRef<"SiteSetting", 'String'>
    readonly phone: FieldRef<"SiteSetting", 'String'>
    readonly officeAddress: FieldRef<"SiteSetting", 'String'>
    readonly mapEmbedUrl: FieldRef<"SiteSetting", 'String'>
    readonly footerText: FieldRef<"SiteSetting", 'String'>
    readonly createdAt: FieldRef<"SiteSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSetting findUnique
   */
  export type SiteSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findUniqueOrThrow
   */
  export type SiteSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findFirst
   */
  export type SiteSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findFirstOrThrow
   */
  export type SiteSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findMany
   */
  export type SiteSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting create
   */
  export type SiteSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteSetting.
     */
    data: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
  }

  /**
   * SiteSetting createMany
   */
  export type SiteSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingCreateManyInput | SiteSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSetting update
   */
  export type SiteSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteSetting.
     */
    data: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
    /**
     * Choose, which SiteSetting to update.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting updateMany
   */
  export type SiteSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingUpdateManyMutationInput, SiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSetting upsert
   */
  export type SiteSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteSetting to update in case it exists.
     */
    where: SiteSettingWhereUniqueInput
    /**
     * In case the SiteSetting found by the `where` argument doesn't exist, create a new SiteSetting with this data.
     */
    create: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
    /**
     * In case the SiteSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
  }

  /**
   * SiteSetting delete
   */
  export type SiteSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter which SiteSetting to delete.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting deleteMany
   */
  export type SiteSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingWhereInput
    /**
     * Limit how many SiteSettings to delete.
     */
    limit?: number
  }

  /**
   * SiteSetting without action
   */
  export type SiteSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
  }


  /**
   * Model SeoMeta
   */

  export type AggregateSeoMeta = {
    _count: SeoMetaCountAggregateOutputType | null
    _avg: SeoMetaAvgAggregateOutputType | null
    _sum: SeoMetaSumAggregateOutputType | null
    _min: SeoMetaMinAggregateOutputType | null
    _max: SeoMetaMaxAggregateOutputType | null
  }

  export type SeoMetaAvgAggregateOutputType = {
    id: number | null
    entityId: number | null
  }

  export type SeoMetaSumAggregateOutputType = {
    id: bigint | null
    entityId: bigint | null
  }

  export type SeoMetaMinAggregateOutputType = {
    id: bigint | null
    entityType: string | null
    entityId: bigint | null
    metaTitle: string | null
    metaDescription: string | null
    ogImage: string | null
    canonicalUrl: string | null
    robots: string | null
    schemaType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeoMetaMaxAggregateOutputType = {
    id: bigint | null
    entityType: string | null
    entityId: bigint | null
    metaTitle: string | null
    metaDescription: string | null
    ogImage: string | null
    canonicalUrl: string | null
    robots: string | null
    schemaType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeoMetaCountAggregateOutputType = {
    id: number
    entityType: number
    entityId: number
    metaTitle: number
    metaDescription: number
    ogImage: number
    canonicalUrl: number
    robots: number
    schemaType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeoMetaAvgAggregateInputType = {
    id?: true
    entityId?: true
  }

  export type SeoMetaSumAggregateInputType = {
    id?: true
    entityId?: true
  }

  export type SeoMetaMinAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    metaTitle?: true
    metaDescription?: true
    ogImage?: true
    canonicalUrl?: true
    robots?: true
    schemaType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeoMetaMaxAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    metaTitle?: true
    metaDescription?: true
    ogImage?: true
    canonicalUrl?: true
    robots?: true
    schemaType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeoMetaCountAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    metaTitle?: true
    metaDescription?: true
    ogImage?: true
    canonicalUrl?: true
    robots?: true
    schemaType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeoMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoMeta to aggregate.
     */
    where?: SeoMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoMetas to fetch.
     */
    orderBy?: SeoMetaOrderByWithRelationInput | SeoMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeoMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeoMetas
    **/
    _count?: true | SeoMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeoMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeoMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeoMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeoMetaMaxAggregateInputType
  }

  export type GetSeoMetaAggregateType<T extends SeoMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateSeoMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeoMeta[P]>
      : GetScalarType<T[P], AggregateSeoMeta[P]>
  }




  export type SeoMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoMetaWhereInput
    orderBy?: SeoMetaOrderByWithAggregationInput | SeoMetaOrderByWithAggregationInput[]
    by: SeoMetaScalarFieldEnum[] | SeoMetaScalarFieldEnum
    having?: SeoMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeoMetaCountAggregateInputType | true
    _avg?: SeoMetaAvgAggregateInputType
    _sum?: SeoMetaSumAggregateInputType
    _min?: SeoMetaMinAggregateInputType
    _max?: SeoMetaMaxAggregateInputType
  }

  export type SeoMetaGroupByOutputType = {
    id: bigint
    entityType: string
    entityId: bigint
    metaTitle: string | null
    metaDescription: string | null
    ogImage: string | null
    canonicalUrl: string | null
    robots: string | null
    schemaType: string | null
    createdAt: Date
    updatedAt: Date
    _count: SeoMetaCountAggregateOutputType | null
    _avg: SeoMetaAvgAggregateOutputType | null
    _sum: SeoMetaSumAggregateOutputType | null
    _min: SeoMetaMinAggregateOutputType | null
    _max: SeoMetaMaxAggregateOutputType | null
  }

  type GetSeoMetaGroupByPayload<T extends SeoMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeoMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeoMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeoMetaGroupByOutputType[P]>
            : GetScalarType<T[P], SeoMetaGroupByOutputType[P]>
        }
      >
    >


  export type SeoMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    ogImage?: boolean
    canonicalUrl?: boolean
    robots?: boolean
    schemaType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoMeta"]>



  export type SeoMetaSelectScalar = {
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    ogImage?: boolean
    canonicalUrl?: boolean
    robots?: boolean
    schemaType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeoMetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entityType" | "entityId" | "metaTitle" | "metaDescription" | "ogImage" | "canonicalUrl" | "robots" | "schemaType" | "createdAt" | "updatedAt", ExtArgs["result"]["seoMeta"]>

  export type $SeoMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeoMeta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      entityType: string
      entityId: bigint
      metaTitle: string | null
      metaDescription: string | null
      ogImage: string | null
      canonicalUrl: string | null
      robots: string | null
      schemaType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seoMeta"]>
    composites: {}
  }

  type SeoMetaGetPayload<S extends boolean | null | undefined | SeoMetaDefaultArgs> = $Result.GetResult<Prisma.$SeoMetaPayload, S>

  type SeoMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeoMetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeoMetaCountAggregateInputType | true
    }

  export interface SeoMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeoMeta'], meta: { name: 'SeoMeta' } }
    /**
     * Find zero or one SeoMeta that matches the filter.
     * @param {SeoMetaFindUniqueArgs} args - Arguments to find a SeoMeta
     * @example
     * // Get one SeoMeta
     * const seoMeta = await prisma.seoMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeoMetaFindUniqueArgs>(args: SelectSubset<T, SeoMetaFindUniqueArgs<ExtArgs>>): Prisma__SeoMetaClient<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeoMeta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeoMetaFindUniqueOrThrowArgs} args - Arguments to find a SeoMeta
     * @example
     * // Get one SeoMeta
     * const seoMeta = await prisma.seoMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeoMetaFindUniqueOrThrowArgs>(args: SelectSubset<T, SeoMetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeoMetaClient<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetaFindFirstArgs} args - Arguments to find a SeoMeta
     * @example
     * // Get one SeoMeta
     * const seoMeta = await prisma.seoMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeoMetaFindFirstArgs>(args?: SelectSubset<T, SeoMetaFindFirstArgs<ExtArgs>>): Prisma__SeoMetaClient<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetaFindFirstOrThrowArgs} args - Arguments to find a SeoMeta
     * @example
     * // Get one SeoMeta
     * const seoMeta = await prisma.seoMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeoMetaFindFirstOrThrowArgs>(args?: SelectSubset<T, SeoMetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeoMetaClient<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeoMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeoMetas
     * const seoMetas = await prisma.seoMeta.findMany()
     * 
     * // Get first 10 SeoMetas
     * const seoMetas = await prisma.seoMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seoMetaWithIdOnly = await prisma.seoMeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeoMetaFindManyArgs>(args?: SelectSubset<T, SeoMetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeoMeta.
     * @param {SeoMetaCreateArgs} args - Arguments to create a SeoMeta.
     * @example
     * // Create one SeoMeta
     * const SeoMeta = await prisma.seoMeta.create({
     *   data: {
     *     // ... data to create a SeoMeta
     *   }
     * })
     * 
     */
    create<T extends SeoMetaCreateArgs>(args: SelectSubset<T, SeoMetaCreateArgs<ExtArgs>>): Prisma__SeoMetaClient<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeoMetas.
     * @param {SeoMetaCreateManyArgs} args - Arguments to create many SeoMetas.
     * @example
     * // Create many SeoMetas
     * const seoMeta = await prisma.seoMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeoMetaCreateManyArgs>(args?: SelectSubset<T, SeoMetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SeoMeta.
     * @param {SeoMetaDeleteArgs} args - Arguments to delete one SeoMeta.
     * @example
     * // Delete one SeoMeta
     * const SeoMeta = await prisma.seoMeta.delete({
     *   where: {
     *     // ... filter to delete one SeoMeta
     *   }
     * })
     * 
     */
    delete<T extends SeoMetaDeleteArgs>(args: SelectSubset<T, SeoMetaDeleteArgs<ExtArgs>>): Prisma__SeoMetaClient<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeoMeta.
     * @param {SeoMetaUpdateArgs} args - Arguments to update one SeoMeta.
     * @example
     * // Update one SeoMeta
     * const seoMeta = await prisma.seoMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeoMetaUpdateArgs>(args: SelectSubset<T, SeoMetaUpdateArgs<ExtArgs>>): Prisma__SeoMetaClient<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeoMetas.
     * @param {SeoMetaDeleteManyArgs} args - Arguments to filter SeoMetas to delete.
     * @example
     * // Delete a few SeoMetas
     * const { count } = await prisma.seoMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeoMetaDeleteManyArgs>(args?: SelectSubset<T, SeoMetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeoMetas
     * const seoMeta = await prisma.seoMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeoMetaUpdateManyArgs>(args: SelectSubset<T, SeoMetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SeoMeta.
     * @param {SeoMetaUpsertArgs} args - Arguments to update or create a SeoMeta.
     * @example
     * // Update or create a SeoMeta
     * const seoMeta = await prisma.seoMeta.upsert({
     *   create: {
     *     // ... data to create a SeoMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeoMeta we want to update
     *   }
     * })
     */
    upsert<T extends SeoMetaUpsertArgs>(args: SelectSubset<T, SeoMetaUpsertArgs<ExtArgs>>): Prisma__SeoMetaClient<$Result.GetResult<Prisma.$SeoMetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeoMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetaCountArgs} args - Arguments to filter SeoMetas to count.
     * @example
     * // Count the number of SeoMetas
     * const count = await prisma.seoMeta.count({
     *   where: {
     *     // ... the filter for the SeoMetas we want to count
     *   }
     * })
    **/
    count<T extends SeoMetaCountArgs>(
      args?: Subset<T, SeoMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeoMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeoMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeoMetaAggregateArgs>(args: Subset<T, SeoMetaAggregateArgs>): Prisma.PrismaPromise<GetSeoMetaAggregateType<T>>

    /**
     * Group by SeoMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeoMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeoMetaGroupByArgs['orderBy'] }
        : { orderBy?: SeoMetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeoMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeoMeta model
   */
  readonly fields: SeoMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeoMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeoMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeoMeta model
   */
  interface SeoMetaFieldRefs {
    readonly id: FieldRef<"SeoMeta", 'BigInt'>
    readonly entityType: FieldRef<"SeoMeta", 'String'>
    readonly entityId: FieldRef<"SeoMeta", 'BigInt'>
    readonly metaTitle: FieldRef<"SeoMeta", 'String'>
    readonly metaDescription: FieldRef<"SeoMeta", 'String'>
    readonly ogImage: FieldRef<"SeoMeta", 'String'>
    readonly canonicalUrl: FieldRef<"SeoMeta", 'String'>
    readonly robots: FieldRef<"SeoMeta", 'String'>
    readonly schemaType: FieldRef<"SeoMeta", 'String'>
    readonly createdAt: FieldRef<"SeoMeta", 'DateTime'>
    readonly updatedAt: FieldRef<"SeoMeta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeoMeta findUnique
   */
  export type SeoMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * Filter, which SeoMeta to fetch.
     */
    where: SeoMetaWhereUniqueInput
  }

  /**
   * SeoMeta findUniqueOrThrow
   */
  export type SeoMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * Filter, which SeoMeta to fetch.
     */
    where: SeoMetaWhereUniqueInput
  }

  /**
   * SeoMeta findFirst
   */
  export type SeoMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * Filter, which SeoMeta to fetch.
     */
    where?: SeoMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoMetas to fetch.
     */
    orderBy?: SeoMetaOrderByWithRelationInput | SeoMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoMetas.
     */
    cursor?: SeoMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoMetas.
     */
    distinct?: SeoMetaScalarFieldEnum | SeoMetaScalarFieldEnum[]
  }

  /**
   * SeoMeta findFirstOrThrow
   */
  export type SeoMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * Filter, which SeoMeta to fetch.
     */
    where?: SeoMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoMetas to fetch.
     */
    orderBy?: SeoMetaOrderByWithRelationInput | SeoMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoMetas.
     */
    cursor?: SeoMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoMetas.
     */
    distinct?: SeoMetaScalarFieldEnum | SeoMetaScalarFieldEnum[]
  }

  /**
   * SeoMeta findMany
   */
  export type SeoMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * Filter, which SeoMetas to fetch.
     */
    where?: SeoMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoMetas to fetch.
     */
    orderBy?: SeoMetaOrderByWithRelationInput | SeoMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeoMetas.
     */
    cursor?: SeoMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoMetas.
     */
    distinct?: SeoMetaScalarFieldEnum | SeoMetaScalarFieldEnum[]
  }

  /**
   * SeoMeta create
   */
  export type SeoMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * The data needed to create a SeoMeta.
     */
    data: XOR<SeoMetaCreateInput, SeoMetaUncheckedCreateInput>
  }

  /**
   * SeoMeta createMany
   */
  export type SeoMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeoMetas.
     */
    data: SeoMetaCreateManyInput | SeoMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeoMeta update
   */
  export type SeoMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * The data needed to update a SeoMeta.
     */
    data: XOR<SeoMetaUpdateInput, SeoMetaUncheckedUpdateInput>
    /**
     * Choose, which SeoMeta to update.
     */
    where: SeoMetaWhereUniqueInput
  }

  /**
   * SeoMeta updateMany
   */
  export type SeoMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeoMetas.
     */
    data: XOR<SeoMetaUpdateManyMutationInput, SeoMetaUncheckedUpdateManyInput>
    /**
     * Filter which SeoMetas to update
     */
    where?: SeoMetaWhereInput
    /**
     * Limit how many SeoMetas to update.
     */
    limit?: number
  }

  /**
   * SeoMeta upsert
   */
  export type SeoMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * The filter to search for the SeoMeta to update in case it exists.
     */
    where: SeoMetaWhereUniqueInput
    /**
     * In case the SeoMeta found by the `where` argument doesn't exist, create a new SeoMeta with this data.
     */
    create: XOR<SeoMetaCreateInput, SeoMetaUncheckedCreateInput>
    /**
     * In case the SeoMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeoMetaUpdateInput, SeoMetaUncheckedUpdateInput>
  }

  /**
   * SeoMeta delete
   */
  export type SeoMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
    /**
     * Filter which SeoMeta to delete.
     */
    where: SeoMetaWhereUniqueInput
  }

  /**
   * SeoMeta deleteMany
   */
  export type SeoMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoMetas to delete
     */
    where?: SeoMetaWhereInput
    /**
     * Limit how many SeoMetas to delete.
     */
    limit?: number
  }

  /**
   * SeoMeta without action
   */
  export type SeoMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMeta
     */
    select?: SeoMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMeta
     */
    omit?: SeoMetaOmit<ExtArgs> | null
  }


  /**
   * Model MediaUpload
   */

  export type AggregateMediaUpload = {
    _count: MediaUploadCountAggregateOutputType | null
    _avg: MediaUploadAvgAggregateOutputType | null
    _sum: MediaUploadSumAggregateOutputType | null
    _min: MediaUploadMinAggregateOutputType | null
    _max: MediaUploadMaxAggregateOutputType | null
  }

  export type MediaUploadAvgAggregateOutputType = {
    id: number | null
    fileSize: number | null
    uploadedByAdminId: number | null
  }

  export type MediaUploadSumAggregateOutputType = {
    id: bigint | null
    fileSize: bigint | null
    uploadedByAdminId: bigint | null
  }

  export type MediaUploadMinAggregateOutputType = {
    id: bigint | null
    module: string | null
    originalName: string | null
    fileName: string | null
    filePath: string | null
    fileUrl: string | null
    mimeType: string | null
    fileSize: bigint | null
    uploadedByAdminId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaUploadMaxAggregateOutputType = {
    id: bigint | null
    module: string | null
    originalName: string | null
    fileName: string | null
    filePath: string | null
    fileUrl: string | null
    mimeType: string | null
    fileSize: bigint | null
    uploadedByAdminId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaUploadCountAggregateOutputType = {
    id: number
    module: number
    originalName: number
    fileName: number
    filePath: number
    fileUrl: number
    mimeType: number
    fileSize: number
    uploadedByAdminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaUploadAvgAggregateInputType = {
    id?: true
    fileSize?: true
    uploadedByAdminId?: true
  }

  export type MediaUploadSumAggregateInputType = {
    id?: true
    fileSize?: true
    uploadedByAdminId?: true
  }

  export type MediaUploadMinAggregateInputType = {
    id?: true
    module?: true
    originalName?: true
    fileName?: true
    filePath?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    uploadedByAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaUploadMaxAggregateInputType = {
    id?: true
    module?: true
    originalName?: true
    fileName?: true
    filePath?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    uploadedByAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaUploadCountAggregateInputType = {
    id?: true
    module?: true
    originalName?: true
    fileName?: true
    filePath?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    uploadedByAdminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaUpload to aggregate.
     */
    where?: MediaUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaUploads to fetch.
     */
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaUploads
    **/
    _count?: true | MediaUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaUploadMaxAggregateInputType
  }

  export type GetMediaUploadAggregateType<T extends MediaUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaUpload[P]>
      : GetScalarType<T[P], AggregateMediaUpload[P]>
  }




  export type MediaUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaUploadWhereInput
    orderBy?: MediaUploadOrderByWithAggregationInput | MediaUploadOrderByWithAggregationInput[]
    by: MediaUploadScalarFieldEnum[] | MediaUploadScalarFieldEnum
    having?: MediaUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaUploadCountAggregateInputType | true
    _avg?: MediaUploadAvgAggregateInputType
    _sum?: MediaUploadSumAggregateInputType
    _min?: MediaUploadMinAggregateInputType
    _max?: MediaUploadMaxAggregateInputType
  }

  export type MediaUploadGroupByOutputType = {
    id: bigint
    module: string
    originalName: string
    fileName: string
    filePath: string
    fileUrl: string
    mimeType: string
    fileSize: bigint
    uploadedByAdminId: bigint | null
    createdAt: Date
    updatedAt: Date
    _count: MediaUploadCountAggregateOutputType | null
    _avg: MediaUploadAvgAggregateOutputType | null
    _sum: MediaUploadSumAggregateOutputType | null
    _min: MediaUploadMinAggregateOutputType | null
    _max: MediaUploadMaxAggregateOutputType | null
  }

  type GetMediaUploadGroupByPayload<T extends MediaUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaUploadGroupByOutputType[P]>
            : GetScalarType<T[P], MediaUploadGroupByOutputType[P]>
        }
      >
    >


  export type MediaUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module?: boolean
    originalName?: boolean
    fileName?: boolean
    filePath?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    uploadedByAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedByAdmin?: boolean | MediaUpload$uploadedByAdminArgs<ExtArgs>
  }, ExtArgs["result"]["mediaUpload"]>



  export type MediaUploadSelectScalar = {
    id?: boolean
    module?: boolean
    originalName?: boolean
    fileName?: boolean
    filePath?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    uploadedByAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "module" | "originalName" | "fileName" | "filePath" | "fileUrl" | "mimeType" | "fileSize" | "uploadedByAdminId" | "createdAt" | "updatedAt", ExtArgs["result"]["mediaUpload"]>
  export type MediaUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedByAdmin?: boolean | MediaUpload$uploadedByAdminArgs<ExtArgs>
  }

  export type $MediaUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaUpload"
    objects: {
      uploadedByAdmin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      module: string
      originalName: string
      fileName: string
      filePath: string
      fileUrl: string
      mimeType: string
      fileSize: bigint
      uploadedByAdminId: bigint | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mediaUpload"]>
    composites: {}
  }

  type MediaUploadGetPayload<S extends boolean | null | undefined | MediaUploadDefaultArgs> = $Result.GetResult<Prisma.$MediaUploadPayload, S>

  type MediaUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaUploadCountAggregateInputType | true
    }

  export interface MediaUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaUpload'], meta: { name: 'MediaUpload' } }
    /**
     * Find zero or one MediaUpload that matches the filter.
     * @param {MediaUploadFindUniqueArgs} args - Arguments to find a MediaUpload
     * @example
     * // Get one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaUploadFindUniqueArgs>(args: SelectSubset<T, MediaUploadFindUniqueArgs<ExtArgs>>): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaUploadFindUniqueOrThrowArgs} args - Arguments to find a MediaUpload
     * @example
     * // Get one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadFindFirstArgs} args - Arguments to find a MediaUpload
     * @example
     * // Get one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaUploadFindFirstArgs>(args?: SelectSubset<T, MediaUploadFindFirstArgs<ExtArgs>>): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadFindFirstOrThrowArgs} args - Arguments to find a MediaUpload
     * @example
     * // Get one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaUploads
     * const mediaUploads = await prisma.mediaUpload.findMany()
     * 
     * // Get first 10 MediaUploads
     * const mediaUploads = await prisma.mediaUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaUploadWithIdOnly = await prisma.mediaUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaUploadFindManyArgs>(args?: SelectSubset<T, MediaUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaUpload.
     * @param {MediaUploadCreateArgs} args - Arguments to create a MediaUpload.
     * @example
     * // Create one MediaUpload
     * const MediaUpload = await prisma.mediaUpload.create({
     *   data: {
     *     // ... data to create a MediaUpload
     *   }
     * })
     * 
     */
    create<T extends MediaUploadCreateArgs>(args: SelectSubset<T, MediaUploadCreateArgs<ExtArgs>>): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaUploads.
     * @param {MediaUploadCreateManyArgs} args - Arguments to create many MediaUploads.
     * @example
     * // Create many MediaUploads
     * const mediaUpload = await prisma.mediaUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaUploadCreateManyArgs>(args?: SelectSubset<T, MediaUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MediaUpload.
     * @param {MediaUploadDeleteArgs} args - Arguments to delete one MediaUpload.
     * @example
     * // Delete one MediaUpload
     * const MediaUpload = await prisma.mediaUpload.delete({
     *   where: {
     *     // ... filter to delete one MediaUpload
     *   }
     * })
     * 
     */
    delete<T extends MediaUploadDeleteArgs>(args: SelectSubset<T, MediaUploadDeleteArgs<ExtArgs>>): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaUpload.
     * @param {MediaUploadUpdateArgs} args - Arguments to update one MediaUpload.
     * @example
     * // Update one MediaUpload
     * const mediaUpload = await prisma.mediaUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUploadUpdateArgs>(args: SelectSubset<T, MediaUploadUpdateArgs<ExtArgs>>): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaUploads.
     * @param {MediaUploadDeleteManyArgs} args - Arguments to filter MediaUploads to delete.
     * @example
     * // Delete a few MediaUploads
     * const { count } = await prisma.mediaUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaUploadDeleteManyArgs>(args?: SelectSubset<T, MediaUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaUploads
     * const mediaUpload = await prisma.mediaUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUploadUpdateManyArgs>(args: SelectSubset<T, MediaUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaUpload.
     * @param {MediaUploadUpsertArgs} args - Arguments to update or create a MediaUpload.
     * @example
     * // Update or create a MediaUpload
     * const mediaUpload = await prisma.mediaUpload.upsert({
     *   create: {
     *     // ... data to create a MediaUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaUpload we want to update
     *   }
     * })
     */
    upsert<T extends MediaUploadUpsertArgs>(args: SelectSubset<T, MediaUploadUpsertArgs<ExtArgs>>): Prisma__MediaUploadClient<$Result.GetResult<Prisma.$MediaUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadCountArgs} args - Arguments to filter MediaUploads to count.
     * @example
     * // Count the number of MediaUploads
     * const count = await prisma.mediaUpload.count({
     *   where: {
     *     // ... the filter for the MediaUploads we want to count
     *   }
     * })
    **/
    count<T extends MediaUploadCountArgs>(
      args?: Subset<T, MediaUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaUploadAggregateArgs>(args: Subset<T, MediaUploadAggregateArgs>): Prisma.PrismaPromise<GetMediaUploadAggregateType<T>>

    /**
     * Group by MediaUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUploadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaUploadGroupByArgs['orderBy'] }
        : { orderBy?: MediaUploadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaUpload model
   */
  readonly fields: MediaUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedByAdmin<T extends MediaUpload$uploadedByAdminArgs<ExtArgs> = {}>(args?: Subset<T, MediaUpload$uploadedByAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaUpload model
   */
  interface MediaUploadFieldRefs {
    readonly id: FieldRef<"MediaUpload", 'BigInt'>
    readonly module: FieldRef<"MediaUpload", 'String'>
    readonly originalName: FieldRef<"MediaUpload", 'String'>
    readonly fileName: FieldRef<"MediaUpload", 'String'>
    readonly filePath: FieldRef<"MediaUpload", 'String'>
    readonly fileUrl: FieldRef<"MediaUpload", 'String'>
    readonly mimeType: FieldRef<"MediaUpload", 'String'>
    readonly fileSize: FieldRef<"MediaUpload", 'BigInt'>
    readonly uploadedByAdminId: FieldRef<"MediaUpload", 'BigInt'>
    readonly createdAt: FieldRef<"MediaUpload", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaUpload", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaUpload findUnique
   */
  export type MediaUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUpload to fetch.
     */
    where: MediaUploadWhereUniqueInput
  }

  /**
   * MediaUpload findUniqueOrThrow
   */
  export type MediaUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUpload to fetch.
     */
    where: MediaUploadWhereUniqueInput
  }

  /**
   * MediaUpload findFirst
   */
  export type MediaUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUpload to fetch.
     */
    where?: MediaUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaUploads to fetch.
     */
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaUploads.
     */
    cursor?: MediaUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaUploads.
     */
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }

  /**
   * MediaUpload findFirstOrThrow
   */
  export type MediaUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUpload to fetch.
     */
    where?: MediaUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaUploads to fetch.
     */
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaUploads.
     */
    cursor?: MediaUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaUploads.
     */
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }

  /**
   * MediaUpload findMany
   */
  export type MediaUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter, which MediaUploads to fetch.
     */
    where?: MediaUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaUploads to fetch.
     */
    orderBy?: MediaUploadOrderByWithRelationInput | MediaUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaUploads.
     */
    cursor?: MediaUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaUploads.
     */
    distinct?: MediaUploadScalarFieldEnum | MediaUploadScalarFieldEnum[]
  }

  /**
   * MediaUpload create
   */
  export type MediaUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaUpload.
     */
    data: XOR<MediaUploadCreateInput, MediaUploadUncheckedCreateInput>
  }

  /**
   * MediaUpload createMany
   */
  export type MediaUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaUploads.
     */
    data: MediaUploadCreateManyInput | MediaUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaUpload update
   */
  export type MediaUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaUpload.
     */
    data: XOR<MediaUploadUpdateInput, MediaUploadUncheckedUpdateInput>
    /**
     * Choose, which MediaUpload to update.
     */
    where: MediaUploadWhereUniqueInput
  }

  /**
   * MediaUpload updateMany
   */
  export type MediaUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaUploads.
     */
    data: XOR<MediaUploadUpdateManyMutationInput, MediaUploadUncheckedUpdateManyInput>
    /**
     * Filter which MediaUploads to update
     */
    where?: MediaUploadWhereInput
    /**
     * Limit how many MediaUploads to update.
     */
    limit?: number
  }

  /**
   * MediaUpload upsert
   */
  export type MediaUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaUpload to update in case it exists.
     */
    where: MediaUploadWhereUniqueInput
    /**
     * In case the MediaUpload found by the `where` argument doesn't exist, create a new MediaUpload with this data.
     */
    create: XOR<MediaUploadCreateInput, MediaUploadUncheckedCreateInput>
    /**
     * In case the MediaUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUploadUpdateInput, MediaUploadUncheckedUpdateInput>
  }

  /**
   * MediaUpload delete
   */
  export type MediaUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
    /**
     * Filter which MediaUpload to delete.
     */
    where: MediaUploadWhereUniqueInput
  }

  /**
   * MediaUpload deleteMany
   */
  export type MediaUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaUploads to delete
     */
    where?: MediaUploadWhereInput
    /**
     * Limit how many MediaUploads to delete.
     */
    limit?: number
  }

  /**
   * MediaUpload.uploadedByAdmin
   */
  export type MediaUpload$uploadedByAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * MediaUpload without action
   */
  export type MediaUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaUpload
     */
    select?: MediaUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaUpload
     */
    omit?: MediaUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaUploadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    pageKey: 'pageKey',
    title: 'title',
    contentJson: 'contentJson',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    summary: 'summary',
    content: 'content',
    coverImage: 'coverImage',
    featured: 'featured',
    sortOrder: 'sortOrder',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceFaqScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    question: 'question',
    answer: 'answer',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceFaqScalarFieldEnum = (typeof ServiceFaqScalarFieldEnum)[keyof typeof ServiceFaqScalarFieldEnum]


  export const ServiceCtaScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    label: 'label',
    link: 'link',
    type: 'type',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceCtaScalarFieldEnum = (typeof ServiceCtaScalarFieldEnum)[keyof typeof ServiceCtaScalarFieldEnum]


  export const LawyerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    photo: 'photo',
    position: 'position',
    shortBio: 'shortBio',
    fullBio: 'fullBio',
    specialty: 'specialty',
    featured: 'featured',
    sortOrder: 'sortOrder',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LawyerScalarFieldEnum = (typeof LawyerScalarFieldEnum)[keyof typeof LawyerScalarFieldEnum]


  export const ArticleCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleCategoryScalarFieldEnum = (typeof ArticleCategoryScalarFieldEnum)[keyof typeof ArticleCategoryScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    thumbnail: 'thumbnail',
    content: 'content',
    featured: 'featured',
    publishedAt: 'publishedAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logo: 'logo',
    shortDescription: 'shortDescription',
    category: 'category',
    featured: 'featured',
    sortOrder: 'sortOrder',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SiteSettingScalarFieldEnum: {
    id: 'id',
    siteName: 'siteName',
    siteTagline: 'siteTagline',
    logoLight: 'logoLight',
    logoDark: 'logoDark',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    whatsappNumber: 'whatsappNumber',
    whatsappMessage: 'whatsappMessage',
    email: 'email',
    phone: 'phone',
    officeAddress: 'officeAddress',
    mapEmbedUrl: 'mapEmbedUrl',
    footerText: 'footerText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingScalarFieldEnum = (typeof SiteSettingScalarFieldEnum)[keyof typeof SiteSettingScalarFieldEnum]


  export const SeoMetaScalarFieldEnum: {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    ogImage: 'ogImage',
    canonicalUrl: 'canonicalUrl',
    robots: 'robots',
    schemaType: 'schemaType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeoMetaScalarFieldEnum = (typeof SeoMetaScalarFieldEnum)[keyof typeof SeoMetaScalarFieldEnum]


  export const MediaUploadScalarFieldEnum: {
    id: 'id',
    module: 'module',
    originalName: 'originalName',
    fileName: 'fileName',
    filePath: 'filePath',
    fileUrl: 'fileUrl',
    mimeType: 'mimeType',
    fileSize: 'fileSize',
    uploadedByAdminId: 'uploadedByAdminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaUploadScalarFieldEnum = (typeof MediaUploadScalarFieldEnum)[keyof typeof MediaUploadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const PageOrderByRelevanceFieldEnum: {
    pageKey: 'pageKey',
    title: 'title'
  };

  export type PageOrderByRelevanceFieldEnum = (typeof PageOrderByRelevanceFieldEnum)[keyof typeof PageOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    title: 'title',
    slug: 'slug',
    summary: 'summary',
    content: 'content',
    coverImage: 'coverImage'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


  export const ServiceFaqOrderByRelevanceFieldEnum: {
    question: 'question',
    answer: 'answer'
  };

  export type ServiceFaqOrderByRelevanceFieldEnum = (typeof ServiceFaqOrderByRelevanceFieldEnum)[keyof typeof ServiceFaqOrderByRelevanceFieldEnum]


  export const ServiceCtaOrderByRelevanceFieldEnum: {
    label: 'label',
    link: 'link'
  };

  export type ServiceCtaOrderByRelevanceFieldEnum = (typeof ServiceCtaOrderByRelevanceFieldEnum)[keyof typeof ServiceCtaOrderByRelevanceFieldEnum]


  export const LawyerOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug',
    photo: 'photo',
    position: 'position',
    shortBio: 'shortBio',
    fullBio: 'fullBio',
    specialty: 'specialty'
  };

  export type LawyerOrderByRelevanceFieldEnum = (typeof LawyerOrderByRelevanceFieldEnum)[keyof typeof LawyerOrderByRelevanceFieldEnum]


  export const ArticleCategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug'
  };

  export type ArticleCategoryOrderByRelevanceFieldEnum = (typeof ArticleCategoryOrderByRelevanceFieldEnum)[keyof typeof ArticleCategoryOrderByRelevanceFieldEnum]


  export const ArticleOrderByRelevanceFieldEnum: {
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    thumbnail: 'thumbnail',
    content: 'content'
  };

  export type ArticleOrderByRelevanceFieldEnum = (typeof ArticleOrderByRelevanceFieldEnum)[keyof typeof ArticleOrderByRelevanceFieldEnum]


  export const ClientOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug',
    logo: 'logo',
    shortDescription: 'shortDescription',
    category: 'category'
  };

  export type ClientOrderByRelevanceFieldEnum = (typeof ClientOrderByRelevanceFieldEnum)[keyof typeof ClientOrderByRelevanceFieldEnum]


  export const SiteSettingOrderByRelevanceFieldEnum: {
    siteName: 'siteName',
    siteTagline: 'siteTagline',
    logoLight: 'logoLight',
    logoDark: 'logoDark',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    whatsappNumber: 'whatsappNumber',
    whatsappMessage: 'whatsappMessage',
    email: 'email',
    phone: 'phone',
    officeAddress: 'officeAddress',
    mapEmbedUrl: 'mapEmbedUrl',
    footerText: 'footerText'
  };

  export type SiteSettingOrderByRelevanceFieldEnum = (typeof SiteSettingOrderByRelevanceFieldEnum)[keyof typeof SiteSettingOrderByRelevanceFieldEnum]


  export const SeoMetaOrderByRelevanceFieldEnum: {
    entityType: 'entityType',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    ogImage: 'ogImage',
    canonicalUrl: 'canonicalUrl',
    robots: 'robots',
    schemaType: 'schemaType'
  };

  export type SeoMetaOrderByRelevanceFieldEnum = (typeof SeoMetaOrderByRelevanceFieldEnum)[keyof typeof SeoMetaOrderByRelevanceFieldEnum]


  export const MediaUploadOrderByRelevanceFieldEnum: {
    module: 'module',
    originalName: 'originalName',
    fileName: 'fileName',
    filePath: 'filePath',
    fileUrl: 'fileUrl',
    mimeType: 'mimeType'
  };

  export type MediaUploadOrderByRelevanceFieldEnum = (typeof MediaUploadOrderByRelevanceFieldEnum)[keyof typeof MediaUploadOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PageStatus'
   */
  export type EnumPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ContentStatus'
   */
  export type EnumContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStatus'>
    


  /**
   * Reference to a field of type 'CtaType'
   */
  export type EnumCtaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CtaType'>
    


  /**
   * Reference to a field of type 'ArticleStatus'
   */
  export type EnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: BigIntFilter<"Admin"> | bigint | number
    email?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    fullName?: StringFilter<"Admin"> | string
    isActive?: BoolFilter<"Admin"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    mediaUploads?: MediaUploadListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaUploads?: MediaUploadOrderByRelationAggregateInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    passwordHash?: StringFilter<"Admin"> | string
    fullName?: StringFilter<"Admin"> | string
    isActive?: BoolFilter<"Admin"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    mediaUploads?: MediaUploadListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Admin"> | bigint | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    fullName?: StringWithAggregatesFilter<"Admin"> | string
    isActive?: BoolWithAggregatesFilter<"Admin"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: BigIntFilter<"Page"> | bigint | number
    pageKey?: StringFilter<"Page"> | string
    title?: StringFilter<"Page"> | string
    contentJson?: JsonFilter<"Page">
    status?: EnumPageStatusFilter<"Page"> | $Enums.PageStatus
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    pageKey?: SortOrder
    title?: SortOrder
    contentJson?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PageOrderByRelevanceInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    pageKey?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    title?: StringFilter<"Page"> | string
    contentJson?: JsonFilter<"Page">
    status?: EnumPageStatusFilter<"Page"> | $Enums.PageStatus
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
  }, "id" | "pageKey">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    pageKey?: SortOrder
    title?: SortOrder
    contentJson?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _avg?: PageAvgOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
    _sum?: PageSumOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Page"> | bigint | number
    pageKey?: StringWithAggregatesFilter<"Page"> | string
    title?: StringWithAggregatesFilter<"Page"> | string
    contentJson?: JsonWithAggregatesFilter<"Page">
    status?: EnumPageStatusWithAggregatesFilter<"Page"> | $Enums.PageStatus
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: BigIntFilter<"Service"> | bigint | number
    title?: StringFilter<"Service"> | string
    slug?: StringFilter<"Service"> | string
    summary?: StringFilter<"Service"> | string
    content?: StringFilter<"Service"> | string
    coverImage?: StringNullableFilter<"Service"> | string | null
    featured?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    status?: EnumContentStatusFilter<"Service"> | $Enums.ContentStatus
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    faqs?: ServiceFaqListRelationFilter
    ctas?: ServiceCtaListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faqs?: ServiceFaqOrderByRelationAggregateInput
    ctas?: ServiceCtaOrderByRelationAggregateInput
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    summary?: StringFilter<"Service"> | string
    content?: StringFilter<"Service"> | string
    coverImage?: StringNullableFilter<"Service"> | string | null
    featured?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    status?: EnumContentStatusFilter<"Service"> | $Enums.ContentStatus
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    faqs?: ServiceFaqListRelationFilter
    ctas?: ServiceCtaListRelationFilter
  }, "id" | "slug">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Service"> | bigint | number
    title?: StringWithAggregatesFilter<"Service"> | string
    slug?: StringWithAggregatesFilter<"Service"> | string
    summary?: StringWithAggregatesFilter<"Service"> | string
    content?: StringWithAggregatesFilter<"Service"> | string
    coverImage?: StringNullableWithAggregatesFilter<"Service"> | string | null
    featured?: BoolWithAggregatesFilter<"Service"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Service"> | number
    status?: EnumContentStatusWithAggregatesFilter<"Service"> | $Enums.ContentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ServiceFaqWhereInput = {
    AND?: ServiceFaqWhereInput | ServiceFaqWhereInput[]
    OR?: ServiceFaqWhereInput[]
    NOT?: ServiceFaqWhereInput | ServiceFaqWhereInput[]
    id?: BigIntFilter<"ServiceFaq"> | bigint | number
    serviceId?: BigIntFilter<"ServiceFaq"> | bigint | number
    question?: StringFilter<"ServiceFaq"> | string
    answer?: StringFilter<"ServiceFaq"> | string
    sortOrder?: IntFilter<"ServiceFaq"> | number
    createdAt?: DateTimeFilter<"ServiceFaq"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceFaq"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServiceFaqOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    _relevance?: ServiceFaqOrderByRelevanceInput
  }

  export type ServiceFaqWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ServiceFaqWhereInput | ServiceFaqWhereInput[]
    OR?: ServiceFaqWhereInput[]
    NOT?: ServiceFaqWhereInput | ServiceFaqWhereInput[]
    serviceId?: BigIntFilter<"ServiceFaq"> | bigint | number
    question?: StringFilter<"ServiceFaq"> | string
    answer?: StringFilter<"ServiceFaq"> | string
    sortOrder?: IntFilter<"ServiceFaq"> | number
    createdAt?: DateTimeFilter<"ServiceFaq"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceFaq"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type ServiceFaqOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceFaqCountOrderByAggregateInput
    _avg?: ServiceFaqAvgOrderByAggregateInput
    _max?: ServiceFaqMaxOrderByAggregateInput
    _min?: ServiceFaqMinOrderByAggregateInput
    _sum?: ServiceFaqSumOrderByAggregateInput
  }

  export type ServiceFaqScalarWhereWithAggregatesInput = {
    AND?: ServiceFaqScalarWhereWithAggregatesInput | ServiceFaqScalarWhereWithAggregatesInput[]
    OR?: ServiceFaqScalarWhereWithAggregatesInput[]
    NOT?: ServiceFaqScalarWhereWithAggregatesInput | ServiceFaqScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ServiceFaq"> | bigint | number
    serviceId?: BigIntWithAggregatesFilter<"ServiceFaq"> | bigint | number
    question?: StringWithAggregatesFilter<"ServiceFaq"> | string
    answer?: StringWithAggregatesFilter<"ServiceFaq"> | string
    sortOrder?: IntWithAggregatesFilter<"ServiceFaq"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ServiceFaq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceFaq"> | Date | string
  }

  export type ServiceCtaWhereInput = {
    AND?: ServiceCtaWhereInput | ServiceCtaWhereInput[]
    OR?: ServiceCtaWhereInput[]
    NOT?: ServiceCtaWhereInput | ServiceCtaWhereInput[]
    id?: BigIntFilter<"ServiceCta"> | bigint | number
    serviceId?: BigIntFilter<"ServiceCta"> | bigint | number
    label?: StringFilter<"ServiceCta"> | string
    link?: StringFilter<"ServiceCta"> | string
    type?: EnumCtaTypeFilter<"ServiceCta"> | $Enums.CtaType
    isActive?: BoolFilter<"ServiceCta"> | boolean
    createdAt?: DateTimeFilter<"ServiceCta"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceCta"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServiceCtaOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    label?: SortOrder
    link?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    _relevance?: ServiceCtaOrderByRelevanceInput
  }

  export type ServiceCtaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ServiceCtaWhereInput | ServiceCtaWhereInput[]
    OR?: ServiceCtaWhereInput[]
    NOT?: ServiceCtaWhereInput | ServiceCtaWhereInput[]
    serviceId?: BigIntFilter<"ServiceCta"> | bigint | number
    label?: StringFilter<"ServiceCta"> | string
    link?: StringFilter<"ServiceCta"> | string
    type?: EnumCtaTypeFilter<"ServiceCta"> | $Enums.CtaType
    isActive?: BoolFilter<"ServiceCta"> | boolean
    createdAt?: DateTimeFilter<"ServiceCta"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceCta"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type ServiceCtaOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    label?: SortOrder
    link?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCtaCountOrderByAggregateInput
    _avg?: ServiceCtaAvgOrderByAggregateInput
    _max?: ServiceCtaMaxOrderByAggregateInput
    _min?: ServiceCtaMinOrderByAggregateInput
    _sum?: ServiceCtaSumOrderByAggregateInput
  }

  export type ServiceCtaScalarWhereWithAggregatesInput = {
    AND?: ServiceCtaScalarWhereWithAggregatesInput | ServiceCtaScalarWhereWithAggregatesInput[]
    OR?: ServiceCtaScalarWhereWithAggregatesInput[]
    NOT?: ServiceCtaScalarWhereWithAggregatesInput | ServiceCtaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ServiceCta"> | bigint | number
    serviceId?: BigIntWithAggregatesFilter<"ServiceCta"> | bigint | number
    label?: StringWithAggregatesFilter<"ServiceCta"> | string
    link?: StringWithAggregatesFilter<"ServiceCta"> | string
    type?: EnumCtaTypeWithAggregatesFilter<"ServiceCta"> | $Enums.CtaType
    isActive?: BoolWithAggregatesFilter<"ServiceCta"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceCta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceCta"> | Date | string
  }

  export type LawyerWhereInput = {
    AND?: LawyerWhereInput | LawyerWhereInput[]
    OR?: LawyerWhereInput[]
    NOT?: LawyerWhereInput | LawyerWhereInput[]
    id?: BigIntFilter<"Lawyer"> | bigint | number
    name?: StringFilter<"Lawyer"> | string
    slug?: StringFilter<"Lawyer"> | string
    photo?: StringNullableFilter<"Lawyer"> | string | null
    position?: StringFilter<"Lawyer"> | string
    shortBio?: StringFilter<"Lawyer"> | string
    fullBio?: StringFilter<"Lawyer"> | string
    specialty?: StringFilter<"Lawyer"> | string
    featured?: BoolFilter<"Lawyer"> | boolean
    sortOrder?: IntFilter<"Lawyer"> | number
    status?: EnumContentStatusFilter<"Lawyer"> | $Enums.ContentStatus
    createdAt?: DateTimeFilter<"Lawyer"> | Date | string
    updatedAt?: DateTimeFilter<"Lawyer"> | Date | string
  }

  export type LawyerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    photo?: SortOrderInput | SortOrder
    position?: SortOrder
    shortBio?: SortOrder
    fullBio?: SortOrder
    specialty?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: LawyerOrderByRelevanceInput
  }

  export type LawyerWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: LawyerWhereInput | LawyerWhereInput[]
    OR?: LawyerWhereInput[]
    NOT?: LawyerWhereInput | LawyerWhereInput[]
    name?: StringFilter<"Lawyer"> | string
    photo?: StringNullableFilter<"Lawyer"> | string | null
    position?: StringFilter<"Lawyer"> | string
    shortBio?: StringFilter<"Lawyer"> | string
    fullBio?: StringFilter<"Lawyer"> | string
    specialty?: StringFilter<"Lawyer"> | string
    featured?: BoolFilter<"Lawyer"> | boolean
    sortOrder?: IntFilter<"Lawyer"> | number
    status?: EnumContentStatusFilter<"Lawyer"> | $Enums.ContentStatus
    createdAt?: DateTimeFilter<"Lawyer"> | Date | string
    updatedAt?: DateTimeFilter<"Lawyer"> | Date | string
  }, "id" | "slug">

  export type LawyerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    photo?: SortOrderInput | SortOrder
    position?: SortOrder
    shortBio?: SortOrder
    fullBio?: SortOrder
    specialty?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LawyerCountOrderByAggregateInput
    _avg?: LawyerAvgOrderByAggregateInput
    _max?: LawyerMaxOrderByAggregateInput
    _min?: LawyerMinOrderByAggregateInput
    _sum?: LawyerSumOrderByAggregateInput
  }

  export type LawyerScalarWhereWithAggregatesInput = {
    AND?: LawyerScalarWhereWithAggregatesInput | LawyerScalarWhereWithAggregatesInput[]
    OR?: LawyerScalarWhereWithAggregatesInput[]
    NOT?: LawyerScalarWhereWithAggregatesInput | LawyerScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Lawyer"> | bigint | number
    name?: StringWithAggregatesFilter<"Lawyer"> | string
    slug?: StringWithAggregatesFilter<"Lawyer"> | string
    photo?: StringNullableWithAggregatesFilter<"Lawyer"> | string | null
    position?: StringWithAggregatesFilter<"Lawyer"> | string
    shortBio?: StringWithAggregatesFilter<"Lawyer"> | string
    fullBio?: StringWithAggregatesFilter<"Lawyer"> | string
    specialty?: StringWithAggregatesFilter<"Lawyer"> | string
    featured?: BoolWithAggregatesFilter<"Lawyer"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Lawyer"> | number
    status?: EnumContentStatusWithAggregatesFilter<"Lawyer"> | $Enums.ContentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Lawyer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lawyer"> | Date | string
  }

  export type ArticleCategoryWhereInput = {
    AND?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    OR?: ArticleCategoryWhereInput[]
    NOT?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    id?: BigIntFilter<"ArticleCategory"> | bigint | number
    name?: StringFilter<"ArticleCategory"> | string
    slug?: StringFilter<"ArticleCategory"> | string
    createdAt?: DateTimeFilter<"ArticleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleCategory"> | Date | string
    articles?: ArticleListRelationFilter
  }

  export type ArticleCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    _relevance?: ArticleCategoryOrderByRelevanceInput
  }

  export type ArticleCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    OR?: ArticleCategoryWhereInput[]
    NOT?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    name?: StringFilter<"ArticleCategory"> | string
    createdAt?: DateTimeFilter<"ArticleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleCategory"> | Date | string
    articles?: ArticleListRelationFilter
  }, "id" | "slug">

  export type ArticleCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCategoryCountOrderByAggregateInput
    _avg?: ArticleCategoryAvgOrderByAggregateInput
    _max?: ArticleCategoryMaxOrderByAggregateInput
    _min?: ArticleCategoryMinOrderByAggregateInput
    _sum?: ArticleCategorySumOrderByAggregateInput
  }

  export type ArticleCategoryScalarWhereWithAggregatesInput = {
    AND?: ArticleCategoryScalarWhereWithAggregatesInput | ArticleCategoryScalarWhereWithAggregatesInput[]
    OR?: ArticleCategoryScalarWhereWithAggregatesInput[]
    NOT?: ArticleCategoryScalarWhereWithAggregatesInput | ArticleCategoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ArticleCategory"> | bigint | number
    name?: StringWithAggregatesFilter<"ArticleCategory"> | string
    slug?: StringWithAggregatesFilter<"ArticleCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArticleCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleCategory"> | Date | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: BigIntFilter<"Article"> | bigint | number
    categoryId?: BigIntNullableFilter<"Article"> | bigint | number | null
    title?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    thumbnail?: StringNullableFilter<"Article"> | string | null
    content?: StringFilter<"Article"> | string
    featured?: BoolFilter<"Article"> | boolean
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    category?: XOR<ArticleCategoryNullableScalarRelationFilter, ArticleCategoryWhereInput> | null
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    content?: SortOrder
    featured?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: ArticleCategoryOrderByWithRelationInput
    _relevance?: ArticleOrderByRelevanceInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    categoryId?: BigIntNullableFilter<"Article"> | bigint | number | null
    title?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    thumbnail?: StringNullableFilter<"Article"> | string | null
    content?: StringFilter<"Article"> | string
    featured?: BoolFilter<"Article"> | boolean
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    category?: XOR<ArticleCategoryNullableScalarRelationFilter, ArticleCategoryWhereInput> | null
  }, "id" | "slug">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    content?: SortOrder
    featured?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Article"> | bigint | number
    categoryId?: BigIntNullableWithAggregatesFilter<"Article"> | bigint | number | null
    title?: StringWithAggregatesFilter<"Article"> | string
    slug?: StringWithAggregatesFilter<"Article"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Article"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Article"> | string | null
    content?: StringWithAggregatesFilter<"Article"> | string
    featured?: BoolWithAggregatesFilter<"Article"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    status?: EnumArticleStatusWithAggregatesFilter<"Article"> | $Enums.ArticleStatus
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: BigIntFilter<"Client"> | bigint | number
    name?: StringFilter<"Client"> | string
    slug?: StringNullableFilter<"Client"> | string | null
    logo?: StringNullableFilter<"Client"> | string | null
    shortDescription?: StringNullableFilter<"Client"> | string | null
    category?: StringNullableFilter<"Client"> | string | null
    featured?: BoolFilter<"Client"> | boolean
    sortOrder?: IntFilter<"Client"> | number
    status?: EnumContentStatusFilter<"Client"> | $Enums.ContentStatus
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ClientOrderByRelevanceInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    logo?: StringNullableFilter<"Client"> | string | null
    shortDescription?: StringNullableFilter<"Client"> | string | null
    category?: StringNullableFilter<"Client"> | string | null
    featured?: BoolFilter<"Client"> | boolean
    sortOrder?: IntFilter<"Client"> | number
    status?: EnumContentStatusFilter<"Client"> | $Enums.ContentStatus
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }, "id" | "slug">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Client"> | bigint | number
    name?: StringWithAggregatesFilter<"Client"> | string
    slug?: StringNullableWithAggregatesFilter<"Client"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Client"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"Client"> | string | null
    category?: StringNullableWithAggregatesFilter<"Client"> | string | null
    featured?: BoolWithAggregatesFilter<"Client"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Client"> | number
    status?: EnumContentStatusWithAggregatesFilter<"Client"> | $Enums.ContentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type SiteSettingWhereInput = {
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    id?: BigIntFilter<"SiteSetting"> | bigint | number
    siteName?: StringNullableFilter<"SiteSetting"> | string | null
    siteTagline?: StringNullableFilter<"SiteSetting"> | string | null
    logoLight?: StringNullableFilter<"SiteSetting"> | string | null
    logoDark?: StringNullableFilter<"SiteSetting"> | string | null
    primaryColor?: StringNullableFilter<"SiteSetting"> | string | null
    secondaryColor?: StringNullableFilter<"SiteSetting"> | string | null
    whatsappNumber?: StringNullableFilter<"SiteSetting"> | string | null
    whatsappMessage?: StringNullableFilter<"SiteSetting"> | string | null
    email?: StringNullableFilter<"SiteSetting"> | string | null
    phone?: StringNullableFilter<"SiteSetting"> | string | null
    officeAddress?: StringNullableFilter<"SiteSetting"> | string | null
    mapEmbedUrl?: StringNullableFilter<"SiteSetting"> | string | null
    footerText?: StringNullableFilter<"SiteSetting"> | string | null
    createdAt?: DateTimeFilter<"SiteSetting"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }

  export type SiteSettingOrderByWithRelationInput = {
    id?: SortOrder
    siteName?: SortOrderInput | SortOrder
    siteTagline?: SortOrderInput | SortOrder
    logoLight?: SortOrderInput | SortOrder
    logoDark?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    whatsappNumber?: SortOrderInput | SortOrder
    whatsappMessage?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    officeAddress?: SortOrderInput | SortOrder
    mapEmbedUrl?: SortOrderInput | SortOrder
    footerText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SiteSettingOrderByRelevanceInput
  }

  export type SiteSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    siteName?: StringNullableFilter<"SiteSetting"> | string | null
    siteTagline?: StringNullableFilter<"SiteSetting"> | string | null
    logoLight?: StringNullableFilter<"SiteSetting"> | string | null
    logoDark?: StringNullableFilter<"SiteSetting"> | string | null
    primaryColor?: StringNullableFilter<"SiteSetting"> | string | null
    secondaryColor?: StringNullableFilter<"SiteSetting"> | string | null
    whatsappNumber?: StringNullableFilter<"SiteSetting"> | string | null
    whatsappMessage?: StringNullableFilter<"SiteSetting"> | string | null
    email?: StringNullableFilter<"SiteSetting"> | string | null
    phone?: StringNullableFilter<"SiteSetting"> | string | null
    officeAddress?: StringNullableFilter<"SiteSetting"> | string | null
    mapEmbedUrl?: StringNullableFilter<"SiteSetting"> | string | null
    footerText?: StringNullableFilter<"SiteSetting"> | string | null
    createdAt?: DateTimeFilter<"SiteSetting"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }, "id">

  export type SiteSettingOrderByWithAggregationInput = {
    id?: SortOrder
    siteName?: SortOrderInput | SortOrder
    siteTagline?: SortOrderInput | SortOrder
    logoLight?: SortOrderInput | SortOrder
    logoDark?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    whatsappNumber?: SortOrderInput | SortOrder
    whatsappMessage?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    officeAddress?: SortOrderInput | SortOrder
    mapEmbedUrl?: SortOrderInput | SortOrder
    footerText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingCountOrderByAggregateInput
    _avg?: SiteSettingAvgOrderByAggregateInput
    _max?: SiteSettingMaxOrderByAggregateInput
    _min?: SiteSettingMinOrderByAggregateInput
    _sum?: SiteSettingSumOrderByAggregateInput
  }

  export type SiteSettingScalarWhereWithAggregatesInput = {
    AND?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    OR?: SiteSettingScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SiteSetting"> | bigint | number
    siteName?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    siteTagline?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    logoLight?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    logoDark?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    primaryColor?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    secondaryColor?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    whatsappNumber?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    whatsappMessage?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    email?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    phone?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    officeAddress?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    mapEmbedUrl?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    footerText?: StringNullableWithAggregatesFilter<"SiteSetting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SiteSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSetting"> | Date | string
  }

  export type SeoMetaWhereInput = {
    AND?: SeoMetaWhereInput | SeoMetaWhereInput[]
    OR?: SeoMetaWhereInput[]
    NOT?: SeoMetaWhereInput | SeoMetaWhereInput[]
    id?: BigIntFilter<"SeoMeta"> | bigint | number
    entityType?: StringFilter<"SeoMeta"> | string
    entityId?: BigIntFilter<"SeoMeta"> | bigint | number
    metaTitle?: StringNullableFilter<"SeoMeta"> | string | null
    metaDescription?: StringNullableFilter<"SeoMeta"> | string | null
    ogImage?: StringNullableFilter<"SeoMeta"> | string | null
    canonicalUrl?: StringNullableFilter<"SeoMeta"> | string | null
    robots?: StringNullableFilter<"SeoMeta"> | string | null
    schemaType?: StringNullableFilter<"SeoMeta"> | string | null
    createdAt?: DateTimeFilter<"SeoMeta"> | Date | string
    updatedAt?: DateTimeFilter<"SeoMeta"> | Date | string
  }

  export type SeoMetaOrderByWithRelationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    robots?: SortOrderInput | SortOrder
    schemaType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SeoMetaOrderByRelevanceInput
  }

  export type SeoMetaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    entityType_entityId?: SeoMetaEntityTypeEntityIdCompoundUniqueInput
    AND?: SeoMetaWhereInput | SeoMetaWhereInput[]
    OR?: SeoMetaWhereInput[]
    NOT?: SeoMetaWhereInput | SeoMetaWhereInput[]
    entityType?: StringFilter<"SeoMeta"> | string
    entityId?: BigIntFilter<"SeoMeta"> | bigint | number
    metaTitle?: StringNullableFilter<"SeoMeta"> | string | null
    metaDescription?: StringNullableFilter<"SeoMeta"> | string | null
    ogImage?: StringNullableFilter<"SeoMeta"> | string | null
    canonicalUrl?: StringNullableFilter<"SeoMeta"> | string | null
    robots?: StringNullableFilter<"SeoMeta"> | string | null
    schemaType?: StringNullableFilter<"SeoMeta"> | string | null
    createdAt?: DateTimeFilter<"SeoMeta"> | Date | string
    updatedAt?: DateTimeFilter<"SeoMeta"> | Date | string
  }, "id" | "entityType_entityId">

  export type SeoMetaOrderByWithAggregationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    robots?: SortOrderInput | SortOrder
    schemaType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeoMetaCountOrderByAggregateInput
    _avg?: SeoMetaAvgOrderByAggregateInput
    _max?: SeoMetaMaxOrderByAggregateInput
    _min?: SeoMetaMinOrderByAggregateInput
    _sum?: SeoMetaSumOrderByAggregateInput
  }

  export type SeoMetaScalarWhereWithAggregatesInput = {
    AND?: SeoMetaScalarWhereWithAggregatesInput | SeoMetaScalarWhereWithAggregatesInput[]
    OR?: SeoMetaScalarWhereWithAggregatesInput[]
    NOT?: SeoMetaScalarWhereWithAggregatesInput | SeoMetaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SeoMeta"> | bigint | number
    entityType?: StringWithAggregatesFilter<"SeoMeta"> | string
    entityId?: BigIntWithAggregatesFilter<"SeoMeta"> | bigint | number
    metaTitle?: StringNullableWithAggregatesFilter<"SeoMeta"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"SeoMeta"> | string | null
    ogImage?: StringNullableWithAggregatesFilter<"SeoMeta"> | string | null
    canonicalUrl?: StringNullableWithAggregatesFilter<"SeoMeta"> | string | null
    robots?: StringNullableWithAggregatesFilter<"SeoMeta"> | string | null
    schemaType?: StringNullableWithAggregatesFilter<"SeoMeta"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SeoMeta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SeoMeta"> | Date | string
  }

  export type MediaUploadWhereInput = {
    AND?: MediaUploadWhereInput | MediaUploadWhereInput[]
    OR?: MediaUploadWhereInput[]
    NOT?: MediaUploadWhereInput | MediaUploadWhereInput[]
    id?: BigIntFilter<"MediaUpload"> | bigint | number
    module?: StringFilter<"MediaUpload"> | string
    originalName?: StringFilter<"MediaUpload"> | string
    fileName?: StringFilter<"MediaUpload"> | string
    filePath?: StringFilter<"MediaUpload"> | string
    fileUrl?: StringFilter<"MediaUpload"> | string
    mimeType?: StringFilter<"MediaUpload"> | string
    fileSize?: BigIntFilter<"MediaUpload"> | bigint | number
    uploadedByAdminId?: BigIntNullableFilter<"MediaUpload"> | bigint | number | null
    createdAt?: DateTimeFilter<"MediaUpload"> | Date | string
    updatedAt?: DateTimeFilter<"MediaUpload"> | Date | string
    uploadedByAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type MediaUploadOrderByWithRelationInput = {
    id?: SortOrder
    module?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    uploadedByAdminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedByAdmin?: AdminOrderByWithRelationInput
    _relevance?: MediaUploadOrderByRelevanceInput
  }

  export type MediaUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MediaUploadWhereInput | MediaUploadWhereInput[]
    OR?: MediaUploadWhereInput[]
    NOT?: MediaUploadWhereInput | MediaUploadWhereInput[]
    module?: StringFilter<"MediaUpload"> | string
    originalName?: StringFilter<"MediaUpload"> | string
    fileName?: StringFilter<"MediaUpload"> | string
    filePath?: StringFilter<"MediaUpload"> | string
    fileUrl?: StringFilter<"MediaUpload"> | string
    mimeType?: StringFilter<"MediaUpload"> | string
    fileSize?: BigIntFilter<"MediaUpload"> | bigint | number
    uploadedByAdminId?: BigIntNullableFilter<"MediaUpload"> | bigint | number | null
    createdAt?: DateTimeFilter<"MediaUpload"> | Date | string
    updatedAt?: DateTimeFilter<"MediaUpload"> | Date | string
    uploadedByAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type MediaUploadOrderByWithAggregationInput = {
    id?: SortOrder
    module?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    uploadedByAdminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaUploadCountOrderByAggregateInput
    _avg?: MediaUploadAvgOrderByAggregateInput
    _max?: MediaUploadMaxOrderByAggregateInput
    _min?: MediaUploadMinOrderByAggregateInput
    _sum?: MediaUploadSumOrderByAggregateInput
  }

  export type MediaUploadScalarWhereWithAggregatesInput = {
    AND?: MediaUploadScalarWhereWithAggregatesInput | MediaUploadScalarWhereWithAggregatesInput[]
    OR?: MediaUploadScalarWhereWithAggregatesInput[]
    NOT?: MediaUploadScalarWhereWithAggregatesInput | MediaUploadScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"MediaUpload"> | bigint | number
    module?: StringWithAggregatesFilter<"MediaUpload"> | string
    originalName?: StringWithAggregatesFilter<"MediaUpload"> | string
    fileName?: StringWithAggregatesFilter<"MediaUpload"> | string
    filePath?: StringWithAggregatesFilter<"MediaUpload"> | string
    fileUrl?: StringWithAggregatesFilter<"MediaUpload"> | string
    mimeType?: StringWithAggregatesFilter<"MediaUpload"> | string
    fileSize?: BigIntWithAggregatesFilter<"MediaUpload"> | bigint | number
    uploadedByAdminId?: BigIntNullableWithAggregatesFilter<"MediaUpload"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MediaUpload"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaUpload"> | Date | string
  }

  export type AdminCreateInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    fullName: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaUploads?: MediaUploadCreateNestedManyWithoutUploadedByAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    fullName: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaUploads?: MediaUploadUncheckedCreateNestedManyWithoutUploadedByAdminInput
  }

  export type AdminUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaUploads?: MediaUploadUpdateManyWithoutUploadedByAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaUploads?: MediaUploadUncheckedUpdateManyWithoutUploadedByAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    fullName: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: bigint | number
    pageKey: string
    title: string
    contentJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.PageStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUncheckedCreateInput = {
    id?: bigint | number
    pageKey: string
    title: string
    contentJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.PageStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pageKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pageKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateManyInput = {
    id?: bigint | number
    pageKey: string
    title: string
    contentJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.PageStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pageKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pageKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: bigint | number
    title: string
    slug: string
    summary: string
    content: string
    coverImage?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faqs?: ServiceFaqCreateNestedManyWithoutServiceInput
    ctas?: ServiceCtaCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: bigint | number
    title: string
    slug: string
    summary: string
    content: string
    coverImage?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faqs?: ServiceFaqUncheckedCreateNestedManyWithoutServiceInput
    ctas?: ServiceCtaUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: ServiceFaqUpdateManyWithoutServiceNestedInput
    ctas?: ServiceCtaUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: ServiceFaqUncheckedUpdateManyWithoutServiceNestedInput
    ctas?: ServiceCtaUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: bigint | number
    title: string
    slug: string
    summary: string
    content: string
    coverImage?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceFaqCreateInput = {
    id?: bigint | number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutFaqsInput
  }

  export type ServiceFaqUncheckedCreateInput = {
    id?: bigint | number
    serviceId: bigint | number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceFaqUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutFaqsNestedInput
  }

  export type ServiceFaqUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceFaqCreateManyInput = {
    id?: bigint | number
    serviceId: bigint | number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceFaqUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceFaqUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCtaCreateInput = {
    id?: bigint | number
    label: string
    link: string
    type: $Enums.CtaType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutCtasInput
  }

  export type ServiceCtaUncheckedCreateInput = {
    id?: bigint | number
    serviceId: bigint | number
    label: string
    link: string
    type: $Enums.CtaType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCtaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumCtaTypeFieldUpdateOperationsInput | $Enums.CtaType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutCtasNestedInput
  }

  export type ServiceCtaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumCtaTypeFieldUpdateOperationsInput | $Enums.CtaType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCtaCreateManyInput = {
    id?: bigint | number
    serviceId: bigint | number
    label: string
    link: string
    type: $Enums.CtaType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCtaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumCtaTypeFieldUpdateOperationsInput | $Enums.CtaType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCtaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumCtaTypeFieldUpdateOperationsInput | $Enums.CtaType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawyerCreateInput = {
    id?: bigint | number
    name: string
    slug: string
    photo?: string | null
    position: string
    shortBio: string
    fullBio: string
    specialty: string
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawyerUncheckedCreateInput = {
    id?: bigint | number
    name: string
    slug: string
    photo?: string | null
    position: string
    shortBio: string
    fullBio: string
    specialty: string
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawyerUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    shortBio?: StringFieldUpdateOperationsInput | string
    fullBio?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawyerUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    shortBio?: StringFieldUpdateOperationsInput | string
    fullBio?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawyerCreateManyInput = {
    id?: bigint | number
    name: string
    slug: string
    photo?: string | null
    position: string
    shortBio: string
    fullBio: string
    specialty: string
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawyerUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    shortBio?: StringFieldUpdateOperationsInput | string
    fullBio?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawyerUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    shortBio?: StringFieldUpdateOperationsInput | string
    fullBio?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCategoryCreateInput = {
    id?: bigint | number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutCategoryInput
  }

  export type ArticleCategoryUncheckedCreateInput = {
    id?: bigint | number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ArticleCategoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutCategoryNestedInput
  }

  export type ArticleCategoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ArticleCategoryCreateManyInput = {
    id?: bigint | number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCategoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCategoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateInput = {
    id?: bigint | number
    title: string
    slug: string
    excerpt?: string | null
    thumbnail?: string | null
    content: string
    featured?: boolean
    publishedAt?: Date | string | null
    status?: $Enums.ArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: ArticleCategoryCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: bigint | number
    categoryId?: bigint | number | null
    title: string
    slug: string
    excerpt?: string | null
    thumbnail?: string | null
    content: string
    featured?: boolean
    publishedAt?: Date | string | null
    status?: $Enums.ArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ArticleCategoryUpdateOneWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyInput = {
    id?: bigint | number
    categoryId?: bigint | number | null
    title: string
    slug: string
    excerpt?: string | null
    thumbnail?: string | null
    content: string
    featured?: boolean
    publishedAt?: Date | string | null
    status?: $Enums.ArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: bigint | number
    name: string
    slug?: string | null
    logo?: string | null
    shortDescription?: string | null
    category?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateInput = {
    id?: bigint | number
    name: string
    slug?: string | null
    logo?: string | null
    shortDescription?: string | null
    category?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateManyInput = {
    id?: bigint | number
    name: string
    slug?: string | null
    logo?: string | null
    shortDescription?: string | null
    category?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingCreateInput = {
    id?: bigint | number
    siteName?: string | null
    siteTagline?: string | null
    logoLight?: string | null
    logoDark?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    whatsappNumber?: string | null
    whatsappMessage?: string | null
    email?: string | null
    phone?: string | null
    officeAddress?: string | null
    mapEmbedUrl?: string | null
    footerText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingUncheckedCreateInput = {
    id?: bigint | number
    siteName?: string | null
    siteTagline?: string | null
    logoLight?: string | null
    logoDark?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    whatsappNumber?: string | null
    whatsappMessage?: string | null
    email?: string | null
    phone?: string | null
    officeAddress?: string | null
    mapEmbedUrl?: string | null
    footerText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    siteName?: NullableStringFieldUpdateOperationsInput | string | null
    siteTagline?: NullableStringFieldUpdateOperationsInput | string | null
    logoLight?: NullableStringFieldUpdateOperationsInput | string | null
    logoDark?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    siteName?: NullableStringFieldUpdateOperationsInput | string | null
    siteTagline?: NullableStringFieldUpdateOperationsInput | string | null
    logoLight?: NullableStringFieldUpdateOperationsInput | string | null
    logoDark?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingCreateManyInput = {
    id?: bigint | number
    siteName?: string | null
    siteTagline?: string | null
    logoLight?: string | null
    logoDark?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    whatsappNumber?: string | null
    whatsappMessage?: string | null
    email?: string | null
    phone?: string | null
    officeAddress?: string | null
    mapEmbedUrl?: string | null
    footerText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    siteName?: NullableStringFieldUpdateOperationsInput | string | null
    siteTagline?: NullableStringFieldUpdateOperationsInput | string | null
    logoLight?: NullableStringFieldUpdateOperationsInput | string | null
    logoDark?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    siteName?: NullableStringFieldUpdateOperationsInput | string | null
    siteTagline?: NullableStringFieldUpdateOperationsInput | string | null
    logoLight?: NullableStringFieldUpdateOperationsInput | string | null
    logoDark?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappMessage?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoMetaCreateInput = {
    id?: bigint | number
    entityType: string
    entityId: bigint | number
    metaTitle?: string | null
    metaDescription?: string | null
    ogImage?: string | null
    canonicalUrl?: string | null
    robots?: string | null
    schemaType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoMetaUncheckedCreateInput = {
    id?: bigint | number
    entityType: string
    entityId: bigint | number
    metaTitle?: string | null
    metaDescription?: string | null
    ogImage?: string | null
    canonicalUrl?: string | null
    robots?: string | null
    schemaType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoMetaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: NullableStringFieldUpdateOperationsInput | string | null
    schemaType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoMetaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: NullableStringFieldUpdateOperationsInput | string | null
    schemaType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoMetaCreateManyInput = {
    id?: bigint | number
    entityType: string
    entityId: bigint | number
    metaTitle?: string | null
    metaDescription?: string | null
    ogImage?: string | null
    canonicalUrl?: string | null
    robots?: string | null
    schemaType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoMetaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: NullableStringFieldUpdateOperationsInput | string | null
    schemaType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoMetaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    robots?: NullableStringFieldUpdateOperationsInput | string | null
    schemaType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadCreateInput = {
    id?: bigint | number
    module: string
    originalName: string
    fileName: string
    filePath: string
    fileUrl: string
    mimeType: string
    fileSize: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedByAdmin?: AdminCreateNestedOneWithoutMediaUploadsInput
  }

  export type MediaUploadUncheckedCreateInput = {
    id?: bigint | number
    module: string
    originalName: string
    fileName: string
    filePath: string
    fileUrl: string
    mimeType: string
    fileSize: bigint | number
    uploadedByAdminId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUploadUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedByAdmin?: AdminUpdateOneWithoutMediaUploadsNestedInput
  }

  export type MediaUploadUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    uploadedByAdminId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadCreateManyInput = {
    id?: bigint | number
    module: string
    originalName: string
    fileName: string
    filePath: string
    fileUrl: string
    mimeType: string
    fileSize: bigint | number
    uploadedByAdminId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUploadUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    uploadedByAdminId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MediaUploadListRelationFilter = {
    every?: MediaUploadWhereInput
    some?: MediaUploadWhereInput
    none?: MediaUploadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MediaUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | EnumPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PageStatus[]
    notIn?: $Enums.PageStatus[]
    not?: NestedEnumPageStatusFilter<$PrismaModel> | $Enums.PageStatus
  }

  export type PageOrderByRelevanceInput = {
    fields: PageOrderByRelevanceFieldEnum | PageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    pageKey?: SortOrder
    title?: SortOrder
    contentJson?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    pageKey?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    pageKey?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | EnumPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PageStatus[]
    notIn?: $Enums.PageStatus[]
    not?: NestedEnumPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPageStatusFilter<$PrismaModel>
    _max?: NestedEnumPageStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[]
    notIn?: $Enums.ContentStatus[]
    not?: NestedEnumContentStatusFilter<$PrismaModel> | $Enums.ContentStatus
  }

  export type ServiceFaqListRelationFilter = {
    every?: ServiceFaqWhereInput
    some?: ServiceFaqWhereInput
    none?: ServiceFaqWhereInput
  }

  export type ServiceCtaListRelationFilter = {
    every?: ServiceCtaWhereInput
    some?: ServiceCtaWhereInput
    none?: ServiceCtaWhereInput
  }

  export type ServiceFaqOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCtaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelevanceInput = {
    fields: ServiceOrderByRelevanceFieldEnum | ServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[]
    notIn?: $Enums.ContentStatus[]
    not?: NestedEnumContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentStatusFilter<$PrismaModel>
    _max?: NestedEnumContentStatusFilter<$PrismaModel>
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServiceFaqOrderByRelevanceInput = {
    fields: ServiceFaqOrderByRelevanceFieldEnum | ServiceFaqOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceFaqCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceFaqAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceFaqMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceFaqMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceFaqSumOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumCtaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaType | EnumCtaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CtaType[]
    notIn?: $Enums.CtaType[]
    not?: NestedEnumCtaTypeFilter<$PrismaModel> | $Enums.CtaType
  }

  export type ServiceCtaOrderByRelevanceInput = {
    fields: ServiceCtaOrderByRelevanceFieldEnum | ServiceCtaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCtaCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    label?: SortOrder
    link?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCtaAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceCtaMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    label?: SortOrder
    link?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCtaMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    label?: SortOrder
    link?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCtaSumOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
  }

  export type EnumCtaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaType | EnumCtaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CtaType[]
    notIn?: $Enums.CtaType[]
    not?: NestedEnumCtaTypeWithAggregatesFilter<$PrismaModel> | $Enums.CtaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCtaTypeFilter<$PrismaModel>
    _max?: NestedEnumCtaTypeFilter<$PrismaModel>
  }

  export type LawyerOrderByRelevanceInput = {
    fields: LawyerOrderByRelevanceFieldEnum | LawyerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LawyerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    photo?: SortOrder
    position?: SortOrder
    shortBio?: SortOrder
    fullBio?: SortOrder
    specialty?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawyerAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type LawyerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    photo?: SortOrder
    position?: SortOrder
    shortBio?: SortOrder
    fullBio?: SortOrder
    specialty?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawyerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    photo?: SortOrder
    position?: SortOrder
    shortBio?: SortOrder
    fullBio?: SortOrder
    specialty?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawyerSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCategoryOrderByRelevanceInput = {
    fields: ArticleCategoryOrderByRelevanceFieldEnum | ArticleCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticleCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArticleCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[]
    notIn?: $Enums.ArticleStatus[]
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type ArticleCategoryNullableScalarRelationFilter = {
    is?: ArticleCategoryWhereInput | null
    isNot?: ArticleCategoryWhereInput | null
  }

  export type ArticleOrderByRelevanceInput = {
    fields: ArticleOrderByRelevanceFieldEnum | ArticleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    thumbnail?: SortOrder
    content?: SortOrder
    featured?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    thumbnail?: SortOrder
    content?: SortOrder
    featured?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    thumbnail?: SortOrder
    content?: SortOrder
    featured?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[]
    notIn?: $Enums.ArticleStatus[]
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type ClientOrderByRelevanceInput = {
    fields: ClientOrderByRelevanceFieldEnum | ClientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type SiteSettingOrderByRelevanceInput = {
    fields: SiteSettingOrderByRelevanceFieldEnum | SiteSettingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SiteSettingCountOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    siteTagline?: SortOrder
    logoLight?: SortOrder
    logoDark?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    whatsappNumber?: SortOrder
    whatsappMessage?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officeAddress?: SortOrder
    mapEmbedUrl?: SortOrder
    footerText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SiteSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    siteTagline?: SortOrder
    logoLight?: SortOrder
    logoDark?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    whatsappNumber?: SortOrder
    whatsappMessage?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officeAddress?: SortOrder
    mapEmbedUrl?: SortOrder
    footerText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingMinOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    siteTagline?: SortOrder
    logoLight?: SortOrder
    logoDark?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    whatsappNumber?: SortOrder
    whatsappMessage?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officeAddress?: SortOrder
    mapEmbedUrl?: SortOrder
    footerText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeoMetaOrderByRelevanceInput = {
    fields: SeoMetaOrderByRelevanceFieldEnum | SeoMetaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeoMetaEntityTypeEntityIdCompoundUniqueInput = {
    entityType: string
    entityId: bigint | number
  }

  export type SeoMetaCountOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    canonicalUrl?: SortOrder
    robots?: SortOrder
    schemaType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoMetaAvgOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
  }

  export type SeoMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    canonicalUrl?: SortOrder
    robots?: SortOrder
    schemaType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoMetaMinOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    canonicalUrl?: SortOrder
    robots?: SortOrder
    schemaType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoMetaSumOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type MediaUploadOrderByRelevanceInput = {
    fields: MediaUploadOrderByRelevanceFieldEnum | MediaUploadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MediaUploadCountOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    uploadedByAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaUploadAvgOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    uploadedByAdminId?: SortOrder
  }

  export type MediaUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    uploadedByAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaUploadMinOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    uploadedByAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaUploadSumOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
    uploadedByAdminId?: SortOrder
  }

  export type MediaUploadCreateNestedManyWithoutUploadedByAdminInput = {
    create?: XOR<MediaUploadCreateWithoutUploadedByAdminInput, MediaUploadUncheckedCreateWithoutUploadedByAdminInput> | MediaUploadCreateWithoutUploadedByAdminInput[] | MediaUploadUncheckedCreateWithoutUploadedByAdminInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutUploadedByAdminInput | MediaUploadCreateOrConnectWithoutUploadedByAdminInput[]
    createMany?: MediaUploadCreateManyUploadedByAdminInputEnvelope
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
  }

  export type MediaUploadUncheckedCreateNestedManyWithoutUploadedByAdminInput = {
    create?: XOR<MediaUploadCreateWithoutUploadedByAdminInput, MediaUploadUncheckedCreateWithoutUploadedByAdminInput> | MediaUploadCreateWithoutUploadedByAdminInput[] | MediaUploadUncheckedCreateWithoutUploadedByAdminInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutUploadedByAdminInput | MediaUploadCreateOrConnectWithoutUploadedByAdminInput[]
    createMany?: MediaUploadCreateManyUploadedByAdminInputEnvelope
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MediaUploadUpdateManyWithoutUploadedByAdminNestedInput = {
    create?: XOR<MediaUploadCreateWithoutUploadedByAdminInput, MediaUploadUncheckedCreateWithoutUploadedByAdminInput> | MediaUploadCreateWithoutUploadedByAdminInput[] | MediaUploadUncheckedCreateWithoutUploadedByAdminInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutUploadedByAdminInput | MediaUploadCreateOrConnectWithoutUploadedByAdminInput[]
    upsert?: MediaUploadUpsertWithWhereUniqueWithoutUploadedByAdminInput | MediaUploadUpsertWithWhereUniqueWithoutUploadedByAdminInput[]
    createMany?: MediaUploadCreateManyUploadedByAdminInputEnvelope
    set?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    disconnect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    delete?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    update?: MediaUploadUpdateWithWhereUniqueWithoutUploadedByAdminInput | MediaUploadUpdateWithWhereUniqueWithoutUploadedByAdminInput[]
    updateMany?: MediaUploadUpdateManyWithWhereWithoutUploadedByAdminInput | MediaUploadUpdateManyWithWhereWithoutUploadedByAdminInput[]
    deleteMany?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
  }

  export type MediaUploadUncheckedUpdateManyWithoutUploadedByAdminNestedInput = {
    create?: XOR<MediaUploadCreateWithoutUploadedByAdminInput, MediaUploadUncheckedCreateWithoutUploadedByAdminInput> | MediaUploadCreateWithoutUploadedByAdminInput[] | MediaUploadUncheckedCreateWithoutUploadedByAdminInput[]
    connectOrCreate?: MediaUploadCreateOrConnectWithoutUploadedByAdminInput | MediaUploadCreateOrConnectWithoutUploadedByAdminInput[]
    upsert?: MediaUploadUpsertWithWhereUniqueWithoutUploadedByAdminInput | MediaUploadUpsertWithWhereUniqueWithoutUploadedByAdminInput[]
    createMany?: MediaUploadCreateManyUploadedByAdminInputEnvelope
    set?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    disconnect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    delete?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    connect?: MediaUploadWhereUniqueInput | MediaUploadWhereUniqueInput[]
    update?: MediaUploadUpdateWithWhereUniqueWithoutUploadedByAdminInput | MediaUploadUpdateWithWhereUniqueWithoutUploadedByAdminInput[]
    updateMany?: MediaUploadUpdateManyWithWhereWithoutUploadedByAdminInput | MediaUploadUpdateManyWithWhereWithoutUploadedByAdminInput[]
    deleteMany?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
  }

  export type EnumPageStatusFieldUpdateOperationsInput = {
    set?: $Enums.PageStatus
  }

  export type ServiceFaqCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceFaqCreateWithoutServiceInput, ServiceFaqUncheckedCreateWithoutServiceInput> | ServiceFaqCreateWithoutServiceInput[] | ServiceFaqUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFaqCreateOrConnectWithoutServiceInput | ServiceFaqCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceFaqCreateManyServiceInputEnvelope
    connect?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
  }

  export type ServiceCtaCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceCtaCreateWithoutServiceInput, ServiceCtaUncheckedCreateWithoutServiceInput> | ServiceCtaCreateWithoutServiceInput[] | ServiceCtaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceCtaCreateOrConnectWithoutServiceInput | ServiceCtaCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceCtaCreateManyServiceInputEnvelope
    connect?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
  }

  export type ServiceFaqUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceFaqCreateWithoutServiceInput, ServiceFaqUncheckedCreateWithoutServiceInput> | ServiceFaqCreateWithoutServiceInput[] | ServiceFaqUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFaqCreateOrConnectWithoutServiceInput | ServiceFaqCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceFaqCreateManyServiceInputEnvelope
    connect?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
  }

  export type ServiceCtaUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceCtaCreateWithoutServiceInput, ServiceCtaUncheckedCreateWithoutServiceInput> | ServiceCtaCreateWithoutServiceInput[] | ServiceCtaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceCtaCreateOrConnectWithoutServiceInput | ServiceCtaCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceCtaCreateManyServiceInputEnvelope
    connect?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumContentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContentStatus
  }

  export type ServiceFaqUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceFaqCreateWithoutServiceInput, ServiceFaqUncheckedCreateWithoutServiceInput> | ServiceFaqCreateWithoutServiceInput[] | ServiceFaqUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFaqCreateOrConnectWithoutServiceInput | ServiceFaqCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceFaqUpsertWithWhereUniqueWithoutServiceInput | ServiceFaqUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceFaqCreateManyServiceInputEnvelope
    set?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
    disconnect?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
    delete?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
    connect?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
    update?: ServiceFaqUpdateWithWhereUniqueWithoutServiceInput | ServiceFaqUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceFaqUpdateManyWithWhereWithoutServiceInput | ServiceFaqUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceFaqScalarWhereInput | ServiceFaqScalarWhereInput[]
  }

  export type ServiceCtaUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceCtaCreateWithoutServiceInput, ServiceCtaUncheckedCreateWithoutServiceInput> | ServiceCtaCreateWithoutServiceInput[] | ServiceCtaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceCtaCreateOrConnectWithoutServiceInput | ServiceCtaCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceCtaUpsertWithWhereUniqueWithoutServiceInput | ServiceCtaUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceCtaCreateManyServiceInputEnvelope
    set?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
    disconnect?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
    delete?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
    connect?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
    update?: ServiceCtaUpdateWithWhereUniqueWithoutServiceInput | ServiceCtaUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceCtaUpdateManyWithWhereWithoutServiceInput | ServiceCtaUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceCtaScalarWhereInput | ServiceCtaScalarWhereInput[]
  }

  export type ServiceFaqUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceFaqCreateWithoutServiceInput, ServiceFaqUncheckedCreateWithoutServiceInput> | ServiceFaqCreateWithoutServiceInput[] | ServiceFaqUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFaqCreateOrConnectWithoutServiceInput | ServiceFaqCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceFaqUpsertWithWhereUniqueWithoutServiceInput | ServiceFaqUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceFaqCreateManyServiceInputEnvelope
    set?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
    disconnect?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
    delete?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
    connect?: ServiceFaqWhereUniqueInput | ServiceFaqWhereUniqueInput[]
    update?: ServiceFaqUpdateWithWhereUniqueWithoutServiceInput | ServiceFaqUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceFaqUpdateManyWithWhereWithoutServiceInput | ServiceFaqUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceFaqScalarWhereInput | ServiceFaqScalarWhereInput[]
  }

  export type ServiceCtaUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceCtaCreateWithoutServiceInput, ServiceCtaUncheckedCreateWithoutServiceInput> | ServiceCtaCreateWithoutServiceInput[] | ServiceCtaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceCtaCreateOrConnectWithoutServiceInput | ServiceCtaCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceCtaUpsertWithWhereUniqueWithoutServiceInput | ServiceCtaUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceCtaCreateManyServiceInputEnvelope
    set?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
    disconnect?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
    delete?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
    connect?: ServiceCtaWhereUniqueInput | ServiceCtaWhereUniqueInput[]
    update?: ServiceCtaUpdateWithWhereUniqueWithoutServiceInput | ServiceCtaUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceCtaUpdateManyWithWhereWithoutServiceInput | ServiceCtaUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceCtaScalarWhereInput | ServiceCtaScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutFaqsInput = {
    create?: XOR<ServiceCreateWithoutFaqsInput, ServiceUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFaqsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutFaqsNestedInput = {
    create?: XOR<ServiceCreateWithoutFaqsInput, ServiceUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFaqsInput
    upsert?: ServiceUpsertWithoutFaqsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutFaqsInput, ServiceUpdateWithoutFaqsInput>, ServiceUncheckedUpdateWithoutFaqsInput>
  }

  export type ServiceCreateNestedOneWithoutCtasInput = {
    create?: XOR<ServiceCreateWithoutCtasInput, ServiceUncheckedCreateWithoutCtasInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutCtasInput
    connect?: ServiceWhereUniqueInput
  }

  export type EnumCtaTypeFieldUpdateOperationsInput = {
    set?: $Enums.CtaType
  }

  export type ServiceUpdateOneRequiredWithoutCtasNestedInput = {
    create?: XOR<ServiceCreateWithoutCtasInput, ServiceUncheckedCreateWithoutCtasInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutCtasInput
    upsert?: ServiceUpsertWithoutCtasInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutCtasInput, ServiceUpdateWithoutCtasInput>, ServiceUncheckedUpdateWithoutCtasInput>
  }

  export type ArticleCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput> | ArticleCreateWithoutCategoryInput[] | ArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoryInput | ArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: ArticleCreateManyCategoryInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput> | ArticleCreateWithoutCategoryInput[] | ArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoryInput | ArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: ArticleCreateManyCategoryInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput> | ArticleCreateWithoutCategoryInput[] | ArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoryInput | ArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutCategoryInput | ArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ArticleCreateManyCategoryInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutCategoryInput | ArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutCategoryInput | ArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput> | ArticleCreateWithoutCategoryInput[] | ArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoryInput | ArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutCategoryInput | ArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ArticleCreateManyCategoryInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutCategoryInput | ArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutCategoryInput | ArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleCategoryCreateNestedOneWithoutArticlesInput = {
    create?: XOR<ArticleCategoryCreateWithoutArticlesInput, ArticleCategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutArticlesInput
    connect?: ArticleCategoryWhereUniqueInput
  }

  export type EnumArticleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ArticleStatus
  }

  export type ArticleCategoryUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<ArticleCategoryCreateWithoutArticlesInput, ArticleCategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: ArticleCategoryCreateOrConnectWithoutArticlesInput
    upsert?: ArticleCategoryUpsertWithoutArticlesInput
    disconnect?: ArticleCategoryWhereInput | boolean
    delete?: ArticleCategoryWhereInput | boolean
    connect?: ArticleCategoryWhereUniqueInput
    update?: XOR<XOR<ArticleCategoryUpdateToOneWithWhereWithoutArticlesInput, ArticleCategoryUpdateWithoutArticlesInput>, ArticleCategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type AdminCreateNestedOneWithoutMediaUploadsInput = {
    create?: XOR<AdminCreateWithoutMediaUploadsInput, AdminUncheckedCreateWithoutMediaUploadsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMediaUploadsInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutMediaUploadsNestedInput = {
    create?: XOR<AdminCreateWithoutMediaUploadsInput, AdminUncheckedCreateWithoutMediaUploadsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMediaUploadsInput
    upsert?: AdminUpsertWithoutMediaUploadsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutMediaUploadsInput, AdminUpdateWithoutMediaUploadsInput>, AdminUncheckedUpdateWithoutMediaUploadsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | EnumPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PageStatus[]
    notIn?: $Enums.PageStatus[]
    not?: NestedEnumPageStatusFilter<$PrismaModel> | $Enums.PageStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | EnumPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PageStatus[]
    notIn?: $Enums.PageStatus[]
    not?: NestedEnumPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPageStatusFilter<$PrismaModel>
    _max?: NestedEnumPageStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[]
    notIn?: $Enums.ContentStatus[]
    not?: NestedEnumContentStatusFilter<$PrismaModel> | $Enums.ContentStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[]
    notIn?: $Enums.ContentStatus[]
    not?: NestedEnumContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentStatusFilter<$PrismaModel>
    _max?: NestedEnumContentStatusFilter<$PrismaModel>
  }

  export type NestedEnumCtaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaType | EnumCtaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CtaType[]
    notIn?: $Enums.CtaType[]
    not?: NestedEnumCtaTypeFilter<$PrismaModel> | $Enums.CtaType
  }

  export type NestedEnumCtaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaType | EnumCtaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CtaType[]
    notIn?: $Enums.CtaType[]
    not?: NestedEnumCtaTypeWithAggregatesFilter<$PrismaModel> | $Enums.CtaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCtaTypeFilter<$PrismaModel>
    _max?: NestedEnumCtaTypeFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[]
    notIn?: $Enums.ArticleStatus[]
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[]
    notIn?: $Enums.ArticleStatus[]
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type MediaUploadCreateWithoutUploadedByAdminInput = {
    id?: bigint | number
    module: string
    originalName: string
    fileName: string
    filePath: string
    fileUrl: string
    mimeType: string
    fileSize: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUploadUncheckedCreateWithoutUploadedByAdminInput = {
    id?: bigint | number
    module: string
    originalName: string
    fileName: string
    filePath: string
    fileUrl: string
    mimeType: string
    fileSize: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUploadCreateOrConnectWithoutUploadedByAdminInput = {
    where: MediaUploadWhereUniqueInput
    create: XOR<MediaUploadCreateWithoutUploadedByAdminInput, MediaUploadUncheckedCreateWithoutUploadedByAdminInput>
  }

  export type MediaUploadCreateManyUploadedByAdminInputEnvelope = {
    data: MediaUploadCreateManyUploadedByAdminInput | MediaUploadCreateManyUploadedByAdminInput[]
    skipDuplicates?: boolean
  }

  export type MediaUploadUpsertWithWhereUniqueWithoutUploadedByAdminInput = {
    where: MediaUploadWhereUniqueInput
    update: XOR<MediaUploadUpdateWithoutUploadedByAdminInput, MediaUploadUncheckedUpdateWithoutUploadedByAdminInput>
    create: XOR<MediaUploadCreateWithoutUploadedByAdminInput, MediaUploadUncheckedCreateWithoutUploadedByAdminInput>
  }

  export type MediaUploadUpdateWithWhereUniqueWithoutUploadedByAdminInput = {
    where: MediaUploadWhereUniqueInput
    data: XOR<MediaUploadUpdateWithoutUploadedByAdminInput, MediaUploadUncheckedUpdateWithoutUploadedByAdminInput>
  }

  export type MediaUploadUpdateManyWithWhereWithoutUploadedByAdminInput = {
    where: MediaUploadScalarWhereInput
    data: XOR<MediaUploadUpdateManyMutationInput, MediaUploadUncheckedUpdateManyWithoutUploadedByAdminInput>
  }

  export type MediaUploadScalarWhereInput = {
    AND?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
    OR?: MediaUploadScalarWhereInput[]
    NOT?: MediaUploadScalarWhereInput | MediaUploadScalarWhereInput[]
    id?: BigIntFilter<"MediaUpload"> | bigint | number
    module?: StringFilter<"MediaUpload"> | string
    originalName?: StringFilter<"MediaUpload"> | string
    fileName?: StringFilter<"MediaUpload"> | string
    filePath?: StringFilter<"MediaUpload"> | string
    fileUrl?: StringFilter<"MediaUpload"> | string
    mimeType?: StringFilter<"MediaUpload"> | string
    fileSize?: BigIntFilter<"MediaUpload"> | bigint | number
    uploadedByAdminId?: BigIntNullableFilter<"MediaUpload"> | bigint | number | null
    createdAt?: DateTimeFilter<"MediaUpload"> | Date | string
    updatedAt?: DateTimeFilter<"MediaUpload"> | Date | string
  }

  export type ServiceFaqCreateWithoutServiceInput = {
    id?: bigint | number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceFaqUncheckedCreateWithoutServiceInput = {
    id?: bigint | number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceFaqCreateOrConnectWithoutServiceInput = {
    where: ServiceFaqWhereUniqueInput
    create: XOR<ServiceFaqCreateWithoutServiceInput, ServiceFaqUncheckedCreateWithoutServiceInput>
  }

  export type ServiceFaqCreateManyServiceInputEnvelope = {
    data: ServiceFaqCreateManyServiceInput | ServiceFaqCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCtaCreateWithoutServiceInput = {
    id?: bigint | number
    label: string
    link: string
    type: $Enums.CtaType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCtaUncheckedCreateWithoutServiceInput = {
    id?: bigint | number
    label: string
    link: string
    type: $Enums.CtaType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCtaCreateOrConnectWithoutServiceInput = {
    where: ServiceCtaWhereUniqueInput
    create: XOR<ServiceCtaCreateWithoutServiceInput, ServiceCtaUncheckedCreateWithoutServiceInput>
  }

  export type ServiceCtaCreateManyServiceInputEnvelope = {
    data: ServiceCtaCreateManyServiceInput | ServiceCtaCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceFaqUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceFaqWhereUniqueInput
    update: XOR<ServiceFaqUpdateWithoutServiceInput, ServiceFaqUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceFaqCreateWithoutServiceInput, ServiceFaqUncheckedCreateWithoutServiceInput>
  }

  export type ServiceFaqUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceFaqWhereUniqueInput
    data: XOR<ServiceFaqUpdateWithoutServiceInput, ServiceFaqUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceFaqUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceFaqScalarWhereInput
    data: XOR<ServiceFaqUpdateManyMutationInput, ServiceFaqUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceFaqScalarWhereInput = {
    AND?: ServiceFaqScalarWhereInput | ServiceFaqScalarWhereInput[]
    OR?: ServiceFaqScalarWhereInput[]
    NOT?: ServiceFaqScalarWhereInput | ServiceFaqScalarWhereInput[]
    id?: BigIntFilter<"ServiceFaq"> | bigint | number
    serviceId?: BigIntFilter<"ServiceFaq"> | bigint | number
    question?: StringFilter<"ServiceFaq"> | string
    answer?: StringFilter<"ServiceFaq"> | string
    sortOrder?: IntFilter<"ServiceFaq"> | number
    createdAt?: DateTimeFilter<"ServiceFaq"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceFaq"> | Date | string
  }

  export type ServiceCtaUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceCtaWhereUniqueInput
    update: XOR<ServiceCtaUpdateWithoutServiceInput, ServiceCtaUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceCtaCreateWithoutServiceInput, ServiceCtaUncheckedCreateWithoutServiceInput>
  }

  export type ServiceCtaUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceCtaWhereUniqueInput
    data: XOR<ServiceCtaUpdateWithoutServiceInput, ServiceCtaUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceCtaUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceCtaScalarWhereInput
    data: XOR<ServiceCtaUpdateManyMutationInput, ServiceCtaUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceCtaScalarWhereInput = {
    AND?: ServiceCtaScalarWhereInput | ServiceCtaScalarWhereInput[]
    OR?: ServiceCtaScalarWhereInput[]
    NOT?: ServiceCtaScalarWhereInput | ServiceCtaScalarWhereInput[]
    id?: BigIntFilter<"ServiceCta"> | bigint | number
    serviceId?: BigIntFilter<"ServiceCta"> | bigint | number
    label?: StringFilter<"ServiceCta"> | string
    link?: StringFilter<"ServiceCta"> | string
    type?: EnumCtaTypeFilter<"ServiceCta"> | $Enums.CtaType
    isActive?: BoolFilter<"ServiceCta"> | boolean
    createdAt?: DateTimeFilter<"ServiceCta"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceCta"> | Date | string
  }

  export type ServiceCreateWithoutFaqsInput = {
    id?: bigint | number
    title: string
    slug: string
    summary: string
    content: string
    coverImage?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ctas?: ServiceCtaCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutFaqsInput = {
    id?: bigint | number
    title: string
    slug: string
    summary: string
    content: string
    coverImage?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ctas?: ServiceCtaUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutFaqsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutFaqsInput, ServiceUncheckedCreateWithoutFaqsInput>
  }

  export type ServiceUpsertWithoutFaqsInput = {
    update: XOR<ServiceUpdateWithoutFaqsInput, ServiceUncheckedUpdateWithoutFaqsInput>
    create: XOR<ServiceCreateWithoutFaqsInput, ServiceUncheckedCreateWithoutFaqsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutFaqsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutFaqsInput, ServiceUncheckedUpdateWithoutFaqsInput>
  }

  export type ServiceUpdateWithoutFaqsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ctas?: ServiceCtaUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutFaqsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ctas?: ServiceCtaUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutCtasInput = {
    id?: bigint | number
    title: string
    slug: string
    summary: string
    content: string
    coverImage?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faqs?: ServiceFaqCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCtasInput = {
    id?: bigint | number
    title: string
    slug: string
    summary: string
    content: string
    coverImage?: string | null
    featured?: boolean
    sortOrder?: number
    status?: $Enums.ContentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faqs?: ServiceFaqUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCtasInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCtasInput, ServiceUncheckedCreateWithoutCtasInput>
  }

  export type ServiceUpsertWithoutCtasInput = {
    update: XOR<ServiceUpdateWithoutCtasInput, ServiceUncheckedUpdateWithoutCtasInput>
    create: XOR<ServiceCreateWithoutCtasInput, ServiceUncheckedCreateWithoutCtasInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutCtasInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutCtasInput, ServiceUncheckedUpdateWithoutCtasInput>
  }

  export type ServiceUpdateWithoutCtasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: ServiceFaqUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCtasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: ServiceFaqUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ArticleCreateWithoutCategoryInput = {
    id?: bigint | number
    title: string
    slug: string
    excerpt?: string | null
    thumbnail?: string | null
    content: string
    featured?: boolean
    publishedAt?: Date | string | null
    status?: $Enums.ArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUncheckedCreateWithoutCategoryInput = {
    id?: bigint | number
    title: string
    slug: string
    excerpt?: string | null
    thumbnail?: string | null
    content: string
    featured?: boolean
    publishedAt?: Date | string | null
    status?: $Enums.ArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput>
  }

  export type ArticleCreateManyCategoryInputEnvelope = {
    data: ArticleCreateManyCategoryInput | ArticleCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutCategoryInput, ArticleUncheckedUpdateWithoutCategoryInput>
    create: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutCategoryInput, ArticleUncheckedUpdateWithoutCategoryInput>
  }

  export type ArticleUpdateManyWithWhereWithoutCategoryInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: BigIntFilter<"Article"> | bigint | number
    categoryId?: BigIntNullableFilter<"Article"> | bigint | number | null
    title?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    thumbnail?: StringNullableFilter<"Article"> | string | null
    content?: StringFilter<"Article"> | string
    featured?: BoolFilter<"Article"> | boolean
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type ArticleCategoryCreateWithoutArticlesInput = {
    id?: bigint | number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCategoryUncheckedCreateWithoutArticlesInput = {
    id?: bigint | number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCategoryCreateOrConnectWithoutArticlesInput = {
    where: ArticleCategoryWhereUniqueInput
    create: XOR<ArticleCategoryCreateWithoutArticlesInput, ArticleCategoryUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleCategoryUpsertWithoutArticlesInput = {
    update: XOR<ArticleCategoryUpdateWithoutArticlesInput, ArticleCategoryUncheckedUpdateWithoutArticlesInput>
    create: XOR<ArticleCategoryCreateWithoutArticlesInput, ArticleCategoryUncheckedCreateWithoutArticlesInput>
    where?: ArticleCategoryWhereInput
  }

  export type ArticleCategoryUpdateToOneWithWhereWithoutArticlesInput = {
    where?: ArticleCategoryWhereInput
    data: XOR<ArticleCategoryUpdateWithoutArticlesInput, ArticleCategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticleCategoryUpdateWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCategoryUncheckedUpdateWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateWithoutMediaUploadsInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    fullName: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutMediaUploadsInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    fullName: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutMediaUploadsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutMediaUploadsInput, AdminUncheckedCreateWithoutMediaUploadsInput>
  }

  export type AdminUpsertWithoutMediaUploadsInput = {
    update: XOR<AdminUpdateWithoutMediaUploadsInput, AdminUncheckedUpdateWithoutMediaUploadsInput>
    create: XOR<AdminCreateWithoutMediaUploadsInput, AdminUncheckedCreateWithoutMediaUploadsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutMediaUploadsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutMediaUploadsInput, AdminUncheckedUpdateWithoutMediaUploadsInput>
  }

  export type AdminUpdateWithoutMediaUploadsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutMediaUploadsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadCreateManyUploadedByAdminInput = {
    id?: bigint | number
    module: string
    originalName: string
    fileName: string
    filePath: string
    fileUrl: string
    mimeType: string
    fileSize: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUploadUpdateWithoutUploadedByAdminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadUncheckedUpdateWithoutUploadedByAdminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUploadUncheckedUpdateManyWithoutUploadedByAdminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceFaqCreateManyServiceInput = {
    id?: bigint | number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCtaCreateManyServiceInput = {
    id?: bigint | number
    label: string
    link: string
    type: $Enums.CtaType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceFaqUpdateWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceFaqUncheckedUpdateWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceFaqUncheckedUpdateManyWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCtaUpdateWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumCtaTypeFieldUpdateOperationsInput | $Enums.CtaType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCtaUncheckedUpdateWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumCtaTypeFieldUpdateOperationsInput | $Enums.CtaType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCtaUncheckedUpdateManyWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumCtaTypeFieldUpdateOperationsInput | $Enums.CtaType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyCategoryInput = {
    id?: bigint | number
    title: string
    slug: string
    excerpt?: string | null
    thumbnail?: string | null
    content: string
    featured?: boolean
    publishedAt?: Date | string | null
    status?: $Enums.ArticleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}