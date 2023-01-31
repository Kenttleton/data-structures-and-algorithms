export enum UnitType {
    BUILDER,
    HARVESTER,
    MINER,
    LOGGER
}

export class UnitTokenManager {
    type: UnitType;
    tokens = 0;
    add(tokens: number): number {
        this.tokens += tokens;
        return this.tokens;
    }
    remove(tokens: number): {success: boolean, tokens: number} {
        let success = false;
        if(this.tokens >= tokens) {
            this.tokens -= tokens;
            success = true;
        }
        return {success, tokens: this.tokens}
    }
}

export class Builder extends UnitTokenManager {
    type: UnitType.BUILDER = UnitType.BUILDER;
}

export class Harvester extends UnitTokenManager {
    type: UnitType.HARVESTER = UnitType.HARVESTER;
}

export class Miner extends UnitTokenManager {
    type: UnitType.MINER = UnitType.MINER;
}

export class Logger extends UnitTokenManager {
    type: UnitType.LOGGER = UnitType.LOGGER;
}

export type Unit = Builder | Harvester | Miner | Logger;