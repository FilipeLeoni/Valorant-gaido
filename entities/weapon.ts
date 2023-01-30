export interface DamageStatus {
    headDamage: number
    bodyDamage: number
    legDamage: number
}
export interface DamageRanges {
    headDamage: number
    bodyDamage: number
    legDamage: number
}
export interface WeaponStats {
    fireRate: number
    magazineSize: number
    reloadTimeSeconds: number
    damageRanges: DamageRanges[]
}
export interface ShopData {
    category: string
    cost: number 
}
export interface Weapon {
    uuid: string
    displayName: string
    displayIcon: string
    shopData?: ShopData
    weaponStats?: WeaponStats
    damageStatus: DamageStatus[]

}
