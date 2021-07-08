import {AFF_MODAL,AFF_PHOTO_MODAL} from './types'

export const afficheModal = (payload) => ({
    type: AFF_MODAL,
    payload
})

export const affichePhoto = (payload) => ({
    type: AFF_PHOTO_MODAL,
    payload
})