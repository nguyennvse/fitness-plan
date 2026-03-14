export type FoodDtoModel = {
    id: string
    name: string
    portion: string
    calories: number
    protein_g: number
    fat_g: number,
    carb_g: number,
    meal_type: string[],
    tags: number[],
    image_url: string
}

export type FoodViewModel = {
    id: string
    name: string
    portion: string
    calories: number
    protein: number
    fat: number,
    carb: number,
    meal: string[],
    tags: number[],
    image: string
}