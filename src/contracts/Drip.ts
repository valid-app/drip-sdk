import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./Drip.json";

export interface IDeployParams {name:string;symbol:string}
export interface IApproveParams {to:string;tokenId:number|BigNumber}
export interface IIsApprovedForAllParams {owner:string;operator:string}
export interface ILockParams {recipient:string;token:string;amount:number|BigNumber;startDate:number|BigNumber;endDate:number|BigNumber;campaignId:number|BigNumber;ownerFrozen:boolean}
export interface ILockMultipleParams {recipient:string[];token:string;amount:(number|BigNumber)[];startDate:number|BigNumber;endDate:number|BigNumber;campaignId:number|BigNumber;ownerFrozen:boolean}
export interface ISafeTransferFromParams {from:string;to:string;tokenId:number|BigNumber}
export interface ISafeTransferFrom_1Params {from:string;to:string;tokenId:number|BigNumber;data:string}
export interface ISetApprovalForAllParams {operator:string;approved:boolean}
export interface ITokenOfOwnerByIndexParams {owner:string;index:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;tokenId:number|BigNumber}
export class Drip extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.name,params.symbol]);
    }
    parseApprovalEvent(receipt: TransactionReceipt): Drip.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): Drip.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): Drip.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): Drip.ApprovalForAllEvent{
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): Drip.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): Drip.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): Drip.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): Drip.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDripEvent(receipt: TransactionReceipt): Drip.DripEvent[]{
        return this.parseEvents(receipt, "Drip").map(e=>this.decodeDripEvent(e));
    }
    decodeDripEvent(event: Event): Drip.DripEvent{
        let result = event.data;
        return {
            id: new BigNumber(result.id),
            amount: new BigNumber(result.amount),
            totalClaimed: new BigNumber(result.totalClaimed),
            totalAmount: new BigNumber(result.totalAmount),
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): Drip.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): Drip.LockEvent{
        let result = event.data;
        return {
            id: new BigNumber(result.id),
            recipient: result.recipient,
            token: result.token,
            amount: new BigNumber(result.amount),
            startDate: new BigNumber(result.startDate),
            endDate: new BigNumber(result.endDate),
            campaignId: new BigNumber(result.campaignId),
            ownerFrozen: result.ownerFrozen,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Drip.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): Drip.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): Drip.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): Drip.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Drip.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): Drip.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<void>;
    }
    balanceOf: {
        (owner:string): Promise<BigNumber>;
    }
    campaignId: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    claim: {
        (id:number|BigNumber): Promise<TransactionReceipt>;
        call: (id:number|BigNumber) => Promise<void>;
    }
    claimMultiple: {
        (ids:(number|BigNumber)[]): Promise<TransactionReceipt>;
        call: (ids:(number|BigNumber)[]) => Promise<void>;
    }
    claimedAmount: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    endDate: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    getAllInfo: {
        (owner:string): Promise<{_tokenId:BigNumber[],_token:string[],_unclaimedFunds:BigNumber[],_claimedAmount:BigNumber[],_totalAmount:BigNumber[],_startDate:BigNumber[],_endDate:BigNumber[],_campaignId:BigNumber[],_ownerFrozen:boolean[]}>;
    }
    getApproved: {
        (tokenId:number|BigNumber): Promise<string>;
    }
    getInfo: {
        (id:number|BigNumber): Promise<{_recipient:string,_token:string,_unclaimedFunds:BigNumber,_claimedAmount:BigNumber,_totalAmount:BigNumber,_startDate:BigNumber,_endDate:BigNumber,_campaignId:BigNumber,_ownerFrozen:boolean}>;
    }
    isApprovedForAll: {
        (params: IIsApprovedForAllParams): Promise<boolean>;
    }
    isPermitted: {
        (param1:string): Promise<BigNumber>;
    }
    lock: {
        (params: ILockParams): Promise<TransactionReceipt>;
        call: (params: ILockParams) => Promise<BigNumber>;
    }
    lockMultiple: {
        (params: ILockMultipleParams): Promise<TransactionReceipt>;
        call: (params: ILockMultipleParams) => Promise<BigNumber[]>;
    }
    maximumAllowedClaimedFunds: {
        (id:number|BigNumber): Promise<BigNumber>;
    }
    name: {
        (): Promise<string>;
    }
    newOwner: {
        (): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    ownerFrozen: {
        (param1:number|BigNumber): Promise<boolean>;
    }
    ownerOf: {
        (tokenId:number|BigNumber): Promise<string>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    safeTransferFrom: {
        (params: ISafeTransferFromParams): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams) => Promise<void>;
    }
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params) => Promise<void>;
    }
    setApprovalForAll: {
        (params: ISetApprovalForAllParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams) => Promise<void>;
    }
    startDate: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    supportsInterface: {
        (interfaceId:string): Promise<boolean>;
    }
    symbol: {
        (): Promise<string>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    timelockCount: {
        (): Promise<BigNumber>;
    }
    token: {
        (param1:number|BigNumber): Promise<string>;
    }
    tokenByIndex: {
        (index:number|BigNumber): Promise<BigNumber>;
    }
    tokenOfOwnerByIndex: {
        (params: ITokenOfOwnerByIndexParams): Promise<BigNumber>;
    }
    tokenURI: {
        (tokenId:number|BigNumber): Promise<string>;
    }
    totalAmount: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    private assign(){
        let balanceOf_call = async (owner:string): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[owner]);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let campaignId_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('campaignId',[Utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.campaignId = campaignId_call
        let claimedAmount_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('claimedAmount',[Utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.claimedAmount = claimedAmount_call
        let endDate_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('endDate',[Utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.endDate = endDate_call
        let getAllInfo_call = async (owner:string): Promise<{_tokenId:BigNumber[],_token:string[],_unclaimedFunds:BigNumber[],_claimedAmount:BigNumber[],_totalAmount:BigNumber[],_startDate:BigNumber[],_endDate:BigNumber[],_campaignId:BigNumber[],_ownerFrozen:boolean[]}> => {
            let result = await this.call('getAllInfo',[owner]);
            return {
                _tokenId: result._tokenId.map(e=>new BigNumber(e)),
                _token: result._token,
                _unclaimedFunds: result._unclaimedFunds.map(e=>new BigNumber(e)),
                _claimedAmount: result._claimedAmount.map(e=>new BigNumber(e)),
                _totalAmount: result._totalAmount.map(e=>new BigNumber(e)),
                _startDate: result._startDate.map(e=>new BigNumber(e)),
                _endDate: result._endDate.map(e=>new BigNumber(e)),
                _campaignId: result._campaignId.map(e=>new BigNumber(e)),
                _ownerFrozen: result._ownerFrozen
            };
        }
        this.getAllInfo = getAllInfo_call
        let getApproved_call = async (tokenId:number|BigNumber): Promise<string> => {
            let result = await this.call('getApproved',[Utils.toString(tokenId)]);
            return result;
        }
        this.getApproved = getApproved_call
        let getInfo_call = async (id:number|BigNumber): Promise<{_recipient:string,_token:string,_unclaimedFunds:BigNumber,_claimedAmount:BigNumber,_totalAmount:BigNumber,_startDate:BigNumber,_endDate:BigNumber,_campaignId:BigNumber,_ownerFrozen:boolean}> => {
            let result = await this.call('getInfo',[Utils.toString(id)]);
            return {
                _recipient: result._recipient,
                _token: result._token,
                _unclaimedFunds: new BigNumber(result._unclaimedFunds),
                _claimedAmount: new BigNumber(result._claimedAmount),
                _totalAmount: new BigNumber(result._totalAmount),
                _startDate: new BigNumber(result._startDate),
                _endDate: new BigNumber(result._endDate),
                _campaignId: new BigNumber(result._campaignId),
                _ownerFrozen: result._ownerFrozen
            };
        }
        this.getInfo = getInfo_call
        let isApprovedForAllParams = (params: IIsApprovedForAllParams) => [params.owner,params.operator];
        let isApprovedForAll_call = async (params: IIsApprovedForAllParams): Promise<boolean> => {
            let result = await this.call('isApprovedForAll',isApprovedForAllParams(params));
            return result;
        }
        this.isApprovedForAll = isApprovedForAll_call
        let isPermitted_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('isPermitted',[param1]);
            return new BigNumber(result);
        }
        this.isPermitted = isPermitted_call
        let maximumAllowedClaimedFunds_call = async (id:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('maximumAllowedClaimedFunds',[Utils.toString(id)]);
            return new BigNumber(result);
        }
        this.maximumAllowedClaimedFunds = maximumAllowedClaimedFunds_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let newOwner_call = async (): Promise<string> => {
            let result = await this.call('newOwner');
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let ownerFrozen_call = async (param1:number|BigNumber): Promise<boolean> => {
            let result = await this.call('ownerFrozen',[Utils.toString(param1)]);
            return result;
        }
        this.ownerFrozen = ownerFrozen_call
        let ownerOf_call = async (tokenId:number|BigNumber): Promise<string> => {
            let result = await this.call('ownerOf',[Utils.toString(tokenId)]);
            return result;
        }
        this.ownerOf = ownerOf_call
        let startDate_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('startDate',[Utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.startDate = startDate_call
        let supportsInterface_call = async (interfaceId:string): Promise<boolean> => {
            let result = await this.call('supportsInterface',[interfaceId]);
            return result;
        }
        this.supportsInterface = supportsInterface_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let timelockCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('timelockCount');
            return new BigNumber(result);
        }
        this.timelockCount = timelockCount_call
        let token_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('token',[Utils.toString(param1)]);
            return result;
        }
        this.token = token_call
        let tokenByIndex_call = async (index:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('tokenByIndex',[Utils.toString(index)]);
            return new BigNumber(result);
        }
        this.tokenByIndex = tokenByIndex_call
        let tokenOfOwnerByIndexParams = (params: ITokenOfOwnerByIndexParams) => [params.owner,Utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params: ITokenOfOwnerByIndexParams): Promise<BigNumber> => {
            let result = await this.call('tokenOfOwnerByIndex',tokenOfOwnerByIndexParams(params));
            return new BigNumber(result);
        }
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call
        let tokenURI_call = async (tokenId:number|BigNumber): Promise<string> => {
            let result = await this.call('tokenURI',[Utils.toString(tokenId)]);
            return result;
        }
        this.tokenURI = tokenURI_call
        let totalAmount_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('totalAmount',[Utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.totalAmount = totalAmount_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.to,Utils.toString(params.tokenId)];
        let approve_send = async (params: IApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params));
            return result;
        }
        let approve_call = async (params: IApproveParams): Promise<void> => {
            let result = await this.call('approve',approveParams(params));
            return;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let claim_send = async (id:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('claim',[Utils.toString(id)]);
            return result;
        }
        let claim_call = async (id:number|BigNumber): Promise<void> => {
            let result = await this.call('claim',[Utils.toString(id)]);
            return;
        }
        this.claim = Object.assign(claim_send, {
            call:claim_call
        });
        let claimMultiple_send = async (ids:(number|BigNumber)[]): Promise<TransactionReceipt> => {
            let result = await this.send('claimMultiple',[Utils.toString(ids)]);
            return result;
        }
        let claimMultiple_call = async (ids:(number|BigNumber)[]): Promise<void> => {
            let result = await this.call('claimMultiple',[Utils.toString(ids)]);
            return;
        }
        this.claimMultiple = Object.assign(claimMultiple_send, {
            call:claimMultiple_call
        });
        let deny_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user]);
            return result;
        }
        let deny_call = async (user:string): Promise<void> => {
            let result = await this.call('deny',[user]);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let lockParams = (params: ILockParams) => [params.recipient,params.token,Utils.toString(params.amount),Utils.toString(params.startDate),Utils.toString(params.endDate),Utils.toString(params.campaignId),params.ownerFrozen];
        let lock_send = async (params: ILockParams): Promise<TransactionReceipt> => {
            let result = await this.send('lock',lockParams(params));
            return result;
        }
        let lock_call = async (params: ILockParams): Promise<BigNumber> => {
            let result = await this.call('lock',lockParams(params));
            return new BigNumber(result);
        }
        this.lock = Object.assign(lock_send, {
            call:lock_call
        });
        let lockMultipleParams = (params: ILockMultipleParams) => [params.recipient,params.token,Utils.toString(params.amount),Utils.toString(params.startDate),Utils.toString(params.endDate),Utils.toString(params.campaignId),params.ownerFrozen];
        let lockMultiple_send = async (params: ILockMultipleParams): Promise<TransactionReceipt> => {
            let result = await this.send('lockMultiple',lockMultipleParams(params));
            return result;
        }
        let lockMultiple_call = async (params: ILockMultipleParams): Promise<BigNumber[]> => {
            let result = await this.call('lockMultiple',lockMultipleParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.lockMultiple = Object.assign(lockMultiple_send, {
            call:lockMultiple_call
        });
        let permit_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user]);
            return result;
        }
        let permit_call = async (user:string): Promise<void> => {
            let result = await this.call('permit',[user]);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let safeTransferFromParams = (params: ISafeTransferFromParams) => [params.from,params.to,Utils.toString(params.tokenId)];
        let safeTransferFrom_send = async (params: ISafeTransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('safeTransferFrom',safeTransferFromParams(params));
            return result;
        }
        let safeTransferFrom_call = async (params: ISafeTransferFromParams): Promise<void> => {
            let result = await this.call('safeTransferFrom',safeTransferFromParams(params));
            return;
        }
        this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
            call:safeTransferFrom_call
        });
        let safeTransferFrom_1Params = (params: ISafeTransferFrom_1Params) => [params.from,params.to,Utils.toString(params.tokenId),Utils.stringToBytes(params.data)];
        let safeTransferFrom_1_send = async (params: ISafeTransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('safeTransferFrom',safeTransferFromParams(params));
            return result;
        }
        let safeTransferFrom_1_call = async (params: ISafeTransferFromParams): Promise<void> => {
            let result = await this.call('safeTransferFrom',safeTransferFromParams(params));
            return;
        }
        this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
            call:safeTransferFrom_1_call
        });
        let setApprovalForAllParams = (params: ISetApprovalForAllParams) => [params.operator,params.approved];
        let setApprovalForAll_send = async (params: ISetApprovalForAllParams): Promise<TransactionReceipt> => {
            let result = await this.send('setApprovalForAll',setApprovalForAllParams(params));
            return result;
        }
        let setApprovalForAll_call = async (params: ISetApprovalForAllParams): Promise<void> => {
            let result = await this.call('setApprovalForAll',setApprovalForAllParams(params));
            return;
        }
        this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
            call:setApprovalForAll_call
        });
        let takeOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership');
            return result;
        }
        let takeOwnership_call = async (): Promise<void> => {
            let result = await this.call('takeOwnership');
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,Utils.toString(params.tokenId)];
        let transferFrom_send = async (params: ITransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params));
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams): Promise<void> => {
            let result = await this.call('transferFrom',transferFromParams(params));
            return;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
    }
}
export module Drip{
    export interface ApprovalEvent {owner:string,approved:string,tokenId:BigNumber,_event:Event}
    export interface ApprovalForAllEvent {owner:string,operator:string,approved:boolean,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface DripEvent {id:BigNumber,amount:BigNumber,totalClaimed:BigNumber,totalAmount:BigNumber,_event:Event}
    export interface LockEvent {id:BigNumber,recipient:string,token:string,amount:BigNumber,startDate:BigNumber,endDate:BigNumber,campaignId:BigNumber,ownerFrozen:boolean,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferEvent {from:string,to:string,tokenId:BigNumber,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
}