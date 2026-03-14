export type EquipmentDto = {
    id: string,
    name: string,
    price: number,
    description: string,
    image_url: string,
    category: string,
    muscle_group: string[],
    level: string
}

export type EquipmentViewModel = {
    id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    category: string,
    muscleGroup: string[],
    level: string
}