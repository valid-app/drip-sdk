"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const ERC721_json_1 = __importDefault(require("./ERC721.json"));
class ERC721 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ERC721_json_1.default.abi, ERC721_json_1.default.bytecode);
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
    async getApproved(tokenId) {
        let result = await this.call('getApproved', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async isApprovedForAll(params) {
        let result = await this.call('isApprovedForAll', [params.owner, params.operator]);
        return result;
    }
    async name() {
        let result = await this.call('name');
        return result;
    }
    async ownerOf(tokenId) {
        let result = await this.call('ownerOf', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
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
    async supportsInterface(interfaceId) {
        let result = await this.call('supportsInterface', [interfaceId]);
        return result;
    }
    async symbol() {
        let result = await this.call('symbol');
        return result;
    }
    async tokenURI(tokenId) {
        let result = await this.call('tokenURI', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async transferFrom_send(params) {
        let result = await this.send('transferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return result;
    }
    async transferFrom_call(params) {
        let result = await this.call('transferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return;
    }
    assign() {
        this.approve = Object.assign(this.approve_send, { call: this.approve_call });
        this.safeTransferFrom = Object.assign(this.safeTransferFrom_send, { call: this.safeTransferFrom_call });
        this.safeTransferFrom_1 = Object.assign(this.safeTransferFrom_1_send, { call: this.safeTransferFrom_1_call });
        this.setApprovalForAll = Object.assign(this.setApprovalForAll_send, { call: this.setApprovalForAll_call });
        this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
    }
}
exports.ERC721 = ERC721;
