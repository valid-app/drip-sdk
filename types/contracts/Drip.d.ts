import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    name: string;
    symbol: string;
}
export interface IApproveParams {
    to: string;
    tokenId: number | BigNumber;
}
export interface IIsApprovedForAllParams {
    owner: string;
    operator: string;
}
export interface ILockParams {
    recipient: string;
    token: string;
    amount: number | BigNumber;
    startDate: number | BigNumber;
    endDate: number | BigNumber;
    campaignId: number | BigNumber;
    ownerFrozen: boolean;
}
export interface ILockMultipleParams {
    recipient: string[];
    token: string;
    amount: (number | BigNumber)[];
    startDate: number | BigNumber;
    endDate: number | BigNumber;
    campaignId: number | BigNumber;
    ownerFrozen: boolean;
}
export interface ISafeTransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export interface ISafeTransferFrom_1Params {
    from: string;
    to: string;
    tokenId: number | BigNumber;
    data: string;
}
export interface ISetApprovalForAllParams {
    operator: string;
    approved: boolean;
}
export interface ITokenOfOwnerByIndexParams {
    owner: string;
    index: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export declare class Drip extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): Drip.ApprovalEvent[];
    decodeApprovalEvent(event: Event): Drip.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): Drip.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): Drip.ApprovalForAllEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): Drip.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Drip.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): Drip.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): Drip.DeauthorizeEvent;
    parseDripEvent(receipt: TransactionReceipt): Drip.DripEvent[];
    decodeDripEvent(event: Event): Drip.DripEvent;
    parseLockEvent(receipt: TransactionReceipt): Drip.LockEvent[];
    decodeLockEvent(event: Event): Drip.LockEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Drip.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Drip.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): Drip.TransferEvent[];
    decodeTransferEvent(event: Event): Drip.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Drip.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Drip.TransferOwnershipEvent;
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<void>;
    };
    balanceOf: {
        (owner: string): Promise<BigNumber>;
    };
    campaignId: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    claim: {
        (id: number | BigNumber): Promise<TransactionReceipt>;
        call: (id: number | BigNumber) => Promise<void>;
    };
    claimMultiple: {
        (ids: (number | BigNumber)[]): Promise<TransactionReceipt>;
        call: (ids: (number | BigNumber)[]) => Promise<void>;
    };
    claimedAmount: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    endDate: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    getAllInfo: {
        (owner: string): Promise<{
            _tokenId: BigNumber[];
            _token: string[];
            _unclaimedFunds: BigNumber[];
            _claimedAmount: BigNumber[];
            _totalAmount: BigNumber[];
            _startDate: BigNumber[];
            _endDate: BigNumber[];
            _campaignId: BigNumber[];
            _ownerFrozen: boolean[];
        }>;
    };
    getApproved: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    getInfo: {
        (id: number | BigNumber): Promise<{
            _recipient: string;
            _token: string;
            _unclaimedFunds: BigNumber;
            _claimedAmount: BigNumber;
            _totalAmount: BigNumber;
            _startDate: BigNumber;
            _endDate: BigNumber;
            _campaignId: BigNumber;
            _ownerFrozen: boolean;
        }>;
    };
    isApprovedForAll: {
        (params: IIsApprovedForAllParams): Promise<boolean>;
    };
    isPermitted: {
        (param1: string): Promise<BigNumber>;
    };
    lock: {
        (params: ILockParams): Promise<TransactionReceipt>;
        call: (params: ILockParams) => Promise<BigNumber>;
    };
    lockMultiple: {
        (params: ILockMultipleParams): Promise<TransactionReceipt>;
        call: (params: ILockMultipleParams) => Promise<BigNumber[]>;
    };
    maximumAllowedClaimedFunds: {
        (id: number | BigNumber): Promise<BigNumber>;
    };
    name: {
        (): Promise<string>;
    };
    newOwner: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    ownerFrozen: {
        (param1: number | BigNumber): Promise<boolean>;
    };
    ownerOf: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    safeTransferFrom: {
        (params: ISafeTransferFromParams): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams) => Promise<void>;
    };
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params) => Promise<void>;
    };
    setApprovalForAll: {
        (params: ISetApprovalForAllParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams) => Promise<void>;
    };
    startDate: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    supportsInterface: {
        (interfaceId: string): Promise<boolean>;
    };
    symbol: {
        (): Promise<string>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    timelockCount: {
        (): Promise<BigNumber>;
    };
    token: {
        (param1: number | BigNumber): Promise<string>;
    };
    tokenByIndex: {
        (index: number | BigNumber): Promise<BigNumber>;
    };
    tokenOfOwnerByIndex: {
        (params: ITokenOfOwnerByIndexParams): Promise<BigNumber>;
    };
    tokenURI: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    totalAmount: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    private assign;
}
export declare module Drip {
    interface ApprovalEvent {
        owner: string;
        approved: string;
        tokenId: BigNumber;
        _event: Event;
    }
    interface ApprovalForAllEvent {
        owner: string;
        operator: string;
        approved: boolean;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DripEvent {
        id: BigNumber;
        amount: BigNumber;
        totalClaimed: BigNumber;
        totalAmount: BigNumber;
        _event: Event;
    }
    interface LockEvent {
        id: BigNumber;
        recipient: string;
        token: string;
        amount: BigNumber;
        startDate: BigNumber;
        endDate: BigNumber;
        campaignId: BigNumber;
        ownerFrozen: boolean;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        tokenId: BigNumber;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
}
