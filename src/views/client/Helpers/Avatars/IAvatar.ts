import { randArrayValue } from "../Utils"
import { accessoriesType, clotheType, eyeType, eyebrowType, facialHairType, mouthType, skinColor, topType } from './AvatarItems';

export default interface IAvatar {
    topType: string,
    accessoriesType: string,
    facialHairType: string,
    clotheType: string,
    eyeType: string,
    eyebrowType: string,
    mouthType: string,
    skinColor: string
}

export const randomAvatar = (): IAvatar => {
    return {
        topType: randArrayValue(topType),
        accessoriesType: randArrayValue(accessoriesType),
        clotheType: randArrayValue(clotheType),
        eyeType: randArrayValue(eyeType),
        facialHairType: randArrayValue(facialHairType),
        mouthType: randArrayValue(mouthType),
        skinColor: randArrayValue(skinColor),
        eyebrowType: randArrayValue(eyebrowType),
    }
}

export const AvatarDefaultSettings = {
    avatarStyle: 'Transparent',
    hairColor: 'BrownDark',
    clotheColor: 'PastelBlue'
}