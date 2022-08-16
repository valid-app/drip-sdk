"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Authorization_json_1 = __importDefault(require("./Authorization.json"));
class Authorization extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Authorization_json_1.default.abi, Authorization_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this._deploy();
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
    async deny_send(user) {
        let result = await this.send('deny', [user]);
        return result;
    }
    async deny_call(user) {
        let result = await this.call('deny', [user]);
        return;
    }
    async isPermitted(param1) {
        let result = await this.call('isPermitted', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async newOwner() {
        let result = await this.call('newOwner');
        return result;
    }
    async owner() {
        let result = await this.call('owner');
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
    async takeOwnership_send() {
        let result = await this.send('takeOwnership');
        return result;
    }
    async takeOwnership_call() {
        let result = await this.call('takeOwnership');
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
        this.deny = Object.assign(this.deny_send, { call: this.deny_call });
        this.permit = Object.assign(this.permit_send, { call: this.permit_call });
        this.takeOwnership = Object.assign(this.takeOwnership_send, { call: this.takeOwnership_call });
        this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
    }
}
exports.Authorization = Authorization;
