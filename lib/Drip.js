"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drip = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Drip_json_1 = __importDefault(require("./Drip.json"));
class Drip extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Drip_json_1.default.abi, Drip_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.name, params.symbol);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt) {
        return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDripEvent(receipt) {
        return this.parseEvents(receipt, "Drip").map(e => this.decodeDripEvent(e));
    }
    decodeDripEvent(event) {
        let result = event.data;
        return {
            id: new eth_wallet_1.BigNumber(result.id),
            amount: new eth_wallet_1.BigNumber(result.amount),
            totalClaimed: new eth_wallet_1.BigNumber(result.totalClaimed),
            totalAmount: new eth_wallet_1.BigNumber(result.totalAmount),
            _event: event
        };
    }
    parseLockEvent(receipt) {
        return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
    }
    decodeLockEvent(event) {
        let result = event.data;
        return {
            id: new eth_wallet_1.BigNumber(result.id),
            recipient: result.recipient,
            token: result.token,
            amount: new eth_wallet_1.BigNumber(result.amount),
            startDate: new eth_wallet_1.BigNumber(result.startDate),
            endDate: new eth_wallet_1.BigNumber(result.endDate),
            campaignId: new eth_wallet_1.BigNumber(result.campaignId),
            ownerFrozen: result.ownerFrozen,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    async approve_send(params) {
        let result = await this.send('approve', [params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return result;
    }
    async approve_call(params) {
        let result = await this.call('approve', [params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return;
    }
    async balanceOf(owner) {
        let result = await this.call('balanceOf', [owner]);
        return new eth_wallet_1.BigNumber(result);
    }
    async campaignId(param1) {
        let result = await this.call('campaignId', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async claim_send(id) {
        let result = await this.send('claim', [eth_wallet_1.Utils.toString(id)]);
        return result;
    }
    async claim_call(id) {
        let result = await this.call('claim', [eth_wallet_1.Utils.toString(id)]);
        return;
    }
    async claimMultiple_send(ids) {
        let result = await this.send('claimMultiple', [eth_wallet_1.Utils.toString(ids)]);
        return result;
    }
    async claimMultiple_call(ids) {
        let result = await this.call('claimMultiple', [eth_wallet_1.Utils.toString(ids)]);
        return;
    }
    async claimedAmount(param1) {
        let result = await this.call('claimedAmount', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async deny_send(user) {
        let result = await this.send('deny', [user]);
        return result;
    }
    async deny_call(user) {
        let result = await this.call('deny', [user]);
        return;
    }
    async endDate(param1) {
        let result = await this.call('endDate', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAllInfo(owner) {
        let result = await this.call('getAllInfo', [owner]);
        return {
            _tokenId: result._tokenId.map(e => new eth_wallet_1.BigNumber(e)),
            _token: result._token,
            _unclaimedFunds: result._unclaimedFunds.map(e => new eth_wallet_1.BigNumber(e)),
            _claimedAmount: result._claimedAmount.map(e => new eth_wallet_1.BigNumber(e)),
            _totalAmount: result._totalAmount.map(e => new eth_wallet_1.BigNumber(e)),
            _startDate: result._startDate.map(e => new eth_wallet_1.BigNumber(e)),
            _endDate: result._endDate.map(e => new eth_wallet_1.BigNumber(e)),
            _campaignId: result._campaignId.map(e => new eth_wallet_1.BigNumber(e)),
            _ownerFrozen: result._ownerFrozen
        };
    }
    async getApproved(tokenId) {
        let result = await this.call('getApproved', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async getInfo(id) {
        let result = await this.call('getInfo', [eth_wallet_1.Utils.toString(id)]);
        return {
            _recipient: result._recipient,
            _token: result._token,
            _unclaimedFunds: new eth_wallet_1.BigNumber(result._unclaimedFunds),
            _claimedAmount: new eth_wallet_1.BigNumber(result._claimedAmount),
            _totalAmount: new eth_wallet_1.BigNumber(result._totalAmount),
            _startDate: new eth_wallet_1.BigNumber(result._startDate),
            _endDate: new eth_wallet_1.BigNumber(result._endDate),
            _campaignId: new eth_wallet_1.BigNumber(result._campaignId),
            _ownerFrozen: result._ownerFrozen
        };
    }
    async isApprovedForAll(params) {
        let result = await this.call('isApprovedForAll', [params.owner, params.operator]);
        return result;
    }
    async isPermitted(param1) {
        let result = await this.call('isPermitted', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async lock_send(params) {
        let result = await this.send('lock', [params.recipient, params.token, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.endDate), eth_wallet_1.Utils.toString(params.campaignId), params.ownerFrozen]);
        return result;
    }
    async lock_call(params) {
        let result = await this.call('lock', [params.recipient, params.token, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.endDate), eth_wallet_1.Utils.toString(params.campaignId), params.ownerFrozen]);
        return new eth_wallet_1.BigNumber(result);
    }
    async lockMultiple_send(params) {
        let result = await this.send('lockMultiple', [params.recipient, params.token, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.endDate), eth_wallet_1.Utils.toString(params.campaignId), params.ownerFrozen]);
        return result;
    }
    async lockMultiple_call(params) {
        let result = await this.call('lockMultiple', [params.recipient, params.token, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.endDate), eth_wallet_1.Utils.toString(params.campaignId), params.ownerFrozen]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async maximumAllowedClaimedFunds(id) {
        let result = await this.call('maximumAllowedClaimedFunds', [eth_wallet_1.Utils.toString(id)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async name() {
        let result = await this.call('name');
        return result;
    }
    async newOwner() {
        let result = await this.call('newOwner');
        return result;
    }
    async owner() {
        let result = await this.call('owner');
        return result;
    }
    async ownerFrozen(param1) {
        let result = await this.call('ownerFrozen', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async ownerOf(tokenId) {
        let result = await this.call('ownerOf', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async permit_send(user) {
        let result = await this.send('permit', [user]);
        return result;
    }
    async permit_call(user) {
        let result = await this.call('permit', [user]);
        return;
    }
    async safeTransferFrom_send(params) {
        let result = await this.send('safeTransferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return result;
    }
    async safeTransferFrom_call(params) {
        let result = await this.call('safeTransferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return;
    }
    async safeTransferFrom_1_send(params) {
        let result = await this.send('safeTransferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId), params.data]);
        return result;
    }
    async safeTransferFrom_1_call(params) {
        let result = await this.call('safeTransferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId), params.data]);
        return;
    }
    async setApprovalForAll_send(params) {
        let result = await this.send('setApprovalForAll', [params.operator, params.approved]);
        return result;
    }
    async setApprovalForAll_call(params) {
        let result = await this.call('setApprovalForAll', [params.operator, params.approved]);
        return;
    }
    async startDate(param1) {
        let result = await this.call('startDate', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async supportsInterface(interfaceId) {
        let result = await this.call('supportsInterface', [interfaceId]);
        return result;
    }
    async symbol() {
        let result = await this.call('symbol');
        return result;
    }
    async takeOwnership_send() {
        let result = await this.send('takeOwnership');
        return result;
    }
    async takeOwnership_call() {
        let result = await this.call('takeOwnership');
        return;
    }
    async timelockCount() {
        let result = await this.call('timelockCount');
        return new eth_wallet_1.BigNumber(result);
    }
    async token(param1) {
        let result = await this.call('token', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async tokenByIndex(index) {
        let result = await this.call('tokenByIndex', [eth_wallet_1.Utils.toString(index)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async tokenOfOwnerByIndex(params) {
        let result = await this.call('tokenOfOwnerByIndex', [params.owner, eth_wallet_1.Utils.toString(params.index)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async tokenURI(tokenId) {
        let result = await this.call('tokenURI', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async totalAmount(param1) {
        let result = await this.call('totalAmount', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async totalSupply() {
        let result = await this.call('totalSupply');
        return new eth_wallet_1.BigNumber(result);
    }
    async transferFrom_send(params) {
        let result = await this.send('transferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return result;
    }
    async transferFrom_call(params) {
        let result = await this.call('transferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return;
    }
    async transferOwnership_send(newOwner) {
        let result = await this.send('transferOwnership', [newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner) {
        let result = await this.call('transferOwnership', [newOwner]);
        return;
    }
    assign() {
        this.approve = Object.assign(this.approve_send, { call: this.approve_call });
        this.claim = Object.assign(this.claim_send, { call: this.claim_call });
        this.claimMultiple = Object.assign(this.claimMultiple_send, { call: this.claimMultiple_call });
        this.deny = Object.assign(this.deny_send, { call: this.deny_call });
        this.lock = Object.assign(this.lock_send, { call: this.lock_call });
        this.lockMultiple = Object.assign(this.lockMultiple_send, { call: this.lockMultiple_call });
        this.permit = Object.assign(this.permit_send, { call: this.permit_call });
        this.safeTransferFrom = Object.assign(this.safeTransferFrom_send, { call: this.safeTransferFrom_call });
        this.safeTransferFrom_1 = Object.assign(this.safeTransferFrom_1_send, { call: this.safeTransferFrom_1_call });
        this.setApprovalForAll = Object.assign(this.setApprovalForAll_send, { call: this.setApprovalForAll_call });
        this.takeOwnership = Object.assign(this.takeOwnership_send, { call: this.takeOwnership_call });
        this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
        this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
    }
}
exports.Drip = Drip;
