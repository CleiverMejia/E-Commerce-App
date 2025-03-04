export default interface Payment {
    name: string,
    lastName: string,
    country: string,
    city: string,
    address: string,
    bankNumber: number,
    cvc: string,
    expiration: string,
    total: number
}