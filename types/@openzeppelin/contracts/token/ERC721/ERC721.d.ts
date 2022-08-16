import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class ERC721 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
    }): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ERC721.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ERC721.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): ERC721.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): ERC721.ApprovalForAllEvent;
    parseTransferEvent(receipt: TransactionReceipt): ERC721.TransferEvent[];
    decodeTransferEvent(event: Event): ERC721.TransferEvent;
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
    getApproved(tokenId: number | BigNumber): Promise<string>;
    isApprovedForAll(params: {
        owner: string;
        operator: string;
    }): Promise<boolean>;
    name(): Promise<string>;
    ownerOf(tokenId: number | BigNumber): Promise<string>;
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
    supportsInterface(interfaceId: string): Promise<boolean>;
    symbol(): Promise<string>;
    tokenURI(tokenId: number | BigNumber): Promise<string>;
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
    private assign;
}
export declare module ERC721 {
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
    interface TransferEvent {
        from: string;
        to: string;
        tokenId: BigNumber;
        _event: Event;
    }
}
