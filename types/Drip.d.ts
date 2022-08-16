import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class Drip extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
    }): Promise<string>;
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
    approve_send(params: {
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    approve_call(params: {
        to: string;
        tokenId: number | BigNumber;
    }): Promise<void>;
    approve: {
        (params: {
            to: string;
            tokenId: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            to: string;
            tokenId: number | BigNumber;
        }) => Promise<void>;
    };
    balanceOf(owner: string): Promise<BigNumber>;
    campaignId(param1: number | BigNumber): Promise<BigNumber>;
    claim_send(id: number | BigNumber): Promise<TransactionReceipt>;
    claim_call(id: number | BigNumber): Promise<void>;
    claim: {
        (id: number | BigNumber): Promise<TransactionReceipt>;
        call: (id: number | BigNumber) => Promise<void>;
    };
    claimMultiple_send(ids: (number | BigNumber)[]): Promise<TransactionReceipt>;
    claimMultiple_call(ids: (number | BigNumber)[]): Promise<void>;
    claimMultiple: {
        (ids: (number | BigNumber)[]): Promise<TransactionReceipt>;
        call: (ids: (number | BigNumber)[]) => Promise<void>;
    };
    claimedAmount(param1: number | BigNumber): Promise<BigNumber>;
    deny_send(user: string): Promise<TransactionReceipt>;
    deny_call(user: string): Promise<void>;
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    endDate(param1: number | BigNumber): Promise<BigNumber>;
    getAllInfo(owner: string): Promise<{
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
    getApproved(tokenId: number | BigNumber): Promise<string>;
    getInfo(id: number | BigNumber): Promise<{
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
    isApprovedForAll(params: {
        owner: string;
        operator: string;
    }): Promise<boolean>;
    isPermitted(param1: string): Promise<BigNumber>;
    lock_send(params: {
        recipient: string;
        token: string;
        amount: number | BigNumber;
        startDate: number | BigNumber;
        endDate: number | BigNumber;
        campaignId: number | BigNumber;
        ownerFrozen: boolean;
    }): Promise<TransactionReceipt>;
    lock_call(params: {
        recipient: string;
        token: string;
        amount: number | BigNumber;
        startDate: number | BigNumber;
        endDate: number | BigNumber;
        campaignId: number | BigNumber;
        ownerFrozen: boolean;
    }): Promise<BigNumber>;
    lock: {
        (params: {
            recipient: string;
            token: string;
            amount: number | BigNumber;
            startDate: number | BigNumber;
            endDate: number | BigNumber;
            campaignId: number | BigNumber;
            ownerFrozen: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            recipient: string;
            token: string;
            amount: number | BigNumber;
            startDate: number | BigNumber;
            endDate: number | BigNumber;
            campaignId: number | BigNumber;
            ownerFrozen: boolean;
        }) => Promise<BigNumber>;
    };
    lockMultiple_send(params: {
        recipient: string[];
        token: string;
        amount: (number | BigNumber)[];
        startDate: number | BigNumber;
        endDate: number | BigNumber;
        campaignId: number | BigNumber;
        ownerFrozen: boolean;
    }): Promise<TransactionReceipt>;
    lockMultiple_call(params: {
        recipient: string[];
        token: string;
        amount: (number | BigNumber)[];
        startDate: number | BigNumber;
        endDate: number | BigNumber;
        campaignId: number | BigNumber;
        ownerFrozen: boolean;
    }): Promise<BigNumber[]>;
    lockMultiple: {
        (params: {
            recipient: string[];
            token: string;
            amount: (number | BigNumber)[];
            startDate: number | BigNumber;
            endDate: number | BigNumber;
            campaignId: number | BigNumber;
            ownerFrozen: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            recipient: string[];
            token: string;
            amount: (number | BigNumber)[];
            startDate: number | BigNumber;
            endDate: number | BigNumber;
            campaignId: number | BigNumber;
            ownerFrozen: boolean;
        }) => Promise<BigNumber[]>;
    };
    maximumAllowedClaimedFunds(id: number | BigNumber): Promise<BigNumber>;
    name(): Promise<string>;
    newOwner(): Promise<string>;
    owner(): Promise<string>;
    ownerFrozen(param1: number | BigNumber): Promise<boolean>;
    ownerOf(tokenId: number | BigNumber): Promise<string>;
    permit_send(user: string): Promise<TransactionReceipt>;
    permit_call(user: string): Promise<void>;
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    safeTransferFrom_send(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    safeTransferFrom_call(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<void>;
    safeTransferFrom: {
        (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
        }) => Promise<void>;
    };
    safeTransferFrom_1_send(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    safeTransferFrom_1_call(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
        data: string;
    }): Promise<void>;
    safeTransferFrom_1: {
        (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
            data: string;
        }) => Promise<void>;
    };
    setApprovalForAll_send(params: {
        operator: string;
        approved: boolean;
    }): Promise<TransactionReceipt>;
    setApprovalForAll_call(params: {
        operator: string;
        approved: boolean;
    }): Promise<void>;
    setApprovalForAll: {
        (params: {
            operator: string;
            approved: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            operator: string;
            approved: boolean;
        }) => Promise<void>;
    };
    startDate(param1: number | BigNumber): Promise<BigNumber>;
    supportsInterface(interfaceId: string): Promise<boolean>;
    symbol(): Promise<string>;
    takeOwnership_send(): Promise<TransactionReceipt>;
    takeOwnership_call(): Promise<void>;
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    timelockCount(): Promise<BigNumber>;
    token(param1: number | BigNumber): Promise<string>;
    tokenByIndex(index: number | BigNumber): Promise<BigNumber>;
    tokenOfOwnerByIndex(params: {
        owner: string;
        index: number | BigNumber;
    }): Promise<BigNumber>;
    tokenURI(tokenId: number | BigNumber): Promise<string>;
    totalAmount(param1: number | BigNumber): Promise<BigNumber>;
    totalSupply(): Promise<BigNumber>;
    transferFrom_send(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom_call(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<void>;
    transferFrom: {
        (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
        }) => Promise<void>;
    };
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
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
