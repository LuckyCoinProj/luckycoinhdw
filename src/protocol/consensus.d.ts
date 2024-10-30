/// <reference types="node" />
/// <reference types="node" />
import BN from "bn.js";
export declare const COIN = 100000000;
export declare const MAX_MONEY: number;
export declare const BASE_REWARD: number;
export declare const HALF_REWARD: number;
export declare const MAX_BLOCK_SIZE = 6000000;
export declare const MAX_RAW_BLOCK_SIZE = 8000000;
export declare const MAX_BLOCK_WEIGHT = 8000000;
export declare const MAX_BLOCK_SIGOPS: number;
export declare const MAX_BLOCK_SIGOPS_COST = 80000;
export declare const MEDIAN_TIMESPAN = 11;
export declare const VERSION_TOP_BITS = 536870912;
export declare const VERSION_TOP_MASK = 3758096384;
export declare const COINBASE_MATURITY = 100;
export declare const WITNESS_SCALE_FACTOR = 4;
export declare const LOCKTIME_THRESHOLD = 500000000;
export declare const SEQUENCE_DISABLE_FLAG: number;
export declare const SEQUENCE_TYPE_FLAG: number;
export declare const SEQUENCE_GRANULARITY = 9;
export declare const SEQUENCE_MASK = 65535;
export declare const MAX_SCRIPT_SIZE = 100000;
export declare const MAX_SCRIPT_STACK = 2000;
export declare const MAX_SCRIPT_PUSH = 1897;
export declare const MAX_SCRIPT_OPS = 201;
export declare const MAX_MULTISIG_PUBKEYS = 20;
export declare const BIP16_TIME = 1333238400;
export declare const ZERO_HASH: Buffer;
export declare const ZERO_FALCON_HASH: Buffer;
export declare function fromCompact(compact: number): BN;
export declare function toCompact(num: BN): number;
export declare function verifyPOW(hash: string, bits: number): boolean;
export declare function getReward(height: number, interval: number): number;
export declare function hasBit(version: number, bit: number): boolean;
