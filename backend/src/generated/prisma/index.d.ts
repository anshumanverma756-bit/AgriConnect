
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Crops
 * 
 */
export type Crops = $Result.DefaultSelection<Prisma.$CropsPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PriceRecord
 * 
 */
export type PriceRecord = $Result.DefaultSelection<Prisma.$PriceRecordPayload>
/**
 * Model StorageListing
 * 
 */
export type StorageListing = $Result.DefaultSelection<Prisma.$StorageListingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  farmer: 'farmer',
  buyer: 'buyer',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crops`: Exposes CRUD operations for the **Crops** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crops.findMany()
    * ```
    */
  get crops(): Prisma.CropsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceRecord`: Exposes CRUD operations for the **PriceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceRecords
    * const priceRecords = await prisma.priceRecord.findMany()
    * ```
    */
  get priceRecord(): Prisma.PriceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storageListing`: Exposes CRUD operations for the **StorageListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorageListings
    * const storageListings = await prisma.storageListing.findMany()
    * ```
    */
  get storageListing(): Prisma.StorageListingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    Crops: 'Crops',
    Offer: 'Offer',
    Transaction: 'Transaction',
    PriceRecord: 'PriceRecord',
    StorageListing: 'StorageListing'
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
      modelProps: "user" | "crops" | "offer" | "transaction" | "priceRecord" | "storageListing"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Crops: {
        payload: Prisma.$CropsPayload<ExtArgs>
        fields: Prisma.CropsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>
          }
          findFirst: {
            args: Prisma.CropsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>
          }
          findMany: {
            args: Prisma.CropsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>[]
          }
          create: {
            args: Prisma.CropsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>
          }
          createMany: {
            args: Prisma.CropsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>[]
          }
          delete: {
            args: Prisma.CropsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>
          }
          update: {
            args: Prisma.CropsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>
          }
          deleteMany: {
            args: Prisma.CropsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CropsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>[]
          }
          upsert: {
            args: Prisma.CropsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropsPayload>
          }
          aggregate: {
            args: Prisma.CropsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrops>
          }
          groupBy: {
            args: Prisma.CropsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropsCountArgs<ExtArgs>
            result: $Utils.Optional<CropsCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PriceRecord: {
        payload: Prisma.$PriceRecordPayload<ExtArgs>
        fields: Prisma.PriceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          findFirst: {
            args: Prisma.PriceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          findMany: {
            args: Prisma.PriceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>[]
          }
          create: {
            args: Prisma.PriceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          createMany: {
            args: Prisma.PriceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>[]
          }
          delete: {
            args: Prisma.PriceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          update: {
            args: Prisma.PriceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          deleteMany: {
            args: Prisma.PriceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>[]
          }
          upsert: {
            args: Prisma.PriceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRecordPayload>
          }
          aggregate: {
            args: Prisma.PriceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceRecord>
          }
          groupBy: {
            args: Prisma.PriceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PriceRecordCountAggregateOutputType> | number
          }
        }
      }
      StorageListing: {
        payload: Prisma.$StorageListingPayload<ExtArgs>
        fields: Prisma.StorageListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorageListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorageListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>
          }
          findFirst: {
            args: Prisma.StorageListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorageListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>
          }
          findMany: {
            args: Prisma.StorageListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>[]
          }
          create: {
            args: Prisma.StorageListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>
          }
          createMany: {
            args: Prisma.StorageListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorageListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>[]
          }
          delete: {
            args: Prisma.StorageListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>
          }
          update: {
            args: Prisma.StorageListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>
          }
          deleteMany: {
            args: Prisma.StorageListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorageListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StorageListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>[]
          }
          upsert: {
            args: Prisma.StorageListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageListingPayload>
          }
          aggregate: {
            args: Prisma.StorageListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStorageListing>
          }
          groupBy: {
            args: Prisma.StorageListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorageListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorageListingCountArgs<ExtArgs>
            result: $Utils.Optional<StorageListingCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    user?: UserOmit
    crops?: CropsOmit
    offer?: OfferOmit
    transaction?: TransactionOmit
    priceRecord?: PriceRecordOmit
    storageListing?: StorageListingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    crops: number
    offers: number
    storageListings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crops?: boolean | UserCountOutputTypeCountCropsArgs
    offers?: boolean | UserCountOutputTypeCountOffersArgs
    storageListings?: boolean | UserCountOutputTypeCountStorageListingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStorageListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageListingWhereInput
  }


  /**
   * Count Type CropsCountOutputType
   */

  export type CropsCountOutputType = {
    offers: number
  }

  export type CropsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | CropsCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * CropsCountOutputType without action
   */
  export type CropsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropsCountOutputType
     */
    select?: CropsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CropsCountOutputType without action
   */
  export type CropsCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    location: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    location: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    location: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    location?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    location?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    location?: boolean
    createdAt?: boolean
    crops?: boolean | User$cropsArgs<ExtArgs>
    offers?: boolean | User$offersArgs<ExtArgs>
    storageListings?: boolean | User$storageListingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "location" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crops?: boolean | User$cropsArgs<ExtArgs>
    offers?: boolean | User$offersArgs<ExtArgs>
    storageListings?: boolean | User$storageListingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      crops: Prisma.$CropsPayload<ExtArgs>[]
      offers: Prisma.$OfferPayload<ExtArgs>[]
      storageListings: Prisma.$StorageListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      location: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crops<T extends User$cropsArgs<ExtArgs> = {}>(args?: Subset<T, User$cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offers<T extends User$offersArgs<ExtArgs> = {}>(args?: Subset<T, User$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storageListings<T extends User$storageListingsArgs<ExtArgs> = {}>(args?: Subset<T, User$storageListingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly location: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.crops
   */
  export type User$cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    where?: CropsWhereInput
    orderBy?: CropsOrderByWithRelationInput | CropsOrderByWithRelationInput[]
    cursor?: CropsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * User.offers
   */
  export type User$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * User.storageListings
   */
  export type User$storageListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    where?: StorageListingWhereInput
    orderBy?: StorageListingOrderByWithRelationInput | StorageListingOrderByWithRelationInput[]
    cursor?: StorageListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorageListingScalarFieldEnum | StorageListingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Crops
   */

  export type AggregateCrops = {
    _count: CropsCountAggregateOutputType | null
    _avg: CropsAvgAggregateOutputType | null
    _sum: CropsSumAggregateOutputType | null
    _min: CropsMinAggregateOutputType | null
    _max: CropsMaxAggregateOutputType | null
  }

  export type CropsAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type CropsSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type CropsMinAggregateOutputType = {
    id: string | null
    farmerId: string | null
    name: string | null
    quantity: number | null
    qualityGrade: string | null
    price: number | null
    location: string | null
    photoUrl: string | null
    status: string | null
    createdAt: Date | null
  }

  export type CropsMaxAggregateOutputType = {
    id: string | null
    farmerId: string | null
    name: string | null
    quantity: number | null
    qualityGrade: string | null
    price: number | null
    location: string | null
    photoUrl: string | null
    status: string | null
    createdAt: Date | null
  }

  export type CropsCountAggregateOutputType = {
    id: number
    farmerId: number
    name: number
    quantity: number
    qualityGrade: number
    price: number
    location: number
    photoUrl: number
    status: number
    createdAt: number
    _all: number
  }


  export type CropsAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type CropsSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type CropsMinAggregateInputType = {
    id?: true
    farmerId?: true
    name?: true
    quantity?: true
    qualityGrade?: true
    price?: true
    location?: true
    photoUrl?: true
    status?: true
    createdAt?: true
  }

  export type CropsMaxAggregateInputType = {
    id?: true
    farmerId?: true
    name?: true
    quantity?: true
    qualityGrade?: true
    price?: true
    location?: true
    photoUrl?: true
    status?: true
    createdAt?: true
  }

  export type CropsCountAggregateInputType = {
    id?: true
    farmerId?: true
    name?: true
    quantity?: true
    qualityGrade?: true
    price?: true
    location?: true
    photoUrl?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CropsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crops to aggregate.
     */
    where?: CropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropsOrderByWithRelationInput | CropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crops
    **/
    _count?: true | CropsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CropsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CropsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropsMaxAggregateInputType
  }

  export type GetCropsAggregateType<T extends CropsAggregateArgs> = {
        [P in keyof T & keyof AggregateCrops]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrops[P]>
      : GetScalarType<T[P], AggregateCrops[P]>
  }




  export type CropsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropsWhereInput
    orderBy?: CropsOrderByWithAggregationInput | CropsOrderByWithAggregationInput[]
    by: CropsScalarFieldEnum[] | CropsScalarFieldEnum
    having?: CropsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropsCountAggregateInputType | true
    _avg?: CropsAvgAggregateInputType
    _sum?: CropsSumAggregateInputType
    _min?: CropsMinAggregateInputType
    _max?: CropsMaxAggregateInputType
  }

  export type CropsGroupByOutputType = {
    id: string
    farmerId: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl: string | null
    status: string
    createdAt: Date
    _count: CropsCountAggregateOutputType | null
    _avg: CropsAvgAggregateOutputType | null
    _sum: CropsSumAggregateOutputType | null
    _min: CropsMinAggregateOutputType | null
    _max: CropsMaxAggregateOutputType | null
  }

  type GetCropsGroupByPayload<T extends CropsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropsGroupByOutputType[P]>
            : GetScalarType<T[P], CropsGroupByOutputType[P]>
        }
      >
    >


  export type CropsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    name?: boolean
    quantity?: boolean
    qualityGrade?: boolean
    price?: boolean
    location?: boolean
    photoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    offers?: boolean | Crops$offersArgs<ExtArgs>
    _count?: boolean | CropsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crops"]>

  export type CropsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    name?: boolean
    quantity?: boolean
    qualityGrade?: boolean
    price?: boolean
    location?: boolean
    photoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crops"]>

  export type CropsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    name?: boolean
    quantity?: boolean
    qualityGrade?: boolean
    price?: boolean
    location?: boolean
    photoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crops"]>

  export type CropsSelectScalar = {
    id?: boolean
    farmerId?: boolean
    name?: boolean
    quantity?: boolean
    qualityGrade?: boolean
    price?: boolean
    location?: boolean
    photoUrl?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CropsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmerId" | "name" | "quantity" | "qualityGrade" | "price" | "location" | "photoUrl" | "status" | "createdAt", ExtArgs["result"]["crops"]>
  export type CropsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    offers?: boolean | Crops$offersArgs<ExtArgs>
    _count?: boolean | CropsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CropsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CropsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CropsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crops"
    objects: {
      farmer: Prisma.$UserPayload<ExtArgs>
      offers: Prisma.$OfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      farmerId: string
      name: string
      quantity: number
      qualityGrade: string
      price: number
      location: string
      photoUrl: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["crops"]>
    composites: {}
  }

  type CropsGetPayload<S extends boolean | null | undefined | CropsDefaultArgs> = $Result.GetResult<Prisma.$CropsPayload, S>

  type CropsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CropsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CropsCountAggregateInputType | true
    }

  export interface CropsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crops'], meta: { name: 'Crops' } }
    /**
     * Find zero or one Crops that matches the filter.
     * @param {CropsFindUniqueArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropsFindUniqueArgs>(args: SelectSubset<T, CropsFindUniqueArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crops that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CropsFindUniqueOrThrowArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropsFindUniqueOrThrowArgs>(args: SelectSubset<T, CropsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsFindFirstArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropsFindFirstArgs>(args?: SelectSubset<T, CropsFindFirstArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crops that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsFindFirstOrThrowArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropsFindFirstOrThrowArgs>(args?: SelectSubset<T, CropsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crops.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crops.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropsWithIdOnly = await prisma.crops.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CropsFindManyArgs>(args?: SelectSubset<T, CropsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crops.
     * @param {CropsCreateArgs} args - Arguments to create a Crops.
     * @example
     * // Create one Crops
     * const Crops = await prisma.crops.create({
     *   data: {
     *     // ... data to create a Crops
     *   }
     * })
     * 
     */
    create<T extends CropsCreateArgs>(args: SelectSubset<T, CropsCreateArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crops.
     * @param {CropsCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crops = await prisma.crops.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropsCreateManyArgs>(args?: SelectSubset<T, CropsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crops and returns the data saved in the database.
     * @param {CropsCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crops = await prisma.crops.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crops and only return the `id`
     * const cropsWithIdOnly = await prisma.crops.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropsCreateManyAndReturnArgs>(args?: SelectSubset<T, CropsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crops.
     * @param {CropsDeleteArgs} args - Arguments to delete one Crops.
     * @example
     * // Delete one Crops
     * const Crops = await prisma.crops.delete({
     *   where: {
     *     // ... filter to delete one Crops
     *   }
     * })
     * 
     */
    delete<T extends CropsDeleteArgs>(args: SelectSubset<T, CropsDeleteArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crops.
     * @param {CropsUpdateArgs} args - Arguments to update one Crops.
     * @example
     * // Update one Crops
     * const crops = await prisma.crops.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropsUpdateArgs>(args: SelectSubset<T, CropsUpdateArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crops.
     * @param {CropsDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crops.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropsDeleteManyArgs>(args?: SelectSubset<T, CropsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crops = await prisma.crops.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropsUpdateManyArgs>(args: SelectSubset<T, CropsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops and returns the data updated in the database.
     * @param {CropsUpdateManyAndReturnArgs} args - Arguments to update many Crops.
     * @example
     * // Update many Crops
     * const crops = await prisma.crops.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crops and only return the `id`
     * const cropsWithIdOnly = await prisma.crops.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CropsUpdateManyAndReturnArgs>(args: SelectSubset<T, CropsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crops.
     * @param {CropsUpsertArgs} args - Arguments to update or create a Crops.
     * @example
     * // Update or create a Crops
     * const crops = await prisma.crops.upsert({
     *   create: {
     *     // ... data to create a Crops
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crops we want to update
     *   }
     * })
     */
    upsert<T extends CropsUpsertArgs>(args: SelectSubset<T, CropsUpsertArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crops.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends CropsCountArgs>(
      args?: Subset<T, CropsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropsAggregateArgs>(args: Subset<T, CropsAggregateArgs>): Prisma.PrismaPromise<GetCropsAggregateType<T>>

    /**
     * Group by Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsGroupByArgs} args - Group by arguments.
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
      T extends CropsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropsGroupByArgs['orderBy'] }
        : { orderBy?: CropsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CropsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crops model
   */
  readonly fields: CropsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crops.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offers<T extends Crops$offersArgs<ExtArgs> = {}>(args?: Subset<T, Crops$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Crops model
   */
  interface CropsFieldRefs {
    readonly id: FieldRef<"Crops", 'String'>
    readonly farmerId: FieldRef<"Crops", 'String'>
    readonly name: FieldRef<"Crops", 'String'>
    readonly quantity: FieldRef<"Crops", 'Float'>
    readonly qualityGrade: FieldRef<"Crops", 'String'>
    readonly price: FieldRef<"Crops", 'Float'>
    readonly location: FieldRef<"Crops", 'String'>
    readonly photoUrl: FieldRef<"Crops", 'String'>
    readonly status: FieldRef<"Crops", 'String'>
    readonly createdAt: FieldRef<"Crops", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crops findUnique
   */
  export type CropsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where: CropsWhereUniqueInput
  }

  /**
   * Crops findUniqueOrThrow
   */
  export type CropsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where: CropsWhereUniqueInput
  }

  /**
   * Crops findFirst
   */
  export type CropsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropsOrderByWithRelationInput | CropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * Crops findFirstOrThrow
   */
  export type CropsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropsOrderByWithRelationInput | CropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * Crops findMany
   */
  export type CropsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropsOrderByWithRelationInput | CropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crops.
     */
    cursor?: CropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * Crops create
   */
  export type CropsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * The data needed to create a Crops.
     */
    data: XOR<CropsCreateInput, CropsUncheckedCreateInput>
  }

  /**
   * Crops createMany
   */
  export type CropsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crops.
     */
    data: CropsCreateManyInput | CropsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crops createManyAndReturn
   */
  export type CropsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * The data used to create many Crops.
     */
    data: CropsCreateManyInput | CropsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crops update
   */
  export type CropsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * The data needed to update a Crops.
     */
    data: XOR<CropsUpdateInput, CropsUncheckedUpdateInput>
    /**
     * Choose, which Crops to update.
     */
    where: CropsWhereUniqueInput
  }

  /**
   * Crops updateMany
   */
  export type CropsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crops.
     */
    data: XOR<CropsUpdateManyMutationInput, CropsUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropsWhereInput
    /**
     * Limit how many Crops to update.
     */
    limit?: number
  }

  /**
   * Crops updateManyAndReturn
   */
  export type CropsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * The data used to update Crops.
     */
    data: XOR<CropsUpdateManyMutationInput, CropsUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropsWhereInput
    /**
     * Limit how many Crops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crops upsert
   */
  export type CropsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * The filter to search for the Crops to update in case it exists.
     */
    where: CropsWhereUniqueInput
    /**
     * In case the Crops found by the `where` argument doesn't exist, create a new Crops with this data.
     */
    create: XOR<CropsCreateInput, CropsUncheckedCreateInput>
    /**
     * In case the Crops was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropsUpdateInput, CropsUncheckedUpdateInput>
  }

  /**
   * Crops delete
   */
  export type CropsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
    /**
     * Filter which Crops to delete.
     */
    where: CropsWhereUniqueInput
  }

  /**
   * Crops deleteMany
   */
  export type CropsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crops to delete
     */
    where?: CropsWhereInput
    /**
     * Limit how many Crops to delete.
     */
    limit?: number
  }

  /**
   * Crops.offers
   */
  export type Crops$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Crops without action
   */
  export type CropsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crops
     */
    select?: CropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crops
     */
    omit?: CropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropsInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    offerPrice: number | null
  }

  export type OfferSumAggregateOutputType = {
    offerPrice: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    cropId: string | null
    buyerId: string | null
    offerPrice: number | null
    status: string | null
    createdAt: Date | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    cropId: string | null
    buyerId: string | null
    offerPrice: number | null
    status: string | null
    createdAt: Date | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    cropId: number
    buyerId: number
    offerPrice: number
    status: number
    createdAt: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    offerPrice?: true
  }

  export type OfferSumAggregateInputType = {
    offerPrice?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    cropId?: true
    buyerId?: true
    offerPrice?: true
    status?: true
    createdAt?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    cropId?: true
    buyerId?: true
    offerPrice?: true
    status?: true
    createdAt?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    cropId?: true
    buyerId?: true
    offerPrice?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    cropId: string
    buyerId: string
    offerPrice: number
    status: string
    createdAt: Date
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropId?: boolean
    buyerId?: boolean
    offerPrice?: boolean
    status?: boolean
    createdAt?: boolean
    crop?: boolean | CropsDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | Offer$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropId?: boolean
    buyerId?: boolean
    offerPrice?: boolean
    status?: boolean
    createdAt?: boolean
    crop?: boolean | CropsDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cropId?: boolean
    buyerId?: boolean
    offerPrice?: boolean
    status?: boolean
    createdAt?: boolean
    crop?: boolean | CropsDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    cropId?: boolean
    buyerId?: boolean
    offerPrice?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cropId" | "buyerId" | "offerPrice" | "status" | "createdAt", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crop?: boolean | CropsDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | Offer$transactionArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crop?: boolean | CropsDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crop?: boolean | CropsDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      crop: Prisma.$CropsPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cropId: string
      buyerId: string
      offerPrice: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
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
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crop<T extends CropsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CropsDefaultArgs<ExtArgs>>): Prisma__CropsClient<$Result.GetResult<Prisma.$CropsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends Offer$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Offer$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly cropId: FieldRef<"Offer", 'String'>
    readonly buyerId: FieldRef<"Offer", 'String'>
    readonly offerPrice: FieldRef<"Offer", 'Float'>
    readonly status: FieldRef<"Offer", 'String'>
    readonly createdAt: FieldRef<"Offer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer.transaction
   */
  export type Offer$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    offerId: string | null
    status: string | null
    paymentStatus: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    offerId: string | null
    status: string | null
    paymentStatus: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    offerId: number
    status: number
    paymentStatus: number
    createdAt: number
    _all: number
  }


  export type TransactionMinAggregateInputType = {
    id?: true
    offerId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    offerId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    offerId?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    offerId: string
    status: string
    paymentStatus: string
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offerId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    offerId?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "offerId" | "status" | "paymentStatus" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      offerId: string
      status: string
      paymentStatus: string
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly offerId: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly paymentStatus: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PriceRecord
   */

  export type AggregatePriceRecord = {
    _count: PriceRecordCountAggregateOutputType | null
    _avg: PriceRecordAvgAggregateOutputType | null
    _sum: PriceRecordSumAggregateOutputType | null
    _min: PriceRecordMinAggregateOutputType | null
    _max: PriceRecordMaxAggregateOutputType | null
  }

  export type PriceRecordAvgAggregateOutputType = {
    minPrice: number | null
    maxPrice: number | null
    modalPrice: number | null
  }

  export type PriceRecordSumAggregateOutputType = {
    minPrice: number | null
    maxPrice: number | null
    modalPrice: number | null
  }

  export type PriceRecordMinAggregateOutputType = {
    id: string | null
    commodity: string | null
    market: string | null
    state: string | null
    minPrice: number | null
    maxPrice: number | null
    modalPrice: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type PriceRecordMaxAggregateOutputType = {
    id: string | null
    commodity: string | null
    market: string | null
    state: string | null
    minPrice: number | null
    maxPrice: number | null
    modalPrice: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type PriceRecordCountAggregateOutputType = {
    id: number
    commodity: number
    market: number
    state: number
    minPrice: number
    maxPrice: number
    modalPrice: number
    date: number
    createdAt: number
    _all: number
  }


  export type PriceRecordAvgAggregateInputType = {
    minPrice?: true
    maxPrice?: true
    modalPrice?: true
  }

  export type PriceRecordSumAggregateInputType = {
    minPrice?: true
    maxPrice?: true
    modalPrice?: true
  }

  export type PriceRecordMinAggregateInputType = {
    id?: true
    commodity?: true
    market?: true
    state?: true
    minPrice?: true
    maxPrice?: true
    modalPrice?: true
    date?: true
    createdAt?: true
  }

  export type PriceRecordMaxAggregateInputType = {
    id?: true
    commodity?: true
    market?: true
    state?: true
    minPrice?: true
    maxPrice?: true
    modalPrice?: true
    date?: true
    createdAt?: true
  }

  export type PriceRecordCountAggregateInputType = {
    id?: true
    commodity?: true
    market?: true
    state?: true
    minPrice?: true
    maxPrice?: true
    modalPrice?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type PriceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRecord to aggregate.
     */
    where?: PriceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRecords to fetch.
     */
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceRecords
    **/
    _count?: true | PriceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceRecordMaxAggregateInputType
  }

  export type GetPriceRecordAggregateType<T extends PriceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceRecord[P]>
      : GetScalarType<T[P], AggregatePriceRecord[P]>
  }




  export type PriceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceRecordWhereInput
    orderBy?: PriceRecordOrderByWithAggregationInput | PriceRecordOrderByWithAggregationInput[]
    by: PriceRecordScalarFieldEnum[] | PriceRecordScalarFieldEnum
    having?: PriceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceRecordCountAggregateInputType | true
    _avg?: PriceRecordAvgAggregateInputType
    _sum?: PriceRecordSumAggregateInputType
    _min?: PriceRecordMinAggregateInputType
    _max?: PriceRecordMaxAggregateInputType
  }

  export type PriceRecordGroupByOutputType = {
    id: string
    commodity: string
    market: string
    state: string
    minPrice: number
    maxPrice: number
    modalPrice: number
    date: Date
    createdAt: Date
    _count: PriceRecordCountAggregateOutputType | null
    _avg: PriceRecordAvgAggregateOutputType | null
    _sum: PriceRecordSumAggregateOutputType | null
    _min: PriceRecordMinAggregateOutputType | null
    _max: PriceRecordMaxAggregateOutputType | null
  }

  type GetPriceRecordGroupByPayload<T extends PriceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PriceRecordGroupByOutputType[P]>
        }
      >
    >


  export type PriceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodity?: boolean
    market?: boolean
    state?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    modalPrice?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["priceRecord"]>

  export type PriceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodity?: boolean
    market?: boolean
    state?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    modalPrice?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["priceRecord"]>

  export type PriceRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodity?: boolean
    market?: boolean
    state?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    modalPrice?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["priceRecord"]>

  export type PriceRecordSelectScalar = {
    id?: boolean
    commodity?: boolean
    market?: boolean
    state?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    modalPrice?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type PriceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commodity" | "market" | "state" | "minPrice" | "maxPrice" | "modalPrice" | "date" | "createdAt", ExtArgs["result"]["priceRecord"]>

  export type $PriceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commodity: string
      market: string
      state: string
      minPrice: number
      maxPrice: number
      modalPrice: number
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["priceRecord"]>
    composites: {}
  }

  type PriceRecordGetPayload<S extends boolean | null | undefined | PriceRecordDefaultArgs> = $Result.GetResult<Prisma.$PriceRecordPayload, S>

  type PriceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceRecordCountAggregateInputType | true
    }

  export interface PriceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceRecord'], meta: { name: 'PriceRecord' } }
    /**
     * Find zero or one PriceRecord that matches the filter.
     * @param {PriceRecordFindUniqueArgs} args - Arguments to find a PriceRecord
     * @example
     * // Get one PriceRecord
     * const priceRecord = await prisma.priceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceRecordFindUniqueArgs>(args: SelectSubset<T, PriceRecordFindUniqueArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceRecordFindUniqueOrThrowArgs} args - Arguments to find a PriceRecord
     * @example
     * // Get one PriceRecord
     * const priceRecord = await prisma.priceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordFindFirstArgs} args - Arguments to find a PriceRecord
     * @example
     * // Get one PriceRecord
     * const priceRecord = await prisma.priceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceRecordFindFirstArgs>(args?: SelectSubset<T, PriceRecordFindFirstArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordFindFirstOrThrowArgs} args - Arguments to find a PriceRecord
     * @example
     * // Get one PriceRecord
     * const priceRecord = await prisma.priceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceRecords
     * const priceRecords = await prisma.priceRecord.findMany()
     * 
     * // Get first 10 PriceRecords
     * const priceRecords = await prisma.priceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceRecordWithIdOnly = await prisma.priceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceRecordFindManyArgs>(args?: SelectSubset<T, PriceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceRecord.
     * @param {PriceRecordCreateArgs} args - Arguments to create a PriceRecord.
     * @example
     * // Create one PriceRecord
     * const PriceRecord = await prisma.priceRecord.create({
     *   data: {
     *     // ... data to create a PriceRecord
     *   }
     * })
     * 
     */
    create<T extends PriceRecordCreateArgs>(args: SelectSubset<T, PriceRecordCreateArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceRecords.
     * @param {PriceRecordCreateManyArgs} args - Arguments to create many PriceRecords.
     * @example
     * // Create many PriceRecords
     * const priceRecord = await prisma.priceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceRecordCreateManyArgs>(args?: SelectSubset<T, PriceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceRecords and returns the data saved in the database.
     * @param {PriceRecordCreateManyAndReturnArgs} args - Arguments to create many PriceRecords.
     * @example
     * // Create many PriceRecords
     * const priceRecord = await prisma.priceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceRecords and only return the `id`
     * const priceRecordWithIdOnly = await prisma.priceRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceRecord.
     * @param {PriceRecordDeleteArgs} args - Arguments to delete one PriceRecord.
     * @example
     * // Delete one PriceRecord
     * const PriceRecord = await prisma.priceRecord.delete({
     *   where: {
     *     // ... filter to delete one PriceRecord
     *   }
     * })
     * 
     */
    delete<T extends PriceRecordDeleteArgs>(args: SelectSubset<T, PriceRecordDeleteArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceRecord.
     * @param {PriceRecordUpdateArgs} args - Arguments to update one PriceRecord.
     * @example
     * // Update one PriceRecord
     * const priceRecord = await prisma.priceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceRecordUpdateArgs>(args: SelectSubset<T, PriceRecordUpdateArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceRecords.
     * @param {PriceRecordDeleteManyArgs} args - Arguments to filter PriceRecords to delete.
     * @example
     * // Delete a few PriceRecords
     * const { count } = await prisma.priceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceRecordDeleteManyArgs>(args?: SelectSubset<T, PriceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceRecords
     * const priceRecord = await prisma.priceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceRecordUpdateManyArgs>(args: SelectSubset<T, PriceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceRecords and returns the data updated in the database.
     * @param {PriceRecordUpdateManyAndReturnArgs} args - Arguments to update many PriceRecords.
     * @example
     * // Update many PriceRecords
     * const priceRecord = await prisma.priceRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceRecords and only return the `id`
     * const priceRecordWithIdOnly = await prisma.priceRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceRecord.
     * @param {PriceRecordUpsertArgs} args - Arguments to update or create a PriceRecord.
     * @example
     * // Update or create a PriceRecord
     * const priceRecord = await prisma.priceRecord.upsert({
     *   create: {
     *     // ... data to create a PriceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceRecord we want to update
     *   }
     * })
     */
    upsert<T extends PriceRecordUpsertArgs>(args: SelectSubset<T, PriceRecordUpsertArgs<ExtArgs>>): Prisma__PriceRecordClient<$Result.GetResult<Prisma.$PriceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordCountArgs} args - Arguments to filter PriceRecords to count.
     * @example
     * // Count the number of PriceRecords
     * const count = await prisma.priceRecord.count({
     *   where: {
     *     // ... the filter for the PriceRecords we want to count
     *   }
     * })
    **/
    count<T extends PriceRecordCountArgs>(
      args?: Subset<T, PriceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceRecordAggregateArgs>(args: Subset<T, PriceRecordAggregateArgs>): Prisma.PrismaPromise<GetPriceRecordAggregateType<T>>

    /**
     * Group by PriceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRecordGroupByArgs} args - Group by arguments.
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
      T extends PriceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceRecordGroupByArgs['orderBy'] }
        : { orderBy?: PriceRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceRecord model
   */
  readonly fields: PriceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PriceRecord model
   */
  interface PriceRecordFieldRefs {
    readonly id: FieldRef<"PriceRecord", 'String'>
    readonly commodity: FieldRef<"PriceRecord", 'String'>
    readonly market: FieldRef<"PriceRecord", 'String'>
    readonly state: FieldRef<"PriceRecord", 'String'>
    readonly minPrice: FieldRef<"PriceRecord", 'Float'>
    readonly maxPrice: FieldRef<"PriceRecord", 'Float'>
    readonly modalPrice: FieldRef<"PriceRecord", 'Float'>
    readonly date: FieldRef<"PriceRecord", 'DateTime'>
    readonly createdAt: FieldRef<"PriceRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceRecord findUnique
   */
  export type PriceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * Filter, which PriceRecord to fetch.
     */
    where: PriceRecordWhereUniqueInput
  }

  /**
   * PriceRecord findUniqueOrThrow
   */
  export type PriceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * Filter, which PriceRecord to fetch.
     */
    where: PriceRecordWhereUniqueInput
  }

  /**
   * PriceRecord findFirst
   */
  export type PriceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * Filter, which PriceRecord to fetch.
     */
    where?: PriceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRecords to fetch.
     */
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceRecords.
     */
    cursor?: PriceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRecords.
     */
    distinct?: PriceRecordScalarFieldEnum | PriceRecordScalarFieldEnum[]
  }

  /**
   * PriceRecord findFirstOrThrow
   */
  export type PriceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * Filter, which PriceRecord to fetch.
     */
    where?: PriceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRecords to fetch.
     */
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceRecords.
     */
    cursor?: PriceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRecords.
     */
    distinct?: PriceRecordScalarFieldEnum | PriceRecordScalarFieldEnum[]
  }

  /**
   * PriceRecord findMany
   */
  export type PriceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * Filter, which PriceRecords to fetch.
     */
    where?: PriceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRecords to fetch.
     */
    orderBy?: PriceRecordOrderByWithRelationInput | PriceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceRecords.
     */
    cursor?: PriceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRecords.
     */
    distinct?: PriceRecordScalarFieldEnum | PriceRecordScalarFieldEnum[]
  }

  /**
   * PriceRecord create
   */
  export type PriceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a PriceRecord.
     */
    data: XOR<PriceRecordCreateInput, PriceRecordUncheckedCreateInput>
  }

  /**
   * PriceRecord createMany
   */
  export type PriceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceRecords.
     */
    data: PriceRecordCreateManyInput | PriceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceRecord createManyAndReturn
   */
  export type PriceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PriceRecords.
     */
    data: PriceRecordCreateManyInput | PriceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceRecord update
   */
  export type PriceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a PriceRecord.
     */
    data: XOR<PriceRecordUpdateInput, PriceRecordUncheckedUpdateInput>
    /**
     * Choose, which PriceRecord to update.
     */
    where: PriceRecordWhereUniqueInput
  }

  /**
   * PriceRecord updateMany
   */
  export type PriceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceRecords.
     */
    data: XOR<PriceRecordUpdateManyMutationInput, PriceRecordUncheckedUpdateManyInput>
    /**
     * Filter which PriceRecords to update
     */
    where?: PriceRecordWhereInput
    /**
     * Limit how many PriceRecords to update.
     */
    limit?: number
  }

  /**
   * PriceRecord updateManyAndReturn
   */
  export type PriceRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * The data used to update PriceRecords.
     */
    data: XOR<PriceRecordUpdateManyMutationInput, PriceRecordUncheckedUpdateManyInput>
    /**
     * Filter which PriceRecords to update
     */
    where?: PriceRecordWhereInput
    /**
     * Limit how many PriceRecords to update.
     */
    limit?: number
  }

  /**
   * PriceRecord upsert
   */
  export type PriceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the PriceRecord to update in case it exists.
     */
    where: PriceRecordWhereUniqueInput
    /**
     * In case the PriceRecord found by the `where` argument doesn't exist, create a new PriceRecord with this data.
     */
    create: XOR<PriceRecordCreateInput, PriceRecordUncheckedCreateInput>
    /**
     * In case the PriceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceRecordUpdateInput, PriceRecordUncheckedUpdateInput>
  }

  /**
   * PriceRecord delete
   */
  export type PriceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
    /**
     * Filter which PriceRecord to delete.
     */
    where: PriceRecordWhereUniqueInput
  }

  /**
   * PriceRecord deleteMany
   */
  export type PriceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRecords to delete
     */
    where?: PriceRecordWhereInput
    /**
     * Limit how many PriceRecords to delete.
     */
    limit?: number
  }

  /**
   * PriceRecord without action
   */
  export type PriceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRecord
     */
    select?: PriceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRecord
     */
    omit?: PriceRecordOmit<ExtArgs> | null
  }


  /**
   * Model StorageListing
   */

  export type AggregateStorageListing = {
    _count: StorageListingCountAggregateOutputType | null
    _avg: StorageListingAvgAggregateOutputType | null
    _sum: StorageListingSumAggregateOutputType | null
    _min: StorageListingMinAggregateOutputType | null
    _max: StorageListingMaxAggregateOutputType | null
  }

  export type StorageListingAvgAggregateOutputType = {
    capacity: number | null
    pricePerWeek: number | null
  }

  export type StorageListingSumAggregateOutputType = {
    capacity: number | null
    pricePerWeek: number | null
  }

  export type StorageListingMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    location: string | null
    capacity: number | null
    pricePerWeek: number | null
    cropSuitability: string | null
    isAvailable: boolean | null
    createdAt: Date | null
  }

  export type StorageListingMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    location: string | null
    capacity: number | null
    pricePerWeek: number | null
    cropSuitability: string | null
    isAvailable: boolean | null
    createdAt: Date | null
  }

  export type StorageListingCountAggregateOutputType = {
    id: number
    ownerId: number
    location: number
    capacity: number
    pricePerWeek: number
    cropSuitability: number
    isAvailable: number
    createdAt: number
    _all: number
  }


  export type StorageListingAvgAggregateInputType = {
    capacity?: true
    pricePerWeek?: true
  }

  export type StorageListingSumAggregateInputType = {
    capacity?: true
    pricePerWeek?: true
  }

  export type StorageListingMinAggregateInputType = {
    id?: true
    ownerId?: true
    location?: true
    capacity?: true
    pricePerWeek?: true
    cropSuitability?: true
    isAvailable?: true
    createdAt?: true
  }

  export type StorageListingMaxAggregateInputType = {
    id?: true
    ownerId?: true
    location?: true
    capacity?: true
    pricePerWeek?: true
    cropSuitability?: true
    isAvailable?: true
    createdAt?: true
  }

  export type StorageListingCountAggregateInputType = {
    id?: true
    ownerId?: true
    location?: true
    capacity?: true
    pricePerWeek?: true
    cropSuitability?: true
    isAvailable?: true
    createdAt?: true
    _all?: true
  }

  export type StorageListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageListing to aggregate.
     */
    where?: StorageListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageListings to fetch.
     */
    orderBy?: StorageListingOrderByWithRelationInput | StorageListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorageListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorageListings
    **/
    _count?: true | StorageListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorageListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorageListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorageListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorageListingMaxAggregateInputType
  }

  export type GetStorageListingAggregateType<T extends StorageListingAggregateArgs> = {
        [P in keyof T & keyof AggregateStorageListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorageListing[P]>
      : GetScalarType<T[P], AggregateStorageListing[P]>
  }




  export type StorageListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageListingWhereInput
    orderBy?: StorageListingOrderByWithAggregationInput | StorageListingOrderByWithAggregationInput[]
    by: StorageListingScalarFieldEnum[] | StorageListingScalarFieldEnum
    having?: StorageListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorageListingCountAggregateInputType | true
    _avg?: StorageListingAvgAggregateInputType
    _sum?: StorageListingSumAggregateInputType
    _min?: StorageListingMinAggregateInputType
    _max?: StorageListingMaxAggregateInputType
  }

  export type StorageListingGroupByOutputType = {
    id: string
    ownerId: string
    location: string
    capacity: number
    pricePerWeek: number
    cropSuitability: string
    isAvailable: boolean
    createdAt: Date
    _count: StorageListingCountAggregateOutputType | null
    _avg: StorageListingAvgAggregateOutputType | null
    _sum: StorageListingSumAggregateOutputType | null
    _min: StorageListingMinAggregateOutputType | null
    _max: StorageListingMaxAggregateOutputType | null
  }

  type GetStorageListingGroupByPayload<T extends StorageListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorageListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorageListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorageListingGroupByOutputType[P]>
            : GetScalarType<T[P], StorageListingGroupByOutputType[P]>
        }
      >
    >


  export type StorageListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    location?: boolean
    capacity?: boolean
    pricePerWeek?: boolean
    cropSuitability?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageListing"]>

  export type StorageListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    location?: boolean
    capacity?: boolean
    pricePerWeek?: boolean
    cropSuitability?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageListing"]>

  export type StorageListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    location?: boolean
    capacity?: boolean
    pricePerWeek?: boolean
    cropSuitability?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageListing"]>

  export type StorageListingSelectScalar = {
    id?: boolean
    ownerId?: boolean
    location?: boolean
    capacity?: boolean
    pricePerWeek?: boolean
    cropSuitability?: boolean
    isAvailable?: boolean
    createdAt?: boolean
  }

  export type StorageListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "location" | "capacity" | "pricePerWeek" | "cropSuitability" | "isAvailable" | "createdAt", ExtArgs["result"]["storageListing"]>
  export type StorageListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StorageListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StorageListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StorageListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorageListing"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      location: string
      capacity: number
      pricePerWeek: number
      cropSuitability: string
      isAvailable: boolean
      createdAt: Date
    }, ExtArgs["result"]["storageListing"]>
    composites: {}
  }

  type StorageListingGetPayload<S extends boolean | null | undefined | StorageListingDefaultArgs> = $Result.GetResult<Prisma.$StorageListingPayload, S>

  type StorageListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StorageListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorageListingCountAggregateInputType | true
    }

  export interface StorageListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorageListing'], meta: { name: 'StorageListing' } }
    /**
     * Find zero or one StorageListing that matches the filter.
     * @param {StorageListingFindUniqueArgs} args - Arguments to find a StorageListing
     * @example
     * // Get one StorageListing
     * const storageListing = await prisma.storageListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorageListingFindUniqueArgs>(args: SelectSubset<T, StorageListingFindUniqueArgs<ExtArgs>>): Prisma__StorageListingClient<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StorageListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StorageListingFindUniqueOrThrowArgs} args - Arguments to find a StorageListing
     * @example
     * // Get one StorageListing
     * const storageListing = await prisma.storageListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorageListingFindUniqueOrThrowArgs>(args: SelectSubset<T, StorageListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorageListingClient<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorageListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageListingFindFirstArgs} args - Arguments to find a StorageListing
     * @example
     * // Get one StorageListing
     * const storageListing = await prisma.storageListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorageListingFindFirstArgs>(args?: SelectSubset<T, StorageListingFindFirstArgs<ExtArgs>>): Prisma__StorageListingClient<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorageListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageListingFindFirstOrThrowArgs} args - Arguments to find a StorageListing
     * @example
     * // Get one StorageListing
     * const storageListing = await prisma.storageListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorageListingFindFirstOrThrowArgs>(args?: SelectSubset<T, StorageListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorageListingClient<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StorageListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorageListings
     * const storageListings = await prisma.storageListing.findMany()
     * 
     * // Get first 10 StorageListings
     * const storageListings = await prisma.storageListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storageListingWithIdOnly = await prisma.storageListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StorageListingFindManyArgs>(args?: SelectSubset<T, StorageListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StorageListing.
     * @param {StorageListingCreateArgs} args - Arguments to create a StorageListing.
     * @example
     * // Create one StorageListing
     * const StorageListing = await prisma.storageListing.create({
     *   data: {
     *     // ... data to create a StorageListing
     *   }
     * })
     * 
     */
    create<T extends StorageListingCreateArgs>(args: SelectSubset<T, StorageListingCreateArgs<ExtArgs>>): Prisma__StorageListingClient<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StorageListings.
     * @param {StorageListingCreateManyArgs} args - Arguments to create many StorageListings.
     * @example
     * // Create many StorageListings
     * const storageListing = await prisma.storageListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorageListingCreateManyArgs>(args?: SelectSubset<T, StorageListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StorageListings and returns the data saved in the database.
     * @param {StorageListingCreateManyAndReturnArgs} args - Arguments to create many StorageListings.
     * @example
     * // Create many StorageListings
     * const storageListing = await prisma.storageListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StorageListings and only return the `id`
     * const storageListingWithIdOnly = await prisma.storageListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StorageListingCreateManyAndReturnArgs>(args?: SelectSubset<T, StorageListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StorageListing.
     * @param {StorageListingDeleteArgs} args - Arguments to delete one StorageListing.
     * @example
     * // Delete one StorageListing
     * const StorageListing = await prisma.storageListing.delete({
     *   where: {
     *     // ... filter to delete one StorageListing
     *   }
     * })
     * 
     */
    delete<T extends StorageListingDeleteArgs>(args: SelectSubset<T, StorageListingDeleteArgs<ExtArgs>>): Prisma__StorageListingClient<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StorageListing.
     * @param {StorageListingUpdateArgs} args - Arguments to update one StorageListing.
     * @example
     * // Update one StorageListing
     * const storageListing = await prisma.storageListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorageListingUpdateArgs>(args: SelectSubset<T, StorageListingUpdateArgs<ExtArgs>>): Prisma__StorageListingClient<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StorageListings.
     * @param {StorageListingDeleteManyArgs} args - Arguments to filter StorageListings to delete.
     * @example
     * // Delete a few StorageListings
     * const { count } = await prisma.storageListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorageListingDeleteManyArgs>(args?: SelectSubset<T, StorageListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorageListings
     * const storageListing = await prisma.storageListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorageListingUpdateManyArgs>(args: SelectSubset<T, StorageListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageListings and returns the data updated in the database.
     * @param {StorageListingUpdateManyAndReturnArgs} args - Arguments to update many StorageListings.
     * @example
     * // Update many StorageListings
     * const storageListing = await prisma.storageListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StorageListings and only return the `id`
     * const storageListingWithIdOnly = await prisma.storageListing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StorageListingUpdateManyAndReturnArgs>(args: SelectSubset<T, StorageListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StorageListing.
     * @param {StorageListingUpsertArgs} args - Arguments to update or create a StorageListing.
     * @example
     * // Update or create a StorageListing
     * const storageListing = await prisma.storageListing.upsert({
     *   create: {
     *     // ... data to create a StorageListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorageListing we want to update
     *   }
     * })
     */
    upsert<T extends StorageListingUpsertArgs>(args: SelectSubset<T, StorageListingUpsertArgs<ExtArgs>>): Prisma__StorageListingClient<$Result.GetResult<Prisma.$StorageListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StorageListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageListingCountArgs} args - Arguments to filter StorageListings to count.
     * @example
     * // Count the number of StorageListings
     * const count = await prisma.storageListing.count({
     *   where: {
     *     // ... the filter for the StorageListings we want to count
     *   }
     * })
    **/
    count<T extends StorageListingCountArgs>(
      args?: Subset<T, StorageListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorageListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorageListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorageListingAggregateArgs>(args: Subset<T, StorageListingAggregateArgs>): Prisma.PrismaPromise<GetStorageListingAggregateType<T>>

    /**
     * Group by StorageListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageListingGroupByArgs} args - Group by arguments.
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
      T extends StorageListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorageListingGroupByArgs['orderBy'] }
        : { orderBy?: StorageListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorageListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorageListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorageListing model
   */
  readonly fields: StorageListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorageListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorageListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StorageListing model
   */
  interface StorageListingFieldRefs {
    readonly id: FieldRef<"StorageListing", 'String'>
    readonly ownerId: FieldRef<"StorageListing", 'String'>
    readonly location: FieldRef<"StorageListing", 'String'>
    readonly capacity: FieldRef<"StorageListing", 'Float'>
    readonly pricePerWeek: FieldRef<"StorageListing", 'Float'>
    readonly cropSuitability: FieldRef<"StorageListing", 'String'>
    readonly isAvailable: FieldRef<"StorageListing", 'Boolean'>
    readonly createdAt: FieldRef<"StorageListing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StorageListing findUnique
   */
  export type StorageListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * Filter, which StorageListing to fetch.
     */
    where: StorageListingWhereUniqueInput
  }

  /**
   * StorageListing findUniqueOrThrow
   */
  export type StorageListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * Filter, which StorageListing to fetch.
     */
    where: StorageListingWhereUniqueInput
  }

  /**
   * StorageListing findFirst
   */
  export type StorageListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * Filter, which StorageListing to fetch.
     */
    where?: StorageListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageListings to fetch.
     */
    orderBy?: StorageListingOrderByWithRelationInput | StorageListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageListings.
     */
    cursor?: StorageListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageListings.
     */
    distinct?: StorageListingScalarFieldEnum | StorageListingScalarFieldEnum[]
  }

  /**
   * StorageListing findFirstOrThrow
   */
  export type StorageListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * Filter, which StorageListing to fetch.
     */
    where?: StorageListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageListings to fetch.
     */
    orderBy?: StorageListingOrderByWithRelationInput | StorageListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageListings.
     */
    cursor?: StorageListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageListings.
     */
    distinct?: StorageListingScalarFieldEnum | StorageListingScalarFieldEnum[]
  }

  /**
   * StorageListing findMany
   */
  export type StorageListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * Filter, which StorageListings to fetch.
     */
    where?: StorageListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageListings to fetch.
     */
    orderBy?: StorageListingOrderByWithRelationInput | StorageListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorageListings.
     */
    cursor?: StorageListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageListings.
     */
    distinct?: StorageListingScalarFieldEnum | StorageListingScalarFieldEnum[]
  }

  /**
   * StorageListing create
   */
  export type StorageListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * The data needed to create a StorageListing.
     */
    data: XOR<StorageListingCreateInput, StorageListingUncheckedCreateInput>
  }

  /**
   * StorageListing createMany
   */
  export type StorageListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorageListings.
     */
    data: StorageListingCreateManyInput | StorageListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorageListing createManyAndReturn
   */
  export type StorageListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * The data used to create many StorageListings.
     */
    data: StorageListingCreateManyInput | StorageListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorageListing update
   */
  export type StorageListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * The data needed to update a StorageListing.
     */
    data: XOR<StorageListingUpdateInput, StorageListingUncheckedUpdateInput>
    /**
     * Choose, which StorageListing to update.
     */
    where: StorageListingWhereUniqueInput
  }

  /**
   * StorageListing updateMany
   */
  export type StorageListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorageListings.
     */
    data: XOR<StorageListingUpdateManyMutationInput, StorageListingUncheckedUpdateManyInput>
    /**
     * Filter which StorageListings to update
     */
    where?: StorageListingWhereInput
    /**
     * Limit how many StorageListings to update.
     */
    limit?: number
  }

  /**
   * StorageListing updateManyAndReturn
   */
  export type StorageListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * The data used to update StorageListings.
     */
    data: XOR<StorageListingUpdateManyMutationInput, StorageListingUncheckedUpdateManyInput>
    /**
     * Filter which StorageListings to update
     */
    where?: StorageListingWhereInput
    /**
     * Limit how many StorageListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorageListing upsert
   */
  export type StorageListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * The filter to search for the StorageListing to update in case it exists.
     */
    where: StorageListingWhereUniqueInput
    /**
     * In case the StorageListing found by the `where` argument doesn't exist, create a new StorageListing with this data.
     */
    create: XOR<StorageListingCreateInput, StorageListingUncheckedCreateInput>
    /**
     * In case the StorageListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorageListingUpdateInput, StorageListingUncheckedUpdateInput>
  }

  /**
   * StorageListing delete
   */
  export type StorageListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
    /**
     * Filter which StorageListing to delete.
     */
    where: StorageListingWhereUniqueInput
  }

  /**
   * StorageListing deleteMany
   */
  export type StorageListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageListings to delete
     */
    where?: StorageListingWhereInput
    /**
     * Limit how many StorageListings to delete.
     */
    limit?: number
  }

  /**
   * StorageListing without action
   */
  export type StorageListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageListing
     */
    select?: StorageListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageListing
     */
    omit?: StorageListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageListingInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CropsScalarFieldEnum: {
    id: 'id',
    farmerId: 'farmerId',
    name: 'name',
    quantity: 'quantity',
    qualityGrade: 'qualityGrade',
    price: 'price',
    location: 'location',
    photoUrl: 'photoUrl',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CropsScalarFieldEnum = (typeof CropsScalarFieldEnum)[keyof typeof CropsScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    cropId: 'cropId',
    buyerId: 'buyerId',
    offerPrice: 'offerPrice',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    offerId: 'offerId',
    status: 'status',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PriceRecordScalarFieldEnum: {
    id: 'id',
    commodity: 'commodity',
    market: 'market',
    state: 'state',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    modalPrice: 'modalPrice',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type PriceRecordScalarFieldEnum = (typeof PriceRecordScalarFieldEnum)[keyof typeof PriceRecordScalarFieldEnum]


  export const StorageListingScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    location: 'location',
    capacity: 'capacity',
    pricePerWeek: 'pricePerWeek',
    cropSuitability: 'cropSuitability',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt'
  };

  export type StorageListingScalarFieldEnum = (typeof StorageListingScalarFieldEnum)[keyof typeof StorageListingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    location?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    crops?: CropsListRelationFilter
    offers?: OfferListRelationFilter
    storageListings?: StorageListingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    crops?: CropsOrderByRelationAggregateInput
    offers?: OfferOrderByRelationAggregateInput
    storageListings?: StorageListingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    location?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    crops?: CropsListRelationFilter
    offers?: OfferListRelationFilter
    storageListings?: StorageListingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    location?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CropsWhereInput = {
    AND?: CropsWhereInput | CropsWhereInput[]
    OR?: CropsWhereInput[]
    NOT?: CropsWhereInput | CropsWhereInput[]
    id?: StringFilter<"Crops"> | string
    farmerId?: StringFilter<"Crops"> | string
    name?: StringFilter<"Crops"> | string
    quantity?: FloatFilter<"Crops"> | number
    qualityGrade?: StringFilter<"Crops"> | string
    price?: FloatFilter<"Crops"> | number
    location?: StringFilter<"Crops"> | string
    photoUrl?: StringNullableFilter<"Crops"> | string | null
    status?: StringFilter<"Crops"> | string
    createdAt?: DateTimeFilter<"Crops"> | Date | string
    farmer?: XOR<UserScalarRelationFilter, UserWhereInput>
    offers?: OfferListRelationFilter
  }

  export type CropsOrderByWithRelationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    qualityGrade?: SortOrder
    price?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    farmer?: UserOrderByWithRelationInput
    offers?: OfferOrderByRelationAggregateInput
  }

  export type CropsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CropsWhereInput | CropsWhereInput[]
    OR?: CropsWhereInput[]
    NOT?: CropsWhereInput | CropsWhereInput[]
    farmerId?: StringFilter<"Crops"> | string
    name?: StringFilter<"Crops"> | string
    quantity?: FloatFilter<"Crops"> | number
    qualityGrade?: StringFilter<"Crops"> | string
    price?: FloatFilter<"Crops"> | number
    location?: StringFilter<"Crops"> | string
    photoUrl?: StringNullableFilter<"Crops"> | string | null
    status?: StringFilter<"Crops"> | string
    createdAt?: DateTimeFilter<"Crops"> | Date | string
    farmer?: XOR<UserScalarRelationFilter, UserWhereInput>
    offers?: OfferListRelationFilter
  }, "id">

  export type CropsOrderByWithAggregationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    qualityGrade?: SortOrder
    price?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CropsCountOrderByAggregateInput
    _avg?: CropsAvgOrderByAggregateInput
    _max?: CropsMaxOrderByAggregateInput
    _min?: CropsMinOrderByAggregateInput
    _sum?: CropsSumOrderByAggregateInput
  }

  export type CropsScalarWhereWithAggregatesInput = {
    AND?: CropsScalarWhereWithAggregatesInput | CropsScalarWhereWithAggregatesInput[]
    OR?: CropsScalarWhereWithAggregatesInput[]
    NOT?: CropsScalarWhereWithAggregatesInput | CropsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Crops"> | string
    farmerId?: StringWithAggregatesFilter<"Crops"> | string
    name?: StringWithAggregatesFilter<"Crops"> | string
    quantity?: FloatWithAggregatesFilter<"Crops"> | number
    qualityGrade?: StringWithAggregatesFilter<"Crops"> | string
    price?: FloatWithAggregatesFilter<"Crops"> | number
    location?: StringWithAggregatesFilter<"Crops"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"Crops"> | string | null
    status?: StringWithAggregatesFilter<"Crops"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Crops"> | Date | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    cropId?: StringFilter<"Offer"> | string
    buyerId?: StringFilter<"Offer"> | string
    offerPrice?: FloatFilter<"Offer"> | number
    status?: StringFilter<"Offer"> | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    crop?: XOR<CropsScalarRelationFilter, CropsWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    cropId?: SortOrder
    buyerId?: SortOrder
    offerPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    crop?: CropsOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    cropId?: StringFilter<"Offer"> | string
    buyerId?: StringFilter<"Offer"> | string
    offerPrice?: FloatFilter<"Offer"> | number
    status?: StringFilter<"Offer"> | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    crop?: XOR<CropsScalarRelationFilter, CropsWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    cropId?: SortOrder
    buyerId?: SortOrder
    offerPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    cropId?: StringWithAggregatesFilter<"Offer"> | string
    buyerId?: StringWithAggregatesFilter<"Offer"> | string
    offerPrice?: FloatWithAggregatesFilter<"Offer"> | number
    status?: StringWithAggregatesFilter<"Offer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    offerId?: StringFilter<"Transaction"> | string
    status?: StringFilter<"Transaction"> | string
    paymentStatus?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    offer?: OfferOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    offerId?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    status?: StringFilter<"Transaction"> | string
    paymentStatus?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
  }, "id" | "offerId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    offerId?: StringWithAggregatesFilter<"Transaction"> | string
    status?: StringWithAggregatesFilter<"Transaction"> | string
    paymentStatus?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PriceRecordWhereInput = {
    AND?: PriceRecordWhereInput | PriceRecordWhereInput[]
    OR?: PriceRecordWhereInput[]
    NOT?: PriceRecordWhereInput | PriceRecordWhereInput[]
    id?: StringFilter<"PriceRecord"> | string
    commodity?: StringFilter<"PriceRecord"> | string
    market?: StringFilter<"PriceRecord"> | string
    state?: StringFilter<"PriceRecord"> | string
    minPrice?: FloatFilter<"PriceRecord"> | number
    maxPrice?: FloatFilter<"PriceRecord"> | number
    modalPrice?: FloatFilter<"PriceRecord"> | number
    date?: DateTimeFilter<"PriceRecord"> | Date | string
    createdAt?: DateTimeFilter<"PriceRecord"> | Date | string
  }

  export type PriceRecordOrderByWithRelationInput = {
    id?: SortOrder
    commodity?: SortOrder
    market?: SortOrder
    state?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    modalPrice?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceRecordWhereInput | PriceRecordWhereInput[]
    OR?: PriceRecordWhereInput[]
    NOT?: PriceRecordWhereInput | PriceRecordWhereInput[]
    commodity?: StringFilter<"PriceRecord"> | string
    market?: StringFilter<"PriceRecord"> | string
    state?: StringFilter<"PriceRecord"> | string
    minPrice?: FloatFilter<"PriceRecord"> | number
    maxPrice?: FloatFilter<"PriceRecord"> | number
    modalPrice?: FloatFilter<"PriceRecord"> | number
    date?: DateTimeFilter<"PriceRecord"> | Date | string
    createdAt?: DateTimeFilter<"PriceRecord"> | Date | string
  }, "id">

  export type PriceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    commodity?: SortOrder
    market?: SortOrder
    state?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    modalPrice?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: PriceRecordCountOrderByAggregateInput
    _avg?: PriceRecordAvgOrderByAggregateInput
    _max?: PriceRecordMaxOrderByAggregateInput
    _min?: PriceRecordMinOrderByAggregateInput
    _sum?: PriceRecordSumOrderByAggregateInput
  }

  export type PriceRecordScalarWhereWithAggregatesInput = {
    AND?: PriceRecordScalarWhereWithAggregatesInput | PriceRecordScalarWhereWithAggregatesInput[]
    OR?: PriceRecordScalarWhereWithAggregatesInput[]
    NOT?: PriceRecordScalarWhereWithAggregatesInput | PriceRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceRecord"> | string
    commodity?: StringWithAggregatesFilter<"PriceRecord"> | string
    market?: StringWithAggregatesFilter<"PriceRecord"> | string
    state?: StringWithAggregatesFilter<"PriceRecord"> | string
    minPrice?: FloatWithAggregatesFilter<"PriceRecord"> | number
    maxPrice?: FloatWithAggregatesFilter<"PriceRecord"> | number
    modalPrice?: FloatWithAggregatesFilter<"PriceRecord"> | number
    date?: DateTimeWithAggregatesFilter<"PriceRecord"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PriceRecord"> | Date | string
  }

  export type StorageListingWhereInput = {
    AND?: StorageListingWhereInput | StorageListingWhereInput[]
    OR?: StorageListingWhereInput[]
    NOT?: StorageListingWhereInput | StorageListingWhereInput[]
    id?: StringFilter<"StorageListing"> | string
    ownerId?: StringFilter<"StorageListing"> | string
    location?: StringFilter<"StorageListing"> | string
    capacity?: FloatFilter<"StorageListing"> | number
    pricePerWeek?: FloatFilter<"StorageListing"> | number
    cropSuitability?: StringFilter<"StorageListing"> | string
    isAvailable?: BoolFilter<"StorageListing"> | boolean
    createdAt?: DateTimeFilter<"StorageListing"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StorageListingOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    pricePerWeek?: SortOrder
    cropSuitability?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type StorageListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StorageListingWhereInput | StorageListingWhereInput[]
    OR?: StorageListingWhereInput[]
    NOT?: StorageListingWhereInput | StorageListingWhereInput[]
    ownerId?: StringFilter<"StorageListing"> | string
    location?: StringFilter<"StorageListing"> | string
    capacity?: FloatFilter<"StorageListing"> | number
    pricePerWeek?: FloatFilter<"StorageListing"> | number
    cropSuitability?: StringFilter<"StorageListing"> | string
    isAvailable?: BoolFilter<"StorageListing"> | boolean
    createdAt?: DateTimeFilter<"StorageListing"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StorageListingOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    pricePerWeek?: SortOrder
    cropSuitability?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    _count?: StorageListingCountOrderByAggregateInput
    _avg?: StorageListingAvgOrderByAggregateInput
    _max?: StorageListingMaxOrderByAggregateInput
    _min?: StorageListingMinOrderByAggregateInput
    _sum?: StorageListingSumOrderByAggregateInput
  }

  export type StorageListingScalarWhereWithAggregatesInput = {
    AND?: StorageListingScalarWhereWithAggregatesInput | StorageListingScalarWhereWithAggregatesInput[]
    OR?: StorageListingScalarWhereWithAggregatesInput[]
    NOT?: StorageListingScalarWhereWithAggregatesInput | StorageListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StorageListing"> | string
    ownerId?: StringWithAggregatesFilter<"StorageListing"> | string
    location?: StringWithAggregatesFilter<"StorageListing"> | string
    capacity?: FloatWithAggregatesFilter<"StorageListing"> | number
    pricePerWeek?: FloatWithAggregatesFilter<"StorageListing"> | number
    cropSuitability?: StringWithAggregatesFilter<"StorageListing"> | string
    isAvailable?: BoolWithAggregatesFilter<"StorageListing"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StorageListing"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
    crops?: CropsCreateNestedManyWithoutFarmerInput
    offers?: OfferCreateNestedManyWithoutBuyerInput
    storageListings?: StorageListingCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
    crops?: CropsUncheckedCreateNestedManyWithoutFarmerInput
    offers?: OfferUncheckedCreateNestedManyWithoutBuyerInput
    storageListings?: StorageListingUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropsUpdateManyWithoutFarmerNestedInput
    offers?: OfferUpdateManyWithoutBuyerNestedInput
    storageListings?: StorageListingUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropsUncheckedUpdateManyWithoutFarmerNestedInput
    offers?: OfferUncheckedUpdateManyWithoutBuyerNestedInput
    storageListings?: StorageListingUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropsCreateInput = {
    id?: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl?: string | null
    status?: string
    createdAt?: Date | string
    farmer: UserCreateNestedOneWithoutCropsInput
    offers?: OfferCreateNestedManyWithoutCropInput
  }

  export type CropsUncheckedCreateInput = {
    id?: string
    farmerId: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl?: string | null
    status?: string
    createdAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutCropInput
  }

  export type CropsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutCropsNestedInput
    offers?: OfferUpdateManyWithoutCropNestedInput
  }

  export type CropsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutCropNestedInput
  }

  export type CropsCreateManyInput = {
    id?: string
    farmerId: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type CropsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateInput = {
    id?: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
    crop: CropsCreateNestedOneWithoutOffersInput
    buyer: UserCreateNestedOneWithoutOffersInput
    transaction?: TransactionCreateNestedOneWithoutOfferInput
  }

  export type OfferUncheckedCreateInput = {
    id?: string
    cropId: string
    buyerId: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedOneWithoutOfferInput
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crop?: CropsUpdateOneRequiredWithoutOffersNestedInput
    buyer?: UserUpdateOneRequiredWithoutOffersNestedInput
    transaction?: TransactionUpdateOneWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateOneWithoutOfferNestedInput
  }

  export type OfferCreateManyInput = {
    id?: string
    cropId: string
    buyerId: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
    offer: OfferCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    offerId: string
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offer?: OfferUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    offerId: string
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceRecordCreateInput = {
    id?: string
    commodity: string
    market: string
    state: string
    minPrice: number
    maxPrice: number
    modalPrice: number
    date: Date | string
    createdAt?: Date | string
  }

  export type PriceRecordUncheckedCreateInput = {
    id?: string
    commodity: string
    market: string
    state: string
    minPrice: number
    maxPrice: number
    modalPrice: number
    date: Date | string
    createdAt?: Date | string
  }

  export type PriceRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    minPrice?: FloatFieldUpdateOperationsInput | number
    maxPrice?: FloatFieldUpdateOperationsInput | number
    modalPrice?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    minPrice?: FloatFieldUpdateOperationsInput | number
    maxPrice?: FloatFieldUpdateOperationsInput | number
    modalPrice?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceRecordCreateManyInput = {
    id?: string
    commodity: string
    market: string
    state: string
    minPrice: number
    maxPrice: number
    modalPrice: number
    date: Date | string
    createdAt?: Date | string
  }

  export type PriceRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    minPrice?: FloatFieldUpdateOperationsInput | number
    maxPrice?: FloatFieldUpdateOperationsInput | number
    modalPrice?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodity?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    minPrice?: FloatFieldUpdateOperationsInput | number
    maxPrice?: FloatFieldUpdateOperationsInput | number
    modalPrice?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageListingCreateInput = {
    id?: string
    location: string
    capacity: number
    pricePerWeek: number
    cropSuitability: string
    isAvailable?: boolean
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutStorageListingsInput
  }

  export type StorageListingUncheckedCreateInput = {
    id?: string
    ownerId: string
    location: string
    capacity: number
    pricePerWeek: number
    cropSuitability: string
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type StorageListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    pricePerWeek?: FloatFieldUpdateOperationsInput | number
    cropSuitability?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStorageListingsNestedInput
  }

  export type StorageListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    pricePerWeek?: FloatFieldUpdateOperationsInput | number
    cropSuitability?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageListingCreateManyInput = {
    id?: string
    ownerId: string
    location: string
    capacity: number
    pricePerWeek: number
    cropSuitability: string
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type StorageListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    pricePerWeek?: FloatFieldUpdateOperationsInput | number
    cropSuitability?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    pricePerWeek?: FloatFieldUpdateOperationsInput | number
    cropSuitability?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CropsListRelationFilter = {
    every?: CropsWhereInput
    some?: CropsWhereInput
    none?: CropsWhereInput
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type StorageListingListRelationFilter = {
    every?: StorageListingWhereInput
    some?: StorageListingWhereInput
    none?: StorageListingWhereInput
  }

  export type CropsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorageListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CropsCountOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    qualityGrade?: SortOrder
    price?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CropsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type CropsMaxOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    qualityGrade?: SortOrder
    price?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CropsMinOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    qualityGrade?: SortOrder
    price?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CropsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CropsScalarRelationFilter = {
    is?: CropsWhereInput
    isNot?: CropsWhereInput
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    cropId?: SortOrder
    buyerId?: SortOrder
    offerPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    offerPrice?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    cropId?: SortOrder
    buyerId?: SortOrder
    offerPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    cropId?: SortOrder
    buyerId?: SortOrder
    offerPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    offerPrice?: SortOrder
  }

  export type OfferScalarRelationFilter = {
    is?: OfferWhereInput
    isNot?: OfferWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    offerId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    commodity?: SortOrder
    market?: SortOrder
    state?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    modalPrice?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceRecordAvgOrderByAggregateInput = {
    minPrice?: SortOrder
    maxPrice?: SortOrder
    modalPrice?: SortOrder
  }

  export type PriceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    commodity?: SortOrder
    market?: SortOrder
    state?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    modalPrice?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    commodity?: SortOrder
    market?: SortOrder
    state?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    modalPrice?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceRecordSumOrderByAggregateInput = {
    minPrice?: SortOrder
    maxPrice?: SortOrder
    modalPrice?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StorageListingCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    pricePerWeek?: SortOrder
    cropSuitability?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageListingAvgOrderByAggregateInput = {
    capacity?: SortOrder
    pricePerWeek?: SortOrder
  }

  export type StorageListingMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    pricePerWeek?: SortOrder
    cropSuitability?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageListingMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    pricePerWeek?: SortOrder
    cropSuitability?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageListingSumOrderByAggregateInput = {
    capacity?: SortOrder
    pricePerWeek?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CropsCreateNestedManyWithoutFarmerInput = {
    create?: XOR<CropsCreateWithoutFarmerInput, CropsUncheckedCreateWithoutFarmerInput> | CropsCreateWithoutFarmerInput[] | CropsUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: CropsCreateOrConnectWithoutFarmerInput | CropsCreateOrConnectWithoutFarmerInput[]
    createMany?: CropsCreateManyFarmerInputEnvelope
    connect?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
  }

  export type OfferCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OfferCreateWithoutBuyerInput, OfferUncheckedCreateWithoutBuyerInput> | OfferCreateWithoutBuyerInput[] | OfferUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutBuyerInput | OfferCreateOrConnectWithoutBuyerInput[]
    createMany?: OfferCreateManyBuyerInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type StorageListingCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StorageListingCreateWithoutOwnerInput, StorageListingUncheckedCreateWithoutOwnerInput> | StorageListingCreateWithoutOwnerInput[] | StorageListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StorageListingCreateOrConnectWithoutOwnerInput | StorageListingCreateOrConnectWithoutOwnerInput[]
    createMany?: StorageListingCreateManyOwnerInputEnvelope
    connect?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
  }

  export type CropsUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<CropsCreateWithoutFarmerInput, CropsUncheckedCreateWithoutFarmerInput> | CropsCreateWithoutFarmerInput[] | CropsUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: CropsCreateOrConnectWithoutFarmerInput | CropsCreateOrConnectWithoutFarmerInput[]
    createMany?: CropsCreateManyFarmerInputEnvelope
    connect?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OfferCreateWithoutBuyerInput, OfferUncheckedCreateWithoutBuyerInput> | OfferCreateWithoutBuyerInput[] | OfferUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutBuyerInput | OfferCreateOrConnectWithoutBuyerInput[]
    createMany?: OfferCreateManyBuyerInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type StorageListingUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StorageListingCreateWithoutOwnerInput, StorageListingUncheckedCreateWithoutOwnerInput> | StorageListingCreateWithoutOwnerInput[] | StorageListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StorageListingCreateOrConnectWithoutOwnerInput | StorageListingCreateOrConnectWithoutOwnerInput[]
    createMany?: StorageListingCreateManyOwnerInputEnvelope
    connect?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CropsUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<CropsCreateWithoutFarmerInput, CropsUncheckedCreateWithoutFarmerInput> | CropsCreateWithoutFarmerInput[] | CropsUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: CropsCreateOrConnectWithoutFarmerInput | CropsCreateOrConnectWithoutFarmerInput[]
    upsert?: CropsUpsertWithWhereUniqueWithoutFarmerInput | CropsUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: CropsCreateManyFarmerInputEnvelope
    set?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
    disconnect?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
    delete?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
    connect?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
    update?: CropsUpdateWithWhereUniqueWithoutFarmerInput | CropsUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: CropsUpdateManyWithWhereWithoutFarmerInput | CropsUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: CropsScalarWhereInput | CropsScalarWhereInput[]
  }

  export type OfferUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OfferCreateWithoutBuyerInput, OfferUncheckedCreateWithoutBuyerInput> | OfferCreateWithoutBuyerInput[] | OfferUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutBuyerInput | OfferCreateOrConnectWithoutBuyerInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutBuyerInput | OfferUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OfferCreateManyBuyerInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutBuyerInput | OfferUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutBuyerInput | OfferUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type StorageListingUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StorageListingCreateWithoutOwnerInput, StorageListingUncheckedCreateWithoutOwnerInput> | StorageListingCreateWithoutOwnerInput[] | StorageListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StorageListingCreateOrConnectWithoutOwnerInput | StorageListingCreateOrConnectWithoutOwnerInput[]
    upsert?: StorageListingUpsertWithWhereUniqueWithoutOwnerInput | StorageListingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StorageListingCreateManyOwnerInputEnvelope
    set?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
    disconnect?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
    delete?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
    connect?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
    update?: StorageListingUpdateWithWhereUniqueWithoutOwnerInput | StorageListingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StorageListingUpdateManyWithWhereWithoutOwnerInput | StorageListingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StorageListingScalarWhereInput | StorageListingScalarWhereInput[]
  }

  export type CropsUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<CropsCreateWithoutFarmerInput, CropsUncheckedCreateWithoutFarmerInput> | CropsCreateWithoutFarmerInput[] | CropsUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: CropsCreateOrConnectWithoutFarmerInput | CropsCreateOrConnectWithoutFarmerInput[]
    upsert?: CropsUpsertWithWhereUniqueWithoutFarmerInput | CropsUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: CropsCreateManyFarmerInputEnvelope
    set?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
    disconnect?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
    delete?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
    connect?: CropsWhereUniqueInput | CropsWhereUniqueInput[]
    update?: CropsUpdateWithWhereUniqueWithoutFarmerInput | CropsUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: CropsUpdateManyWithWhereWithoutFarmerInput | CropsUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: CropsScalarWhereInput | CropsScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OfferCreateWithoutBuyerInput, OfferUncheckedCreateWithoutBuyerInput> | OfferCreateWithoutBuyerInput[] | OfferUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutBuyerInput | OfferCreateOrConnectWithoutBuyerInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutBuyerInput | OfferUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OfferCreateManyBuyerInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutBuyerInput | OfferUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutBuyerInput | OfferUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type StorageListingUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StorageListingCreateWithoutOwnerInput, StorageListingUncheckedCreateWithoutOwnerInput> | StorageListingCreateWithoutOwnerInput[] | StorageListingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StorageListingCreateOrConnectWithoutOwnerInput | StorageListingCreateOrConnectWithoutOwnerInput[]
    upsert?: StorageListingUpsertWithWhereUniqueWithoutOwnerInput | StorageListingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StorageListingCreateManyOwnerInputEnvelope
    set?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
    disconnect?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
    delete?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
    connect?: StorageListingWhereUniqueInput | StorageListingWhereUniqueInput[]
    update?: StorageListingUpdateWithWhereUniqueWithoutOwnerInput | StorageListingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StorageListingUpdateManyWithWhereWithoutOwnerInput | StorageListingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StorageListingScalarWhereInput | StorageListingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCropsInput = {
    create?: XOR<UserCreateWithoutCropsInput, UserUncheckedCreateWithoutCropsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCropsInput
    connect?: UserWhereUniqueInput
  }

  export type OfferCreateNestedManyWithoutCropInput = {
    create?: XOR<OfferCreateWithoutCropInput, OfferUncheckedCreateWithoutCropInput> | OfferCreateWithoutCropInput[] | OfferUncheckedCreateWithoutCropInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCropInput | OfferCreateOrConnectWithoutCropInput[]
    createMany?: OfferCreateManyCropInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutCropInput = {
    create?: XOR<OfferCreateWithoutCropInput, OfferUncheckedCreateWithoutCropInput> | OfferCreateWithoutCropInput[] | OfferUncheckedCreateWithoutCropInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCropInput | OfferCreateOrConnectWithoutCropInput[]
    createMany?: OfferCreateManyCropInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCropsNestedInput = {
    create?: XOR<UserCreateWithoutCropsInput, UserUncheckedCreateWithoutCropsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCropsInput
    upsert?: UserUpsertWithoutCropsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCropsInput, UserUpdateWithoutCropsInput>, UserUncheckedUpdateWithoutCropsInput>
  }

  export type OfferUpdateManyWithoutCropNestedInput = {
    create?: XOR<OfferCreateWithoutCropInput, OfferUncheckedCreateWithoutCropInput> | OfferCreateWithoutCropInput[] | OfferUncheckedCreateWithoutCropInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCropInput | OfferCreateOrConnectWithoutCropInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutCropInput | OfferUpsertWithWhereUniqueWithoutCropInput[]
    createMany?: OfferCreateManyCropInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutCropInput | OfferUpdateWithWhereUniqueWithoutCropInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutCropInput | OfferUpdateManyWithWhereWithoutCropInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutCropNestedInput = {
    create?: XOR<OfferCreateWithoutCropInput, OfferUncheckedCreateWithoutCropInput> | OfferCreateWithoutCropInput[] | OfferUncheckedCreateWithoutCropInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCropInput | OfferCreateOrConnectWithoutCropInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutCropInput | OfferUpsertWithWhereUniqueWithoutCropInput[]
    createMany?: OfferCreateManyCropInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutCropInput | OfferUpdateWithWhereUniqueWithoutCropInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutCropInput | OfferUpdateManyWithWhereWithoutCropInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type CropsCreateNestedOneWithoutOffersInput = {
    create?: XOR<CropsCreateWithoutOffersInput, CropsUncheckedCreateWithoutOffersInput>
    connectOrCreate?: CropsCreateOrConnectWithoutOffersInput
    connect?: CropsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOffersInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutOfferInput = {
    create?: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedOneWithoutOfferInput = {
    create?: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferInput
    connect?: TransactionWhereUniqueInput
  }

  export type CropsUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<CropsCreateWithoutOffersInput, CropsUncheckedCreateWithoutOffersInput>
    connectOrCreate?: CropsCreateOrConnectWithoutOffersInput
    upsert?: CropsUpsertWithoutOffersInput
    connect?: CropsWhereUniqueInput
    update?: XOR<XOR<CropsUpdateToOneWithWhereWithoutOffersInput, CropsUpdateWithoutOffersInput>, CropsUncheckedUpdateWithoutOffersInput>
  }

  export type UserUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    upsert?: UserUpsertWithoutOffersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOffersInput, UserUpdateWithoutOffersInput>, UserUncheckedUpdateWithoutOffersInput>
  }

  export type TransactionUpdateOneWithoutOfferNestedInput = {
    create?: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferInput
    upsert?: TransactionUpsertWithoutOfferInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutOfferInput, TransactionUpdateWithoutOfferInput>, TransactionUncheckedUpdateWithoutOfferInput>
  }

  export type TransactionUncheckedUpdateOneWithoutOfferNestedInput = {
    create?: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferInput
    upsert?: TransactionUpsertWithoutOfferInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutOfferInput, TransactionUpdateWithoutOfferInput>, TransactionUncheckedUpdateWithoutOfferInput>
  }

  export type OfferCreateNestedOneWithoutTransactionInput = {
    create?: XOR<OfferCreateWithoutTransactionInput, OfferUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: OfferCreateOrConnectWithoutTransactionInput
    connect?: OfferWhereUniqueInput
  }

  export type OfferUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<OfferCreateWithoutTransactionInput, OfferUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: OfferCreateOrConnectWithoutTransactionInput
    upsert?: OfferUpsertWithoutTransactionInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutTransactionInput, OfferUpdateWithoutTransactionInput>, OfferUncheckedUpdateWithoutTransactionInput>
  }

  export type UserCreateNestedOneWithoutStorageListingsInput = {
    create?: XOR<UserCreateWithoutStorageListingsInput, UserUncheckedCreateWithoutStorageListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStorageListingsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutStorageListingsNestedInput = {
    create?: XOR<UserCreateWithoutStorageListingsInput, UserUncheckedCreateWithoutStorageListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStorageListingsInput
    upsert?: UserUpsertWithoutStorageListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStorageListingsInput, UserUpdateWithoutStorageListingsInput>, UserUncheckedUpdateWithoutStorageListingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CropsCreateWithoutFarmerInput = {
    id?: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl?: string | null
    status?: string
    createdAt?: Date | string
    offers?: OfferCreateNestedManyWithoutCropInput
  }

  export type CropsUncheckedCreateWithoutFarmerInput = {
    id?: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl?: string | null
    status?: string
    createdAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutCropInput
  }

  export type CropsCreateOrConnectWithoutFarmerInput = {
    where: CropsWhereUniqueInput
    create: XOR<CropsCreateWithoutFarmerInput, CropsUncheckedCreateWithoutFarmerInput>
  }

  export type CropsCreateManyFarmerInputEnvelope = {
    data: CropsCreateManyFarmerInput | CropsCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type OfferCreateWithoutBuyerInput = {
    id?: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
    crop: CropsCreateNestedOneWithoutOffersInput
    transaction?: TransactionCreateNestedOneWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutBuyerInput = {
    id?: string
    cropId: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedOneWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutBuyerInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutBuyerInput, OfferUncheckedCreateWithoutBuyerInput>
  }

  export type OfferCreateManyBuyerInputEnvelope = {
    data: OfferCreateManyBuyerInput | OfferCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type StorageListingCreateWithoutOwnerInput = {
    id?: string
    location: string
    capacity: number
    pricePerWeek: number
    cropSuitability: string
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type StorageListingUncheckedCreateWithoutOwnerInput = {
    id?: string
    location: string
    capacity: number
    pricePerWeek: number
    cropSuitability: string
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type StorageListingCreateOrConnectWithoutOwnerInput = {
    where: StorageListingWhereUniqueInput
    create: XOR<StorageListingCreateWithoutOwnerInput, StorageListingUncheckedCreateWithoutOwnerInput>
  }

  export type StorageListingCreateManyOwnerInputEnvelope = {
    data: StorageListingCreateManyOwnerInput | StorageListingCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CropsUpsertWithWhereUniqueWithoutFarmerInput = {
    where: CropsWhereUniqueInput
    update: XOR<CropsUpdateWithoutFarmerInput, CropsUncheckedUpdateWithoutFarmerInput>
    create: XOR<CropsCreateWithoutFarmerInput, CropsUncheckedCreateWithoutFarmerInput>
  }

  export type CropsUpdateWithWhereUniqueWithoutFarmerInput = {
    where: CropsWhereUniqueInput
    data: XOR<CropsUpdateWithoutFarmerInput, CropsUncheckedUpdateWithoutFarmerInput>
  }

  export type CropsUpdateManyWithWhereWithoutFarmerInput = {
    where: CropsScalarWhereInput
    data: XOR<CropsUpdateManyMutationInput, CropsUncheckedUpdateManyWithoutFarmerInput>
  }

  export type CropsScalarWhereInput = {
    AND?: CropsScalarWhereInput | CropsScalarWhereInput[]
    OR?: CropsScalarWhereInput[]
    NOT?: CropsScalarWhereInput | CropsScalarWhereInput[]
    id?: StringFilter<"Crops"> | string
    farmerId?: StringFilter<"Crops"> | string
    name?: StringFilter<"Crops"> | string
    quantity?: FloatFilter<"Crops"> | number
    qualityGrade?: StringFilter<"Crops"> | string
    price?: FloatFilter<"Crops"> | number
    location?: StringFilter<"Crops"> | string
    photoUrl?: StringNullableFilter<"Crops"> | string | null
    status?: StringFilter<"Crops"> | string
    createdAt?: DateTimeFilter<"Crops"> | Date | string
  }

  export type OfferUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutBuyerInput, OfferUncheckedUpdateWithoutBuyerInput>
    create: XOR<OfferCreateWithoutBuyerInput, OfferUncheckedCreateWithoutBuyerInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutBuyerInput, OfferUncheckedUpdateWithoutBuyerInput>
  }

  export type OfferUpdateManyWithWhereWithoutBuyerInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutBuyerInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: StringFilter<"Offer"> | string
    cropId?: StringFilter<"Offer"> | string
    buyerId?: StringFilter<"Offer"> | string
    offerPrice?: FloatFilter<"Offer"> | number
    status?: StringFilter<"Offer"> | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
  }

  export type StorageListingUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StorageListingWhereUniqueInput
    update: XOR<StorageListingUpdateWithoutOwnerInput, StorageListingUncheckedUpdateWithoutOwnerInput>
    create: XOR<StorageListingCreateWithoutOwnerInput, StorageListingUncheckedCreateWithoutOwnerInput>
  }

  export type StorageListingUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StorageListingWhereUniqueInput
    data: XOR<StorageListingUpdateWithoutOwnerInput, StorageListingUncheckedUpdateWithoutOwnerInput>
  }

  export type StorageListingUpdateManyWithWhereWithoutOwnerInput = {
    where: StorageListingScalarWhereInput
    data: XOR<StorageListingUpdateManyMutationInput, StorageListingUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StorageListingScalarWhereInput = {
    AND?: StorageListingScalarWhereInput | StorageListingScalarWhereInput[]
    OR?: StorageListingScalarWhereInput[]
    NOT?: StorageListingScalarWhereInput | StorageListingScalarWhereInput[]
    id?: StringFilter<"StorageListing"> | string
    ownerId?: StringFilter<"StorageListing"> | string
    location?: StringFilter<"StorageListing"> | string
    capacity?: FloatFilter<"StorageListing"> | number
    pricePerWeek?: FloatFilter<"StorageListing"> | number
    cropSuitability?: StringFilter<"StorageListing"> | string
    isAvailable?: BoolFilter<"StorageListing"> | boolean
    createdAt?: DateTimeFilter<"StorageListing"> | Date | string
  }

  export type UserCreateWithoutCropsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
    offers?: OfferCreateNestedManyWithoutBuyerInput
    storageListings?: StorageListingCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCropsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutBuyerInput
    storageListings?: StorageListingUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCropsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCropsInput, UserUncheckedCreateWithoutCropsInput>
  }

  export type OfferCreateWithoutCropInput = {
    id?: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
    buyer: UserCreateNestedOneWithoutOffersInput
    transaction?: TransactionCreateNestedOneWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutCropInput = {
    id?: string
    buyerId: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedOneWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutCropInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutCropInput, OfferUncheckedCreateWithoutCropInput>
  }

  export type OfferCreateManyCropInputEnvelope = {
    data: OfferCreateManyCropInput | OfferCreateManyCropInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCropsInput = {
    update: XOR<UserUpdateWithoutCropsInput, UserUncheckedUpdateWithoutCropsInput>
    create: XOR<UserCreateWithoutCropsInput, UserUncheckedCreateWithoutCropsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCropsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCropsInput, UserUncheckedUpdateWithoutCropsInput>
  }

  export type UserUpdateWithoutCropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutBuyerNestedInput
    storageListings?: StorageListingUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutBuyerNestedInput
    storageListings?: StorageListingUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OfferUpsertWithWhereUniqueWithoutCropInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutCropInput, OfferUncheckedUpdateWithoutCropInput>
    create: XOR<OfferCreateWithoutCropInput, OfferUncheckedCreateWithoutCropInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutCropInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutCropInput, OfferUncheckedUpdateWithoutCropInput>
  }

  export type OfferUpdateManyWithWhereWithoutCropInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutCropInput>
  }

  export type CropsCreateWithoutOffersInput = {
    id?: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl?: string | null
    status?: string
    createdAt?: Date | string
    farmer: UserCreateNestedOneWithoutCropsInput
  }

  export type CropsUncheckedCreateWithoutOffersInput = {
    id?: string
    farmerId: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type CropsCreateOrConnectWithoutOffersInput = {
    where: CropsWhereUniqueInput
    create: XOR<CropsCreateWithoutOffersInput, CropsUncheckedCreateWithoutOffersInput>
  }

  export type UserCreateWithoutOffersInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
    crops?: CropsCreateNestedManyWithoutFarmerInput
    storageListings?: StorageListingCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutOffersInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
    crops?: CropsUncheckedCreateNestedManyWithoutFarmerInput
    storageListings?: StorageListingUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
  }

  export type TransactionCreateWithoutOfferInput = {
    id?: string
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutOfferInput = {
    id?: string
    status?: string
    paymentStatus?: string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutOfferInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput>
  }

  export type CropsUpsertWithoutOffersInput = {
    update: XOR<CropsUpdateWithoutOffersInput, CropsUncheckedUpdateWithoutOffersInput>
    create: XOR<CropsCreateWithoutOffersInput, CropsUncheckedCreateWithoutOffersInput>
    where?: CropsWhereInput
  }

  export type CropsUpdateToOneWithWhereWithoutOffersInput = {
    where?: CropsWhereInput
    data: XOR<CropsUpdateWithoutOffersInput, CropsUncheckedUpdateWithoutOffersInput>
  }

  export type CropsUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutCropsNestedInput
  }

  export type CropsUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutOffersInput = {
    update: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
  }

  export type UserUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropsUpdateManyWithoutFarmerNestedInput
    storageListings?: StorageListingUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropsUncheckedUpdateManyWithoutFarmerNestedInput
    storageListings?: StorageListingUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type TransactionUpsertWithoutOfferInput = {
    update: XOR<TransactionUpdateWithoutOfferInput, TransactionUncheckedUpdateWithoutOfferInput>
    create: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutOfferInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutOfferInput, TransactionUncheckedUpdateWithoutOfferInput>
  }

  export type TransactionUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateWithoutTransactionInput = {
    id?: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
    crop: CropsCreateNestedOneWithoutOffersInput
    buyer: UserCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutTransactionInput = {
    id?: string
    cropId: string
    buyerId: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
  }

  export type OfferCreateOrConnectWithoutTransactionInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutTransactionInput, OfferUncheckedCreateWithoutTransactionInput>
  }

  export type OfferUpsertWithoutTransactionInput = {
    update: XOR<OfferUpdateWithoutTransactionInput, OfferUncheckedUpdateWithoutTransactionInput>
    create: XOR<OfferCreateWithoutTransactionInput, OfferUncheckedCreateWithoutTransactionInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutTransactionInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutTransactionInput, OfferUncheckedUpdateWithoutTransactionInput>
  }

  export type OfferUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crop?: CropsUpdateOneRequiredWithoutOffersNestedInput
    buyer?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutStorageListingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
    crops?: CropsCreateNestedManyWithoutFarmerInput
    offers?: OfferCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutStorageListingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    location: string
    createdAt?: Date | string
    crops?: CropsUncheckedCreateNestedManyWithoutFarmerInput
    offers?: OfferUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutStorageListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStorageListingsInput, UserUncheckedCreateWithoutStorageListingsInput>
  }

  export type UserUpsertWithoutStorageListingsInput = {
    update: XOR<UserUpdateWithoutStorageListingsInput, UserUncheckedUpdateWithoutStorageListingsInput>
    create: XOR<UserCreateWithoutStorageListingsInput, UserUncheckedCreateWithoutStorageListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStorageListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStorageListingsInput, UserUncheckedUpdateWithoutStorageListingsInput>
  }

  export type UserUpdateWithoutStorageListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropsUpdateManyWithoutFarmerNestedInput
    offers?: OfferUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutStorageListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crops?: CropsUncheckedUpdateManyWithoutFarmerNestedInput
    offers?: OfferUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type CropsCreateManyFarmerInput = {
    id?: string
    name: string
    quantity: number
    qualityGrade: string
    price: number
    location: string
    photoUrl?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type OfferCreateManyBuyerInput = {
    id?: string
    cropId: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
  }

  export type StorageListingCreateManyOwnerInput = {
    id?: string
    location: string
    capacity: number
    pricePerWeek: number
    cropSuitability: string
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type CropsUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutCropNestedInput
  }

  export type CropsUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutCropNestedInput
  }

  export type CropsUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    qualityGrade?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crop?: CropsUpdateOneRequiredWithoutOffersNestedInput
    transaction?: TransactionUpdateOneWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateOneWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cropId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageListingUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    pricePerWeek?: FloatFieldUpdateOperationsInput | number
    cropSuitability?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageListingUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    pricePerWeek?: FloatFieldUpdateOperationsInput | number
    cropSuitability?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageListingUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: FloatFieldUpdateOperationsInput | number
    pricePerWeek?: FloatFieldUpdateOperationsInput | number
    cropSuitability?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateManyCropInput = {
    id?: string
    buyerId: string
    offerPrice: number
    status?: string
    createdAt?: Date | string
  }

  export type OfferUpdateWithoutCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutOffersNestedInput
    transaction?: TransactionUpdateOneWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateOneWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutCropInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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