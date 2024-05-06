export class Product {
    private _sku!: string;
    private _name!:string;
    private _description!: string;
    private _unitPrice!: number;
    private _imageUrl!: string;
    private _active!: boolean;
    private _unitsInStock!: number;
    private _dateCreated!: Date;
    private _lastUpdated!: Date;


	constructor() {
	}
	

    public get name():string{
        return this._name
    }
    
    public set name(value:string){
        this._name=value;
    }
    
    public get sku():string{
        return this._sku
    }

    /**
     * Getter description
     * @return {string}
     */
	public set sku(value: string) {
		this._sku = value;
	}
    /**
     * Getter unitPrice
     * @return {number}
     */
	public get unitPrice(): number {
		return this._unitPrice;
	}

    /**
     * Getter imageUrl
     * @return {string}
     */
	public get imageUrl(): string {
		return this._imageUrl;
	}

    /**
     * Getter active
     * @return {boolean}
     */
	public get active(): boolean {
		return this._active;
	}

    /**
     * Getter unitsInStock
     * @return {number}
     */
	public get unitsInStock(): number {
		return this._unitsInStock;
	}

    /**
     * Getter dateCreated
     * @return {Date}
     */
	public get dateCreated(): Date {
		return this._dateCreated;
	}

    /**
     * Getter lastUpdated
     * @return {Date}
     */
	public get lastUpdated(): Date {
		return this._lastUpdated;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter unitPrice
     * @param {number} value
     */
	public set unitPrice(value: number) {
		this._unitPrice = value;
	}

    /**
     * Setter imageUrl
     * @param {string} value
     */
	public set imageUrl(value: string) {
		this._imageUrl = value;
	}

    /**
     * Setter active
     * @param {boolean} value
     */
	public set active(value: boolean) {
		this._active = value;
	}

    /**
     * Setter unitsInStock
     * @param {number} value
     */
	public set unitsInStock(value: number) {
		this._unitsInStock = value;
	}

    /**
     * Setter dateCreated
     * @param {Date} value
     */
	public set dateCreated(value: Date) {
		this._dateCreated = value;
	}

    /**
     * Setter lastUpdated
     * @param {Date} value
     */
	public set lastUpdated(value: Date) {
		this._lastUpdated = value;
	}

}
