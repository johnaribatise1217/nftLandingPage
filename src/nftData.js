import p1 from './Images/nft9.jpg'
import p2 from './Images/nft8.jpg'
import p3 from './Images/nft7.jpg'
import m1 from './Images/m1.jpg'
import m2 from './Images/m2.jpg'
import m3 from './Images/m3.jpg'
import m4 from './Images/m4.jpg'
import art1 from './Images/art1.png'
import art2 from './Images/art2.jpg'
import art3 from './Images/a3.jpg'
import d1 from './Images/3d.jpg'
import d2 from './Images/3d2.jpg'

const getRandomNFTId = () => {
    return Math.floor(Math.random() * 900) + 100
}

const data = [
    {
        id: 1,
        img: p1,
        title:'CLONE-34',
        category : 'Photography',
        nftId : getRandomNFTId()
    },
    {
        id: 2,
        img: p2,
        title:'STEELWOMAN',
        category : 'Photography',
        nftId : getRandomNFTId()
    },
    {
        id: 3,
        img: p3,
        title:'PHOTOKID',
        category : 'Photography',
        nftId : getRandomNFTId()
    },
    {
        id: 4,
        img: m1,
        title:'VESSELEARS',
        category : 'Music',
        nftId : getRandomNFTId()
    },
    {
        id: 5,
        img: m2,
        title:'MUSICSTARS',
        category : 'Music',
        nftId : getRandomNFTId()
    },
    {
        id: 6,
        img: m3,
        title:'NFTDANCE',
        category : 'Music',
        nftId : getRandomNFTId()
    },
    {
        id: 7,
        img: m4,
        title:'RIHANFT',
        category : 'Music',
        nftId : getRandomNFTId()
    },
    {
        id: 8,
        img: art1,
        title:'VESSEL',
        category : 'Art',
        nftId : getRandomNFTId()
    },
    {
        id: 9,
        img: art2,
        title:'ANTIDOTE',
        category : 'Art',
        nftId : getRandomNFTId()
    },
    {
        id: 10,
        img: art3,
        title:'MONKEY-X',
        category : 'Art',
        nftId : getRandomNFTId()
    },
    {
        id: 11,
        img: d1,
        title:'SNAPGOD',
        category : '3D Art',
        nftId : getRandomNFTId()
    },
    {
        id: 12,
        img: d2,
        title:'ANTIDOTE-S',
        category : '3D Art',
        nftId : getRandomNFTId()
    }
]

export default data;