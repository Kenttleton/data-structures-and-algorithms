export enum ResourceType {
    HOME,
    FOOD,
    MINERAL,
    TIMBER,
    PERSON
}

export class ResourceTokenManager {
    type: ResourceType;
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
        return {success, tokens: this.tokens};
    }
}

export class Person extends ResourceTokenManager {
    type: ResourceType.PERSON = ResourceType.PERSON;
    max: number = 0;
    increaseMax(tokens: number): number {
        this.max += tokens;
        this.tokens += tokens;
        return this.max;
    }
    decreaseMax(tokens: number): {success: boolean, max: number} {
        let success = false;
        if (this.max >= tokens) {
            this.max -= tokens;
            if(this.max < this.tokens) {
                this.refill();
            }
            success = true;
        }
        return { success, max: this.max };
    }
    refill(): void {
        this.tokens = this.max;
    }
}

export class Home extends ResourceTokenManager {
    type: ResourceType.HOME = ResourceType.HOME;
    people: Person = new Person();
    capacity: number = 4;
    add(tokens: number): number {
        this.tokens += tokens;
        this.people.increaseMax(tokens * this.capacity);
        return this.tokens;
    }
    remove(tokens: number): {success: boolean, tokens: number} {
        let success = false;
        if (this.tokens >= tokens) {
            this.tokens -= tokens;
            this.people.decreaseMax(tokens * this.capacity);
            success = true;
        }
        return {success, tokens: this.tokens};
    }
}

export class Food extends ResourceTokenManager {
    type: ResourceType.FOOD = ResourceType.FOOD;
}

export class Mineral extends ResourceTokenManager {
    type: ResourceType.MINERAL = ResourceType.MINERAL;
}

export class Timber extends ResourceTokenManager {
    type: ResourceType.TIMBER = ResourceType.TIMBER;
}

export type Resource = Home | Food | Mineral | Timber; 