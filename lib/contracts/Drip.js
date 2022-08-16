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
        return this.__deploy([params.name, params.symbol]);
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
    assign() {
        let balanceOf_call = async (owner) => {
            let result = await this.call('balanceOf', [owner]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let campaignId_call = async (param1) => {
            let result = await this.call('campaignId', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.campaignId = campaignId_call;
        let claimedAmount_call = async (param1) => {
            let result = await this.call('claimedAmount', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.claimedAmount = claimedAmount_call;
        let endDate_call = async (param1) => {
            let result = await this.call('endDate', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.endDate = endDate_call;
        let getAllInfo_call = async (owner) => {
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
        };
        this.getAllInfo = getAllInfo_call;
        let getApproved_call = async (tokenId) => {
            let result = await this.call('getApproved', [eth_wallet_1.Utils.toString(tokenId)]);
            return result;
        };
        this.getApproved = getApproved_call;
        let getInfo_call = async (id) => {
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
        };
        this.getInfo = getInfo_call;
        let isApprovedForAllParams = (params) => [params.owner, params.operator];
        let isApprovedForAll_call = async (params) => {
            let result = await this.call('isApprovedForAll', isApprovedForAllParams(params));
            return result;
        };
        this.isApprovedForAll = isApprovedForAll_call;
        let isPermitted_call = async (param1) => {
            let result = await this.call('isPermitted', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.isPermitted = isPermitted_call;
        let maximumAllowedClaimedFunds_call = async (id) => {
            let result = await this.call('maximumAllowedClaimedFunds', [eth_wallet_1.Utils.toString(id)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.maximumAllowedClaimedFunds = maximumAllowedClaimedFunds_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let newOwner_call = async () => {
            let result = await this.call('newOwner');
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let ownerFrozen_call = async (param1) => {
            let result = await this.call('ownerFrozen', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.ownerFrozen = ownerFrozen_call;
        let ownerOf_call = async (tokenId) => {
            let result = await this.call('ownerOf', [eth_wallet_1.Utils.toString(tokenId)]);
            return result;
        };
        this.ownerOf = ownerOf_call;
        let startDate_call = async (param1) => {
            let result = await this.call('startDate', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.startDate = startDate_call;
        let supportsInterface_call = async (interfaceId) => {
            let result = await this.call('supportsInterface', [interfaceId]);
            return result;
        };
        this.supportsInterface = supportsInterface_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let timelockCount_call = async () => {
            let result = await this.call('timelockCount');
            return new eth_wallet_1.BigNumber(result);
        };
        this.timelockCount = timelockCount_call;
        let token_call = async (param1) => {
            let result = await this.call('token', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.token = token_call;
        let tokenByIndex_call = async (index) => {
            let result = await this.call('tokenByIndex', [eth_wallet_1.Utils.toString(index)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.tokenByIndex = tokenByIndex_call;
        let tokenOfOwnerByIndexParams = (params) => [params.owner, eth_wallet_1.Utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params) => {
            let result = await this.call('tokenOfOwnerByIndex', tokenOfOwnerByIndexParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
        let tokenURI_call = async (tokenId) => {
            let result = await this.call('tokenURI', [eth_wallet_1.Utils.toString(tokenId)]);
            return result;
        };
        this.tokenURI = tokenURI_call;
        let totalAmount_call = async (param1) => {
            let result = await this.call('totalAmount', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalAmount = totalAmount_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let approveParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.tokenId)];
        let approve_send = async (params) => {
            let result = await this.send('approve', approveParams(params));
            return result;
        };
        let approve_call = async (params) => {
            let result = await this.call('approve', approveParams(params));
            return;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let claim_send = async (id) => {
            let result = await this.send('claim', [eth_wallet_1.Utils.toString(id)]);
            return result;
        };
        let claim_call = async (id) => {
            let result = await this.call('claim', [eth_wallet_1.Utils.toString(id)]);
            return;
        };
        this.claim = Object.assign(claim_send, {
            call: claim_call
        });
        let claimMultiple_send = async (ids) => {
            let result = await this.send('claimMultiple', [eth_wallet_1.Utils.toString(ids)]);
            return result;
        };
        let claimMultiple_call = async (ids) => {
            let result = await this.call('claimMultiple', [eth_wallet_1.Utils.toString(ids)]);
            return;
        };
        this.claimMultiple = Object.assign(claimMultiple_send, {
            call: claimMultiple_call
        });
        let deny_send = async (user) => {
            let result = await this.send('deny', [user]);
            return result;
        };
        let deny_call = async (user) => {
            let result = await this.call('deny', [user]);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let lockParams = (params) => [params.recipient, params.token, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.endDate), eth_wallet_1.Utils.toString(params.campaignId), params.ownerFrozen];
        let lock_send = async (params) => {
            let result = await this.send('lock', lockParams(params));
            return result;
        };
        let lock_call = async (params) => {
            let result = await this.call('lock', lockParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.lock = Object.assign(lock_send, {
            call: lock_call
        });
        let lockMultipleParams = (params) => [params.recipient, params.token, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.endDate), eth_wallet_1.Utils.toString(params.campaignId), params.ownerFrozen];
        let lockMultiple_send = async (params) => {
            let result = await this.send('lockMultiple', lockMultipleParams(params));
            return result;
        };
        let lockMultiple_call = async (params) => {
            let result = await this.call('lockMultiple', lockMultipleParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.lockMultiple = Object.assign(lockMultiple_send, {
            call: lockMultiple_call
        });
        let permit_send = async (user) => {
            let result = await this.send('permit', [user]);
            return result;
        };
        let permit_call = async (user) => {
            let result = await this.call('permit', [user]);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let safeTransferFromParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)];
        let safeTransferFrom_send = async (params) => {
            let result = await this.send('safeTransferFrom', safeTransferFromParams(params));
            return result;
        };
        let safeTransferFrom_call = async (params) => {
            let result = await this.call('safeTransferFrom', safeTransferFromParams(params));
            return;
        };
        this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
            call: safeTransferFrom_call
        });
        let safeTransferFrom_1Params = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.stringToBytes(params.data)];
        let safeTransferFrom_1_send = async (params) => {
            let result = await this.send('safeTransferFrom', safeTransferFromParams(params));
            return result;
        };
        let safeTransferFrom_1_call = async (params) => {
            let result = await this.call('safeTransferFrom', safeTransferFromParams(params));
            return;
        };
        this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
            call: safeTransferFrom_1_call
        });
        let setApprovalForAllParams = (params) => [params.operator, params.approved];
        let setApprovalForAll_send = async (params) => {
            let result = await this.send('setApprovalForAll', setApprovalForAllParams(params));
            return result;
        };
        let setApprovalForAll_call = async (params) => {
            let result = await this.call('setApprovalForAll', setApprovalForAllParams(params));
            return;
        };
        this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
            call: setApprovalForAll_call
        });
        let takeOwnership_send = async () => {
            let result = await this.send('takeOwnership');
            return result;
        };
        let takeOwnership_call = async () => {
            let result = await this.call('takeOwnership');
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferFromParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)];
        let transferFrom_send = async (params) => {
            let result = await this.send('transferFrom', transferFromParams(params));
            return result;
        };
        let transferFrom_call = async (params) => {
            let result = await this.call('transferFrom', transferFromParams(params));
            return;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
    }
}
exports.Drip = Drip;
